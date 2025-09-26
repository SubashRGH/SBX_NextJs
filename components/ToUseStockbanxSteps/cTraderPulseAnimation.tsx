import Image from "next/image";
import { FC } from "react";

export const CTraderPulseAnimation: FC = () => {
  return (
    <div className="laptonAnimationContainer relative">
      <div className="pulse">
        {[...Array(5)].map((_, index) => (
          <span key={index} style={{ ["--i" as any]: index }}></span>
        ))}
      </div>
      <div className="absolute w-[200px] h-[120px] lg:w-[200px] lg:h-[200px] flex items-center justify-center">
        <Image
          src="/static/assets/images/ctrader.svg"
          className="absolute w-[200px] h-[120px] lg:w-[200px] lg:h-[200px] "
          alt=""
          height={220}
          width={300}
        />
      </div>
    </div>
  );
};
