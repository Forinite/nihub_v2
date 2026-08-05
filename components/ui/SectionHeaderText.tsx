import {Bai_700} from "../fontAids/Fonts"

const SectionHeaderText = ({text} : {text: string}) => {
  return (
    <h5 className='flex items-center justify-center w-fit px-3 py-1 rounded-full border-[#2B104333] border text-[#4A1A6E] bg-[#2B104314]  uppercase'>
      <Bai_700 text={text} className="text-[11px]" />
    </h5>
  )
}

export default SectionHeaderText