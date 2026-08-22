import SectionHeaderText from '../ui/SectionHeaderText'
import SectionSubHeaderText from '../ui/SectionSubHeaderText'
import FeaturedProgramCard from './ui/FeaturedProgramCard'
import { LinkTemp1 } from '../ui/LinkTemps'
import { programmes } from '@/static-data/home_data'


const TrainingSection = () => {
  return (
    <section className='common-section-padding px-8 common-max-width mx-auto '>
        <div className='relative md:h-24 w-full'>
            <div className='w-fit text-left '>
                <SectionHeaderText text='Trainings' />
                <div className='pt-4' />
                <SectionSubHeaderText text='Featured Programmes' />
            </div>

            <LinkTemp1 href='/trainings' className='md:absolute bottom-0 right-0 base-purple-text text-[13px] w-fit md:mt-0 mt-4' text='View all trainings ' linkIndex={1} />
                
       
        </div>

        <div className='pt-12'>
            <div className='grid md:grid-cols-2  gap-6 md:gap-10'> 
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