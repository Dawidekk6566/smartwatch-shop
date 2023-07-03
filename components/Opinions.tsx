import React from "react";
import Image from "next/image";

function AiFillStar() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
    >
      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
    </svg>
  );
}

const Opinions = () => {
  return (
    <section className="h-max w-full px-[12.5rem] max-xl:px-[5rem] pt-[8rem] pb-[12rem]">
      <p className="text-[#3858D6] font-medium text-center pb-[2rem]">
        Here are our some of the best clients.
      </p>
      <h3 className="text-[#1E1D1D] font-bold text-4xl max-md:text-3xl text-center pb-[2rem]">
        What People Say About Us
      </h3>
      <div className="flex justify-between max-md:flex-col max-md:items-center gap-8">
        <div className="w-[32rem] h-[15rem] max-md:h-full py-[2rem] bg-[#F6F6F6] rounded-2xl flex max-md:flex-col items-center justify-center">
          <Image
            className="max-md:w-52"
            alt="Man 1 Image"
            src="/hamza.png"
            width={150}
            height={150}
          ></Image>
          <div className="pl-[1.5rem] max-md:w-1/2 max-md:pt-[1rem]">
            <p className="text-[#1E1D1D] text-2xl font-bold pb-[0.5rem]">
              Hamza Faizi
            </p>
            <div className="max-w-[16rem] pb-[0.5rem]">
              <span className="text-[#8B8E99] font-medium">
                Don’t waste time, just order! This is the best website to
                puschase smart watches.
              </span>
            </div>
            <div className="flex gap-2">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </div>
          </div>
        </div>
        <div className="w-[32rem] h-[15rem] h-full py-[2rem] bg-[#F6F6F6] rounded-2xl flex max-md:flex-col max-md:pt-[4rem] justify-center items-center">
          <Image
            className="max-md:w-52"
            alt="Man 1 Image"
            src="/hafiz.png"
            width={150}
            height={150}
          ></Image>
          <div className="pl-[1.5rem] max-md:w-1/2 max-md:pt-[1rem]">
            <p className="text-[#1E1D1D] text-2xl font-bold pb-[0.5rem]">
              Hafiz Huzaifa
            </p>
            <div className="max-w-[16rem] pb-[0.5rem]">
              <span className="text-[#8B8E99] font-medium">
                I’ve been purchasing smart watches of Mohid for a long time. All
                the products are good quality.
              </span>
            </div>
            <div className="flex gap-2">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opinions;
