import { Bai_700, Pop_400 } from "@/components/fontAids/Fonts";
import Image, { StaticImageData } from "next/image";

const CorePillarCard = ({ title, description , img}: { title: string; description: string, img : StaticImageData }) => {
  return (
    <div className="common-card-shadow common-rounding bg-white p-6">
        <div className='w-11 h-11 flex items-center justify-center rounded-md icon-box-bg'>
             <Image className="" alt={'Icon'} src={img} width={20} height={20}  /> 
        </div>
        <Bai_700 className="base-black-text pt-4" text={title} />
        <Pop_400 className="base-grey-text-200 text-[13px] leading-[21.13px] tracking-[0px] pt-2" text={description} />
    </div>
  )
}

export default CorePillarCard