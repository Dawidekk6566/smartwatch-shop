import React from "react";
import Image from "next/image";

const Brands = () => {
  return (
    <section className="h-max flex items-center gap-4 px-[12.5rem] max-xl:px-[5rem] pt-[3rem] max-sm:px-[2rem] pb-[4rem] max-lg:flex-col max-lg:items-center">
      <div className="h-[15rem] w-[22rem] max-sm:w-[19rem] bg-[#dbdbdb] rounded-[2rem] flex justify-between items-center p-[2.5rem]">
        <Image
          className="mr-[2rem]"
          alt="Apple Brand Image"
          width={50}
          height={50}
          src="/apple-brand-image.png"
        ></Image>
        <div className="flex-col items-end">
          <h2 className="#1E1D1D text-[2.25rem] font-bold mb-[0.5rem]">
            Apple
          </h2>
          <span className="text-[#8B8E99] font-medium max-w-[10rem]">
            Apple is one of the most famous smart watches providing company.
          </span>
        </div>
      </div>
      <div className="h-[15rem] w-[22rem] max-sm:w-[19rem] bg-[#dbdbdb] rounded-[2rem] flex justify-between items-center p-[2.5rem]">
        <Image
          className="mr-[2rem]"
          alt="Xiaomi Brand Image"
          width={50}
          height={50}
          src="/xiaomi-brand-image.png"
        ></Image>
        <div className="flex-col items-end">
          <h2 className="#1E1D1D text-[2.25rem] font-bold mb-[0.7rem]">
            Xiaomi
          </h2>
          <span className="text-[#8B8E99] font-medium max-w-[10rem]">
            Xiaomi smart watches are produced by MI company.
          </span>
        </div>
      </div>
      <div className="h-[15rem] w-[22rem] max-sm:w-[19rem] bg-[#dbdbdb] rounded-[2rem] flex justify-between items-center p-[2.5rem]">
        <Image
          className="mr-[2rem]"
          alt="FitBit Brand Image"
          width={50}
          height={50}
          src="/fitbit-brand-image.png"
        ></Image>
        <div className="flex-col items-end">
          <h2 className="#1E1D1D text-[2.25rem] font-bold mb-[0.5rem]">
            Fitbit
          </h2>
          <span className="text-[#8B8E99] font-medium max-w-[10rem]">
            FitBit smart watches are best for there health and fitness features.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Brands;
