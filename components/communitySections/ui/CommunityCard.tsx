import { Bai_700, Jet_400, Jet_600, Jet_700, Pop_400, Pop_600 } from "@/components/fontAids/Fonts"
import { communityProps } from "./FeaturedCommunityCard"
import Image from "next/image"
import { PeopleIcon, PurpleStarIcon } from "@/static-data/images"

const baseRGB = [
    {r: 66, g:133 , b:244},
    {r: 249, g:115, b: 22},
    {r: 4, g:159 , b:217},
    {r: 124, g:58, b: 237},
    {r: 220, g:38 , b:38},
    {r: 5, g:150, b: 105},
    {r: 194, g:65 , b:12},
    {r: 190, g:24, b: 93}
]
const CommunityCard = ({community, index} : communityProps) => {
  return (
    <div style={{borderTop: '1px solid rgba(43, 16, 67, 0.06)', boxShadow: '0px 2px 14px 0px rgba(43, 16, 67, 0.06)'}}  className="relative pt-1.5 w-full h-fit rounded-2xl overflow-hidden">
        <div style={{background: `linear-gradient(90deg,  rgb(${baseRGB[index].r}, ${baseRGB[index].g}, ${baseRGB[index].b}) 0%, rgba(${baseRGB[index].r}, ${baseRGB[index].g}, ${baseRGB[index].b}, 0.533) 100%)`}} className="absolute top-0 left-0 opacity-50 rounded-2xl z-10 w-full h-full ">

        </div>
        <div  className="relative h-full bg-white z-20 p-6 " >
            <div className="flex items-center justify-between pb-4">
                <div style={{background: `rgba(${baseRGB[index].r}, ${baseRGB[index].g}, ${baseRGB[index].b}, 0.06)`}} className="w-12 h-12 rounded-[14px]"> </div>
                <Jet_700 className="text-[10px] tracking-[0.25px] uppercase py-1 px-2.5 w-fit h-fit base-purple-text-300 bg-[#2B10430F] rounded-full" text={community.mainConcept} />
            </div>
            <Bai_700 className="text-[16px] base-purple-text pb-1" text={community.name} />
            
            <span style={{color: `rgb(${baseRGB[index].r}, ${baseRGB[index].g}, ${baseRGB[index].b})`}}>
                <Pop_600  className="pb-3 text-[12px]" text={community.catchPhrase} />
            </span>

            <Pop_400 className="base-purple-text-200 text-[13px] leading-[21.13px] mb-4 line-clamp-2 " text={community.description} />

            <div className="flex items-center flex-wrap gap-1.5 pb-5">
                {community.keywords.slice(0,3).map((keyword, i) => (
                    <div key={i} 
                        style={{
                            background: `rgba(${baseRGB[index].r}, ${baseRGB[index].g}, ${baseRGB[index].b}, 0.06)`,
                            border: `1px solid rgba(${baseRGB[index].r}, ${baseRGB[index].g}, ${baseRGB[index].b}, 0.14)`,
                            color: `rgba(${baseRGB[index].r}, ${baseRGB[index].g}, ${baseRGB[index].b}, 1)`,
                    }}
                    className="rounded-full"
                    > 
                    <Jet_600 className=" text-[10px] py-0.5 px-2 w-fit h-fit " text={keyword} />
                    </div>
                ))}

                {community.keywords.length > 3 &&
                   <Jet_600 className="bg-[#2B10430F] base-purple-text-300 text-[10px] py-0.5 px-2 w-fit h-fit rounded-full" text={'+' + (community.keywords.length - 3).toString()} />
                }
            </div>

            <div style={{borderTop: '1px solid #2B104312'}} className="pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-fit h-fit flex items-center gap-1">
                        <Image src={PeopleIcon} alt="Members Icon" width={11} height={11} />
                        <Jet_400 className="text-[12px] base-purple-text-300" text={community.stats.members} />
                    </div>
                    <div className="w-fit h-fit  flex items-center gap-1">
                        <Image src={PurpleStarIcon} alt="Calender Icon" width={11} height={11} />
                        <Jet_400 className="text-[12px] base-purple-text-300 gap-3" text={community.stats.meetings} />
                    </div>
                </div>

                {community.stats.partner &&
                    <div 
                    style={{ background: `rgba(${baseRGB[index].r}, ${baseRGB[index].g}, ${baseRGB[index].b}, 0.06)`}} 
                    className="text-[10px] rounded-full py-0.5 px-2 flex items-center justify-center w-fit h-fit"
                    >
                        <span style={{color: `rgb(${baseRGB[index].r}, ${baseRGB[index].g}, ${baseRGB[index].b})`}}>
                            <Jet_700 className="text-[10px]"  text={community.stats.partner} />
                        </span>
                    </div>
                }
            </div>
        </div>
        
    </div>
  )
}

export default CommunityCard