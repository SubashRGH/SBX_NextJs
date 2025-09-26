import Link from "next/link";
import { FC, isValidElement } from "react";

export const UspContainer: FC<UspContainerProps> = ({
  title,
  description,
  lists,
  listStyle = "row",
}) => {
  return (
    <div className="w-full flex flex-col xl:flex-row items-start justify-between">
      <div className="w-full lg:max-w-[350px]">
        <h2 className="intro-font text-[26px] md:text-[28px] mb-7 text-white w-full text-center">
          {title}
        </h2>
      </div>

      <div className="flex flex-col text-white w-full max-w-[800px] mt-[60px] xl:mt-0">
        <p className="font-normal text-[16px] xl:text-[20px] leading-[28px] text-white/60 text-center lg:text-left">
          {description}
        </p>
        <ul className="mt-[30px] xl:mt-[64px] flex flex-col border-t-[1px] border-solid border-white/[12%]">
          {lists.map((list, index) => {
            return (
              <li
                key={index}
                className={`py-[30px] xl:py-[24px] flex items-start justify-start border-b-[1px] border-solid border-white/[12%] ${
                  listStyle === "row"
                    ? "flex-col xl:flex-row gap-[20px] xl:gap-[40px]"
                    : "flex-col gap-[8px]"
                }`}
              >
                <strong className="font-inter font-medium text-[20px] xl:text-[24px] leading-[32px] w-full lg:w-[250px] min-w-[250px] text-center lg:text-left">
                  {list.label}
                </strong>
                <div className="flex flex-col gap-[4px] w-auto">
                  <p className="font-normal text-[16px] xl:text-[18px] leading-[26px] text-center lg:text-left">
                    {list.text}
                  </p>

                  {list?.cta && (
                    <Link href={list.cta.link}>
                      <button className="lg:w-[fit-content_!important] text-white/60 font-normal text-[16px] xl:text-[18px] leading-[26px] w-full text-center lg:text-left">
                        {list.cta.text} {">"}
                      </button>
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

