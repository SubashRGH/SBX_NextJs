import { FC } from "react";

import { InfinitScrollerContainer } from "../InfiniteScroller";

import { productsListData } from "@/constants";
import { SplideSlide } from "@splidejs/react-splide";
import { LandscapeListCard } from "../Account/LandscapeListCard";

export const ProductsCarousel: FC = () => {
  return (
    <div className="overflow-hidden flex mt-[48px] w-full">
      <InfinitScrollerContainer
        config={{
          perPage: 3,
          perMove: 3,
          width: "100%",
          breakpoints: {
            750: {
              perPage: 1,
              perMove: 1,
            },
          },
        }}
      >
        {productsListData.map((li, i) => (
          <SplideSlide key={li.title}>
            <LandscapeListCard
              className="min-h-[300px]"
              {...(i % 2 === 0
                ? {
                    backgroundImage: "/static/images/bg-trader-on-the-go.webp",
                  }
                : {})}
              title={li.title}
              description={li.description}
              icon={li.icon}
              btn={{
                text: "Learn More",
                link: "/",
                isPrimary: true,
              }}
            />
          </SplideSlide>
        ))}
      </InfinitScrollerContainer>
    </div>
  );
};
