import Image from 'next/image'
import Link from 'next/link'
import { Bai_600 } from './fontAids/Fonts'
import { LinkTemp1 } from './ui/LinkTemps'

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Communities', href: '/communities' },
    { label: 'Services', href: '/services' },
    { label: 'Events And Trainings', href: '/events' },


] 

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-20 z-50  flex items-center">
        <div className="flex items-center justify-between p-4 bg-white text-gray-400  w-full h-full">
            <div>
                <Image src="/assets/images/nihub-logo-dark.png" alt="Logo" width={200} height={40} />
            </div>

            <nav>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.href} className="inline-block mx-4">
                            <Link href={link.href} className="transition-colors hover:text-[#2B1043]  text-[#2B1043A6]">
                                <Bai_600 className='text-[13px]  capitalize' text={link.label}/>
                            </Link>
                        </li>
                    ))}
                </ul>

            </nav>

            <div className="w-250px h-10">
                <LinkTemp1 href="/communities" className='px-4 py-2 text-[13px] w-fit h-fit base-purple-bg text-white rounded-[10px] link-shadow' text='Join a Community' linkIndex={0} />
            </div>
        </div>
    </div>
  )
}

export default Navbar