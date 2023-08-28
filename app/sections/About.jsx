// "use client"
import AnimatedTexts from "@components/animations/animatedTexts"
import AnimatedTitles from "@components/animations/animatedTitles"
// import AnimatedTextsTest from "@components/animations/animatedTextsTest";

// import { useRef } from "react";
// import { useInView } from "framer-motion";
// // import "./styles.css";

// function Section({ children }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false });

//   return (
//     <section ref={ref}>
//       <span
//         style={{
//           transform: isInView ? "none" : "translateY(-200px)",
//           opacity: isInView ? 1 : 0,
//           transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
//         }}
//       >
//         {children}
//       </span>
//     </section>
//   );
// }

const About = () => {
  return (
    <div id="about" className="mx-auto my-10 h-[100vh] w-[90%] flex flex-col items-center justify-center">
      <div className="w-full">
        <AnimatedTitles
          text={"CREATING APPS SINCE 2022"}
          className={"mb-10 font-bold text-left leading-none tracking-tighter text-[40px] sm:text-[45px] md:mb-8 md:text-[60px] lg:text-[80px] lg:mb-16"}
          wordSpace={"mr-[1rem]"}
          charSpace={"mr-[0.001em]"}
        />
      </div>
      <div className="w-full gap-4 mb-10 font-medium text-left leading-tight text-[18px] md:text-[20px] lg:text-[24px] ">
        <AnimatedTexts
          text={"After finishing Le Wagon's bootcamp in 2022, i started developing my own apps."}
          className={"mb-4"}
          delay={0}
        />
        <AnimatedTexts
          text={"From RubyOnRails to React and Next.js, my passion lies in creating software that is both beautiful and functional."}
          className={"mb-4"}
          delay={0.1}
        />
        <AnimatedTexts
          text={"I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world."}
          className={"mb-4"}
          delay={0.2}
        />
        {/* <AnimatedTextsTest /> */}
        {/* <Section>
          From RubyOnRails to React and Next.js, my passion lies in creating software that is both beautiful and functional.
        </Section> */}
      </div>
    </div>
  )
}

export default About
