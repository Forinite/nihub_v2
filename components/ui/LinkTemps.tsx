import Link from "next/link"


export const LinkTemp1= ({href, className, linkIndex, text}: {href: string, className?: string, linkIndex?: number, text: string}) => {
  return (
    <Link className={`${className} flex items-center justify-center space-x-2  capitalize`} href={href}>
       {text}
       {linkIndex == 1  && <div>{linkIndex}</div>} 
       {linkIndex != 1  && <div>{linkIndex}</div>} 
    </Link>
  )
}

