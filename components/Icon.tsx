import React from "react";
import BlurImage from "./BlurImage";

interface Props {
  src: string;
  classname?: string;
  width?: number;
  height?: number;
}

const Icon: React.FC<Props> = ({ src, classname, height = 40, width = 40 }) => {
  return (
    <div
      className={`max-h-max max-w-max bg-turquoise p-2 rounded-2xl flex items-center justify-center ${classname}`}
    >
      <BlurImage src={src} alt="rebate" width={width} height={height} />
    </div>
  );
};

export default Icon;

