import  Container  from './Container'
import { OtherProjects } from '../conponents/OtherProjects'
import { useRef, useState } from 'react'
import ArchiveCard from './ArchiveCard';
import { AnimatePresence,motion } from 'framer-motion';

const Archive = () => {
  const [showMore,setShowMore] =useState(false);
  const displayedArray =showMore ? OtherProjects: OtherProjects.slice(0,6);
  const projectContainerRef = useRef(null)

  const handleShow =()=>{
    if(showMore){
        setShowMore(false);
        projectContainerRef.current.scrollIntoView({behavior:"smooth"})
    }else{
        setShowMore(true);
    }
  }

  return (
    <Container className="py-10 max-w-5xl mx-auto">
        <div className=' flex flex-col gap-1 items-center '>
            <h2 className=' text-2xl font-semibold text-darkText'>Other Noteworthy Project</h2>
            <p className='text-sm tracking-wide'>view the archive</p>
        </div>
        <div ref={projectContainerRef} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:py-10'>
           <AnimatePresence>
           {displayedArray?.map((item, index) =>(
                <motion.div 
                key={index}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{ opacity:0 }}
                transition={{delay: index * 0.1}}>
                    <ArchiveCard  item={item}/> 
                </motion.div>
            ))}
           </AnimatePresence>
        </div>
        <div className='mt-5 flex items-center justify-center'> 
            <button onClick={handleShow} className='w-36 h-12 rounded-md text-designColor text-sm border border-designColor hover:bg-hoverColor duration-300'>
                {showMore ? "Show less" : "Show More"}
            </button>
        </div>
    </Container>
  )
}

export default Archive