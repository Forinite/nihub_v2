import SectionHeaderText from '../ui/SectionHeaderText'
import Image from 'next/image'
import { Bai_700, Pop_400 } from '../fontAids/Fonts'
import { LinkTemp1 } from '../ui/LinkTemps'
import { BulbIcon } from '@/static-data/images'

const AboutSection = () => {
  return (
    <section className=" common-section-padding ">
      <div className='flex md:flex-row flex-col items-center md:justify-between md:gap-auto gap-12 md:max-w-[1008px] px-6 mx-auto w-full'>
        <aside className='md:w-1/2 h-full  space-y-3  '>
          <div className='w-full'>
            <SectionHeaderText text='About Us' />
          </div>

          <div className='w-fit'>
            {/* <SectionSubHeaderText text='Welcome to' text2='NIHUB' /> */}
                <div className="md:flex items-center md:gap-2 md:text-[44px] text-[36px]">
                  <Bai_700 text={'Welcome to'}  className=" leading-[55px] tracking-[-0.5px] base-black-text uppercase md:block inline" /> 
                  <Bai_700 text={'Nihub'}  className=" leading-[55px] tracking-[-0.5px] base-purple-text uppercase md:block inline" />
              </div>
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

        <aside className='md:w-1/2'>
          <div className='relative md:px-4 md:w-[432px] md:h-[225px]'>
            <Image src="/assets/images/external/black-tech-week.jpg" alt="About Us" width={432} height={225} className=' border rounded-lg md:max-w-[400px] aspect-ratio-[400/225] w-full' />
              
            <div className='absolute md:right-0 -right-4 -bottom-8 flex items-center gap-3 p-4 bg-white rounded-[14px] about-card-shadow'>
              <div className='w-10 h-10 icon-box-bg rounded-[10px] flex  items-center justify-center'>
                  <Image  alt={'Bulb Icon'} src={BulbIcon} width={20} height={20}  /> 
              </div>
              <div className=''>
                <Bai_700 text='Innovating the Future' className='text-[13px] leading-[19.5px]  ' />
                <Pop_400 text='Empowering People' className='text-[11px] leading-[16.5px]  base-grey-100' />
              </div>
            </div>
              
          </div>
        </aside>
      </div>
      
    </section>
  )
}

export default AboutSection