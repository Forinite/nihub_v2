import { Bai_700, Pop_400 } from "../fontAids/Fonts"
import SectionHeaderText from "../ui/SectionHeaderText"
import TrainingsCard from "./ui/TrainingsCard"

const TrainingsList = [
    {
        rgb: [124, 58, 237], 
        icon: '', 
        name: 'Artificial Intelligence Bootcamp',
        description: "A 6-week intensive covering machine learning fundamentals, neural networks, computer vision, and real-world AI deployment — built with practitioners, not just professors." , 
        status: 'Ongoing',
        date: 'Jan 2026 (Ongoing)',
        duration: '6 weeks',
        venue: 'Nihub Lab, FUTMinna',
        partner: '',
        cost: 'Free',
        applylink: '#' , 
        detailLink: '#'
    },
    {
        rgb: [43, 16, 67], 
        icon: '', 
        name: 'Full-Stack Web Development',
        description: "From HTML to production-ready web apps — an 8-week programme covering modern frontend, backend APIs, databases, and deployment pipelines." , 
        status: 'Upcoming',
        date: 'Mar 10, 2026',
        duration: '8 weeks',
        venue: 'NIHUB Lab + Virtual',
        partner: '',
        cost: 'Free',
        applylink: '#' , 
        detailLink: '#',
    },
        {
        rgb: [5, 150, 105], 
        icon: '', 
        name: 'Web3 and Blockchain Development ',
        description: "Smart contracts, decentralised apps, and the mechanics of DeFi — an industry-facing programme for developers ready to build on-chain." , 
        status: 'Upcoming',
        date: 'Apr 7, 2026',
        duration: '5 weeks',
        venue: 'Virtual + On-Campus',
        partner: '',
        cost: 'Free',
        applylink: '#' , 
        detailLink: '#',
    },
        {
        rgb: [220, 38, 38], 
        icon: '', 
        name: 'Cybersecurity Fundamentals',
        description: "A comprehensive programme built on the CISCO CyberOps curriculum — covering network security, ethical hacking, incident response, and digital forensics." , 
        status: 'Upcoming',
        date: 'May 5, 2026',
        duration: '6 weeks',
        venue: 'NIHUB Lab, FUTMinna',
        partner: 'CISCO partner',
        cost: 'Free',
        applylink: '#' , 
        detailLink: '#',
    },
        {
        rgb: [194, 65, 12], 
        icon: '', 
        name: 'Cloud Computing & DevOps',
        description: "Huawei Cloud and AWS hands-on training covering infrastructure, containerisation, CI/CD, and cloud architecture — leading to industry certifications." , 
        status: 'Upcoming',
        date: 'Jun 2, 2026',
        duration: '7 weeks',
        venue: 'NIHUB Lab + Virtual',
        partner: 'Huawei partner',
        cost: 'Free',
        applylink: '#' , 
        detailLink: '#',
    },
        {
        rgb: [3, 105, 161], 
        icon: '', 
        name: 'Data Science & Analytics',
        description: "From raw data to boardroom insights — this programme covers the full data pipeline: wrangling, visualisation, statistical analysis, and dashboarding." , 
        status: 'Upcoming',
        date: 'Jul 7, 2026',
        duration: '5 weeks',
        venue: 'NIHUB Lab + Virtual',
        partner: '',
        cost: 'Free',
        applylink: '#' , 
        detailLink: '#',
    },
]

const BootcampAndTrainingsSections = () => {
  return (
    <section className="pink-bg py-28">
        <div className="w-[1022px] mx-auto px-8">
            <div className="flex items-end justify-between">
                <div>
                    <SectionHeaderText text="Bootcamps & Training"  />
                    <Bai_700  className="text-[56px]  base-purple-text text-left w-[477px]   tracking-[-0.5px] leading-[70px] uppercase pt-4"  text="Structured Programmes" />
                </div>
                <div className="flex items-end justify-end w-full h-full ">
                    <Pop_400 text="Multi-week bootcamps built with industry partners — 100% free for students."  className="text-[15px] max-w-65 h-fit leading-[26.25px] text-end base-purple-text-100"/>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-14">
                {TrainingsList.map((training, index) => (
                    <TrainingsCard key={index}  training={training}/>
                ))}
            </div>
        </div>  
    </section>
  )
}

export default BootcampAndTrainingsSections