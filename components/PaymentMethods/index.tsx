import { FC } from "react";

import Image from "next/image";

import { InfinitScrollerContainer } from "../InfiniteScroller";

import { paymentMethodsList } from "@/constants";
import { SplideSlide } from "@splidejs/react-splide";

export const PaymentMethods: FC = () => {
  return (
    <div className="overflow-hidden flex mt-[48px] w-full">
      <InfinitScrollerContainer>
        {paymentMethodsList.map((li) => (
          <SplideSlide key={li.title}>
            <Image
              src={li.image}
              className="object-contain self-stretch relative"
              width={128}
              height={60}
              alt={li.title}
            />
          </SplideSlide>
        ))}
      </InfinitScrollerContainer>
    </div>
  );
};
