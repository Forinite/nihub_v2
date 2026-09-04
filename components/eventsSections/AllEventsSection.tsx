import { Filter } from "lucide-react"
import { Bai_700, Jet_400, Jet_700, Pop_400 } from "../fontAids/Fonts"
import SectionHeaderText from "../ui/SectionHeaderText"
import EventCard from "./ui/EventCard"
import { AllEventsList } from "@/static-data/events_data"


const activeBG = {background: '#2B1043', borderTop: '1px solid #000000', boxShadow: '0px 4px 12px 0px #2B10434D'}
const inActiveBG = {background: '#2B10430F', border: '1px solid #2B10431F'}

const filters = ['Hackathon', 'Workshop', 'Talk', 'Conference', 'Competition', 'Training']

const AllEventsSection = () => {
  return (
    <section className="py-20 md:py-28 md:px-8 px-6 max-w-[1022px] bg-white mx-auto">
        <div className="md:flex items-end justify-between">
            <div>
                <SectionHeaderText text="All Events"  />
                <Bai_700  className="text-[40px] md:text-[56px]  base-purple-text text-left   tracking-[-0.5px] leading-[70px] uppercase pt-4"  text="What's On" />
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

        <div className="pt-10 grid md:grid-cols-2 gap-6 ">
                {AllEventsList.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
        </div>
    </section>
  )
}

export default AllEventsSection