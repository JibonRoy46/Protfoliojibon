import { useState } from "react";
import  Container  from "./Container";
import SectionTitle from './SectionTitle';
import WorkCard from './WorkCard';


const Experience = () => {
    const[ workReactBd, setworkReactBd] =useState(true);
    const[ workGoogle, setworkGoogle] =useState(false);
    const[ workApple, setworkApple] =useState(false);
    const[ workSplash, setworkSplash] =useState(false);
    const[ workAmazon, setworkAmazon] =useState(false);
    const handleReactBd =()=>{
        setworkReactBd(true);
        setworkGoogle(false);
        setworkApple(false);
        setworkSplash(false);
        setworkAmazon(false)
    }
    const handleGoogle =()=>{
        setworkReactBd(false);
        setworkGoogle(true);
        setworkApple(false);
        setworkSplash(false);
        setworkAmazon(false)
    }
    const handleApple =()=>{
        setworkReactBd(false);
        setworkGoogle(false);
        setworkApple(true);
        setworkSplash(false);
        setworkAmazon(false)
    }
    const handleSplash =()=>{
        setworkReactBd(false);
        setworkGoogle(false);
        setworkApple(false);
        setworkSplash(true);
        setworkAmazon(false)
    }
    const handleAmazon =()=>{
        setworkReactBd(false);
        setworkGoogle(false);
        setworkApple(false);
        setworkSplash(false);
        setworkAmazon(true)
    }
    return (
        <Container  id="experience" className="max-w-3xl mx-auto py-10 lg:py-24 gap-16">
            <SectionTitle  title="Experience"/>
            {/* Button setup */}
            <div className="w-full mt-10 flex flex-col md:w-full md:flex-row gap-16">
                <ul className="md:w-32 flex flex-col">
                    <li 
                    onClick={handleReactBd}
                    className={`${
                        workReactBd
                            ?"border-l-designColor text-designColor"
                            :"border-l-hoverColor text-darkText"
                    } border-l-2 bg-transparent hover:bg-slate-800 py-3 text-sm 
                    cursor-pointer duration-300 px-4 font-medium`}
                    >
                        ReactBD
                    </li>
                    <li 
                    onClick={handleGoogle}
                    className={`${
                        workGoogle
                            ?"border-l-designColor text-designColor"
                            :"border-l-hoverColor text-darkText"
                    } border-l-2 bg-transparent  hover:bg-slate-800 py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
                    >
                        Google
                    </li>
                    <li 
                    onClick={handleApple}
                    className={`${
                        workApple
                            ?"border-l-designColor text-designColor"
                            :"border-l-hoverColor text-darkText"
                    } border-l-2 bg-transparent  hover:bg-slate-800 py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
                    >
                        Apple
                    </li>
                    <li 
                    onClick={handleSplash}
                    className={`${
                        workSplash
                            ?"border-l-designColor text-designColor"
                            :"border-l-hoverColor text-darkText"
                    } border-l-2 bg-transparent  hover:bg-slate-800 py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
                    >
                        Splash
                    </li>
                    <li 
                    onClick={handleAmazon}
                    className={`${
                        workAmazon
                            ?"border-l-designColor text-designColor"
                            :"border-l-hoverColor text-darkText"
                    } border-l-2 bg-transparent  hover:bg-slate-800 py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
                    >
                        Amazon
                    </li>
                </ul>
                {/* Contant */}
                {workReactBd && <WorkCard 
                    jobTitle="Engineer"
                    jobTag="@ReactBD"
                    date="Jan 2023 -present"
                    detailsOne="Write modern, performant, maintaaiable code for a diverse
                    array of client and internal projects "
                    detailsTwo=" Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as JavaScript, Gatsby,
                    React, Craft, WordPress, Prismic, and Netlify "
                    detailsThree=" Communicate with multi-desciplinary teams of engineer
                    designers, producers, and clients on a daily basis"/>}
                {workGoogle && <WorkCard 
                    jobTitle="Web developer "
                    jobTag="@Google.inc"
                    date="Jan 2023 -present"
                    detailsOne="Write modern, performant, maintaaiable code for a diverse
                    array of client and internal projects "
                    detailsTwo=" Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as JavaScript, Gatsby,
                    React, Craft, WordPress, Prismic, and Netlify "
                    detailsThree=" Communicate with multi-desciplinary teams of engineer
                    designers, producers, and clients on a daily basis"/>}
                {workApple && <WorkCard 
                    jobTitle="MERN Stack developer"
                    jobTag="@Apple"
                    date="Jan 2023 -present"
                    detailsOne="Write modern, performant, maintaaiable code for a diverse
                    array of client and internal projects "
                    detailsTwo=" Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as JavaScript, Gatsby,
                    React, Craft, WordPress, Prismic, and Netlify "
                    detailsThree=" Communicate with multi-desciplinary teams of engineer
                    designers, producers, and clients on a daily basis"/>}
                {workSplash && <WorkCard 
                    jobTitle="MERN Stack developer"
                    jobTag="@Splash"
                    date="Jan 2023 -present"
                    detailsOne="Write modern, performant, maintaaiable code for a diverse
                    array of client and internal projects "
                    detailsTwo=" Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as JavaScript, Gatsby,
                    React, Craft, WordPress, Prismic, and Netlify "
                    detailsThree=" Communicate with multi-desciplinary teams of engineer
                    designers, producers, and clients on a daily basis"/>}
                {workAmazon && <WorkCard 
                    jobTitle="Web Design"
                    jobTag="@Amazon"
                    date="Jan 2023 -present"
                    detailsOne="Write modern, performant, maintaaiable code for a diverse
                    array of client and internal projects "
                    detailsTwo=" Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as JavaScript, Gatsby,
                    React, Craft, WordPress, Prismic, and Netlify "
                    detailsThree=" Communicate with multi-desciplinary teams of engineer
                    designers, producers, and clients on a daily basis"/>}
            </div>
        </Container>
    );
};

export default Experience;