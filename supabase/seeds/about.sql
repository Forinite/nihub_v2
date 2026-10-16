insert into public.achievements (
  year,
  title,
  description,
  icon_key,
  sort_order,
  is_published
)
select
  seed.year,
  seed.title,
  seed.description,
  seed.icon_key,
  seed.sort_order,
  true
from jsonb_to_recordset(
  $achievements$
  [
    {
      "year": 2023,
      "title": "Huawei ICT Competition — National Winners",
      "description": "NIHUB students claimed first place at the Huawei ICT Competition Nigeria finals, competing against over 200 universities nationwide.",
      "icon_key": "PurpleMedalIcon",
      "sort_order": 0
    },
    {
      "year": 2022,
      "title": "CISCO Networking Academy Gold Status",
      "description": "Achieved Gold Academy status, placing NIHUB among the top CISCO-certified institutions on the African continent.",
      "icon_key": "PurpleBoltIcon",
      "sort_order": 1
    },
    {
      "year": 2023,
      "title": "Google Developer Student Club Recognition",
      "description": "NIHUB's GDSC chapter was recognised as one of the most active and impactful chapters across West Africa.",
      "icon_key": "PurpleStarIcon",
      "sort_order": 2
    },
    {
      "year": 2022,
      "title": "HNG Internship — Top Finishers",
      "description": "Multiple NIHUB community members ranked in the top 50 of the highly competitive HNG Internship programme cohort.",
      "icon_key": "StatUpIcon",
      "sort_order": 3
    },
    {
      "year": 2021,
      "title": "Matlab & Simulink Student Ambassador",
      "description": "Officially recognised by MathWorks as a campus ambassador hub, enabling access to industry tools for 500+ students.",
      "icon_key": "BookIcon",
      "sort_order": 4
    },
    {
      "year": 2020,
      "title": "MTN Foundation Digital Skills Grant",
      "description": "Awarded a digital skills grant that funded six months of free training for over 300 underserved students in Niger State.",
      "icon_key": "ChipIcon",
      "sort_order": 5
    }
  ]
  $achievements$::jsonb
) as seed(
  year integer,
  title text,
  description text,
  icon_key text,
  sort_order integer
)
on conflict (year, title) do update set
  description = excluded.description,
  icon_key = excluded.icon_key,
  sort_order = excluded.sort_order,
  is_published = true;

insert into public.team_members (
  name,
  role,
  statement,
  image_path,
  social_links,
  sort_order,
  is_published
)
select
  seed.name,
  seed.role,
  seed.statement,
  seed.image_path,
  seed.social_links,
  seed.sort_order,
  true
from jsonb_to_recordset(
  $team$
  [
    {
      "name": "Dr. Aliyu Musa Bade",
      "role": "Director / Founder",
      "statement": "Visionary leader and academic who established NIHUB to bridge the gap between university education and real-world tech innovation in Nigeria.",
      "image_path": "/assets/images/external/team/t1.jpg",
      "social_links": ["/linkedin/link", "/x/link", "/mailto:email@gmail.com"],
      "sort_order": 0
    },
    {
      "name": "Maryam Abdullahi",
      "role": "Community Managerr",
      "statement": "Dedicated to growing and nurturing NIHUB's vibrant ecosystem, ensuring every member finds their voice and their place.",
      "image_path": "/assets/images/external/team/t2.jpg",
      "social_links": ["/linkedin/link", "/x/link"],
      "sort_order": 1
    },
    {
      "name": "Ibrahim Suleiman",
      "role": "Head of Training & Programmes",
      "statement": "Designs and delivers world-class bootcamps in AI, cloud, and web development — turning curriculum into careers.",
      "image_path": "/assets/images/external/team/t3.jpg",
      "social_links": ["/linkedin/link", "/mailto:email@gmail.com"],
      "sort_order": 2
    },
    {
      "name": "Fatima Umar",
      "role": "Research & Innovation Lead",
      "statement": "Spearheads NIHUB's research initiatives and lab projects, connecting students with cutting-edge problems worth solving.",
      "image_path": "/assets/images/external/team/t4.jpg",
      "social_links": ["/linkedin/link", "/mailto:email@gmail.com"],
      "sort_order": 3
    },
    {
      "name": "David Okonkwo",
      "role": "Partnerships & Sponsorships",
      "statement": "Builds and maintains NIHUB's relationships with Huawei, CISCO, Google, and other global and Nigerian partners.",
      "image_path": "/assets/images/external/team/t5.jpg",
      "social_links": ["/linkedin/link", "/mailto:email@gmail.com"],
      "sort_order": 4
    },
    {
      "name": "Aisha Bello",
      "role": "Events & Outreach Coordinator",
      "statement": "Orchestrates NIHUB's packed calendar of hackathons, workshops, and tech talks — making every event one to remember.",
      "image_path": "/assets/images/external/team/t6.jpg",
      "social_links": ["/linkedin/link", "/x/link"],
      "sort_order": 5
    }
  ]
  $team$::jsonb
) as seed(
  name text,
  role text,
  statement text,
  image_path text,
  social_links text[],
  sort_order integer
)
on conflict (image_path) do update set
  name = excluded.name,
  role = excluded.role,
  statement = excluded.statement,
  social_links = excluded.social_links,
  sort_order = excluded.sort_order,
  is_published = true;
