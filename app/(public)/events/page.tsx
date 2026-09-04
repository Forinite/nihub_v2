import AllEventsSection from "@/components/eventsSections/AllEventsSection"
import BootcampAndTrainingsSections from "@/components/eventsSections/BootcampAndTrainingsSections"
import EventsCTASection from "@/components/eventsSections/EventsCTASection"
import EventsHero from "@/components/eventsSections/EventsHero"
import EventsImpactSections from "@/components/eventsSections/EventsImpactSections"
import HeadlineEventsSection from "@/components/eventsSections/HeadlineEventsSection"
import HiddenH1 from "@/components/HiddenH1"


const EventsPage = () => {
  return (

    <main>
      <HiddenH1 text="NIHUB FUTMinna Events  - Learn. Build. Compete. " />
      <EventsHero />
      <HeadlineEventsSection />
      <AllEventsSection />
      <BootcampAndTrainingsSections />
      <EventsImpactSections />
      <EventsCTASection />
    </main>

  )
}

export default EventsPage