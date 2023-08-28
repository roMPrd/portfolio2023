"use client"
import { motion } from "framer-motion"

const AnimatedButtons = (
  props
) => {
  return (
    <motion.a href={props.href} target={props.target} className={props.className}
      whileHover={{ outlineColor: `${props.color}`,
                    outlineStyle: 'solid',
                    outlineOffset: `${props.offset}`,
                    outlineWidth: '1px',
                    transition: { type: 'spring',
                                  stiffness: `${props.stiffness}`,
                                  // velocity: 10,
                                  mass: `${props.mass}`,
                                  // bounce: 1
                                }
                  }}
    >
      {props.children}
    </motion.a>
  )
}

export default AnimatedButtons
