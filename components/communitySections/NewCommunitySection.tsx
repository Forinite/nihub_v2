import Image from "next/image"
import { Bai_700, Jet_700, Pop_400 } from "../fontAids/Fonts"
import { StarIcon } from "@/static-data/images"
import { LinkTemp1, LinkTemp2 } from "../ui/LinkTemps"
import DotGridBG from "../homeSections/bg/DotGridBG"

const Benefits = [
    {icon: '', desc: 'Dedicated space & resources from NIHUB'},
    {icon: '', desc: 'Mentorship from experienced communtiy leads'},
    {icon: '', desc: 'Access to our industry partner network'}

]
const NewCommunitySection = () => {
  return (
    <section className="py-24">

        <div className="w-[1022px] mx-auto px-8 relative">
            
            <div className="base-purple-bg p-14 w-full rounded-2xl relative">
                <div className=" absolute  z-10 top-0 left-0 w-full h-full" style={{background: 'radial-gradient(60% 80% at 100% 50%, rgba(255, 178, 52, 0.15) 0%, rgba(255, 178, 52, 0) 100%)'}} />
                <div className=' absolute z-0 w-full h-full top-0 scale-[171.055%] opacity-10'>
                    <DotGridBG />
                </div>
                <div className="relative z-20 grid grid-cols-2 gap-10">
                    <div className="w-full py-1.5">
                        <div className="h-[46.75px]">
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full w-fit border border-[#FFB2344D] bg-[#FFB23426] text-[#FFB234]">
                                <Image  src={StarIcon} alt="star icon" width={11} height={11} />
                                <Jet_700 className="text-[11px] uppercase tracking-[0.55px] w-fit"  text="New Communtiy" />
                            </div>
                        </div>
                        <Bai_700  className="uppercase text-[48px] text-white leading-15 tracking-[-0.5px] s" text="Don't See Your Niche?"/>
                        <Pop_400 className="pt-4 text-[15px] leading-[26.25px] text-[#FFFFFF99]" text="NIHUB actively supports passionate students in founding new communities. Bring your idea — we'll provide the space, mentorship, and resources to make it real." />

                    </div>
                    <div className="grid grid-cols-1 grid-rows-4 gap-4">
                        {Benefits.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 rounded-[14px] bg-[#FFFFFF12] border border-[#FFFFFF1A]">
                                <div className="w-8 h-8 rounded-[10px] bg-[#FFB23433]">
                                </div>

                                <Pop_400 className="text-[13px] text-[#FFFFFFCC]" text={item.desc} />
                            </div>
                        ))}

                        <div className="flex items-center pt-2 gap-3 text-white text-[13px]">
                            <div style={{boxShadow: '0px 4px 14px 0px #2B104359'}} className="w-fit h-fit rounded-[10px]">
                                <LinkTemp1 text="Propose a Community" href="/" className=" base-purple-bg py-3 px-6 rounded-[10px] gap-2  " linkIndex={0} />
                            </div>
                            <LinkTemp2 text="Contact Us" href="/" className="border border-[#FFFFFF33] py-3 px-6 rounded-[10px] gap-2 " linkIndex={1} />
                        </div>
                    </div>
                </div>
                


            </div>

        </div>
        
    </section>
  )
}

export default NewCommunitySection