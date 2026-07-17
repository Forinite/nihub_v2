import React from 'react'
import SectionHeaderText from '../ui/SectionHeaderText'
import Link from 'next/link'
import Image from 'next/image'
import SectionSubHeaderText from '../ui/SectionSubHeaderText'
import { Bai_700, Pop_400 } from '../fontAids/Fonts'
import { LinkTemp1 } from '../ui/LinkTemps'
import { BulbIcon } from '@/static-data/images'

const AboutSection = () => {
  return (
    <section className=" common-section-padding ">
      <div className='flex items-center justify-between common-max-width mx-auto w-full'>
          <aside className='w-1/2 h-full  space-y-3 '>
          <div className='w-full'>
            <SectionHeaderText text='About Us' />
          </div>

          <div className='w-fit'>
            <SectionSubHeaderText text='Welcome to' text2='NIHUB' />
          </div>


          <div className='max-w-[432px]'>
            <Pop_400 className='base-grey-text-200 pt-5 text-[16px]'
              text="We believe technology is more than just tools and devices — it is the driving force behind transformation, empowerment, and progress."
            />
            <Pop_400 className='base-grey-text-200 pt-4 pb-8 text-[16px]'
              text="NIHUB sits at the heart of FUTMinna's innovation ecosystem, connecting students, researchers, and entrepreneurs with the resources, mentorship, and community they need to build meaningful tech."
            />
          </div>

          <LinkTemp1 href="/communities" className='mt-0.5 w-fit h-fit rounded-md base-purple-text text-[14px]' text='Explore Opportunities' linkIndex={0}/>
  
          
        </aside>

        <aside className='w-1/2'>
          <div className='relative px-4 w-[432px] h-[225px]'>
            <Image src="/assets/images/external/black-tech-week.jpg" alt="About Us" fill className=' border rounded-lg max-w-[400px] aspect-ratio-[400/225] w-full' />
              
            <div className='absolute right-0 -bottom-8 flex items-center gap-3 p-4 bg-white rounded-[14px] about-card-shadow'>
              <div className='w-10 h-10 icon-box-bg rounded-[10px] flex  items-center justify-center'>
                  <Image  alt={'Bulb Icon'} src={BulbIcon} width={20} height={20}  /> 
              </div>
              <div className=''>
                <Bai_700 text='Innovating the Future' className='text-[13px] leading-[19.5px] tracking-[0px] ' />
                <Pop_400 text='Empowering People' className='text-[11px] leading-[16.5px] tracking-[0px] base-grey-100' />
              </div>
            </div>
              
          </div>
        </aside>
      </div>
      
    </section>
  )
}

export default AboutSection