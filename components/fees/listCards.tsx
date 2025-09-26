import Image from "next/image";
import { FC, Children } from "react";

export const ListCards: FC<FeeBenefitsProps> = ({ lists }) => {
  return (
    <div className="flex flex-col w-full items-center">
      <ul className="flex flex-col xl:flex-row gap-[24px] w-full items-center xl:items-start">
        {Children.toArray(
          lists.map((list) => {
            return (
              <li className="flex flex-col gap-[32px] p-[32px] w-[350px] h-[360px] xl:w-auto flex-1 border border-solid border-white/10 bg-[#3B3D4333]/20">
                <div className="w-[50px] h-[50px] xl:w-[80px] xl:h-[80px] ml-auto">
                  <Image
                    src={list.icon}
                    width={80}
                    height={80}
                    className="w-[82px] h-[80px] object-contain object-center"
                  />
                </div>
                <div className="text-white w-full">
                  <strong className="font-inter font-medium text-[24px] leading-[32px]">
                    {list.title}
                  </strong>
                  <p className="mt-[8px] font-normal text-[16px] leading-[24px] text-white/60">
                    {list.description}
                  </p>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

