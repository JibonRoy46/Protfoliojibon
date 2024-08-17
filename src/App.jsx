import Header from "./ui/Header"
import Banner from "./ui/Banner"
import Contact from "./ui/Contact"
import Experience from "./ui/Experience"
import Project from './ui/Project';
import About from "./ui/About";
import Archive from "./ui/Archive";
import ScrollBtn from "./ui/ScrollBtn";
import { motion } from 'framer-motion';
import LeftSide from './ui/LeftSide';
import RightSide from './ui/RightSide';

function App() {

  return (
   <main className="font-bodyFont min-h-screen bg-primaryColor text-lightText">
      <Header/>
      <Banner/>
      <About/>
      <Experience/>
      <Project/>
      <Archive/>
      <Contact/>
      
      <motion.div 
        initial={{ opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.5}}
        
        className="hidden lg:inline-flex w-32 h-full fixed left-0 bottom-0"> 
         <LeftSide />
      </motion.div>
      <motion.div 
        initial={{ opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.5}}
        
        className="hidden lg:inline-flex w-32 h-full fixed right-0 bottom-0"> 
        <RightSide />
      </motion.div>
      
        <ScrollBtn />
   </main>
  )
}

export default App
