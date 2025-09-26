import { FC } from "react";

import Link from "next/link";
import Image from "next/image";

export const ProductIntro: FC<ProductIntroProps> = ({
  id,
  title,
  subTitle,
  description,
  btnLink,
  btnText,
  image,
  swapLayout = "row",
}) => {
  return (
    <div
      id={id}
      className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-4 mx-auto"
    >
      <div
        className={`col-span-3 flex flex-col gap-4 ${
          swapLayout === "row" ? "md:order-1" : "md:order-2"
        }`}
      >
        <p className="text-primary font-normal">{subTitle}</p>
        <h2 className="sub-heading-h2">{title}</h2>
        <p className="text-grey4 text-xl">{description}</p>
        <div className="flex justify-center md:justify-start">
          <Link href={btnLink}>
            <a className="inline-flex items-center justify-center w-56 bg-[#00B144] text-white text-[16px] font-normal px-4 py-4 rounded-full  hover:bg-[#009e3e] transition duration-200 gap-2 hover:scale-105">
              {btnText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                ></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>
      <div
        className={`col-span-2 flex items-center ${
          swapLayout === "row" ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="relative mt-5 md:mt-0 w-full md:w-[300px] h-[300px]">
          <Image
            src={image}
            className="w-full h-full object-cover rounded-3xl"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};
