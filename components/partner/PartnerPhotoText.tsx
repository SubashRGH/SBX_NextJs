import classNames from "classnames";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import * as animationData from "../../public/static/images/animation/Laptop Animation.json";
import Image from "next/image";

interface Props {
  title: string;
}

function PartnerPhotoText({ title }: Props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { t } = useTranslation("common");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
      <div className="flex flex-col justify-center">
        <div className="laptonAnimationContainer relative">
          <div className="pulse">
            {[...Array(5)].map((_, index) => (
              <span key={index} style={{ ["--i" as any]: index }}></span>
            ))}
          </div>
          <div className="absolute w-[200px] h-[120px] lg:w-[200px] lg:h-[200px] flex items-center justify-center">
            <Image
              src="/static/assets/images/ctrader.svg"
              className="absolute w-[200px] h-[120px] lg:w-[200px] lg:h-[200px] "
              alt=""
              height={220}
              width={300}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-20 lg:mt-0">
        <p className="text-[#00B144] text-[16px] font-medium leading-[1.4]">
          ACT NOW
        </p>
        <h2 className="text-3xl font-medium">{title}</h2>
        <div className="max-w-[95%] sm:max-w-[100%] mt-10">
          <div>
            <ol className="relative">
              <li className="grid grid-cols-[auto,1fr] gap-4 relative">
                <div className="flex flex-col items-center">
                  <span className="w-8 h-8 bg-turquoise rounded-full flex justify-center items-center text-[18px] font-[600] lg:w-10 lg:h-10">
                    1
                  </span>
                  <span className="flex-1 w-0.5 bg-transparent border-l-2 border-dashed border-gray-200"></span>
                </div>
                <div>
                  <h4 className="text-[24px] font-[600]">Open an Account</h4>
                  <span className="text-[15px] font-[400] text-[#6D7988]">
                    Fill in your details using our quick and easy registration
                    form to get started immediately.
                  </span>
                </div>
              </li>
              <li className="grid grid-cols-[auto,1fr] gap-4 relative">
                <div className="flex flex-col items-center">
                  <span className="w-8 h-8 bg-turquoise rounded-full flex justify-center items-center text-[18px] font-[600] lg:w-10 lg:h-10">
                    2
                  </span>
                  <span className="flex-1 w-0.5 bg-transparent border-l-2 border-dashed border-gray-200"></span>
                </div>
                <div>
                  <h4 className="text-[24px] font-[600]">Start Referring</h4>
                  <span className="text-[15px] font-[400] text-[#6D7988]">
                    Refer clients and monitor their daily trading volume in our
                    advanced and user-friendly IB Portal.
                  </span>
                </div>
              </li>
              <li className="grid grid-cols-[auto,1fr] gap-4 relative">
                <div className="flex flex-col items-center">
                  <span className="w-8 h-8 bg-turquoise rounded-full flex justify-center items-center text-[18px] font-[600] lg:w-10 lg:h-10">
                    4
                  </span>
                  <span className="flex-1 w-0.5 bg-transparent border-l-2 border-dashed border-gray-200"></span>
                </div>
                <div>
                  <h4 className="text-[24px] font-[600]">Start Earning</h4>
                  <span className="text-[15px] font-[400] text-[#6D7988]">
                    Earn 20% from the spread for every standard lot your clients
                    trade. The more they trade, the more you earn!
                  </span>
                </div>
              </li>
              <li className="grid grid-cols-[auto,1fr] gap-4 relative">
                <div className="flex flex-col items-center">
                  <span className="w-8 h-8 bg-turquoise rounded-full flex justify-center items-center text-[18px] font-[600] lg:w-10 lg:h-10">
                    5
                  </span>
                </div>
                <div>
                  <h4 className="text-[24px] font-[600]">Become a Partner</h4>
                  <span className="text-[15px] font-[400] text-[#6D7988]">
                    Join Stockbanx Now to start leveraging commission rebates,
                    advanced trading platforms, and powerful allocation tools
                    tailored for your success.
                  </span>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="flex mt-5">
          <a
            className="inline-flex items-center justify-center w-56 bg-[#00B144] text-white text-[16px] font-normal px-4 py-4 rounded-full  hover:bg-[#009e3e] transition duration-200 gap-2 hover:scale-105 "
            href="https://live.stockbanx.com/agent/signup/"
          >
            Get Started
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
        </div>
      </div>
    </div>
  );
}

export default PartnerPhotoText;

