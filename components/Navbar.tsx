import Image from 'next/image'
import Link from 'next/link'

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
        <div className="flex items-center justify-between p-4 bg-white text-gray-400 w-full h-full">
            <div>
                <Image src="/images/nihub-logo.png" alt="Logo" width={200} height={40} />
            </div>

            <nav>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.href} className="inline-block mx-4">
                            <Link href={link.href} className="hover:text-blue-500">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

            </nav>

            <div className="w-250px h-10">
                <div className=" w-[75%] h-full bg-purple-700 rounded-md text-white flex items-center justify-center ">
                    Join a Community
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar