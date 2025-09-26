import { FC, Children } from "react";

import Image from "next/image";

interface ProductUSPProps {
  image?: string;
  title: string;
  description: string;
  uspList: { title: string; description: string }[];
}

export const ProductUSP: FC<ProductUSPProps> = ({
  title,
  image,
  description,
  uspList,
}) => {
  return (
    <div className="flex flex-col w-full items-center">
      <h2 className="font-inter text-white text-[28px] md:text-[28px] text-center">
        {title}
      </h2>
      <p className="font-normal text-[16px] xl:text-[18px] leading-[28px] text-[#A8ADBA] max-w-[600px] text-center mt-[20px] xl:mt-[16px]">
        {description}
      </p>
      <div
        className={`flex flex-col xl:flex-row xl:items-center gap-[60px] xl:gap-[70px] justify-between items-start mt-[60px] xl:mt-[42px]`}
      >
        {image && (
          <div className="xl:w-[600px] xl:h-[600px] flex-1 rounded-md">
            <Image
              width={500}
              height={500}
              src={image}
              className="object-cover object-center rounded-md"
            />
          </div>
        )}
        {uspList && uspList.length > 0 && (
          <>
            <ul className="flex-1 text-white flex flex-col xl:flex-row  gap-[30px] xl:gap-[40px]">
              {Children.toArray(
                uspList.map(({ title, description }) => (
                  <li className="flex flex-col gap-[10px] get-started-card-1 p-[60px] justify-center items-center text-center">
                    <strong className="font-bold text-lg leading-[30px] text-white mt-[30px] max-w-[350px]">
                      {title}
                    </strong>
                    <p className="font-normal text-[16px] xl:text-[18px] leading-[24px] max-w-[500px] text-[#A8ADBA]">
                      {description}
                    </p>
                  </li>
                ))
              )}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

