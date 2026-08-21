import { Bai_700, Jet_400, Pop_400 } from "../fontAids/Fonts"
import { LinkTemp1 } from "../ui/LinkTemps"
import SectionHeaderText from "../ui/SectionHeaderText"
import PathIndicator from "../PathIndicator"
import FeaturedEventCard from "./ui/FeaturedEventCard"

const eventsStats = [
    { label: "Events Hosted", value: "50+" },
    { label: "Bootcamp / Year", value: "6" },
    { label: "Free For Student", value: "100%" }
]
const EventsHero = () => {
  return (
    <section className=" relative h-fit md:pt-40 pt-32 overflow-hidden  ">

        
        <div className=' max-w-[1022px] mx-auto  md:pb-32 pb-24'>
            <PathIndicator basePath='Home' nextPaths={['Events & Training']} />

            <div className="w-full md:flex items-center gap-16 justify-between px-8 pt-10  h-full">
                <aside className='md:max-w-[447px] h-full flex flex-col items-center justify-center '>
                    <div>
                        <SectionHeaderText text="IT & Innovation Hub - Futminna" />
                        <div className='md:text-[58px] text-[48px] base-purple-text md:leading-[60.9px] leading-[48.96px] tracking[-0.5px] uppercase pt-5 '>
                            <Bai_700 className="md:block inline" text='Learn.' />
                            <Bai_700 text='Build.'  className='clarity-text-gradient md:block inline w-fit '/> 
                            <Bai_700 className="md:block inline" text='Compete.' />
                        </div>
                        <Pop_400 
                            text=' From intensive bootcamps to 72-hour hackathons and industry fireside chats — NIHUB runs the most active tech calendar in Northern Nigeria. All free for students. '
                            className='text-[17px] leading-[30.6px] tracking-normal base-purple-text-100 pt-6'
                        />
        
                    

                        <div className='flex md:flex-row flex-col md:items-center gap-3 pt-10 w-fit'>

                            <LinkTemp1 href="#" className='px-6 py-3 text-[13px] w-fit h-fit base-purple-bg text-white rounded-[10px] link-shadow' text='Register for an Event' linkIndex={0} />
                            <LinkTemp1 href="#" className='px-6 py-3 text-[13px] w-fit h-fit border border-[#2B104340] base-purple-text rounded-[10px]'     text='Browse Events'  linkIndex={1}/>

                        </div>
                    </div>
                    <div className='border-t border-gray-300 mt-10 pt-8 w-full'>
                        <ul className='flex flex-wrap items-center md:gap-3 gap-5  w-full'>
                            {eventsStats.map((stat) => (
                                <li key={stat.label}>
                                    <Bai_700 className='text-[22px] leading-8.25 base-purple-text' text={stat.value} />
                                    <Jet_400 className='text-[11px] leading-[16.5px] tracking-[0.55px] base-purple-text-300' text={stat.label} />
                                </li>
                            ))}
                        </ul>
                    </div>

                </aside>

                <aside className='w-[44.8%] h-full md:flex hidden items-center justify-end '>
                    <FeaturedEventCard />
                </aside>
            </div>

        </div>

        
    </section>
  )
}

export default EventsHero