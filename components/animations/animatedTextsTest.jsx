"use client"
import { useInView } from "framer-motion"
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";

const animatedTextsTest = (
    text,
    className,
    delay
  ) => {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
      threshold: 0.1,
      triggerOnce: false,
    });

    useEffect(() => {
      if (inView) {
        ctrls.start("visible");
      }
      if (!inView) {
        ctrls.start("hidden");
      }
    }, [ctrls, inView]);

    const bodyAnimation = {
      hidden: {
        opacity: 0,
        y: '1em',
      },
      visible: {
        opacity: 1,
        y: '0em',
        transition: {
          delay: delay,
          duration: 1,
          ease: [0.2, 0.65, 0.3, 0.9],
        },
      },
    };

    return (
      <motion.p
          aria-label="Pouet Pouet"
          role="heading"
          className="mb-4"
          ref={ref}
          aria-hidden="true"
          initial="hidden"
          animate={ctrls}
          variants={bodyAnimation}
        >
          Pouet Pouet
        </motion.p>
    )
  }

export default animatedTextsTest
