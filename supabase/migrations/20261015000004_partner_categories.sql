alter table public.partners
  add column if not exists partner_type text not null default 'general'
  check (partner_type in ('general', 'service'));

drop index if exists public.partners_name_key;

create unique index if not exists partners_name_type_key
  on public.partners (name, partner_type);
