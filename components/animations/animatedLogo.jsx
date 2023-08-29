"use client"
import { useEffect } from "react";
import { useInView } from "framer-motion"
import { useAnimation, motion } from "framer-motion";
import { useRef } from 'react';

const animatedLogo = (
  props
) => {

  const ref= useRef(null)
  const isInView = useInView(ref)
  const ctrls = useAnimation();

  useEffect(() => {
    if (isInView) {
      ctrls.start("animate");
    }
    if (!isInView) {
      ctrls.start("initial");
    }
  }, [ctrls, isInView])

  const logoAnimation = {
    animate: {
      opacity: 1,
      scale: 1,
      transition : {
        duration: 1,
      }
    },
    initial: {
      opacity: 0,
      scale: 0,
    }
  };

  return (
    <motion.img
      ref={ref}
      className={props.className}
      initial="initial"
      animate={ctrls}
      variants={logoAnimation}
      src={props.src}
      alt={props.alt}
    >
      {/* {props.children} */}
    </motion.img>
  )
}

export default animatedLogo
