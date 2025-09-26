import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

export const NumberCard: FC<NumberCardProps> = ({
  title,
  subTitle,
  description,
  number,
  btn,
  backgroundImage = "/static/images/bg-card-2.webp",
  icon,
}) => {
  return (
    <Link href={btn.link}>
      <a className="flex bg-black overflow-hidden relative flex-col flex-1 items-start p-8 h-[350px] min-w-[240px] rounded-[32px] max-md:p-6 max-sm:w-full hover:scale-105 duration-200 cursor-pointer">
        <div className="rounded-[32px] absolute inset-0 z-0 opacity-50">
          <Image
            src={backgroundImage}
            loading="lazy"
            decoding="async"
            layout="fill"
            className="rounded-[32px]"
          />
        </div>

        <div className="flex relative justify-center items-center p-3 w-14 h-14 bg-primary rounded-2xl border border-solid border-primary z-[1]">
          <Image
            src={icon}
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="self-center"
          />
        </div>

        <div className="flex grow relative flex-col mt-12 w-full z-[1]">
          <h2 className="text-[32px] font-medium leading-tight text-[#00B144]">
            {title}
          </h2>
          <strong className="text-[18px] font-medium leading-snug">
            {subTitle}
          </strong>
          <p className="mt-2 text-[px] font-[300] text-[#D2D3DF] leading-snug w-2/3">
            {description}
          </p>

          <div className="flex justify-end items-center w-full mt-auto absolute bottom-0 z-[1]">
            <div className="flex justify-center items-center w-14 h-14 border-2 border-primary border-solid bg-[#41474A]  rounded-[999px]">
              <Image
                alt="Arrow Right"
                loading="lazy"
                width="25"
                height="24"
                decoding="async"
                className="self-center"
                src="/static/images/arrow-right.svg"
              />
            </div>
          </div>
        </div>

        <div className="opacity-75 absolute top-0 z-0 font-black leading-none text-[#ffffff1e] right-[22px] text-[250px] max-md:text-[200px] max-sm:right-4 max-sm:text-9xl">
          {number}
        </div>
      </a>
    </Link>
  );
};
