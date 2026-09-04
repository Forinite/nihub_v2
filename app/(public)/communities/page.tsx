import AllCommuntiesSection from '@/components/communitySections/AllCommuntiesSection'
import CommunitiesHero from '@/components/communitySections/CommunitiesHero'
import FeaturedCommunitiesSection from '@/components/communitySections/FeaturedCommunities'
import CommunityImpactSection from '@/components/communitySections/CommunityImpactSection'
import NewCommunitySection from '@/components/communitySections/NewCommunitySection'
import HiddenH1 from '@/components/HiddenH1'


const CommunitiesPage = () => {
  return (

    <main>
      <HiddenH1 text="NIHUB FUTMinna Communities  - Find Your Tribe" />
      <CommunitiesHero />
      <FeaturedCommunitiesSection />
      <AllCommuntiesSection />
      <CommunityImpactSection />
      <NewCommunitySection />
    </main>

  )
}

export default CommunitiesPage