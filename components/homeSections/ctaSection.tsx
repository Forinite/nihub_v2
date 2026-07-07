import Link from "next/link"
import { LinkTemp1 } from "../ui/LinkTemps"
import { Bai_Jamjuree } from "next/font/google"
import Bai_700 from "../fontAids/Bai_700"


const CTASection = () => {
  return (
    <section className="py-24">
        <div className="text-center">
            <Bai_700 
              text="Ready to Build the Future?"  
              className="text-[52px] base-purple-text w-[420px] tracking-[-1px] uppercase text-center mx-auto leading-[65px]" 
            />
            <p className="base-purple-text-100 text-[16px] pt-5 leading-[24px] max-w-[576px] mx-auto">Join thousands of innovators, developers, and entrepreneurs who have found their community at NIHUB.</p>
            <div className="flex items-center justify-center pt-8">
                <LinkTemp1 
                  href="/communties" text="Join a Communinty"  
                  className="cta-community-link base-purple-bg text-[13px] py-3.5 px-7 " 
                  />
                <LinkTemp1 
                  href="/services" text="View Our Services"  
                  className="cta-service-link  text-[13px] py-3.5 px-7 h-fit " 
                  linkIndex={1}
                   />
            </div>
        </div>
    

    </section>
  )
}

export default CTASection