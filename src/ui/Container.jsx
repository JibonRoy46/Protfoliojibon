import { twMerge } from "tailwind-merge";

const Container = ({children,className,id}) => {
    const newClassName = twMerge(
        "xl:max-w-screen-xl lg:max-w-screen-lg mx-auto px-4 lg:px-0 ", 
        className
    )
    return <div id={id} className={newClassName}>{children} </div>
    
};

export default Container;