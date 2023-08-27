import AnimatedTexts from "@components/animations/animatedTexts"
import AnimatedTitles from "@components/animations/animatedTitles"
import Link from 'next/link';
import Grain from "@components/utilities/Grain"
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
      // console.log(id),
      <div className="relative h-[550px] mb-4">
        <div style={{ background: "linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%)" }}
          className={`relative w-full h-full border-2 rounded-[25px] border-[#ffffff3d]
            ${id % 2 === 0 ? 'flex flex-row row-2' : 'flex flex-row-reverse row-2'}`}>
            <div className="w-[50%] p-9 flex flex-col ">
              <div className={`flex justify-start items-center
                ${id % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              {github ? (
                  <Link
                    rel="stylesheet"
                    href={`${github}`}
                    target="_blank"
                    aria-label="Open GitHub Repository"
                    className="h-[70px] w-[70px] mr-5 mb-20 text-black bg-[#D2D4D5] border-10 border-[#ffffff3d] rounded-full flex justify-center items-center text-center">
                      <i><SiGithub className="h-[35px] w-[35px]" /></i>
                  </Link>
                ) : (
                  <div></div>
                )
              }
              {website ? (
                  <Link
                    rel="stylesheet"
                    href={`${website}`}
                    target="_blank"
                    aria-label="Open Web Page"
                    className="h-[70px] w-[70px] mr-5 mb-20 text-black bg-[#D2D4D5] border-10 border-[#ffffff4d] rounded-full flex justify-center items-center text-center">
                      <i><BsLink45Deg className="h-[35px] w-[35px]" /></i>
                  </Link>
                ) :(
                  <div></div>
                )
              }
              </div>
              <div>

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
                <p className='mb-5 mr-4'>{stacks}</p>
              </div>
            </div>
            <div className="w-[50%] pr-4 flex flex-col justify-center items-center">
              <img className='w-full opacity-50 border-2 rounded-[25px] border-[#ffffff3d]' src={`${image}`}></img>
            </div>
        </div>
        <div className="z-10 absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-t from-black to-transparent to-20%"/>
        <div className="grain">
          <Grain baseFrequency={"9"} numOctaves={5} w={"100%"} h={"100%"}/>
        </div>
        {/* { id % 2 === 0 ? (
          <div className="z-10 absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-tl from-black from-10% via-transparent"/>
         ) : (
          <div className="z-10 absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-tr from-black from-10% via-transparent"/>
         ) } */}
      </div>
    )
}

export default ProjectCard
