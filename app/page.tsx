import Footer from "@/components/Footer";
import AboutSection from "@/components/homeSections/aboutSection";
import CommunitySection from "@/components/homeSections/communitySection";
import CorePillarSection from "@/components/homeSections/corePillarSection";
import CTASection from "@/components/homeSections/ctaSection";
import HeroSection from "@/components/homeSections/hero";
import ImpactSection from "@/components/homeSections/impactSection";
import RecognitionSection from "@/components/homeSections/recognitionSection";
import TrainingSection from "@/components/homeSections/trainingSection";

import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="pt-20]">
  
      <HeroSection />
      <AboutSection />
      <CorePillarSection />
      <TrainingSection />
      <ImpactSection  />
      <RecognitionSection />
      <CommunitySection />
      <CTASection /> 
      <Footer />


    </main>
  );
}
