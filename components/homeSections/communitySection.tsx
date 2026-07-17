import SectionHeaderText from "../ui/SectionHeaderText"
import SectionSubHeaderText from "../ui/SectionSubHeaderText"
import CommentCard from "./ui/CommentCard"


const comments = [
    {
        name: 'Amara Okonkwo', 
        title: 'Software Engineer, Lagos',
        comment: 'NIHUB changed my trajectory. The AI bootcamp gave me the skills to land a role at a top Nigerian fintech within three months of graduating.',
    },

    {
        name: 'Tunde Adeyemi', 
        title: 'Founder, TechNaija',
        comment: 'The community here is unlike anything else on campus. I built my first product, got mentorship, and made lifelong connections at NIHUB.',
    },

    {
        name: 'Fatima Bello', 
        title: 'Cloud Engineer, Abuja',
        comment: 'From day one, NIHUB felt like a launchpad. The exposure to real tools, real mentors, and real challenges was transformative.',
    },
]

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