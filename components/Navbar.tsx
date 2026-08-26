'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Bai_600 } from './fontAids/Fonts'
import { LinkTemp1 } from './ui/LinkTemps'
import { MenuXIcon, MenuIcon } from '@/static-data/images'
import { useState } from 'react'

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Communities', href: '/communities' },
    { label: 'Services', href: '/services' },
    { label: 'Events And Trainings', href: '/events' },
] 



const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    function toggleMenu() {
        setMobileMenuOpen(!mobileMenuOpen)
    }
  return (
    <div  className="fixed top-0 left-0 w-screen h-20 z-50  navbar-shadow ">
        <div className="flex items-center justify-between p-4 md:px-8 px-6 bg-white text-[#2B1043A6] w-full h-full ">
            <Link href={'/'}>
                <Image src="/assets/images/nihub-logo-dark.png" alt="Logo" width={200} height={40} />
            </Link>
            { !mobileMenuOpen &&
                <div onClick={toggleMenu} className='w-6 h-6  md:hidden '>
                    <Image src={MenuIcon} alt='Menu icon' width={22} height={22} />
                </div>
            }
            { mobileMenuOpen &&
                <div onClick={toggleMenu}  className='w-6 h-6  md:hidden '>
                    <Image src={MenuXIcon} alt='Menu icon' width={22} height={22} />
                </div>
            }



            <nav className='md:block hidden'>
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

            <div className="w-250px h-10 md:block hidden">
                <LinkTemp1 href="/communities" className='px-4 py-2 text-[13px] w-fit h-fit base-purple-bg text-white rounded-[10px] link-shadow' text='Join a Community' linkIndex={0} />
            </div>
        </div>

        { mobileMenuOpen && 
            <div  className='relative   md:hidden  bg-white ' >
            <div className='w-full h-4 overflow-hidden'>
                <div style={{boxShadow: '0px 2px 20px 0px rgba(43, 16, 67, 0.08)', borderTop: '1.64px solid rgba(0, 0, 0, 0.05)'}} className='relative z-10 w-[110%] h-4 -mt-2 -ml-1' />
            </div>
            <div className='p-6 pt-2'>
                <nav className='relative z-0'>
                    <ul className='flex flex-col gap-4 '>
                        {navLinks.map((link) => (
                            <li key={link.href} className="block  bg-white">
                                <Link href={link.href} className="transition-colors hover:text-[#2B1043]  text-[#2B1043A6]">
                                    <Bai_600 className='text-[13px]  capitalize' text={link.label}/>
                                </Link>
                            </li>
                        ))}
                    </ul>

                </nav>
                
                <div className="h-10 mt-6">
                    <LinkTemp1 href="/communities" className='text-[13px] w-full h-fit py-3 base-purple-bg text-white rounded-[10px] link-shadow' text='Join a Community' linkIndex={0} />
                </div>
            </div>
            
        </div>
        }


    </div>
  )
}

export default Navbar