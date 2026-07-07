import Image from "next/image"

const icons = [
    '/i.jpg','/i.jpg','/i.jpg','/i.jpg','/i.jpg','/i.jpg'
]
const RecognisedIndustryCard = ({text, index}: {text: string , index: number}) => {
  return (
    <div className=" flex items-center justify-center rounded w-fit py-2 px-2 h-fit base-border-grey-100">
        <div>
            <Image src={icons[index]} alt='icon' width={10} height={10} /> 
        </div>
        
        <p className="text-[13px]">{text}</p>
    </div>
  )
}

export default RecognisedIndustryCard