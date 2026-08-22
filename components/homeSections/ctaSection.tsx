import { LinkTemp1 } from "../ui/LinkTemps"
import {Bai_700} from "../fontAids/Fonts"

import DotGridBG from "./bg/DotGridBG"


const CTASection = () => {
  return (
    <section className=" " >
      <div className="">
        <div className="md:py-24 py-20 relative bg-[#F5F5F5] ">
          <DotGridBG />
            <div className="text-center relative z-30 md:px-auto p-10">
                <Bai_700 
                  text="Ready to Build the Future?"  
                  className="md:text-[52px] text-[36px]  base-purple-text max-w-[420px] tracking-[-1px] uppercase text-center mx-auto leading-[45px] md:leading-[65px]" 
                />
                <p className="base-purple-text-100 text-[16px] pt-5 leading-[24px] max-w-[576px] mx-auto">Join thousands of innovators, developers, and entrepreneurs who have found their community at NIHUB.</p>
                <div className="flex items-center justify-center md:flex-row flex-col pt-8 gap-[13px]">

                    <LinkTemp1 
                      href="/communties" text="Join a Communinty"  
                      className="cta-community-link base-purple-bg link-shadow  text-[13px] py-3.5 px-7 text-white  rounded-[10px]" 
                      />

                    <LinkTemp1 
                      href="/services" text="View Our Services"  
                      className="cta-service-link  text-[13px] py-3.5 px-7 h-fit base-purple-text  rounded-[10px]" 
                      linkIndex={1}
                        />
                </div>
            </div>
        </div>
      </div>
        
        
      
    

    </section>
  )
}

export default CTASection