import { Bai_700, Jet_700, Jet_800, Pop_400 } from "../fontAids/Fonts"
import SectionHeaderText from "../ui/SectionHeaderText"

const WhyNIHUBList = [
    {icon: '', header: 'Industry Backed Curriculum', description: 'Every programme is designed with or endorsed by Huawei, CISCO, Google, or another leader — not just academics.'},
    {icon: '', header: 'Zero Bureaucracy', description: 'Apply, get accepted, and start within days — not semesters. We move at the speed of the industry.'},
    {icon: '', header: 'Proven Outcomes', description: 'Our alumni are at top Nigerian fintechs, cloud companies, and startups. Results — not just certificates.'},
    {icon: '', header: 'Safe, Inclusive Environment', description: 'Every identity, background, and skill level is welcomed. We build psychologically safe spaces by design.'},
    {icon: '', header: 'Real Tools, Not Simulations', description: 'Students work with the same tools professionals use — live cloud environments, industry software, real datasets.'},
    {icon: '', header: 'End-to-End Support', description: 'From your first bootcamp to your first job offer — NIHUB walks alongside you every step of the way.'}
]

const partners = [
    'Huawei', 'CISCO', 'Google', 'Microsoft', 'MathWorks', 'MTN Foundation'
]

const WhyNihubSection = () => {
  return (
     <section className="pink-bg w-full">
        <div className="w-[1022px] mx-auto  py-28 px-8">
            <div className="flex flex-col items-center justify-center gap-4  mx-auto">
                <SectionHeaderText text="Why NIHUB"  />
                <div>
                    <Bai_700 className="text-[54px]   base-purple-text text-center  tracking-[-0.5px] leading-[67.5px] uppercase pt-4"  text="The Standard " />
                    <Bai_700 className="text-[54px]   base-purple-text text-center  tracking-[-0.5px] leading-[67.5px] uppercase"  text="Others Measure Against" />

                </div>
            </div>

            
            <div className="pt-14 grid grid-cols-2 gap-6">

                {WhyNIHUBList.map((reason, index) => (
                    <div style={{boxShadow: "0px 2px 14px 0px #2B10430F"}} key={index} className="bg-white rounded-2xl border border-[#2B10430F] relative flex justify-center">
                        <div className="p-6 flex flex-col ">
                            <div className="bg-[#2B104312] rounded-[14px] w-10 h-10 "> </div>
                            <Bai_700 className="text-[15px] base-purple-text pt-4 "  text={reason.header}/>
                            <Pop_400 className="text-[13px] base-purple-text-200 pt-2" text={reason.description} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="py-9 px-8 bg-white rounded-2xl mt-12">
                <Jet_700 className="tracking-[1.98px] uppercase text-[11px] base-purple-text text-center"  text="Service Partners & Accreditors"/>
                <div className="pt-7 flex items-center justify-center gap-5">

                    {partners.map((partner, index) => (
                        <div  key={index} style={{boxShadow: "0px 2px 10px 0px #2B104314"}} className="w-fit h-fit rounded-[14px]  "> 
                            <Bai_700 className="text-[14px] base-black-text w-fit h-fit py-2.5 px-5 rounded-[14px] border border-[#2B104312] " text={partner}/>
                        </div>
                    ))}
                </div>

            </div>

            
        </div>
    </section>
  )
}

export default WhyNihubSection