import { Bai_700, Jet_700, Pop_400 } from "@/components/fontAids/Fonts";
import Image, { StaticImageData } from "next/image";

interface AchievementCardsProps { 
  title: string; 
  description: string, 
  img : StaticImageData, 
  year: string,
}
const AchievementCard = ({ title, description , img, year}: AchievementCardsProps ) => {
  return (
    <div className="relative achievement-card-shadow rounded-2xl bg-white p-6 ">
        <div className="relative">
            <Jet_700 text={year} className="absolute -top-1 right-0 rounded-full text-center w-10 h-4.75 items-center justify-center bg-[#2B104312] text-[10px] base-purple-text" />
        </div>
        <div className={`flex items-center justify-center rounded-[14px] w-11 h-11 icon-box-bg-100 `} >
             <Image className="" alt={'Icon'} src={img} width={22} height={22}  /> 
        </div>
        <Bai_700 className={'base-purple-text text-[15px] pt-4'} text={title} />
        <Pop_400 className={'text-[13px] leading-[21.13px] base-purple-text-400 pt-2'} text={description} />
    </div>
  )
}

export default AchievementCard