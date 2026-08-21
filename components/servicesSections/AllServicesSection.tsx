import { Bai_700, Pop_400 } from "../fontAids/Fonts"
import SectionHeaderText from "../ui/SectionHeaderText"
import ServiceCard from "./ui/ServiceCard"
const ServicesList = [
    {
        icon: '', 
        label: 'Tech Training & Bootcamps',
        mainConcept: 'Education',
        description: "Intensive, curriculum-driven bootcamps in the most in-demand tech skills — designed with industry partners so every graduate leaves job-ready, not just certificate-ready." , 
        rgb: [43, 16, 67], 
        catchPhrase: 'Hands-on learning that gets you hired', 
        keywords: ['Students', 'Graduates ', 'Career Switchers'], 
        apply: {label: 'Explore Programmes' , link: '#' }, 
        detailLink: '#'
    },
        {
        icon: '', 
        label: 'Startup Incubation', 
        mainConcept: 'Startup Support',
        description: "NIHUB's incubation programme wraps early-stage founders with mentorship, workspace, and resources to build and launch. We've helped seed dozens of student-led ventures from FUTMinna.", 
        rgb: [124, 58,237], 
        catchPhrase: 'From idea to investable product', 
        keywords: ['Student Founders', 'Early-State Startups'], 
        apply: {label: 'Apply to Incubators' , link: '#' },  
        detailLink: '#'
    },
        {
        icon: '', 
        label: 'Research & Innovation Labs',
        mainConcept: 'Research', 
        description: "Access NIHUB's specialised labs for AI, IoT, embedded systems, and data research — open to undergraduate and postgraduate researchers collaborating on publishable, impactful work.", 
        rgb: [5, 150, 105], 
        catchPhrase: 'State-of-the-art lab for real world problems.', 
        keywords: ['Reseachers', 'Postgraduates', 'Faculty'], 
        apply: {label: 'Book Lab Access' , link: '#' },  
        detailLink: '#'
    },
        {
        icon: '', 
        label: 'Industry Certifications', 
        mainConcept: 'Certification',
        description: "NIHUB is an authorised testing and training centre for Huawei, CISCO, Google, and MathWorks — preparing students for internationally recognised certifications that open doors globally.", 
        rgb: [180, 83, 9], 
        catchPhrase: 'Globally recognised credentials.', 
        keywords: ['Students', 'Professionals', 'Job Seekers'], 
        apply: {label: 'View Certifications' , link: '#' },  
        detailLink: '#'
    },
        {
        icon: '', 
        label: "Digital Infastructure Access", 
        mainConcept: 'Infastructure',
        description: "High-speed internet, cloud compute credits, licensed software, and device loan — NIHUB removes infrastructure barriers so brilliant students can focus entirely on building.", 
        rgb: [3, 105, 161], 
        catchPhrase: 'The tools to build without barriers.', 
        keywords: ['All NIHUB Members'], 
        apply: {label: 'Access Infrastructure' , link: '#' },  
        detailLink: '#'
    },
        {
        icon: '', 
        label: 'Mentorship & Career Support', 
        mainConcept: 'Mentorship',
        description: "From CV reviews to mock interviews and industry introductions — NIHUB's mentorship programme connects members with experienced professionals across Nigeria's tech ecosystem.", 
        rgb: [190, 24, 93], 
        catchPhrase: "Guidance from people who've been there.", 
        keywords: ['Student', 'Final Year', "Jod Seekers"], 
        apply: {label: 'Find a Mentor' , link: '#' },  
        detailLink: '#'
    },
        {
        icon: '', 
        label: 'Events, Hackathons & Talks', 
        mainConcept: 'Events',
        description: "From intimate tech talks to 200-person hackathons, NIHUB runs one of the most active event calendars in Northern Nigeria — bringing together students, practitioners, and industry leaders.", 
        rgb: [202, 138, 4], 
        catchPhrase: 'Where the community comes alive.', 
        keywords: ['Everyone', 'Open to Public'], 
        apply: {label: 'View Events Calender' , link: '#' },  
        detailLink: '#'
    },
        {
        icon: '', 
        label: 'Corporate Training & Partnerships', 
        mainConcept: 'Corporate',
        description: "NIHUB delivers bespoke training programmes for organisations and government agencies looking to upskill their workforce in emerging technologies — with measurable outcomes.", 
        rgb: [71, 85, 105], 
        catchPhrase: 'Upskill your team. Invest in the ecosystem.', 
        keywords: ['Corporates', 'Government', 'NGOs'], 
        apply: {label: 'Discuss Partnership' , link: '#' },  
        detailLink: '#'
    }
]

const AllServicesSection = () => {
  return (
    <section className="max-w-[1022px] px-8 py-28 py-20 mx-auto">
        <div className="flex md:flex-row flex-col md:gap-6 gap-6 items-end justify-between">
            <div>
                <SectionHeaderText text="All Services"  />
                <Bai_700  className="md:text-[56px] text-[40px]  base-purple-text text-left max-w-[477px]   tracking-[-0.5px] md:leading-[70px] leading-[50px] uppercase pt-4"  text="Everything You Need to Grow" />
            </div>
            <div className="md:flex items-end justify-end w-full h-full ">
                <Pop_400 text="Eight services. One hub. Your entire tech journey — covered."  className="text-[15px] w-70 h-fit leading-[26.25px] md:text-end base-purple-text-100"/>
            </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 pt-10">
            {ServicesList.map((service, index) => (
                <ServiceCard key={index} service={service} />
            ))}
        </div>
    </section>

  )
}

export default AllServicesSection