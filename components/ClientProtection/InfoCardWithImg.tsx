import Image from "next/image";
import { FC } from "react";

interface InfoCardProps {
  img: string;
  title: string;
  description: string;
}

export const InfoCardWithImg: FC<InfoCardProps> = ({
  img,
  title,
  description,
}) => {
  return (
    <div className="p-14 max-w-[426px] min-h-[314px] flex flex-col items-center text-center border border-solid border-primary bg-[#3B3D4333]/20 rounded-[20px]">
      <div className="w-[50px] h-[50px] min-h-[50px] min-w-[50px] relative">
        <Image src={img} layout="fill" />
      </div>

      <strong className="font-bold text-lg leading-[30px] text-white mt-[30px]">
        {title}
      </strong>

      <p className="mt-[10px] text-[#A8ADBA] text-base leading-6">
        {description}
      </p>
    </div>
  );
};
