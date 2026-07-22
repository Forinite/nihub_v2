import { ImpactStats } from "@/static-data"
import SectionHeaderText from "../ui/SectionHeaderText"
import SectionSubHeaderText from "../ui/SectionSubHeaderText"
import { Bai_600, Bai_700 } from "../fontAids/Fonts"
import DotGridBG from "./bg/DotGridBG"


const ImpactSection = () => {
  return (
    <section className="pink-bg common-section-padding relative  ">

        <DotGridBG />

        <div className="flex flex-col items-center ">
            <SectionHeaderText text="Impact & Recognition" />
            <div className="pt-4" />
            <SectionSubHeaderText text2="Our Impact in Numbers"/>
        </div>

        <ul className="grid grid-cols-4 pt-14 common-max-width mx-auto">
            {ImpactStats.map((stat, index) => (
                <li key={index}  className="flex flex-col items-center justify-center px-4 ">
                    <Bai_700 className="text-[58px] tracking-[-1.5px] leading-[58px] base-purple-text" text={stat.value} /> 
                    <Bai_600 className="text-[16px] tracking-[1.2px] leading-[16px] uppercase pt-2 base-purple-text-200" text={stat.label}/>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default ImpactSection