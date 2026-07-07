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
    <div className='rounded-md shadow-md overflow-hidden '>
        <div className='relative w-full h-40'>
            <Image src={image} alt={title} width={400} height={200} />

            <div className='absolute top-4 left-4 rounded-full '> {status}</div>
        </div>
        <div className='px-4 py-3 space-y-2'>
            <div className='flex items-center justify-between space-x-3'>
                <VenueDateText text={venue} state='venue' />
                <VenueDateText text={date} state='date' />
            </div>

            <div>{title}</div>
            
            <p>{description}</p>

            <LinkTemp1 href={link} text='Join Now' linkIndex={0} />
        </div>

    </div>
  )
}

export default FeaturedProgramCard