import { FC } from "react";

interface InfoCardProps {
  number?: string;
  title?: string;
  description: string;
}

export const InfoCard: FC<InfoCardProps> = ({ number, title, description }) => {
  return (
    <div className="px-6 py-24 border border-solid border-[#40444C] rounded-[32px] w-full bg-infoCardBg xl:max-w-[480px] xl:p-14">
      {number && (
        <strong className="text-primary font-bold text-[46px] leading-[56px]">
          {number}
        </strong>
      )}
      {title && (
        <strong className="font-bold text-[26px] leading-9 text-white">
          {title}
        </strong>
      )}
      <p className="mt-4 text-[#6A6E6E] text-lg leading-[30px]">
        {description}
      </p>
    </div>
  );
};
