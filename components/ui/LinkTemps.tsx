import Link from "next/link"
import {Bai_700} from "../fontAids/Fonts"
import { ArrowRight } from "lucide-react"
import { ArrowBentRightIcon } from "../SVGAids/SVG"
// import { ArrowBentRightIcon } from "@/static-data/images"


export const LinkTemp1= ({href, className, linkIndex, text}: {href: string, className?: string, linkIndex?: number, text: string}) => {
  return (
    <Link className={`${className} transition-all flex items-center justify-center space-x-2  capitalize`} href={href}>
       <Bai_700 text={text} />
       {linkIndex == 1  && 
       <div>
            <ArrowBentRightIcon  color="#2B1043" width="14" height="14"/>
       </div>
       } 
       {(linkIndex != 1  ) && 
          <ArrowRight className="w-3.5 h-3.5" />
       } 
    </Link>
  )
}

export const LinkTemp2= ({href, className, linkIndex, text}: {href: string, className?: string, linkIndex?: number, text: string}) => {
  return (
    <Link className={`${className} flex items-center justify-center space-x-2 `} href={href}>
       <Bai_700 text={text} />
      {linkIndex == 1  && 
          <div>
              <ArrowBentRightIcon  color="white" width="14" height="14"/>
          </div>
       } 
       {  ( linkIndex != 1  ) && 
          <ArrowRight className="w-3.5 h-3.5" />
       } 
    </Link>
  )
}


