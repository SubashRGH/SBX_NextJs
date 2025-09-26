import React, { useEffect, useState } from "react";
import Image from "next/image";
import bg from "../assets/images/register.jpg";
import { motion } from "framer-motion";
import Psp from "../../components/Psp";
import Slider from "react-slick";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, NextPage } from "next";
import { changeLang } from "../../utils/utils";
import Head from "next/head";
import RegisterButton from "../../components/button/RegisterButton";
import BannerMain from "@/components/BannerMain";
import TradeBeginning from "@/components/TradeBeginning";
import MissionVission from "@/components/MissionVission";
import Accordian from "@/components/Accordian/Accordian";
import MoneyPeriod from "./AboutComponents/MoneyPeriod";
import Link from "next/link";
import Container from "@/components/Container";
import PageBannerHeader from "@/components/PageBannerHeader";
import Icon from "@/components/Icon";

type Props = {
  location: any;
};
const WhoWeAre: NextPage<Props> = ({ location }) => {
  const { t } = useTranslation("common");
  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
  };

  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setCountry(data);
  }, []);

  return (
    <div>
      <div>
        <Head>
          <title>Online Trading | Trading Brokers | Stockbanx</title>
          <meta
            name="description"
            content="Step into the future of online trading with Stockbanx. Our expert trading brokers provide exceptional services that set new benchmarks for your success."
            key="Online Trading | Trading Brokers"
          />
        </Head>
      </div>
      <Container className="!pb-0 !pt-0">
        <PageBannerHeader>
          <h1 className="text-[40px] font-[500] z-10 text-center leading-10">
            Get to <span className="text-turquoise">know</span> Stockbanx Unlock
          </h1>
          <p className="text-[18px] font-[300] text-[#B0B4C1] mt-4 z-10 text-center">
            At Stockbanx, we do more than offer trading solutions - we create
            opportunities that empower you to navigate the financial markets
            with greater efficiency and confidence.
          </p>
          <div className="mt-4 z-10">
            <Link href="https://live.stockbanx.com/agent/signup/">
              <a className="inline-flex items-center justify-center w-56 bg-[#00B144] text-white text-[16px] font-normal px-4 py-4 rounded-full  hover:bg-[#009e3e] transition duration-200 gap-2 hover:scale-105 ">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
        </PageBannerHeader>
      </Container>
      <div className="stkbnx-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-[150px]">
          <div
            className="false false w-full flex p-8 flex-col gap-5 flex-1 items-start rounded-[32px] bg-[rgba(0,0,0,0.2)] transition-transform duration-800 card-slide-in"
            id="Who We Are?"
          >
            <div className="flex flex-col items-start gap-5">
              <Icon src="/static/images/icons/whoWeAre.svg" />

              <div>
                <h3 className="text-[#F6F7FF] text-[18px] font-medium leading-[25.2px]">
                  Who We Are?
                </h3>
                <p className="text-[#00B144] text-[18px] font-medium leading-[25.2px]"></p>
              </div>
            </div>
            <div className="mt-auto">
              <div className="text-[#F6F7FF] text-[15px] font-normal leading-[21px]">
                Stockbanx connects traders to global financial markets through
                leveraged trading opportunities in Forex, stocks, commodities,
                and cryptocurrencies. <br />
                <br /> Our platform empowers traders with secure and innovative
                tools designed to support financial growth. <br /> <br /> With a
                commitment to fund safety and exceptional support, Stockbanx is
                the trusted choice for those seeking a reliable and rewarding
                trading experience.
              </div>
            </div>
          </div>
          <div
            className="false false w-full flex p-8 flex-col gap-5 flex-1 items-start rounded-[32px] bg-[rgba(0,0,0,0.2)] transition-transform duration-800 card-slide-in"
            id="A Commitment to Your Trading Journey"
          >
            <div className="flex flex-col items-start gap-5">
              <Icon src="/static/images/icons/commitment.svg" />

              <div>
                <h3 className="text-[#F6F7FF] text-[18px] font-medium leading-[25.2px]">
                  A Commitment to Your Trading Journey
                </h3>
                <p className="text-[#00B144] text-[18px] font-medium leading-[25.2px]"></p>
              </div>
            </div>
            <div className="mt-auto">
              <div className="text-[#F6F7FF] text-[15px] font-normal leading-[21px]">
                At Stockbanx, we are dedicated to creating an environment where
                traders can thrive. Our platform is built to support your
                growth, offering advanced tools, valuable insights, and
                continuous support to help you reach your financial goals.{" "}
                <br />
                <br /> We believe in empowering traders with the freedom and
                resources to shape their own futures, and we stand by your side
                every step of the way as a true partner in your journey toward
                trading success.
              </div>
            </div>
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
          transition={{ duration: 0.4 }}
        >
          {/* desk and tab globe */}
          <div className="w-full stkbnx-container hidden md:block relative">
            <div className="w-full relative">
              {/* <div className="absolute group  flex flex-col  justify-center left-[53%] top-[64%]">
                <div className="hidden  group-hover:block transition-all ease-linear duration-300 relative w-full h-full">
                  <div className="absolute top-[-6rem] left-[-2.4rem] h-[90px] w-[90px]">
                    <img
                      src="/static/images/about/southafrica.png"
                      className="h-full w-full"
                    ></img>
                  </div>
                </div>
                <div className="rounded-[50%] circle-border  transition-all duration-300 ease  bg-[#00b144E5] h-[15px] w-[15px]"></div>
              </div>

              <div className="absolute group  flex flex-col  justify-center left-[58%] top-[52%]">
                <div className="hidden  group-hover:block transition-all ease-linear duration-300 relative w-full h-full">
                  <div className="absolute top-[-6rem] left-[-2.4rem] h-[90px] w-[90px]">
                    <img
                      src="/static/images/about/dubai.png"
                      className="h-full w-full"
                    ></img>
                  </div>
                </div>
                <div className="rounded-[50%] circle-border  transition-all duration-300 ease  bg-[#00b144E5] h-[15px] w-[15px]"></div>
              </div>

              <div className="absolute group  flex flex-col  justify-center left-[69%] top-[65%]">
                <div className="hidden  group-hover:block transition-all ease-linear duration-300 relative w-full h-full">
                  <div className="absolute top-[-6rem] left-[-2.4rem] h-[90px] w-[90px]">
                    <img
                      src="/static/images/about/malaysia.png"
                      className="h-full w-full"
                    ></img>
                  </div>
                </div>
                <div className="rounded-[50%] circle-border  transition-all duration-300 ease  bg-[#00b144E5] h-[15px] w-[15px]"></div>
              </div>

              <div className="absolute group  flex flex-col  justify-center left-[69.5%] top-[58%]">
                <div className="hidden  group-hover:block transition-all ease-linear duration-300 relative w-full h-full">
                  <div className="absolute top-[-6rem] left-[-2.4rem] h-[90px] w-[90px]">
                    <img
                      src="/static/images/about/thailand.png"
                      className="h-full w-full"
                    ></img>
                  </div>
                </div>
                <div className="rounded-[50%] circle-border  transition-all duration-300 ease  bg-[#00b144E5] h-[15px] w-[15px]"></div>
              </div>

              <div className="absolute group  flex flex-col  justify-center left-[72.5%] top-[54%]">
                <div className="hidden  group-hover:block transition-all ease-linear duration-300 relative w-full h-full">
                  <div className="absolute top-[-6rem] left-[-2.4rem] h-[90px] w-[90px]">
                    <img
                      src="/static/images/about/Vietnam.png"
                      className="h-full w-full"
                    ></img>
                  </div>
                </div>
                <div className="rounded-[50%] circle-border  transition-all duration-300 ease  bg-[#00b144E5] h-[15px] w-[15px]"></div>
              </div>

              <div className="absolute group  flex flex-col  justify-center left-[73%] top-[60%]">
                <div className="hidden  group-hover:block transition-all ease-linear duration-300 relative w-full h-full">
                  <div className="absolute top-[-6rem] left-[-2.4rem] h-[90px] w-[90px]">
                    <img
                      src="/static/images/about/china.png"
                      className="h-full w-full"
                    ></img>
                  </div>
                </div>
                <div className="rounded-[50%] circle-border  transition-all duration-300 ease  bg-[#00b144E5] h-[15px] w-[15px]"></div>
              </div>

              <div className="absolute group  flex flex-col  justify-center left-[74%] top-[64%]">
                <div className="rounded-[50%] point circle-border  transition-all duration-300 ease  bg-[#00b144E5] h-[15px] w-[15px]"></div>

                <div className="flag transition-all ease-linear duration-300 relative ">
                  <div className="absolute top-[-7rem] left-[-2.4rem] h-[90px] w-[90px]">
                    <img
                      src="/static/images/about/taiwan.png"
                      className="h-full w-full"
                    ></img>
                  </div>
                </div>
              </div>

              <div className="absolute group  flex flex-col  justify-center left-[73.5%] top-[67.5%]">
                <div className="rounded-[50%] point circle-border  transition-all duration-300 ease  bg-[#00b144E5] h-[15px] w-[15px]"></div>
                <div className="flag transition-all ease-linear duration-300 relative w-full h-full">
                  <div className="absolute top-[-7rem] left-[-2.4rem] h-[90px] w-[90px]">
                    <img
                      src="/static/images/about/philippines.png"
                      className="h-full w-full"
                    ></img>
                  </div>
                </div>
              </div> */}

              <div className="w-full h-full mb-[40px]">
                <img
                  src="/static/images/icons/bg-wave.svg"
                  className="w-full h-full"
                ></img>
              </div>
            </div>

            {/* <div className="flex w-full items-center justify-start">
              <div className="gradient-globe-border w-1/2 h-1"></div>
            
              <div className="gradient-gloe-border2 w-1/2 h-1"></div>
            </div> */}
          </div>

          {/* phone globe */}
        </motion.div>
        <div className="mt-[20px]">
          <div className="text-left lg:w-[70%] text-[#00b144] mb-5 ">
            About Us
          </div>
          <p className="text-[40px] font-[500] max-w-[500px]">
            {t("Your guided steps into trading")}
          </p>
          <MissionVission />
        </div>
      </div>
      <div className="flex flex-row stkbnx-container mx-auto mt-[160px]">
        <div className="">
          <img src="/static/images/icons/about-us-3.webp" alt="" className="" />
        </div>
        <div>
          <div className="my-14  mx-auto">
            <div className="++"></div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="text-left lg:w-[70%] text-[#00b144] mb-5 ">
                Contact Us
              </div>
              <div className="stkbnx-heading text-left lg:w-[70%] text-white mb-5 ">
                {t("We'd Love to Hear from You")}{" "}
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
              transition={{ duration: 0.6 }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p className=" WhyCpt-text lg:w-[70%] text-left text-base text-white">
                  {t(
                    "Our support team is available 24/5, offering assistance in multiple languages to help you wherever you are."
                  )}
                </p>
              </div>
              <div className="flex justify-end">
                <button className="rounded-full cmn-btn bg-primary mt-7 inline-flex items-center justify-center w-56 text-white text-[16px] font-normal px-4 !py-4 hover:bg-[#009e3e] transition duration-200 gap-2 hover:scale-105 ">
                  <Link
                    href={`/about/contact#connect-with-us`}
                    className="flex"
                  >
                    <a className="!flex w-full items-center justify-center gap-2">
                      <span>{t("Contact now")}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="lg:px-[6rem] px-6 flex lg:flex-row flex-col w-full py-10 m-rewards relative">
        <div className="stkbnx-container flex  flex-col mx-auto w-full">
          <div className=" flex  justify-center lg:justify-start flex-col w-full">
            <div className="w-full flex justify-center flex-col lg:justify-start items-center lg:items-start lg:text-left text-center mt-[150px]">
              <p className="sbTextH2">{t("Our Licenses")}</p>
              <p className="sbTextH2">{t("AOFA-Stockbanx")}</p>
              <p className="sbTextGray-p mt-4">
                Stockbanx is licensed as an International Brokerage and Clearing
                House and is regulated by The Anjouan OMshore Finance Authority
                (AOFA), providing you with a reliable and compliant trading
                environment.
              </p>
              {/* <p className="text-[#A8ADBA] w-[80%] lg:mb-0 lg:w-full mb-10 font-normal text-lg mt-6">
                {t(
                  "To ensure your security, privacy, and peace of mind, Stockbanx is regulated by respected international authorities."
                )}
              </p> */}
            </div>
          </div>
          {/* <div className="w-full">
            <Accordian />
          </div> */}
        </div>
      </div>
      <div className="stkbnx-container mx-auto ">
        <MoneyPeriod />
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default WhoWeAre;

