import React from "react";
import styles from "../../styles/landingPage.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Register from "../../components/form/Register";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Slider from "react-slick";
import "@splidejs/splide/dist/css/splide.min.css";
import Award from "@/components/Award";
import Head from "next/head";
import Language from "@/components/Language";
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

function Campaign() {
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    adaptiveHeight: true,
  };

  return (
    <>
      <Head>
        <script
          src="https://code.tidio.co/iwsj2wkksh0zqrtjvdhw5bleovqrynhn.js"
          async
        ></script>
        {/* <script
          defer
          id="convrs-webchat"
          src="https://webchat.conv.rs/12b8de18010ade19338d5e97776b890b6c92742c.js"
        ></script> */}
      </Head>
      <div
        className={styles.campaignlandingMain}
        style={{
          backgroundImage: `url('/static/images/landing-page/campaign-bg.jpg')`,
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingBottom: "4rem",
        }}
      >
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
              className="md:basis-3/6 w-full mt-6 xl:mt-0 lg:mt-0 md:mt-0"
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
                {t("Sail into 2024 - Your Cashback Voyage Begins Here!")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.8 }}
                className="text-white whitespace-pre-wrap mt-4 sm:w-full md:w-ful xl:w-9/12 lg:w-9/12 w-full md:text-center sm:text-center text-center lg:text-left xl:text-left text-sm md:text-base landing-right"
              >
                {t(
                  "Chart a course for success with the 2024 New Year's Cashback Campaign. Each trade on our Classic Accounts sets you on a thrilling cashback adventure. Navigate the markets and watch your earnings set sail to new heights!"
                )}
              </motion.p>
              <h1 className="intro-font text-white mt-10 text-xl md:text-center sm:text-center text-center lg:text-left xl:text-left landing-right">
                {" "}
                {t("30+ FX INDUSTRY AWARDS")}{" "}
              </h1>
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
              <div
                className="bg-white rounded-2xl p-4 border-4 border-[#3CF]"
                id="register"
              >
                <Register
                  title={t("Register Your Details")}
                  submitText={t("Submit")}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* why trading cpt */}
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
      {/* Stockbanx slider */}
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
          <Slider {...sliderSettings} className="new-campaign-slider">
            <motion.div className="slider-content-container">
              <div className="slider-content-left">
                <img
                  src="/static/images/landing-page/new-campaign/slide-1.png"
                  width={"100%"}
                  height={100}
                />
              </div>
              <div className="slider-content-right">
                <h1>{t("Unlock Your Earnings with Every Trade!")}</h1>
                <p>
                  {t(
                    "Gain cashback rewards for every lot traded, starting from the 5th and above. Our tiered structure ensures that the more you trade, the higher your cashback. With rewards up to $2.00 per lot, maximize your potential earnings in the new year."
                  )}
                </p>
              </div>
            </motion.div>
            <motion.div className="slider-content-container opposite">
              <div className="slider-content-left">
                <img
                  src="/static/images/landing-page/new-campaign/slide-2.png"
                  width={100}
                  height={100}
                />
              </div>
              <div className="slider-content-right">
                <h1>
                  {t("Why Choose the 2024 New Year's Cashback Campaign?")}
                </h1>
                <p>
                  <ul>
                    <li>
                      <p className="section-head">{t("Trades with Purpose")}</p>
                      <p className="section-body">
                        {t(
                          "Keep your trades open for a minimum of 3 minutes between opening and closing."
                        )}
                      </p>
                    </li>

                    <li>
                      <p className="section-head">{t("Weekly Payouts")}</p>
                      <p className="section-body">
                        {t(
                          "Receive your accumulated cashbacks every Wednesday for the lots traded the previous week."
                        )}
                      </p>
                    </li>

                    <li>
                      <p className="section-head">{t("Fresh Opportunities")}</p>
                      <p className="section-body">
                        {t(
                          "Accumulation of lots resets every Monday, offering a weekly chance to boost your cashback."
                        )}
                      </p>
                    </li>

                    <li>
                      <p className="section-head">
                        {t("Classic Accounts Exclusive")}
                      </p>
                      <p className="section-body">
                        {t(
                          "This campaign is applicable only to Classic Accounts."
                        )}
                      </p>
                    </li>
                  </ul>
                </p>
              </div>
            </motion.div>
            <motion.div className="slider-content-container">
              <div className="slider-content-left">
                <img
                  src="/static/images/landing-page/new-campaign/slide-3.png"
                  width={100}
                  height={100}
                />
              </div>
              <div className="slider-content-right">
                <h1>{t("Seize the Opportunity - Start Trading Today!")}</h1>
                <p>
                  {t(
                    "Don't miss out on this exclusive opportunity to amplify your trading success in 2024. Whether you're a seasoned trader or just starting, the 2024 New Year's Cashback Campaign is tailored for you. Open your Classic Account now and experience the rewards of trading with Stockbanx."
                  )}
                  <Link href={"#register"}>
                    <a className="slide-cta">Start Now</a>
                  </Link>
                </p>
              </div>
            </motion.div>
          </Slider>
        </motion.div>
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
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Campaign;

