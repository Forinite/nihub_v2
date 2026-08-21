import { Bai_700, Jet_600, Pop_400 } from "@/components/fontAids/Fonts"
import { getComplexInitials } from "@/lib/largerFunctions/GetComplexInitials"
import { getSocialIcon } from "@/lib/largerFunctions/GetSocialIcon"
import { TeamCardDarkGradientVector } from "@/static-data/images"
import Image from "next/image"

interface TeamCardProps {
    name: string,
    role: string,
    statement: string,
    socials: string[],
    index: number,
}

// const baseColors = [
//     '#2B1043',
//     '#6A3FA0',
//     '#059669',
//     '#B45309',
//     '#0369A1',
//     '#BE185D',
// ]

const bgStyles = [
    { 
        card: ' from-[#2B104322]  to-[#2B104344]',
        profile: 'bg-[#2B1043]',
        role: 'text-[#2B1043]',
    },
        { 
        card: ' from-[#6A3FA022]  to-[#6A3FA044]',
        profile: 'bg-[#6A3FA0]',
        role: 'text-[#6A3FA0]',
    },
        { 
        card: ' from-[#05966922]  to-[#05966944]',
        profile: 'bg-[#059669]',
        role: 'text-[#059669]',
    },
        { 
        card: ' from-[#B4530922]  to-[#B4530944]',
        profile: 'bg-[#B45309]',
        role: 'text-[#B45309]',
    },
        { 
        card: ' from-[#0369A122]  to-[#0369A144]',
        profile: 'bg-[#0369A1]',
        role: 'text-[#0369A1]',
    },
        { 
        card: ' from-[#BE185D22]  to-[#BE185D44]',
        profile: 'bg-[#BE185D]',
        role: 'text-[#BE185D]',
    },
]

const  TeamCard = ({name, role, statement, socials, index} : TeamCardProps) => {
  return (
    <div className=" rounded-2xl overflow-hidden team-card-shadow border-t border-[#2B10430F]" >
        <div className={` relative overflow-hidden w-full h-52 bg-linear-[135deg] from-[13.3%] to-[26.7%] ${bgStyles[index].card} flex items-center justify-center `} >
            <div className={` absolute  -bottom-3.5 w-28 h-28 rounded-full border-4 border-white ${bgStyles[index].profile} flex items-center justify-center`}>
                <Bai_700 text={getComplexInitials(name)} className="text-[32px] text-white w-fit h-fit" />
            </div>
            <div  className=" absolute bottom-0 z-10 w-full h-fit bg-linear-0 from-0% from-[#FFFFFFF2] to-100% to-[#00000000] ">
                <Image className="w-full"  width={466} height={64} alt="gradient" src={TeamCardDarkGradientVector}  />
            </div>
        </div>
        <div className="w-full p-6 pt-5">
            <Bai_700 text={name} className="capitalize base-purple-text " />
            <Jet_600 text={role} className={`uppercase text-[12px] ${bgStyles[index].role} tracking-[0.3px]`} />
            <Pop_400 text={statement} className="pt-3 text-[13px] text-[#7A6A94] leading-[21.13px]" />

            <div className="pt-5 flex items-center justify-left gap-2">
                {socials.map((link) => (
                    <div key={link} className=" w-8 h-8 rounded-[10px] bg-[#2B104312] flex items-center justify-center">
                        <Image src={getSocialIcon(link)} alt="Icon" width={14} height={14} />
                    </div>
                )) }

            </div>
        </div>
    </div>
  )
}

export default TeamCard