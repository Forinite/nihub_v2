
const VenueDateText = ({text, state}: {text: string; state?: string}) => {
  return (
    <div className='flex items-center gap-2'>
        {state && <h5 className='venue-date-text'> {state.charAt(0).toUpperCase() + state.slice(1)} </h5> }
        <h5 className='venue-date-text'>{text}</h5>
    </div>
  )
}

export default VenueDateText