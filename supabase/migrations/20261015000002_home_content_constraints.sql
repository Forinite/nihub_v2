create unique index site_stats_section_label_key
  on public.site_stats (section, label);

create unique index home_programs_title_key
  on public.home_programs (title);

create unique index testimonials_name_title_key
  on public.testimonials (name, title);

create unique index partners_name_key
  on public.partners (name);

create unique index content_items_section_title_key
  on public.content_items (section, title);
