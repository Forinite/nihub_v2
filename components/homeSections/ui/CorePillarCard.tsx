
const CorePillarCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div>
        <div className='w-11 h-11 flex items-center justify-center rounded-md'>

        </div>
        <h4 className="base-black-text">{title}</h4>
        <p className="base-grey-text-100">
            {description}
        </p>
    </div>
  )
}

export default CorePillarCard