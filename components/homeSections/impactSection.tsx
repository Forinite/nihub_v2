import { ImpactStats } from "@/static-data"
import SectionHeaderText from "../ui/SectionHeaderText"
import SectionSubHeaderText from "../ui/SectionSubHeaderText"


const ImpactSection = () => {
  return (
    <section className="impaact-section-bg">
        <div className="flex flex-col items-center ">
            <SectionHeaderText text="Impact & Recognition" />
            <SectionSubHeaderText text2="Our Impact in Numbers"/>
        </div>

        <ul className="grid grid-cols-4">
            {ImpactStats.map((stat, index) => (
                <li key={index}  className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl">{stat.value}</h1> 
                    <h3 className="text-{16px]">{stat.label}</h3>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default ImpactSection