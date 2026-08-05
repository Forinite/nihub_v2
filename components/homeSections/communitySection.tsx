import { comments } from "@/static-data/home_data"
import SectionHeaderText from "../ui/SectionHeaderText"
import SectionSubHeaderText from "../ui/SectionSubHeaderText"
import CommentCard from "./ui/CommentCard"


const CommunitySection = () => {
  return (
    <section className="bg-white common-section-padding">
        <div className="flex flex-col items-center">

            <SectionHeaderText text="Community Stories" />
            <div className="mt-4" />
            <SectionSubHeaderText text="What Our Community Says" />
        </div>

        <div className="pt-14 w-full max-w-[1004] grid grid-cols-3 gap-[21px] mx-auto">
            {comments.map((comment, index) => (
                <CommentCard 
                    key={index}
                    name={comment.name} 
                    title={comment.title} 
                    comment={comment.comment} 
                    index={index}
                />
            ))}
        </div>
    </section>
  )
}

export default CommunitySection