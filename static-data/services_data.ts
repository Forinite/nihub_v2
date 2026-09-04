//  static data for all services section

import { BarChartIcon, BookIcon, BuildingsIcon, BulbIcon, CodeIcon, GlobeIcon, MedalIcon, MessageIcon, PeopleIcon, RocketIcon, WifiIcon, BoltIcon, ClockIcon, SheildIcon, StackIcon, StarIcon } from "@/components/SVGAids/SVG";

export const ServicesList = [
    {
        icon: BookIcon, 
        label: 'Tech Training & Bootcamps',
        mainConcept: 'Education',
        description: "Intensive, curriculum-driven bootcamps in the most in-demand tech skills — designed with industry partners so every graduate leaves job-ready, not just certificate-ready." , 
        rgb: [43, 16, 67], 
        catchPhrase: 'Hands-on learning that gets you hired', 
        keywords: ['Students', 'Graduates ', 'Career Switchers'], 
        apply: {label: 'Explore Programmes' , link: '#' }, 
        detailLink: '#'
    },
        {
        icon: RocketIcon, 
        label: 'Startup Incubation', 
        mainConcept: 'Startup Support',
        description: "NIHUB's incubation programme wraps early-stage founders with mentorship, workspace, and resources to build and launch. We've helped seed dozens of student-led ventures from FUTMinna.", 
        rgb: [124, 58,237], 
        catchPhrase: 'From idea to investable product', 
        keywords: ['Student Founders', 'Early-State Startups'], 
        apply: {label: 'Apply to Incubators' , link: '#' },  
        detailLink: '#'
    },
        {
        icon: BarChartIcon, 
        label: 'Research & Innovation Labs',
        mainConcept: 'Research', 
        description: "Access NIHUB's specialised labs for AI, IoT, embedded systems, and data research — open to undergraduate and postgraduate researchers collaborating on publishable, impactful work.", 
        rgb: [5, 150, 105], 
        catchPhrase: 'State-of-the-art lab for real world problems.', 
        keywords: ['Reseachers', 'Postgraduates', 'Faculty'], 
        apply: {label: 'Book Lab Access' , link: '#' },  
        detailLink: '#'
    },
        {
        icon: MedalIcon, 
        label: 'Industry Certifications', 
        mainConcept: 'Certification',
        description: "NIHUB is an authorised testing and training centre for Huawei, CISCO, Google, and MathWorks — preparing students for internationally recognised certifications that open doors globally.", 
        rgb: [180, 83, 9], 
        catchPhrase: 'Globally recognised credentials.', 
        keywords: ['Students', 'Professionals', 'Job Seekers'], 
        apply: {label: 'View Certifications' , link: '#' },  
        detailLink: '#'
    },
        {
        icon: WifiIcon, 
        label: "Digital Infastructure Access", 
        mainConcept: 'Infastructure',
        description: "High-speed internet, cloud compute credits, licensed software, and device loan — NIHUB removes infrastructure barriers so brilliant students can focus entirely on building.", 
        rgb: [3, 105, 161], 
        catchPhrase: 'The tools to build without barriers.', 
        keywords: ['All NIHUB Members'], 
        apply: {label: 'Access Infrastructure' , link: '#' },  
        detailLink: '#'
    },
        {
        icon: MessageIcon, 
        label: 'Mentorship & Career Support', 
        mainConcept: 'Mentorship',
        description: "From CV reviews to mock interviews and industry introductions — NIHUB's mentorship programme connects members with experienced professionals across Nigeria's tech ecosystem.", 
        rgb: [190, 24, 93], 
        catchPhrase: "Guidance from people who've been there.", 
        keywords: ['Student', 'Final Year', "Jod Seekers"], 
        apply: {label: 'Find a Mentor' , link: '#' },  
        detailLink: '#'
    },
        {
        icon: GlobeIcon, 
        label: 'Events, Hackathons & Talks', 
        mainConcept: 'Events',
        description: "From intimate tech talks to 200-person hackathons, NIHUB runs one of the most active event calendars in Northern Nigeria — bringing together students, practitioners, and industry leaders.", 
        rgb: [202, 138, 4], 
        catchPhrase: 'Where the community comes alive.', 
        keywords: ['Everyone', 'Open to Public'], 
        apply: {label: 'View Events Calender' , link: '#' },  
        detailLink: '#'
    },
        {
        icon: BuildingsIcon, 
        label: 'Corporate Training & Partnerships', 
        mainConcept: 'Corporate',
        description: "NIHUB delivers bespoke training programmes for organisations and government agencies looking to upskill their workforce in emerging technologies — with measurable outcomes.", 
        rgb: [71, 85, 105], 
        catchPhrase: 'Upskill your team. Invest in the ecosystem.', 
        keywords: ['Corporates', 'Government', 'NGOs'], 
        apply: {label: 'Discuss Partnership' , link: '#' },  
        detailLink: '#'
    }
]



