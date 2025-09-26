import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";

const EducationCard: React.FC<EducationCardProps> = ({ img, header, text, onClick }) => {
  const { t } = useTranslation("common");

  const handleClick = () => onClick && onClick();

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="">
        <div className="bg-[#8d99be33] rounded-[18px] lg:pb-[46px] lg:pt-[40px] order-2 lg:order-2 lg:w-[40%] xl:w-full xl:order-1 flex justify-center items-center">
          <div className="w-[334px] h-[215px]">
            <Image src={img} layout="responsive" width={434} height={315} className="object-contain" />
          </div>
        </div>

        <div className="pl-[0px] pt-[25px] pb-[36px] lato-font">
          <div className="lato-font text-white text-[18px] font-bold mb-[0px] text-left mx-auto ">
            {t(header)}
          </div>
          <div className="text-white2 text-[14px] md:text-[16px] font-normal pt-0 text-left mx-auto lato-font">
            {t(text)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
