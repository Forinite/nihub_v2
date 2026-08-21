import { ImpactStats } from "@/static-data"
import { Bai_700, Jet_600, Jet_700, Pop_400 } from "../fontAids/Fonts"
import SectionHeaderText from "../ui/SectionHeaderText"
import { ArrowBentRightIcon, BookIcon, ChipIcon,  PurpleBoltIcon, PurpleMedalIcon, PurpleStarIcon, StatUpIcon } from "@/static-data/images"
import AchievementCard from "./ui/AchievementCard"
import { LinkTemp1 } from "../ui/LinkTemps"
import DotGridBG from "../homeSections/bg/DotGridBG"
import { achievements } from "@/static-data/about_data"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"




const AchievementsSection = () => {
  return (
    <section className="  common-section-padding pink-bg">

        <div className=" relative about-page-common-max-width mx-auto">
            <div>
                <SectionHeaderText text="Achievements"  />
                <div className="md:flex justify-between items-center  pt-4">
                    <Bai_700  className="text-[46px]  base-purple-text text-left w-75.75   tracking-[-0.5px] leading-[57.5px] uppercase"  text="A Record of Excellence" />
                    <Pop_400 className="text-[16px] md:text-right md:max-w-110 base-purple-text-100 leading-7 pt-10 md:pt-0 " text="From national competitions to global partnerships, NIHUB has consistently punched above its weight — earning recognition that reflects the calibre of our community." />
                </div>
            </div>
            <div className="pt-16 grid md:grid-cols-4 grid-cols-2 gap-4">
                {ImpactStats.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center md:w-[227.75px] md:h-[110.5px] py-6 px-5 bg-white rounded-2xl  about-page-common-card-shadow ">
                        <Bai_700 text={item.value} className="text-[40px] tracking-[-1px] base-purple-text text-center" />
                        <Jet_600 text={item.label} className="text-[11px] base-purple-text-300 tracking-[0.55px] text-center  uppercase" />
                    </div>
                ))}
            </div>

            <div className="pt-14">
                
                <div className="grid md:grid-cols-2 gap-5">
                    {achievements.map((item, index) => (
                        <AchievementCard key={index} year={item.year} img={item.img} title={item.title} description={item.description} />
                    ))}
                </div>
            </div>

            <div className="pt-14 relative overflow-hidden">
                
                <div className=" relative w-full story-cta-shadow base-purple-bg rounded-2xl overflow-hidden">
    <               div className="opacity-10">
                        <DotGridBG />
                    </div>
                    <div  className="absolute w-full h-full story-cta-gradient">

                    </div>
                    <div className=" relative z-30 p-8 md:flex items-center justify-between ">
                         <div className="md:max-w-[389.47px]">
                            <Jet_700 text="Since 2018" className="uppercase text-[11px] tracking-[1.65px] text-[#FFFFFF66] " />
                            <Bai_700 text="Building the Future, One Innovator at a Time" className="uppercase text-[24px] md:text-[30px] text-white leading-[37.5px]  pt-2 " />
                        </div>
                        <Link href={'/story'} className="story-link-shadow py-3 px-6 md:mt-0 mt-8 rounded-[10px] bg-[#FFB234] md:w-fit h-fit base-purple-text text-[13px]  transition-all flex items-center  space-x-2  capitalize" >
                            <Bai_700  text="View Our Story" />
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default AchievementsSection