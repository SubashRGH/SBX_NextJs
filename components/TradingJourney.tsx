import React, { Fragment, useEffect, useState } from "react";

import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import classNames from "classnames";
import Image from "next/image";

const TradingJourney = () => {
  const { t, i18n } = useTranslation("common");

  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();
  const [event, setEvent] = useState<any>();
  const router = useRouter();
  const [solutionTab, setSolutionTab] = useState<any>("For Traders");

  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setCountry(data);
  }, [country]);

  useEffect(() => {
    const queryString = window.location.search;
    if (router.query) {
      setEvent(queryString);
    }
  }, [router.query]);

  useEffect(() => {
    if (event) sessionStorage.setItem("event", event);
  }, [event]);

  useEffect(() => {
    setLang(i18n.language === "zh" ? "cn" : i18n.language || "en");
  }, [i18n.language]);

  const trading = [
    {
      title: "Powerful Trading Platform",
      description:
        "Unlock the full potential of trading with our advanced, easy-to-use platform. Equipped with cutting-edge tools for market analysis and real-time insights, you'll be empowered to make informed decisions and trade like a pro.",
      image: "/static/images/landing-page/advance.svg",
    },
    {
      title: "Personalized Support, Anytime",
      description:
        "You're never alone on your trading journey. Our expert support team is available to provide tailored assistance and ensure you have everything you need to succeed in the markets.",
      image: "/static/images/landing-page/support.svg",
    },
    {
      title: "Seamless Trading, Anywhere",
      image: "/static/images/landing-page/flex.svg",
      description:
        "Stay connected to the markets wherever you are. Our platform is optimized for all devices, allowing you to trade ekortlessly on desktop or mobile and never miss an opportunity.",
    },
    {
      title: "Innovative Trading Tools",
      description:
        "Enhance your strategies with industry-leading tools, fast execution, and dynamic charting. Experience the power to react instantly to market changes and capitalize on every opportunity.",
      image: "/static/images/landing-page/innovation.svg",
    },
  ];
  return (
    <div
      style={{
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      // className={
      //   "trading-journey-container relative pt-10 px-6  lg:px-[6rem]  pb-20"
      // }
      className={"trading-journey-container relative pt-0  pb-20"}
    >
      <div className="lg:z-10 w-full lg:px-0 px-6 py-6  flex flex-col container items-center lg:flex-row">
        {/* <div className=""> */}
        <div className="left-section trading-journey-left">
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
            <h1
              className="head-texts text-center text-white"
              style={{ marginBottom: "54px" }}
            >
              {" "}
              {t("Start Your Trading Journey with Confidence")}{" "}
            </h1>
          </motion.div>{" "}
          {trading.length > 0 &&
            trading.map((item: any, i: any) => {
              return (
                <div
                  className="xl:basis-1/4 lg:basis-1/4 md:basis-[48%]"
                  key={i}
                  style={{ marginTop: "40px" }}
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 1 },
                    }}
                    transition={{ duration: 0.5 + i / 10 }}
                  >
                    <div className=" flex flex-row items-center">
                      <img
                        src={item.image}
                        alt=""
                        className="trading-img"
                        style={{ width: "33.42px", maxHeight: "33.42px" }}
                      />
                      <div
                        className="flex flex-col justify-between "
                        style={{ paddingLeft: "49.58px" }}
                      >
                        <h1 className="trading-sub-heading mb-3 ">
                          {t(item.title)}
                        </h1>
                        <p className="trading-sub-desc font-color opacity-60">
                          {t(item.description)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          <div className="md:block hidden">
            <button
              className={
                "rounded-full trading-btn whitespace-nowrap landing-btn cmn-btn bg-primary text-neutral mb-3 md:mb-0 xl:mb-0 lg:mb-0 m-auto"
              }
              onClick={() => {}}
            >
              <a
                href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${lang}/user/register`}
                target="_blank"
              >
                {t("Open Account")}
              </a>
            </button>
          </div>
          {/* </div> */}
        </div>

        <div className="trading-img  relative">
          {/* <div className="absolute lg:z-10 lg:hidden bottom-0 right-0">
            <img
              src="/static/images/home/trading-bottom.png"
              className="rounded-[30px]"
            ></img>
          </div> */}
          {/* <div className="relative lg:z-20">
            <img
              src="/static/images/home/trading-img.png"
              alt="trading"
              style={{ transform: "scale(0.8)" }}
            />
          </div> */}
          <div className="w-full flex justify-center items-center md:hidden ">
            <button className="bg-primary text-neutral px-8 mb-8 py-3 rounded-[100px]">
              {t("Open Account")}
            </button>
          </div>
        </div>
        <div className=" hidden lg:block">
          <img
            src="/static/images/banner/gradiant-radial.png"
            className="gradient-left"
            alt="banner"
            width={500}
            height={500}
          />
        </div>
        <div />
      </div>

      <div className="absolute radient-outer hidden lg:block top-0">
        <div className="radient-container">
          <img
            src="/static/images/home/radient.svg"
            className="gradient-left"
            alt="banner"
          />
          {/* <img
            src="/static/images/home/radient.svg"
            className="gradient-right"
            alt="banner"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default TradingJourney;

