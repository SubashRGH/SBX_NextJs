import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlurImage from "../../components/BlurImage";
import PartnerPhotoText from "../../components/partner/PartnerPhotoText";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Mam from "../../components/Reward/Mam";
import Image from "next/image";
import classNames from "classnames";
import { Faqs } from "@/components/ClientProtection/Faq";
import Container from "@/components/Container";
import PageBannerHeader from "@/components/PageBannerHeader";
import Link from "next/link";
import Icon from "@/components/Icon";
import ImageBgSeparator from "@/components/ImageBgSeparator";

const whySection1 = [
  {
    icon: "/static/assets/icons/money-recive.svg",
    heading: "Commission Rebates",
    description:
      "Earn 20% from the spread for every standard lot your clients trade. No minimum requirements, no barriers.",
  },
  {
    icon: "/static/assets/icons/favorite-chart.svg",
    heading: "Cutting-Edge Platforms",
    description:
      "Advanced, user-friendly platforms designed for precision price analysis and technical insights.",
  },
  {
    icon: "/static/assets/icons/setting-3.svg",
    heading: "Tailored Flexibility",
    description:
      "Personalized support and tailored solutions that seamlessly adapt to your evolving business needs.",
  },
];

const whySection2 = [
  {
    icon: "/static/assets/icons/brush.svg",
    heading: "Creative Marketing Tools",
    description:
      "Free banners, business cards, newsletters, and high-quality promotional materials to help you succeed effortlessly.",
  },
  {
    icon: "/static/assets/icons/devices.svg",
    heading: "Innovation for the Future",
    description:
      "Intuitive, powerful, and easy-to-use trading tools designed for seamless, on-the-go success and enhanced performance.",
  },
];

function Partner() {
  const { t } = useTranslation("common");

  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();
  useEffect(() => {
    setLang(sessionStorage.getItem("lang"));
    const data = sessionStorage.getItem("country");
    setCountry(data);
  }, []);

  return (
    <>
      <Container className="!pb-0 !pt-0">
        <PageBannerHeader>
          <h1 className="text-[40px] font-[500] z-10 text-center leading-10">
            Unlock <span className="text-turquoise">Earnings</span> Potential -
            20% from the spread
          </h1>
          <p className="text-[18px] font-[300] text-[#B0B4C1] mt-4 z-10 text-center">
            Maximize your profits with our IB Program. Get rewarded for every
            trade.
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

      <div className="">
        <div className="stkbnx-container sm:px-6 lg:px-6 md:py-20 xl:py-20 lg:py-20 py-4">
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
            <div className="stkbnx-heading-white">
              {t("Why Partner With Stockbanx?")}
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
            <p className="sbTextGray-p mt-4">
              {t(
                "Looking to grow your earnings and trade smarter? We’ve got your back!"
              )}
            </p>{" "}
          </motion.div>
          <div className="w-full mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-0 lg:gap-x-12 mt-12">
              {whySection1.map((i) => (
                <div
                  key={i.heading}
                  className="md:basis-1/3 w-full flex flex-col rounded-[32px] bg-[rgba(0,0,0,0.2)] transition-transform duration-800 card-slide-in"
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-5 p-8">
                      <Icon src={i.icon} />
                      <h1 className="text-[#F6F7FF] text-[18px] font-medium leading-[25.2px]">
                        {t(i.heading)}
                      </h1>
                      <p className="text-[#F6F7FF] text-[15px] font-normal leading-[21px]">
                        {t(i.description)}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-0 lg:gap-x-12 mt-12">
              {whySection2.map((i) => (
                <div
                  key={i?.heading}
                  className="md:basis-1/3 w-full flex flex-col rounded-[32px] bg-[rgba(0,0,0,0.2)] transition-transform duration-800 card-slide-in"
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 1 },
                    }}
                    transition={{ duration: 1.2 }}
                  >
                    <div className="flex flex-col gap-5 p-8">
                      <Icon src={i.icon} />
                      <h1 className="text-[#F6F7FF] text-[18px] font-medium leading-[25.2px]">
                        {t(i.heading)}{" "}
                      </h1>
                      <p className="text-[#F6F7FF] text-[15px] font-normal leading-[21px]">
                        {t(i.description)}{" "}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="stkbnx-container ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-[150px]">
            <div className="flex flex-col gap-4 justify-center">
              <p className="text-turquoise">We got you</p>
              <h1 className="sbTextH2">
                Advanced Lot and <br />
                <span className="text-turquoise">Allocation Options</span>
              </h1>
              <p className="sbTextGray-p mt-4">
                Unlock the tools you need to manage risk efficiently, boost
                performance, and drive consistent growth for your clients.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-4 lg:mt-0">
              <Mam
                group={[
                  [
                    t("Lot Allocation"),
                    t("Proportional By Balance"),
                    t("Equity Percent Allocation"),
                    t("Allocation by Equal Risk"),
                    t("Percent Allocation"),
                    t("Proportional By Equity"),
                    t("Percent Allocation by P/L"),
                    t("Lot multiplier by volume fix"),
                  ],
                ]}
                headerClassName="max-w-xl px-4"
              />
            </div>
          </div>
        </div>
        <Container>
          <PartnerPhotoText
            title={t(
              "Turn Your Referrals into Revenue with a Seamless Process!"
            )}
          />
        </Container>
        <Container>
          <ImageBgSeparator />
        </Container>
      </div>
      {/* faq */}
      {/* <FAQ /> */}
      <Container>
        <Faqs
          faqs={[
            {
              question: t(
                "What are the advantages of partnering with Stockbanx?"
              ),
              answer:
                "As a Stockbanx partner you will immediately benefit from the following:Commission Rebate: Start earning from 10$ per lot today on every trade, no minimum requirements to qualify. Innovation:  Experience our powerful software to easily track your introduced accounts and their activity. Loyalty: A unique loyalty program that recognizes your efforts. Marketing Support: Full creative support and free marketing materials: Professionally designed banners Business cards Newsletters Promotional materials Advanced Platforms: User-friendly trading platforms with ideal trading conditions. Flexibility: Customized support tailored to your needs.  Our team welcomes any special requests that serve your needs and support better trading for your clients.",
            },
            {
              question: t("How do I open an IB account?"),
              answer: t(
                "Sign up: Join our IB program and earn ongoing commissions from the trading activity of your clients. Refer: Start referring clients and track daily volume trading of your referrals in our bespoke IB Portal. When your client completes the registration form in the Client Portal and opens an account, your IB code will be provided by default. Earn: Start earning starting from $10 per lot on your clients’ trading. The more they trade, the more you make!"
              ),
            },
            {
              question: t("What is your IB compensation scheme?"),
              answer: t(
                "Classic: Earn starting from $10 per lot on your clients` trading. Prime: Earn $3 per lot on your clients’ trading. For registration and more information, please click here."
              ),
            },
            {
              question: t("How can I withdraw my IB commissions?"),
              answer: t("You can withdraw your IB commission from IB Portal"),
            },
            {
              question: t("How are the IB commissions added to my account?"),
              answer: t(
                "All your clients` trading activities are automatically displayed at EOD in your IB portal along with the calculated commission."
              ),
            },
            {
              question: t(
                "How can I refer my clients and add them to my IB account?"
              ),
              answer: t(
                "You should provide your clients with a unique IB referral link. Your clients will use that link to access our website, once they register through the Client Portal and open a live account, you will immediately see them added to your IB Portal."
              ),
            },
          ]}
        />
      </Container>
      {/* <DynamicFaq dynamiclist={LIST} /> */}
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Partner;

