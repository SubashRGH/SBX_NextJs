import React, { useState } from "react";
import styles from "../../../styles/landingPage.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Register from "../../../components/form/Register";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Slider from "react-slick";
import "@splidejs/splide/dist/css/splide.min.css";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import Language from "@/components/Language";
import { GetServerSideProps } from "next";
import Award from "@/components/Award";

declare global {
  interface Window {
    dataLayer: any[];
  }
}
const trading = [
  {
    title: "Advanced Platforms",
    description:
      "Trading platforms with user-friendly interfaces provide comprehensive tools for price analysis and technical analysis.",
    image: "/static/images/landing-page/advance.svg",
  },
  {
    title: "Flexibility",
    description:
      "Support tailored to your needs. Whenever you have a special request, we are happy to help.",
    image: "/static/images/landing-page/flex.svg",
  },
  {
    title: "Support",
    description:
      "Creative support and free marketing materials, including banners, business cards, newsletters, and promotional materials",
    image: "/static/images/landing-page/support.svg",
  },
  {
    title: "Innovation",
    description:
      "Cutting-edge and intuitive trading platform for on-the-go traders.",
    image: "/static/images/landing-page/innovation.svg",
  },
];
const NumberData = [
  {
    data: "350,000",
    title: "Clients Worldwide",
  },
  {
    data: "165,000",
    title: "Daily Executed Trades",
  },
  {
    data: "12+ years",
    title: "Experience In The Industry",
  },
];

const global = [
  {
    img: "/static/images/icons/africa.png",
    title: "AOFA",
    description:
      "Registration no. 2014 / 214730 / 07 and regulated by the Financial Sector Conduct Authority under license number 45954.",
  },
  {
    img: "/static/images/icons/uk.png",
    title: "FCA",
    description:
      "Registration number 6707165, NO.606110. Stockbanx U.K. Limited is an affiliated company of Stockbanx Limited.",
  },
  {
    img: "/static/images/icons/beliz.png",
    title: "IFSC",
    description:
      "Regulated by the Belize International Financial Services Commission under license number: No. IFSC000314/470",
  },
];

const classic = [
  {
    name: "Deposit",
    data: "$0",
  },

  {
    name: "Spreads",
    data: "From 1.5 PIP",
  },

  {
    name: "Stop Out",
    data: "30%",
  },
  ,
  {
    name: "Dedicated Account Manager",
    data: "No",
  },

  {
    name: "Max Leverage",
    data: "1:1000",
  },
  {
    name: "Margin Call",
    data: "50%",
  },

  {
    name: "Commission",
    data: "No",
  },
];

const pspList = [
  {
    imgUrl: "/static/images/landing-page/psp/grey/visa-card.png",
    hoverImage: "/static/images/landing-page/psp/color/visa.png",
  },
  {
    imgUrl: "/static/images/landing-page/psp/grey/master.png",
    hoverImage: "/static/images/landing-page/psp/color/master.png",
  },
  {
    imgUrl: "/static/images/landing-page/psp/grey/kora.png",
    hoverImage: "/static/images/landing-page/psp/color/kora.png",
  },
  {
    imgUrl: "/static/images/landing-page/psp/grey/skrl.png",
    hoverImage: "/static/images/landing-page/psp/color/skrill.png",
  },
  {
    imgUrl: "/static/images/landing-page/psp/grey/net.png",
    hoverImage: "/static/images/landing-page/psp/color/neteller.png",
  },
  {
    imgUrl: "/static/images/landing-page/psp/grey/pay.png",
    hoverImage: "/static/images/landing-page/psp/color/pay.png",
  },
  {
    imgUrl: "/static/images/landing-page/psp/grey/coinpayment.png",
    hoverImage: "/static/images/landing-page/psp/color/coinpayment.png",
  },
  {
    imgUrl: "/static/images/landing-page/psp/grey/fatoora.png",
    hoverImage: "/static/images/landing-page/psp/color/fatoora.png",
  },
  {
    imgUrl: "/static/images/landing-page/psp/grey/wire.png",
    hoverImage: "/static/images/landing-page/psp/color/wire.png",
  },
  {
    imgUrl: "/static/images/landing-page/psp/grey/triple.png",
    hoverImage: "/static/images/landing-page/psp/color/triple.png",
  },
  {
    imgUrl: "/static/images/landing-page/psp/grey/help.png",
    hoverImage: "/static/images/landing-page/psp/color/help.png",
  },
  {
    imgUrl: "/static/images/landing-page/psp/grey/bank.png",
    hoverImage: "/static/images/landing-page/psp/color/bank.png",
  },
];

