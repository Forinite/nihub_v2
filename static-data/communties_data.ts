import { BoltIcon, BrainIcon, CloudIcon, CodeIcon, GlobeIcon, GridIcon, HeartIcon, SheildIcon } from "../components/SVGAids/SVG"

// static data for community hero sections
export const communityStats = [
  { label: 'Active Communities', value: '8' },
  { label: 'Total Members', value: '1,450+' },
  { label: 'Average Meet frequency', value: 'Weekly' },
  { label: 'Industry Partners', value: '6+' }
] 

// static data for community impact section

export const communityImpactStats = [
  {
    label: 'Total Members',
    value: '1450+',
    note: 'Across all communities'
  },
  {
    label: 'Active Clubs',
    value: '8',
    note: 'And growing'
  },
  {
    label: 'Events Per Year',
    value: '60+',
    note: 'Workshops, talks & hackathons'
  },
  {
    label: 'Industry Partners',
    value: '6+',
    note: 'Backing our members'
  },
]
// static data for all communities section
export const CommunitiesList = [
    {
    icon: GlobeIcon,
    name: 'Google Developer Student Club',
    catchPhrase: 'Build for everyone, powered by Google',
    abbr: 'GDSC',
    mainConcept: 'Development',
    description: "NIHUB's GDSC chapter connects students to Google technologies, developer events, and a global network of builders. We run workshops on Flutter, Firebase, Android, and cloud — and compete in the annual Google Solution Challenge.",
    keywords: ['Flutter', 'Firebase', 'Cloud', 'Android', 'Solution Challenge'],
    stats: {
      members: '320+',
      meetings: 'Weekly',
      partner: 'Google Partner'
    },
    joinLink: 'https://gdsc.community.dev/nihub/',
    learnMoreLink: 'https://gdsc.community.dev/nihub/',
  },
    {
    icon: CodeIcon ,
    name: 'HNG Internship Community',
    catchPhrase: "Nigeria's most rigourous internship.",
    abbr: 'HNG',
    mainConcept: 'Internship',
    description: "NIHUB's HNG chapter prepares students for Africa's most competitive remote internship programme. We run mock tasks, code reviews, and mentorship sessions to help members survive and thrive in each cohort.",
    keywords: ['Frontend', 'Backend', 'DevOps', 'Project Design', 'Technical Writing'],
    stats: {
      members: '210+',
      meetings: 'Bi-weekly',
    },
    joinLink: 'https://hng.community.dev/nihub/',
    learnMoreLink: 'https://hng.community.dev/nihub/',
  },
  
    {
    icon: BoltIcon ,
    name: 'CISCO Networking Academy',
    catchPhrase: "Gold-status networking & security learning.",
    abbr: 'CISCO',
    mainConcept: 'Networking',
    description: "As a Gold-status CISCO Networking Academy, NIHUB delivers industry-recognised courses in networking, cybersecurity, IoT",
    keywords: ['CCNA', 'Cybersecurity', 'IoT', 'CISCO', 'Networking'],
    stats: {
        members: '180+',
        meetings: 'Weekly',
        partner: 'CISCO'
    },
    joinLink: 'https://cisco.community.dev/nihub/',
    learnMoreLink: 'https://cisco.community.dev/nihub/',
  },
  
    {
    icon: BrainIcon ,
    name: 'AI & Machine Learning Club',
    catchPhrase: "Where data meets curiosity.",
    abbr: 'CISCO',
    mainConcept: 'AI / ML',
    description: "From Python fundamentals to neural networks and large language models — NIHUB's AI Club is where students learn, experiment",
    keywords: ['Python', 'TensorFlow', 'LLMs', 'ML', 'AI', 'RAG'],
    stats: {
      members: '290+',
      meetings: 'Weekly',
    },
    joinLink: 'https://ai.community.dev/nihub/',
    learnMoreLink: 'https://ai.community.dev/nihub/',
  },
  {
    icon: SheildIcon ,
    name: 'Cybersecurity Guild',
    catchPhrase: "Hack to protect. Learn to defend.",
    abbr: 'CG',
    mainConcept: 'Security',
    description: "From Python fundamentals to neural networks and large language models — NIHUB's AI Club is where students learn, experiment",
    keywords: ['CTF', 'Ethical Hacking', 'Hackathons'],
    stats: {
      members: '155+',
      meetings: 'Bi-weekly',
    },
    joinLink: 'https://cg.community.dev/nihub/',
    learnMoreLink: 'https://cg.community.dev/nihub/',
  },
   {
    icon: GridIcon,
    name: 'Web3 & Blockchain Hub',
    catchPhrase: "Decentralise everything.",
    abbr: 'W3BH',
    mainConcept: 'Blockchain',
    description: "Smart contracts, DeFi, NFTs, and the decentralised web. NIHUB's Web3 Hub explores the frontier of blockchain technology",
    keywords: ['Solidify', 'Ethereum', 'Defi', 'Web3', 'Hub'],
    stats: {
      members: '130+',
      meetings: 'Bi-weekly',
    },
    joinLink: 'https://web3.community.dev/nihub/',
    learnMoreLink: 'https://web3.community.dev/nihub/',
  },
  {
    icon: CloudIcon ,
    name: 'Huawei Cloud & ICT  Club',
    catchPhrase: "Cloud skills, global recognition.",
    abbr: 'Huawei',
    mainConcept: 'Blockchain',
    description: "Backed by Huawei's global ICT partnership, this club trains students in cloud computing, AI infrastructure, and networking",
    keywords: ['Huawei Cloud', 'HCIA', 'Big Data', 'ICT', 'Computing'],
    stats: {
      members: '170+',
      meetings: 'Weekly',
      partner: 'Huawei'
    },
    joinLink: 'https://huawei.community.dev/nihub/',
    learnMoreLink: 'https://huawei.community.dev/nihub/',
  },
  {
    icon: HeartIcon ,
    name: 'Women in Tech',
    catchPhrase: "Closing the gendergap, one ulder at a time.",
    abbr: 'Huawei',
    mainConcept: 'Blockchain',
    description: "Women in Tech is NIHUB's flagship inclusion initiative — providing mentorship, scholarships, and safe learning spaces for",
    keywords: ['Mentorship', 'Inclusion', 'Leadership', 'Women', 'Skills'],
    stats: {
      members: '195+',
      meetings: 'Monthly',
    },
    joinLink: 'https://ftech.community.dev/nihub/',
    learnMoreLink: 'https://ftech.community.dev/nihub/',
  }

]


