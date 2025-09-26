import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

type Props = {};

function Award({}: Props) {
  const { t, i18n } = useTranslation("common");
  const [lang, setLang] = useState<any>();
  const [country, setCountry] = useState<any>();
  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setCountry(data);
  }, []);

  useEffect(() => {
    setLang(i18n.language === "zh" ? "cn" : i18n.language || "en");
  }, [i18n.language]);

  const banners = [
    {
      image: "/static/images/reward/award-1.png",
      awardName: t("The Best trading Experience"),
      awardBy: t("Forexdailyinfo.com"),
    },
    {
      image: "/static/images/reward/award-1.png",
      awardName: t("The most innovative broker"),
      awardBy: t("Forexdailyinfo.com"),
    },
    {
      image: "/static/images/reward/award-2.png",
      awardName: t("Best IB program UAE 2023"),
      awardBy: t("World Business Outlook"),
    },
    {
      image: "/static/images/reward/award-2.png",
      awardName: t("Fastest growing broker UAE 2023"),
      awardBy: t("World Business Outlook"),
    },
    {
      image: "/static/images/reward/award-3.png",
      awardName: t("Provider of international Financial Derivative UAE 2023"),
      awardBy: t("International Business Magazine"),
    },
    {
      image: "/static/images/reward/award-4.png",
      awardName: t("Best Regulated broker"),
      awardBy: t("Smart Vision"),
    },
    {
      image: "/static/images/reward/mefm.png",
      awardName: t("MEFM Awards Dubai 2023"),
      awardBy: t("Smart Vision"),
    },
    {
      image: "/static/images/reward/trade-fair.png",
      awardName: t("Traders Fair South Africa"),
      awardBy: t("Finexpo"),
    },
    {
      image: "/static/images/reward/reputable.png",
      awardName: t("Most Reputable Forex Broker 2023"),
      awardBy: t("Trading.live"),
    },
    {
      image: "/static/images/reward/fx-dubai.png",
      awardName: t("Most Reputable Forex Broker 2023"),
      awardBy: t("Forex Expo"),
    },
    {
      image: "/static/images/reward/if.svg",
      awardName: t("International Finance Awards 2023"),
      awardBy: t("International Finance Awards"),
    },
  ];

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="stkbnx-heading text-white text-center mb-4 md:w-8/12 xl:w-8/12 lg:w-8/12 m-auto mb-text"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 1 },
        }}
        transition={{ duration: 0.4 }}
      >
        {t("Honoring Achievement Awards and Recognitions Earned by Stockbanx")}
      </motion.div>

      <div className="sm:mx-0  relative lg:mx-0 xl:mx-0 mx-0">
        <div className="w-[20%] absolute left-0 top-0 black-grad-left  h-full lg:z-50"></div>
        <div className="w-[20%] absolute right-0 top-0 black-grad-right  h-full lg:z-50"></div>
        <Splide
          options={{
            type: "loop",
            gap: "20px",
            drag: "free",
            arrows: false,
            pagination: false,
            perPage: 6,
            breakpoints: {
              640: {
                perPage: 2,
              },
              767: {
                perPage: 2,
              },
              1000: {
                perPage: 2,
              },
              1024: {
                perPage: 6,
              },
              1600: {
                perPage: 6,
              },
              1700: {
                perPage: 6,
              },
              1850: {
                perPage: 6,
              },
              2000: {
                perPage: 6,
              },
            },
            // autoScroll: false,
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: false,
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {banners?.map((item: any, index: number) => (
            <Fragment key={index}>
              <SplideSlide>
                <div
                  className="bg-[#24272E] mb-6 rounded-xl text-white p-2 text-center min-h-[350px] relative"
                  key={index}
                >
                  <div style={{ minHeight: "240px" }}>
                    <div className="min-h-[140px]">
                      <img
                        src={item.image}
                        width="130px"
                        height="130px"
                        alt="award"
                        className="mx-auto"
                      />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="xl:text-lg sm-text  mt-2 text-[12px] capitalize text-white font-bold min-h-[60px]">
                        {item.awardName}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#F9FAFB",
                        opacity: "0.1",
                        width: "80%",
                        height: "1px",
                      }}
                      className=""
                    ></div>
                  </div>

                  <div className="award-reward absolute bottom-5 left-0 w-full">
                    <p className="uppercase opacity-50 text-xs text-white">
                      {" "}
                      {t("Awarded by")}{" "}
                    </p>
                    <h4 className="xl:text-base lg:text-base md:text-base	text-[12px]	text-white	mt-1">
                      {" "}
                      {item.awardBy}
                    </h4>
                  </div>
                </div>
              </SplideSlide>
            </Fragment>
          ))}
        </Splide>
      </div>
      {/* <motion.div
        className="w-full flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 1 },
        }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-base text-white  w-[80%] md:w-full  text-center mb-10">
          {t("Stockbanx is Powered by CPT")}
        </p>
      </motion.div> */}
    </>
  );
}

export default Award;
