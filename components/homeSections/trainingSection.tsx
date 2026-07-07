
import React from 'react'
import SectionHeaderText from '../ui/SectionHeaderText'
import SectionSubHeaderText from '../ui/SectionSubHeaderText'
import Link from 'next/link'
import FeaturedProgramCard from './ui/FeaturedProgramCard'

const programmes = [
    {
        image: '/assets/images/external/prog1.jpg',
        status: 'ongoing',
        title: 'Artificial Intelligence Bootcamp ',
        description: 'A 6-week intensive program covering machine learning fundamentals, neural networks, and real-world AI applications.',
        venue: 'NIHUB Lab, FUTMinna',
        date: "Jan – Feb 2026",
        link: '/trainings',
    },
        {
        image: '/assets/images/external/prog2.jpg',
        status: 'upcoming',
        title: 'Web3 & Blockchain Development',
        description: 'Learn smart contract development, DeFi protocols, and decentralised app architecture from industry experts.',
        venue: 'Virtual + On-campus',
        date: "Mar 2026",
        link: '/trainings',
    },
        {
        image: '/assets/images/external/prog3.jpg',
        status: 'upcoming',
        title: 'Cybersecurity Fundamentals',
        description: 'From ethical hacking to network defense — a comprehensive programme built with CISCO curriculum standards.',
        venue: 'NIHUB Lab, FUTMinna',
        date: "Apr 2026",
        link: '/trainings',
    },
        {
        image: '/assets/images/external/prog4.jpg',
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
    <section>
        <div className='relative h-32 w-full'>
            <div className='w-fit '>
                <SectionHeaderText text='Trainings' />
                <SectionSubHeaderText text='Featured Programmes' />
            </div>

            <Link href='/trainings' className='absolute bottom-0 right-0 link-text'>
                View all trainings
            </Link>
        </div>

        <div>
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