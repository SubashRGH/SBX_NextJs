import React, { PropsWithChildren } from "react";
interface Props {
  className?: string;
}

const PageBannerHeader: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={` relative h-[500px] w-full mx-auto sm:px-6 lg:px-8 flex flex-col items-center justify-center bg-[url('/static/images/docBanner.svg')] bg-cover bg-no-repeat bg-top ${className}`}
    >
      <div className="absolute h-[100px] sm:h-[250px] w-full bottom-0 z-10 bg-gradient-to-t from-sbBackground to-transparent"></div>
      <div className="absolute h-full w-[100px] sm:w-[250px] left-0 z-10 bg-gradient-to-r from-sbBackground to-transparent"></div>
      <div className="absolute h-full w-[100px] sm:w-[250px] right-0 z-10 bg-gradient-to-l from-sbBackground to-transparent"></div>
      {children}
    </div>
  );
};

export default PageBannerHeader;

