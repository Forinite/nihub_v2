import { TrainingsList } from "@/static-data/events_data"
import { Bai_700, Pop_400 } from "../fontAids/Fonts"
import SectionHeaderText from "../ui/SectionHeaderText"
import TrainingsCard from "./ui/TrainingsCard"


const BootcampAndTrainingsSections = () => {
  return (
    <section className="pink-bg md:py-28 py-20">
        <div className="max-w-[1022px] mx-auto md:px-8 px-6">
            <div className="md:flex items-end justify-between">
                <div>
                    <SectionHeaderText text="Bootcamps & Training"  />
                    <Bai_700  className="text-[40px] md:text-[56px]  base-purple-text text-left md:max-w-[477px]   tracking-[-0.5px] leading-[50px] md:leading-[70px] uppercase pt-4"  text="Structured Programmes" />
                </div>
                <div className="md:flex items-end justify-end w-full h-full pt-6 md:pt-0">
                    <Pop_400 text="Multi-week bootcamps built with industry partners — 100% free for students."  className="text-[15px] max-w-65 h-fit leading-[26.25px] md:text-end base-purple-text-100"/>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 pt-14">
                {TrainingsList.map((training, index) => (
                    <TrainingsCard key={index}  training={training}/>
                ))}
            </div>
        </div>  
    </section>
  )
}

export default BootcampAndTrainingsSections