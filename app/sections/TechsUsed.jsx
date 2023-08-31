// TODO: add categories + animatedTitles

// TODO: add icons + animatedIcons

import AnimatedTitles from "@components/animations/animatedTitles"
import AnimatedTooltips from "@components/animations/animatedTooltips"
import AnimatedIcons from "@components/animations/animatedIcons"
import {frontEnd, backEnd, others} from "@components/stacks/StackDetails"

const TechsUsed = () => {

    return (
      <div className="sectionScroll mx-auto my-10 h-[100vh] w-[80%] flex flex-col gap-10 items-start justify-center">
        <div className="text-center mx-auto">
          <AnimatedTitles
              text={"TOOLS IM USING."}
              className={
                  "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
              }
              wordSpace={"mr-[14px]"}
              charSpace={"mr-[0.001em]"}
          />
        </div>
        <div className="">
          <AnimatedTitles
            text={"FrontEnd"}
            className={"mb-4 leading-none tracking-relaxed text-[18px] md:text-[40px] font-bold"}
            wordSpace={"mr-[1rem]"}
            charSpace={"mr-[0.001em]"}
          />
          <div className="relative flex gap-4 mr-4 flex-wrap">
            {frontEnd.stackIcon.map((Icon, index) => (
              <div className="relative">
                <AnimatedTooltips
                  children={
                    <AnimatedIcons
                      key={index}
                      x={"0"}
                      y={20}
                      iconClassName={""}
                      delay={index * 0.25}
                      children={
                        <Icon className="h-[50px] w-[50px]"/>
                      }
                      />
                    }
                    y={20}
                    divclassName={"h-[50px] w-[50px] relative"}
                    tooltipClassName={"absolute bottom-[-2rem] left-[50%] text-[12px] font-semibold text-white"}
                    stackName={frontEnd.stackName[index]}
                    />
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <AnimatedTitles
            text={"BackEnd"}
            className={"mb-4 leading-none tracking-relaxed text-[18px] md:text-[40px] font-bold"}
            wordSpace={"mr-[1rem]"}
            charSpace={"mr-[0.001em]"}
          />
          <div className="relative flex gap-4 mr-4 flex-wrap">
            {backEnd.stackIcon.map((Icon, index) => (
              <div className="relative">
                <AnimatedTooltips
                  children={
                    <AnimatedIcons
                      key={index}
                      x={"0"}
                      y={20}
                      iconClassName={""}
                      delay={index * 0.25}
                      children={
                        <Icon className="h-[50px] w-[50px]"/>
                      }
                    />
                  }
                  y={20}
                  divclassName={"h-[50px] w-[50px] relative"}
                  tooltipClassName={"absolute bottom-[-2rem] left-[50%] text-[12px] font-semibold text-white"}
                  stackName={backEnd.stackName[index]}

                />
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <AnimatedTitles
            text={"Others"}
            className={"mb-4 leading-none tracking-relaxed text-[18px] md:text-[40px] font-bold"}
            wordSpace={"mr-[1rem]"}
            charSpace={"mr-[0.001em]"}
          />
          <div className="relative flex gap-4 mr-4 flex-wrap">
            {others.stackIcon.map((Icon, index) => (
              <div className="relative">
                <AnimatedTooltips
                  children={
                    <AnimatedIcons
                      key={index}
                      x={"0"}
                      y={20}
                      iconClassName={""}
                      delay={index * 0.25}
                      children={
                        <Icon className="h-[50px] w-[50px]"/>
                      }
                    />
                  }
                  y={20}
                  divclassName={"h-[50px] w-[50px] relative"}
                  tooltipClassName={"absolute bottom-[-2rem] left-[50%] text-[12px] font-semibold text-white"}
                  stackName={others.stackName[index]}

                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default TechsUsed
