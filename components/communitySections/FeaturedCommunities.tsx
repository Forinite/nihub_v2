import { FeaturedCommunities } from "@/static-data/communties_data"
import { Bai_700} from "../fontAids/Fonts"
import SectionHeaderText from "../ui/SectionHeaderText"
import FeaturedCommunityCard from "./ui/FeaturedCommunityCard"



const FeaturedCommunitiesSection = () => {
  return (
    <section className="md:py-56 py-20 pink-bg">
      <div className="max-w-[1022px] mx-auto px-8">
          <div>
            <SectionHeaderText text="Featured"  />
            <Bai_700  className="text-[40px] md:text-[56px]  base-purple-text text-left md:max-w-96.25   tracking-[-0.5px] leading-[50px] md:leading-[70px] uppercase pt-4"  text="Most Active Communities" />
          </div>

          <div className='pt-12 flex flex-col gap-8'>
            {FeaturedCommunities.map((community, index) => (
              <FeaturedCommunityCard key={index} index={index} community={community}  />
            ))}
          </div>
      </div>
    </section>
  )
}

export default FeaturedCommunitiesSection