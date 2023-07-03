"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function FiMenu(props) {
  return (
    <svg
      stroke="white"
      fill="white"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      {...props}
    >
      <line x1={3} y1={12} x2={21} y2={12} />
      <line x1={3} y1={6} x2={21} y2={6} />
      <line x1={3} y1={18} x2={21} y2={18} />
    </svg>
  );
}

function AiOutlineClose(props) {
  return (
    <svg
      stroke="white"
      fill="white"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
    </svg>
  );
}

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="h-[5rem] w-screen flex items-center justify-between px-[12.5rem] max-xl:px-[5rem] max-sm:px-[5rem] bg-[#0B0B0B] sticky top-0 left-0">
      <h1 className="text-4xl font-bold text-[#8B8E99] hover:cursor-pointer">
        Mohid
      </h1>
      <div></div>
      <ul className="flex gap-12 items-center max-lg:hidden leading-[150%]">
        <li href="#hero-section"
          className="relative transition-all duration-200 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-[#c5c8d1] hover:before:w-full hover:before:opacity-100 font-bold text-[#8B8E99] text-lg hover:cursor-pointer"
        >
          Home
        </li>
        <li
          className="relative transition-all duration-200 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-[#c5c8d1] hover:before:w-full hover:before:opacity-100 font-bold text-[#8B8E99] text-lg hover:cursor-pointer"
        >
          Brands
        </li>
        <li
          className="relative transition-all duration-200 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-[#c5c8d1] hover:before:w-full hover:before:opacity-100 font-bold text-[#8B8E99] text-lg hover:cursor-pointer"
        >
          Recent Products
        </li>
        <li
          className="relative transition-all duration-200 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-[#c5c8d1] hover:before:w-full hover:before:opacity-100 font-bold text-[#8B8E99] text-lg hover:cursor-pointer"
        >
          Opinions
        </li>
      </ul>
      <div onClick={handleNav} className="block lg:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <FiMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-black/80 ease-in-out duration-200"
            : "fixed left-[-100%]"
        }
      >
        <ul className="uppercase ml-12 mt-32 lg:ml-24 md:ml-24">
          <li className="font-bold pb-4 text-[#8B8E99] text-lg hover:cursor-pointer">
            Home
          </li>
          <li className="font-bold pb-4 text-[#8B8E99] text-lg hover:cursor-pointer">
            Brands
          </li>
          <li className="font-bold pb-4 text-[#8B8E99] text-lg hover:cursor-pointer">
            Recent Products
          </li>
          <li className="font-bold pb-4 text-[#8B8E99] text-lg hover:cursor-pointer">
            Opinions
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
