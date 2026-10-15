create unique index team_members_image_path_key
  on public.team_members (image_path);

create unique index achievements_year_title_key
  on public.achievements (year, title);
