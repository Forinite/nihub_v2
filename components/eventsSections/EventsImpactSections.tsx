import { Bai_700, Jet_800, Pop_400 } from "../fontAids/Fonts"
const EventImpactStats = [
    {
        value: '50+',
        label: 'Events Hosted',
        note: 'Since 2019'
    },
        {
        value: '1000+',
        label: 'Participants Trained',
        note: 'Across all bootcamps'
    },
        {
        value: '6',
        label: 'Bootcamps / Year',
        note: 'In key tech tracks'
    },
        {
        value: '72hrs',
        label: 'Longest Hackathon',
        note: 'NIHUB Builtahon'
    },
]
const EventsImpactSections = () => {
  return (
    <section className="md:py-24 py-20  bg-white">
        <div className="md:px-8 px-6 max-w-400 mx-auto">
            <div style={{boxShadow: '0px 16px 64px 0px #2B10434D'}} className="base-purple-bg rounded-2xl md:p-14 p-10">
                <Bai_700 className="text-[36px] md:text-[50px]  md:leading-[62.5px] leading-[45px] max-w-[505px] text-white tracking-[-0.5px] mx-auto text-center uppercase " text="Five Years of Building Together" />
                <div className="pt-12 grid md:grid-cols-4 grid-cols-2 gap-6" >
                    {EventImpactStats.map((stat, index) => (
                        <div key={index} className=" p-5 flex flex-col items-center rounded-2xl border border-[#FFFFFF1A] bg-[#FFFFFF12] text-center">
                            <Bai_700  className="text-[42px] md:text-[48px] leading-[42px] md:leading-[48px] tracking-[-1px] text-white text-center" text={stat.value}/>
                            <Jet_800  className="text-[12px] leading-[18px] tracking-[0.3px] text-white uppercase" text={stat.label}/>
                            <Pop_400 className="text-[11px] text-[#FFFFFF73] pt-0.5" text={stat.note} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </section>
  )
}

export default EventsImpactSections