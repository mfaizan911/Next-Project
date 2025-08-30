import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef } from "react";

const Navbar = () => {

  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href="#top">
          <Image src={assets.logo} alt="" className="w-28 cursor-pointer mr-14 bg-white/50 backdrop-blur-lg shadow-sm py-2 px-3 border rounded-full" /> </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-2 bg-white/50 backdrop-blur-lg shadow-sm'>
          <li> <a className="font-Ovo" href="#top"> Home </a> </li>
          <li> <a className="font-Ovo" href="#about"> About </a> </li>
          <li> <a className="font-Ovo" href="#services"> Services </a> </li>
          <li> <a className="font-Ovo" href="#work"> My Work </a> </li>
          <li> <a className="font-Ovo" href="#contact"> Contact </a> </li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="px-2 py-2 bg-white/50 backdrop-blur-lg shadow-sm rounded-full cursor-pointer">
            <Image className="w-6" src={assets.moon_icon} alt="" />
          </button>
          <a className="hidden lg:flex items-center gap-3 px-8 py-2 border border-gray-500 rounded-full ml-4 font-Ovo bg-white/50 backdrop-blur-lg shadow-sm" href="#contact" >
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" /> </a>

          <button onClick={openMenu} className="block md:hidden ml-3 cursor-pointer">
            <Image className="w-6" src={assets.menu_black} alt="" />
          </button>
        </div>

        {/* mobile menu */}

        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50h-screen bg-rose-50 transition duration-600">

          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image className="w-5 cursor-pointer" src={assets.close_black} alt="" />
          </div>

          <li> <a className="font-Ovo" onClick={closeMenu} href="#top">Home</a> </li>
          <li> <a className="font-Ovo" onClick={closeMenu} href="#about">About</a> </li>
          <li> <a className="font-Ovo" onClick={closeMenu} href="#services">Services</a> </li>
          <li> <a className="font-Ovo" onClick={closeMenu} href="#work">My Work</a> </li>
          <li> <a className="font-Ovo" onClick={closeMenu} href="#contact">Contact</a> </li>
        </ul>


      </nav>
    </>
  );
};

export default Navbar;
