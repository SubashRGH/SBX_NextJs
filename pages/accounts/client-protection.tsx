import { useEffect, useState, Children } from "react";

import Image from "next/image";
import Head from "next/head";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { ProductUSP } from "@/components/ClientProtection/ProductUSP";
import { InfoCard } from "@/components/ClientProtection/InfoCard";
import { Faqs } from "@/components/ClientProtection/Faq";
import { InfoCardWithImg } from "@/components/ClientProtection/InfoCardWithImg";
import PageBanner from "@/components/PageBanner";
import TradingJourney from "@/components/TradingJourney";

import { paymentProtection, paymentProtectionList } from "@/constants";
import Container from "@/components/Container";
import PageBannerHeader from "@/components/PageBannerHeader";
import Link from "next/link";
import { Stack } from "@/components/Stack";
import { LandscapeListCard } from "@/components/Account/LandscapeListCard";
import { ListCard } from "@/components/Account/ListCard";

function ClientProtection() {
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
      <div>
        <Head>
          <title>Best Online Trading Platforms | Trading Commodities</title>
          <meta
            name="description"
            content="Experience the best online trading platforms for trading
          commodities at Stockbanx. Start trading today and unlock your
          financial potential. Contact us now"
            key="Best Online Trading Platforms | Trading Commodities"
          />
        </Head>
      </div>

      <Container className="!pb-0 !pt-0">
        <PageBannerHeader>
          <h1 className="text-[40px] font-[500] z-10 text-center leading-10">
            Account security and client protection
          </h1>

          <p className="text-lg font-normal text-[#B0B4C1] mt-4 z-10 text-center">
            At Stockbanx, we prioritize creating a secure trading environment,
            <br />
            ensuring your account and funds are protected, with dedicated 24/5
            <br />
            customer support to assist whenever you need it.
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-6">
          <div className="relative rounded-[32px] min-h-[280px] overflow-hidden w-full col-span-2 self-stretch">
            <Image
              src="/static/images/account/client-protection.webp"
              className="rounded-[32px] object-cover object-top"
              layout="fill"
            />
          </div>
          <div className="flex flex-col justify-between gap-4 py-4 col-span-3">
            <h2 className="sbTextH2">
              Our <span className="text-primary">Commitment:</span>
            </h2>
            <p className="sbTextGray-p">
              We know how important it is to feel confident in your investments.
              That’s why at Stockbanx, we use advanced security measures,
              including strong encryption and multi-factor authentication, to
              protect your account, funds, and personal information. Our
              commitment to security means you can tradewith peace of mind,
              knowing your assets are always safeguarded.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex flex-col gap-4 justify-center">
              <p className="text-primary">Features</p>
              <h1 className="sbTextH2">
                Your <span className="text-primary">Trusted</span> Broker
              </h1>
              <p className="sbTextGray-p mt-4">
                As a licensed and regulated global broker, we offer robust
                account security measures designed to provide you with peace of
                mind.
              </p>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col gap-2 mt-4 lg:mt-0">
              <LandscapeListCard
                icon="/static/images/account/document-text.svg"
                title="Regulations"
                description="Your funds are safeguarded in segregated accounts with Tier 1 banks, ensuring they remain secure and readily available for withdrawal."
              />
              <LandscapeListCard
                icon="/static/images/account/security-user.svg"
                title="Account Security"
                description="Protect your trading account from unauthorized access by selecting your preferred security method, via phone or email, during registration."
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

          <div className="mx-auto w-full">
            <h2 className="text-3xl font-medium">Payment Protection</h2>
            <p className="text-[#D2D3DF] text-xl font-normal">
              At Stockbanx, your security is our priority. Our advanced
              protection measures provide a smooth and secure trading
              experience, allowing you to trade with confidence.
            </p>

            <ul className="grid grid-cols-1 lg:grid-cols-6 gap-y-12 gap-x-0 lg:gap-x-12 mt-12">
              {paymentProtectionList.map((li, i) => (
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
                  className={i < 3 ? "col-span-2" : "col-span-3"}
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

          <div className="w-full mx-auto">
            <p className="text-primary">Features</p>
            <h2 className="sbTextH2">Trading Protection</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-12 sm:gap-y-12 md:gap-x-12 mt-10">
              <LandscapeListCard
                icon="/static/images/account/wallet-minus.svg"
                title="Negative Balance Protection"
                description="Your funds are securely held in segregated accounts with Tier-1 banks, ensuring they remain safe and accessible at all times."
              />
              <LandscapeListCard
                icon="/static/images/account/money-forbidden.svg"
                title="Stop Out Protection"
                description="Our Stop Out Protection feature helps safeguard your positions by delaying or avoiding stop outs during periods of high market volatility, giving you more control over your trades."
              />
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
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default ClientProtection;
