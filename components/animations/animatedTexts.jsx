"use client"
import { useEffect } from "react";
import { useRef } from 'react';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "framer-motion"

const animatedTexts = (
    props
  ) => {

    const ref = useRef(null)
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

    const bodyAnimation = {
      hidden: {
        opacity: 0,
        y: '1em',
      },
      visible: {
        opacity: 1,
        y: '0em',
        transition: {
          delay: props.delay,
          duration: 1,
          ease: [0.2, 0.65, 0.3, 0.9],
        },
      },
    };

    return (
      <motion.p
          ref={ref}
          aria-label={props.text}
          role="heading"
          className={props.className}
          aria-hidden="true"
          initial="hidden"
          animate={ctrls}
          variants={bodyAnimation}
        >
          {props.text}
        </motion.p>
    )
  }

export default animatedTexts
