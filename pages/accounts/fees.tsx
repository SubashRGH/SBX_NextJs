import { ListCard } from "@/components/Account/ListCard";
import { Faqs } from "@/components/ClientProtection/Faq";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import PageBanner from "@/components/PageBanner";
import PageBannerHeader from "@/components/PageBannerHeader";
import { Stack } from "@/components/Stack";
import TradingJourney from "@/components/TradingJourney";
import Why from "@/components/Why";
import { ListCards } from "@/components/fees/listCards";
import MoneySafe from "@/components/fees/moneySafe";
import { StartYourTradingJourney } from "@/components/fees/startYourTradingJourney";
import { UspContainer } from "@/components/fees/uspContainer";
import { commisionSpreadsList, feesOptionsList } from "@/constants";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Fees = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Container className="!pb-0 !pt-0">
        <PageBannerHeader>
          <h1 className="text-[40px] font-[500] z-10 text-center leading-10">
            Stockbanx Fees
          </h1>

          <p className="text-lg font-normal text-[#B0B4C1] mt-4 z-10 text-center">
            Prioritize your trading strategies while we ensure cost-efficiency.
            Our carefully structured
            <br />
            trading environment is designed to minimize expenses, providing you
            with optimal conditions for success.
          </p>

          <Link href="/">
            <a className="relative z-10 mt-4 inline-flex items-center justify-center w-56 bg-[#00B144] text-white text-[16px] font-normal px-4 py-4 rounded-full  hover:bg-[#009e3e] transition duration-200 gap-2 hover:scale-105">
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
        </PageBannerHeader>
      </Container>

      <Stack className="w-full max-w-7xl mt-24">
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {feesOptionsList.map((li) => (
            <ListCard
              key={li.title}
              title={li.title}
              subTitle={li.subTitle}
              description={li.description}
              icon={li.icon}
              imgStyles={{
                width: 30,
                height: 30,
              }}
            />
          ))}
        </ul>

        <div className="mx-auto w-full flex flex-col">
          <p className="text-primary text-base font-normal leading-[1.4]">
            Features
          </p>
          <h2 className="text-[40px] font-medium max-w-[500px]">
            Start Your Trading Journey with Confidence
          </h2>

          <div className="flex flex-col lg:flex-row mx-auto mt-10 gap-[32px]">
            <div className="flex flex-col w-full lg:w-1/2 rounded-2xl md:rounded-[32px] border-0 bg-black/20 border-black">
              <div className="relative rounded-[16px] md:rounded-[32px] overflow-hidden w-full">
                <Image
                  src="/static/images/account/tradingJourney.webp"
                  className="rounded-[16px] md:rounded-[32px] object-cover object-top w-full"
                  height={308}
                  width={700}
                />
              </div>
              <div className="px-6 flex flex-col flex-grow justify-center gap-4 py-4">
                <h3 className="text-[32px] font-medium">
                  Powerful Trading Platform
                </h3>
                <p className="text-[15px] font-medium">
                  Unlock the full potential of trading with our advanced,
                  easy-to-use platform. Equipped with cutting-edge tools for
                  market analysis and real-time insights, you'll be empowered to
                  make informed decisions and trade like a pro.
                </p>
              </div>
            </div>

            <ul className="flex flex-col justify-between lg:w-1/2 w-full gap-2">
              <li className="flex flex-row gap-4 rounded-2xl md:rounded-[32px] border bg-black/20 border-black">
                <div className="relative rounded-[16px] md:rounded-[32px] overflow-hidden min-w-[100px] min-h-[100px] sm:min-w-[161px] sm:min-h-[161px]">
                  <Image
                    src="/static/images/account/personalised-support-anytime.webp"
                    layout="fill"
                    className="rounded-[16px] md:rounded-[32px] object-cover object-[-60px_center] sm:object-[-80px_center]"
                  />
                </div>

                <div className="flex flex-col justify-center gap-2 p-2">
                  <p className="sm:text-lg text-[15px] font-medium">
                    Personalized Support, Anytime
                  </p>
                  <p className="sm:text-[15px] text-xs font-normal line-clamp-2 md:line-clamp-5 leading-5">
                    You are never alone on your trading journey. Our expert
                    support team is available to provide tailored assistance and
                    ensure you have everything you need to succeed in the
                    markets.
                  </p>
                </div>
              </li>

              <li className="flex flex-row gap-4 rounded-2xl md:rounded-[32px] border bg-black/20 border-black">
                <div className="relative rounded-[16px] md:rounded-[32px] overflow-hidden min-w-[100px] min-h-[100px] sm:min-w-[161px] sm:min-h-[161px]">
                  <Image
                    src="/static/images/account/trading-anywhere.webp"
                    layout="fill"
                    className="rounded-[16px] md:rounded-[32px] object-cover object-[-60px_center] sm:object-[-80px_center]"
                  />
                </div>

                <div className="flex flex-col justify-center gap-2 p-2">
                  <p className="sm:text-lg text-[15px] font-medium">
                    Seamless Trading, Anywhere
                  </p>
                  <p className="sm:text-[15px] text-xs font-normal line-clamp-2 md:line-clamp-5 leading-5">
                    Stay connected to the markets wherever you are. Our platform
                    is optimized for all devices, allowing you to trade
                    effortlessly on desktop or mobile and never miss an
                    opportunity.
                  </p>
                </div>
              </li>

              <li className="flex flex-row gap-4 rounded-2xl md:rounded-[32px] border bg-black/20 border-black">
                <div className="relative rounded-[16px] md:rounded-[32px] overflow-hidden min-w-[100px] min-h-[100px] sm:min-w-[161px] sm:min-h-[161px]">
                  <Image
                    src="/static/images/account/innovative-trading-toolss.webp"
                    layout="fill"
                    className="rounded-[16px] md:rounded-[32px] object-cover object-[-60px_center] sm:object-[-80px_center]"
                  />
                </div>

                <div className="flex flex-col justify-center gap-2 p-2">
                  <p className="sm:text-lg text-[15px] font-medium">
                    Innovative Trading Tools
                  </p>
                  <p className="sm:text-[15px] text-xs font-normal line-clamp-2 md:line-clamp-5 leading-5">
                    Enhance your strategies with industry-leading tools, fast
                    execution, and dynamic charting. Experience the power to
                    react instantly to market changes and capitalize on every
                    opportunity.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <Link href="/">
            <a className="mx-auto relative z-10 mt-16 inline-flex items-center justify-center w-56 bg-[#00B144] text-white text-[16px] font-normal px-4 py-4 rounded-full  hover:bg-[#009e3e] transition duration-200 gap-2 hover:scale-105">
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

        <div className="mx-auto w-full">
          <h2 className="text-[40px] font-[600] max-w-[500px]">
            Commission and spreads
          </h2>
          <p className="sbTextGray-p">
            Learn more about commission and spreads for individual instruments
          </p>
          <ul className="mx-auto w-full mt-16 flex-col ">
            {commisionSpreadsList.map((li, i) => (
              <li
                key={li.title}
                className="flex flex-row flex-wrap justify-between items-left gap-4 py-10 border-b border-[#575757] "
              >
                <div className="w-[100%] md:w-[30%] flex flex-row ">
                  <div className="w-[150px] text-[32px] font-[600] self-center">
                    0{i + 1}
                  </div>
                  <div className="w-[100%] self-center text-[24px] font-[600]">
                    {li.title}
                  </div>
                </div>
                <div className="w-[85%] md:w-[60%] self-center text-[16px] font-[400] text-[#D2D3DF]">
                  {li.description}
                  <br />
                  <a href={li.link}>
                    <span className="text-primary">View Specifications</span>
                  </a>
                </div>
                <div className="w-[20px] self-center sbTextGray-p">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Stack>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Fees;
