import { FC } from "react";

import Image from "next/image";

export const ListCard: FC<ListCardProps> = ({
  title,
  subTitle,
  description,
  icon,
  imgStyles = null,
  className = "",
}) => {
  return (
    <li
      className={`w-full flex p-8 flex-col gap-5 flex-1 items-start rounded-[32px] bg-black/20 transition-transform duration-800 card-slide-in ${className}`}
    >
      <div className="flex flex-col items-start gap-5">
        <div className="bg-primary rounded-2xl w-12 h-12 min-w-12 min-h-12 box-border relative flex items-center justify-center">
          <Image
            {...(imgStyles
              ? {
                  width: imgStyles.width,
                  height: imgStyles.height,
                }
              : { layout: "fill" })}
            src={icon}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h3 className="text-[#F6F7FF] text-lg font-medium">{title}</h3>
          {subTitle && (
            <p className="text-primary text-lg font-medium">{subTitle}</p>
          )}
        </div>
      </div>

      <p className="text-[#F6F7FF] text-[15px] font-normal leading-5 mt-auto">
        {description}
      </p>
    </li>
  );
};
