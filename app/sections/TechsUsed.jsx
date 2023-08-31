// TODO: add categories + animatedTitles

// TODO: add icons + animatedIcons

import AnimatedTitles from "@components/animations/animatedTitles"
import AnimatedTooltips from "@components/animations/animatedTooltips"
import AnimatedIcons from "@components/animations/animatedIcons"
import {frontEnd, backEnd, others} from "@components/stacks/StackDetails"

const TechsUsed = () => {

    return (
      <div>
        <div className="">
          <AnimatedTitles
            text={"FRONT-END"}
            className={""}
            wordSpace={"mr-[1rem]"}
            charSpace={"mr-[0.001em]"}
          />
          <div className="relative flex gap-4 mx-4 flex-wrap">
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
                        <Icon className="text-white h-[50px] w-[50px]"/>
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
            text={"BACK-END"}
            className={""}
            wordSpace={"mr-[1rem]"}
            charSpace={"mr-[0.001em]"}
          />
          <div className="relative flex gap-4 mx-4 flex-wrap">
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
                        <Icon className="text-white h-[50px] w-[50px]"/>
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
            text={"OTHERS"}
            className={""}
            wordSpace={"mr-[1rem]"}
            charSpace={"mr-[0.001em]"}
          />
          <div className="relative flex gap-4 mx-4 flex-wrap">
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
                        <Icon className="text-white h-[50px] w-[50px]"/>
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
