create table if not exists public.admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;
revoke all on public.admin_users from anon, authenticated;
grant select on public.admin_users to authenticated;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.admin_users
    where user_id = (select auth.uid())
  );
$$;

revoke all on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;

drop policy if exists "Admins can read their own admin membership"
  on public.admin_users;
create policy "Admins can read their own admin membership"
  on public.admin_users
  for select
  to authenticated
  using (user_id = (select auth.uid()));

do $$
declare
  table_name text;
begin
  foreach table_name in array array[
    'site_stats',
    'communities',
    'events',
    'trainings',
    'services',
    'team_members',
    'achievements',
    'home_programs',
    'testimonials',
    'partners',
    'content_items'
  ]
  loop
    execute format(
      'grant insert, update, delete on public.%I to authenticated',
      table_name
    );
    execute format(
      'drop policy if exists "Admins can manage content" on public.%I',
      table_name
    );
    execute format(
      'create policy "Admins can manage content" on public.%I for all to authenticated using (public.is_admin()) with check (public.is_admin())',
      table_name
    );
  end loop;
end
$$;
