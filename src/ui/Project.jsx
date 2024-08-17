import  Container  from "./Container";
import SectionTitle from "./SectionTitle";
import AmazonImage from "../assets/image/amazonredesign.jpg"
import Cyber from "../assets/image/cybercafe-cyber-security.webp"
import Shoop from "../assets/image/Shoop 4.png"
import ProjectLink from "./ProjectLink";

const Project = () => {
    return (
        <Container id="project" className=" mx-auto py-10 xl:px-28 ">
            <SectionTitle title="Some Things I have Built"/>
            <div className="mt-10 flex flex-col items-center justify-center gap-28">
                <div className="flex flex-col lg:flex-row gap-5">
                    <a href="" className=" w-full lg:w-1/2 relative group rounded-lg overflow-hidden" >
                        <img src={AmazonImage} alt="AmazonImage" className="w-full h-full object-cover group-hover:scale-110 duration-300"/>
                        <div className="absolute w-full h-full bg-designColor/20 rounded-lg top-0 left-0  group-hover:bg-transparent duration-300" />
                    </a>
                    <div className="w-full lg:w-1/2 flex flex-col lg:justify-between items-end text-right z-10">
                        <div>
                            <p className=" text-designColor tracking-wide"
                             >Featured Project</p>
                            <h3 className="text-2xl text-white font-bold">Amazon Clone</h3>
                        </div>
                        <p className="bg-[#2c3347] text-[#e4eaff] text-sm md:text-base p-4 md:p-4 rounded-md" >An Amazon clone website for visualizigin presonalized Amazon website.
                            View your products, Add your account O-aut and then made the purchage using 
                            <span className=" text-emerald-500"> strip</span> .
                        </p>
                        <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
                            <li>React </li>
                            <li>JavaScript</li>
                            <li>Node js</li>
                            <li>Express js</li>
                            <li>Vercel Deployment</li>
                        </ul>
                        <ProjectLink/>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row-reverse gap-5">
                    <a href="" className=" w-full lg:w-1/2 relative group rounded-lg overflow-hidden" >
                        <img src={Cyber} alt="AmazonImage" className="w-full h-full object-cover group-hover:scale-110 duration-300"/>
                        <div className="absolute w-full h-full bg-designColor/20 rounded-lg top-0 left-0  group-hover:bg-transparent duration-300" />
                    </a>
                    <div className="w-full lg:w-1/2 flex flex-col lg:justify-between items-end text-right z-10">
                        <div>
                            <p className=" text-designColor tracking-wide"
                             >Featured Project</p>
                            <h3 className="text-2xl text-white font-bold">Cyber Security Blog</h3>
                        </div>
                        <p className="bg-[#2c3347] text-[#e4eaff] text-sm md:text-base p-4 md:p-4 rounded-md" >A full functional Cyber Security Blog where you can view the latest post and 
                            <span className=" text-emerald-500"> comments on </span> it by passing your ideas besides you can try to add 
                            <span className=" text-emerald-500"> post </span> your own .
                        </p>
                        <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
                            <li>React </li>
                            <li>JavaScript</li>
                            <li>Node js</li>
                            <li>Express js</li>
                            <li>Vercel Deployment</li>
                        </ul>
                        <ProjectLink/>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5">
                    <a href="" className=" w-full lg:w-1/2 relative group rounded-lg overflow-hidden" >
                        <img src={Shoop} alt="AmazonImage" className="w-full h-full object-cover group-hover:scale-110 duration-300"/>
                        <div className="absolute w-full h-full bg-designColor/20 rounded-lg top-0 left-0  group-hover:bg-transparent duration-300" />
                    </a>
                    <div className="w-full lg:w-1/2 flex flex-col lg:justify-between items-end text-right z-10">
                        <div>
                            <p className=" text-designColor tracking-wide"
                             >Featured Project</p>
                            <h3 className="text-2xl text-white font-bold">Amazon Clone</h3>
                        </div>
                        <p className="bg-[#2c3347] text-[#e4eaff] text-sm md:text-base p-4 md:p-4 rounded-md" >An Amazon clone website for visualizigin presonalized Amazon website.
                            View your products, Add your account O-aut and then made the purchage using 
                            <span className=" text-emerald-500"> strip</span> .
                        </p>
                        <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
                            <li>React </li>
                            <li>JavaScript</li>
                            <li>Node js</li>
                            <li>Express js</li>
                            <li>Vercel Deployment</li>
                        </ul>
                        <ProjectLink link=""/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Project;