import Grain from "@components/utilities/Grain"
import AnimatedButtons from '@components/animations/animatedButtons'

const Navbar = () => {

  // const handleScroll = () => {
  //   e.preventDefault();
  //   const href = e.currentTarget.href.split("#")[1];
  //   window.scrollTo({
  //       top: document.getElementById(href)?.offsetTop,
  //       left: 0,
  //       behavior: "smooth",
  //   });
  // };

  return (

    <div className="z-50 flex justify-center items-center fixed inset-x-0 bottom-0 w-fit mx-auto mb-5 rounded-lg bg-gradient-to-b from-[#D2D4D54d] via-transparent bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-[#D2D4D5]">
      <AnimatedButtons
        href={"#home"}
        // onClick={handleScroll}
        target={""}
        color={"#D2D4D5"}
        offset={"-0.3rem"}
        stiffness={1000}
        mass={1}
        children={
          <p className="p-2 m-1 font-bold text-[12px] md:text-[14px]">HOME</p>
        }
        />
      <AnimatedButtons
        href={"#about"}
        // onClick={handleScroll}
        target={""}
        color={"#D2D4D5"}
        offset={"-0.3rem"}
        stiffness={1000}
        mass={1}
        children={
          <p className="p-2 m-1 font-bold text-[12px] md:text-[14px]">ABOUT</p>
        }
        />
      <AnimatedButtons
        href={"#projects"}
        // onClick={handleScroll}
        target={""}
        color={"#D2D4D5"}
        offset={"-0.3rem"}
        stiffness={1000}
        mass={1}
        children={
          <p className="p-2 m-1 font-bold text-[12px] md:text-[14px]">PROJECTS</p>
        }
        />
      <AnimatedButtons
        href={"#contact"}
        // onClick={handleScroll}
        target={""}
        color={"#D2D4D5"}
        offset={"-0.3rem"}
        stiffness={1000}
        mass={1}
        children={
          <p className="p-2 m-1 font-bold text-[12px] md:text-[14px]">CONTACT</p>
        }
      />
      <div className="grain">
        <Grain baseFrequency={"9"} numOctaves={5} w={"100%"} h={"100%"}/>
      </div>
    </div>
  )
}

export default Navbar
