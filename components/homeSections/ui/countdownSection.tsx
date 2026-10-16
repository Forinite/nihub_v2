"use client"; // Required for Next.js App Router

import { Bai_700, Jet_400 } from '@/components/fontAids/Fonts';
import { useCountdown } from '@/hooks/useCountdown';
import { padNum } from '@/lib/utils';
import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

const CountdownSection = ({className, targetDate}: {className? :string; targetDate: string}) => {
  const startsIn = useCountdown(targetDate);
  
  // Hydration fix: Only render the numbers once the component has mounted on the client
  const isMounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!isMounted) {
    // Return a skeleton or null during SSR to prevent mismatch
    return (
                <div className='flex items-center justify-between pt-2 w-full '>
                    {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
                        <div key={unit} className={`flex flex-col items-center justify-center text-center   w-[71px] h-[50px] rounded-[10px] p-2 bg-[#F5F5F5] ${className}`}>
                            <Bai_700 className='text-[18px] leading-4.5' text={'--'} />
                            <Jet_400 text={unit} className='text-[9px] leading-[13.5px] base-grey-text-100 uppercase' />
                        </div>
                    ))}
                </div>
    );
  }

  return (
            <div className='flex items-center justify-between pt-2 w-full '>
                {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
                    <div key={unit} className={`flex flex-col items-center justify-center text-center   w-[71px] h-[50px] rounded-[10px] p-2 ${className ?? ' bg-[#F5F5F5] '} `}>
                        <Bai_700 className='text-[18px] leading-4.5' text={padNum(startsIn[unit])} />
                        <Jet_400 text={unit} className='text-[9px] leading-[13.5px] base-grey-text-100 uppercase' />
                    </div>
                ))}
            </div>
  );
};

export default CountdownSection;