import { ChipIcon, GlobalIcon, PeopleIcon,BookIcon, HuaweiImage, CiscoImage, MSImage, AWSImage, GDCImage, FUTMinnaImage } from "./images";


// static data for core pillar cards
export const CorePillarInfo  = [
    {
        title: "Tech Training",
        description: "Hands-on bootcamps in AI, cloud computing, cybersecurity, and web development.",
        img: ChipIcon
    },
    {
        title: "Community Building",
        description: "Vibrant developer communities — GDSC, HNG, Buildathon, and more — open to all.",
        img: PeopleIcon
    },
    {
        title: "Research & Labs",
        description: "State-of-the-art labs supporting cutting-edge research in emerging technologies.",
        img: BookIcon
    },
    {
        title: "Global Partnerships",
        description: "Collaborations with Huawei, CISCO, Google, and top Nigerian tech organisations.",
        img: GlobalIcon
    }
]

// static data for program cards at training section

export const programmes = [
    {
        image: '/assets/images/external/programmes/prog1.jpg',
        status: 'ongoing',
        title: 'Artificial Intelligence Bootcamp ',
        description: 'A 6-week intensive program covering machine learning fundamentals, neural networks, and real-world AI applications.',
        venue: 'NIHUB Lab, FUTMinna',
        date: "Jan – Feb 2026",
        link: '/trainings',
    },
        {
        image: '/assets/images/external/programmes/prog2.jpg',
        status: 'upcoming',
        title: 'Web3 & Blockchain Development',
        description: 'Learn smart contract development, DeFi protocols, and decentralised app architecture from industry experts.',
        venue: 'Virtual + On-campus',
        date: "Mar 2026",
        link: '/trainings',
    },
        {
        image: '/assets/images/external/programmes/prog3.jpg',
        status: 'upcoming',
        title: 'Cybersecurity Fundamentals',
        description: 'From ethical hacking to network defense — a comprehensive programme built with CISCO curriculum standards.',
        venue: 'NIHUB Lab, FUTMinna',
        date: "Apr 2026",
        link: '/trainings',
    },
        {
        image: '/assets/images/external/programmes/prog4.jpg',
        status: 'ongoing',
        title: '3D Modelling/Design Bootcamp',
        description: 'A 6-week intensive program covering Blender, and other 3D Tools and applications.',
        venue: 'NIHUB Lab, FUTMinna',
        date: "Jan – Feb 2026",
        link: '/trainings',
    },
]

// static data for recoginitiom section

export const awards = [
    "Huawei Awards", "Cisco Awards", "GOSC Awards", "Matlab Awards", "HG Awards"
]

export const  trustedPartnersAndSponsors = [
    {partner : "Huawei", img: HuaweiImage}, 
    {partner : "Cisco", img: CiscoImage},
    {partner :"MicroSoft", img : MSImage},
    {partner:  "AWS", img: AWSImage}, 
    {partner: "Google Developers Circle", img: GDCImage}, 
    {partner: "FUTMinna", img: FUTMinnaImage}
]

// static data for community section 

export const comments = [
    {
        name: 'Amara Okonkwo', 
        title: 'Software Engineer, Lagos',
        comment: 'NIHUB changed my trajectory. The AI bootcamp gave me the skills to land a role at a top Nigerian fintech within three months of graduating.',
    },

    {
        name: 'Tunde Adeyemi', 
        title: 'Founder, TechNaija',
        comment: 'The community here is unlike anything else on campus. I built my first product, got mentorship, and made lifelong connections at NIHUB.',
    },

    {
        name: 'Fatima Bello', 
        title: 'Cloud Engineer, Abuja',
        comment: 'From day one, NIHUB felt like a launchpad. The exposure to real tools, real mentors, and real challenges was transformative.',
    },
]
