import { Bai_600 } from "@/components/fontAids/Fonts"
import { ArrowBentUpIcon, BoltIcon, MedalIcon, SheildIcon, StarIcon } from "@/static-data/images"
import Image from "next/image"

const icons = [
    SheildIcon, BoltIcon, StarIcon, ArrowBentUpIcon, MedalIcon
]
const RecognisedIndustryCard = ({text, index}: {text: string , index: number}) => {
  return (
    <div className=" flex items-center justify-center rounded-full  w-fit py-2.5 px-5  h-fit base-border-grey-100 bg-white">
        <div className="w-fit h-fit mr-2">
            <Image src={icons[index]} alt='icon' width={13} height={13} /> 
        </div>
        
        <Bai_600 className="text-[13px]" text={text} />
          
    </div>
  )
}

export default RecognisedIndustryCard