// static data for featured communities section

export const FeaturedCommunities = [
  {
    icon: GlobeIcon,
    name: 'Google Developer Student Club',
    catchPhrase: 'Build for everyone, powered by Google',
    abbr: 'GDSC',
    mainConcept: 'Development',
    description: "NIHUB's GDSC chapter connects students to Google technologies, developer events, and a global network of builders. We run workshops on Flutter, Firebase, Android, and cloud — and compete in the annual Google Solution Challenge.",
    keywords: ['Flutter', 'Firebase', 'Cloud', 'Android', 'Solution Challenge'],
    stats: {
      members: '320+',
      meetings: 'Weekly',
      partner: 'Google Partner'
    },
    joinLink: 'https://gdsc.community.dev/nihub/',
    learnMoreLink: 'https://gdsc.community.dev/nihub/',
  },
    {
    icon: CodeIcon ,
    name: 'HNG Internship Community',
    catchPhrase: "Nigeria's most rigourous internship.",
    abbr: 'HNG',
    mainConcept: 'Internship',
    description: "NIHUB's HNG chapter prepares students for Africa's most competitive remote internship programme. We run mock tasks, code reviews, and mentorship sessions to help members survive and thrive in each cohort.",
    keywords: ['Frontend', 'Backend', 'DevOps', 'Project Design', 'Technical Writing'],
    stats: {
      members: '210+',
      meetings: 'Bi-weekly',
    },
    joinLink: 'https://hng.community.dev/nihub/',
    learnMoreLink: 'https://hng.community.dev/nihub/',
  },
]