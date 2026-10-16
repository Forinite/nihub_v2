import { Bai_700 } from "@/components/fontAids/Fonts"
import SectionHeaderText from "@/components/ui/SectionHeaderText"
import HeadlineEventsCard from "./ui/HeadlineEventsCard"
import { getEvents } from "@/lib/supabase/events"

const HeadlineEventsSection = async () => {
  const events = await getEvents({ headline: true })

  return (
    <section className=" py-20 md:py-28 pink-bg">
      <div className="max-w-[1022px] mx-auto md:px-8 px-6">
          <div>
            <SectionHeaderText text="Featured"  />
            <Bai_700  className="text-[40px] md:text-[56px] md:leading-[70px] leading-[50px]   base-purple-text text-left max-w-96.25   tracking-[-0.5px]  uppercase pt-4"  text="Headline Events" />
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-12 gap-6">
              {events.map((event) => (
                <HeadlineEventsCard key={event.name} event={event} />
              ))}
          </div>

      </div>
    </section>
  )
}

export default HeadlineEventsSection