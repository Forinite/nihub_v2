

const SectionSubHeaderText = ({text, text2} : {text?: string, text2?:string}) => {
  return (
    <div className="flex items-center">
      {text && <h1 className="text-2xl base-black-text">{text}</h1>}
      {text2 && <h1 className="text-2xl base-purple-text">{text2}</h1>}
    </div>
  )
}

export default SectionSubHeaderText