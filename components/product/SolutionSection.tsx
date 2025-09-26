import React, { Fragment, useEffect, useState } from "react";

import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import classNames from "classnames";

const SolutionSection = () => {
  const { t } = useTranslation("common");

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

  return (
    // <div className=" solution-container px-6 lg:px-[6rem] py-20 bz-banner">
    <div className=" solution-container py-20 bz-banner relative">
      <div
        style={{
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className=" lg:z-10 w-full lg:px-0  flex flex-col items-center">
          {/* <div className="my-14 stkbnx-container mx-auto"> */}
          <motion.div
            initial="hidden"
            className="w-full"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            <div className="stkbnx-heading text-center w-full justify-center flex text-white solution-heading ">
              {t("Trader-Centric Solutions for a Seamless Experience")}{" "}
            </div>
          </motion.div>
          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 1 },
            }}
            className="flex w-full justify-center lg:justify-start "
            style={{ marginBottom: "34px" }}
            transition={{ duration: 0.6 }}
          >
            <button
              className={`rounded-full  solution-btn  mb-3 md:mb-0 xl:mb-0 lg:mb-0`}
              style={
                solutionTab === "For Traders"
                  ? {
                      background: "#fff",
                      color: "#000",
                      borderColor: "#000",
                      marginRight: "26px",
                    }
                  : {
                      background: "#000",
                      color: "#fff",
                      borderColor: "#fff",
                      marginRight: "26px",
                    }
              }
              onClick={() => {
                setSolutionTab("For Traders");
              }}
            >
              {t("For Traders")}
            </button>
            <button
              className={
                "rounded-full solution-btn mb-3 md:mb-0 xl:mb-0 lg:mb-0"
              }
              style={
                solutionTab === "For Partners"
                  ? { background: "white", color: "#000", borderColor: "#000" }
                  : { background: "#000", color: "white", borderColor: "white" }
              }
              onClick={() => {
                setSolutionTab("For Partners");
              }}
            >
              {t("For Partners")}
            </button>
           
          </motion.div> */}
          <div className="flex flex-col lg:flex-col w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 1 },
              }}
              className="w-full relative lg:w-full solution-card"
              transition={{ duration: 0.4 }}
            >
              <div
                className="flex lg:z-10 flex-col justify-between "
                style={{ height: "100%" }}
              >
                <div className="solution-top-section lg:flex hidden">
                  <div className="text-white leading-9 text-[24px] text-center ">
                    {" "}
                    {t(
                      `${
                        solutionTab == "For Traders"
                          ? "User-Centric Trading Experience"
                          : "Dedicated Partner Portal"
                      }`
                    )}{" "}
                  </div>

                  <div className="md:leading-6  opacity-80 para-text font-400 mt-6">
                    {" "}
                    {t(
                      `${
                        solutionTab == "For Traders"
                          ? "At Stockbanx, every feature is designed with traders in mind. Our platform okers a seamless and intuitive experience, making it easy for you to access diverse instruments—from stocks and forex to commodities and cryptocurrencies—on one user-friendly interface. We’re dedicated to providing precise, reliable services that cater to your unique trading needs."
                          : "Track your client activity, monitor commissions, and access insightful data to optimize your marketing efforts. Additionally, our dedicated support team is always available to answer your questions and provide assistance whenever you need it."
                      }`
                    )}{" "}
                  </div>
                  <div className="mt-6">
                    {/* <img
                      src={`/static/images/home/${
                        solutionTab == "For Traders" ? "portfolio" : "portal"
                      }.png`}
                      alt="banner"
                      className={classNames(
                        `${
                          solutionTab === "For Traders"
                            ? "portfolio"
                            : "portal-partner"
                        }`
                      )}
                    /> */}
                  </div>
                </div>
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
              className="w-full lg:w-full flex right-card flex-col lg:flex-row"
              transition={{ duration: 0.4 }}
            >
              <div className="lg:hidden relative mb-10  mt-10 portfolio-card  overflow-hidden  flex flex-col  pt-6 md:px-10 md:py-10 gap-4">
                <div className="px-6 md:px-0">
                  <p className="text-[24px] md:head-texts text-white md:font-semibold">
                    {t(
                      `${
                        solutionTab == "For Traders"
                          ? "User-Centric Trading Experience"
                          : "Dedicated Partner Portal"
                      }`
                    )}
                  </p>

                  <p className="text-[#A8ADBA] opacity-80 para-text font-400 mt-4">
                    {t(
                      `${
                        solutionTab == "For Traders"
                          ? "At Stockbanx, every feature is designed with traders in mind. Our platform okers a seamless and intuitive experience, making it easy for you to access diverse instruments—from stocks and forex to commodities and cryptocurrencies—on one user-friendly interface. We’re dedicated to providing precise, reliable services that cater to your unique trading needs."
                          : "Track your client activity, monitor commissions, and access insightful data to optimize your marketing efforts. Additionally, our dedicated support team is always available to answer your questions and provide assistance whenever you need it."
                      }`
                    )}{" "}
                  </p>
                </div>

                <div className="w-full mt-10">
                  {/* {solutionTab == "For Traders" ? (
                    <>
                      {" "}
                      <img src="/static/images/home/portfolio.png"></img>
                    </>
                  ) : (
                    <>
                      <img
                        className="portal-partner"
                        src="/static/images/home/portal.png"
                      ></img>
                    </>
                  )} */}
                </div>

                <div className="hidden md:flex absolute bottom-10 right-10">
                  <svg
                    width="68"
                    height="69"
                    viewBox="0 0 68 69"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_bddi_3473_9718)">
                      <rect
                        x="2"
                        y="2.93408"
                        width="64.0034"
                        height="64.0034"
                        rx="32"
                        fill="white"
                        fill-opacity="0.1"
                        shape-rendering="crispEdges"
                      />
                      <path
                        d="M24.916 35.15C24.916 34.9545 24.9875 34.7657 25.1173 34.6184C25.2472 34.4711 25.4265 34.3754 25.6222 34.3489L25.7328 34.3416H40.0913L34.9038 29.232C34.7576 29.0881 34.6718 28.8947 34.6637 28.6907C34.6556 28.4867 34.7257 28.2873 34.86 28.1324C34.9944 27.9775 35.1829 27.8786 35.3879 27.8556C35.5928 27.8326 35.799 27.8873 35.9649 28.0085L36.0571 28.087L42.6459 34.5734C42.6872 34.6141 42.724 34.659 42.7556 34.7075L42.7814 34.7513L42.8026 34.7905L42.8293 34.8507L42.8469 34.8973L42.8634 34.9584L42.8727 35.0013L42.8819 35.0661V35.1162V35.1783V35.2257V35.1473C42.882 35.1975 42.8773 35.2476 42.8681 35.2969L42.8653 35.3325C42.8598 35.3571 42.8524 35.3799 42.845 35.4037L42.8321 35.4392C42.8229 35.4639 42.8118 35.4867 42.8008 35.5095L42.7832 35.5423L42.751 35.5944L42.7252 35.6309L42.7178 35.64C42.6959 35.6683 42.6722 35.6951 42.6468 35.7203L36.0571 42.214C35.9109 42.3572 35.7155 42.4405 35.5099 42.4473C35.3043 42.4541 35.1037 42.3839 34.9481 42.2507C34.7926 42.1175 34.6935 41.9311 34.6708 41.7287C34.648 41.5264 34.7033 41.323 34.8255 41.1592L34.9047 41.068L40.0904 35.9584H25.7328C25.5162 35.9584 25.3084 35.8732 25.1553 35.7216C25.0021 35.57 24.916 35.3644 24.916 35.15Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_bddi_3473_9718"
                        x="-3"
                        y="-2.06592"
                        width="74.0034"
                        height="74.0034"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="2.5"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_3473_9718"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="1"
                          operator="dilate"
                          in="SourceAlpha"
                          result="effect2_dropShadow_3473_9718"
                        />
                        <feOffset />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_backgroundBlur_3473_9718"
                          result="effect2_dropShadow_3473_9718"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="2"
                          operator="dilate"
                          in="SourceAlpha"
                          result="effect3_dropShadow_3473_9718"
                        />
                        <feOffset />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect2_dropShadow_3473_9718"
                          result="effect3_dropShadow_3473_9718"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect3_dropShadow_3473_9718"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="0.5" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect4_innerShadow_3473_9718"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                className="w-full solution-card"
                style={{ marginBottom: "40px" }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex relative flex-col justify-center ">
                  <div className="flex flex-col md:flex-row justify-between w-full inner-container !pl-[24px] lg:!pl-[0px]">
                    <div className="flex flex-col ">
                      <div className="text-white leading-9 text-[24px] text-left ">
                        {" "}
                        {t(
                          `${
                            solutionTab == "For Traders"
                              ? "Secure and Hassle-Free Transactions"
                              : "Streamlined Payments"
                          }`
                        )}{" "}
                      </div>
                      <div className="md:leading-6 lg:w-[90%] opacity-80 para-text font-400 mt-6">
                        {" "}
                        {t(
                          `${
                            solutionTab == "For Traders"
                              ? "Your peace of mind is our priority. With secure payment options including credit cards, bank transfers, and trusted e-wallets, Stockbanx ensures that all your transactions are protected and convenient. We aim for a smooth and worry-free trading experience, so you can focus on the markets."
                              : "Enjoy the convenience of instant commission payments on qualifying activities, allowing you to access your earnings swiftly and reinvest them in your business growth."
                          }`
                        )}{" "}
                      </div>
                    </div>
                    <div className="w-full md:hidden flex justify-center items-center">
                      {/* <img
                        src={`/static/images/home/${
                          solutionTab == "For Traders"
                            ? "transaction"
                            : "stream-payment"
                        }.png`}
                        alt="banner"
                        className="w-[60%] mt-6"
                      /> */}
                    </div>
                    {/* <img
                      src={`/static/images/home/${
                        solutionTab == "For Traders"
                          ? "transaction"
                          : "stream-payment"
                      }.png`}
                      alt="banner"
                      className="card-bg-img hidden md:block"
                    /> */}
                  </div>
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
                className="w-full solution-card"
                transition={{ duration: 0.4 }}
              >
                <div className="flex relative flex-col justify-center ">
                  <div className="flex flex-col md:flex-row justify-between w-full inner-container">
                    <div className="flex flex-col ">
                      <div className="leading-9 text-[24px] text-start text-white ">
                        {" "}
                        {t(
                          `${
                            solutionTab == "For Traders"
                              ? "Instant and Efficient Trade Execution"
                              : "Lucrative Commission Structure"
                          }`
                        )}{" "}
                      </div>
                      <div className="md:leading-6  opacity-80 para-text font-400 mt-6">
                        {" "}
                        {t(
                          `${
                            solutionTab == "For Traders"
                              ? "Stay ahead with fast and precise execution that adapts to the pace of the market. Stockbanx empowers you to respond swiftly to changing conditions, allowing you to make informed decisions and capitalize on opportunities as they arise. Every trade is executed with ekiciency to help you achieve your trading goals."
                              : "Earn generous commissions on every successful trade your referred clients make. The more clients you bring in and the more they trade, the greater your earning potential."
                          }`
                        )}{" "}
                      </div>
                    </div>
                    <div className="w-full mt-6 md:hidden flex justify-center items-center">
                      {/* <img
                        src={`/static/images/home/${
                          solutionTab == "For Traders"
                            ? "execution"
                            : "commission"
                        }.png`}
                        alt="banner"
                        className="w-[60%]"
                      /> */}
                    </div>
                    {/* <img
                      src={`/static/images/home/${
                        solutionTab == "For Traders"
                          ? "execution"
                          : "commission"
                      }.png`}
                      alt="banner"
                      className="card-bg-img hidden md:block"
                    /> */}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute -right-[30rem] top-[20rem] lg:-right-[35rem] lg:-top-[20rem]">
        <img
          className="athelete-mask select-none"
          src="/static/images/about/atheletemask.png"
        ></img>
      </div>
    </div>
  );
};

export default SolutionSection;

