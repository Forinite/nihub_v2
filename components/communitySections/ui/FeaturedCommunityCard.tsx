import { Bai_600, Bai_700, Jet_400, Jet_600, Jet_700, Pop_400, Pop_700, Pop_700_Italic } from "@/components/fontAids/Fonts"
import { LinkIcon } from "@/components/SVGAids/SVG"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

const linkShadow =[ {boxShadow: '0px 4px 14px 0px #4285F444' , background: '#4285F4'}, {boxShadow: '0px 4px 14px 0px #F9731644', background: '#F97316'}, ]
const baseTextColor = [{color: '#4285F4'}, {color: '#F97316'}]
const baseBorderColor = [{border: '1px solid #4285F430', background:' #4285F412'}, {border: '1px solid #F9731630', background: '#F9731612'}]
const gradientBG = [
    {background: 'linear-gradient(135deg, rgba(66, 133, 244, 0.933) 0%, rgba(66, 133, 244, 0.6) 100%)'}, 
    {background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.933) 0%, rgba(249, 115, 22, 0.6) 100%)'}
]
export interface communityProps{
    community :
        {
            icon: any ,
            name: string,
            catchPhrase: string,
            abbr: string,
            mainConcept: string,
            description: string,
            keywords: string[],
            stats: {
                members: string,
                meetings: string,
                partner?: string,
            },
            joinLink: string,
            learnMoreLink: string,
    }
    index: number
}
const FeaturedCommunityCard = ({community, index} :communityProps) => {
  return (
    <div className="  rounded-2xl overflow-hidden">
        <div className={`${index%2 ===0? 'grid md:grid-cols-2  ' : index%2 ===1? 'md:hidden grid md:grid-cols-2  ' : '' }`} >
            <FeaturedCommunityCardSection1 community={community} index={index}/>
            <FeaturedCommunityCardSection2 community={community} index={index}/>
        </div>
        
        

        <div className={`${index%2 ===1 ? 'md:grid md:grid-cols-2   hidden ' : 'hidden'}`} >
            <FeaturedCommunityCardSection2 community={community} index={index}/>
            <FeaturedCommunityCardSection1 community={community} index={index}/>
        </div>
    </div>
  )
}

export default FeaturedCommunityCard



const FeaturedCommunityCardSection1 = ({community, index}: communityProps) => {
    return (
         <div style={gradientBG[index]} className="relative w-full min-h-[260px] bg-dots px-8 py-[25.5px]    flex flex-col justify-between">
            <div className=" absolute block md:hidden top-0 left-0 opacity-10 w-full h-full white-bg-dots" />
            <div className="">
                <div className="w-12 h-12 mb-3 bg-[#FFFFFF33] rounded-[14px] flex items-center justify-center">
                    <community.icon color={'white'} width='22' height='22' />
                </div>
                <Jet_700 className="text-[10px] text-[#FFFFFFA6] tracking-[1.5px]" text={community.mainConcept} />
                <Bai_700 className="text-[34px] text-white uppercase pt-1" text={community.abbr} />
            </div>

            <div className="flex items-center gap-4">
                <div className="w-fit">
                    <Bai_700 className="text-[22px] text-white w-fit" text={community.stats.members} />
                    <Jet_400 className="text-[#FFFFFF99] text-[10px] pt-0.5" text="Members" />
                </div>

                <div className="w-px h-8 bg-[#FFFFFF33]" />
                <div className="w-fit">
                    <Bai_700 className="text-[22px] text-white w-fit" text={community.stats.meetings} />
                    <Jet_400 className="text-[#FFFFFF99] text-[10px] pt-0.5" text="Meetings" />
                </div>

                { community.stats.partner &&
                <div className="flex items-center gap-4">
                    <div className="w-px h-8 bg-[#FFFFFF33]" />
                    <Bai_700 className="text-[10px] text-white w-fit py-1 px-2 rounded-full bg-[#FFFFFF33]" text={community.stats.partner} />
                </div>

                }
            </div>
        </div>
        
    )
}

const FeaturedCommunityCardSection2 = ({community, index}: communityProps) => {
    return (
         <div className="w-full px-8 py-[25.5px] bg-white ">
            <span style={baseTextColor[index]} >
                <Pop_700_Italic  className=" text-[13px] italic" text={'"' + community.catchPhrase + '"'}/>
            </span>

            <Bai_700 className='pt-3 text-[20px] base-purple-text'  text={community.name}/>

            <Pop_400 className="pt-3 text-[14px] base-purple-text-100" text={community.description}/>

            <div className="pt-5 pb-6 flex flex-wrap items-center gap-1.75 ">
                {community.keywords.map((keyword, i) => (
                    <div key={i} style={{...baseBorderColor[index], ...baseTextColor[index]}} className="py-1 px-2.5 w-fit rounded-full bg-[#4285F412] ">
                        <Jet_600 className="text-[11px] " text={keyword} /> 
                    </div>
                ))}
            </div>


                <div className="flex items-center space-x-3">
                        <Link style={linkShadow[index]} className={` py-2.5 px-5 gap-2 text-white rounded-[10px] bg-[#F97316] flex items-center justify-center space-x-2  capitalize`} href={community.joinLink}>
                            <Bai_700 text={'Join Community'} className="text-white text-[13px]" />
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>


                        <Link className="flex items-center gap-1.5" href={community.learnMoreLink} > 
                            <Bai_600 text={'Learn more'} className="text-[13px] base-grey-text-200" />
                            <LinkIcon color="#9E9E9E" width="12" height="12" />
                        </Link>
                </div>

        </div>
        
    )
}