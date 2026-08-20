import { Bai_700, Jet_700, Pop_400 } from "../fontAids/Fonts"
import SectionHeaderText from "../ui/SectionHeaderText"
import CommunityCard from "./ui/CommunityCard"

const activeClassNames = 'text-white'

const activeBG = {background: '#2B1043', borderTop: '1px solid #000000', boxShadow: '0px 4px 12px 0px #2B10434D'}
const inActiveBG = {background: '#2B10430F', border: '1px solid #2B10431F'}

const filters = ['Development', 'AI/ML', 'Security', 'Networking', 'Blockchain', 'Cloud', 'Internship', 'Community']


const Communities = [
    {
    icon: ' ',
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
    icon: '' ,
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
  
    {
    icon: '' ,
    name: 'CISCO Networking Academy',
    catchPhrase: "Gold-status networking & security learning.",
    abbr: 'CISCO',
    mainConcept: 'Networking',
    description: "As a Gold-status CISCO Networking Academy, NIHUB delivers industry-recognised courses in networking, cybersecurity, IoT",
    keywords: ['CCNA', 'Cybersecurity', 'IoT', 'CISCO', 'Networking'],
    stats: {
        members: '180+',
        meetings: 'Weekly',
        partner: 'CISCO'
    },
    joinLink: 'https://cisco.community.dev/nihub/',
    learnMoreLink: 'https://cisco.community.dev/nihub/',
  },
  
    {
    icon: '' ,
    name: 'AI & Machine Learning Club',
    catchPhrase: "Where data meets curiosity.",
    abbr: 'CISCO',
    mainConcept: 'AI / ML',
    description: "From Python fundamentals to neural networks and large language models — NIHUB's AI Club is where students learn, experiment",
    keywords: ['Python', 'TensorFlow', 'LLMs', 'ML', 'AI', 'RAG'],
    stats: {
      members: '290+',
      meetings: 'Weekly',
    },
    joinLink: 'https://ai.community.dev/nihub/',
    learnMoreLink: 'https://ai.community.dev/nihub/',
  },
  {
    icon: '' ,
    name: 'Cybersecurity Guild',
    catchPhrase: "Hack to protect. Learn to defend.",
    abbr: 'CG',
    mainConcept: 'Security',
    description: "From Python fundamentals to neural networks and large language models — NIHUB's AI Club is where students learn, experiment",
    keywords: ['CTF', 'Ethical Hacking', 'Hackathons'],
    stats: {
      members: '155+',
      meetings: 'Bi-weekly',
    },
    joinLink: 'https://cg.community.dev/nihub/',
    learnMoreLink: 'https://cg.community.dev/nihub/',
  },
   {
    icon: '' ,
    name: 'Web3 & Blockchain Hub',
    catchPhrase: "Decentralise everything.",
    abbr: 'W3BH',
    mainConcept: 'Blockchain',
    description: "Smart contracts, DeFi, NFTs, and the decentralised web. NIHUB's Web3 Hub explores the frontier of blockchain technology",
    keywords: ['Solidify', 'Ethereum', 'Defi', 'Web3', 'Hub'],
    stats: {
      members: '130+',
      meetings: 'Bi-weekly',
    },
    joinLink: 'https://web3.community.dev/nihub/',
    learnMoreLink: 'https://web3.community.dev/nihub/',
  },
  {
    icon: '' ,
    name: 'Huawei Cloud & ICT  Club',
    catchPhrase: "Cloud skills, global recognition.",
    abbr: 'Huawei',
    mainConcept: 'Blockchain',
    description: "Backed by Huawei's global ICT partnership, this club trains students in cloud computing, AI infrastructure, and networking",
    keywords: ['Huawei Cloud', 'HCIA', 'Big Data', 'ICT', 'Computing'],
    stats: {
      members: '170+',
      meetings: 'Weekly',
      partner: 'Huawei'
    },
    joinLink: 'https://huawei.community.dev/nihub/',
    learnMoreLink: 'https://huawei.community.dev/nihub/',
  },
  {
    icon: '' ,
    name: 'Women in Tech',
    catchPhrase: "Closing the gendergap, one ulder at a time.",
    abbr: 'Huawei',
    mainConcept: 'Blockchain',
    description: "Women in Tech is NIHUB's flagship inclusion initiative — providing mentorship, scholarships, and safe learning spaces for",
    keywords: ['Mentorship', 'Inclusion', 'Leadership', 'Women', 'Skills'],
    stats: {
      members: '195+',
      meetings: 'Monthly',
    },
    joinLink: 'https://ftech.community.dev/nihub/',
    learnMoreLink: 'https://ftech.community.dev/nihub/',
  }

]
const AllCommuntiesSection = () => {
  return (
    <section className="w-[1022px] mx-auto py-28 px-8">
        <div className="flex items-end justify-between">
            <div>
                <SectionHeaderText text="All Communities"  />
                <Bai_700  className="text-[56px]  base-purple-text text-left w-96.25   tracking-[-0.5px] leading-[70px] uppercase pt-4"  text="Most Active Communities" />
            </div>
            <div className="flex items-end justify-end w-full h-full ">
                <Pop_400 text="Every path into tech has a home at NIHUB."  className="text-[15px] w-70 h-fit leading-[26.25px] text-end base-purple-text-100"/>
            </div>
        </div>

        <div className="pt-10">
            <div className="flex  items-center flex-wrap gap-2 pr-4">
                <div style={activeBG} className="flex items-center justify-center gap-1.25 w-[83px] h-8 rounded-full">
                    <Jet_700 className="text-white text-[12px] tracking-[0.6px] w-fit" text="All" />
                    <Jet_700 className="text-white text-[10px] tracking-[0.6px] w-fit  opacity-70" text='(8)' />
                </div>

                {filters.map((item, index) => (
                    <div  key={index} style={inActiveBG}  className="flex items-center justify-center py-1.5 px-4 h-8  w-fit rounded-full">
                        <Jet_700 className="base-purple-text-100 text-[12px] tracking-[0.6px] w-fit" text={item} />
                    </div> 
                ))}

            </div>

        </div>

        <div className="grid grid-cols-2 gap-6 pt-10">
            {Communities.map((community, index) => (
                <CommunityCard key={index} community={community} index={index} />
            ))}
        </div>

    </section>
  )
}

export default AllCommuntiesSection