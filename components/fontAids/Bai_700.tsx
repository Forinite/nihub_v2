import { Bai_Jamjuree } from "next/font/google"

const bai_700 = Bai_Jamjuree ({weight: '700'})
const Bai_700 = ({className, text} : {className?: string, text: string}) => {
  return (
    <p className={`${bai_700.className} ${className}`}> {text}  </p>
  )
}

export default Bai_700