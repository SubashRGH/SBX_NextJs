import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Bonus from "./bonus";
import DynamicFaq from "@/components/faq/DynamicFaq";
import Terms from "./terms";
import Award from "@/components/Award";
import { Faqs } from "@/components/ClientProtection/Faq";
import Language from "@/components/Language";

function Campaign() {
  const { t } = useTranslation("common");
  const [activeContent, setActiveContent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [initialStep, setInitialStep] = useState(1);
  const handleButtonClick = (content: number, type: string) => {
    setActiveContent(content);
    setUserType(type);
    console.log("typeeee" + type);
  };
  const contentOptions = [
    {
      title: t("How to trade leveraged products on commodities"),
      forexTitle: t(
        "Go to the Commodities section and choose your favorite instrument"
      ),
      buttonText: t("Open Account"),
      stepsList: [
        {
          title: "Step 1",
          subTitle: "Open an Account",
          description: "Sign up and verify your new trading account.",
        },
        {
          title: "Step 2",
          subTitle: "Apply",
          description:
            "Apply for the promotion. Our Support team or Relations Manager will contact you shortly.",
        },
        {
          title: "Step 3",
          subTitle: "Deposit funds",
          description: "Deposit your first funds and claim your bonus.",
        },
      ],
    },
    {
      title: t("How to get started with Forex trading"),
      forexTitle: t("Choose your currency pair and analyze the market"),
      buttonText: "Apply Now",
      stepsList: [
        {
          title: "Step 1",
          subTitle: "Login",
          description:
            "Login in to your account and make sure your account is verified",
        },
        {
          title: "Step 2",
          subTitle: "Apply",
          description:
            "Apply for the promotion. Our Support team or Relations Manager will contact you shortly.",
        },
        {
          title: "Step 3",
          subTitle: "Deposit funds",
          description: "Deposit your first funds and claim your bonus.",
        },
      ],
    },
  ];

  const LIST = [
    {
      faq_q: "Is Stockbanx regulated?",
      faq_a:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.",
    },
    {
      faq_q: "Can I withdraw funds to an account that is not my own?",
      faq_a:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.",
    },
    {
      faq_q: "What payment accounts can I use to deposit and withdraw?",
      faq_a:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.",
    },
    {
      faq_q: "Can I withdraw money from a demo account?",
      faq_a:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.",
    },
  ];

  const openModal = (step = 1) => {
    // setUserType("new-user");
    setInitialStep(step);
    setShowModal(true);
    // setTimeout(() => {
    //   const modal = document.getElementById('modal');
    //   modal?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // }, 100);
  };

  const closeModal = () => {
    setUserType("new-user");
    setShowModal(false);
  };
  const [userType, setUserType] = useState("new-user");
  const updateUserType = (newType: string) => {
    setUserType(newType);
  };
  return (
    <>
      <Head>
        <script
          src="https://code.tidio.co/iwsj2wkksh0zqrtjvdhw5bleovqrynhn.js"
          async
        ></script>
      </Head>
      <div>
        {/* banner */}
        <div className="stkbnx-container banner-background mx-auto md:py-10 xl:py-10 lg:py-10 py-4">
          {/* logo start here */}
          <div className="logo flex justify-between items-center relative mb-11">
            <Link href="/">
              <Image
                src="/static/images/landing-page/stkbnx-logo.png"
                width={110}
                height={48}
                alt="stkbnx-logo"
              />
            </Link>
            <div className="z-[10]"></div>
          </div>
          {/* left part and form here */}
          <div className="flex sm:flex-col md:flex-col lg:flex-row flex-col justify-between items-center lg:space-x-10 xl:space-x-10 trade-register relative">
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
                className="gradient-text md:text-center sm:text-center text-center lg:text-left xl:text-left text-3xl md:text-[40px] intro-font md:!leading-[3.2rem] xl:!leading-[3.2rem] lg:!leading-[3.2rem] !leading-[2.6rem] whitespace-pre-wrap break-words w-full md:w-3/4 xl:w-3/4 lg:w-3/4 landing-right landing-head"
              >
                {t("Exclusive 30% Welcome Bonus!")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.8 }}
                className="text-white whitespace-pre-wrap mt-4 sm:w-full md:w-full xl:w-9/12 lg:w-9/12 w-full md:text-center sm:text-center text-center lg:text-left xl:text-left text-sm md:text-base landing-right"
              >
                {t(
                  "Starting on August 5th, 2024, kickstart your trading journey with our Exclusive 30% Welcome Bonus."
                )}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full text-center md:text-left text-white whitespace-pre-wrap opacity-50 mt-4 md:w-9/12 xl:w-9/12 lg:w-9/12 max-w-[501px] md:max-w-[395px]"
                dangerouslySetInnerHTML={{ __html: "" }}
              ></motion.p>
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.8 }}
                className="rounded-full cmn-btn bg-primary mt-5 mb-5 xl:mb-0 lg:mb-0 md:mb-0 !p-0 max-w-fit"
                onClick={() => openModal(1)}
              >
                <span className="btn-pad block">{t("Apply Now")}</span>
              </motion.button>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full text-xs text-center md:text-left text-white whitespace-pre-wrap opacity-30 mt-4 md:w-9/12 xl:w-9/12 lg:w-9/12 max-w-[501px] md:max-w-[395px]"
                dangerouslySetInnerHTML={{
                  __html: t("Terms & Conditions apply"),
                }}
              ></motion.p>
            </motion.div>

            {/* <div className="absolute z-10 text-white top-[-85px] right-[24px]">
              <Language
                iconClass="fill-[#fff]"
                flagImg="/static/images/icons/flag-white.svg"
              />
            </div> */}
          </div>
        </div>
      </div>
      {/* why trading cpt */}
      <div className="stkbnx-container md:py-10 xl:py-10 lg:py-32 py-4 md:mt-0 xl:mt-0 lg:mt-0">
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
          <div className="winning-text !text-center mb-2 text-white  ">
            {t("Winning at the Starting Line")}
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
          <p className="large-text read-font text-center m-auto ">
            {t(
              "Maximize your trading potential from the very beginning with Stockbanx."
            )}
          </p>
        </motion.div>

        {/* Second component */}
        <div className="py-10 md:py-28">
          <ul className="max-w-6xl mx-auto px-4 md:px-0 flex flex-wrap justify-center">
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 1 },
              }}
              className="w-full md:w-[48%] md:odd:mr-[1%] px-8 md:px-12 py-6 md:py-6 mb-4 md:mb-0 product-type-list-bg rounded-none"
              style={{ height: "auto", minHeight: "400px" }} // Adjusted height for mobile and desktop
            >
              <div className="flex flex-col items-start md:items-center h-full">
                <h4 className="text-1xl md:text-2xl text-left text-white">
                  {t("Increased Trading Capital")}
                </h4>
                <div className="mt-4 md:mt-10 w-[300px] h-[250px] md:w-[250px] md:h-[262px] relative mx-auto md:justify-center">
                  <Image
                    src={"/static/images/campaign/increasing.png"}
                    layout="fill"
                    alt="crypto"
                  />
                </div>
              </div>
            </motion.li>
            <div className="w-full md:w-[48%] flex flex-col space-y-4">
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 80 },
                  visible: { opacity: 1, y: 1 },
                }}
                className="rounded-2xl px-8 md:px-12 py-6 product-type-list-bg"
                style={{ height: "auto", minHeight: "190px" }} // Adjusted height for mobile and desktop
              >
                <div className="flex items-center h-full">
                  <div className="w-[200px] h-[160px] relative mx-auto md:mr-4">
                    <Image
                      src={"/static/images/campaign/risk.png"}
                      layout="fill"
                      alt="Risk Mitigation"
                    />
                  </div>
                  <h4 className="text-1xl md:text-2xl text-center md:text-right text-white mt-4 md:mt-0 w-1/2">
                    {t("Risk Mitigation")}
                  </h4>
                </div>
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 80 },
                  visible: { opacity: 1, y: 1 },
                }}
                className="rounded-2xl px-8 md:px-12 py-6 product-type-list-bg"
                style={{ height: "auto", minHeight: "190px" }} // Adjusted height for mobile and desktop
              >
                <div className="flex items-center h-full">
                  <div className="w-[200px] h-[160px] relative mx-auto md:mr-4">
                    <Image
                      src={"/static/images/campaign/opportunities.png"}
                      layout="fill"
                      alt="Enhanced Trading Opportunities"
                    />
                  </div>
                  <h4 className="text-1xl md:text-2xl text-center md:text-right text-white mt-4 md:mt-0 ">
                    {t("Enhanced Trading Opportunities")}
                  </h4>
                </div>
              </motion.li>
            </div>
          </ul>
        </div>

        <div>
          <div className="stkbnx-heading !text-center mb-2 text-white pb-6">
            {t("How to Get Your Bonus")}
          </div>
          <div className="flex space-x-2 md:space-x-8 mb-8 justify-center">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.8 }}
              onClick={() => handleButtonClick(0, "new-user")}
              className={`whitespace-nowrap outer-btn ${
                userType === "new-user" ? "chosen-btn" : "unchosen-btn"
              } w-1/2 sm:w-auto`}
            >
              {t("New User")}
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.8 }}
              onClick={() => handleButtonClick(1, "existing-user")}
              className={`whitespace-nowrap outer-btn ${
                userType === "existing-user" ? "chosen-btn" : "unchosen-btn"
              } w-1/2 sm:w-auto`}
            >
              {t("Existing User")}
            </motion.button>
          </div>

          <Bonus
            buttonText={t(contentOptions[activeContent].buttonText)}
            stepsList={contentOptions[activeContent].stepsList}
            openTermsModal={() => openModal(2)}
          />
          {/* <DynamicFaq dynamiclist={LIST} /> */}
          <div className="stkbnx-container mt-12 mb-12">
            <Faqs
              faqs={[
                {
                  question: t("Is Stockbanx regulated?"),
                  answer: t(
                    "Yes, Stockbanx is a well-regulated global broker, regulated by the Financial Sector Conduct Authority under license number 45954, to ensure the financial security of its clients."
                  ),
                },
                {
                  question: t("Is Stockbanx safe?"),
                  answer: t(
                    "We are widely regarded as a safe and secure platform for trading, thanks to our status as a licensed and regulated broker overseen by prominent international regulatory bodies. We prioritize account safety by offering a variety of security measures such as phone or email verification, and advanced web attack protection with a Web Application Firewall (WAF). Furthermore, Stockbanx implements payment protection features, including segregated accounts and 3D Secure verification, and offers trading protections like Negative Balance Protection, ensuring that clients can trade with confidence and peace of mind."
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* <Award /> */}
      {/* footer section here */}
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
              {/* <p className='text-xs mb-4 risk-color'>  {t("DisclaimerSecond")}  </p> */}
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
              {/* <p className='text-xs mb-4 risk-color'>  {t("DisclaimerFive")} </p> */}
              <p
                className="text-xs mb-4 risk-color"
                dangerouslySetInnerHTML={{
                  __html: t("DisclaimerSix", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              />
              {/* <p className='text-xs mb-4 risk-color'>  {t("DisclaimerSeven")} </p> */}
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
      {showModal && (
        <Terms
          handleClick={closeModal}
          initialStep={initialStep}
          userType={userType}
          updateUserType={updateUserType}
        />
      )}
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Campaign;

