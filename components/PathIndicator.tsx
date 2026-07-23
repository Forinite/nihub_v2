import Image from 'next/image'
import { Jet_400, Jet_600 } from './fontAids/Fonts'
import { GreyBentRightArrow } from '@/static-data/images'

const PathIndicator = ({basePath, nextPaths} : {basePath: string, nextPaths?: string[]}) => {
  return (
        <div className='flex items-center gap-2 common-max-width mx-auto'>
          <Jet_400 text={basePath} className=' base-grey-text-100 text-[12px]' />
          {nextPaths && nextPaths.map((item, index) => (
            <div key={index}  className='flex items-center gap-2 '>
                {/* <div className='w-3 h-3 border border-[#9E9E9E]'/> */}
                <Image alt='Arrow Icon' src={GreyBentRightArrow} width={12} height={12} />
                <Jet_600 text={item} className=' base-purple-text text-[12px]' />
            </div>
          ))}

        </div>
  )
}

export default PathIndicator