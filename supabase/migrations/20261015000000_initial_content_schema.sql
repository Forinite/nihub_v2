create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table public.site_stats (
  id uuid primary key default gen_random_uuid(),
  section text not null check (section in (
    'home_hero',
    'home_impact',
    'community_hero',
    'community_impact',
    'events_hero',
    'events_impact'
  )),
  label text not null,
  value text not null,
  note text,
  sort_order integer not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.communities (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  icon_key text not null,
  catch_phrase text not null,
  abbreviation text not null,
  main_concept text not null,
  description text not null,
  keywords text[] not null default '{}',
  member_count text not null,
  meeting_frequency text not null,
  partner_label text,
  join_url text not null,
  details_url text not null,
  is_featured boolean not null default false,
  sort_order integer not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.events (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  icon_key text not null,
  status text not null,
  event_type text not null,
  description text not null,
  starts_at timestamptz,
  ends_at timestamptz,
  date_label text not null,
  starts_label text not null,
  venue text not null,
  seats integer,
  color_rgb smallint[] not null check (
    cardinality(color_rgb) = 3
    and color_rgb[1] between 0 and 255
    and color_rgb[2] between 0 and 255
    and color_rgb[3] between 0 and 255
  ),
  keywords text[] not null default '{}',
  registration_url text not null,
  details_url text not null,
  is_headline boolean not null default false,
  is_featured boolean not null default false,
  sort_order integer not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.trainings (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  icon_key text not null,
  description text not null,
  status text not null,
  starts_at timestamptz,
  date_label text not null,
  duration text not null,
  venue text not null,
  partner_label text,
  cost text not null,
  color_rgb smallint[] not null check (
    cardinality(color_rgb) = 3
    and color_rgb[1] between 0 and 255
    and color_rgb[2] between 0 and 255
    and color_rgb[3] between 0 and 255
  ),
  apply_url text not null,
  details_url text not null,
  sort_order integer not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.services (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  label text not null,
  icon_key text not null,
  main_concept text not null,
  description text not null,
  color_rgb smallint[] not null check (
    cardinality(color_rgb) = 3
    and color_rgb[1] between 0 and 255
    and color_rgb[2] between 0 and 255
    and color_rgb[3] between 0 and 255
  ),
  catch_phrase text not null,
  keywords text[] not null default '{}',
  apply_label text not null,
  apply_url text not null,
  details_url text not null,
  sort_order integer not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  statement text not null,
  image_path text not null,
  social_links text[] not null default '{}',
  sort_order integer not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.achievements (
  id uuid primary key default gen_random_uuid(),
  year integer not null,
  title text not null,
  description text not null,
  icon_key text not null,
  sort_order integer not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.home_programs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  status text not null,
  description text not null,
  image_path text not null,
  venue text not null,
  date_label text not null,
  link text not null,
  sort_order integer not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  title text not null,
  quote text not null,
  sort_order integer not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  image_path text,
  sort_order integer not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.content_items (
  id uuid primary key default gen_random_uuid(),
  section text not null check (section in (
    'about_statements',
    'core_pillars',
    'service_process',
    'service_benefits',
    'awards'
  )),
  title text not null,
  description text,
  icon_key text,
  image_path text,
  metadata jsonb not null default '{}',
  sort_order integer not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index site_stats_published_order_idx
  on public.site_stats (section, sort_order)
  where is_published;
create index communities_published_order_idx
  on public.communities (sort_order)
  where is_published;
create index communities_featured_order_idx
  on public.communities (sort_order)
  where is_published and is_featured;
create index events_published_order_idx
  on public.events (sort_order)
  where is_published;
create index events_headline_order_idx
  on public.events (sort_order)
  where is_published and is_headline;
create index trainings_published_order_idx
  on public.trainings (sort_order)
  where is_published;
create index services_published_order_idx
  on public.services (sort_order)
  where is_published;
create index team_members_published_order_idx
  on public.team_members (sort_order)
  where is_published;
create index achievements_published_order_idx
  on public.achievements (sort_order)
  where is_published;
create index home_programs_published_order_idx
  on public.home_programs (sort_order)
  where is_published;
create index testimonials_published_order_idx
  on public.testimonials (sort_order)
  where is_published;
create index partners_published_order_idx
  on public.partners (sort_order)
  where is_published;
create index content_items_section_order_idx
  on public.content_items (section, sort_order)
  where is_published;

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
      'create trigger set_updated_at before update on public.%I for each row execute function public.set_updated_at()',
      table_name
    );
    execute format('alter table public.%I enable row level security', table_name);
    execute format('revoke all on public.%I from anon, authenticated', table_name);
    execute format('grant select on public.%I to anon, authenticated', table_name);
    execute format(
      'create policy "Public can read published content" on public.%I for select to anon, authenticated using (is_published)',
      table_name
    );
  end loop;
end
$$;
