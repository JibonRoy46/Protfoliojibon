
import { useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

const ScrollBtn = () => {
     useEffect(()=>{
        const scrollBtn = document.querySelector(".scrollBtn");

     const scrollFunction =()=>{
        if(window.scrollY > 300){
            scrollBtn.style.display ="block"
        }else{
            scrollBtn.style.display ="none"
        }
     }
     const scrollToTop=()=>{
        window.scrollTo({ top:0, behavior:"smooth"});
     };
     window.addEventListener("scroll", scrollFunction);
     scrollBtn.addEventListener("click", scrollToTop);

     },[])


  return (
    <div className='fixed bottom-10 right-20 z-40 bg-darkText/40 text-lightText/80 hidden md:inline-block-md
     p-2 rounded-full cursor-pointer hover:bg-black transition duration-300 scrollBtn'>
        <FaArrowUp size={24} />
    </div>
  )
}

export default ScrollBtn