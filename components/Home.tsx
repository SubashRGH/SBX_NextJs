import React, { Fragment, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import Head from "next/head";

import { Stack } from "./Stack";
import Link from "next/link";
import { whyStockbanxList } from "@/constants";
import { ListCard } from "./Account/ListCard";
import { HomeBannerSection } from "../components/HomeBannerSection";
import Image from "next/image";
import { AccountTypes } from "./AccountTypes";
import { LandscapeListCard } from "./Account/LandscapeListCard";
import { CTraderPulseAnimation } from "./ToUseStockbanxSteps/cTraderPulseAnimation";
import { NumberCard } from "./Account/NumberCard";
import { PaymentMethods } from "./PaymentMethods";
import { ProductsCarousel } from "./ProductsCarousel";
import { UpdatesNewsCarousel } from "./UpdatesNewsCarousel";

const Home = () => {
  const { t } = useTranslation("common");

  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();
  const [event, setEvent] = useState<any>();
  const router = useRouter();

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
    <Fragment>
      <Head>
        <title>Stockbanx | Best Trading Platform</title>
        <meta
          name="description"
          content="Explore the world of investment at Stockbanx – the best trading platform. Stocks, crypto, commodities, and more await to elevate your trading journey."
          key="Best Trading Platform"
        />
      </Head>

      <HomeBannerSection />

      <Stack className="w-full max-w-7xl">
        <div className="mx-auto w-full">
          <p className="text-primary text-base font-medium">WHY</p>
          <h2 className="text-3xl font-medium">The Stockbanx Advantage</h2>
          <p className="text-[#D2D3DF] text-xl font-normal">
            Find Out Why We're the Broker of Choice.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {whyStockbanxList.map((li) => (
              <ListCard
                key={li.title}
                title={li.title}
                subTitle={li.subTitle}
                description={li.description}
                icon={li.icon}
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
      </Stack>

      <div className="mx-auto w-full">
        <ProductsCarousel />
      </div>

      <Stack className="w-full max-w-7xl">
        <div className="mx-auto w-full">
          <p className="text-primary text-base font-normal uppercase">
            features
          </p>
          <h2 className="text-3xl font-medium w-full max-w-[450px]">
            Trader-Centric Solutions for a Seamless Experience
          </h2>
          <div className="flex flex-col lg:flex-row gap-12 mt-12">
            <div className="flex flex-col sm:flex-row self-stretch justify-between gap-4 rounded-[32px] p-8 relative">
              <div className="rounded-[32px] absolute inset-0 z-0">
                <Image
                  src="/static/images/bg-trader-center-solution.webp"
                  layout="fill"
                />
              </div>
              <div className="flex flex-col w-full sm:w-1/2 justify-center relative z-10">
                <p className="text-base text-primary mb-[10px] self-start">
                  USER-CENTRIC TRADING EXPERIENCE
                </p>
                <p className="text-[#f6f7ff] text-[15px] font-normal leading-5 self-start">
                  At Stockbanx, every feature is designed with traders in mind.
                  Our platform <strong className="font-medium">offers</strong> a
                  seamless and intuitive experience, making it easy for you to
                  access diverse instruments, ranging from stocks and forex to
                  commodities and cryptocurrencies, all on one user-friendly
                  interface.
                </p>
                <p className="text-[#f6f7ff] text-[15px] font-normal leading-5 pt-4">
                  We are committed to delivering precise, reliable services
                  tailored to meet your unique trading needs.
                </p>
              </div>
              <div className="flex p-6 flex-col self-stretch items-center rounded-[32px] bg-[#3B5751] w-full sm:w-1/2 gap-4 z-10">
                <div className="flex flex-row justify-between w-full items-center">
                  <div>
                    <p className="text-lg font-medium">Portfolio</p>
                  </div>
                  <div className="bg-[#202124] py-2 px-3 rounded-[10px] flex flex-row items-center gap-2">
                    <p className="text-xs">This month</p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        width="16"
                        height="16"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="flex flex-row justify-between w-full items-center">
                  <div>
                    <p className="text-sm font-normal text-[#ADAEBA]">
                      Total Value
                    </p>
                  </div>
                  <div className="border border-[#569E8E] bg-[#3A6B60] py-2 px-2 rounded-[10px] flex flex-row items-center gap-2">
                    <p className="text-xs text-primary font-medium">+10.50%</p>
                  </div>
                </div>

                <div className="flex flex-row justify-between w-full items-center">
                  <p className="text-[32px] font-[500]">$7,126.00</p>
                </div>

                <div className="flex flex-row w-full justify-center items-center">
                  <Image
                    src="/static/images/graph.svg"
                    loading="lazy"
                    width={186}
                    height={186}
                  />
                </div>

                <div className="flex flex-row w-full justify-between">
                  <ul className="list-none flex flex-col justify-center gap-2">
                    <li className="flex items-center gap-2 text-xs font-normal text-[#D2D3DF]">
                      <span className="text-[#ffffff]">•</span>Commodities
                    </li>
                    <li className="flex items-center gap-2 text-xs font-normal text-[#D2D3DF]">
                      <span className="text-primary">•</span> Stocks
                    </li>
                    <li className="flex items-center gap-2 text-xs font-normal text-[#D2D3DF]">
                      <span className="text-[#3A3A47]">•</span> Crypto
                    </li>
                  </ul>

                  <ul className="flex flex-col justify-center gap-2">
                    <li className="text-xs font-normal text-[#D2D3DF]">25%</li>
                    <li className="text-xs font-normal text-[#D2D3DF]">50%</li>
                    <li className="text-xs font-normal text-[#D2D3DF]">25%</li>
                  </ul>

                  <ul className="text-xs font-medium text-[#ffffff] flex flex-col justify-center gap-2 text-right">
                    <li className="text-xs font-normal text-[#D2D3DF]">
                      $725.00
                    </li>
                    <li className="text-xs font-normal text-[#D2D3DF]">
                      $2,350.00
                    </li>
                    <li className="text-xs font-normal text-[#D2D3DF]">
                      $710.00
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] w-full lg:max-w-[300px] bg-black/20 p-10 flex flex-col self-stretch items-center justify-between">
              <div className="w-full flex flex-col h-[50%] justify-center items-center self-stretch">
                <Image
                  loading="lazy"
                  width="80"
                  height="80"
                  decoding="async"
                  src="/static/images/key.svg"
                />
              </div>
              <div>
                <p className="text-base text-primary font-medium self-start">
                  SECURE AND HASSLE-FREE TRANSACTIONS
                </p>
                <p className="text-[#f6f7ff] text-[15px] font-normal leading-5  self-start">
                  <strong className="text-[#f6f7ff] text-[15px] leading-5 font-medium">
                    Your peace of mind is our priority. &nbsp;
                  </strong>
                  With secure payment options including credit cards, bank
                  transfers, and trusted e-wallets, Stockbanx ensures that all
                  your transactions are protected and convenient. We aim for a
                  smooth and worry-free trading experience, so you can focus on
                  the markets.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full flex flex-col lg:flex-row gap-[32px]">
          <div className="w-full lg:w-2/5">
            <div className="relative w-full h-[200px] overflow-hidden">
              <UpdatesNewsCarousel />
            </div>
          </div>

          <div className="flex flex-col mt-[20px] w-full lg:w-3/5 justify-center">
            <p className="text-base text-primary font-medium self-start">
              INSTANT UPDATES
            </p>
            <p className="text-[#f6f7ff] text-[15px] font-normal leading-5 self-start">
              <strong className="font-medium">
                Stay ahead with fast and precise execution &nbsp;
              </strong>
              designed to match the pace of the market. Stockbanx empowers you
              to respond swiftly to changing conditions, enabling you to make
              informed decisions and seize opportunities as they arise. Every
              trade is executed with e:iciency to help you achieve your trading
              goals.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full flex flex-col">
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

        <div className="mx-auto w-full text-center">
          <h2 className="text-3xl font-semibold">Account Type</h2>
          <p className="text-[#D2D3DF] text-lg font-normal mb-10">
            At Stockbanx, we provide tailored account options to suit all levels
            of trading experience, from beginners to professional traders. Each
            account is designed to maximize your trading potential with
            competitive features and reliable support.
          </p>

          <div className="mt-4">
            <AccountTypes />
          </div>
        </div>

        <div className="mx-auto w-full">
          <h2 className="text-2xl font-medium text-center w-full">
            Find Your Ideal Trading Approach
          </h2>

          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <LandscapeListCard
              title="Independent Trading - Take Control of Your Trades"
              description={[
                "Independent trading allows you to take full control of your trading decisions. You conduct your own market analysis, develop strategies, and execute trades based on your insights and risk preferences.",
                "This approach is ideal for traders who prefer a hands-on experience, giving you the flexibility to react to market movements in real-time, customize your trading strategies, and continually refine your skills.",
              ]}
              icon="/static/images/security-safe.svg"
              headerClassName="sm:text-lg text-base font-medium"
            />
            <LandscapeListCard
              title="Copy Trading - Follow the Experts and Learn as You Go"
              description={[
                "Copy trading offers a unique way to participate in the markets by automatically replicating the trades of experienced traders. This method allows you to benefit from the expertise of top traders, even if you’re new to trading or prefer a more hands-on approach.",
                "As you follow skilled professionals, you can learn from their strategies and potentially improve your own trading knowledge. Copy trading provides a balance of convenience and opportunity, allowing you to stay active in the markets without needing extensive trading experience.",
              ]}
              icon="/static/images/copy-success.svg"
              headerClassName="sm:text-lg text-base font-medium"
            />
          </ul>

          <div className="flex justify-center mt-12 mb-12">
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
          </div>
        </div>

        <div className="mx-auto w-full">
          <h2 className="mb-24 text-[40px] font-medium text-center w-full max-md:mb-24">
            Business Partners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-12 mt-12">
            <CTraderPulseAnimation />

            <LandscapeListCard
              icon="/static/images/mobile.svg"
              headerClassName="text-[26px] sm:text-[32px] font-medium"
              title="Trade on the go"
              description="An outstanding global trading platform and a leader in CFD and spread trading. Access cTrader with Stockbanx and experience seamless trading anytime, anywhere."
              btn={{ text: "CTRADER", link: "/" }}
              backgroundImage="/static/images/bg-trader-on-the-go.webp"
            />
          </div>

          <div className="mx-auto mb-[40px] md:mb-[150px] md:mt-[250px] max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-12 mt-12">
              <LandscapeListCard
                icon="/static/images/mobile.svg"
                headerClassName="text-[26px] sm:text-[32px] font-medium"
                title="Liquidity provider"
                description="GBE Prime provides advanced aggregated liquidity in Equinix LD4 (London), NY4 (New York), and TY3 (Tokyo), leveraging cutting-edge bridging, ultra-low latency, and institutional-grade hosting."
                btn={{ text: "GBE Prime", link: "/" }}
                backgroundImage="/static/images/bg-trader-on-the-go.webp"
              />

              <CTraderPulseAnimation />
            </div>
          </div>
        </div>
      </Stack>

      <div className="mx-auto w-full">
        <PaymentMethods />
      </div>

      <Stack className="w-full max-w-7xl">
        <div className="mx-auto w-full">
          <h2 className="flex items-start w-full text-[40px] font-semibold leading-tight text-white">
            How to Get Started
          </h2>

          <div className="flex flex-wrap gap-6 items-start mt-8 w-full min-h-[320px] max-md:gap-5 max-sm:flex-col">
            <NumberCard
              icon="/static/images/user.svg"
              number={1}
              title="Create"
              subTitle="Your Account"
              description="Sign up and complete the verification process to unlock access to our powerful trading platform."
              btn={{
                link: "/",
                text: "",
              }}
            />
            <NumberCard
              icon="/static/images/user.svg"
              number={2}
              title="Fund"
              subTitle="Your account"
              description="Deposit funds, select your preferred instruments, and set your trade size to start your trading journey."
              btn={{
                link: "/",
                text: "",
              }}
            />
            <NumberCard
              icon="/static/images/user.svg"
              number={3}
              title="Start"
              subTitle="Trading"
              description="Decide your direction, Buy or Sell, based on real-time market analysis and key influencing factors."
              btn={{
                link: "/",
                text: "",
              }}
            />
          </div>
        </div>
      </Stack>
    </Fragment>
  );
};

export default Home;
