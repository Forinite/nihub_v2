import FeaturedEventCard from './ui/FeaturedEventCard'
import SectionHeaderText from '../ui/SectionHeaderText'
import { heroStats } from '@/static-data'
import { Bai_700, Jet_400, Pop_400 } from '../fontAids/Fonts'
import { LinkTemp1 } from '../ui/LinkTemps'
import Image from 'next/image'
import { LongArrowDownIcon } from '@/static-data/images'
import DotGridBG from './bg/DotGridBG'


const HeroSection = () => {
  return (
    <section className=" relative h-fit py-12  overflow-hidden   ">
        
        <div className=' absolute  md:w-full w-[1008px] h-full top-0 scale-[139.224%]'>
            <DotGridBG />
        </div>
        <div className=' absolute top-0 left-0 w-full h-full' style={{background: 'radial-gradient(55% 70% at -5% 70%, rgba(255, 178, 52, 0.07) 0%, rgba(0, 0, 0, 0) 55%)'}} />
        
        <div className='relative z-30 mx-auto md:max-w-[1008px] ' >
            <div className="w-full md:flex  items-center justify-between md:px-10 px-6 py-20 h-full">
                <aside className='md:max-w-1/2 w-full h-full flex flex-col items-center justify-center '>
                    <div>
                        <SectionHeaderText text="IT & Innovation Hub - Futminna" />
                        <div className='md:text-[58px] text-[40px] base-purple-text md:leading-[60.9px] leading-[43px] tracking[-0.5px] uppercase pt-5 '>
                            <div className='md:block flex items-center gap-3'>
                                <Bai_700 text='we give' />
                                <Bai_700 text='clarity'  className='clarity-text-gradient w-fit '/> 
                            </div>
                            <Bai_700 text='to ideas' />


                        </div>
                        <Pop_400 
                            text=' NIHUB is the technology incubator of the Federal University of Technology, Minna — empowering students, entrepreneurs, and innovators to build the future. '
                            className='text-[16px] leading-[27.2px] tracking-normal base-purple-text-100 pt-6'
                        />
        
                    

                        <div className='flex md:flex-row flex-col items-center gap-3 pt-8 w-fit'>

                            <LinkTemp1 href="/communities" className='px-6 py-3 text-[13px] w-fit h-fit base-purple-bg text-white rounded-[10px] link-shadow' text='Explore Communities' linkIndex={0} />
        
                            <LinkTemp1 href="/services" className='px-6 py-3 text-[13px] w-fit h-fit border border-[#2B104340] base-purple-text rounded-[10px]'     text='View Our Services'  linkIndex={1}/>


                        </div>
                    </div>
                    <div className='border-t border-gray-300 mt-10 pt-8.25 w-full'>
                        <ul className='flex items-center space-x-3  w-full'>
                            {heroStats.map((stat) => (
                                <li key={stat.label}>
                                    <Bai_700 className='text-[22px] leading-8.25 base-purple-text' text={stat.value} />
                                    <Jet_400 className='text-[11px] leading-[16.5px] tracking-[0.55px] base-purple-text-300' text={stat.label} />
                                </li>
                            ))}
                        </ul>
                    </div>

                </aside>

                <aside className='w-[44.8%]  h-full md:flex hidden items-center justify-center '>
                    <FeaturedEventCard />
                </aside>
            </div>
            <div className='w-fit h-fit md:block hidden absolute bottom-0 left-1/2 -ml-1.5'>
                <Image alt='scroll indicator' src={LongArrowDownIcon} width={12} height={48} />
            </div>
        </div>

        <div className='absolute w-full h-16.25 hero-section-shadow bottom-0 left-0 '>
             
        </div>
        
    </section>
  )
}

export default HeroSection