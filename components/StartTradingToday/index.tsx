import { FC } from "react";

export const StartTradingToday: FC = () => {
  return (
    <div className="flex flex-col mx-auto items-center">
      <h2 className="sub-heading-h2 text-center font-inter">
        START TRADING TODAY
      </h2>
      <p className="text-grey4 text-xl font-normal text-center">
        Trade CFDs with ease and seize market opportunities on a platform
        designed for swift execution and seamless access.
        <br />
        Empower your trading journey and unlock your potential.
      </p>
      <div className="w-auto mt-9">
        <div className=" space-x-4 flex w-auto h-14">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className=" inline-flex items-center justify-center bg-[#272835] text-center text-[#F6F7FF] px-6 py-2 rounded-full border border-[#52535D] hover:bg-[#3a3b4a] transition duration-300"
            href=""
          >
            Try Demo
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-4 bg-primary hover:bg-primary/95 text-center text-white px-6 py-2 rounded-full border-[1.5px] border-[#52535D]  transition duration-300"
            href=""
          >
            Open Account
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4 h-4"
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
};
