import { ImpactStats } from "@/static-data"
import { Bai_700, Jet_600, Jet_700, Pop_400 } from "../fontAids/Fonts"
import SectionHeaderText from "../ui/SectionHeaderText"
import { BookIcon, ChipIcon,  PurpleBoltIcon, PurpleMedalIcon, PurpleStarIcon, StatUpIcon } from "@/static-data/images"
import AchievementCard from "./ui/AchievementCard"
import { LinkTemp1 } from "../ui/LinkTemps"
import DotGridBG from "../homeSections/bg/DotGridBG"
import { achievements } from "@/static-data/about_data"




const AchievementsSection = () => {
  return (
    <section className="  common-section-padding pink-bg">

        <div className=" relative about-page-common-max-width mx-auto">
            <div>
                <SectionHeaderText text="Achievements"  />
                <div className="flex justify-between items-center  pt-4">
                    <Bai_700  className="text-[46px]  base-purple-text text-left w-75.75   tracking-[-0.5px] leading-[57.5px] uppercase"  text="A Record of Excellence" />
                    <Pop_400 className="text-[16px] text-right w-110 base-purple-text-100 leading-7 " text="From national competitions to global partnerships, NIHUB has consistently punched above its weight — earning recognition that reflects the calibre of our community." />
                </div>
            </div>
            <div className="pt-16 flex items-center justify-between">
                {ImpactStats.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center w-[227.75px] h-[110.5px] py-6 px-5 bg-white rounded-2xl  about-page-common-card-shadow ">
                        <Bai_700 text={item.value} className="text-[40px] tracking-[-1px] base-purple-text text-center" />
                        <Jet_600 text={item.label} className="text-[11px] base-purple-text-300 tracking-[0.55px] text-center  uppercase" />
                    </div>
                ))}
            </div>

            <div className="pt-14">
                
                <div className="grid grid-cols-2 gap-5">
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
                    <div className=" relative z-30 p-8 flex items-center justify-between ">
                         <div className="w-[389.47px]">
                            <Jet_700 text="Since 2018" className="uppercase text-[11px] tracking-[1.65px] text-[#FFFFFF66] " />
                            <Bai_700 text="Building the Future, One Innovator at a Time" className="uppercase text-[30px] text-white leading-[37.5px]  pt-2 " />
                        </div>
                        <LinkTemp1 href="/story" text="View Our Story"  linkIndex={0} 
                            className="story-link-shadow py-3 px-6 rounded-[10px] bg-[#FFB234] w-fit h-fit base-purple-text text-[13px]" 
                        />
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default AchievementsSection