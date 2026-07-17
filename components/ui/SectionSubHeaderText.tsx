import {Bai_700} from "../fontAids/Fonts"


const SectionSubHeaderText = ({text, text2} : {text?: string, text2?:string}) => {
  return (
    <div className="flex items-center">
      {text &&  <Bai_700 text={text}  className="text-[44px] leading-[55px] tracking-[-0.5px] base-black-text uppercase" /> }
      {text && text2? <div> &nbsp; &nbsp; </div> :null}
      {text2 && <Bai_700 text={text2}  className="text-[44px] leading-[55px] tracking-[-0.5px] base-purple-text uppercase" />}
    </div>
  )
}

export default SectionSubHeaderText