// static date for process section

export const processList = [
    {icon: BulbIcon, header: 'Choose a Service', description: 'Browse our catalogue and identify the programme or resource that fits your goals.'},
    {icon: PeopleIcon, header: 'Apply or Register', description: 'Fill out a short form — most programmes are free for FUTMinna students.'},
    {icon: CodeIcon, header: 'Learn & Build', description: 'Participate fully and put your skills to work on real projects and challenges.'},
    {icon: RocketIcon, header: 'Launch & Grow', description: 'Graduate with a portfolio, a network, and the confidence to take on the industry.'}
]


// static data for service hero setion

export const ServicesSummaryList = [
    {icon: BookIcon, label: 'Education', description: 'Tech Training', rgb: [43, 16, 67]},
    {icon: RocketIcon, label: 'Startup Support', description: 'Startup Incubation', rgb: [124, 58,237]},
    {icon: BarChartIcon, label: 'Research', description: 'Research & Innovation', rgb: [5, 150, 105]},
    {icon: MedalIcon, label: 'Certification', description: 'Industry Certifications', rgb: [180, 83, 9]},
    {icon: WifiIcon, label: 'Infrastructure', description: 'Digital Infrastructure Access', rgb: [3, 105, 161]},
    {icon: MessageIcon, label: 'Mentorship', description: 'Mentorship & Career', rgb: [190, 24, 93]},
    {icon: GlobeIcon, label: 'Events', description: 'Event, Hackathons', rgb: [202, 138, 4]},
    {icon: BuildingsIcon, label: 'Corporate', description: 'Corporate training', rgb: [71, 85, 105]}
]


// static data for whu nihub section
export const WhyNIHUBList = [
    {icon: MedalIcon, header: 'Industry Backed Curriculum', description: 'Every programme is designed with or endorsed by Huawei, CISCO, Google, or another leader — not just academics.'},
    {icon: ClockIcon, header: 'Zero Bureaucracy', description: 'Apply, get accepted, and start within days — not semesters. We move at the speed of the industry.'},
    {icon: StarIcon, header: 'Proven Outcomes', description: 'Our alumni are at top Nigerian fintechs, cloud companies, and startups. Results — not just certificates.'},
    {icon: SheildIcon, header: 'Safe, Inclusive Environment', description: 'Every identity, background, and skill level is welcomed. We build psychologically safe spaces by design.'},
    {icon: BoltIcon, header: 'Real Tools, Not Simulations', description: 'Students work with the same tools professionals use — live cloud environments, industry software, real datasets.'},
    {icon: StackIcon, header: 'End-to-End Support', description: 'From your first bootcamp to your first job offer — NIHUB walks alongside you every step of the way.'}
]

export const partners = [
    'Huawei', 'CISCO', 'Google', 'Microsoft', 'MathWorks', 'MTN Foundation'
]
