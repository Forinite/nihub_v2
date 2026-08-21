import { Bai_700, Pop_400 } from "../fontAids/Fonts"
import { CodeIcon, GlobeIcon } from "../SVGAids/SVG"
import SectionHeaderText from "../ui/SectionHeaderText"
import FeaturedCommunityCard from "./ui/FeaturedCommunityCard"

const FeaturedCommunities = [
  {
    icon: GlobeIcon,
    name: 'Google Developer Student Club',
    catchPhrase: 'Build for everyone, powered by Google',
    abbr: 'GDSC',
    mainConcept: 'Development',
    description: "NIHUB's GDSC chapter connects students to Google technologies, developer events, and a global network of builders. We run workshops on Flutter, Firebase, Android, and cloud — and compete in the annual Google Solution Challenge.",
    keywords: ['Flutter', 'Firebase', 'Cloud', 'Android', 'Solution Challenge'],
    stats: {
      members: '320+',
      meetings: 'Weekly',
      partner: 'Google Partner'
    },
    joinLink: 'https://gdsc.community.dev/nihub/',
    learnMoreLink: 'https://gdsc.community.dev/nihub/',
  },
    {
    icon: CodeIcon ,
    name: 'HNG Internship Community',
    catchPhrase: "Nigeria's most rigourous internship.",
    abbr: 'HNG',
    mainConcept: 'Internship',
    description: "NIHUB's HNG chapter prepares students for Africa's most competitive remote internship programme. We run mock tasks, code reviews, and mentorship sessions to help members survive and thrive in each cohort.",
    keywords: ['Frontend', 'Backend', 'DevOps', 'Project Design', 'Technical Writing'],
    stats: {
      members: '210+',
      meetings: 'Bi-weekly',
    },
    joinLink: 'https://hng.community.dev/nihub/',
    learnMoreLink: 'https://hng.community.dev/nihub/',
  },
]

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