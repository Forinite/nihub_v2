import { CommunitiesList } from "@/static-data/communties_data"
import { Bai_700, Jet_700, Pop_400 } from "../fontAids/Fonts"
import SectionHeaderText from "../ui/SectionHeaderText"
import CommunityCard from "./ui/CommunityCard"

const activeClassNames = 'text-white'

const activeBG = {background: '#2B1043', borderTop: '1px solid #000000', boxShadow: '0px 4px 12px 0px #2B10434D'}
const inActiveBG = {background: '#2B10430F', border: '1px solid #2B10431F'}

const filters = ['Development', 'AI/ML', 'Security', 'Networking', 'Blockchain', 'Cloud', 'Internship', 'Community']



const AllCommuntiesSection = () => {
  return (
    <section className="md:max-w-[1022px] mx-auto py-28 px-8">
        <div className="md:flex items-end justify-between">
            <div>
                <SectionHeaderText text="All Communities"  />
                <Bai_700  className="text-[56px]  base-purple-text text-left w-96.25   tracking-[-0.5px] leading-[70px] uppercase pt-4"  text="Find Where You Belong" />
            </div>
            <div className="md:flex items-end justify-end w-full h-full ">
                <Pop_400 text="Every path into tech has a home at NIHUB."  className="text-[15px] max-w-70 h-fit md:pt-0 pt-6 leading-[26.25px] md:text-end base-purple-text-100"/>
            </div>
        </div>

        <div className="pt-10">
            <div className="flex  items-center flex-wrap gap-2 pr-4">
                <div style={activeBG} className="flex items-center justify-center gap-1.25 w-[83px] h-8 rounded-full">
                    <Jet_700 className="text-white text-[12px] tracking-[0.6px] w-fit" text="All" />
                    <Jet_700 className="text-white text-[10px] tracking-[0.6px] w-fit  opacity-70" text='(8)' />
                </div>

                {filters.map((item, index) => (
                    <div  key={index} style={inActiveBG}  className="flex items-center justify-center py-1.5 px-4 h-8  w-fit rounded-full">
                        <Jet_700 className="base-purple-text-100 text-[12px] tracking-[0.6px] w-fit" text={item} />
                    </div> 
                ))}

            </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6 pt-10">
            {CommunitiesList.map((community, index) => (
                <CommunityCard key={index} community={community} index={index} />
            ))}
        </div>

    </section>
  )
}

export default AllCommuntiesSection