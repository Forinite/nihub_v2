import React from 'react'
import SectionHeaderText from '../ui/SectionHeaderText'
import Link from 'next/link'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className="flex items-center justify-between ">
      <aside className='w-[43%] h-full flex flex-col items-center justify-center space-y-3 px-10 py-20'>
        <div className='w-full'>
          <SectionHeaderText text='About Us' />
        </div>

        <h1>Welcome to  <span>NIHUB</span></h1>

        <p className='base-grey-text-200'>
          We believe technology is more than just tools and devices — it is the driving force behind transformation, empowerment, and progress.
        </p>
        <p className='base-grey-text-200'>
          NIHUB sits at the heart of FUTMinna's innovation ecosystem, connecting students, researchers, and entrepreneurs with the resources, mentorship, and community they need to build meaningful tech.
        </p>

        <Link href="/communities" className='px-3 py-2 w-fit h-fit rounded-md text-purple-700'>
          Explore Opportunities
         </Link>
        
      </aside>

      <aside className='w-[43%]'>
        <div className='relative px-4 w-[432px] h-[225px]'>
          <Image src="/images/external/black-image-jpg" alt="About Us" fill className=' border rounded-lg max-w-[400px] aspect-ratio-[400/225] w-full' />
            
          <div className='flex items-center space-x-3'>
            <div className='w-10 h-10 bg-gray-100'>

            </div>
            <div className='absolute right-0 -bottom-8'>
              <h4>Innovating the Future</h4>
              <h5>Empowering People</h5>
            </div>
          </div>
            
        </div>
      </aside>
    </section>
  )
}

export default AboutSection