
const SectionHeaderText = ({text} : {text: string}) => {
  return (
    <h5 className='flex items-center justify-center w-fit px-3 py-1 rounded-full border-[#2B104380] border-[1px] text-[#4A1A6E] bg-grey-200 '>
      {text}
    </h5>
  )
}

export default SectionHeaderText