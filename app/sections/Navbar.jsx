"use client"
import Link from 'next/link';
import Grain from "@components/utilities/Grain"

const Navbar = () => {
  return (
    <div className="z-50 flex justify-center items-center fixed inset-x-0 bottom-0 w-[350px] md:w-[420px] mx-auto mb-5 rounded-lg bg-gradient-to-b from-[#D2D4D54d] via-transparent bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-[#D2D4D5]">
      <Link href="#home">
        <p className="p-2 m-1 font-bold text-[12px] md:text-[14px] border-[1px] border-transparent hover:border-[#D2D4D5]">HOME</p>
      </Link>
      <Link href="#about">
        <p className="p-2 m-1 font-bold text-[12px] md:text-[14px] border-[1px] border-transparent hover:border-[#D2D4D5]">ABOUT</p>
      </Link>
      <Link href="#projects">
        <p className="p-2 m-1 font-bold text-[12px] md:text-[14px] border-[1px] border-transparent hover:border-[#D2D4D5]">PROJECTS</p>
      </Link>
      <Link href="#contact">
        <p className="p-2 m-1 font-bold text-[12px] md:text-[14px] border-[1px] border-transparent hover:border-[#D2D4D5]">CONTACT</p>
      </Link>
      <div className="grain">
        <Grain baseFrequency={"9"} numOctaves={5} w={"100%"} h={"100%"}/>
      </div>
    </div>
  )
}

export default Navbar
