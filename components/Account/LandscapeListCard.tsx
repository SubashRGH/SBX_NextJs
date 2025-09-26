import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

export const LandscapeListCard: FC<ListCardProps> = ({
  title,
  icon,
  description,
  headerClassName = "",
  className = "",
  btn = null,
  backgroundImage = "/static/images/account/bg-money-change.webp",
}) => {
  return (
    <div
      className={`w-full flex flex-col p-[32px] self-stretch gap-4 rounded-[32px] bg-black/10 bg-cover bg-center relative ${className}`}
    >
      <div className="rounded-[32px] absolute inset-0 z-0 opacity-50">
        <Image
          src={backgroundImage}
          className="w-full h-full object-cover rounded-[24px]"
          layout="fill"
        />
      </div>
      <div className="flex gap-[20px] items-center relative z-10">
        <div className="rounded-[16px] w-[50px] h-[50px] min-h-[50px] min-w-[50px] bg-primary p-3">
          {/* Next JS Image Component is not well good with Splide JS, Switching to ordinary img */}
          <img
            src={icon}
            width={32}
            height={32}
            className="object-contain relative z-10"
            loading="lazy"
          />
        </div>
        <h3 className={`text-white text-[30px] leading-8 ${headerClassName}`}>
          {title}
        </h3>
      </div>

      <div className="flex flex-col gap-3 relative z-10">
        {Array.isArray(description) ? (
          description.map((d) => (
            <p key={d} className="font-normal text-[15px] leading-5">
              {d}
            </p>
          ))
        ) : (
          <p className="font-normal text-[15px] leading-5">{description}</p>
        )}
      </div>

      {btn ? (
        <>
          {!btn.isPrimary ? (
            <Link href={btn.link}>
              <a className="relative z-20 hover:scale-105 duration-200 flex gap-2 justify-center items-center self-end px-2 py-1 mt-8 max-w-full border border-primary border-solid min-h-[32px] rounded-[999px] w-[205px]">
                <div className="self-stretch my-auto text-xs font-medium  text-center">
                  {btn.text}
                </div>
              </a>
            </Link>
          ) : (
            <div className="flex justify-end mt-auto relative z-10">
              <Link href={btn.link}>
                <a className="inline-flex items-center justify-center w-[200px] bg-primary text-white text-[16px] font-normal p-[8px] rounded-full  hover:bg-primary/95 transition duration-300 gap-2">
                  {btn.text}
                </a>
              </Link>
            </div>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
