import { FC } from "react";

import { Splide, Options } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/react-splide/css";

const splideOptions: Options = {
  type: "loop",
  gap: "24px",
  autoplay: true,
  arrows: false,
  rewind: true,
  pagination: false,
  perPage: 8,
  autoScroll: {
    pauseOnFocus: false,
    rewind: false,
    speed: 1,
  },
};

export const InfinitScrollerContainer: FC<InfinitScrollerProps> = ({
  children,
  config = {},
}) => {
  return (
    <Splide
      options={{ ...splideOptions, ...config }}
      extensions={{ AutoScroll }}
    >
      {children}
    </Splide>
  );
};
