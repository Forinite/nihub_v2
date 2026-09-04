import { ServicesList } from "@/static-data/services_data"
import { Bai_700, Pop_400 } from "../fontAids/Fonts"
import SectionHeaderText from "../ui/SectionHeaderText"
import ServiceCard from "./ui/ServiceCard"

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