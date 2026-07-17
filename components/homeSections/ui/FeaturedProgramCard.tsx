import { Bai_700, Pop_400 } from '@/components/fontAids/Fonts';
import VenueDateText from './VenueDateText'
import { LinkTemp1 } from '@/components/ui/LinkTemps'
import Image from 'next/image'

interface FeaturedProgramCardProps {
  image: string;
  status: string;
  title: string;
  description: string;
  venue: string;
  date: string;
  link: string;
}


const FeaturedProgramCard = ({image, status, title, description, venue, date, link} : FeaturedProgramCardProps) => {
  return (
    <div className='common-rounding common-card-shadow overflow-hidden '>
        <div className='relative w-full h-fit'>
            <Image className='w-full max-h-[259px]' src={image} alt={title} width={460} height={259} />

            <Bai_700 className={`absolute top-4 left-4 rounded-full uppercase text-white text-[11px] tracking-[0.28px] leading-[16.5px] py-1 px-3 ${status === 'upcoming' ? 'event-upcoming-bg' : status === 'ongoing' ? 'event-ongoing-bg' : 'event-past-bg'}`}  text={status} />
        </div>
        <div className='px-4 py-3 space-y-2'>
            <div className='flex items-center justify-left  space-x-3'>
                <VenueDateText text={venue} state='venue' />
                <VenueDateText text={date} state='date' />
            </div>

            <Bai_700 className='text-[15px] base-black-text leading-[20.63px] pt-4'  text={title} />
            
            <Pop_400 className='text-[13px] leading-[21.13px] tracking-[0px] base-grey-text-100' text={description} />

            <LinkTemp1 href={link} className='text- leading-[19.5px] base-purple-text text-[13px] w-fit' text='Join Now' linkIndex={0} />
        </div>

    </div>
  )
}

export default FeaturedProgramCard