import AboutSection from "@/components/homeSections/aboutSection";
import CommunitySection from "@/components/homeSections/communitySection";
import CorePillarSection from "@/components/homeSections/corePillarSection";
import CTASection from "@/components/homeSections/ctaSection";
import HeroSection from "@/components/homeSections/hero";
import ImpactSection from "@/components/homeSections/impactSection";
import RecognitionSection from "@/components/homeSections/recognitionSection";
import TrainingSection from "@/components/homeSections/trainingSection";



export default function Home() {
  return (
    <main className="">

      <HeroSection />
      <AboutSection />
      <CorePillarSection />
      <TrainingSection />
      <ImpactSection  />
      <RecognitionSection />
      <CommunitySection />
      <CTASection />


    </main>
  );
}
