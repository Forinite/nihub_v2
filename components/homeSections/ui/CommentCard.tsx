import { Bai_400, Bai_700, Pop_400 } from "@/components/fontAids/Fonts";
import { getInitials } from "@/lib/utils"

interface CommentCardProps {
    name: string;
    title: string;
    comment: string;
    index: number;
}

const initialsBgs = [
    'bg-[#2B1043]', 'bg-[#7C3AED]', 'bg-[#059669]'
]
const CommentCard = ({name, title, comment, index} : CommentCardProps) => {


  return (
    <div className='comment-cont rounded-[16px] p-[26px]'>
        <div className="h-11">

        </div>

           <Bai_400 text={comment}  className="base-black-text pt-2 text-[15px] leading-[26.5px]"/>

        <div className='flex items-center pt-6 gap-3'>
            <div className={`w-10 h-10 rounded-full text-[12px] text-white ${initialsBgs[index % 3]} flex items-center justify-center`}>
                <Bai_700 text={ getInitials(name)}  />
            </div>
            <div>
                <Bai_700  text={name} className="base-black-text text-[13px]" /> 
                <Pop_400 text={title} className="base-grey-text-100 text-[12px]" />
            </div>

        </div>
    </div>
  )
}

export default CommentCard