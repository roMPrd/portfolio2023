import AnimatedTexts from "@components/animations/animatedTexts"
import AnimatedTitles from "@components/animations/animatedTitles"
import AnimatedButtons from "@components/animations/animatedButtons"
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
          className={`relative flex w-full h-full border-2 rounded-[25px] border-[#ffffff3d]
            ${id % 2 === 0 ? 'justify-start' : 'justify-end text-right'}`}>
            <div className=" p-6 flex flex-col mt-4">
              <div className={`flex items-center
                ${id % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              {github ? (
                <AnimatedButtons
                  aria-label="Open GitHub Repository"
                  className="mx-4 mb-4 rounded-full flex justify-center items-center text-center"
                  rel="stylesheet"
                  href={`${github}`}
                  target="_blank"
                  color={"#D2D4D5"}
                  offset={"0.5rem"}
                  stiffness={1000}
                  mass={1}
                  children={
                    <i><SiGithub className="h-[35px] w-[35px]" /></i>
                  }
                />
                  // <Link
                  //   rel="stylesheet"
                  //   href={`${github}`}
                  //   target="_blank"
                  //   aria-label="Open GitHub Repository"
                  //   className={`mx-4 mb-2 rounded-full flex justify-center items-center text-center
                  //   ${id % 2 === 0 ? '' : ''}`}>
                  //     <i><SiGithub className="h-[35px] w-[35px]" /></i>
                  // </Link>
                ) : (
                  <div></div>
                )
              }
              {website ? (
                  <AnimatedButtons
                    aria-label="Open Web Page"
                    className="mx-4 mb-4 rounded-full flex justify-center items-center text-center"
                    rel="stylesheet"
                    href={`${website}`}
                    target="_blank"
                    color={"#D2D4D5"}
                    offset={"0.5rem"}
                    stiffness={1000}
                    mass={1}
                    children={
                      <i><BsLink45Deg className="h-[35px] w-[35px]" /></i>
                    }
                  />
                  // <Link
                  //   rel="stylesheet"
                  //   href={`${website}`}
                  //   target="_blank"
                  //   aria-label="Open Web Page"
                  //   className={`mx-4 mb-2 rounded-full flex justify-center items-center text-center
                  //   ${id % 2 === 0 ? '' : ''}`}>
                  //     <i><BsLink45Deg className="h-[35px] w-[35px]" /></i>
                  // </Link>
                ) :(
                  <div></div>
                )
              }
              </div>
              <div>

                <AnimatedTitles
                  text={name}
                  className={`mb-2 leading-none text-[40px] font-bold ${id % 2 === 0 ? 'mx-4' : ''}`}
                  wordSpace={"mr-[1rem]"}
                  charSpace={"mr-[0.001em]"
                }
                />
                {/* <p className='mb-5 text-[40px] font-bold'>{name}</p> */}
                <AnimatedTexts
                  text={description}
                  className={"mb-4 mx-4 text-[16px] font-semibold"}
                  delay={0}
                />
                {/* // <p className='mb-5 text-[16px] font-semibold w-[90%]'>{description}</p> */}
                <p className='mb-2 mx-4'>{stacks}</p>
              </div>
            </div>
            {/* <div className="w-[50%] pr-4 flex flex-col justify-center items-center">
              <img className='w-full opacity-50 border-2 rounded-[25px] border-[#ffffff3d]' src={`${image}`}></img>
            </div> */}
        </div>
        <div>
          <img
            src={image}
            alt={name}
            width={500}
            height={500}
            className={`absolute bottom-[2px] w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[55%] opacity-80 rounded-[25px] ${
                id % 2 === 0 ? "right-[2px] boxShadowTL" : "left-[2px] boxShadowTR"
            }`}
          />
        </div>
        {/* <div className="z-10 absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-t from-black to-transparent to-20%"/> */}
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
