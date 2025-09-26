import Image from "next/image";
import React from "react";

const ImageBgSeparator = () => {
  return (
    <div className="mx-auto mt-10 h-[221px] w-full relative">
      <div className="rounded-[undefinedpx] absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/static/assets/images/bg-wave.svg')] bg-cover bg-no-repeat bg-center" />
      </div>
    </div>
  );
};

export default ImageBgSeparator;

