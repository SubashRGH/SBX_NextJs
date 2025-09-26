import { FC } from "react";

export const StepsLadder: FC<StepsLadderProps> = ({
  title,
  description,
  showLadder,
  count,
}) => {
  return (
    <li className="grid grid-cols-[auto,1fr] gap-4 relative">
      <div className="flex flex-col items-center">
        <span className="w-8 h-8 bg-turquoise rounded-full flex justify-center items-center text-[18px] font-[600] lg:w-10 lg:h-10">
          {count}
        </span>
        {showLadder && (
          <span className="flex-1 w-0.5 bg-transparent border-l-2 border-dashed border-gray-200"></span>
        )}
      </div>
      <div>
        <h4 className="text-2xl font-semibold">{title}</h4>
        <span className="text-[15px] font-normal text-[#6D7988]">
          {description}
        </span>
      </div>
    </li>
  );
};
