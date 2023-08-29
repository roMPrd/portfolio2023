"use client"
import { motion } from "framer-motion"

const variants = {
  hover: {
    x: "-50%",
    y: 0,
    opacity: 1,
    transition: { type: 'spring',
                  stiffness: "1000",
                  // velocity: 10,
                  mass: "1",
                  // bounce: 1
                }
    // },
  },
  initial: {
    x: "-50%",
    y: 10,
    opacity: 0,
  }
};

const AnimatedTooltips = (
    props
  ) => {

  return (

    <motion.div
      className={props.divClassName}
      initial="initial"
      whileHover="hover"
    >
      {/* TODO: add effect with useScroll */}
      <i>{props.children}</i>

      <motion.span
        variants={variants}
        className={props.tooltipClassName}
      >
          {props.stackName}
      </motion.span>
    </motion.div>
  )
}

export default AnimatedTooltips
