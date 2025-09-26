import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";
interface Props {
  img: string;
  header: string;
  text: string;
}
const CorporateSmallCard = ({ img, header, text }: Props) => {
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col items-center lg:flex-row xl:flex-col bg-[#3B3D4333] rounded-[30px] w-full">
      <div className="lg:pb-[86px] lg:pt-[87px] order-2 lg:order-2 lg:w-[40%] xl:w-full xl:order-1 xl:pt-[141px] xl:pl-[144px] xl:pr-[144px]">
        <Image
          src={img}
          height={206}
          width={215}
          className="object-contain object-center"
        />
      </div>
      <div className="pb-[36px] order-1 lg:order-1 lg:w-[60%] xl:w-full xl:order-2 xl:mb-[20px]">
        <div className="text-[28px] lg:text-[32px] text-white font-bold text-center lg:text-left xl:text-center max-w-[300px] lg:max-w-[100%] xl:max-w-[300px] mx-auto">
          {t(header)}
        </div>

        <div className="text-[16px] lg:text-[20px] text-white2 font-normal text-center lg:text-left xl:text-center max-w-[335px] lg:max-w-[100%] xl:max-w-[335px] mx-auto">
          {t(text)}
        </div>
      </div>
    </div>
  );
};

export default CorporateSmallCard;
