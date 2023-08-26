import Link from 'next/link';
import {spaceGrotesk} from '../fonts/spaceGrotesk'
import AnimatedTexts from '@components/animations/animatedTexts'
import AnimatedTitles from '@components/animations/animatedTitles'

const Contact = () => {
  return (
    // <div id="contact">
    <div id="contact" className="h-[85dvh] w-full flex flex-col justify-center lg:h-[90dvh] xl:justify-start items-center overflow-hidden">
      <AnimatedTexts
        text={"CONTACT"}
        className={`${spaceGrotesk.className} font-bold text-center text-[100px] sm:text-[100px] md:mb-16 md:text-[150px] lg:mb-16 lg:text-[200px] xl:mb-0 xl:text-[450px]`}
        delay={0}
      />
      {/* <p className={`${spaceGrotesk.className} font-bold text-center text-[100px] sm:text-[100px] md:mb-16 md:text-[150px] lg:mb-16 lg:text-[200px] xl:mb-0 xl:text-[450px]`}>
        CONTACT
      </p> */}
      <div className="flex items-center justify-between w-[80%]">
        <div className='w-[300px]'>
          <AnimatedTexts
            text={"Got a question, proposal, project, or want to work together on something?"}
            className={""}
            delay={0}
          />
          {/* <p className="">Got a question, proposal, project, or want to work together on something?</p> */}
          <Link
            href="mailto:rom.delimal@gmail.com"
            target="_blank"
          >
            <AnimatedTexts
              text={"Send me an email !"}
              className={"underline"}
              delay={0}
            />
            {/* <p className="underline">Send me an email !</p> */}
          </Link>
        </div>
        <div className='flex w-[50%] justify-evenly items-center'>
          <Link href="https://www.linkedin.com/in/romaindelimal/">
            <AnimatedTitles
              text={"LINKEDIN"}
              className={"p-4 text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"}
              wordSpace={"mr-[1rem]"}
              charSpace={"mr-[0.001em]"}
            />
            {/* <p className="p-4 text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]">
              LINKEDIN
            </p> */}
          </Link>
          <Link href="github.com/romaindelimal">
            <AnimatedTitles
              text={"GITHUB"}
              className={"p-4 text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"}
              wordSpace={"mr-[1rem]"}
              charSpace={"mr-[0.001em]"}
            />
            {/* <p className="p-4 text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]">
              GITHUB
            </p> */}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
