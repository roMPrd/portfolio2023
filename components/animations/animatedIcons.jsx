"use client"
import { useEffect } from "react";
import { useInView } from "framer-motion"
import { useAnimation, motion } from "framer-motion";
import { useRef } from 'react';

const animatedIcons = (
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

  const iconAnimation = {
    hidden: {
      opacity: 0,
      y: props.y,
      x: props.x,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: props.delay,
      },
    },
  };

  return (

    <motion.div
      ref={ref}
      className={props.iconClassName}
      initial="hidden"
      animate={ctrls}
      variants={iconAnimation}
    >
      {props.children}
    </motion.div>
  )

}
export default animatedIcons
