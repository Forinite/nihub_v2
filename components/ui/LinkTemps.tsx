import Link from "next/link"
import {Bai_700} from "../fontAids/Fonts"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { ArrowBentRightIcon } from "@/static-data/images"


export const LinkTemp1= ({href, className, linkIndex, text}: {href: string, className?: string, linkIndex?: number, text: string}) => {
  return (
    <Link className={`${className} flex items-center justify-center space-x-2  capitalize`} href={href}>
       <Bai_700 text={text} />
       {linkIndex == 1  && 
       <div>
          <Image alt="arrowicon" src={ArrowBentRightIcon} className="w-3.5 h-3.5 " width={14} height={14} />
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
              <Image alt="arrowicon" src={ArrowBentRightIcon} className="w-3.5 h-3.5 " width={14} height={14} />
          </div>
       } 
       {  ( linkIndex != 1  ) && 
          <ArrowRight className="w-3.5 h-3.5" />
       } 
    </Link>
  )
}


