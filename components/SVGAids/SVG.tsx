
interface IconProps {
    color: string,
    width: string,
    height: string,
}
export const ComSvg = ({color, width, height} : IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 14.6667L20.1667 11L16.5 7.33337" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.49967 7.33337L1.83301 11L5.49967 14.6667" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.2913 3.66663L8.70801 18.3333" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// stroke={color}

export const BoltIcon = ({color, width, height} : IconProps) => {
  return (
   <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.66686 12.8334C3.4934 12.834 3.32332 12.7854 3.1764 12.6932C3.02948 12.601 2.91174 12.4689 2.83687 12.3125C2.76199 12.156 2.73305 11.9815 2.7534 11.8092C2.77376 11.6369 2.84258 11.474 2.95186 11.3393L12.0269 1.98928C12.0949 1.9107 12.1877 1.8576 12.2899 1.8387C12.3922 1.81979 12.4978 1.8362 12.5894 1.88524C12.6811 1.93427 12.7534 2.01301 12.7944 2.10854C12.8354 2.20407 12.8428 2.3107 12.8152 2.41094L11.0552 7.92928C11.0033 8.06817 10.9859 8.21759 11.0044 8.3647C11.0229 8.51181 11.0769 8.65223 11.1616 8.77392C11.2463 8.8956 11.3593 8.99491 11.4909 9.06334C11.6224 9.13176 11.7686 9.16726 11.9169 9.16678H18.3335C18.507 9.16618 18.6771 9.21482 18.824 9.30705C18.9709 9.39927 19.0886 9.53128 19.1635 9.68776C19.2384 9.84423 19.2673 10.0187 19.247 10.191C19.2266 10.3633 19.1578 10.5262 19.0485 10.6609L9.97353 20.0109C9.90546 20.0895 9.81269 20.1426 9.71046 20.1615C9.60823 20.1804 9.50262 20.164 9.41094 20.115C9.31927 20.0659 9.24699 19.9872 9.20597 19.8917C9.16495 19.7961 9.15763 19.6895 9.1852 19.5893L10.9452 14.0709C10.9971 13.932 11.0145 13.7826 10.996 13.6355C10.9775 13.4884 10.9235 13.348 10.8388 13.2263C10.7541 13.1046 10.6411 13.0053 10.5095 12.9369C10.378 12.8685 10.2318 12.833 10.0835 12.8334H3.66686Z" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export const BrainIcon = ({color, width, height} : IconProps) => {
  return (
   <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.0004 4.5833C11.0015 4.21666 10.9292 3.85351 10.7879 3.5152C10.6466 3.17689 10.4391 2.87026 10.1775 2.61333C9.91593 2.35641 9.60563 2.15438 9.26485 2.01913C8.92407 1.88389 8.55968 1.81815 8.19312 1.82579C7.82656 1.83343 7.46523 1.9143 7.13037 2.06363C6.79552 2.21295 6.49391 2.42774 6.24328 2.69534C5.99265 2.96294 5.79806 3.27795 5.67096 3.62185C5.54386 3.96576 5.48681 4.33161 5.50316 4.69788C4.96435 4.83642 4.46412 5.09576 4.04038 5.45625C3.61663 5.81674 3.28047 6.26893 3.05735 6.77858C2.83424 7.28822 2.73003 7.84195 2.7526 8.39783C2.77518 8.95372 2.92396 9.49718 3.18766 9.98705C2.724 10.3637 2.35939 10.848 2.12556 11.3977C1.89173 11.9475 1.79576 12.546 1.846 13.1413C1.89624 13.7366 2.09116 14.3106 2.41382 14.8133C2.73648 15.3161 3.17709 15.7324 3.69733 16.026C3.63309 16.5231 3.67143 17.028 3.80998 17.5097C3.94853 17.9913 4.18435 18.4395 4.50288 18.8264C4.82141 19.2134 5.21589 19.5309 5.66195 19.7594C6.10801 19.9879 6.59618 20.1226 7.09631 20.155C7.59644 20.1875 8.09792 20.1171 8.56977 19.9481C9.04162 19.7792 9.47383 19.5153 9.83969 19.1727C10.2056 18.8302 10.4973 18.4163 10.697 17.9566C10.8966 17.4969 10.9999 17.0011 11.0004 16.5V4.5833Z" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 4.5833C10.9989 4.21666 11.0712 3.85351 11.2125 3.5152C11.3538 3.17689 11.5614 2.87026 11.8229 2.61333C12.0845 2.35641 12.3948 2.15438 12.7356 2.01913C13.0764 1.88389 13.4407 1.81815 13.8073 1.82579C14.1739 1.83343 14.5352 1.9143 14.8701 2.06363C15.2049 2.21295 15.5065 2.42774 15.7571 2.69534C16.0078 2.96294 16.2024 3.27795 16.3295 3.62185C16.4566 3.96576 16.5136 4.33161 16.4973 4.69788C17.0361 4.83642 17.5363 5.09576 17.9601 5.45625C18.3838 5.81674 18.72 6.26893 18.9431 6.77858C19.1662 7.28822 19.2704 7.84195 19.2478 8.39783C19.2252 8.95372 19.0765 9.49718 18.8128 9.98705C19.2764 10.3637 19.641 10.848 19.8749 11.3977C20.1087 11.9475 20.2047 12.546 20.1544 13.1413C20.1042 13.7366 19.9093 14.3106 19.5866 14.8133C19.264 15.3161 18.8233 15.7324 18.3031 16.026C18.3673 16.5231 18.329 17.028 18.1904 17.5097C18.0519 17.9913 17.8161 18.4395 17.4975 18.8264C17.179 19.2134 16.7845 19.5309 16.3385 19.7594C15.8924 19.9879 15.4042 20.1226 14.9041 20.155C14.404 20.1875 13.9025 20.1171 13.4307 19.9481C12.9588 19.7792 12.5266 19.5153 12.1607 19.1727C11.7949 18.8302 11.5031 18.4163 11.3035 17.9566C11.1038 17.4969 11.0005 17.0011 11 16.5V4.5833Z" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.75 11.9167C12.9804 11.6459 12.3084 11.1531 11.8189 10.5004C11.3294 9.84776 11.0444 9.06461 11 8.25C10.9556 9.06461 10.6706 9.84776 10.1811 10.5004C9.69162 11.1531 9.01959 11.6459 8.25 11.9167" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.1328 5.95841C16.3547 5.57395 16.4802 5.1415 16.4986 4.698" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.50293 4.698C5.52106 5.14142 5.64623 5.57387 5.86776 5.95841" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.1875 9.988C3.35519 9.85142 3.53464 9.72995 3.72375 9.625" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.2764 9.625C18.4655 9.72995 18.6449 9.85142 18.8126 9.988" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.50035 16.5001C4.86861 16.5004 4.24751 16.3375 3.69727 16.0271" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.3031 16.0271C17.7528 16.3375 17.1317 16.5004 16.5 16.5001" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}


export const CloudIcon = ({color, width, height} : IconProps) => {
  return (
   <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.0417 17.4166H8.24998C7.06003 17.4163 5.89359 17.0851 4.88103 16.46C3.86847 15.8349 3.04966 14.9406 2.51612 13.877C1.98257 12.8133 1.7553 11.6223 1.85971 10.4369C1.96412 9.25155 2.39609 8.11857 3.10734 7.16457C3.8186 6.21057 4.78113 5.47315 5.88737 5.0347C6.99361 4.59625 8.19997 4.47405 9.37166 4.68176C10.5434 4.88947 11.6342 5.4189 12.5223 6.21089C13.4104 7.00288 14.0608 8.02623 14.4008 9.16659H16.0417C17.1357 9.16659 18.1849 9.60118 18.9585 10.3748C19.7321 11.1484 20.1667 12.1976 20.1667 13.2916C20.1667 14.3856 19.7321 15.4348 18.9585 16.2084C18.1849 16.982 17.1357 17.4166 16.0417 17.4166Z" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
}

export const CodeIcon = ({color, width, height} : IconProps) => {
  return (
   <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 14.6666L20.1667 10.9999L16.5 7.33325" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.49967 7.33325L1.83301 10.9999L5.49967 14.6666" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.2913 3.66675L8.70801 18.3334" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
}

export const GlobeIcon = ({color, width, height} : IconProps) => {
  return (
   <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.9997 20.1666C16.0623 20.1666 20.1663 16.0625 20.1663 10.9999C20.1663 5.93731 16.0623 1.83325 10.9997 1.83325C5.93706 1.83325 1.83301 5.93731 1.83301 10.9999C1.83301 16.0625 5.93706 20.1666 10.9997 20.1666Z" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.33301 10.9999C7.33301 7.58693 8.64589 4.30473 10.9997 1.83325C13.3535 4.30473 14.6663 7.58693 14.6663 10.9999C14.6663 14.4129 13.3535 17.6951 10.9997 20.1666C8.64589 17.6951 7.33301 14.4129 7.33301 10.9999Z" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.83301 11H20.1663" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
}

export const GridIcon = ({color, width, height} : IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.333 2.75H13.7497C13.2434 2.75 12.833 3.16041 12.833 3.66667V8.25C12.833 8.75626 13.2434 9.16667 13.7497 9.16667H18.333C18.8393 9.16667 19.2497 8.75626 19.2497 8.25V3.66667C19.2497 3.16041 18.8393 2.75 18.333 2.75Z" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.16667 19.2501V7.33341C9.16667 7.0903 9.07009 6.85714 8.89818 6.68523C8.72627 6.51333 8.49312 6.41675 8.25 6.41675H3.66667C3.42355 6.41675 3.19039 6.51333 3.01849 6.68523C2.84658 6.85714 2.75 7.0903 2.75 7.33341V18.3334C2.75 18.5765 2.84658 18.8097 3.01849 18.9816C3.19039 19.1535 3.42355 19.2501 3.66667 19.2501H14.6667C14.9098 19.2501 15.1429 19.1535 15.3148 18.9816C15.4868 18.8097 15.5833 18.5765 15.5833 18.3334V13.7501C15.5833 13.507 15.4868 13.2738 15.3148 13.1019C15.1429 12.93 14.9098 12.8334 14.6667 12.8334H2.75" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>


  )
}

export const HeartIcon = ({color, width, height} : IconProps) => {
  return (
        <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4163 12.8333C18.7822 11.495 20.1663 9.89083 20.1663 7.79167C20.1663 6.45453 19.6352 5.17217 18.6897 4.22667C17.7442 3.28117 16.4618 2.75 15.1247 2.75C13.5113 2.75 12.3747 3.20833 10.9997 4.58333C9.62467 3.20833 8.48801 2.75 6.87467 2.75C5.53754 2.75 4.25517 3.28117 3.30968 4.22667C2.36418 5.17217 1.83301 6.45453 1.83301 7.79167C1.83301 9.9 3.20801 11.5042 4.58301 12.8333L10.9997 19.25L17.4163 12.8333Z" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.0003 4.58325L8.28696 7.29659C8.10072 7.48148 7.9529 7.70141 7.85202 7.94369C7.75115 8.18597 7.69922 8.44581 7.69922 8.70825C7.69922 8.97069 7.75115 9.23054 7.85202 9.47282C7.9529 9.7151 8.10072 9.93502 8.28696 10.1199C9.03863 10.8716 10.2395 10.8991 11.037 10.1841L12.9345 8.44242C13.4101 8.01085 14.0293 7.77178 14.6715 7.77178C15.3138 7.77178 15.933 8.01085 16.4086 8.44242L19.122 10.8808" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.5003 13.7501L14.667 11.9167" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.7503 16.5001L11.917 14.6667" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

  )
}

export const PeopleIcon = ({color, width, height} : IconProps) => {
  return (
   <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6663 14V12.6667C10.6663 11.9594 10.3854 11.2811 9.88529 10.781C9.3852 10.281 8.70692 10 7.99967 10H3.99967C3.29243 10 2.61415 10.281 2.11406 10.781C1.61396 11.2811 1.33301 11.9594 1.33301 12.6667V14" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.99967 7.33333C7.47243 7.33333 8.66634 6.13943 8.66634 4.66667C8.66634 3.19391 7.47243 2 5.99967 2C4.52692 2 3.33301 3.19391 3.33301 4.66667C3.33301 6.13943 4.52692 7.33333 5.99967 7.33333Z" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.667 13.9998V12.6664C14.6666 12.0756 14.4699 11.5016 14.1079 11.0346C13.7459 10.5677 13.2391 10.2341 12.667 10.0864" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.667 2.08643C11.2406 2.23329 11.749 2.56689 12.1121 3.03463C12.4752 3.50237 12.6722 4.07765 12.6722 4.66976C12.6722 5.26187 12.4752 5.83715 12.1121 6.30489C11.749 6.77262 11.2406 7.10623 10.667 7.25309" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
}

export const SheildIcon = ({color, width, height} : IconProps) => {
  return (
   <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.3337 11.9168C18.3337 16.5001 15.1253 18.7918 11.312 20.1209C11.1123 20.1886 10.8954 20.1853 10.6978 20.1118C6.87533 18.7918 3.66699 16.5001 3.66699 11.9168V5.50009C3.66699 5.25697 3.76357 5.02381 3.93548 4.85191C4.10739 4.68 4.34054 4.58342 4.58366 4.58342C6.41699 4.58342 8.70866 3.48342 10.3037 2.09009C10.4979 1.92417 10.7449 1.83301 11.0003 1.83301C11.2558 1.83301 11.5028 1.92417 11.697 2.09009C13.3012 3.49259 15.5837 4.58342 17.417 4.58342C17.6601 4.58342 17.8933 4.68 18.0652 4.85191C18.2371 5.02381 18.3337 5.25697 18.3337 5.50009V11.9168Z" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export const StarIcon = ({color, width, height} : IconProps) => {
  return (
   <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.68323 1.53009C7.71245 1.47107 7.75758 1.42138 7.81353 1.38664C7.86949 1.3519 7.93404 1.3335 7.9999 1.3335C8.06576 1.3335 8.13031 1.3519 8.18626 1.38664C8.24222 1.42138 8.28735 1.47107 8.31656 1.53009L9.85656 4.64943C9.95802 4.85474 10.1078 5.03236 10.293 5.16706C10.4782 5.30176 10.6933 5.3895 10.9199 5.42276L14.3639 5.92676C14.4292 5.93621 14.4905 5.96374 14.5409 6.00622C14.5913 6.04871 14.6289 6.10446 14.6492 6.16716C14.6696 6.22987 14.6721 6.29703 14.6563 6.36105C14.6405 6.42507 14.6071 6.48339 14.5599 6.52943L12.0692 8.95476C11.905 9.11483 11.7821 9.31241 11.7111 9.53051C11.6402 9.74861 11.6233 9.98068 11.6619 10.2068L12.2499 13.6334C12.2614 13.6987 12.2544 13.7658 12.2296 13.8272C12.2048 13.8886 12.1632 13.9418 12.1096 13.9808C12.056 14.0197 11.9926 14.0428 11.9265 14.0474C11.8604 14.052 11.7944 14.0379 11.7359 14.0068L8.65723 12.3881C8.45438 12.2816 8.22868 12.2259 7.99956 12.2259C7.77044 12.2259 7.54475 12.2816 7.3419 12.3881L4.2639 14.0068C4.20545 14.0377 4.1395 14.0516 4.07353 14.0469C4.00757 14.0422 3.94424 14.0191 3.89076 13.9802C3.83728 13.9413 3.79579 13.8882 3.771 13.8269C3.74622 13.7656 3.73914 13.6986 3.75056 13.6334L4.3379 10.2074C4.3767 9.98125 4.35989 9.74902 4.28892 9.53079C4.21796 9.31256 4.09497 9.11486 3.93056 8.95476L1.4399 6.53009C1.39229 6.48411 1.35856 6.42569 1.34254 6.36147C1.32652 6.29726 1.32886 6.22984 1.34928 6.16689C1.36971 6.10393 1.40741 6.04799 1.45808 6.00541C1.50876 5.96284 1.57037 5.93536 1.6359 5.92609L5.07923 5.42276C5.30607 5.38976 5.52149 5.30213 5.70695 5.16742C5.89242 5.0327 6.04237 4.85494 6.1439 4.64943L7.68323 1.53009Z" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}



export const CalenderIcon = ({color, width, height} : IconProps) => {
  return (
   <svg width={width} height={height} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1_7180)">
    <path d="M3.66669 0.916687V2.75002" stroke={color} strokeWidth="0.916667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.33331 0.916687V2.75002" stroke={color} strokeWidth="0.916667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.70833 1.83331H2.29167C1.78541 1.83331 1.375 2.24372 1.375 2.74998V9.16665C1.375 9.67291 1.78541 10.0833 2.29167 10.0833H8.70833C9.21459 10.0833 9.625 9.67291 9.625 9.16665V2.74998C9.625 2.24372 9.21459 1.83331 8.70833 1.83331Z" stroke={color} strokeWidth="0.916667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.375 4.58331H9.625" stroke={color} strokeWidth="0.916667" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_1_7180">
    <rect width="11" height="11" fill="white"/>
    </clipPath>
    </defs>
</svg>

  )
}

export const BookIcon = ({color, width, height} : IconProps) => {
  return (
   <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 6.41666V19.25" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.74967 16.5C2.50656 16.5 2.2734 16.4034 2.10149 16.2315C1.92958 16.0596 1.83301 15.8264 1.83301 15.5833V3.66667C1.83301 3.42355 1.92958 3.19039 2.10149 3.01849C2.2734 2.84658 2.50656 2.75 2.74967 2.75H7.33301C8.30547 2.75 9.2381 3.13631 9.92573 3.82394C10.6134 4.51158 10.9997 5.44421 10.9997 6.41667C10.9997 5.44421 11.386 4.51158 12.0736 3.82394C12.7612 3.13631 13.6939 2.75 14.6663 2.75H19.2497C19.4928 2.75 19.7259 2.84658 19.8979 3.01849C20.0698 3.19039 20.1663 3.42355 20.1663 3.66667V15.5833C20.1663 15.8264 20.0698 16.0596 19.8979 16.2315C19.7259 16.4034 19.4928 16.5 19.2497 16.5H13.7497C13.0203 16.5 12.3209 16.7897 11.8051 17.3055C11.2894 17.8212 10.9997 18.5207 10.9997 19.25C10.9997 18.5207 10.7099 17.8212 10.1942 17.3055C9.67849 16.7897 8.97902 16.5 8.24967 16.5H2.74967Z" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
}

export const BarChartIcon = ({color, width, height} : IconProps) => {
  return (
   <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.75 2.75V17.4167C2.75 17.9029 2.94315 18.3692 3.28697 18.713C3.63079 19.0568 4.0971 19.25 4.58333 19.25H19.25" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.5 15.5833V8.25" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.917 15.5833V4.58334" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.33301 15.5833V12.8333" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export const MedalIcon = ({color, width, height} : IconProps) => {
  return (
   <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.1875 11.8158L15.5763 19.6313C15.5918 19.7234 15.5789 19.8179 15.5392 19.9024C15.4996 19.9869 15.4351 20.0573 15.3544 20.1041C15.2736 20.151 15.1805 20.1721 15.0875 20.1646C14.9945 20.1571 14.9059 20.1213 14.8338 20.0622L11.5521 17.5991C11.3937 17.4807 11.2012 17.4168 11.0035 17.4168C10.8057 17.4168 10.6133 17.4807 10.4548 17.5991L7.16768 20.0612C7.09555 20.1203 7.00713 20.156 6.91421 20.1635C6.82129 20.171 6.72829 20.15 6.64762 20.1033C6.56694 20.0566 6.50243 19.9864 6.46269 19.902C6.42294 19.8177 6.40986 19.7233 6.42518 19.6313L7.81301 11.8158" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 12.8333C14.0376 12.8333 16.5 10.3709 16.5 7.33334C16.5 4.29578 14.0376 1.83334 11 1.83334C7.96243 1.83334 5.5 4.29578 5.5 7.33334C5.5 10.3709 7.96243 12.8333 11 12.8333Z" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
}


export const WifiIcon = ({color, width, height} : IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 18.3333H11.01" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.83301 8.08497C4.35394 5.83018 7.61748 4.58362 10.9997 4.58362C14.3819 4.58362 17.6454 5.83018 20.1663 8.08497" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.58301 11.7874C6.29652 10.1078 8.60027 9.16705 10.9997 9.16705C13.3991 9.16705 15.7028 10.1078 17.4163 11.7874" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.79199 15.0599C8.64875 14.2201 9.80063 13.7498 11.0003 13.7498C12.2 13.7498 13.3519 14.2201 14.2087 15.0599" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export const MessageIcon = ({color, width, height} : IconProps) => {
  return (
   <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.25 13.75C19.25 14.2362 19.0568 14.7025 18.713 15.0464C18.3692 15.3902 17.9029 15.5833 17.4167 15.5833H6.41667L2.75 19.25V4.58333C2.75 4.0971 2.94315 3.63079 3.28697 3.28697C3.63079 2.94315 4.0971 2.75 4.58333 2.75H17.4167C17.9029 2.75 18.3692 2.94315 18.713 3.28697C19.0568 3.63079 19.25 4.0971 19.25 4.58333V13.75Z" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
}

export const BuildingsIcon = ({color, width, height} : IconProps) => {
  return (
  <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 20.1666V3.66665C5.5 3.18042 5.69315 2.7141 6.03697 2.37028C6.38079 2.02647 6.8471 1.83331 7.33333 1.83331H14.6667C15.1529 1.83331 15.6192 2.02647 15.963 2.37028C16.3068 2.7141 16.5 3.18042 16.5 3.66665V20.1666H5.5Z" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.49967 11H3.66634C3.18011 11 2.7138 11.1932 2.36998 11.537C2.02616 11.8808 1.83301 12.3471 1.83301 12.8333V18.3333C1.83301 18.8196 2.02616 19.2859 2.36998 19.6297C2.7138 19.9735 3.18011 20.1667 3.66634 20.1667H5.49967" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.5 8.25H18.3333C18.8196 8.25 19.2859 8.44315 19.6297 8.78697C19.9735 9.13079 20.1667 9.5971 20.1667 10.0833V18.3333C20.1667 18.8196 19.9735 19.2859 19.6297 19.6297C19.2859 19.9735 18.8196 20.1667 18.3333 20.1667H16.5" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.16699 5.5H12.8337" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.16699 9.16669H12.8337" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.16699 12.8333H12.8337" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.16699 16.5H12.8337" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}


export const ClockIcon = ({color, width, height} : IconProps) => {
  return (
   <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.0003 18.3332C14.6027 18.3332 18.3337 14.6022 18.3337 9.99984C18.3337 5.39746 14.6027 1.6665 10.0003 1.6665C5.39795 1.6665 1.66699 5.39746 1.66699 9.99984C1.66699 14.6022 5.39795 18.3332 10.0003 18.3332Z" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 5V10L13.3333 11.6667" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>


  )
}

export const RocketIcon = ({color, width, height} : IconProps) => {
  return (
  <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.12533 15.125C2.75033 16.28 2.29199 19.7083 2.29199 19.7083C2.29199 19.7083 5.72033 19.25 6.87533 17.875C7.52616 17.105 7.51699 15.9225 6.79283 15.2075C6.43652 14.8674 5.96718 14.6709 5.47487 14.6557C4.98255 14.6405 4.50196 14.8076 4.12533 15.125Z" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 13.75L8.25 11C8.7378 9.73447 9.35202 8.52138 10.0833 7.37916C11.1514 5.6714 12.6387 4.26529 14.4036 3.29458C16.1685 2.32387 18.1524 1.82083 20.1667 1.83333C20.1667 4.32666 19.4517 8.70833 14.6667 11.9167C13.5088 12.6488 12.2804 13.263 11 13.75Z" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.25033 11H3.66699C3.66699 11 4.17116 8.22251 5.50033 7.33334C6.98533 6.34334 10.0837 7.33334 10.0837 7.33334" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 13.75V18.3333C11 18.3333 13.7775 17.8292 14.6667 16.5C15.6567 15.015 14.6667 11.9167 14.6667 11.9167" stroke={color} strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    )
}

export const BulbIcon = ({color, width, height} : IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.25 10.5C11.4 9.75 11.775 9.225 12.375 8.625C13.125 7.95 13.5 6.975 13.5 6C13.5 4.80653 13.0259 3.66193 12.182 2.81802C11.3381 1.97411 10.1935 1.5 9 1.5C7.80653 1.5 6.66193 1.97411 5.81802 2.81802C4.97411 3.66193 4.5 4.80653 4.5 6C4.5 6.75 4.65 7.65 5.625 8.625C6.15 9.15 6.6 9.75 6.75 10.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.75 13.5H11.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 16.5H10.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

    )
}


export const StackIcon = ({color, width, height} : IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.692 1.8168C10.4749 1.71776 10.239 1.6665 10.0004 1.6665C9.76172 1.6665 9.52585 1.71776 9.30871 1.8168L2.16704 5.0668C2.01917 5.132 1.89344 5.2388 1.80518 5.37418C1.71692 5.50956 1.66992 5.66769 1.66992 5.8293C1.66992 5.99091 1.71692 6.14904 1.80518 6.28442C1.89344 6.4198 2.01917 6.5266 2.16704 6.5918L9.31704 9.85013C9.53418 9.94918 9.77005 10.0004 10.0087 10.0004C10.2474 10.0004 10.4832 9.94918 10.7004 9.85013L17.8504 6.60013C17.9983 6.53493 18.124 6.42814 18.2122 6.29275C18.3005 6.15737 18.3475 5.99925 18.3475 5.83763C18.3475 5.67602 18.3005 5.5179 18.2122 5.38251C18.124 5.24713 17.9983 5.14034 17.8504 5.07513L10.692 1.8168Z" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.66699 10C1.6666 10.1594 1.71192 10.3155 1.79759 10.45C1.88326 10.5844 2.00568 10.6914 2.15033 10.7583L9.31699 14.0167C9.533 14.1145 9.76738 14.1651 10.0045 14.1651C10.2416 14.1651 10.476 14.1145 10.692 14.0167L17.842 10.7667C17.9895 10.7004 18.1145 10.5926 18.2018 10.4564C18.2891 10.3203 18.3349 10.1617 18.3337 10" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.66699 14.1665C1.6666 14.3259 1.71192 14.4821 1.79759 14.6165C1.88326 14.7509 2.00568 14.8579 2.15033 14.9248L9.31699 18.1832C9.533 18.281 9.76738 18.3316 10.0045 18.3316C10.2416 18.3316 10.476 18.281 10.692 18.1832L17.842 14.9332C17.9895 14.8669 18.1145 14.7591 18.2018 14.6229C18.2891 14.4868 18.3349 14.3282 18.3337 14.1665" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    )
}

export const ArrowBentRightIcon = ({color, width, height} : IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.25 10.5L8.75 7L5.25 3.5"stroke={color} strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    )
}

export const ArrowBentUpIcon = ({color, width, height} : IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_4772)">
        <path d="M11.9166 3.7915L7.31248 8.39567L4.60415 5.68734L1.08331 9.20817" stroke={color} strokeWidth="1.08333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.66669 3.7915H11.9167V7.0415" stroke={color} strokeWidth="1.08333" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1_4772">
        <rect width="13" height="13" fill="white"/>
        </clipPath>
        </defs>
    </svg>

    )
}

export const LocationIcon = ({color, width, height} : IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_7187)">
        <path d="M5.77544 9.99123C6.62794 9.25515 9.16665 6.87181 9.16665 4.58335C9.16665 3.61089 8.78034 2.67826 8.0927 1.99063C7.40507 1.303 6.47244 0.916687 5.49998 0.916687C4.52752 0.916687 3.59489 1.303 2.90725 1.99063C2.21962 2.67826 1.83331 3.61089 1.83331 4.58335C1.83331 6.87181 4.37202 9.25515 5.22452 9.99123C5.30394 10.0509 5.40061 10.0832 5.49998 10.0832C5.59935 10.0832 5.69602 10.0509 5.77544 9.99123Z" stroke={color} strokeWidth="0.916667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.5 5.95831C6.25939 5.95831 6.875 5.3427 6.875 4.58331C6.875 3.82392 6.25939 3.20831 5.5 3.20831C4.74061 3.20831 4.125 3.82392 4.125 4.58331C4.125 5.3427 4.74061 5.95831 5.5 5.95831Z" stroke={color} strokeWidth="0.916667" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1_7187">
        <rect width="11" height="11" fill="white"/>
        </clipPath>
        </defs>
    </svg>

    )
}


export const TechChipIcon = ({color, width, height} : IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.0007 3.33325H5.00065C4.08018 3.33325 3.33398 4.07944 3.33398 4.99992V14.9999C3.33398 15.9204 4.08018 16.6666 5.00065 16.6666H15.0007C15.9211 16.6666 16.6673 15.9204 16.6673 14.9999V4.99992C16.6673 4.07944 15.9211 3.33325 15.0007 3.33325Z" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.6667 7.5H8.33333C7.8731 7.5 7.5 7.8731 7.5 8.33333V11.6667C7.5 12.1269 7.8731 12.5 8.33333 12.5H11.6667C12.1269 12.5 12.5 12.1269 12.5 11.6667V8.33333C12.5 7.8731 12.1269 7.5 11.6667 7.5Z" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.5 1.66675V3.33341" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.5 16.6667V18.3334" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.66602 12.5H3.33268" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.66602 7.5H3.33268" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.666 12.5H18.3327" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.666 7.5H18.3327" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 1.66675V3.33341" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 16.6667V18.3334" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

    )
}


export const LinkIcon = ({color, width, height} : IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 1.5H10.5V4.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 7L10.5 1.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 6.5V9.5C9 9.76522 8.89464 10.0196 8.70711 10.2071C8.51957 10.3946 8.26522 10.5 8 10.5H2.5C2.23478 10.5 1.98043 10.3946 1.79289 10.2071C1.60536 10.0196 1.5 9.76522 1.5 9.5V4C1.5 3.73478 1.60536 3.48043 1.79289 3.29289C1.98043 3.10536 2.23478 3 2.5 3H5.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

    )
}



