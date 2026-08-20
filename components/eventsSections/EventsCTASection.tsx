import Link from "next/link"
import { Bai_700, Jet_600, Jet_700, Pop_400 } from "../fontAids/Fonts"
import SectionHeaderText from "../ui/SectionHeaderText"
import Image from "next/image"
import { CalenderIcon } from "@/static-data/images"
import { LinkTemp1 } from "../ui/LinkTemps"
import { AllEventsList } from "./AllEventsSection"

const EventsCTASection = () => {
  return (
      <section className="pink-bg w-full">
        <div className="w-[1022px] mx-auto  py-28 px-8">
            <div className="flex flex-col items-center justify-center gap-4 mx-auto">
                <SectionHeaderText text="Don't Miss Out"  />
                <Bai_700 className="text-[56px]  max-w-[420]  base-purple-text text-center   tracking-[-0.5px] leading-[70px] uppercase pt-5"  text="Your Next Big Opportunity Starts Here" />
                <Pop_400 className="pt-5 text-[16px] max-w-[616px] leading-[28.8px] base-purple-text-100 text-center"  text="Register for upcoming events, apply for a bootcamp, or pitch your idea at the next Demo Day. Everything is free for FUTMinna students."/>
            </div>     

            <div className="pt-8 text-[13px] flex items-center gap-3 justify-center">
                <Link style={{background: '#2B1043', boxShadow: `0px 4px 14px 0px #2B104359`}} href={'#'} className="py-3.5 px-8 gap-2 rounded-[10px] w-fit h-fit flex items-center ">
                    <Bai_700 className="text-white " text="Register Now"/>
                    <Image  src={CalenderIcon} alt="Calender Icon" width={14} height={14} />
                </Link>
                <LinkTemp1 className="py-3.5 px-8 gap-2 rounded-[10px] w-fit h-fit border  border-[#2B104333] base-purple-text"  text="Apply to a Bootcamp" href="#" />
            </div>    

            <div className="pt-10 flex items-baseine justify-center gap-2 ">
                <Jet_700  className="text-[11px] tracking-[0.28px] base-purple-text-300"  text="Coming Up:"/>
                <div className="flex items-center gap-2">
                    {AllEventsList.slice(0,3).map((event, index) => (
                        <div key={index} style={{border: `1px solid rgba(${event.rgb}, 0.14)`, background: `rgba(${event.rgb}, 0.06)`, color: `rgb(${event.rgb})`}} className="py-1 px-2.5 w-fit h-fit rounded-full flex items-center gap-1.5"> 
                            <div style={{ background: `rgb(${event.rgb})`}}  className="  w-1.5 h-1.5 rounded-full"/>
                            <Jet_600 text={event.name} className=" w-fit h-fit rounded-full text-[11px]" />
                        </div>
                    ))}
                </div>
            </div>   
        </div>
    </section>
  )
}

export default EventsCTASection