insert into public.site_stats (section, label, value, sort_order, is_published)
select
  seed.section,
  seed.label,
  seed.value,
  seed.sort_order,
  true
from jsonb_to_recordset(
  $stats$
  [
    {"section":"home_hero","label":"Individuals Trained","value":"1000+","sort_order":0},
    {"section":"home_hero","label":"Events Hosted","value":"50+","sort_order":1},
    {"section":"home_hero","label":"Awards Won","value":"10+","sort_order":2},
    {"section":"home_impact","label":"Individuals Trained","value":"1000+","sort_order":0},
    {"section":"home_impact","label":"Community Events","value":"50+","sort_order":1},
    {"section":"home_impact","label":"Awards Won","value":"10+","sort_order":2},
    {"section":"home_impact","label":"Industry Partners","value":"20+","sort_order":3}
  ]
  $stats$::jsonb
) as seed(section text, label text, value text, sort_order integer)
on conflict (section, label) do update set
  value = excluded.value,
  sort_order = excluded.sort_order,
  is_published = true;

insert into public.home_programs (
  title,
  status,
  description,
  image_path,
  venue,
  date_label,
  link,
  sort_order,
  is_published
)
select
  seed.title,
  seed.status,
  seed.description,
  seed.image_path,
  seed.venue,
  seed.date_label,
  seed.link,
  seed.sort_order,
  true
from jsonb_to_recordset(
  $programs$
  [
    {
      "title":"Artificial Intelligence Bootcamp",
      "status":"ongoing",
      "description":"A 6-week intensive program covering machine learning fundamentals, neural networks, and real-world AI applications.",
      "image_path":"/assets/images/external/programmes/prog1.jpg",
      "venue":"NIHUB Lab, FUTMinna",
      "date_label":"Jan – Feb 2026",
      "link":"/trainings",
      "sort_order":0
    },
    {
      "title":"Web3 & Blockchain Development",
      "status":"upcoming",
      "description":"Learn smart contract development, DeFi protocols, and decentralised app architecture from industry experts.",
      "image_path":"/assets/images/external/programmes/prog2.jpg",
      "venue":"Virtual + On-campus",
      "date_label":"Mar 2026",
      "link":"/trainings",
      "sort_order":1
    },
    {
      "title":"Cybersecurity Fundamentals",
      "status":"upcoming",
      "description":"From ethical hacking to network defense — a comprehensive programme built with CISCO curriculum standards.",
      "image_path":"/assets/images/external/programmes/prog3.jpg",
      "venue":"NIHUB Lab, FUTMinna",
      "date_label":"Apr 2026",
      "link":"/trainings",
      "sort_order":2
    },
    {
      "title":"3D Modelling/Design Bootcamp",
      "status":"ongoing",
      "description":"A 6-week intensive program covering Blender, and other 3D Tools and applications.",
      "image_path":"/assets/images/external/programmes/prog4.jpg",
      "venue":"NIHUB Lab, FUTMinna",
      "date_label":"Jan – Feb 2026",
      "link":"/trainings",
      "sort_order":3
    }
  ]
  $programs$::jsonb
) as seed(
  title text,
  status text,
  description text,
  image_path text,
  venue text,
  date_label text,
  link text,
  sort_order integer
)
on conflict (title) do update set
  status = excluded.status,
  description = excluded.description,
  image_path = excluded.image_path,
  venue = excluded.venue,
  date_label = excluded.date_label,
  link = excluded.link,
  sort_order = excluded.sort_order,
  is_published = true;

insert into public.testimonials (
  name,
  title,
  quote,
  sort_order,
  is_published
)
select seed.name, seed.title, seed.quote, seed.sort_order, true
from jsonb_to_recordset(
  $testimonials$
  [
    {
      "name":"Amara Okonkwo",
      "title":"Software Engineer, Lagos",
      "quote":"NIHUB changed my trajectory. The AI bootcamp gave me the skills to land a role at a top Nigerian fintech within three months of graduating.",
      "sort_order":0
    },
    {
      "name":"Tunde Adeyemi",
      "title":"Founder, TechNaija",
      "quote":"The community here is unlike anything else on campus. I built my first product, got mentorship, and made lifelong connections at NIHUB.",
      "sort_order":1
    },
    {
      "name":"Fatima Bello",
      "title":"Cloud Engineer, Abuja",
      "quote":"From day one, NIHUB felt like a launchpad. The exposure to real tools, real mentors, and real challenges was transformative.",
      "sort_order":2
    }
  ]
  $testimonials$::jsonb
) as seed(name text, title text, quote text, sort_order integer)
on conflict (name, title) do update set
  quote = excluded.quote,
  sort_order = excluded.sort_order,
  is_published = true;

