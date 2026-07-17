import { Bai_Jamjuree, JetBrains_Mono, Poppins } from "next/font/google"


const bai_700 = Bai_Jamjuree ({weight: '700'})
const bai_600 = Bai_Jamjuree ({weight: '600'})
const bai_400 = Bai_Jamjuree ({weight: '400'})

const pop_400 = Poppins({weight: '400'})

const jet_400 = JetBrains_Mono({weight: '400'})


export const Bai_700 = ({className, text} : {className?: string, text: string}) => {
  return (
    <p className={`${bai_700.className} ${className}`}> {text}  </p>
  )
}


export const Bai_600 = ({className, text} : {className?: string, text: string}) => {
  return (
    <p className={`${bai_600.className} ${className}`}> {text}  </p>
  )
}

export const Bai_400 = ({className, text} : {className?: string, text: string}) => {
  return (
    <p className={`${bai_400.className} ${className}`}> {text}  </p>
  )
}

export const Pop_400 = ({className, text} : {className?: string, text: string}) => {
  return (
    <p className={`${pop_400.className} ${className}`}> {text}  </p>
  )
}


export const Jet_400 = ({className, text} : {className?: string, text: string}) => {
  return (
    <p className={`${jet_400.className} ${className}`}> {text}  </p>
  )
}





