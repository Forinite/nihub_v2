import { dotGridImage } from '@/static-data/images'
import Image from 'next/image'

const DotGridBG = () => {
  return (
        <div className="absolute w-full  h-full top-0 ">
          <div className="z-10  absolute top-0 w-full h-full overflow-hidden">
            <div className="flex items-center justify center w-full h-full min-w-[1008px]">
              <Image className='w-[1008px]  mx-auto opacity-20' src={dotGridImage} alt="bg dots" width={1008} height={772}  />
            </div>
          </div>

          <div className="z-20  w-full absolute top-0  h-full overflow-hidden l from-radial-[at_50%_50%] to-[#FFB2340F] _via-blue-400 to-[#00000000] _to-90%" />
          <div className="z-20  w-full absolute top-0  h-full overflow-hidden  from-radial-[at_50%_50%] to-[#2B10430F] _via-blue-400 to-[#00000000] _to-90%" />
        </div>
  )
}

export default DotGridBG