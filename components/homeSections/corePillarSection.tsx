import SectionHeaderText from '../ui/SectionHeaderText'
import SectionSubHeaderText from '../ui/SectionSubHeaderText'
import CorePillarCard from './ui/CorePillarCard'

const CorePillarInfo  = [
    {
        title: "Tech Training",
        description: "Hands-on bootcamps in AI, cloud computing, cybersecurity, and web development."
    },
    {
        title: "Community Building",
        description: "Vibrant developer communities — GDSC, HNG, Buildathon, and more — open to all."
    },
    {
        title: "Research & Labs",
        description: "State-of-the-art labs supporting cutting-edge research in emerging technologies."
    },
    {
        title: "Global Partnerships",
        description: "Collaborations with Huawei, CISCO, Google, and top Nigerian tech organisations."
    }
]

const CorePillarSection = () => {
  return (
    <section>
        <div className='text-center flex flex-col items-center justifty-center'>
            <SectionHeaderText text='Core Pillars' />
            <SectionSubHeaderText text='What We Offer' />
            <h4 className='base-grey-text-100'> 
                Four pillars that power every innovator who walks through our doors.
            </h4>
        </div>
        <div className='grid grid-cols-2 gap-10 '>
            {CorePillarInfo.map((pillar, index) => (
                <CorePillarCard key={index} title={pillar.title} description={pillar.description} />
            ))}
        </div>
    </section>
  )
}

export default CorePillarSection