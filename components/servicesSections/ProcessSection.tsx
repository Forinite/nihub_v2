import { padNum } from "@/lib/utils"
import { Bai_700, Jet_800, Pop_400 } from "../fontAids/Fonts"
import SectionHeaderText from "../ui/SectionHeaderText"

const ProcessList = [
    {icon: '', header: 'Choose a Service', description: 'Browse our catalogue and identify the programme or resource that fits your goals.'},
    {icon: '', header: 'Apply or Register', description: 'Fill out a short form — most programmes are free for FUTMinna students.'},
    {icon: '', header: 'Learn & Build', description: 'Participate fully and put your skills to work on real projects and challenges.'},
    {icon: '', header: 'Launch & Grow', description: 'Graduate with a portfolio, a network, and the confidence to take on the industry.'}
]
const ProcessSection = () => {
  return (
    <section className="pink-bg w-full">
        <div className="w-[1022px] mx-auto  py-28 px-8">
            <div className="flex flex-col items-center justify-center gap-4 max-w-121 mx-auto">
                <SectionHeaderText text="The Process"  />
                <Bai_700 className="text-[56px]  base-purple-text text-center    tracking-[-0.5px] leading-[70px] uppercase pt-4"  text="Simple to Start, Built to Scale" />
                <Pop_400 className="pt-4 text-[16px] leading-[24px] base-purple-text-100 text-center"  text="Four steps from discovery to launch — no red tape, no waitlists."/>
            </div>

            
            <div className="pt-14 grid grid-cols-2 gap-6">

                {ProcessList.map((process, index) => (
                    <div style={{boxShadow: "0px 2px 14px 0px #2B10430F"}} key={index} className="bg-white rounded-2xl border border-[#2B10430F] relative flex justify-center">
                        <Jet_800 className=" absolute -top-[9.5px] text-[10px] text-white base-purple-bg px-2.5 py-0.5 rounded-full w-fit h-fit " text={padNum(index+1)} />
                        <div className="p-6 flex flex-col items-center justify-center ">
                            <div className="pt-2">
                                <div className="bg-[#2B104312] rounded-[14px] w-12 h-12 mx-auto"> </div>
                            </div>
                            <Bai_700 className="text-[15px] base-purple-text pt-4 text-center"  text={process.header}/>
                            <Pop_400 className="text-[13px] base-purple-text-200 pt-2 text-center" text={process.description} />
                        </div>
                    </div>
                ))}
            </div>

            
        </div>
    </section>
  )
}

export default ProcessSection