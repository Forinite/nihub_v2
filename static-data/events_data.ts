import { BoltIcon, BookIcon, BrainIcon, GlobeIcon, MedalIcon, RocketIcon, SheildIcon, StarIcon, TechChipIcon } from "@/components/SVGAids/SVG";

// static data  for all events section
export const AllEventsList = [
    {
        rgb: [43, 16, 67],
        icon: StarIcon,
        status: 'Upcoming',
        type: 'conference',
        name: 'NIHUB Tech Week 2026',
        description: "Our flagship annual event — five days of innovation, buildathons, keynote talks, startup showcases, and networking with industry leaders from across Nigeria and beyond.",
        date: "Aug 11 – 15, 2026",
        starts: '9:00 AM daily',
        venue: 'FUTMinna Main Campus',
        seats: '500',
        keywords: ['Keynotes', 'Hackathon', 'Networking', 'Showcase', 'Workshops'],
        registerLink: '#',
        learnMoreLink: '#'

    },
    {
        rgb: [124, 58, 237],
        icon: BoltIcon,
        status: 'Open',
        type: 'Hackathon',
        name: 'NIHUB Buildathon',
        description: "72 hours. One problem statement. Hundreds of builders competing to ship the best working product. The Buildathon is where ideas become reality under pressure.",
        date: 'Sep 5 – 7, 2026',
        starts: 'Starts 6:00 PM Fri',
        venue: 'NIHUB Lab, FUTMinna',
        seats: '200',
        keywords: ['72 hrs', 'Team Events', 'Prize Pool', 'All tracks'],
        registerLink: '#',
        learnMoreLink: '#'

    },
        {
        rgb: [5, 150, 105],
        icon: BrainIcon,
        status: 'Upcoming',
        type: 'Talk',
        name: 'AI in African - Fireside Series',
        description: "A monthly speaker series bringing in AI practitioners, researchers, and founders to discuss the realities and excesses of AI in Africa",
        date: 'Every Last Thursday',
        starts: '5:00 PM - 7:00 PM',
        venue: 'NIHUB Auditorium + Livestream',
        seats: '200',
        keywords: ['AI', 'Monthly', 'Free Entry'],
        registerLink: '#',
        learnMoreLink: '#'

    },
        {
        rgb: [66, 133, 244],
        icon: GlobeIcon,
        status: 'Upcoming',
        type: 'Conference',
        name: 'GDSC',
        description: "Google's global developer festival arrives at NIHUB — featuring talks on Google Cloud, Flutter, Android, and FUTMinna DevFest Events.",
        date: 'Oct 18, 2026',
        starts: '10:00 AM - 6:00 PM',
        venue: 'FUTMinna Senate Chamber',
        seats: '200',
        keywords: ['Google', 'Flutter', 'Cloud'],
        registerLink: '#',
        learnMoreLink: '#'

    },
        {
        rgb: [220, 38, 38],
        icon: SheildIcon,
        status: 'Upcoming',
        type: 'Competition',
        name: 'NIHUB CTF Challenge Buildathon',
        description: "Capture the Flag — NIHUB's annual cybersecurity competition open to all skill levels. Compete solo or in teams to complete the objective and win prizes",
        date: 'Nov 1, 2026',
        starts: '10:00 AM - 10:00 PM',
        venue: 'Online + NIHUB Lab',
        seats: '200',
        keywords: ['CTF', 'Cybersecurity', 'Prizes'],
        registerLink: '#',
        learnMoreLink: '#'

    },
        {
        rgb: [202, 128, 4],
        icon: RocketIcon,
        status: 'Upcoming',
        type: 'Workshop',
        name: 'NIHUB Startup Demo Day',
        description: "NIHUB's incubation cohort takes the stage. Six early-stage startups pitch to a panel of investors, mentors, and potential parnters who are looking to support strong startup projects.",
        date: 'Dec 6, 2026',
        starts: '2:00 PM - 6:00 PM',
        venue: 'FUTMinna Innovation Centre',
        seats: '200',
        keywords: ['Startups', 'Pitching', 'Investors'],
        registerLink: '#',
        learnMoreLink: '#'

    }
        
]


// static data for training section


