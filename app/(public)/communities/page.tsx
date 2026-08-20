import AllCommuntiesSection from '@/components/communitySections/AllCommuntiesSection'
import CommunitiesHero from '@/components/communitySections/CommunitiesHero'
import FeaturedCommunitiesSection from '@/components/communitySections/FeaturedCommunities'
import CommunityImpactSection from '@/components/communitySections/CommunityImpactSection'
import NewCommunitySection from '@/components/communitySections/NewCommunitySection'


const CommunitiesPage = () => {
  return (

    <main>
      <CommunitiesHero />
      <FeaturedCommunitiesSection />
      <AllCommuntiesSection />
      <CommunityImpactSection />
      <NewCommunitySection />
    </main>

  )
}

export default CommunitiesPage