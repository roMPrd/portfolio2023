import AnimatedTexts from "@components/animations/animatedTexts"
import AnimatedTitles from "@components/animations/animatedTitles"
import AnimatedButtons from "@components/animations/animatedButtons"
import AnimatedTooltips from "@components/animations/animatedTooltips"
import AnimatedIcons from "@components/animations/animatedIcons"
import Link from 'next/link';
import Grain from "@components/utilities/Grain"
import { SiGithub } from "react-icons/si";
import {BsLink45Deg} from "react-icons/bs";

const ProjectCard = ({
    id,
    name,
    description,
    image,
    stackIcon,
    stackName,
    github,
    website,
    color,
  }) => {
    return (
      // console.log(id),
      <div className="relative h-[550px] mb-4 rounded-[25px] overflow-hidden">
        <div style={{ background: "linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%)" }}
          className={`overflow-hidden relative flex w-full h-full border-2 rounded-[25px] border-[#ffffff3d]
            ${id % 2 === 0 ? 'justify-start' : 'justify-end text-right'}`}>
            <div className=" p-6 flex flex-col mt-4">
              <div className={`flex items-center
                ${id % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              {github ? (
                <div className="relative">
                  <AnimatedTooltips
                    // icon={Icon}
                    children={
                      <AnimatedIcons
                        key={""}
                        x={"0"}
                        y={20}
                        iconClassName={""}
                        delay={""}
                        children={
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
                        }
                      />
                    }
                    y={20}
                    divclassName={"h-[30px] w-[30px] relative"}
                    tooltipClassName={"absolute top-[-2rem] left-[50%] text-[12px] font-semibold text-white"}
                    stackName={"Github"}
                  />
                </div>
                ) : (
                  <div></div>
                )
              }
              {website ? (
                <div className="relative">
                <AnimatedTooltips
                  // icon={Icon}
                  children={
                    <AnimatedIcons
                      key={""}
                      x={"0"}
                      y={20}
                      iconClassName={""}
                      delay={""}
                      children={
                        <AnimatedButtons
                          aria-label="Open Web Page"
                          className="mx-4 mb-4 rounded-full flex justify-center items-center text-center"
                          rel="stylesheet"
                          href={`${github}`}
                          target="_blank"
                          color={"#D2D4D5"}
                          offset={"0.5rem"}
                          stiffness={1000}
                          mass={1}
                          children={
                            <i><BsLink45Deg className="h-[35px] w-[35px]" /></i>
                          }
                        />
                      }
                    />
                  }
                  y={20}
                  divclassName={"h-[30px] w-[30px] relative"}
                  tooltipClassName={"absolute top-[-2rem] left-[50%] text-[12px] font-semibold text-white"}
                  stackName={"Website"}
                />
                </div>
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
                {/* <p className='mb-2 mx-4'>{stacks}</p> */}
                <div className={`relative flex gap-4 mx-4 flex-wrap
                ${id % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  {stackIcon.map((Icon, index) => (
                    <div className="relative  mb-5">
                      {/* <i><Icon tooltip={stackName[index]} className="text-white h-[25px] w-[25px]" /></i> */}
                      {/* <p>{stackName[index]}</p> */}

                      <AnimatedTooltips
                        children={
                          <AnimatedIcons
                            key={index}
                            x={"0"}
                            y={20}
                            iconClassName={""}
                            delay={index * 0.25}
                            children={
                              <Icon className="text-white h-[30px] w-[30px]"/>
                            }
                          />
                        }
                        y={20}
                        divclassName={"h-[30px] w-[30px] relative"}
                        tooltipClassName={"absolute bottom-[-2rem] left-[50%] text-[12px] font-semibold text-white"}
                        stackName={stackName[index]}

                      />
                    </div>
                  ))}
                </div>
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

        <div className="grain rounded-[25px]">
          <Grain baseFrequency={"9"} numOctaves={5} w={"100%"} h={"100%"}/>
        </div>

      </div>
    )
}

export default ProjectCard