export const TrainingsList = [
    {
        rgb: [124, 58, 237], 
        icon: BrainIcon, 
        name: 'Artificial Intelligence Bootcamp',
        description: "A 6-week intensive covering machine learning fundamentals, neural networks, computer vision, and real-world AI deployment — built with practitioners, not just professors." , 
        status: 'Ongoing',
        date: 'Jan 2026 (Ongoing)',
        duration: '6 weeks',
        venue: 'Nihub Lab, FUTMinna',
        partner: '',
        cost: 'Free',
        applylink: '#' , 
        detailLink: '#'
    },
    {
        rgb: [43, 16, 67], 
        icon: TechChipIcon, 
        name: 'Full-Stack Web Development',
        description: "From HTML to production-ready web apps — an 8-week programme covering modern frontend, backend APIs, databases, and deployment pipelines." , 
        status: 'Upcoming',
        date: 'Mar 10, 2026',
        duration: '8 weeks',
        venue: 'NIHUB Lab + Virtual',
        partner: '',
        cost: 'Free',
        applylink: '#' , 
        detailLink: '#',
    },
        {
        rgb: [5, 150, 105], 
        icon: GlobeIcon, 
        name: 'Web3 and Blockchain Development ',
        description: "Smart contracts, decentralised apps, and the mechanics of DeFi — an industry-facing programme for developers ready to build on-chain." , 
        status: 'Upcoming',
        date: 'Apr 7, 2026',
        duration: '5 weeks',
        venue: 'Virtual + On-Campus',
        partner: '',
        cost: 'Free',
        applylink: '#' , 
        detailLink: '#',
    },
        {
        rgb: [220, 38, 38], 
        icon: SheildIcon, 
        name: 'Cybersecurity Fundamentals',
        description: "A comprehensive programme built on the CISCO CyberOps curriculum — covering network security, ethical hacking, incident response, and digital forensics." , 
        status: 'Upcoming',
        date: 'May 5, 2026',
        duration: '6 weeks',
        venue: 'NIHUB Lab, FUTMinna',
        partner: 'CISCO partner',
        cost: 'Free',
        applylink: '#' , 
        detailLink: '#',
    },
        {
        rgb: [194, 65, 12], 
        icon: BookIcon, 
        name: 'Cloud Computing & DevOps',
        description: "Huawei Cloud and AWS hands-on training covering infrastructure, containerisation, CI/CD, and cloud architecture — leading to industry certifications." , 
        status: 'Upcoming',
        date: 'Jun 2, 2026',
        duration: '7 weeks',
        venue: 'NIHUB Lab + Virtual',
        partner: 'Huawei partner',
        cost: 'Free',
        applylink: '#' , 
        detailLink: '#',
    },
        {
        rgb: [3, 105, 161], 
        icon: MedalIcon, 
        name: 'Data Science & Analytics',
        description: "From raw data to boardroom insights — this programme covers the full data pipeline: wrangling, visualisation, statistical analysis, and dashboarding." , 
        status: 'Upcoming',
        date: 'Jul 7, 2026',
        duration: '5 weeks',
        venue: 'NIHUB Lab + Virtual',
        partner: '',
        cost: 'Free',
        applylink: '#' , 
        detailLink: '#',
    },
]





// static data for event hero section
export const eventsStats = [
    { label: "Events Hosted", value: "50+" },
    { label: "Bootcamp / Year", value: "6" },
    { label: "Free For Student", value: "100%" }
]

// static data for event impact stats section

export const eventImpactStats = [
    {
        value: '50+',
        label: 'Events Hosted',
        note: 'Since 2019'
    },
        {
        value: '1000+',
        label: 'Participants Trained',
        note: 'Across all bootcamps'
    },
        {
        value: '6',
        label: 'Bootcamps / Year',
        note: 'In key tech tracks'
    },
        {
        value: '72hrs',
        label: 'Longest Hackathon',
        note: 'NIHUB Builtahon'
    },
]


// static data for headline events section
export const HeadlineEvents = [
    {
        rgb: [43, 16, 67],
        icon: StarIcon,
        status: 'Upcoming',
        type: 'conference',
        name: 'Nihub Tech Week 2026',
        description: "Our flagship annual event — five days of innovation, buildathons, keynote talks, startup showcases, and networking with industry leaders from across Nigeria and beyond.",
        date: "Aug 11 – 15, 2026",
        starts: '9:00 AM daily',
        venue: 'FUTMinna Main Campus',
        seats: '500',
        keywords: ['Keynotes', 'Hackathon', 'Networking', 'Showcase', 'Workshops'],
        registerLink: '#',
        learnMoreLink: '#'

    },
    {
        rgb: [124, 58, 237],
        icon: BoltIcon,
        status: 'Open',
        type: 'Hackathon',
        name: 'Nihub Buildathon',
        description: "72 hours. One problem statement. Hundreds of builders competing to ship the best working product. The Buildathon is where ideas become reality under pressure.",
        date: 'Sep 5 – 7, 2026',
        starts: 'Starts 6:00 PM Fri',
        venue: 'NIHUB Lab, FUTMinna',
        seats: '200',
        keywords: ['72 hrs', 'Team Events', 'Prize Pool', 'All tracks'],
        registerLink: '#',
        learnMoreLink: '#'

    },
]


// static data for featured event component
export const FeaturedEvent = {
    title: "Tech Week",
    host: "Nihub",
    keywords: ["Innovation", "Buildathon", "Talks", "Networking"],
    status: "upcoming",
    dateString: "Aug 11-15, 2026",
    Location: "Futminna Campus",
    link: "/events/tech-week",

}