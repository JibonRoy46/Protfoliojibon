import  Container  from "./Container";
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';




const Banner = () => {
    const stringsArray=[
        'I build thing for the web',
        'passionate web developer',
         'Love to learn new ideas'
    ]
    return (
        <Container 
            id="home" 
            className="py-10 md:py-24 flex flex-col gap-4 lg:gap-8 md:px-10 xl:px-24">
            <motion.h3
                  initial={{y: -10, opacity:0}}
                  animate={{y: 0, opacity:1}}
                  transition={{duration: 0.5, delay:0.7}}
                   
                className="text-lg font-semibold tracking-wide text-designColor">
                Hi, my name is
            </motion.h3>
            <motion.h1
                initial={{y: -10, opacity:0}}
                animate={{y: 0, opacity:1}}
                transition={{duration: 0.5, delay:0.7}}
                className="text-4xl lg:text-6xl font-bold text-[#CCD6F6]"
                >
                Jibon Roy.
                <span className="text-darkText font-semibold mt-2 lg:mt-4 flex">
                    <Typewriter options={{
                        strings:stringsArray,
                        autoStart:true,
                        loop:true
                    }}/>
                </span>
            </motion.h1>
            <motion.p 
                initial={{y: 10, opacity:0}}
                animate={{y: 0, opacity:1}}
                transition={{duration: 0.5, delay:0.8}}
                className="md:max-w-[650px] text-darkText font-medium leading-7"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusamus dicta in? Dolore nulla aut quos sunt accusantium animi nisi dicta reprehenderit esse totam voluptas aperiam illo, eveniet, laudantium sapiente vel facilis cum earum sit voluptates nostrum. Molestias minus deserunt iure ipsum animi similique, obcaecati dolore odio debitis accusantium suscipit.
                   <br />
                    <a href="" target="blank" >
                        <span  className="text-designColor inline-flex  relative cursor-pointer h-7 overflow-x-hidden group">
                        Learn more
                        <span className="absolute w-full h-[1px] bg-designColor left-0 bottom-0 -translate-x-[110px]
                        transition-transform group-hover:translate-x-0 duration-500"/>
                   
                   </span> 
                   </a>
            </motion.p>
            <motion.a
                 initial={{y: 10, opacity:0}}
                 animate={{y: 0, opacity:1}}
                 transition={{duration: 0.5, delay:0.8}}
                href="https://github.com/JibonRoy46" target="blank"
                className="w-52 h-14 text-sm border border-designColor rounded-md font-semibold
                 tracking-wide hover:bg-hoverColor duration-300 flex items-center justify-center"
                >
                   Check out my project     
            </motion.a>
        </Container>
   )
};

export default Banner;