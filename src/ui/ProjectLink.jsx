import { RxOpenInNewWindow } from "react-icons/rx"
import { TbBrandGithub, TbBrandYoutube } from "react-icons/tb"


const ProjectLink = (link) => {
  return (
    <div className="text-2xl flex items-center gap-5">
        <a href="https://github.com/JibonRoy46"
            target="blank"
            className="hover:text-designColor">
            <TbBrandGithub/>
        </a>
        <a href=""
            target="blank"
            className="hover:text-designColor">
            <TbBrandYoutube/>
        </a>
        <a href={link}
            target="blank"
            className="hover:text-designColor">
            <RxOpenInNewWindow  />
        </a>
    </div>
  )
}

export default ProjectLink