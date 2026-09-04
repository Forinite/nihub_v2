

const HiddenH1 = ({text} : {text: string}) => {
  return (
    <h1 className="text-transparent absolute top-0 pointer-events-none ">{text}</h1>
  )
}

export default HiddenH1