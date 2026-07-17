import { Bai_600, Bai_700 } from '@/components/fontAids/Fonts'
import React from 'react'

const EventsPage = () => {
  return (

    <main>
        <section className='w-screen h-screen flex flex-col items-center justify-center'>
            <Bai_700 className='text-[56px] base-grey-text-200' text='The Best Events Are Held By Potatoes' />
            <Bai_600 className='text-[36px] base-grey-text-200' text='Perhaps One Day You Too Would Be Trained By A Potato' />
        </section> 
    </main>

  )
}

export default EventsPage