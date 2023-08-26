import AnimatedTexts from "@components/animations/animatedTexts"
import AnimatedTitles from "@components/animations/animatedTitles"
import { SiGithub } from "react-icons/si";
import {BsLink45Deg} from "react-icons/bs";

const ProjectCard = ({
    id,
    name,
    description,
    image,
    stacks,
    github,
    website,
    color,
  }) => {
    return (
      <div className="relative h-[550px] mb-4">
        <div style={{ backgroundColor: `#${color}21`}}
          className="w-full h-full border-2 rounded-[25px] border-[#ffffff3d] flex flex-row row-2">
            <div className="w-[50%] p-9 ">
              <div className="flex justify-start items-center">
                <a
                  rel="stylesheet"
                  href={`${github}`}
                  target="_blank"
                  aria-label="Open GitHub Repository"
                  className="h-[70px] w-[70px] mr-5 mb-2 text-black bg-[#D2D4D5] border-10 border-[#ffffff3d] rounded-full flex justify-center items-center text-center">
                    <i><SiGithub className="h-[35px] w-[35px]" /></i>
                </a>
                <a
                  rel="stylesheet"
                  href={`${website}`}
                  target="_blank"
                  aria-label="Open Web Page"
                  className="h-[70px] w-[70px] mr-5 mb-2 text-black bg-[#D2D4D5] border-10 border-[#ffffff4d] rounded-full flex justify-center items-center text-center">
                    <i><BsLink45Deg className="h-[35px] w-[35px]" /></i>
                </a>
              </div>
              <AnimatedTitles
                text={name}
                className={"mb-5 text-[40px] font-bold"}
                wordSpace={"mr-[1rem]"}
                charSpace={"mr-[0.001em]"}
              />
              {/* <p className='mb-5 text-[40px] font-bold'>{name}</p> */}
              <AnimatedTexts
                text={description}
                className={"mb-5 text-[16px] font-semibold w-[90%]"}
                delay={0}
              />
              {/* // <p className='mb-5 text-[16px] font-semibold w-[90%]'>{description}</p> */}
              <p className='mb-5'>{stacks}</p>
            </div>
            <div className="w-[50%] p-9 flex flex-col justify-center items-center">
              <img className='text-white rounded-lg' src={`${image}`}></img>
            </div>

        </div>
        <div className="z-10 absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-t from-black via-transparent"/>
      </div>
    )
}

export default ProjectCard
