import { Bai_Jamjuree, JetBrains_Mono, Poppins } from "next/font/google"


const bai_700 = Bai_Jamjuree ({weight: '700'})
const bai_600 = Bai_Jamjuree ({weight: '600'})
const bai_400 = Bai_Jamjuree ({weight: '400'})

const pop_400 = Poppins({weight: '400'})
const pop_600 = Poppins({weight: '600'})
const pop_700 = Poppins({weight: '700'})

const pop_600_italic = Poppins({weight: '600', style: 'italic'})
const pop_700_italic = Poppins({weight: '700', style: 'italic'})


const jet_800 = JetBrains_Mono({weight: '800'})
const jet_700 = JetBrains_Mono({weight: '700'})
const jet_600 = JetBrains_Mono({weight: '600'})
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

export const Pop_600 = ({className, text} : {className?: string, text: string}) => {
  return (
    <p className={`${pop_600.className} ${className}`}> {text}  </p>
  )
}

export const Pop_700 = ({className, text} : {className?: string, text: string, italic?: boolean}) => {
  return (
    <p className={`${pop_700.className} ${className} `}> {text}  </p>
  )
}

export const Pop_600_Italic = ({className, text} : {className?: string, text: string, italic?: boolean}) => {
  return (
    <p className={`${pop_600_italic.className} ${className} italic`}> {text}  </p>
  )
}


export const Pop_700_Italic = ({className, text} : {className?: string, text: string, italic?: boolean}) => {
  return (
    <p className={`${pop_700_italic.className} ${className} italic`}> {text}  </p>
  )
}






export const Jet_400 = ({className, text} : {className?: string, text: string}) => {
  return (
    <p className={`${jet_400.className} ${className}`}> {text}  </p>
  )
}

export const Jet_600 = ({className, text} : {className?: string, text: string}) => {
  return (
    <p className={`${jet_600.className} ${className}`}> {text}  </p>
  )
}

export const Jet_700 = ({className, text} : {className?: string, text: string}) => {
  return (
    <p className={`${jet_700.className} ${className}`}> {text}  </p>
  )
}

export const Jet_800 = ({className, text} : {className?: string, text: string}) => {
  return (
    <p className={`${jet_800.className} ${className}`}> {text}  </p>
  )
}







