"use client"
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="z-50 flex justify-center items-center fixed inset-x-0 bottom-0 w-96 mx-auto mb-5 rounded-full bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <Link href="#home">
        <p className="text-white m-3 font-bold">HOME</p>
      </Link>
      <Link href="#about">
        <p className="text-white m-3 font-bold">ABOUT</p>
      </Link>
      <Link href="#projects">
        <p className="text-white m-3 font-bold">PROJECTS</p>
      </Link>
      <Link href="#contact">
        <p className="text-white m-3 font-bold">CONTACT</p>
      </Link>
    </div>
  )
}

export default Navbar
