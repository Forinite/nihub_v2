import SectionHeaderText from '../ui/SectionHeaderText'
import SectionSubHeaderText from '../ui/SectionSubHeaderText'
import FeaturedProgramCard from './ui/FeaturedProgramCard'
import { LinkTemp2 } from '../ui/LinkTemps'
import { programmes } from '@/static-data/home_data'


const TrainingSection = () => {
  return (
    <section className='common-section-padding px-8 common-max-width mx-auto '>
        <div className='relative h-32 w-full'>
            <div className='w-fit text-left '>
                <SectionHeaderText text='Trainings' />
                <div className='pt-4' />
                <SectionSubHeaderText text='Featured Programmes' />
            </div>

            <LinkTemp2 href='/trainings' className='absolute bottom-0 right-0 base-purple-text text-[13px] ' text='View all trainings ' linkIndex={1} />
                
       
        </div>

        <div className='pt-12'>
            <div className='grid grid-cols-2 gap-10'> 
                {programmes.map(({image, status, title, description, venue, date, link }, index) => (
                    <FeaturedProgramCard  key={index}
                        image={image} 
                        status={status}
                        title={title}
                        description={description}
                        venue={venue}
                        date={date}
                        link={link}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default TrainingSection