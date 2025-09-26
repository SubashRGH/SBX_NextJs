import { useEffect } from "react";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Head from "next/head";
import { Stack } from "@/components/Stack";
import { ProductsTable } from "@/components/product/ProductsTable";
import Image from "next/image";
import PageBannerHeader from "@/components/PageBannerHeader";
import Container from "@/components/Container";
import Link from "next/link";

export default function Conditions() {
  const { t } = useTranslation("common");
  const router = useRouter();

  useEffect(() => {
    const data = sessionStorage.getItem("country");
    if (data === "CN") {
      router.push("/products/conditionsbz");
    } else {
      router.push("/products/conditions");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Trading Commodities Online | Forex Trading | Stockbanx</title>
        <meta
          name="description"
          content="New to Forex Trading? Stockbanx can expand your investments
          across currencies & trading commodities online in the trading market
          for growth like never before."
          key="Trading Commodities Online | Forex Trading"
        />
      </Head>

      <Container className="!pb-0 !pt-0">
        <PageBannerHeader>
          <h1 className="text-[40px] font-[500] z-10 text-center leading-10">
            Trading Conditions
          </h1>
          <p className="text-[18px] font-[300] text-[#B0B4C1] mt-4 z-10 text-center">
            Find more details about trading our products
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

      <Stack className="max-w-[1000px] px-6 gap-36">
        <ProductsTable
          title={t("Trading Hours")}
          description={
            "The trading hours for all instruments are listed in GMT+0 and apply during summer (April to October)"
          }
          listHeaders={{
            first: t("Trading Products"),
            second: t("Trading Time based on (GMT+0)"),
          }}
          list={[
            [
              ["FX"],
              [
                { title: "Sunday", description: "21:05 - 24:00" },
                {
                  title: "Monday to Thursday",
                  description: "00:00 - 20:59, 21:05 - 24:00",
                },
                {
                  title: "Friday",
                  description: "00:00 - 20:55",
                },
              ],
            ],
            [
              ["XAUUSD", "XAGUSD", "XNGUSD", "USOUSD"],
              [
                { title: "Sunday", description: "22:05 - 24:00" },
                {
                  title: "Monday to Thursday",
                  description: "00:00 - 20:59, 22:01 - 24:00",
                },
                { title: "Friday", description: "00:00 - 20:55" },
              ],
            ],
            [
              ["UKOUSD"],
              [
                { title: "Monday", description: "00:05 - 20:59" },
                { title: "Tuesday to Thursday", description: "00:01 - 20:59" },
                { title: "Friday", description: "00:01 - 20:55" },
              ],
            ],
            [
              ["USO30USD", "NASUSD", "SPXUSD"],
              [
                { title: "Sunday", description: "22:05 - 24:00" },
                {
                  title: "Monday to Thursday",
                  description: "00:00 - 20:15, 20:30 - 21:00, 22:05 - 24:00",
                },
                {
                  title: "Friday",
                  description: "00:00 - 20:15, 20:30 - 20:55",
                },
              ],
            ],
            [
              ["100GBP", "E50EUR", "D30EUR"],
              [
                { title: "Sunday", description: "22:05 - 24:00" },
                {
                  title: "Monday to Thursday",
                  description: "00:00 - 21:00, 22:00 - 24:00",
                },
                {
                  title: "Friday",
                  description: "00:00 - 20:55",
                },
              ],
            ],
            [
              ["H33HKD", "225JPY"],
              [
                { title: "Sunday", description: "22:05 - 24:00" },
                {
                  title: "Monday to Thursday",
                  description: "00:00 - 21:00, 22:00 - 24:00",
                },
                { title: "Friday", description: "00:00 - 20:55" },
              ],
            ],
            [
              ["CHN50USD"],
              [
                { title: "Sunday", description: "21:05 - 24:00" },
                {
                  title: "Monday to Thursday",
                  description: "00:00 - 20:59, 21:05 - 24:00",
                },
                {
                  title: "Friday",
                  description: "00:00 - 20:55",
                },
              ],
            ],
            [
              ["US Stocks"],
              [{ title: "Monday to Friday", description: "13:30 - 20:00" }],
            ],
            [
              ["Future Contracts", "Crypto"],
              [
                { title: "Sunday", description: "23:05 - 24:00" },
                {
                  title: "Monday to Thursday",
                  description: "00:00 - 21:59, 23:01 - 24:00",
                },
                {
                  title: "Friday",
                  description: "00:00 - 21:55",
                },
              ],
            ],
          ]}
        />

        <ProductsTable
          title={t("Margin & Leverage")}
          description={
            "The maximum leverage available depends on your account equity"
          }
          listHeaders={{
            first: t("Leverage"),
            second: t("Equity Range"),
          }}
          list={[
            [["1:1000"], [{ title: "", description: "$0 - $1,000" }]],
            [["1:500"], [{ title: "", description: "$1000 - $20,000" }]],
            [["1:400"], [{ title: "", description: "$20,000 - $50,000" }]],
            [["1:300"], [{ title: "", description: "$50,000 - $100,000" }]],
            [["1:200"], [{ title: "", description: "$100,000 - $200,000" }]],
            [["1:100"], [{ title: "", description: "$200,000 - $1,000,000" }]],
            [["1:50"], [{ title: "", description: "Above $1,000,000" }]],
          ]}
          disclaimer="Adjust your trading strategy with the appropriate leverage, balancing potential returns and risks"
        />

        <ProductsTable
          title={t("Spreads")}
          description={
            "Trade a wide range of leveraged products with tight spreads starting from 0.7 pips."
          }
          listHeaders={{
            first: t("Markets"),
            second: t("Typical Spreads (Pips)"),
          }}
          list={[
            [
              ["Forex"],
              [
                { title: "Majors", description: "1.3" },
                { title: "Minors", description: "1.9" },
                { title: "Exotic", description: "2" },
              ],
            ],
            [["Commodities"], [{ title: "", description: "1.7" }]],
            [["Futures"], [{ title: "", description: "1.7" }]],
            [["Stocks"], [{ title: "", description: "1.5" }]],
            [["Crypto"], [{ title: "", description: "4.1" }]],
          ]}
          disclaimer="Note: Spreads may vary based on market conditions"
        />

        <div className="mx-auto w-full">
          <p className="text-[#00B144] text-[16px] font-medium leading-[1.4]">
            ONE MORE THING
          </p>
          <h2 className="text-3xl text-white font-semibold">
            Overnight Positions (Swaps)
          </h2>
          <p className="text-[#D2D3DF] text-[20px] font-[400] leading-[1.4] mt-10">
            Swaps refer to the interest applied to forex positions held
            overnight between Monday and Friday at 17:00 EST.
          </p>

          <ul className="my-4 flex flex-col gap-3">
            <li>
              <p className="text-[#D2D3DF] text-xl font-normal">
                - Swap rates vary by currency pair, reflecting interest rate
                differentials;
              </p>
            </li>
            <li>
              <p className="text-[#D2D3DF] text-xl font-normal">
                - Triple swaps are charged on Wednesdaysto account for the
                weekend;
              </p>
            </li>
            <li>
              <p className="text-[#D2D3DF] text-xl font-normal">
                - For oil and natural gas positions, overnight fees are charged
                on Fridays.
              </p>
            </li>
          </ul>

          <p className="text-[#D2D3DF] text-xl font-normal">
            Be sure to consider swap rates when managing your positions,
            especially for long-term trades.
          </p>
        </div>

        <div className="mx-auto w-full flex flex-col">
          <p className="text-[#00B144] text-[16px] font-medium leading-[1.4]">
            ALSO
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Execution Policy
          </h2>
          <ul className="flex flex-col gap-4 mt-5">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 min-w-6 min-h-6 relative">
                <Image
                  src="/static/images/icons/green-circle-tick.svg"
                  className="relative object-cover w-full h-full"
                  alt=""
                  layout="fill"
                />
              </div>
              <p className="text-xl text-[#D2D3DF] font-normal">
                Ultra-Fast Execution: All trades are executed in under a second
              </p>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 min-w-6 min-h-6 relative">
                <Image
                  src="/static/images/icons/green-circle-tick.svg"
                  className="relative object-cover w-full h-full"
                  alt=""
                  layout="fill"
                />
              </div>
              <p className="text-xl text-[#D2D3DF] font-normal">
                No Requotes: Enjoy seamless trading without unexpected delays or
                price changes
              </p>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 min-w-6 min-h-6 relative">
                <Image
                  src="/static/images/icons/green-circle-tick.svg"
                  className="relative object-cover w-full h-full"
                  alt=""
                  layout="fill"
                />
              </div>
              <p className="text-xl text-[#D2D3DF] font-normal">
                Real-Time Market Execution: Get precise order placement based on
                live market conditions
              </p>
            </li>
          </ul>
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
