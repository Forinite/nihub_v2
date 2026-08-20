import AllServicesSection from "@/components/servicesSections/AllServicesSection"
import ProcessSection from "@/components/servicesSections/ProcessSection"
import ServiceCTASection from "@/components/servicesSections/ServiceCTASection"
import ServicesHero from "@/components/servicesSections/ServicesHero"
import WhyNihubSection from "@/components/servicesSections/WhyNihubSection"


const ServicesPage = () => {
  return (

    <main>
        <ServicesHero />
        <ProcessSection />
        <AllServicesSection />
        <WhyNihubSection />
        <ServiceCTASection />
    </main>

  )
}

export default ServicesPage