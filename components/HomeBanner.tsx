import { motion } from "framer-motion";
import { Fragment, ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import { changeLang } from "../utils/utils";
import RegisterButton from "./button/RegisterButton";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export default function HomeBanner() {
  const [caroState, setCaroState] = useState(1);

  const CaroStatehandler = ({ stateNum }: { stateNum: number }) => {
    setCaroState(stateNum);
  };

  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();

  const [eventName, setEventName] = useState<any>("");
  const { t, i18n } = useTranslation("common");

  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    setTimeout(() => {
      if (sessionStorage.getItem("event") !== null) {
        setEventName(`${sessionStorage.getItem("event")}`);
      } else {
      }
    }, 500);
  }, []);

  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setCountry(data);
    setTimeout(() => {
      if (sessionStorage.getItem("event") !== null) {
        setEventName(`${sessionStorage.getItem("event")}`);
      } else {
      }
    }, 500);
  }, []);

  useEffect(() => {
    setLang(i18n.language === "zh" ? "cn" : i18n.language || "en");
  }, [i18n.language]);

  return (
    <Fragment>
      <div
        className={classNames(
          // " banner-image-top  relative bg-black px-6 md:px-6 flex justify-center items-center lg:px-[6rem] pt-4",
          " banner-image-top  relative bg-black  flex justify-center items-center stkbnx-container mx-auto pt-4",

          {
            // "md:h-[510px]": size === "md",
            // "md:h-[323px]": size === "sm",
          }
        )}
      >
        <div className="lg:z-[9] w-full lg:px-0 flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="flex w-full lg:flex-row flex-col">
            <div className="flex  lg:mr-[85px]  flex-col justify-between lg:w-[60%] ">
              <div className="md:w-[100%] flex flex-col justify-center lg:items-start items-center">
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.5 }}
                  className=" text-center lg:text-left pb-2 landing-heading"
                >
                  {t("Experience the Next Level of Trading with Stockbanx")}
                  {/* <br />
                  {t("with Stockbanx")} */}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-center lg:text-left  landing-desc pb-6  md:w-9/12 xl:w-9/12 lg:w-9/12 mb-4"
                  dangerouslySetInnerHTML={{
                    __html: t(
                      "Unlock the power of rapid execution, ultra-tight spreads, cutting-edge tools, real-time quotes, and swift, secure withdrawals."
                    ),
                  }}
                ></motion.span>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.8 }}
                  className="home-btn text-center flex gap-2 flex-col md:flex-row"
                >
                  <a
                    href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${lang}/user/register${eventName}`}
                    target="_blank"
                    className="rounded-full cmn-btn bg-primary mb-3 md:mb-0 xl:mb-0 lg:mb-0 mr-0 lg:mr-4"
                  >
                    {t("Open Account")}
                  </a>

                  <a
                    href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${lang}/user/register`}
                    target="_blank"
                    className="rounded-full demo-home cmn-btn border-primary mb-3 md:mb-0 xl:mb-0 lg:mb-0"
                  >
                    {t("Try Demo")}
                  </a>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="lg:hidden mt-8  hidden md:flex w-full justify-between  ">
            <div className="text-center">
              <p className="big-text font-bold text-white">350,000</p>
              <p className="para-texts mt-4 text-[#A8ADBA]">
                Clients Worldwide
              </p>
            </div>

            <div className="text-center">
              <p className="big-text font-bold text-white">$22M</p>
              <p className="para-texts mt-4 text-[#A8ADBA]">Client Assets</p>
            </div>

            <div className="text-center">
              <p className="big-text font-bold text-white">165,000</p>
              <p className="para-texts mt-4 text-[#A8ADBA]">
                Daily Executed Trades
              </p>
            </div>

            <div className="text-center">
              <p className="big-text font-bold text-white">12+ years</p>
              <p className="para-texts mt-4 text-[#A8ADBA]">
                Experience In The Industry
              </p>
            </div>
          </div>
        </div>

        <div className="lg:hidden block absolute -top-[35rem] right-0 w-full">
          <img
            src="/static/images/home/radient.svg"
            className="gradient-right"
            alt="banner"
          />
        </div>

        <div className="lg:block hidden absolute radient-outer  top-0">
          <div className="radient-container hidden md:block">
            <img
              src="/static/images/banner/gradiant-radial.png"
              className="gradient-left"
              alt="banner"
              width={671}
              height={877}
            />
            <img
              src="/static/images/banner/gradiant-radial.png"
              className="gradient-right"
              alt="banner"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
