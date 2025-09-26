import React, { Fragment, useEffect, useState } from "react";

import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import RegisterButton from "./button/RegisterButton";
import { accountsTypeItems, stockbanxWhyItems } from "@/constants";
const AccontTypeComponent = () => {
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
    setLang(i18n.language === "zh" ? "cn" : i18n.language || "en");
  }, [i18n.language]);

  useEffect(() => {
    const queryString = window.location.search;
    if (router.query) {
      setEvent(queryString);
    }
  }, [router.query]);

  useEffect(() => {
    if (event) sessionStorage.setItem("event", event);
  }, [event]);

  return (
    <>
      {/* <div className="w-full px-6  lg:px-[6rem] "> */}
      <div className="w-full account-type relative">
        {/* <div className="absolute -right-[30rem] -top-[20rem] lg:-right-[7rem] lg:-top-[44rem]">
          <img
            className="athelete-mask select-none"
            src="/static/images/about/atheletemask.png"
          ></img>
        </div> */}
        <div className="w-full  py-12 px-4 md:px-20 lg:py-16 new-bg-box ">
          <div className="w-full h-full flex flex-col gap-10 ">
            <div className="w-full flex justify-center items-center">
              <p className="head-texts text-white">{t("Account Types")}</p>
            </div>

            <div className="flex w-full lg:mb-4 acccard-container lg:flex-row flex-col gap-6 md:gap-16 lg:gap-4 flex-wrap items-center justify-between">
              <div className=" w-full md:w-[60%] lg:w-[31%] classicacccard">
                <div className="border-b  flex-row  gap-2 border-opacity-40 w-full py-[13.36px] md:py-8 flex justify-center items-center border-[#07ECE0]">
                  <p className="head-texts-sub-heading text-primary uppercase">
                    {t("Classic")}
                  </p>
                  {/* <span className="sm-base-btn">{t("Popular")}</span> */}
                </div>

                <div className="my-[34.21px] md:mt-20 md:mb-14 flex flex-col gap-[13.36px] md:gap-8 px-[24.56px] md:px-6">
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Min. Deposits (USD)")}</p>
                    <p>$500</p>
                  </div>
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Max Leverage")}</p>
                    <p>1:1000</p>
                  </div>
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Spreads")}</p>
                    <p>1.4 pip</p>
                  </div>
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Margin Call")}</p>
                    <p>50%</p>
                  </div>
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Stop Out")}</p>
                    <p>30%</p>
                  </div>
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Commission")}</p>
                    <p>{t("No")}</p>
                  </div>
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Dedicated Account Manager")}</p>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="33"
                        viewBox="0 0 33 33"
                        fill="none"
                      >
                        <path
                          d="M16.5 32.0449C25.3366 32.0449 32.5 24.8815 32.5 16.0449C32.5 7.20837 25.3366 0.0449219 16.5 0.0449219C7.66344 0.0449219 0.5 7.20837 0.5 16.0449C0.5 24.8815 7.66344 32.0449 16.5 32.0449Z"
                          fill="#E86570"
                        />
                        <path
                          d="M11.5781 20.9695L21.4244 11.1226"
                          stroke="white"
                          strokeWidth="2.20296"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.4244 20.9695L11.5781 11.1226"
                          stroke="white"
                          strokeWidth="2.20296"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" w-full md:w-[60%] lg:w-[31%] acccard">
                <div className="border-b border-opacity-40 w-full py-[13.36px] md:py-8 flex justify-center items-center border-[#07ECE0]">
                  <p className="head-texts-sub-heading text-primary">
                    {t("ECN")}
                  </p>
                </div>

                <div className="my-[34.21px] md:mt-20 md:mb-14 flex flex-col gap-[13.36px] md:gap-8 px-[24.56px] md:px-6">
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Min. Deposits (USD)")}</p>
                    <p>$1,000</p>
                  </div>
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Max Leverage")}</p>
                    <p>1:1000</p>
                  </div>
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Spreads")}</p>
                    <p>0.1 pip</p>
                  </div>
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Margin Call")}</p>
                    <p>50%</p>
                  </div>
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Stop Out")}</p>
                    <p>30%</p>
                  </div>
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Commission")}</p>
                    <p>{t("Yes")}</p>
                  </div>
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Dedicated Account Manager")}</p>
                    <div>
                      <svg
                        width="33"
                        height="33"
                        viewBox="0 0 33 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.8457 32.4868C25.6823 32.4868 32.8457 25.3234 32.8457 16.4868C32.8457 7.65026 25.6823 0.486816 16.8457 0.486816C8.00915 0.486816 0.845703 7.65026 0.845703 16.4868C0.845703 25.3234 8.00915 32.4868 16.8457 32.4868Z"
                          fill="#0BDB90"
                        />
                        <path
                          d="M9.47168 18.1564L13.9171 22.603L23.7633 12.7561"
                          stroke="white"
                          strokeWidth="2.20296"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" w-full md:w-[60%] lg:w-[31%] acccard">
                <div className="border-b border-opacity-40 w-full py-[13.36px] md:py-8 flex justify-center items-center border-[#07ECE0]">
                  <p className="head-texts-sub-heading text-primary uppercase">
                    {t("Prime")}
                  </p>
                </div>

                <div className="my-[34.21px] md:mt-20 md:mb-14 flex flex-col gap-[13.36px] md:gap-8 px-[24.56px] md:px-6">
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Min. Deposits (USD)")}</p>
                    <p>$10,000</p>
                  </div>
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Max Leverage")}</p>
                    <p>1:1000</p>
                  </div>
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Spreads")}</p>
                    <p>0.7 pip</p>
                  </div>
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Margin Call")}</p>
                    <p>50%</p>
                  </div>
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Stop Out")}</p>
                    <p>30%</p>
                  </div>
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Commission")}</p>
                    <p>{t("No")}</p>
                  </div>
                  <div className=" acccard-para  flex justify-between">
                    <p>{t("Dedicated Account Manager")}</p>
                    <div>
                      <svg
                        width="33"
                        height="33"
                        viewBox="0 0 33 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.8457 32.4868C25.6823 32.4868 32.8457 25.3234 32.8457 16.4868C32.8457 7.65026 25.6823 0.486816 16.8457 0.486816C8.00915 0.486816 0.845703 7.65026 0.845703 16.4868C0.845703 25.3234 8.00915 32.4868 16.8457 32.4868Z"
                          fill="#0BDB90"
                        />
                        <path
                          d="M9.47168 18.1564L13.9171 22.603L23.7633 12.7561"
                          stroke="white"
                          strokeWidth="2.20296"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center items-center">
              <p className="head-texts text-white">
                {t("Find Your Ideal Trading Approach")}
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.6 }}
              className="flex md:flex-row flex-col mt-8 w-full gap-4"
            >
              {accountsTypeItems.map((i) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 0.6 }}
                  className="flex-1"
                >
                  <div className="get-started-card-1 px-4 xl:px-8 py-8 flex items-center h-full flex-col gap-[2rem]">
                    <div className="flex flex-col items-start gap-[1rem]">
                      <div className="ltr:text-left rtl:text-right w-full">
                        <p className="font-bold w-full text-xl text-white ltr:text-left rtl:text-right">
                          {t(i.heading)}
                        </p>
                      </div>
                      <div className="lg:min-h-[48px]">
                        <p className="font-normal text-[#A8ADBA] ltr:!text-left rtl:text-right">
                          {t(i.desc)}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="w-full flex justify-center items-center">
              <RegisterButton
                containerStyle="base-btn more-detail"
                title={t("Open Account")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccontTypeComponent;

