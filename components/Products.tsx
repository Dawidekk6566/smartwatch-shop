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

const Products = () => {
  return (
    <section className="h-max w-full px-[12.5rem] max-xl:px-[5rem] pt-[3rem] max-sm:px-[5rem] pb-[4rem]">
      <p className="text-[#3858D6] font-medium text-center mb-4">
        Find your favourite smart watch.
      </p>
      <h3 className="text-[#1E1D1D] font-bold text-4xl text-center">
        Our Latest Products
      </h3>
      <div className="flex mt-[6rem] gap-[3rem] max-md:flex-col max-md:items-center">
        <div className="w-[20rem] h-full flex-col items-center">
          <Image
            className="m-auto"
            height={250}
            width={250}
            alt="Apple Smart 1"
            src="/apple-smart-1.png"
          ></Image>
          <p className="text-[#1E1D1D] text-[1.5rem] font-semibold text-center mt-[2.5rem]">
            Apple Smart I
          </p>
          <div className="flex justify-center mt-[0.5rem] gap-2">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
          <div className="flex justify-center items-center mt-[0.5rem] gap-[0.5rem]">
            <p className="leading-[125%] text-[#8B8E99] text-xl font-medium line-through">
              $300.00
            </p>
            <p className="leading-[125%] text-[#000] text-2xl font-semibold">
              $255.00
            </p>
          </div>
        </div>
        <div className="w-[20rem] h-full flex-col items-center">
          <Image
            className="m-auto"
            height={250}
            width={250}
            alt="Apple Smart 2"
            src="/apple-smart-1.png"
          ></Image>
          <p className="text-[#1E1D1D] text-[1.5rem] font-semibold text-center mt-[2.5rem]">
            Apple Smart II
          </p>
          <div className="flex justify-center mt-[0.5rem] gap-2">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
          <div className="flex justify-center items-center mt-[0.5rem] gap-[0.5rem]">
            <p className="leading-[125%] text-[#8B8E99] text-xl font-medium line-through">
              $300.00
            </p>
            <p className="leading-[125%] text-[#000] text-2xl font-semibold">
              $255.00
            </p>
          </div>
        </div>
        <div className="w-[20rem] h-full flex-col items-center">
          <Image
            className="m-auto"
            height={250}
            width={250}
            alt="Apple Smart 3"
            src="/apple-smart-3.png"
          ></Image>
          <p className="text-[#1E1D1D] text-[1.5rem] font-semibold text-center mt-[2.5rem]">
            Apple Smart III
          </p>
          <div className="flex justify-center mt-[0.5rem] gap-2">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
          <div className="flex justify-center items-center mt-[0.5rem] gap-[0.5rem]">
            <p className="leading-[125%] text-[#8B8E99] text-xl font-medium line-through">
              $300.00
            </p>
            <p className="leading-[125%] text-[#000] text-2xl font-semibold">
              $255.00
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-[6rem] gap-[3rem] max-md:flex-col max-md:items-center">
        <div className="w-[20rem] h-full flex-col items-center">
          <Image
            className="m-auto"
            height={250}
            width={250}
            alt="Apple Smart 4"
            src="/apple-smart-4.png"
          ></Image>
          <p className="text-[#1E1D1D] text-[1.5rem] font-semibold text-center mt-[2.5rem]">
            Apple Smart IV
          </p>
          <div className="flex justify-center mt-[0.5rem] gap-2">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
          <div className="flex justify-center items-center mt-[0.5rem] gap-[0.5rem]">
            <p className="leading-[125%] text-[#8B8E99] text-xl font-medium line-through">
              $300.00
            </p>
            <p className="leading-[125%] text-[#000] text-2xl font-semibold">
              $255.00
            </p>
          </div>
        </div>
        <div className="w-[20rem] h-full flex-col items-center">
          <Image
            className="m-auto"
            height={250}
            width={250}
            alt="Samsung Watch Pro"
            src="/samsung-watch-pro.png"
          ></Image>
          <p className="text-[#1E1D1D] text-[1.5rem] font-semibold text-center mt-[2.5rem]">
            Samsung Watch
          </p>
          <div className="flex justify-center mt-[0.5rem] gap-2">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
          <div className="flex justify-center items-center mt-[0.5rem] gap-[0.5rem]">
            <p className="leading-[125%] text-[#8B8E99] text-xl font-medium line-through">
              $300.00
            </p>
            <p className="leading-[125%] text-[#000] text-2xl font-semibold">
              $255.00
            </p>
          </div>
        </div>
        <div className="w-[20rem] h-full flex-col items-center">
          <Image
            className="m-auto"
            height={250}
            width={250}
            alt="Fitbit Max 1"
            src="/fitbit-max-1.png"
          ></Image>
          <p className="text-[#1E1D1D] text-[1.5rem] font-semibold text-center mt-[2.5rem]">
            Fitbit Max 1
          </p>
          <div className="flex justify-center mt-[0.5rem] gap-2">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
          <div className="flex justify-center items-center mt-[0.5rem] gap-[0.5rem]">
            <p className="leading-[125%] text-[#8B8E99] text-xl font-medium line-through">
              $300.00
            </p>
            <p className="leading-[125%] text-[#000] text-2xl font-semibold">
              $255.00
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[4rem] flex justify-center">
        <button className="w-[12rem] h-[3rem] bg-[#3858D6] hover:bg-[#5879fd] duration-200 rounded-2xl text-white text-lg font-semibold">
          View More
        </button>
      </div>
    </section>
  );
};

export default Products;
