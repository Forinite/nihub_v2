import { Bai_700, Jet_700, Pop_400 } from "../fontAids/Fonts"
import SectionHeaderText from "../ui/SectionHeaderText"
import SectionSubHeaderText from "../ui/SectionSubHeaderText"
import RecognisedIndustryCard from "./ui/RecognisedIndustryCard"
import Image from "next/image"
import { awards, trustedPartnersAndSponsors } from "@/static-data/home_data"

const partners = [
    'Huawei', 'CISCO', 'Google', 'Microsoft', 'MTN Foundation', 'FUTMinna'
]


const RecognitionSection = () => {
  return (
    <section className="common-section-padding bg-[#F5F5F5] px-8">
        <div className="flex flex-col items-center  text-center ">

            <SectionHeaderText text="recognition" />

            <div className="mt-4" />
            <SectionSubHeaderText text="Recoginised For Innovation" />

            <Pop_400 
                text={'Our work has been celebrated nationally and internationally' } 
                className="base-grey-text-100 pt-3 max-w-112 text-center leading" 
                />

        </div>

        <div className="flex items-center justify-center  pt-12 ">
            <ul className="flex flex-wrap items-center justify-center md:w-full gap-2 ">
                {awards.map((award, index) => (
                    <RecognisedIndustryCard key={index} text={award} index={index} />
                ))}  
            </ul>
         
        </div>

        <div className="mt-20 bg-white md:py-10 px-8 max-w-[880px] mx-auto rounded-[16px] recognitionBoxShadow">
        <Bai_700   text="Trusted Partners & Sponsors" className=" md:flex  hidden  text-center tracking-[2px] text-[11px] base-purple-text uppercase" />

            <div className="md:flex  hidden items-center justify-center pt-8">
                 <ul className="flex gap-3">
                    {trustedPartnersAndSponsors.map((item, index) => (
                        <li key={index} className=" px-6 py-3  w-32.5 h-32.5 rounded-md shadow-md bg-white flex items-center justify-center"> 
                            <Image className="w-full  " alt={item.partner} src={item.img}   /> 
                        </li>
                    ))}
                </ul>
            </div>
            
                    <div className="py-10 px-8 bg-white rounded-2xl mt-12">
                        <Jet_700 className="tracking-[1.98px] uppercase text-[11px] base-purple-text text-center"  text="Trusted Partners & Sponsors"/>
                        <div className="pt-8 flex flex-wrap items-center  justify-center gap-5">
        
                            {partners.map((partner, index) => (
                                <div  key={index} style={{boxShadow: "0px 2px 10px 0px #2B104314"}} className="w-fit h-fit rounded-[14px]  "> 
                                    <Bai_700 className="text-[14px] base-black-text w-fit h-fit py-2.5 px-5 rounded-[14px] border border-[#2B104312] " text={partner}/>
                                </div>
                            ))}
                        </div>
        
                    </div>
           
        </div>


        
    </section>
  )
}

export default RecognitionSection