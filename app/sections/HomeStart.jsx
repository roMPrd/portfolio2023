"use client"
import gsap from 'gsap'
import { useEffect } from "react";


const HomeStart = () => {

  useEffect(() => {
    const timelineStart = gsap.timeline()

    //animation on load

    const startAnimation = () => {
      timelineStart.to(".loading-container", {
        duration: 0,
        opacity: 1,
        ease: "power3.easeOut",
      })
      .from("loading-container p", {
        duration: 1,
        delay: 1,
        y: 70,
        skewY: 10,
        stagger: 0.4,
        ease: "power3.easeOut",
      })
      .to("loading-container p", {
        duration: 1,
        y: 70,
        skewY: -20,
        stagger: 0.2,
        ease: "power3.easeOut",
      })
      .to("body", {
          duration: 0.01,
          css: { overflowY: "scroll" },
          ease: "power3.inOut",
      })
      .from(".sub", {
          duration: 1,
          opacity: 0,
          y: 80,
          ease: "expo.easeOut",
      })
      .to(
          ".loading-bg",
          {
              duration: 1.5,
              height: "0vh",
              ease: "Power3.easeOut",
              // onComplete: mobileLanding,
          },
          "-=2"
      )
      .to(".loading-bg", {
          duration: 0,
          css: { display: "none" },
      });
    };

    startAnimation()
  }, [])
    return (
        <div className="loading-bg bg-black min-h-screen overflow-hidden flex justify-center items-center"
          style={{overflow: "hidden !important"}}>
          <div className="loading-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[14px] font-bold text-[#e4ded7] opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
            <p className="">developper</p>
            <p className="">/</p>
            <p className="">designer</p>
            <div className="sub hidden"></div>
          </div>
        </div>
    )
}

export default HomeStart
