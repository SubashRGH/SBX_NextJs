import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { changeLang } from "../utils/utils";
import RegisterButton from "./button/RegisterButton";

const TradeBeginning = () => {
  const { t, i18n } = useTranslation("common");
  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();
  const [eventName, setEventName] = useState<any>("");
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
    <div className=" mt-[120px] lg:mt-[160px] ">
      <div className="flex sm:flex-row lg:flex-row  md:flex-col-reverse  flex-col-reverse justify-between items-center mt-15">
        <div className=" md:flex justify-center items-center text-center lg:text-left mt-10 lg:mt-0 w-[80%] lg:w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.5 }}
            className="relative z-[1] flex flex-col items-start justify-center lg:flex-row gap-6 lg:gap-[80px] w-full"
          >
            <div className="stkbnx-heading  mb-5 text-white leading-none meri-font lg:text-[28px] lg:leading-[3rem] text-center lg:text-right max-w-full lg:max-w-[350px]">
              {t("A Commitment to Your Trading Journey")}
            </div>
            <div className="text-base read-font text-center max-w-[514px] lg:max-w-[600px]">
              <p className="text-base read-font text-center lg:text-left max-w-[514px] lg:max-w-[600px]">
                {t(
                  "At Stockbanx, we are dedicated to creating an environment where traders can thrive. Our platform is built to support your growth, offering advanced tools, valuable insights, and continuous support to help you reach your financial goals. We believe in empowering traders with the freedom and resources to shape their own futures, and we stand by your side every step of the way as a true partner in your journey toward trading success."
                )}{" "}
              </p>
              {(() => {
                if (["CN", "HK", "TW"].includes(country)) {
                  return (
                    <div className="flex justify-center items-center">
                      <button className="rounded-full cmn-btn bg-primary mt-7">
                        <a
                          href={`${process.env.NEXT_PUBLIC_BLREG}${changeLang(
                            lang
                          )}`}
                          target="_blank"
                        >
                          {" "}
                          {t("Open Account")}{" "}
                        </a>
                      </button>{" "}
                    </div>
                  );
                } else {
                  return (
                    <div className="flex justify-center lg:justify-start items-center">
                      {/* account South Africa */}
                      <RegisterButton
                        containerStyle="rounded-full cmn-btn bg-primary mt-7"
                        title={t("Open Account")}
                      />
                    </div>
                  );
                }
              })()}
            </div>
          </motion.div>
        </div>
        {/* <div className="md:basis-1/2 relative w-full mt-6 md:mt-0 xl:mt-0 lg:mt-0"> */}
        {/* <div className="absolute -left-[20rem] -top-24">
            <img src="/static/images/about/atheletemask.png"></img>
          </div> */}
        {/* <div className="lg:w-full w-[80%] flex justify-center m-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 1 }}
            >
              <img src="/static/images/about/startingright.png"></img>
           
            </motion.div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
    // </div>
  );
};

export default TradeBeginning;

