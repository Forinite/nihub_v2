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
    <div className=''>
        <div>

        </div>
        <p className='base-black-text'>
           {comment}
        </p>
        <div className='flex items-center '>
            <div className={`w-10 h-10 rounded-full text-[12px] text-white ${initialsBgs[index]} flex items-center justify-center`}>
                { getInitials(name)}
            </div>
            <div>
                <h5 className='base-black-text text-[13px]'> {name} </h5>
                <h5 className='base-grey-text-100 text-[12px]'>{title}</h5>
            </div>

        </div>
    </div>
  )
}

export default CommentCard