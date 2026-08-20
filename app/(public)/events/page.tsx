import AllEventsSection from "@/components/eventsSections/AllEventsSection"
import BootcampAndTrainingsSections from "@/components/eventsSections/BootcampAndTrainingsSections"
import EventsCTASection from "@/components/eventsSections/EventsCTASection"
import EventsHero from "@/components/eventsSections/EventsHero"
import EventsImpactSections from "@/components/eventsSections/EventsImpactSections"
import HeadlineEventsSection from "@/components/eventsSections/HeadlineEventsSection"


const EventsPage = () => {
  return (

    <main>
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