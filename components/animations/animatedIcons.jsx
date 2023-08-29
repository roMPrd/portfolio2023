"use client"
import { motion,useAnimation } from "framer-motion"
import { useState } from "react";

const variants = {
  hover: {
    x: 0,
    opacity: 1
  },
  initial: {
    x: -100,
    opacity: 0
  }
};

const AnimatedIcons = (
    props
  ) => {

  const [hover, setHover] = useState(false);

  function handleMouseEnter() {
    setHover(true);
  }
  function handleMouseLeave() {
    setHover(false);
  }

  const controls = useAnimation();

  function handleMouseEnterControls() {
    controls.start("hover");
  }
  function handleMouseLeaveControls() {
    controls.start("initial");
  }

  return (

    <motion.div className={props.divClassName}
      onMouseEnter={handleMouseEnterControls}
      onMouseLeave={handleMouseLeaveControls}
    >
      // TODO: add effect with useScroll
      <i><Icon className={props.iconClassName} /></i>

      <span
        variants={variants}
        animate={hover ? "hover" : "initial"}
        
        // transition= { type: 'spring',
        //               stiffness: `${props.stiffness}`,
        //               // velocity: 10,
        //               mass: `${props.mass}`,
        //               // bounce: 1
        //             }
        className={props.tooltipClassName}>
          {props.stackName}
      </span>
    </motion.div>
  )
}
