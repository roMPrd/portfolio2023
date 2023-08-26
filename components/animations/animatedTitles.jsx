"use client"
import { useEffect } from "react";
import { useInView } from "framer-motion"
import { useAnimation, motion } from "framer-motion";
import { useRef } from 'react';

const animatedTitles = (
  props
) => {
  const ref= useRef(null)
  const isInView = useInView(ref)
  const ctrls = useAnimation();

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    }
    if (!isInView) {
      ctrls.start("hidden");
    }
  }, [ctrls, isInView]);

  const wordAnimation = {
    hidden: {},
    visible: {}
  }

  const charAnimation = {
    hidden: {
      opacity: 0,
      y: '0.25em',
    },
    visible: {
      opacity: 1,
      y: '0em',
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  // console.log(props.text)
  // const title={props.text}
  return (
    <p aria-label={props.text} className={props.className}>
      {`${props.text}`.split(" ").map((word, index) => {
        return (
          <motion.span
            key={index}
            ref={ref}
            aria-label={props.text}
            role="heading"
            className={`inline-block whitespace-nowrap ${props.wordSpace}`}
            aria-hidden="true"
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
          >
            {word.split("").map((char, index) => {
              return (
                <motion.span
                  aria-hidden="true"
                  key={index}
                  variants={charAnimation}
                  className={`inline-block ${props.charSpace}`}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.span>
        )
      })}
    </p>
  );
}
export default animatedTitles
