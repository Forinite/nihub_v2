
import { Bai_Jamjuree, JetBrains_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const jetbrainsmono = JetBrains_Mono()
const baiJamjuree_400 = Bai_Jamjuree({weight: '400'})
const baiJamjuree_300 = Bai_Jamjuree({weight: '300'})


const navs = [
  {label: 'Home', link: '/home'},
  {label: 'About Us', link: '/about'},
  {label: 'Communities', link: '/communities'},
  {label: 'Services', link: '/services'},
  {label: 'Events', link: '/events'},
] 

const socials = [
  {label: 'Instagram', link: 'https://www.instagram.com'},
  {label: 'Linkedin', link: 'https://www.linkedin.com'},
  {label: 'YouTube', link: 'https://www./youtube.com'},
  {label: 'Twitter/X', link: 'https://www.x.com'},
] 

const navHeaders = `${jetbrainsmono.className} uppercase text-[10px] font-bold tracking-[1.5px]`
const linksLabels = `${baiJamjuree_300.className} text-[14px] py-[6px]`
const Footer = () => {
  return (
    <footer  className='text-white base-purple-bg-2 pt-14 pb-8 lg:px-32'>
      <div className='flex items-start justify-between '>
        <div className='min-w-[320px] w-[60%]'>
          <Image  src='/assets/images/nihub-logo-light.png' alt='NIHUB logo' width={186} height={40} />
          <p className={` ${baiJamjuree_400.className} text-[14px] font-normal leading-[24.5px] pt-4  max-w-[320px] `} >NIHUB — a community of innovators shaping the future through technology, collaboration, and growth.</p>
        </div>

        <nav className='min-w-50'>
          <h6  className={navHeaders}>Navigation</h6>
          <ul className={linksLabels}>
              {navs.map((nav) => (
                <li key={nav.label} className='h-[29px] flex items-end justify-start'> <Link className='h-fit' href={nav.link}>{nav.label}</Link> </li>
              ))}
          </ul>
        </nav>

        <div>
          <nav className='min-w-50'>
            <h6  className={navHeaders}>Connect</h6>
            <ul className={linksLabels}>
                {socials.map((social) => (
                  <li key={social.label} className='h-[29px] flex items-end justify-start'> <Link className='h-fit' href={social.link}>{social.label}</Link> </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className='mt-12 h-[42px] border-t-[1px]  border-[#FFFFFF0D] text-[#FFFFFF33]  text-[11px] flex items-end '>

            
            <div style={jetbrainsmono.style} className='flex items-center justify-between h-fit w-full'>
              <p>© 2026 NIHUB. All Rights Reserved. Built by Maestro</p>
              <p >IT & Innovation Hub — Federal University of Technology, Minna</p>
            </div>

      </div>
    </footer>
  )
}

export default Footer