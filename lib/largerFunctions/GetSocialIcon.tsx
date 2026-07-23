import { EmailIcon, LinkedinIcon, PeopleIcon, XIcon } from "@/static-data/images";


const linkKeywords = ['linkedin', 'x', 'mailto']

const getSocialsType = (socialLink :string) => {
    
    for (let index = 0; index < linkKeywords.length; index++) {
        if (socialLink.includes(linkKeywords[index])) {
            
            return linkKeywords[index] === 'mailto'?  'email' : linkKeywords[index] 
        } 

    }

}
 export const getSocialIcon = (social :string)=> {

    switch (getSocialsType(social)) {
        case 'linkedin':
            return LinkedinIcon

        case 'x':
            return XIcon
        
        case 'email':
            return EmailIcon
                    
        default:
            return PeopleIcon;
    }
}