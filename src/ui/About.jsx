import Container  from "./Container";
import SectionTitle from "./SectionTitle";
import JibonImg from "../assets/image/Jibon-Roy.jpg"
import { FaCode } from "react-icons/fa6";


const About = () => {
    const textArray=[
        {title:"JavaScript", Link:"https://www.w3schools.com/js/"},
        {title:"JavaScript", Link:"https://www.w3schools.com/js/"},
        {title:"JavaScript", Link:"https://www.w3schools.com/js/"},
        {title:"JavaScript", Link:"https://www.w3schools.com/js/"},
        {title:"JavaScript", Link:"https://www.w3schools.com/js/"},
        {title:"JavaScript", Link:"https://www.w3schools.com/js/"},
    ]
    return (
        <Container id="about"  className="py-10 lg:py-10 flex-col gap-8 xl:px-28">
          <SectionTitle title=" About me" />
          <div className=" flex flex-col lg:flex-row gap-16">
            <div className=" w-full lg:w-2/3 text-darkText font-medium flex flex-col gap-6">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint hic tempora incidunt ex esse in dolorem officiis id deleniti modi expedita exercitationem odio minima vero explicabo, recusandae nisi qui culpa aut quas. Eum hic sunt totam ad a veritatis itaque, autem modi provident perferendis eveniet adipisci exercitationem magni mollitia fuga.
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora earum illum nisi.
                    autem modi provident perferendis eveniet adipisci exercitationem magni mollitia fuga.
                
                    <span className=" text-emerald-500" >{" "}
                     Dignissimos quibusdam sequi voluptatem iure enim quae amet!
                    </span>
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora earum illum nisi.
                    autem modi provident perferendis eveniet adipisci exercitationem magni mollitia fuga.
                
                    <span className=" text-emerald-500" >{" "}
                     Dignissimos quibusdam sequi voluptatem iure enim quae amet!
                    </span>
                </p>
                <div className="max-w-[450px] text-sm grid grid-cols-2 gap-2 mt-6">
                    {textArray.map((item) =>(
                        <a key={item.title} href={item?.Link}
                        className="flex items-center gap-2 hover:text-white/80 duration-200 group">
                          <FaCode  className="text-designColor/60 group-hover:text-designColor duration-200"/>  {item.title}
                        </a>
                    ))}
                </div>
            </div>
            <div className=" w-full lg:w-1/3 h-80 relative group"> 
                <div className="absolute w-full h-96 -left-6 -top-6 rounded-lg"> 
                    <div className=" w-full h-full relative z-20 flex pl-6 lg:pl-0">
                        <img src={JibonImg} alt="JibonImg" 
                        className="rounded-lg lg:w-full h-full object-cover"
                        />
                        <div className="hidden lg:inline-block absolute w-full h-96 bg-designColor/20
                        rounded-md top-0 left-0 group-hover:bg-transparent duration-300">

                        </div>
                    </div>
                </div>
                <div className="hidden lg:inline-flex w-full h-96 border-2 border-designColor rounded-md
                group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
            </div>
          </div>
        </Container>
    );
};

export default About;