import React from "react";
import Image from "next/image";

function AiOutlineSearch() {
  return (
    <svg fill="blue" viewBox="0 0 1024 1024" height="1.5em" width="1.5em">
      <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
    </svg>
  );
}

const Hero = () => {
  return (
    <div className="hero-section min-h-screen flex justify-between max-md:flex-col items-center px-[12.5rem] max-xl:px-[5rem] pt-[3rem] max-sm:px-[5rem] pb-[8rem] bg-[#0B0B0B]">
      <div className="flex-col">
        <h1 className="text-[#FFF] font-bold leading-[125%] text-[4rem] max-[320px]:text-[3rem] w-full">
          Discover Most Suitable Watches
        </h1>
        <p className="text-[#8B8E99] leading-[125%] text-[1rem] font-medium max-w-[28.5rem] max-md:w-[18rem] mb-[3rem]">
          Find the best, reliable, and cheap smart watches here. We focus on
          product quality. Here you can find smart watches of almost all brands.
          So why you are waiting? Just order now!
        </p>
        <div className="h-[3.75rem] max-w-[27rem] bg-[#fff] rounded-3xl flex items-center max-md:w-[18rem]">
          <div className="p-[1rem]">
            <AiOutlineSearch></AiOutlineSearch>
          </div>
          <input
            placeholder="Find the best brands"
            className="outline-none h-full max-md:w-[18rem] rounded-3xl"
            type="text"
          />
          <div className="flex justify-end items-center w-full h-full p-[0.5rem]">
            <button className="h-full w-[7rem] max-md:hidden bg-[#3858D6] text-center text-[#fff] font-semibold leading-[125%] rounded-3xl hover:cursor-pointer hover:bg-[#5879fd] duration-200">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="justify-end items-center flex w-full">
        <Image
          className="max-sm:mt-16"
          alt="Brand Image"
          src="/hero-image.png"
          height={375}
          width={375}
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
