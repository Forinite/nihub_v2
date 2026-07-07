import SectionHeaderText from "../ui/SectionHeaderText"
import SectionSubHeaderText from "../ui/SectionSubHeaderText"
import RecognisedIndustryCard from "./ui/RecognisedIndustryCard"

const awards = [
    "Huawei Awards", "Cisco Awards", "GOSC Awards", "Matlab Awards", "HG Awards"
]

const  trustedPartnersAndSponsors = [
    "Huawei", "Cisco", "Google", "Microsoft", "MTN Foundation", "FUTMinna"
]

const RecognitionSection = () => {
  return (
    <section>
        <div>
            <SectionHeaderText text="recognition" />
            <SectionSubHeaderText text="Recoginised For Innovation" />
            <p className="base-gray-text-100">Our work has been celebrated nationally and internationally.</p>
        </div>
        <div className="flex items-center justify-center">
            <ul className="flex ">
                {awards.map((award, index) => (
                    <RecognisedIndustryCard key={index} text={award} index={index} />
                ))}  
            </ul>
         
        </div>

        <div className="mt-20">
            <h5 className="text-center">Trusted Partners & Sponsors</h5>

            <div className="flex items-center justify-center">
                 <ul className="flex gap-3">
                    {trustedPartnersAndSponsors.map((item) => (
                        <li key={item} className="h-fit w-fit px-6 py-3 rounded-md shadow-md bg-white"> {item} </li>
                    ))}
                </ul>
            </div>
           
        </div>
    </section>
  )
}

export default RecognitionSection