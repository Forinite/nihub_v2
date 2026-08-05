import Image from "next/image"
import { Bai_700, Jet_400, Pop_400 } from "../fontAids/Fonts"
import SectionHeaderText from "../ui/SectionHeaderText"
import { BuildingIcon, GradientBarVector, PeopleIcon } from "@/static-data/images"
import { LinkTemp1 } from "../ui/LinkTemps"
import CorePillarCard from "../homeSections/ui/CorePillarCard"
import { Statements } from "@/static-data/about_data"



const AboutSection = () => {
  return (
    <section className=" relative mt-8  "> 

   

    <div className="about-page-common-max-width mx-auto">
        <div className="flex items-center justify-between ">

            <aside className="w-fit">
                <SectionHeaderText text="About NIHUB"  />
                <div className="pt-5  text-[60px] tracking-[-0.5px] leading-[62.4px] uppercase w-110 mb-8">
                    <Bai_700 text="The hub where" className="inline base-purple-text"/>
                    <Bai_700 text="Ideas" className="clarity-text-gradient w-fit inline"/>
                </div>
                <Bai_700 text="Become Impact" className="inline base-purple-text  text-[60px] tracking-[-0.5px] leading-[62.4px] uppercase w-120 "/>

                <div className="pt-6 mt-6 w-110">
                    <Pop_400  className="text-[16px] leading-[28.8px] base-purple-text-100"
                        text="NIHUB — the Nigeria Innovation Hub — is the technology incubator of the Federal University of Technology, Minna. Since our founding, we have served as the intersection of academia, entrepreneurship, and cutting-edge technology." 
                    />

                    <Pop_400  className="text-[16px] leading-[28.8px] base-purple-text-100 mt-5"
                        text="We exist to empower students, researchers, and entrepreneurs with the tools, mentorship, and community they need to turn bold ideas into meaningful, scalable solutions — for Nigeria and the world." 
                    />

                </div>

                <div className='flex items-center space-x-3 pt-8'>

                    <LinkTemp1 href="/communities" className='px-6 py-3 text-[13px] w-fit h-fit base-purple-bg text-white rounded-[10px] link-shadow' text='Explore Communities' linkIndex={0} />

                    <LinkTemp1 href="/services" className='px-6 py-3 text-[13px] w-fit h-fit border border-[#2B104340] base-purple-text rounded-[10px]'     text='View Our Services'  linkIndex={1}/>


                </div>
            </aside>
            <aside className="flex items-center  justify-end w-fit">

                <div className=" relative w-110 h-[247px] about-page-card-shadow rounded-2xl">

                    <div className='absolute  -left-4 -top-3 flex items-center gap-2.5 py-3 px-4 bg-white rounded-[14px]  aboutpage-about-minicard-shadow'>
                        <div className='w-fit h-7.5 icon-box-bg rounded-[10px] flex  items-center justify-center'>
                            <Image  alt={'Building Icon'} src={BuildingIcon} width={20} height={30}  /> 
                        </div>
                        <div className=''>
                            <Bai_700 text='Est. 2018' className='text-[11px] base-purple-text ' />
                            <Jet_400 text='FUTMinna Campus' className='text-[10px]  base-grey-text-100' />
                        </div>
                    </div>

                    <div className='absolute -right-4.25 -bottom-3.25  flex items-center gap-2.5 py-3 px-4 bg-white rounded-[14px] aboutpage-about-minicard-shadow'>
                        <div className='w-8 h-8 icon-box-bg rounded-[10px] flex  items-center justify-center'>
                            <Image  alt={'People Icon'} src={PeopleIcon} width={16} height={16}  /> 
                        </div>
                        <div className=''>
                            <Bai_700 text='Est. 2018' className='text-[11px] base-purple-text ' />
                            <Jet_400 text='FUTMinna Campus' className='text-[10px]  base-grey-text-100' />
                        </div>
                    </div>


                </div>

            </aside>
        </div>

        <div className="pt-20 pb-3 grid grid-cols-3 gap-6">

            {Statements.map((statement, index) => (
                <CorePillarCard 
                    key={index} 
                    title={statement.title} 
                    description={statement.description} 
                    img={statement.img} 
                    imgSize={{x:20, y:20}}
                    iconContSize={{x:44, y:44}}
                    iconContBG="bg-[#2B10430F]"
                    headerClassName='base-purple-text text-[13px] uppercase pt-4'
                    textClassName='base-purple-text-100 text-[13px] leading-[21.13px]  pt-2'
                    />
            ))}
        </div>
    </div>

        <div className="w-full h-fit about-page-about-section-shadw  relative flex items-center justify-center overflow-hidden   " > 
            <Image className="w-full"  width={1023} height={96} alt="gradient" src={GradientBarVector}  />
        </div>

    </section>
  )
}

export default AboutSection