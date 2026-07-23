import AboutSection from '@/components/aboutSections/aboutSection'
import AchievementsSection from '@/components/aboutSections/achievementsSection'
import TeamSection from '@/components/aboutSections/teamSection'
import DotGridBG from '@/components/homeSections/bg/DotGridBG'
import PathIndicator from '@/components/PathIndicator'

const AboutSectionOrganised = () => {
  return(
        <div className='relative pt-40 overflow-hidden bg-white'>
          <div className=' absolute w-full h-full top-0 scale-[333.904%] opacity-40 '>
              <div className=' absolute w-full h-full top-0 left-0 z-30 about-page-linear-gradient-dot-grid-overlay' />
              <DotGridBG />
          </div>
          <div className='relative z-30'>
            <PathIndicator basePath='Home' nextPaths={['About Us']} />
            <AboutSection />
          </div>
        </div>
  )

} 

const AboutPage = () => {
  return (
    <main className=''>

      <AboutSectionOrganised />
      <AchievementsSection />
      <TeamSection />
      

    </main>
  )
}

export default AboutPage