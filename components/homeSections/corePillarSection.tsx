import { BookIcon, ChipIcon, GlobalIcon, PeopleIcon } from '@/static-data/images'
import { Pop_400 } from '../fontAids/Fonts'
import SectionHeaderText from '../ui/SectionHeaderText'
import SectionSubHeaderText from '../ui/SectionSubHeaderText'
import CorePillarCard from './ui/CorePillarCard'

const CorePillarInfo  = [
    {
        title: "Tech Training",
        description: "Hands-on bootcamps in AI, cloud computing, cybersecurity, and web development.",
        img: ChipIcon
    },
    {
        title: "Community Building",
        description: "Vibrant developer communities — GDSC, HNG, Buildathon, and more — open to all.",
        img: PeopleIcon
    },
    {
        title: "Research & Labs",
        description: "State-of-the-art labs supporting cutting-edge research in emerging technologies.",
        img: BookIcon
    },
    {
        title: "Global Partnerships",
        description: "Collaborations with Huawei, CISCO, Google, and top Nigerian tech organisations.",
        img: GlobalIcon
    }
]

const CorePillarSection = () => {
  return (
    <section className='core-pillar-section-shadow core-pillar-section-bg common-section-padding'>
        <div className='text-center flex flex-col items-center justifty-center'>
            <SectionHeaderText text='Core Pillars' />
            <div className='pt-4'/>
            <SectionSubHeaderText text='What We Offer' />
            <Pop_400 className='base-grey-text-200 text-[16px] pt-4 leading-6  w-128'  text='Four pillars that power every innovator who walks through our doors.' /> 
                
        </div>
        <div className='grid grid-cols-2 gap-10 mt-14  common-max-width mx-auto'>
            {CorePillarInfo.map((pillar, index) => (
                <CorePillarCard 
                    key={index} 
                    title={pillar.title} 
                    description={pillar.description} 
                    img={pillar.img} 
                    imgSize={{x:20, y:20}}
                    iconContSize={{x:44, y:44}}
                    headerClassName='base-black-text pt-4'
                    textClassName='base-grey-text-200 text-[13px] leading-[21.13px] tracking-[0px] pt-2'
                    />
            ))}
        </div>
    </section>
  )
}

export default CorePillarSection