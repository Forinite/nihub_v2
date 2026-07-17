import { AWSImage, CiscoImage, FUTMinnaImage, GDCImage, HuaweiImage, MSImage } from "@/static-data/images"
import { Bai_700, Pop_400 } from "../fontAids/Fonts"
import SectionHeaderText from "../ui/SectionHeaderText"
import SectionSubHeaderText from "../ui/SectionSubHeaderText"
import RecognisedIndustryCard from "./ui/RecognisedIndustryCard"
import Image from "next/image"

const awards = [
    "Huawei Awards", "Cisco Awards", "GOSC Awards", "Matlab Awards", "HG Awards"
]

const  trustedPartnersAndSponsors = [
    {partner : "Huawei", img: HuaweiImage}, 
    {partner : "Cisco", img: CiscoImage},
    {partner :"MicroSoft", img : MSImage},
    {partner:  "AWS", img: AWSImage}, 
    {partner: "Google Developers Circle", img: GDCImage}, 
    {partner: "FUTMinna", img: FUTMinnaImage}
]

const RecognitionSection = () => {
  return (
    <section className="common-section-padding bg-[#F5F5F5]">
        <div className="flex flex-col items-center  text-center">

            <SectionHeaderText text="recognition" />

            <div className="mt-4" />
            <SectionSubHeaderText text="Recoginised For Innovation" />

            <Pop_400 
                text={'Our work has been celebrated nationally and internationally' } 
                className="base-grey-text-100 pt-3 max-w-112 text-center leading" 
                />

        </div>

        <div className="flex items-center justify-center pt-12 b">
            <ul className="flex space-x-2 ">
                {awards.map((award, index) => (
                    <RecognisedIndustryCard key={index} text={award} index={index} />
                ))}  
            </ul>
         
        </div>

        <div className="mt-20 bg-white py-10 px-8 max-w-[880px] mx-auto rounded-[16px] recognitionBoxShadow">
        <Bai_700  text="Trusted Partners & Sponsors" className="text-center tracking-[2px] text-[11px] base-purple-text uppercase" />

            <div className="flex items-center justify-center pt-8">
                 <ul className="flex gap-3">
                    {trustedPartnersAndSponsors.map((item, index) => (
                        <li key={index} className=" px-6 py-3  w-32.5 h-32.5 rounded-md shadow-md bg-white flex items-center justify-center"> 
                            <Image className="w-full  " alt={item.partner} src={item.img}   /> 
                        </li>
                    ))}
                </ul>
            </div>
           
        </div>
    </section>
  )
}

export default RecognitionSection