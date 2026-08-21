import { Bai_700, Jet_400, Jet_600, Jet_700, Pop_400 } from "@/components/fontAids/Fonts"
import { CalenderIcon, LocationIcon, PeopleIcon } from "@/static-data/images"
import Image from "next/image"

interface EventProps {
    event: 
    {
        rgb: number[],
        icon: any,
        status: string,
        type: string,
        name: string,
        description: string,
        date: string,
        starts: string,
        venue: string,
        seats: string,
        keywords: string[],
        registerLink: string,
        learnMoreLink: string

    }
}


const EventCard = ({event} :EventProps) => {
  return (
    <div  style={{borderTop: '1px solid rgba(43, 16, 67, 0.06)', boxShadow: '0px 2px 14px 0px rgba(43, 16, 67, 0.06)'}} className="relative pt-1.5 w-fit rounded-[14px] overflow-hidden">
        
            <div style={{background: `linear-gradient(90deg,  rgb(${event.rgb}) 0%, rgba(${event.rgb}, 0.4) 100%)`}} className="absolute top-0 left-0 opacity-50 rounded-2xl z-10 w-full h-full ">
    
            </div>
            <div  className="relative h-full flex flex-col  justify-between bg-white z-20 p-6 " >
               
               <div className="flex items-start justify-between pb-4">
                    <div style={{background: `rgba(${event.rgb}, 0.05)`}} className="w-10 h-10  bg-[#FFFFFF33] rounded-[14px] flex items-center justify-center">
                        <event.icon  color={`rgb(${event.rgb})`} width='20' height='20' />
                    </div>
    
                    <div className={` w-fit h-fit flex items-center py-1 px-2.5 rounded-full gap-1.5 ${event.status == 'Upcoming'? 'bg-[#F973161F]' : 'bg-[#2B10431A]'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${event.status == 'Upcoming'? 'bg-[#F97316]' : 'bg-[#6A3FA0]'}`} />
                        <Jet_700 className={`text-[10px] tracking-[0.25px] uppercase ${event.status == 'Upcoming'? 'text-[#C2410C]' : 'base-purple-text'}`}  text={event.status} />
                    </div>
                </div>
                <div style={{color: `rgb(${event.rgb})`}} className="">
                    <Jet_700  className="text-[10px] text-[#FFFFFF99]  tracking-[0.25px] uppercase pb-1"   text={event.type} />
                    <Bai_700 className="pb-2 text-[16px] base-purple-text  " text={event.name} />
                </div>
                <Pop_400 className="text-[13px] base-purple-text-200 line-clamp-2 mb-4"  text={event.description}/> 
                <div className=" flex flex-col gap-2 pb-4">
                    <div className="flex items-center gap-1.5">
                        <Image src={CalenderIcon} alt="CalenderIcon" width={12} height={12} />
                        <Jet_400 className="text-[12px] base-purple-text-300" text={event.date}  />
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Image src={CalenderIcon} alt="ClockIcon" width={12} height={12} />
                        <Jet_400 className="text-[12px] base-purple-text-300" text={event.starts} />
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Image src={LocationIcon} alt="VenueIcon" width={12} height={12} />
                        <Jet_400 className="text-[12px] base-purple-text-300" text={event.venue}  />
                    </div>
                </div>

                <div className="pb-5 gap-1.5 flex items-center gap-1.5">
                    {event.keywords.slice(0,3).map((keyword, index) => (
                        <div style={{background: `rgba(${event.rgb}, 0.06)`, border: `1px solid rgba(${event.rgb}, 0.14)`, color: `rgb(${event.rgb})`}} key={index} className="w-fit h-fit py-0.5 px-2 rounded-full">
                            <Jet_600  className="text-[10px]" text={keyword} />
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
  )
}

export default EventCard