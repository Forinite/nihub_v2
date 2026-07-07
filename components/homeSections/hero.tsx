import Link from 'next/link'
import FeaturedEventCard from './ui/FeaturedEventCard'
import SectionHeaderText from '../ui/SectionHeaderText'
import { heroStats } from '@/static-data'


const HeroSection = () => {
  return (
    <section className="h-fit">
        <div className="w-full flex items-center justify-between px-10 py-20 h-full">
            <aside className='w-[44.8%] h-full flex flex-col items-center justify-center '>
                <div>
                    <SectionHeaderText text="IT & Innovation Hub - Futminna" />
                    <h2>
                        We give 
                        <span>clarity</span>
                        to ideas
                    </h2>
                    <p>
                        NIHUB is the technology incubator of the Federal University of Technology,
                        Minna — empowering students, entrepreneurs, and innovators to build the future. 
                    </p>

                    <div className='flex items-center space-x-3 '>

                        <Link href="/communities" className='px-3 py-2 w-fit h-fit rounded-md bg-purple-700'>
                            Join Our Community
                        </Link>
                        <Link href="/services" className='px-3 py-2 w-fit h-fit rounded-md  border-1 border-purple-700'>
                            View Our Services
                        </Link>
                    </div>
                </div>
                <div className='flex items-center space-x-3 pt-10 border-t-1 border-gray-300'>
                    <ul className='flex items-center space-x-3'>
                        {heroStats.slice(2).map((stat) => (
                            <li key={stat.label}>
                                <p>{stat.label}</p>
                                <p>{stat.value}</p>
                            </li>
                        ))}
                    </ul>
                </div>

            </aside>

            <aside className='w-[44.8%] h-full flex flex-col items-center justify-center '>
                <FeaturedEventCard />
            </aside>
        </div>
        <div className='flex items-center justify-center'>
            A
        </div>
    </section>
  )
}

export default HeroSection