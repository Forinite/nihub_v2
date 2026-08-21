import { teamMembers } from "@/static-data/about_data"
import { Bai_700, Pop_400 } from "../fontAids/Fonts"
import { LinkTemp1 } from "../ui/LinkTemps"
import SectionHeaderText from "../ui/SectionHeaderText"
import TeamCard from "./ui/TeamCard"



const TeamSection = () => {
  return (
    <section  className="common-section-padding">
      <div className="about-page-common-max-width mx-auto">
        <div>
          <SectionHeaderText text="The Team"  />

          <div className="md:flex justify-between items-baseline pt-4">
            <Bai_700  className="text-[46px] base-purple-text text-left w-102.75 tracking-[-0.5px] leading-[57.5px] uppercase"  text="Meet the People Behind Nihub" />

            <Pop_400 className="text-[15px] md:text-right w-80 base-purple-text-100 leading-[26.25px] md:pt-0 pt-6" text="A dedicated crew of educators, builders, and connectors — committed to every member's growth." />

          </div>

        </div>
        <div className="pt-14 md:grid grid-cols-2 gap-6">

          {teamMembers.map((item, index) => (
            <TeamCard key={index} image={item.image} name={item.name} role={item.role} statement={item.statement} socials={item.socials} index={index} />
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