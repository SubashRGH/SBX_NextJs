import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ProductVideoIntro from "../../components/product/ProductVideoIntro";

export default function Forex() {
  const { t, i18n } = useTranslation("common");

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

      <div className="mt-[100px] md:mt-[120px] xl:mt-[130px] stkbnx-container">
        <div
          className={`flex items-center w-full min-h-[416px] xl:min-h-[500px] xl:mr-auto relative bg-[url('/static/images/docBanner.png')] bg-origin-border bg-contain bg-no-repeat xl:bg-center bg-[center_110px]`}
        >
          <div className="text-white text-center md:text-left max-w-[810px]">
            <h2 className="font-medium font-inter text-3xl leading-[42px] xl:text-[42px] xl:leading-[68px] space-x-[0.15px] white-gradient-for-text">
              Products
            </h2>
            <p className="w-full text-white2 whitespace-pre-wrap mt-4  md:w-9/12 xl:w-9/12 lg:w-9/12 max-w-[501px] md:max-w-[500px] ">
              Get access to leveraged products on a wide variety of the world’s
              most popular currency pairs.
            </p>

            <button className=" rounded-full cmn-btn bg-primary text-neutral mt-5 mb-5 xl:mb-0 lg:mb-0 md:mb-0 !p-0 max-w-fit">
              <a
                className="btn-pad block"
                href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${
                  i18n.language === "zh" ? "cn" : i18n.language || "en"
                }/user/register`}
                target="_blank"
              >
                {t("Open Account")}
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[100px] md:mt-[120px] xl:mt-[130px]" id="forex">
        <ProductVideoIntro
          bg="forex-bg"
          rating={4}
          title={t("Forex Trading")}
          description={t(
            "Forex trading, or foreign exchange trading, involves buying and selling currency pairs to profit from price fluctuations. It operates 24/5 and is the most liquid market globally. Traders can use leverage to amplify their positions, making it an attractive option for those seeking quick opportunities in major, minor, and exotic currencies."
          )}
          btnText={t("Start Trading")}
          headText={t("Forex Trading")}
          // videoUrl="https://youtu.be/ujnuPuHgUqQ"
        />
      </div>

      <div className=" my-[100px] md:my-[120px] xl:my-[130px]" id="commodities">
        <ProductVideoIntro
          rating={4}
          bg="commodities-bg"
          title={t("Commodities Trading")}
          description={t(
            "Commodities trading offers access to physical goods like gold, oil, or agricultural products. Traders can hedge against inflation or profit from supply-demand shifts. Commodity CFDs enable traders to speculate on price movements without owning the underlying asset, providing leverage and lower capital requirements."
          )}
          btnText={t("Start Trading")}
          headText={t("Commodities Trading")}
          // videoUrl="https://youtu.be/2kU-jPBsGY0"
          direction="row-reverse"
        />
      </div>

      <div className=" my-[100px] md:my-[120px] xl:my-[130px]" id="stocks">
        <ProductVideoIntro
          // title={`Zero Commission\nOn Shares`}
          rating={4}
          bg="stock-bg"
          title={t(`Stocks Trading`)}
          description={t(
            "Stock trading involves buying and selling shares of individual companies to capitalize on market movements. Traders can benefit from price fluctuations driven by company performance, industry trends, or market sentiment. Stock CFDs allow for both long and short positions, providing flexibility in various market conditions."
          )}
          btnText={t("Start Trading")}
          headText={t("Stocks Trading")}
          // videoUrl="https://youtu.be/V3LlZiNSIgw"
        />
      </div>

      <div className=" my-[100px] md:my-[120px] xl:my-[130px]" id="indices">
        <ProductVideoIntro
          bg="indices-bg"
          rating={4}
          title={t("Indices Trading")}
          description={t(
            "Indices trading allows traders to speculate on the performance of a group of stocks, representing a specific market or sector. Popular indices like the S&P 500 or FTSE 100 oOer broad market exposure, helping traders diversify and hedge their portfolios. It’s ideal for those wanting to trade market sentiment without focusing on individual stocks."
          )}
          btnText={t("Start Trading")}
          headText={t("Indices Trading")}
          // videoUrl="https://youtu.be/5g61WIm90J0"
          direction="row-reverse"
        />
      </div>

      <div className=" my-[100px] md:my-[120px] xl:my-[130px]" id="crypto">
        <ProductVideoIntro
          rating={4}
          bg="crypto-bg"
          title={t("Cryptocurrency Trading")}
          description={t(
            "Cryptocurrency CFD trading allows traders to speculate on the price movements of digital assets like Bitcoin, Ethereum, and altcoins without owning them. The high volatility of the crypto market creates both risks and opportunities, making it attractive to traders looking for significant price swings and diversification beyond traditional markets."
          )}
          btnText={t("Start Trading")}
          headText={t("Cryptocurrency Trading")}
          // videoUrl="https://youtu.be/uYvjtBS64Z8"
        />
      </div>

      {/* <ProductPhotoText
        title={t("How To Trade Forex With Stockbanx")}
        forexTitle={t(
          "Go to the product section and choose your favorite instrument"
        )}
      /> */}
    </>
  );
}

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

