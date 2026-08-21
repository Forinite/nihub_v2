import PathIndicator from '../PathIndicator'
import SectionHeaderText from '../ui/SectionHeaderText'
import { Bai_700, Jet_400, Pop_400, Pop_600 } from '../fontAids/Fonts'
import { LinkTemp1 } from '../ui/LinkTemps'
import { BarChartIcon, BookIcon, BuildingsIcon, GlobeIcon, MedalIcon, MessageIcon, RocketIcon, WifiIcon } from '../SVGAids/SVG'

const ServicesList = [
    {icon: BookIcon, label: 'Education', description: 'Tech Training', rgb: [43, 16, 67]},
    {icon: RocketIcon, label: 'Startup Support', description: 'Startup Incubation', rgb: [124, 58,237]},
    {icon: BarChartIcon, label: 'Research', description: 'Research & Innovation', rgb: [5, 150, 105]},
    {icon: MedalIcon, label: 'Certification', description: 'Industry Certifications', rgb: [180, 83, 9]},
    {icon: WifiIcon, label: 'Infrastructure', description: 'Digital Infrastructure Access', rgb: [3, 105, 161]},
    {icon: MessageIcon, label: 'Mentorship', description: 'Mentorship & Career', rgb: [190, 24, 93]},
    {icon: GlobeIcon, label: 'Events', description: 'Event, Hackathons', rgb: [202, 138, 4]},
    {icon: BuildingsIcon, label: 'Corporate', description: 'Corporate training', rgb: [71, 85, 105]}
]
const ServicesHero = () => {
  return (
    <section className=' '>
        <div className='absolute z-10 ' style={{background: 'radial-gradient(50% 60% at 5% 85%, rgba(255, 178, 52, 0.07) 0%, rgba(255, 178, 52, 0) 100%)'}}/>
        <div className='relative z-20 md:py-40 py-24 max-w-[1022px]   mx-auto'>
            <PathIndicator basePath='Home' nextPaths={['Services']} />

            <div className='px-6 md:px-8'>
                
                <div className='pt-10'>
                    <SectionHeaderText  text='What We Offer'/>
                    <Bai_700  text='Services Built ' className='w-fit pt-5 base-purple-text text-[48px] md:text-[72px] leading-[48.96px] md:leading-[73.44px] -tracking-[1px] uppercase'/>

                    <div className='grid md:grid-cols-2 md:gap-20 gap-14'>
                        <div>
                            <div className='  -tracking-[1px] text-[48px] md:text-[72px] leading-[48.96px] md:leading-[73.44px]'>
                                <Bai_700  text='To Launch You' className='md:w-fit w-min clarity-text-gradient uppercase' />
                            </div>

                            <div className='pt-6 text-[17px] leading-[30.6px] base-purple-text-100  '>
                                <Pop_400 text= "From bootcamps and certifications to startup incubation and research labs — every NIHUB service closes the gap between where you are and where you want to be."  />
                            </div>

                            
                            <div className='flex items-center space-x-3 pt-10'>
                                <LinkTemp1 href="/services" className='px-6 py-3 text-[13px] w-fit h-fit base-purple-bg text-white rounded-[10px] link-shadow' text='Get Started' linkIndex={0} />
                                <LinkTemp1 href="/services" className='px-6 py-3 text-[13px] w-fit h-fit border border-[#2B104340] base-purple-text rounded-[10px]'  text='Contact Us'  linkIndex={1}/>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-3 w-full'>
                            {ServicesList.map((service, index) => (
                                <div key={index} style={{boxShadow: '0px 2px 12px 0px #2B104312'}} className='p-4 flex items-center gap-4 bg-white border border-[#2B10430F] rounded-[14px]'>
                                    <div style={{background: `rgba(${service.rgb}, 0.05)`}} className='w-9 h-9 min-w-9 flex items-center justify-center rounded-[10px]'>
                                        <service.icon color={`rgb(${service.rgb})`} width='22' height='22' />
                                    </div>
                                    <div>
                                        <Bai_700 className='text-[12px] base-purple-text' text={service.label} />
                                        <Jet_400  className='text-[10px] base-purple-text-300' text={service.description}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    

                    
                </div>
            </div>
        </div>
        <div style={{background: 'linear-gradient(180deg, rgba(245, 240, 255, 0) 0%, #F5F0FF 100%)'}} className='w-full h-28 md:block hidden   mt-4 '></div>
        
        
    </section>
  )
}

export default ServicesHero