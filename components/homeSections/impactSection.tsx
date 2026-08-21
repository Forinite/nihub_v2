import { ImpactStats } from "@/static-data"
import SectionHeaderText from "../ui/SectionHeaderText"
import SectionSubHeaderText from "../ui/SectionSubHeaderText"
import { Bai_600, Bai_700 } from "../fontAids/Fonts"
import DotGridBG from "./bg/DotGridBG"


const ImpactSection = () => {
  return (
    <section className="pink-bg common-section-padding relative  ">

        
        <div className="absolute  md:w-full w-[1008px] h-full top-0 ">
            <DotGridBG />
        </div>
        


        <div className="flex flex-col items-center text-center ">
            <SectionHeaderText text="Impact & Recognition" />
            <div className="pt-4" />
            <SectionSubHeaderText text2="Our Impact in Numbers"/>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-4 pt-14 gap-10 md:gap-auto common-max-width mx-auto">
            {ImpactStats.map((stat, index) => (
                <li key={index}  className="flex flex-col items-center justify-center md:px-4 px-10 text-center ">
                    <Bai_700 className="text-[50px] md:text-[58px] tracking-[-1.5px] leading-[50px] md:leading-[58px] base-purple-text" text={stat.value} /> 
                    <Bai_600 className="text-[12px] md:text-[16px] tracking-[1.2px] leading-[18px] md:leading-[16px] uppercase pt-2 base-purple-text-200" text={stat.label}/>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default ImpactSection