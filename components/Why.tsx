import React, { Fragment } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import "react-multi-carousel/lib/styles.css";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, Options } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { whySlides } from "@/constants";
type Props = {
  classname?: string;
};

const splideOptions: Options = {
  type: "loop",
  gap: "20px",
  drag: "free",
  arrows: false,
  pagination: false,
  perPage: 5,
  breakpoints: {
    140: {
      perPage: 1,
    },
    640: {
      perPage: 1,
    },
    767: {
      perPage: 1,
    },
    1000: {
      perPage: 2,
    },
    1024: {
      perPage: 2,
    },
    1600: {
      perPage: 3,
    },
    1700: {
      perPage: 3,
    },
    1850: {
      perPage: 3,
    },
    2000: {
      perPage: 3,
    },
  },
  autoScroll: {
    pauseOnHover: true,
    pauseOnFocus: false,
    rewind: false,
    speed: 1,
  },
};

export default function Why() {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="flex flex-col justify-center items-center xl:items-start text-center mt-14 pt-14 z-10 relative">
        <div className=" pb-0 pt-10 lg:pt-20 w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            <div className="stkbnx-heading text-white mb-2 head-texts xl:ltr:!text-left xl:rtl:!text-right">
              {t("Access Global Markets")}
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.6 }}
          >
            <p className=" text-center text-base read-font mb-10 m-auto m-who-we-are mt-4 xl:ltr:!text-left xl:rtl:!text-right">
              {t(
                "Trade across all markets and instruments to diversify your portfolio and seize opportunities worldwide, anytime and anywhere"
              )}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.6 }}
          >
            <div className={`my-14 block mt-28 product-container`}>
              <div className="w-full">
                <Splide
                  className="product-slide"
                  options={splideOptions}
                  extensions={{ AutoScroll }}
                >
                  {whySlides.map((slide) => (
                    <SplideSlide key={slide.heading}>
                      <div
                        className={`flex md:mx-4 justify-between carousel-cards overflow-hidden ${
                          slide.imgPosition === "top"
                            ? "flex-col-reverse"
                            : "flex-col"
                        }`}
                      >
                        <div className="flex-1 relative px-10 py-5">
                          <Link href={slide.link}>
                            <a
                              className={`cursor-pointer absolute right-6 hover:scale-110 duration-500 transition-all ease-in-out z-10 ${
                                slide.imgPosition === "top"
                                  ? "bottom-5"
                                  : "top-5"
                              }`}
                            >
                              <img
                                src="/static/images/home/navigation-arrow.svg"
                                alt="Slide navigation"
                              />
                            </a>
                          </Link>
                          <p className="head-texts text-white text-left">
                            {t(slide.heading)}
                          </p>
                          <p className="mt-4 product-desc text-left lg:text-base text-sm">
                            {t(slide.subHeading)}
                          </p>
                        </div>

                        <div className="img-box overflow-hidden">
                          <img
                            src={slide.img}
                            className="overflow-hidden"
                            alt="Slide image"
                          />
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

