"use client"
import {spaceGrotesk} from '../fonts/spaceGrotesk'
import AnimatedTexts from '@components/animations/animatedTexts'
import AnimatedTitles from '@components/animations/animatedTitles'
import AnimatedButtons from '@components/animations/animatedButtons'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div id="contact" className="sectionScroll h-[100vh] w-full flex flex-col justify-center xl:justify-start items-center">
      <AnimatedTexts
        text={"CONTACT"}
        className={`${spaceGrotesk.className} font-bold text-center text-[95px] md:text-[150px] lg:mb-16 lg:text-[200px] xl:mb-0 xl:text-[300px] 2xl:text-[450px]`}
        delay={0}
      />
      <div className=" text-center sm:text-left flex flex-col sm:flex-row items-center justify-between sm:w-[80%]">
        <div className='max-w-[300px] flex flex-col items-center sm:items-start'>
          <AnimatedTexts
            text={"Got a question, proposal, project, or want to work together on something?"}
            className={"px-1 leading-[2rem] "}
            delay={0}
          />
          <motion.a
            href="mailto:rom.delimal@gmail.com"
            target="_blank"
            whileHover={{ outlineColor: '#D2D4D5',
                          outlineStyle: 'solid',
                          outlineOffset: '0.15rem',
                          outlineWidth: '1px',
                          transition: { type: 'spring',
                                        stiffness: 1000,
                                        // velocity: 10,
                                        mass: 1,
                                        // bounce: 1
                                      } }}
          >
            <AnimatedTexts
              text={" Send me an email ! "}
              className={"mx-1 underline w-fit hover:no-underline"}
              delay={0}
            />
          </motion.a>

        </div>
        <div className='flex flex-1 justify-evenly items-center'>

          <AnimatedButtons
            href={"https://www.linkedin.com/in/romain-delimal/"}
            target={"_blank"}
            color={"#D2D4D5"}
            offset={"-0.5rem"}
            stiffness={1000}
            mass={1}
            children={
              <AnimatedTitles
                text={"LINKEDIN"}
                className={"p-4 text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"}
                wordSpace={""}
                charSpace={"mr-[0.001em]"}
              />
            }
          />

          <AnimatedButtons
            href={"https://github.com/roMPrd"}
            target={"_blank"}
            color={"#D2D4D5"}
            offset={"-0.5rem"}
            stiffness={1000}
            mass={1}
            children={
              <AnimatedTitles
                text={"GITHUB"}
                className={"p-4 text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"}
                wordSpace={""}
                charSpace={"mr-[0.001em]"}
              />
            }
          />

        </div>
      </div>
    </div>
  )
}

export default Contact
