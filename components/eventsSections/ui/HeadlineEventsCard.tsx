import { Bai_600, Bai_700, Jet_400, Jet_600, Jet_700, Pop_400 } from "@/components/fontAids/Fonts"
import { CalenderIcon, LocationIcon, PeopleIcon, TicketIcon } from "@/static-data/images"
import Image from "next/image"
import Link from "next/link"

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
const HeadlineEventsCard = ({event} : EventProps ) => {
  return (
    <div style={{boxShadow: '0px 4px 24px 0px #2B104317'}} className={`rounded-2xl border border-[#2B104312] overflow-hidden`}>
        <div style={{background: `linear-gradient(135deg, rgba(${event.rgb}, 0.94) 0%, rgba(${event.rgb}, 0.667) 100%)`}} className="w-full h-[176px] p-6 flex flex-col justify-between ">
            <div className="flex items-start justify-between">
                <div className="w-10 h-10  bg-[#FFFFFF33] rounded-[14px]">

                </div>

                <div className={` w-fit h-fit flex items-center py-1 px-2.5 rounded-full gap-1.5 ${event.status == 'Upcoming'? 'bg-[#F973161F]' : 'bg-[#2B10431A]'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${event.status == 'Upcoming'? 'bg-[#F97316]' : 'bg-[#6A3FA0]'}`} />
                    <Jet_700 className={`text-[10px] tracking-[0.25px] uppercase ${event.status == 'Upcoming'? 'text-[#C2410C]' : 'base-purple-text'}`}  text={event.status} />
                </div>
            </div>
            <div className="pt-[7.25px]">
                <Jet_700 className="text-[10px] text-[#FFFFFF99]  tracking-[1.2px] uppercase"   text={event.type} />
                <Bai_700 className="pt-0.5 text-[22px] text-white uppercase " text={event.name} />

            </div>
        </div>
        <div className="p-6 bg-white h-full">
            <Pop_400 className="text-[14px] base-purple-text-100" text={event.description} />

            <div className="pt-4 flex flex-col gap-1.5">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                        <Image src={CalenderIcon} alt="CalenderIcon" width={12} height={12} />
                        <Jet_400 className="text-[12px] base-purple-text-300" text={event.date}  />
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Image src={CalenderIcon} alt="ClockIcon" width={12} height={12} />
                        <Jet_400 className="text-[12px] base-purple-text-300" text={event.starts} />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                        <Image src={LocationIcon} alt="VenueIcon" width={12} height={12} />
                        <Jet_400 className="text-[12px] base-purple-text-300" text={event.venue}  />
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Image src={PeopleIcon} alt="PeopleIcon" width={12} height={12} />
                        <Jet_400 className="text-[12px] base-purple-text-300" text={event.seats + ' seats'} />
                    </div>
                </div>

            </div>
            <div className="pt-4 gap-1.5 flex items-center gap-1.5">
                {event.keywords.map((keyword, index) => (
                    <div style={{background: `rgba(${event.rgb}, 0.06)`, border: `1px solid rgba(${event.rgb}, 0.16)`, color: `rgb(${event.rgb})`}} key={index} className="w-fit h-fit py-1 px-2.5 rounded-full">
                        <Jet_600  className="text-[10px]" text={keyword} />
                    </div>
                ))}
            </div>
            <div className="pt-5 flex items-center gap-3">
                <Link style={{background: `rgb(${event.rgb})`, boxShadow: `0px 4px 14px 0px rgba(${event.rgb}, 0.27);)`}} href={event.registerLink} className="py-2.5 px-5 gap-2 rounded-[10px] w-fit h-fit flex items-center ">
                    <Image  src={TicketIcon} alt="Ticket Icon" width={13} height={13} />
                    <Bai_700 className="text-white text-[13px]" text="Register Now"/>
                </Link>

                <Link className="flex items-center base-grey-text-100 gap-1.5" href={event.learnMoreLink}>
                    <Bai_600 className="text-[13px] " text="Learn more" />
                    <Image src={TicketIcon} alt="LinkIcon " width={12} height={12}  />
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default HeadlineEventsCard