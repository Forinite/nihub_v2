import { Bai_700, Pop_400 } from "@/components/fontAids/Fonts";
import Image, { StaticImageData } from "next/image";

interface CorePillarCardsProps { 
  title: string; 
  description: string, 
  img : StaticImageData, 
  imgSize : {x:number, y:number} ,
  iconContSize: {x:number, y:number} ,
  iconContBG?: string,
  headerClassName?: string,
  textClassName?: string,
}
const CorePillarCard = ({ title, description , img, imgSize, iconContSize, iconContBG , headerClassName, textClassName}: CorePillarCardsProps ) => {
  return (
    <div className="common-card-shadow common-rounding bg-white p-6">
        <div className={`flex items-center justify-center rounded-[14px] ${iconContBG ?? 'icon-box-bg' }`} style={{width: (iconContSize.x).toString() + 'px', height: (iconContSize.y).toString() + 'px' }}>
             <Image className="" alt={'Icon'} src={img} width={imgSize.x} height={imgSize.y}  /> 
        </div>
        <Bai_700 className={headerClassName} text={title} />
        <Pop_400 className={textClassName} text={description} />
    </div>
  )
}

export default CorePillarCard