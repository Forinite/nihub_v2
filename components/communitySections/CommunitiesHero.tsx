import PathIndicator from '../PathIndicator'
import SectionHeaderText from '../ui/SectionHeaderText'
import { Bai_700, Jet_600, Pop_400, Pop_600 } from '../fontAids/Fonts'
import { LinkTemp1 } from '../ui/LinkTemps'

const CommunityStats = [
  { label: 'Active Communities', value: '8' },
  { label: 'Total Members', value: '1,450+' },
  { label: 'Average Meet frequency', value: 'Weekly' },
  { label: 'Industry Partners', value: '6+' }
]
const CommunitiesHero = () => {
  return (
    <section className='py-36  max-w-[1022px] mx-auto'>
        <PathIndicator basePath='Home' nextPaths={['Communities']} />

        <div className='px-8'>
            
            <div className='pt-10'>
                <SectionHeaderText  text='Our Communities'/>
                <div className='pt-5 text-[40px] md:text-[72px] -tracking-[1px] md:leading-[73.44px] leading-[48.96px] flex md:flex-row flex-col md:items-center md:gap-4'>
                    <Bai_700  text='FIND YOUR' className='w-fit base-purple-text'/>
                    <Bai_700  text='TRIBE' className='w-fit clarity-text-gradient' />
                </div>

                <div className='pt-6 md:max-w-140 text-[17px] leading-[30.6px] base-purple-text-100  '>
                    <Pop_400 text='NIHUB is home to ' className='inline' />
                    <Pop_600 text='8 active communities ' className='base-purple-text inline' />
                    <Pop_400  className='inline' text='spanning AI, blockchain, cybersecurity, cloud, and more. Find yours, join the conversation, and start building.' />
                </div>

                
                <div className='flex items-center space-x-3 pt-8'>
                    <LinkTemp1 href="/communities" className='px-6 py-3 text-[13px] w-fit h-fit base-purple-bg text-white rounded-[10px] link-shadow' text='Join A Community' linkIndex={0} />
                    <LinkTemp1 href="/communities" className='px-6 py-3 text-[13px] w-fit h-fit border border-[#2B104340] base-purple-text rounded-[10px]'     text='Browse All'  linkIndex={1}/>
                </div>

                <div className='pt-16'>
                    <div className='flex md:flex-row flex-col  md:items-center gap-4'>
                    {CommunityStats.map((stat, index) => (
                            <div key={index} className=' py-4 px-5 rounded-[14px] w-fit  bg-white communities-stats-shadow  '> 
                                <div className='flex items-center h-fit  w gap-3'> 
                                    <Bai_700 text={stat.value} className='text-[20px]  base-purple-text h-fit' />
                                    <Jet_600 text={stat.label} className='text-[11px] base-purple-text-300 uppercase h-fit pb-1' />
                                </div>
                            </div>
                        ))}
                    </div>
 
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default CommunitiesHero