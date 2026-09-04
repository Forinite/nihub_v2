import { communityImpactStats } from "@/static-data/communties_data"
import { Bai_700, Jet_800, Pop_400 } from "../fontAids/Fonts"
import SectionHeaderText from "../ui/SectionHeaderText"


const CommunityImpactSection = () => {
  return (
    <section className="pink-bg">
        <div className="max-w-[1022px] mx-auto  py-28 px-8">
            <div className="flex flex-col items-center justify-center gap-4">
                <SectionHeaderText text="Community Impact"  />
                <Bai_700  className="text-[40px] md:text-[56px]  base-purple-text text-center max-w-96.25   tracking-[-0.5px] leading-[50px] md:leading-[70px] uppercase pt-4"  text="Strength In Numbers" />
            </div>

            <div className="pt-14 grid md:grid-cols-4 grid-cols-2  gap-5"> 
                {communityImpactStats.map((stat, index) => (
                  <div style={{border: '1px solid #2B10430F', boxShadow: '0px 2px 16px 0px #2B104312'}} key={index} className="py-7 px-5 rounded-2xl bg-white flex flex-col items-center justify-center text-center">
                    <Bai_700 className=" text-[44px] leading-11 tracking-[-1px] base-purple-text" text={stat.value}/>
                    <Jet_800 className="pt-1 text-[12px] tracking-[0.3px] base-purple-text uppercase" text={stat.label} />
                    <Pop_400 className="pt-1 text-[11px] base-purple-text-300 " text={stat.note} />
                    
                  </div>
                ))}
            </div>
        </div>

    </section>
  )
}

export default CommunityImpactSection