const platfrom = [
  {
    title: "Stockbanx MetaTrader 4",
    description: "The popular, standard solution",
    image: "/static/images/landing-page/mt-4.png",
  },

  {
    title: "Stockbanx MetaTrader 5",
    description: "An all-in-one trading platform",
    image: "/static/images/landing-page/mt-5.png",
  },
  {
    title: "Stockbanx cTrader",
    description: "For experienced users, a feature-rich platform",
    image: "/static/images/landing-page/c-trader.png",
  },
];

const Campaign: React.FC = (props: any) => {
  const [openBonusModal, setOpenBonusModal] = useState(
    props.slug === "radiant"
  );
  const { t } = useTranslation("common");

  const scrollToTop = () => {
    const target: any = document.getElementById("register");
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    // window.scrollTo({ top: 20, behavior: 'smooth' })
  };

  // useEffect(() => {
  //   if (
  //     typeof window !== "undefined" &&
  //     props?.slug &&
  //     props.slug === "pinnacle"
  //   ) {
  //     const gtag = (...args: any) => {
  //       window.dataLayer = window.dataLayer || [];
  //       window.dataLayer.push(args);
  //     };

  //     // Create the script tag
  //     const script = document.createElement("script");
  //     script.async = true;
  //     script.src = "https://www.googletagmanager.com/gtag/js?id=DC-14055034";

  //     // Event listener to initialize gtag after the script loads
  //     script.onload = () => {
  //       gtag("js", new Date());
  //       gtag("config", "DC-14055034");
  //     };

  //     // Append the script to the body
  //     document.body.appendChild(script);
  //   }
  // }, [props?.slug]);

  const bannerPoints = [
    { text: "Various promotional programs", isBold: false },
    { text: "Fast deposits and withdrawals 24/5", isBold: false },
    { text: "Best trading experience with MT4 & MT5", isBold: false },
    { text: "Margin requirement as low as 0.2%", isBold: true },
    { text: "Over 30 FX INDUSTRY AWARDS", isBold: false },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
          autoplay: true,
        },
      },

      {
        breakpoint: 770,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          speed: 300,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          speed: 300,
          dots: false,
          centerMode: true,
          centerPadding: "80px",
        },
      },
    ],
  };
  return (
    <>
      {/* <Head>
        {props?.slug && props?.slug !== "radiant" && (
          <>
            <script
              src="https://code.tidio.co/iwsj2wkksh0zqrtjvdhw5bleovqrynhn.js"
              async
            ></script>
          </>
        )}
        <script
          defer
          id="convrs-webchat"
          src="https://webchat.conv.rs/12b8de18010ade19338d5e97776b890b6c92742c.js"
        ></script>
      </Head> */}
      <div
        className={styles.goldlandingMain}
        style={{
          backgroundImage: `url('/static/images/landing-page/vncampaign/gold-page-bg.png')`,
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingBottom: "4rem",
        }}
      >
        {/* {props?.slug && props?.slug === "pinnacle" && (
          <img
            src="https://biz-ad.vnative.net/pixel?adid=65a13028bbf77757901a611f"
            width={0}
            height={0}
          />
        )}
        {props?.slug && props?.slug === "radiant" && (
          <>
            <Script id="facebook-pixel-script" strategy="afterInteractive">
              {`!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1459117581348604'); 
              fbq('track', 'PageView');`}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src="https://www.facebook.com/tr?id=1459117581348604&ev=PageView&noscript=1"
              />
            </noscript>
          </>
        )} */}
        <div className="stkbnx-container mx-auto md:py-10 xl:py-10 lg:py-10 py-4">
          {/* logo start here */}
          <div className="logo flex justify-between items-center relative">
            <Link href="/">
              <Image
                src="/static/images/landing-page/stkbnx-logo.png"
                width={110}
                height={48}
                alt="stkbnx-logo"
              />
            </Link>
            {/* <div className={styles.landinglang}>
              <Language
                iconClass="fill-[#fff]"
                flagImg="/static/images/icons/flag-white.svg"
              />
            </div> */}
          </div>
          {/* left part and form here */}
          <div className="flex sm:flex-col md:flex-col lg:flex-row flex-col justify-between items-center lg:space-x-10 xl:space-x-10 trade-register">
            <motion.div
              initial="hidden"
              whileInView="visible"
              className="md:basis-3/6 w-full mt-6"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.5 }}
                className="md:text-center sm:text-center text-center lg:text-left xl:text-left text-3xl md:text-[40px] intro-font text-white md:!leading-[3.2rem] xl:!leading-[3.2rem] lg:!leading-[3.2rem] !leading-[2.6rem] whitespace-pre-wrap break-words md:w-11/12 xl:w-11/12 lg:w-11/12 landing-right landing-head"
              >
                {t("GOLD PRICE could reach $3000 peak in 2024")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.8 }}
                className="text-white whitespace-pre-wrap mt-4 sm:w-full md:w-ful xl:w-9/12 lg:w-9/12 w-full md:text-center sm:text-center text-center lg:text-left xl:text-left text-sm md:text-base landing-right"
              >
                {t(
                  "Are you ready to seize the opportunity with Stockbanx - a reliable broker with 14 years in the market?"
                )}
              </motion.p>
              <p className="text-white mt-10 md:text-center sm:text-center text-center lg:text-left xl:text-left landing-right text-xl">
                {bannerPoints.map((point) => (
                  <p key={point.text} className="font-thin ">
                    -{" "}
                    {point.isBold ? (
                      <b className="font-bold">{t(point.text)}</b>
                    ) : (
                      t(point.text)
                    )}
                  </p>
                ))}
              </p>
              <div className="flex items-center flex-row lg:space-x-4 xl:space-x-4 mt-4 justify-center sm:justify-start md:justify-center xl:justify-start lg:justify-start">
                <div>
                  <Image
                    alt="leader"
                    src="/static/images/reward/award-3.png"
                    width="100"
                    height="100"
                    objectFit="contain"
                  />
                </div>
                <div>
                  <Image
                    alt="leader"
                    src="/static/images/reward/award-4.png"
                    width="100"
                    height="100"
                    objectFit="contain"
                  />
                </div>
                <div>
                  <Image
                    alt="leader"
                    src="/static/images/reward/fx-dubai.png"
                    width="100"
                    height="100"
                    objectFit="contain"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              id="register"
              initial="hidden"
              whileInView="visible"
              className="md:basis-2/5 w-full md:w-8/12 sm:w-9/12 mt-6 xl:mt-0 lg:mt-0 md:mt-0"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 1.3 }}
            >
              <div className="bg-white rounded-2xl p-4 border-4 border-[#3CF]">
                <Register
                  title={t("Register Your Details")}
                  submitText={t("Submit")}
                  slug={props?.slug}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* why trading cpt */}
      <img
        src="https://gmg-media.o18.click/p?o=20913412&m=2037&t=i"
        width="0px"
        height="0px"
      />
      <div className="stkbnx-container md:py-10 xl:py-32 lg:py-32 py-4 md:mt-0 xl:mt-0 lg:mt-0">
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
          <div className="stkbnx-heading !text-center mb-2">
            {t("Why Trading With Stockbanx?")}
          </div>{" "}
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
          <p className="text-base read-font text-center mb-10 m-auto">
            {t(
              "Discover thousands of CFDs on the world’s most popular financial instruments and get the best of our swap free trading"
            )}
          </p>{" "}
        </motion.div>
        <div className="flex sm:flex-row lg:flex-row md:flex-wrap lg:flex-nowrap	xl:flex-nowrap lg:space-x-8 xl:space-x-8 flex-col justify-between xl:items-center lg:items-center mt-10 trade-heading">
          {trading.length > 0 &&
            trading.map((item: any, i: any) => {
              return (
                <div
                  className="xl:basis-1/4 lg:basis-1/4 md:basis-[48%] md:mb-8"
                  key={i}
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
                    <div className="partner-box">
                      <Image
                        src={item.image}
                        alt="rebate"
                        width={80}
                        height={77}
                      />
                      <h1 className="text-xl mb-3 mt-3">{t(item.title)}</h1>
                      <p className="text-sm font-color opacity-60">
                        {t(item.description)}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
        </div>
      </div>
      {/* numbers start */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 8,
            ease: "linear",
          },
        }}
        className="mb-whycpt w-full lg:h-[270px] xl:h-[270px] md:h-[270px] bg-[url('/static/images/home/why_cpt_marekets.png')] bg-no-repeat bg-cover bg-scroll bg-center lg:my-0 xl:my-0 md:my-0 sm:my-0 my-10"
      >
        <div className="stkbnx-container md:py-20 xl:py-20 lg:py-20 py-4">
          <div className="flex sm:flex-row lg:flex-row lg:space-x-8 md:space-x-8 xl:space-x-8 flex-col justify-between items-center">
            {NumberData.length > 0 &&
              NumberData.map((item: any, i: any) => {
                return (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="mb-5 mt-6 xl:mb-0 md:mb-5 lg:mb-0 lg:mt-0 xl:mt-0 md:mt-4"
                    viewport={{ once: true }}
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 1 },
                    }}
                    transition={{ duration: 0.5 + i / 10 }}
                  >
                    <p className="text-white md:text-3xl lg:text-5xl xl:text-5xl text-[2rem] font-semibold mb-3 text-center">
                      {item.data}
                    </p>
                    <p className="client-color md:text-lg xl:text-lg lg:text-lg text-[1rem] text-center">
                      {t(item.title)}
                    </p>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </motion.div>
      {/* Stockbanx stand out */}
      <div className="stkbnx-container mx-auto md:py-10 xl:py-32 lg:py-32 py-4">
        <div className="flex sm:flex-col lg:flex-row flex-col justify-between items-center">
          <div className="md:basis-2/5 lg:mt-0 xl:mt-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="stkbnx-heading mb-5 leading-7 txt-center">
                {" "}
                {t("Why Stockbanx Stands Out")}
              </div>
              <p className="text-base read-font mb-4">
                {t(
                  "Discover why traders worldwide choose Stockbanx for their online trading journey. Here's what sets us apart:"
                )}
              </p>
              <div className="mb-4">
                <p> {t("Intuitive Platform")} </p>
                <p className="text-base read-font">
                  {" "}
                  {t(
                    "Trade without commission fees, keeping your costs low"
                  )}{" "}
                </p>
              </div>
              <div className="mb-4">
                <p> {t("Zero Commission")} </p>
                <p className="text-base read-font">
                  {" "}
                  {t("Trade with ease on our user-friendly platform.:")}{" "}
                </p>
              </div>
              <div className="mb-4">
                <p> {t("Competitive Spreads")} </p>
                <p className="text-base read-font">
                  {" "}
                  {t(
                    "Enjoy tight spreads that maximize your profit potential."
                  )}{" "}
                </p>
              </div>
              <p className="text-base read-font">
                {" "}
                {t("Join Stockbanx for a superior trading experience.")}{" "}
              </p>
              <div className="flex justify-center sm:justify-center md:justify-center xl:justify-start lg:justify-start">
                <button
                  className="rounded-full cmn-btn bg-primary mt-7 trade-btn"
                  onClick={scrollToTop}
                >
                  {t("Open Account")}
                </button>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 1 }}
            className="xl:basis-[55%] lg:basis-[55%] xl:w-full lg:w-full mt-14 xl:mt-0 lg:mt-0 md:mt-10 relative candle"
          >
            <Image
              alt="leader"
              src="/static/images/landing-page/why-trade.jpg"
              width="680"
              height="450"
              objectFit="fill"
              className="rounded-[20px]"
            />
          </motion.div>
        </div>
      </div>
      {/* license cpt */}
      <div className="stkbnx-container">
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
          <div className="stkbnx-heading !text-center mb-2">
            {t("Global Regulatory Compliance and Licensing")}
          </div>{" "}
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
        ></motion.div>
        <div className="flex sm:flex-col lg:flex-row lg:space-x-8 xl:space-x-8 sm:space-x-0 flex-col justify-between items-center mt-10 trade-heading">
          {global.length > 0 &&
            global.map((item: any, i: any) => {
              return (
                <div
                  className="md:basis-1/3 md:w-3/6 w-full gb-box mb-8"
                  key={i}
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
                    <div className="full-bg rounded-2xl	border border-solid	 border-[#00b144] text-center bg-white px-10 py-8">
                      <Image src={item.img} alt="flag" width={40} height={40} />
                      <h1 className="text-xl mb-3 mt-3 meri-font">
                        {t(item.title)}
                      </h1>
                      <p className="text-sm font-color opacity-60">
                        {t(item.description)}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
        </div>
      </div>
      {/* trading cpt */}
      <div className="stkbnx-container mx-auto md:py-10 xl:py-32 lg:py-32 py-4">
        <div className="flex sm:flex-col lg:flex-row flex-col justify-between items-center">
          <div className="md:basis-2/5 lg:mt-0 xl:mt-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="stkbnx-heading mb-5 leading-7">
                {" "}
                {t("Choose Your Trading Adventure")}
              </div>
              <p className="text-base read-font mb-4 text-justify">
                {t(
                  "With over 14 years of excellence and innovation, we open the door to top-notch access to financial markets through our advanced execution model. Unveil the exciting realm of online trading with leveraged products spanning hundreds of instruments across various asset classes."
                )}
              </p>
              <p className="text-base read-font mb-4 text-justify">
                {t(
                  "Select Your Perfect Account and Begin Your Trading JourneyNot sure which account suits you best? Explore our diverse range of accounts, including ECN, Classic, and Prime, and embark on a personalized trading adventure. Discover the perfect fit for your trading aspirations today!"
                )}
              </p>
              <div className="flex justify-center sm:justify-center md:justify-center xl:justify-start lg:justify-start">
                <button
                  className="rounded-full cmn-btn bg-primary mt-7 lg:mb-0 md:mb-0 xl:mb-0 mb-5 trade-btn"
                  onClick={scrollToTop}
                >
                  {t("Open Account")}
                </button>
              </div>
            </motion.div>
          </div>
          <div className="xl:basis-2/5 lg:basis-2/5	xl:w-full lg:w-full md:w-4/6 w-full mt-14 xl:mt-0 lg:mt-0 md:mt-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 1 }}
              className="rounded-2xl	border-2 border-solid	 border-[#E2E6EE] bg-[#F9FAFB] p-4"
            >
              <div className="meri-font bg-[#F1F3F9] rounded-full text-center py-4 flex justify-center items-center">
                <Image
                  alt="leader"
                  src="/static/images/landing-page/line.svg"
                  width="19"
                  height="30"
                  objectFit="fill"
                />
                <span className="ml-2">Classic</span>
              </div>
              <div className="classic-content my-3 px-4">
                <ul>
                  {classic.length > 0 &&
                    classic.map((item: any, i: any) => {
                      return (
                        <li key={i}>
                          <p className="flex items-center">
                            {" "}
                            <span> {t(item.name)} </span>{" "}
                            <span>
                              {" "}
                              <InformationCircleIcon className="ml-1 h-5 w-5 text-[#989eb0]" />
                            </span>{" "}
                          </p>
                          <p> {item.data} </p>{" "}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* payments methods */}
      <div className="stkbnx-container py-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="stkbnx-heading !text-center mb-2"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 1 },
          }}
          transition={{ duration: 0.4 }}
        >
          {t("Payment Methods")}
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
          <p className="text-base read-font text-center mb-8 m-auto">
            {t("Secure, Swift, and Seamless: Your Trustworthy Payment Gateway")}
          </p>
        </motion.div>
        <Slider {...settings}>
          {pspList &&
            pspList?.map((item: any, i: any) => {
              return (
                <div className="gray-scale" key={i}>
                  <Image alt="psp" src={item.imgUrl} width="120" height="50" />
                </div>
              );
            })}
        </Slider>
      </div>
      {/* trading platform */}
      <div className="stkbnx-container md:py-20 xl:py-20 lg:py-20 py-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="stkbnx-heading !text-center mb-2"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 1 },
          }}
          transition={{ duration: 0.4 }}
        >
          {t("The Most Intuitive, User-Friendly Trading Platforms")}
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
          <p className="text-base read-font text-center mb-6 m-auto">
            {t(
              "Stockbanx understands that every client has different needs. Our platforms are all trusted, award-winning, so you can choose what works best for you."
            )}
          </p>{" "}
        </motion.div>
        <div className="flex sm:flex-row lg:flex-row lg:space-x-8 md:space-x-8 xl:space-x-8 flex-col justify-between xl:items-center lg:items-center mt-5 trade-heading">
          {platfrom.length > 0 &&
            platfrom.map((item: any, i: any) => {
              return (
                <div className="md:basis-1/3 mb-6" key={i}>
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
                    <div className="text-center rounded-2xl bg-[#F8F9FC] py-8 md:min-h-[230px]">
                      <Image
                        src={item.image}
                        alt="platform"
                        width={80}
                        height={77}
                      />
                      <h1 className="text-xl mb-1 mt-3 meri-font font-extrabold">
                        {item.title}
                      </h1>
                      <p className="text-sm font-color opacity-60">
                        {t(item.description)}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
        </div>
        <div className="flex justify-center">
          <button
            className="rounded-full cmn-btn bg-primary mt-7 lg:mb-0 md:mb-0 xl:mb-0 mb-5 trade-btn"
            onClick={scrollToTop}
          >
            {t("Open Account")}
          </button>
        </div>
      </div>
      {/* award section */}
      {/* <div className="py-4">
        <Award />
      </div> */}
      {/* footer section here  */}
      <div className="md:pt-20 xl:pt-20 lg:pt-20 pt-4">
        <div className="bg-[#1c2026]">
          <div className="stkbnx-container py-10">
            <div className="disc">
              <p className="text-xs mb-4 risk-color !font-bold">
                {" "}
                {t("Disclaimer")}:{" "}
              </p>
              <p className="text-xs mb-4 risk-color">
                {" "}
                {t("DisclaimerFirst")}{" "}
              </p>
              <p className="text-xs mb-4 risk-color">
                {" "}
                {t("DisclaimerThird")}{" "}
              </p>
              <p
                className="text-xs mb-4 risk-color"
                dangerouslySetInnerHTML={{
                  __html: t("DisclaimerFour", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              />
              <p
                className="text-xs mb-4 risk-color"
                dangerouslySetInnerHTML={{
                  __html: t("DisclaimerSix", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              />
              <p
                className="text-xs mb-4 risk-color"
                dangerouslySetInnerHTML={{
                  __html: t("DisclaimerEight", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              />
              <p
                className="text-xs mb-4 risk-color"
                dangerouslySetInnerHTML={{
                  __html: t(
                    "* It came to our attention that fraudulent websites are using our Company's Logo and/or Name. We advise our clients that the official domains of Stockbanx can be found ONLY on this website.",
                    {
                      interpolation: { escapeValue: false },
                    }
                  ),
                }}
              />
            </div>
            <div className="flex flex-col sm:flex lg:flex-row md:flex-row xl:flex-row justify-between items-center">
              <p className="text-xs risk-color mt-4">
                {" "}
                Copyright © 2023 Stockbanx{" "}
              </p>
              <div className="flex items-center mt-3">
                <a href="/" target="_blank">
                  <span className="mr-5">
                    <Image
                      src="/static/images/icons/linkedin.svg"
                      alt="linkedin"
                      width={17}
                      height={17}
                    />
                  </span>
                </a>
                <a href="https://www.facebook.com/cptsocial/" target="_blank">
                  <span className="mr-5">
                    <Image
                      src="/static/images/icons/facebook.svg"
                      alt="facebook"
                      width={17}
                      height={17}
                    />
                  </span>
                </a>
                <a href="/" target="_blank">
                  <span className="mr-5">
                    <Image
                      src="/static/images/icons/twitter.svg"
                      alt="twitter"
                      width={17}
                      height={17}
                    />
                  </span>
                </a>
                <a href="/" target="_blank">
                  <span className="mr-5">
                    <Image
                      src="/static/images/icons/instagram.svg"
                      alt="instagram"
                      width={17}
                      height={17}
                    />
                  </span>
                </a>
                <a href="https://www.youtube.com/@CPTMarkets" target="_blank">
                  <span className="mr-5">
                    <Image
                      src="/static/images/landing-page/youtube.png"
                      alt="instagram"
                      width={17}
                      height={17}
                    />
                  </span>
                </a>
                <a href="https://www.tiktok.com/@cpt.markets" target="_blank">
                  <span>
                    <Image
                      src="/static/images/landing-page/tiktok.png"
                      alt="instagram"
                      width={17}
                      height={17}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(String(locale), ["common"])),
    },
  };
};

export default Campaign;

