
import { FaInstagram } from 'react-icons/fa6'
import { LuGithub } from 'react-icons/lu'
import { RiLinkedinFill } from 'react-icons/ri'
import { SlSocialFacebook } from 'react-icons/sl'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

const socialAccounts =[
    {
        title: "github",
        link: "https://github.com/JibonRoy46",
        icon: <LuGithub />,
        delay:0.8,
    },
    {
        title: "github",
        link: "https://www.linkedin.com/in/jibon-roy-36786a2b4/",
        icon: <RiLinkedinFill />  ,
        delay:0.8,
    },
    {
        title: "github",
        link: "https://www.facebook.com/JibonRoy46",
        icon: <SlSocialFacebook /> ,
        delay:0.8,
    },
    {
        title: "github",
        link: "https://github.com/JibonRoy46",
        icon: <FaInstagram />,
        delay:0.8,
    },
]
const SocialLinks = ({className}) => {
  return (
    <div className={twMerge(' flex flex-col gap-y-5',className)}>
        {socialAccounts?.map((item) =>(
        <motion.a
         key={item?.title} 
         initial={{y: 20, opacity:0}}
         animate={{y: 0, opacity:1}}
         transition={{ delay: item?.delay, ease:"easeIn"}}
         href={item?.link}
         target='blank'
        
         >
           <span  className=' w-10 h-10 text-xl bg-designColor/10 border-[1px] inline-flex
            items-center justify-center rounded-full border-zinc-500 hover:border-darkText text-darkText
             hover:bg-white hover:text-black'> 
                {item?.icon}
           </span>
         </motion.a>
    ))}</div>
  )
}

export default SocialLinks