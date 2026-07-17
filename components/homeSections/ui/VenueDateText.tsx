import {CalenderIcon, LocationIcon} from "@/static-data/images";
import Image from "next/image";

const VenueDateText = ({text, state}: {text: string; state?: string}) => {
  return (
    <div className='flex items-center gap-2'>
        {state?.toLowerCase() == 'date'? <Image src={CalenderIcon} alt={'Date'} width={11} height={11}/> : <Image src={LocationIcon} alt={'Date'} width={11} height={11}/>}
        <h5 className='venue-date-text'>{text}</h5>
    </div>
  )
}

export default VenueDateText