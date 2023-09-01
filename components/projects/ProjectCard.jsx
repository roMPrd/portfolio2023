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
      <div className="projectScroll relative min-h-[550px] h-[550px] max-h-fit mb-4 rounded-[25px] overflow-hidden">

        <div style={{ background: "linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%)" }}
          className={`overflow-hidden relative w-full h-full p-8 border-2 rounded-[25px] border-[#ffffff3d] flex flex-col md:flex-row
            ${id % 2 === 0 ? 'md:justify-start justify-between' : 'md:justify-end justify-between text-right'}`}>

            <div className=" flex flex-col w-[100%] lg:w-[50%]">
              <div className={`flex items-center gap-4
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
                            className="mb-4 rounded-full flex justify-center items-center text-center"
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
                    tooltipClassName={"absolute z-50 top-[-1.75rem] left-[50%] text-[12px] font-semibold text-white"}
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
                          className="mb-4 rounded-full flex justify-center items-center text-center"
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
                  tooltipClassName={"absolute top-[-1.75rem] left-[50%] text-[12px] font-semibold text-white"}
                  stackName={"Website"}
                />
                </div>
                ) :(
                  <div></div>
                )
              }
              </div>
              <div className="pb-0 md:pb-[40px]">

                <AnimatedTitles
                  text={name}
                  className={"mb-2 leading-none text-[40px] font-bold"}
                  wordSpace={"mr-[1rem]"}
                  charSpace={"mr-[0.001em]"
                }
                />
                {/* <p className='mb-5 text-[40px] font-bold'>{name}</p> */}
                <AnimatedTexts
                  text={description}
                  className={"mb-4 text-[16px] font-semibold"}
                  delay={0}
                />
                {/* // <p className='mb-5 text-[16px] font-semibold w-[90%]'>{description}</p> */}
                {/* <p className='mb-2 mx-4'>{stacks}</p> */}
                <div className={`relative flex gap-4 flex-wrap
                ${id % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  {stackIcon.map((Icon, index) => (
                    <div className="relative mb-5">
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

            <div
            // className="w-full flex justify-center md:w-[550px] md:m-w-[550px] md:l-[500px] md:m-l-[550px]"
                  className={`flex rounded-[13px] justify-center md:w-[1000px] md:absolute md:top-[40%] lg:top-[30%]  w-full h-auto ${
                    id % 2 === 0 ? "md:boxShadowTL md:left-[45%]" : "md:boxShadowTR md:right-[45%]"
                }`}>
              <img
                src={image}
                alt={name}
                width={"100%"}
                height={"100%"}
                className={`opacity-80 rounded-[13px] w-full h-full ${
                    id % 2 === 0 ? "" : ""
                }`}
              />
            </div>

        </div>

        <div className="grain rounded-[25px]">
          <Grain baseFrequency={"9"} numOctaves={5} w={"100%"} h={"100%"}/>
        </div>

        <div className={`z-99 absolute inset-0 p-1 w-full h-full pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black`} />

      </div>
    )
}

export default ProjectCard
