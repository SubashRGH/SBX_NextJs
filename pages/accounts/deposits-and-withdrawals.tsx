import { LandscapeListCard } from "@/components/Account/LandscapeListCard";
import { ListCard } from "@/components/Account/ListCard";

import Container from "@/components/Container";

import PageBannerHeader from "@/components/PageBannerHeader";
import { Stack } from "@/components/Stack";
import { StepsLadder } from "@/components/ToUseStockbanxSteps/StepsLadder";

import { fundingOptionsList } from "@/constants";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const DeposiAndWithdrawal = () => {
  const { t } = useTranslation("common");
  const [lang, setLang] = useState<any>();

  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
  }, []);

  return (
    <>
      {/* <div className="mt-[100px] md:mt-[120px] xl:mt-[130px] stkbnx-container">
        <div
          className={`flex items-center w-full min-h-[416px] xl:min-h-[500px] xl:mr-auto relative bg-[url('/static/images/docBanner.png')] bg-origin-border bg-contain bg-no-repeat xl:bg-center bg-[center_110px]`}
        >
          <div className="text-white text-center md:text-left max-w-[810px]">
            <h2 className="font-medium font-inter text-3xl leading-[42px] xl:text-[42px] xl:leading-[68px] space-x-[0.15px] white-gradient-for-text">
              {t("Deposits and withdrawals")}
            </h2>
            <p className="w-full text-white2 whitespace-pre-wrap mt-4  md:w-9/12 xl:w-9/12 lg:w-9/12 max-w-[501px] md:max-w-full">
              {t(
                "We offer secure and straightforward funding options tailored to meet your needs, ensuring smooth transactions for all account activities."
              )}
            </p>

            <button className="rounded-full cmn-btn bg-primary text-neutral mt-5 mb-5 xl:mb-0 lg:mb-0 md:mb-0 !p-0 max-w-fit">
              <a
                className="btn-pad block"
                href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${lang}/user/register-list`}
                target="_blank"
              >
                {t("Open Account")}
              </a>
            </button>
          </div>
        </div>
      </div> */}
      <Container className="!pb-0 !pt-0">
        <PageBannerHeader>
          <h1 className="text-[40px] font-[500] z-10 text-center leading-10">
            Deposit and Withdrawals
          </h1>

          <p className="text-lg font-normal text-[#B0B4C1] mt-4 z-10 text-center">
            We offer secure and straightforward funding options tailored to meet{" "}
            <br />
            your needs, ensuring smooth transactions for all account activities.
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
        <div className="mx-auto w-full">
          <h2 className="text-3xl font-medium">Funding Options</h2>
          <p className="text-[#D2D3DF] text-xl font-normal">
            Access three reliable methods to fund your trading account:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {fundingOptionsList.map((li) => (
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

          <div className="flex justify-center my-12">
            <Link href="/about-us">
              <a
                href="/about-us"
                className="inline-flex items-center justify-center w-56 bg-primary text-white text-base font-normal px-4 py-4 rounded-full  hover:bg-primary/80 transition duration-200 gap-2 hover:scale-105 "
              >
                Discover More
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
        </div>

        <div className="mx-auto w-full">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex flex-col gap-4 justify-center">
              <p className="text-primary">Features</p>
              <h1 className="sbTextH2">
                Your money <br />
                is <span className="text-primary">safe with us</span>
              </h1>
              <p className="sbTextGray-p mt-4">
                As a leading retail multi-asset broker, we implement multiple
                layers of security to ensure your funds remain protected and
                readily available upon request.
              </p>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col gap-2 mt-4 lg:mt-0">
              <LandscapeListCard
                icon="/static/images/account/lock.svg"
                title="Segregated accounts"
                description="Your funds are securely held in segregated accounts with Tier-1 banks, ensuring they remain safe and accessible at all times."
              />
              <LandscapeListCard
                icon="/static/images/account/money-send.svg"
                title="Segregated accounts"
                description="Your funds are securely held in segregated accounts with Tier-1 banks, ensuring they remain safe and accessible at all times."
              />
            </div>
          </div>

          <div className="mx-auto w-full mt-10 h-[221px] relative">
            <Image
              src="/static/images/account/bg-wave.svg"
              layout="fill"
              className="object-contain"
            />
          </div>

          <div className="mx-auto w-full mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12">
              <div className="flex flex-col justify-center">
                <p className="text-primary text-base font-medium">Features</p>
                <h2 className="text-3xl font-semibold">
                  Deposit your funds <br />
                  in<span className="text-primary"> 3 easy steps</span>
                </h2>
              </div>

              <div className="flex flex-col mt-5 lg:mt-0">
                <ul>
                  <StepsLadder
                    count={1}
                    title="Apply"
                    description="Register and Verify Your Account"
                    showLadder
                  />
                  <StepsLadder
                    count={2}
                    title="Select"
                    description="Select Your Preferred Payment Method"
                    showLadder
                  />
                  <StepsLadder
                    count={3}
                    title="Submit"
                    description="Submit Your Deposit Request"
                    showLadder={false}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>

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
      </Stack>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default DeposiAndWithdrawal;
