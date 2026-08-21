import { Bai_700, Jet_400, Jet_600, Jet_700, Pop_400, Pop_600 } from "@/components/fontAids/Fonts"
import { LinkTemp1 } from "@/components/ui/LinkTemps"
import { CalenderIcon, LocationIcon } from "@/static-data/images"
import Image from "next/image"
import Link from "next/link"

interface TrainingsProps {
    training: {  
        rgb: number[], 
        icon: any, 
        name: string,
        description: string, 
        status: string,
        date: string,
        duration: string,
        venue: string,
        partner?: string,
        cost: string,
        applylink: string , 
        detailLink: string,

    }
}
const TrainingsCard = ({training} :TrainingsProps) => {
  return (
    <div style={{borderTop: '1px solid rgba(43, 16, 67, 0.06)', boxShadow: '0px 2px 14px 0px rgba(43, 16, 67, 0.06)'}}  className="relative pt-1.5 w-full rounded-2xl overflow-hidden">
            <div style={{background: `linear-gradient(90deg,  rgb(${training.rgb}) 0%, rgba(${training.rgb}, 0.4) 100%)`}} className="absolute top-0 left-0 opacity-50 rounded-2xl z-10 w-full h-full ">
    
            </div>
            <div  className="relative h-full flex flex-col  justify-between bg-white z-20 p-6  rounded--b-2xl" >
               
               <div>
                    <div className="flex items-center justify-between pb-4">
                        <div style={{background: `rgba(${training.rgb}, 0.05)`}} className="w-11 h-11 rounded-[14px]"> </div>
                        <div className={` w-fit h-fit flex items-center py-1 px-2.5 rounded-full gap-1.5 ${training.status == 'Upcoming'? 'bg-[#F973161F]' : 'bg-[#22C55E1F]'}`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${training.status == 'Upcoming'? 'bg-[#F97316]' : 'bg-[#22C55E]'}`} />
                                <Jet_700 className={`text-[10px] tracking-[0.25px] uppercase ${training.status == 'Upcoming'? 'text-[#C2410C]' : 'text-[#16A34A]'}`}  text={training.status} />
                            </div>
                        </div>
     
               </div>
                
                <Bai_700 className="text-[17px] base-purple-text pb-2" text={training.name} />
                <Pop_400 className="base-purple-text-200 text-[13px] leading-[21.13px] base-purple-200 pb-4" text={training.description} />   
    
                <div className=" flex flex-col gap-2 pb-4">
                    <div className="flex items-center gap-1.5">
                        <Image src={CalenderIcon} alt="CalenderIcon" width={12} height={12} />
                        <Jet_400 className="text-[12px] base-purple-text-300" text={training.duration}  />
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Image src={CalenderIcon} alt="ClockIcon" width={12} height={12} />
                        <Jet_400 className="text-[12px] base-purple-text-300" text={training.date} />
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Image src={LocationIcon} alt="VenueIcon" width={12} height={12} />
                        <Jet_400 className="text-[12px] base-purple-text-300" text={training.venue}  />
                    </div>
                </div>
    
    
                <div className="pb-4 flex items-center gap-2">
                    {
                        training.partner && <div style={{background: `rgba(${training.rgb}, 0.08)`, border: `1px solid rgba(${training.rgb}, 0.19)`, color: `rgba(${training.rgb}, 1)`}} className="w-fit h-fit rounded-full"> <Jet_700 className=" text-[10px] py-1 px-2.5  w-fit h-fit border border-[#22C55E33] rounded-full " text={training.partner} /> </div>
                    }
                    {
                        training.cost.toLowerCase() == 'free'&& <Jet_700 className="text-[#16A34A] text-[10px] py-1 px-2.5  w-fit h-fit bg-[#22C55E1A] border border-[#22C55E33] rounded-full " text="Free" />
                    }

                </div>
                <div style={{borderTop: '1px solid #2B104312'}} className="pt-4 flex items-center gap-3">
                    <div style={{background: `rgb(${training.rgb})`}} className="w-fit h-fit rounded-[10px]">
                        <LinkTemp1 className="py-2.5 px-4 rounded-[10px] gap-2 text-[13px] text-white w-fit h-fit" href={training.applylink} text={'Apply Now'} linkIndex={0} />
                    </div>
                    <Link className='flex items-center w-fit gap-2 base-grey-text-100 text-[12px]' href={training.detailLink}> 
                        <Jet_600 text="Topics" />
                    </Link>
                    
                </div>
            </div>
            
        </div>
  )
}

export default TrainingsCard