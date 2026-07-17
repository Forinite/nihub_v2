import { Bai_400, Bai_600, Bai_700, Jet_400, Pop_400 } from '@/components/fontAids/Fonts'
import { TicketIcon } from '@/static-data/images'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedEvent = {
    title: "Tech Week",
    host: "Nihub",
    description: "Innovation · Buildathon · Talks",
    status: "upcoming", // or "past",
    dateString: "Aug 11-15, 2026",
    Location: "Futminna Campus",
    link: "/events/tech-week",

}

const startsIn = {
    days: 42,
    hours: 18,
    minutes: 43,
    seconds: 48,
}

const FeaturedEventCard = () => {

    const statusIsUpcoming = FeaturedEvent.status === 'upcoming'
    const contClassname = statusIsUpcoming? 'bg-[#22C55E1F]' : 'bg-[#1111111F]'
    const dotClassname  =  statusIsUpcoming? 'bg-[#22C55E]' : 'bg-[#111111]'
    const textClassname  =  statusIsUpcoming? 'text-[#16A34A]' : 'text-gray-500'
  return (
    <div  className='w-85 hero-card-shadow bg-white h-fit p-5 rounded-2xl ' >
        <div className='flex items-center justify-between '>

            <div /> 
            <Bai_700 className='text-[12px]'  text='NIHUB Events'/>

            <div className={`flex items-center gap-1 w-fit h-fit px-2 py-0.2 ${contClassname} rounded-full`}> 
                <div className={`w-1.5 h-1.5 rounded-full ${dotClassname} `} /> 

                <Bai_600
                    className={`uppercase text-[10px] ${textClassname}`}
                    text={FeaturedEvent.status}
                /> 
            </div>

            
        </div>
        <div className='pt-4 border-b border-[#F5F5F5]' />

        <div className='w-full h-fit pt-4 '>
            <div className='w-full h-full bg-dots  p-4 rounded-[14px] base-purple-bg' >
                <Bai_600 className='text-[10px] tracking-[1px] text-[#FFFFFF80] uppercase' text=' Featured Event' />
                
                <div className='text-[22px] uppercase tracking-[-0.55px] leading-[27.5px] pt-1'>
                    <Bai_700 className='text-[22px] uppercase tracking-[-0.55px] text-white' text={FeaturedEvent.host} />
                    <Bai_700 className='text-[#6A3FA0]' text={FeaturedEvent.title}/>
                </div>

                <Pop_400 className='text-[11px] pt-1 text-[#FFFFFF8C]' text={FeaturedEvent.description} />
            </div>
        </div>

        <Bai_600 text='Starts In' className='pt-4 text-[10px] base-grey-text-100 uppercase tracking-[1px]' />
        <div className='flex items-center justify-between pt-2 w-full '>
            {["days", "hours", "minutes", "seconds"].map((unit, index) => (
                <div key={unit} className={"flex flex-col items-center justify-center text-center   w-[71px] h-[50px] rounded-[10px] p-2 bg-[#F5F5F5]"}>
                    <Bai_700 className='text-[18px] leading-4.5' text={startsIn[unit]} />
                    <Jet_400 text={unit} className='text-[9px] leading-[13.5px] base-grey-text-100 uppercase' />
                </div>
            ))}
        </div>

        <div className='pt-4 flex items-center justify-between'>
            <div className='flex items-center w-fit base-grey-text-100 space-x-0.5'>
                <div className='w-[8.25px] h-[8.25px] p-[1.375] border border-[#9e9e9e]' >

                </div>
                <Bai_400 text={FeaturedEvent.dateString} className='text-[11px]'/>
            </div>

            <div className='flex items-center w-fit base-grey-text-100 space-x-0.5'>
                <div className='w-[8.25px] h-[8.25px] p-[1.375] border border-[#9e9e9e]' >

                </div>
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
  )
}

export default FeaturedEventCard