insert into public.partners (name, partner_type, image_path, sort_order, is_published)
select seed.name, 'general', seed.image_path, seed.sort_order, true
from jsonb_to_recordset(
  $partners$
  [
    {"name":"Huawei","image_path":"/assets/images/external/partners/Huawei.png","sort_order":0},
    {"name":"Cisco","image_path":"/assets/images/external/partners/Cisco.png","sort_order":1},
    {"name":"Microsoft","image_path":"/assets/images/external/partners/MS.png","sort_order":2},
    {"name":"AWS","image_path":"/assets/images/external/partners/AWS.png","sort_order":3},
    {"name":"Google Developers Circle","image_path":"/assets/images/external/partners/GDC.png","sort_order":4},
    {"name":"FUTMinna","image_path":"/assets/images/external/partners/FUTMinna.png","sort_order":5}
  ]
  $partners$::jsonb
) as seed(name text, image_path text, sort_order integer)
on conflict (name, partner_type) do update set
  image_path = excluded.image_path,
  sort_order = excluded.sort_order,
  is_published = true;

insert into public.content_items (
  section,
  title,
  sort_order,
  is_published
)
select 'awards', seed.title, seed.sort_order, true
from jsonb_to_recordset(
  $awards$
  [
    {"title":"Huawei Awards","sort_order":0},
    {"title":"Cisco Awards","sort_order":1},
    {"title":"GOSC Awards","sort_order":2},
    {"title":"Matlab Awards","sort_order":3},
    {"title":"HG Awards","sort_order":4}
  ]
  $awards$::jsonb
) as seed(title text, sort_order integer)
on conflict (section, title) do update set
  sort_order = excluded.sort_order,
  is_published = true;

insert into public.content_items (
  section,
  title,
  description,
  icon_key,
  sort_order,
  is_published
)
select
  seed.section,
  seed.title,
  seed.description,
  seed.icon_key,
  seed.sort_order,
  true
from jsonb_to_recordset(
  $editorial$
  [
    {
      "section":"core_pillars",
      "title":"Tech Training",
      "description":"Hands-on bootcamps in AI, cloud computing, cybersecurity, and web development.",
      "icon_key":"ChipIcon",
      "sort_order":0
    },
    {
      "section":"core_pillars",
      "title":"Community Building",
      "description":"Vibrant developer communities — GDSC, HNG, Buildathon, and more — open to all.",
      "icon_key":"PeopleIcon",
      "sort_order":1
    },
    {
      "section":"core_pillars",
      "title":"Research & Labs",
      "description":"State-of-the-art labs supporting cutting-edge research in emerging technologies.",
      "icon_key":"BookIcon",
      "sort_order":2
    },
    {
      "section":"core_pillars",
      "title":"Global Partnerships",
      "description":"Collaborations with Huawei, CISCO, Google, and top Nigerian tech organisations.",
      "icon_key":"GlobalIcon",
      "sort_order":3
    },
    {
      "section":"about_statements",
      "title":"Our Mission",
      "description":"To foster a thriving ecosystem where technology, entrepreneurship, and innovation converge — enabling the next generation of Nigerian tech leaders.",
      "icon_key":"BulbIcon",
      "sort_order":0
    },
    {
      "section":"about_statements",
      "title":"Our Vision",
      "description":"A Nigeria where every student with a bold idea has access to the resources, mentorship, and community they need to make it a reality.",
      "icon_key":"GlobalIcon",
      "sort_order":1
    },
    {
      "section":"about_statements",
      "title":"Our Values",
      "description":"Collaboration, excellence, inclusivity, and a relentless commitment to building technology that serves people — not the other way around.",
      "icon_key":"PurpleSheildIcon",
      "sort_order":2
    }
  ]
  $editorial$::jsonb
) as seed(section text, title text, description text, icon_key text, sort_order integer)
on conflict (section, title) do update set
  description = excluded.description,
  icon_key = excluded.icon_key,
  sort_order = excluded.sort_order,
  is_published = true;
