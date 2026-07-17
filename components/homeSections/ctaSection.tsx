import { LinkTemp1 } from "../ui/LinkTemps"
import {Bai_700} from "../fontAids/Fonts"

import DotGridBG from "./bg/DotGridBG"


const CTASection = () => {
  return (
    <section className="py-24 relative" >
        
      <DotGridBG />

      <div className="text-center relative z-30 ">
          <Bai_700 
            text="Ready to Build the Future?"  
            className="text-[52px] base-purple-text w-[420px] tracking-[-1px] uppercase text-center mx-auto leading-[65px]" 
          />
          <p className="base-purple-text-100 text-[16px] pt-5 leading-[24px] max-w-[576px] mx-auto">Join thousands of innovators, developers, and entrepreneurs who have found their community at NIHUB.</p>
          <div className="flex items-center justify-center pt-8 space-x-[13px]">

              <LinkTemp1 
                href="/communties" text="Join a Communinty"  
                className="cta-community-link base-purple-bg link-shadow  text-[13px] py-3.5 px-7 text-white  rounded-[10px]" 
                />

              <LinkTemp1 
                href="/services" text="View Our Services"  
                className="cta-service-link  text-[13px] py-3.5 px-7 h-fit text-purple-base  rounded-[10px]" 
                linkIndex={1}
                  />
          </div>
      </div>
    

    </section>
  )
}

export default CTASection