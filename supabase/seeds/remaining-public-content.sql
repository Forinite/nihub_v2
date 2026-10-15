insert into public.site_stats (section, label, value, note, sort_order, is_published)
select
  seed.section,
  seed.label,
  seed.value,
  seed.note,
  seed.sort_order,
  true
from jsonb_to_recordset(
  $stats$
  [
    {"section":"community_hero","label":"Active Communities","value":"8","note":null,"sort_order":0},
    {"section":"community_hero","label":"Total Members","value":"1,450+","note":null,"sort_order":1},
    {"section":"community_hero","label":"Average Meet frequency","value":"Weekly","note":null,"sort_order":2},
    {"section":"community_hero","label":"Industry Partners","value":"6+","note":null,"sort_order":3},
    {"section":"community_impact","label":"Total Members","value":"1450+","note":"Across all communities","sort_order":0},
    {"section":"community_impact","label":"Active Clubs","value":"8","note":"And growing","sort_order":1},
    {"section":"community_impact","label":"Events Per Year","value":"60+","note":"Workshops, talks & hackathons","sort_order":2},
    {"section":"community_impact","label":"Industry Partners","value":"6+","note":"Backing our members","sort_order":3},
    {"section":"events_hero","label":"Events Hosted","value":"50+","note":null,"sort_order":0},
    {"section":"events_hero","label":"Bootcamp / Year","value":"6","note":null,"sort_order":1},
    {"section":"events_hero","label":"Free For Student","value":"100%","note":null,"sort_order":2},
    {"section":"events_impact","label":"Events Hosted","value":"50+","note":"Since 2019","sort_order":0},
    {"section":"events_impact","label":"Participants Trained","value":"1000+","note":"Across all bootcamps","sort_order":1},
    {"section":"events_impact","label":"Bootcamps / Year","value":"6","note":"In key tech tracks","sort_order":2},
    {"section":"events_impact","label":"Longest Hackathon","value":"72hrs","note":"NIHUB Builtahon","sort_order":3}
  ]
  $stats$::jsonb
) as seed(section text, label text, value text, note text, sort_order integer)
on conflict (section, label) do update set
  value = excluded.value,
  note = excluded.note,
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
  $service_items$
  [
    {
      "section":"service_process",
      "title":"Choose a Service",
      "description":"Browse our catalogue and identify the programme or resource that fits your goals.",
      "icon_key":"BulbIcon",
      "sort_order":0
    },
    {
      "section":"service_process",
      "title":"Apply or Register",
      "description":"Fill out a short form — most programmes are free for FUTMinna students.",
      "icon_key":"PeopleIcon",
      "sort_order":1
    },
    {
      "section":"service_process",
      "title":"Learn & Build",
      "description":"Participate fully and put your skills to work on real projects and challenges.",
      "icon_key":"CodeIcon",
      "sort_order":2
    },
    {
      "section":"service_process",
      "title":"Launch & Grow",
      "description":"Graduate with a portfolio, a network, and the confidence to take on the industry.",
      "icon_key":"RocketIcon",
      "sort_order":3
    },
    {
      "section":"service_benefits",
      "title":"Industry Backed Curriculum",
      "description":"Every programme is designed with or endorsed by Huawei, CISCO, Google, or another leader — not just academics.",
      "icon_key":"MedalIcon",
      "sort_order":0
    },
    {
      "section":"service_benefits",
      "title":"Zero Bureaucracy",
      "description":"Apply, get accepted, and start within days — not semesters. We move at the speed of the industry.",
      "icon_key":"ClockIcon",
      "sort_order":1
    },
    {
      "section":"service_benefits",
      "title":"Proven Outcomes",
      "description":"Our alumni are at top Nigerian fintechs, cloud companies, and startups. Results — not just certificates.",
      "icon_key":"StarIcon",
      "sort_order":2
    },
    {
      "section":"service_benefits",
      "title":"Safe, Inclusive Environment",
      "description":"Every identity, background, and skill level is welcomed. We build psychologically safe spaces by design.",
      "icon_key":"SheildIcon",
      "sort_order":3
    },
    {
      "section":"service_benefits",
      "title":"Real Tools, Not Simulations",
      "description":"Students work with the same tools professionals use — live cloud environments, industry software, real datasets.",
      "icon_key":"BoltIcon",
      "sort_order":4
    },
    {
      "section":"service_benefits",
      "title":"End-to-End Support",
      "description":"From your first bootcamp to your first job offer — NIHUB walks alongside you every step of the way.",
      "icon_key":"StackIcon",
      "sort_order":5
    }
  ]
  $service_items$::jsonb
) as seed(section text, title text, description text, icon_key text, sort_order integer)
on conflict (section, title) do update set
  description = excluded.description,
  icon_key = excluded.icon_key,
  sort_order = excluded.sort_order,
  is_published = true;

insert into public.partners (name, partner_type, image_path, sort_order, is_published)
select seed.name, 'service', null, seed.sort_order, true
from jsonb_to_recordset(
  $service_partners$
  [
    {"name":"Huawei","sort_order":0},
    {"name":"CISCO","sort_order":1},
    {"name":"Google","sort_order":2},
    {"name":"Microsoft","sort_order":3},
    {"name":"MathWorks","sort_order":4},
    {"name":"MTN Foundation","sort_order":5}
  ]
  $service_partners$::jsonb
) as seed(name text, sort_order integer)
on conflict (name, partner_type) do update set
  image_path = excluded.image_path,
  sort_order = excluded.sort_order,
  is_published = true;
