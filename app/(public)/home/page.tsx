import HiddenH1 from "@/components/HiddenH1";
import AboutSection from "@/components/homeSections/aboutSection";
import CommunitySection from "@/components/homeSections/communitySection";
import CorePillarSection from "@/components/homeSections/corePillarSection";
import CTASection from "@/components/homeSections/ctaSection";
import HeroSection from "@/components/homeSections/hero";
import ImpactSection from "@/components/homeSections/impactSection";
import RecognitionSection from "@/components/homeSections/recognitionSection";
import TrainingSection from "@/components/homeSections/trainingSection";



export default function HomePage() {
  return (
    <main className="">

      <HiddenH1 text="NIHUB | FUTMinna - We Give Clarity to Ideas" />

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
