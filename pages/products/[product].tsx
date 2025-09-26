import Head from "next/head";
import { useRouter } from "next/router";

import { useEffect } from "react";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { StartTradingToday } from "@/components/StartTradingToday";
import { ProductIntro } from "@/components/product/ProductIntro";
import { Stack } from "@/components/Stack";
import Container from "@/components/Container";
import PageBannerHeader from "@/components/PageBannerHeader";
import Link from "next/link";

export default function Forex() {
  const router = useRouter();

  const { t, i18n } = useTranslation("common");

  useEffect(() => {
    if (!router.query) return;

    if (!router?.query?.product) return;

    try {
      const containerElm = document.querySelector(`#${router.query.product}`);
      if (!containerElm) return;

      containerElm.scrollIntoView();
    } catch (error) {}
  }, [router.query]);

  return (
    <>
      <div>
        <Head>
          <title>Forex Trading | Trading Commodities | Stockbanx</title>
          <meta
            name="description"
            content="Participate in buying and selling trading commodities online through Stockbanx, accessing diverse markets for the profit potential of forex trading"
            key=" Forex Trading |  Trading Commodities"
          />
        </Head>
      </div>

      <Container className="!pb-0 !pt-0">
        <PageBannerHeader>
          <h1 className="text-[40px] font-[500] z-10 text-center leading-10">
            Get access to leveraged{" "}
            <span className="text-primary">products</span>
            <br /> on a wide variety of the world <br />
            most popular currency pairs
          </h1>

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

      <Stack className="w-full max-w-[1000px]">
        <StartTradingToday />
      </Stack>

      <Stack className="w-full max-w-[1000px] mt-24">
        <ProductIntro
          id="forex"
          title="Forex Trading"
          subTitle="Features"
          description="Forex trading involves the exchange of currency pairs, where one currency is bought while the other is sold. Operating 24/5, it’s the world’s most liquid financial market. Traders can use leverage to maximize their positions and take advantage of price movements across a wide range of major and cross-currency pairs."
          btnLink="/"
          btnText="Open Account"
          image="/static/images/products/forex-trading.webp"
          swapLayout="row"
        />

        <ProductIntro
          id="commodities"
          title="Commodities Trading"
          subTitle="Features"
          description="Commodities trading provides access to key markets, including gold, oil, and agricultural products. Traders can hedge against inflation or profit from supply and demand changes. With commodity CFDs, you can speculate on price movements using leverage—without owning the physical assets."
          btnLink="/"
          btnText="Open Account"
          image="/static/images/products/commodities-trading.webp"
          swapLayout="row-reverse"
        />

        <ProductIntro
          id="stocks"
          title="Stocks Trading"
          subTitle="Features"
          description="Stocks trading through CFDs involves speculating on the price movements of company shares without owning the underlying assets. Traders can take advantage of market fluctuations driven by company performance, industry shifts, or market sentiment. With stock CFDs, you can go long or short, o[ering flexibility in any market condition."
          btnLink="/"
          btnText="Open Account"
          image="/static/images/products/stocks-trading.webp"
          swapLayout="row"
        />

        <ProductIntro
          id="indices"
          title="Indices Trading"
          subTitle="Features"
          description="Indices trading allows traders to speculate on the performance of a group of stocks, representing a specific market or sector. Popular indices like the S&P 500 or FTSE 100 oOer broad market exposure, helping traders diversify and hedge their portfolios. It’s ideal for those wanting to trade market sentiment without focusing on individual stocks."
          btnLink="/"
          btnText="Open Account"
          image="/static/images/products/indices-trading.webp"
          swapLayout="row-reverse"
        />

        <ProductIntro
          id="crypto"
          title="Cryptocurrency Trading"
          subTitle="Features"
          description="Cryptocurrency CFD trading lets you speculate on the price movements of digital assets like Bitcoin, Ethereum, and other cryptocurrencies without owning them. The market’s high volatility presents both risks and opportunities, appealing to traders seeking large price swings and diversification beyond traditional assets."
          btnLink="/"
          btnText="Open Account"
          image="/static/images/products/cryptocurrency-trading.webp"
          swapLayout="row"
        />
      </Stack>
    </>
  );
}

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
