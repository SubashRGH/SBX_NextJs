import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

export const HomeBannerSection: FC = () => {
  return (
    <div className="w-full h-80 overflow-hidden relative">
      <Image src="/static/images/bg-home.webp" layout="fill" />
      <div className="absolute inset-0 bg-gradient-to-r from-black from-10% via-black via-30% to-transparent"></div>

      <div className="absolute z-30 top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl h-full flex justify-between px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col justify-center items-start sm:w-1/2">
          <h2 className="text-white text-4xl font-bold">
            Experience the Next Level of Trading with Stockbanx
          </h2>
          <p className="text-[#a8adba] text-lg font-normal">
            Unlock the power of rapid execution, ultra-tight spreads,
            cutting-edge tools, real-time quotes, and swift, secure withdrawals.
          </p>

          <div className="space-x-4 flex justify-center items-center w-auto mt-8">
            <Link href="/">
              <a className=" inline-flex items-center justify-center bg-[#272835] text-center text-[#F6F7FF] px-6 py-2 rounded-full border border-[#52535D] hover:bg-[#3a3b4a] transition duration-300">
                Try Demo
              </a>
            </Link>
            <Link href="/">
              <a className="inline-flex items-center justify-center gap-4 bg-sbGreen hover:bg-primary/95 text-center text-white px-6 py-2 rounded-full border-[1.5px] border-[#52535D]  transition duration-300">
                Open Account
              </a>
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-end sm:w-1/2"></div>
      </div>
    </div>
  );
};
