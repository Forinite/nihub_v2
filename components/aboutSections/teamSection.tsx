import { Bai_700, Pop_400 } from "../fontAids/Fonts"
import { LinkTemp1 } from "../ui/LinkTemps"
import SectionHeaderText from "../ui/SectionHeaderText"
import TeamCard from "./ui/TeamCard"

const teamMembers = [
  { 
    name: 'Dr. Aliyu Musa Bade',
    role: 'Director / Founder',
    statement: 'Visionary leader and academic who established NIHUB to bridge the gap between university education and real-world tech innovation in Nigeria.',
    socials: ['/linkedin/link','/x/link','/mailto:email@gmail.com']
  },

  { 
    name: 'Maryam Abdullahi',
    role: 'Community Managerr',
    statement: "Dedicated to growing and nurturing NIHUB's vibrant ecosystem, ensuring every member finds their voice and their place.",
    socials: ['/linkedin/link','/x/link']
  },
  
    { 
    name: 'Ibrahim Suleiman',
    role: 'Head of Training & Programmes',
    statement: 'Designs and delivers world-class bootcamps in AI, cloud, and web development — turning curriculum into careers.',
    socials: ['/linkedin/link','/mailto:email@gmail.com']
  },

  { 
    name: 'Fatima Umar',
    role: 'Research & Innovation Lead',
    statement: "Spearheads NIHUB's research initiatives and lab projects, connecting students with cutting-edge problems worth solving.",
    socials: ['/linkedin/link','/mailto:email@gmail.com']
  },
  
  { 
    name: 'David Okonkwo',
    role: 'Partnerships & Sponsorships',
    statement: "Builds and maintains NIHUB's relationships with Huawei, CISCO, Google, and other global and Nigerian partners.",
    socials: ['/linkedin/link','/mailto:email@gmail.com']
  },
  { 
    name: 'Aisha Bello',
    role: 'Events & Outreach Coordinator',
    statement: "Orchestrates NIHUB's packed calendar of hackathons, workshops, and tech talks — making every event one to remember.",
    socials: ['/linkedin/link','/x/link']
  },
]

const TeamSection = () => {
  return (
    <section  className="common-section-padding">
      <div className="about-page-common-max-width mx-auto">
        <div>
          <SectionHeaderText text="The Team"  />

          <div className="flex justify-between items-baseline pt-4">
            <Bai_700  className="text-[46px] base-purple-text text-left w-102.75 tracking-[-0.5px] leading-[57.5px] uppercase"  text="Meet the People Behind Nihub" />

            <Pop_400 className="text-[15px] text-right w-80 base-purple-text-100 leading-[26.25px]" text="A dedicated crew of educators, builders, and connectors — committed to every member's growth." />

          </div>

        </div>
        <div className="pt-14 grid grid-cols-2 gap-6">

          {teamMembers.map((item, index) => (
            <TeamCard key={index} name={item.name} role={item.role} statement={item.statement} socials={item.socials} index={index} />
          ))}

        </div>
        <div className="pt-12 flex flex-col items-center justify-center">
          <Pop_400 className="text-[14px] base-purple-text-300 pb-4 " text="Passionate about building the future of tech in Nigeria? "  />
          <LinkTemp1 text="Get in touch with us" href="/contact" linkIndex={0} className="text-[14px] base-purple-text" />
        </div>
      </div>

        
    </section>
  )
}

export default TeamSection