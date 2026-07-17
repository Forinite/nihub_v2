import SectionHeaderText from '../ui/SectionHeaderText'
import SectionSubHeaderText from '../ui/SectionSubHeaderText'
import FeaturedProgramCard from './ui/FeaturedProgramCard'
import { LinkTemp2 } from '../ui/LinkTemps'

const programmes = [
    {
        image: '/assets/images/external/programmes/prog1.jpg',
        status: 'ongoing',
        title: 'Artificial Intelligence Bootcamp ',
        description: 'A 6-week intensive program covering machine learning fundamentals, neural networks, and real-world AI applications.',
        venue: 'NIHUB Lab, FUTMinna',
        date: "Jan – Feb 2026",
        link: '/trainings',
    },
        {
        image: '/assets/images/external/programmes/prog2.jpg',
        status: 'upcoming',
        title: 'Web3 & Blockchain Development',
        description: 'Learn smart contract development, DeFi protocols, and decentralised app architecture from industry experts.',
        venue: 'Virtual + On-campus',
        date: "Mar 2026",
        link: '/trainings',
    },
        {
        image: '/assets/images/external/programmes/prog3.jpg',
        status: 'upcoming',
        title: 'Cybersecurity Fundamentals',
        description: 'From ethical hacking to network defense — a comprehensive programme built with CISCO curriculum standards.',
        venue: 'NIHUB Lab, FUTMinna',
        date: "Apr 2026",
        link: '/trainings',
    },
        {
        image: '/assets/images/external/programmes/prog4.jpg',
        status: 'ongoing',
        title: '3D Modelling/Design Bootcamp',
        description: 'A 6-week intensive program covering Blender, and other 3D Tools and applications.',
        venue: 'NIHUB Lab, FUTMinna',
        date: "Jan – Feb 2026",
        link: '/trainings',
    },
]
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