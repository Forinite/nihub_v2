import { Bai_400, Bai_600, Bai_700, Jet_700, Pop_400 } from '@/components/fontAids/Fonts'

import Image from 'next/image'
import Link from 'next/link'
import { CalenderIcon, LocationIcon, TicketIcon } from '@/static-data/images'
import CountdownSection from '@/components/homeSections/ui/countdownSection'
import { FeaturedEvent } from '@/static-data/events_data'





const FeaturedEventCard = () => {

    const statusIsUpcoming = FeaturedEvent.status === 'upcoming'
    const contClassname = statusIsUpcoming? 'bg-[#F973161F]' : 'bg-[#1111111F]'
    const dotClassname  =  statusIsUpcoming? 'bg-[#F97316]' : 'bg-[#111111]'
    const textClassname  =  statusIsUpcoming? 'text-[#C2410C]' : 'text-gray-500'
  return (
    <div  className='w-95 hero-card-shadow  h-fit rounded-[16px]' >

        <div className='w-full h-fit p-6 pb-0 base-purple-bg  rounded-t-2xl  '>
            <div className='flex items-center justify-between '>

            <div className='flex items-center justify-center gap-2 text-[#FFFFFF73]'>
                <Jet_700 className='text-[10px] tracking-[1.5px] uppercase'  text='Flagship Event'/>
                <div className='w-0.5 h-0.5 rounded-full bg-[#FFFFFF73]' />
                <Jet_700 className='text-[10px] tracking-[1.5px] uppercase'  text='Aug 2026'/>
            </div>

            <div className={`flex items-center gap-1 w-fit h-fit px-2 py-0.2  ${contClassname} rounded-full`}> 
                <div className={`w-1.5 h-1.5 rounded-full ${dotClassname} `} /> 

                <Bai_600
                    className={`uppercase text-[10px] tracking-[0.25px] ${textClassname}`}
                    text={FeaturedEvent.status}
                /> 
            </div>

            
        </div>
  
        <div className='w-full h-full pb-5 pt-4 ' >
            
            <div className='text-[28px] uppercase tracking-[-0.55px] leading-[35px] pt-1'>
                <Bai_700 className='text-[28px] uppercase tracking-[-0.55px] text-white' text={FeaturedEvent.host} />
                <Bai_700 className='text-[#FFB234]' text={FeaturedEvent.title}/>
            </div>

            <div className="flex items-center flex-wrap gap-2 pt-1">
                {FeaturedEvent.keywords.map((event, i) => (
                    <div key={i}  className="flex items-center gap-1.5"> 
                        <Pop_400 className=" text-[13px] base-purple-text-300 w-fit h-fit " text={event} />
                        
                        {i < FeaturedEvent.keywords.length -1 && <div  className="w-[2px] h-[2px] rounded-full bg-[#9B8AB0] "/>}
                    </div>
                ))}
            </div>
        </div>
        </div>

        <div className='bg-white p-5 pt-0 rounded-[16px]'>
            <Bai_600 text='Starts In' className='pt-4 text-[10px] base-grey-text-100 uppercase tracking-[1px]' />


            <CountdownSection className='bg-[#F5F0FF]' />

            <div className='pt-4 flex items-center justify-between'>
                <div className='flex items-center w-fit base-grey-text-100 space-x-2'>
                    <Image src={CalenderIcon} alt={'Date'} width={11} height={11}/>
                    <Bai_400 text={FeaturedEvent.dateString} className='text-[11px]'/>
                </div>

                <div className='flex items-center w-fit base-grey-text-100 space-x-2'>
                    <Image src={LocationIcon} alt={'Date'} width={11} height={11}/>

                    <Bai_400 text={FeaturedEvent.Location} className='text-[11px]'/>
                </div>
            </div>
            <div>
                <Link href={FeaturedEvent.link} className='text-[13px] mt-4 py-2.5 h-fit base-purple-bg gap-2 text-white rounded-[10px] link-shadow flex items-center justify-center'>
                    
                    <Image className='w-3.25 h-3.25 ' alt='Register Icon' src={TicketIcon} width={13} height={13} />
                    <Bai_700 text='Register Now' className='text-[13px] text-white' />
                    
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default FeaturedEventCard