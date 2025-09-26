import { newsList } from "@/constants";
import Image from "next/image";
import { FC } from "react";
import { InfinitScrollerContainer } from "../InfiniteScroller";
import { SplideSlide } from "@splidejs/react-splide";

export const UpdatesNewsCarousel: FC = () => {
  return (
    <InfinitScrollerContainer
      config={{
        perPage: 1,
        perMove: 2,
        width: "100%",
        height: "200px",
        direction: "ttb",
        interval: 5000,
      }}
    >
      {newsList.map((li) => (
        <SplideSlide key={li.title}>
          <div className="flex mx-auto absolute inset-0 bg-[#121213] border border-[rgba(0,0,0,0.2)] rounded-[19px] p-[15px] gap-[17px] z-30 w-full">
            <div className="relaive flex flex-col justify-center items-center">
              <div className="flex justify-center items-center rounded-[8px] border-[2px] border-primary p-[5px] w-[45px] h-[45px]">
                <Image
                  alt="News"
                  loading="lazy"
                  width="22"
                  height="22"
                  decoding="async"
                  src="/static/images/pie-chart.svg"
                />
              </div>
            </div>
            <div className="relative flex flex-col gap-2 justify-center w-full">
              <div className="flex flex-row justify-between items-center">
                <h2 className="font-[600] text-[17px] truncate-heading max-w-[90%]">
                  {li.title}
                </h2>
                <span className="flex self-stretch justify-center items-center">
                  <Image
                    alt="Elipse"
                    loading="lazy"
                    width="8"
                    height="9"
                    decoding="async"
                    src="/static/images/elipse.svg"
                  />
                </span>
              </div>
              <p className="text-[400] text-[15px] text-[gray] truncate-paragraph">
                {li.description}
              </p>
              <div className="flex flex-row justify-between items-center">
                <span className="text-[15px] text-[#8D8E99] text-[400]">
                  {li.publishedDate}
                </span>
                <div className="bg-[#00B144] rounded-full px-2 py-1 hover:bg-[#009e3e] transition duration-300">
                  <a target="_blank" rel="noopener noreferrer" href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="w-6 h-6 text-[#000000]"
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
          </div>
        </SplideSlide>
      ))}
    </InfinitScrollerContainer>
  );
};
