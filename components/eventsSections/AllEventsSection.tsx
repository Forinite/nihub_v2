import { Filter } from "lucide-react"
import { Bai_700, Jet_400, Jet_700, Pop_400 } from "../fontAids/Fonts"
import SectionHeaderText from "../ui/SectionHeaderText"
import EventCard from "./ui/EventCard"


const activeBG = {background: '#2B1043', borderTop: '1px solid #000000', boxShadow: '0px 4px 12px 0px #2B10434D'}
const inActiveBG = {background: '#2B10430F', border: '1px solid #2B10431F'}

const filters = ['Hackathon', 'Workshop', 'Talk', 'Conference', 'Competition', 'Training']

export const AllEventsList = [
    {
        rgb: [43, 16, 67],
        icon: '',
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
        icon: '',
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
        icon: '',
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
        icon: '',
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
        icon: '',
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
        icon: '',
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

const AllEventsSection = () => {
  return (
    <section className="py-28 px-8 w-[1022px] bg-white mx-auto">
        <div className="flex items-end justify-between">
            <div>
                <SectionHeaderText text="All Events"  />
                <Bai_700  className="text-[56px]  base-purple-text text-left   tracking-[-0.5px] leading-[70px] uppercase pt-4"  text="What's On" />
            </div>
            <div className="flex items-center  w-fit h-full gap-2">
                <Filter className="w-[13px] h-[13px]  base-purple-text-100" />
                <Pop_400 text="Filter by type."  className="text-[12px]  w-fit h-fit  text-end base-purple-text-100"/>
            </div>
        </div>

        <div className="pt-10">
            <div className="flex items-center flex-wrap gap-2 ">
                <div style={activeBG} className="flex items-center justify-center gap-1.25 w-[83px] h-8 rounded-full">
                    <Jet_400 className="text-white text-[11px] tracking-[0.6px] w-fit" text="All" />
                </div>

                {filters.map((item, index) => (
                    <div  key={index} style={inActiveBG}  className="flex items-center justify-center py-1.5 px-4 h-8  w-fit rounded-full">
                        <Jet_700 className="base-purple-text-100 text-[11px] tracking-[0.55px] w-fit" text={item} />
                    </div> 
                ))}

            </div>

        </div>

        <div className="pt-40 grid grid-cols-2 gap-6 ">
                {AllEventsList.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
        </div>
    </section>
  )
}

export default AllEventsSection