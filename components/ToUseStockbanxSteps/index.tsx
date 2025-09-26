import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { StepsLadder } from "./StepsLadder";
import { CTraderPulseAnimation } from "./cTraderPulseAnimation";

export const ToUseStockbanxSteps: FC<ToUseStockbanxStepsProps> = ({
  subTitle,
  title,
  description,
  steps,
  btnText,
  btnLink,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
      <div className="flex flex-col justify-center">
        <CTraderPulseAnimation />
      </div>
      <div className="flex flex-col mt-20 lg:mt-0">
        <p className="text-[#00B144] text-base font-medium">{subTitle}</p>
        <h2 className="text-3xl font-medium">{title}</h2>
        <p className="mb-10 text-[#D2D3DF] text-xl font-normal">
          {description}
        </p>
        <div className="max-w-[95%] sm:max-w-[100%] mt-10">
          <div>
            <ol className="relative">
              {steps.map((li, i) => (
                <StepsLadder
                  key={li.title}
                  count={i + 1}
                  title={li.title}
                  description={li.description}
                  showLadder={i < steps.length - 1}
                />
              ))}
            </ol>
          </div>
        </div>
        <div className="flex mt-5">
          <Link href={btnLink}>
            <a className="inline-flex items-center justify-center w-56 bg-primary text-white text-base font-normal px-4 py-4 rounded-full  hover:bg-primary/90 transition duration-200 gap-2 hover:scale-105 ">
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
    </div>
  );
};
