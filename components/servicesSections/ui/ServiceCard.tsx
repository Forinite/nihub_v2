import { Bai_700, Jet_400, Jet_600, Jet_700, Pop_400, Pop_600 } from "@/components/fontAids/Fonts"
import { LinkTemp1 } from "@/components/ui/LinkTemps"
import Link from "next/link"

interface serviceProps {
    service : {
        icon: any, 
        label: string, 
        mainConcept: string,
        description: string, 
        rgb: number[], 
        catchPhrase: string, 
        keywords: string[], 
        apply: {label: string , link: string },  
        detailLink: string
    }
}

const ServiceCard = ({service} :serviceProps) => {
  return (
    <div style={{borderTop: '1px solid rgba(43, 16, 67, 0.06)', boxShadow: '0px 2px 14px 0px rgba(43, 16, 67, 0.06)'}}  className="relative pt-1.5 w-full rounded-2xl overflow-hidden">
            <div style={{background: `linear-gradient(90deg,  rgb(${service.rgb}) 0%, rgba(${service.rgb}, 0.4) 100%)`}} className="absolute top-0 left-0 opacity-50 rounded-2xl z-10 w-full h-full ">
    
            </div>
            <div  className="relative h-full flex flex-col  justify-between bg-white z-20 p-6 " >
               
               <div>
                    <div className="flex items-center justify-between pb-5">
                        <div style={{background: `rgba(${service.rgb}, 0.05)`}} className="w-12 h-12 rounded-[14px] flex items-center justify-center">
                            <service.icon color={`rgba(${service.rgb}`} width="22" height="22" />
                        </div>
                        <Jet_700 className="text-[10px] tracking-[0.25px] uppercase py-1 px-2.5 w-fit h-fit base-purple-text-300 bg-[#2B10430F] rounded-full" text={service.mainConcept} />
                    </div>
                    <Bai_700 className="text-[16px] base-purple-text pb-1.5" text={service.label} />
                    
                    <span style={{color: `rgb(${service.rgb})`}}>
                        <Pop_600  className="pb-3 text-[12px]" text={service.catchPhrase} />
                    </span>
        
                    <Pop_400 className="base-purple-text-200 text-[13px] leading-[21.13px] mb-5  " text={service.description} />
        
                    <div className="flex items-center flex-wrap gap-2 pb-5">
                        {service.keywords.map((keyword, i) => (
                            <div key={i}  className="flex items-center gap-2"> 
                                <Jet_600 className=" text-[10px] base-purple-text-300 w-fit h-fit " text={keyword} />
                                
                                {i < service.keywords.length -1 && <div  className="w-[2px] h-[2px] rounded-full bg-[#9B8AB0] "/>}
                            </div>
                        ))}
                    </div>
               </div>
                
    
                <div style={{borderTop: '1px solid #2B104312'}} className="pt-4 flex items-center gap-3">
                    <div style={{background: `rgb(${service.rgb})`}} className="w-fit h-fit rounded-[10px]">
                        <LinkTemp1 className="py-2.5 px-4 rounded-[10px] gap-2 text-[13px] text-white w-fit h-fit" href={service.apply.link} text={service.apply.label} linkIndex={0} />
                    </div>
                    <Link  className='flex items-center w-fit gap-2 base-grey-text-100 text-[12px]' href={service.detailLink}> 
                        <Jet_600 text="Details ↓" />
                    </Link>
                    
                </div>
            </div>
            
        </div>
  )
}

export default ServiceCard