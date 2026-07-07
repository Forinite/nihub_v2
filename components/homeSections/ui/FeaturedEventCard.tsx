import Link from 'next/link'
import React from 'react'

const FeaturedEvent = {
    title: "Tech Week",
    host: "Nihub",
    description: "Innovation · Buildathon · Talks",
    status: "upcoming", // or "past",
    dateString: "Aug 11-15, 2026",
    Location: "Futminna Campus",
    link: "/events/tech-week",

}

const startsIn = {
    days: 42,
    hours: 18,
    minutes: 43,
    seconds: 48,
}

const FeaturedEventCard = () => {
  return (
    <div>
        <div>
            <div className='w-[104px]' />

            <h4>NIHUB Events</h4>
            <div className='border-b-1  border-gray-200' />

            <div className='flex items-center space-x-2 w-fit h-fit px-2 py-1 bg-green-200 rounded-full'> 
                <div className='w-2 h-2 rounded-full bg-green-300' /> 
                <p 
                    className={`uppercase ${FeaturedEvent.status === 'upcoming' ? 'text-green-500' : 'text-gray-500'}`}
                >
                        {FeaturedEvent.status}
                </p> 
            </div>
            
        </div>

        <div className='w-full h-fit'>
            <div className='w-full h-full bg-dots' >
                <h4> Featured Event</h4>

                <h3>{FeaturedEvent.host}</h3>

                <h3>{FeaturedEvent.title}</h3>
                <p> {FeaturedEvent.description} </p>
            </div>
        </div>

        <h4>Starts In</h4>
        <div className='flex items-center justify-between px-2 py-1 w-full '>
            {["days", "hours", "minutes", "seconds"].map((unit, index) => (
                <div key={unit} className={"flex flex-col items-center justify-center text-center bg-gray-300 rounded-sm w-16 h-16"}>
                    <p>{startsIn[unit]}</p>
                    <p>{unit}</p>
                </div>
            ))}
        </div>
        <div>
            <h4>{FeaturedEvent.dateString}</h4>
            <h4>{FeaturedEvent.Location}</h4>
        </div>
        <div>
            <Link href={FeaturedEvent.link} className=' py-2 w-full h-fit rounded-md bg-purple-700 text-white'>
                Register Now
            </Link>
        </div>
    </div>
  )
}

export default FeaturedEventCard