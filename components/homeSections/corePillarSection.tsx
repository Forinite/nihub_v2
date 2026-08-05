
import { Pop_400 } from '../fontAids/Fonts'
import SectionHeaderText from '../ui/SectionHeaderText'
import SectionSubHeaderText from '../ui/SectionSubHeaderText'
import CorePillarCard from './ui/CorePillarCard'
import { CorePillarInfo } from '@/static-data/home_data'



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