import { Bai_700 } from "@/components/fontAids/Fonts"
import SectionHeaderText from "@/components/ui/SectionHeaderText"
import HeadlineEventsCard from "./ui/HeadlineEventsCard"

const HeadlineEvents = [
    {
        rgb: [43, 16, 67],
        icon: '',
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
        icon: '',
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
const HeadlineEventsSection = () => {
  return (
    <section className=" py-20 md:py-28 pink-bg">
      <div className="max-w-[1022px] mx-auto md:px-8 px-6">
          <div>
            <SectionHeaderText text="Featured"  />
            <Bai_700  className="text-[40px] md:text-[56px] md:leading-[70px] leading-[50px]   base-purple-text text-left max-w-96.25   tracking-[-0.5px]  uppercase pt-4"  text="Headline Events" />
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-12 gap-6">
              {HeadlineEvents.map((event, index) => (
                <HeadlineEventsCard key={index} event={event} />
              ))}
          </div>

      </div>
    </section>
  )
}

export default HeadlineEventsSection