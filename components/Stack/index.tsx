import { FC } from "react";

export const Stack: FC<StackProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`flex flex-col gap-20 lg:gap-36 mt-20 w-full mx-auto items-center px-6 md:px-8 ${className}`}
    >
      {children}
    </div>
  );
};
