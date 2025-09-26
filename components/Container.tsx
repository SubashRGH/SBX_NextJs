import React, { PropsWithChildren } from "react";

interface Props {
  maxWidth?: number;
  className?: string;
}

const Container: React.FC<PropsWithChildren<Props>> = ({
  children,
  maxWidth = 1280,
  className,
}) => {
  return (
    <div
      className={`max-w-[80rem] mx-auto px-4 md:flex py-10 md:py-14 space-y-4 md:space-y-0 ${
        className || ""
      }`}
      style={{ maxWidth: `80rem` }}
    >
      {children}
    </div>
  );
};

export default Container;

