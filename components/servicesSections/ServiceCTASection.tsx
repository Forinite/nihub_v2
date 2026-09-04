import Image from "next/image"
import { Bai_700, Jet_700, Pop_400 } from "../fontAids/Fonts"
import { LinkTemp1, LinkTemp2 } from "../ui/LinkTemps"
import { RocketIcon } from "../SVGAids/SVG"
import DotGridBG from "../homeSections/bg/DotGridBG"

const AccessPoints = [
    {
        header: 'For Students', 
        desc: 'Free access to training, labs, certifications, and mentorship.', 
        apply: {label:'Apply Now' , link: '#'}
    },
    {
        header: 'For Organisations', 
        desc: 'Bespoke training, recruitment pipelines, and research partnerships.', 
        apply: {label:'Partner With Us' , link: '#'}
    }
]

const ServiceCTASection = () => {
  return (
      <section className="md:py-24 py-20">
    
            <div className="max-w-[1022px] mx-auto md:px-8 px-6 relative">
                
                <div className="base-purple-bg md:px-16 md:py-10 py-10 px-8 w-full rounded-2xl relative overflow-hidden">
                    <div className=' absolute z-0 w-full h-full top-0 scale-[181.515%] opacity-10'>
                        <DotGridBG />
                    </div>
                    <div className=" absolute  z-10 top-0 left-0 w-full h-full" style={{background: 'radial-gradient(60% 80% at 100% 50%, rgba(255, 178, 52, 0.15) 0%, rgba(255, 178, 52, 0) 100%)'}} />
                    <div className=" absolute  z-10 top-0 left-0 w-full h-full" style={{background: 'radial-gradient(50% 60% at 0% 50%, rgba(106, 63, 160, 0.25) 0%, rgba(106, 63, 160, 0) 100%)'}} />

        

                    <div className="relative z-20 grid md:grid-cols-2 gap-12">
                        <div className="w-full py-1.5">
                            <div className="h-[46.75px]">
                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full w-fit border border-[#FFB2344D] bg-[#FFB23426] text-[#FFB234]">
                                    <RocketIcon color="#FFB234" width="11" height="11" />
                                    <Jet_700 className="text-[11px] uppercase tracking-[0.55px] w-fit"  text="Start Today " />
                                </div>
                            </div>
                            <div className="md:w-auto max-w-[295px]">
                                <Bai_700  className="uppercase  text-[36px] md:text-[52px]  leading-[45px] md:leading-[65px] text-white  tracking-[-0.5px] " text="Ready to Access Everything "/>
                                <Bai_700  className="uppercase text-[36px] md:text-[52px] leading-[45px] md:leading-[65px] text-white tracking-[-0.5px] md:max-w-50" text=" NIHUB "/>                               
                                <Bai_700  className="uppercase text-[36px] md:text-[52px] leading-[45px] md:leading-[65px] text-white tracking-[-0.5px] md:max-w-50" text=" Has to Offer? "/>                               
                            </div>
                            <Pop_400 className="pt-5 text-[16px] leading-[26.25px] text-[#FFFFFF99]" text="Most services are free for FUTMinna students. Join today and unlock your full potential." />
    
                        </div>
                        <div className="flex flex-col  justify-center gap-4">
                             {AccessPoints.map((item, index) => (
                                <div key={index} className="flex  items-center  p-5 rounded-[14px] bg-[#FFFFFF12] border border-[#FFFFFF1F]">
                                    <div className="md:pr-0 pr-2">
                                        <Bai_700 className="text-[14px] text-white " text={item.header} />
                                        <Pop_400 className="text-[12px] text-[#FFFFFF8C]" text={item.desc} />
                                    </div>
                                    <LinkTemp1 className='min-w-fit text-[12px] w-fit h-fit py-2 px-4 gap-1.5 text-white rounded-[10px] bg-[#FFFFFF26]' href={item.apply.link} text={item.apply.label} />
                                </div>
                            ))}
                                
                            <div className="flex md:flex-row flex-col md:items-center pt-2 gap-3 text-[13px]">
                                <div style={{boxShadow: '0px 4px 18px 0px #FFB23473'}} className="w-fit h-fit rounded-[10px]">
                                    <LinkTemp1 text="Get Started Free" href="#" className=" base-purple-text bg-[#FFB234] py-3 px-6 rounded-[10px] gap-2  " linkIndex={0} />
                                </div>
                                <LinkTemp2 text="Contact Us" href="/" className="border border-[#FFFFFF33] py-3 px-6 w-fit rounded-[10px] gap-2 text-white opacity-85 " linkIndex={1} />
                            </div>

                        </div>

                    </div>
                    
    
    
                </div>
    
            </div>
            
        </section>
  )
}

export default ServiceCTASection