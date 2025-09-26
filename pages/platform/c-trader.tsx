import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Download from "../../components/DownloadApp";
import FAQ from "../../components/FAQ";
import PageBanner from "../../components/PageBanner";
import PlatformIntroWithShield from "../../components/platform/PlatformIntroWithShield";
import PlatformLorem from "../../components/platform/PlatformLorem";
import Head from "next/head";
import { Faqs } from "@/components/ClientProtection/Faq";
import Container from "@/components/Container";
import PageBannerHeader from "@/components/PageBannerHeader";
import Image from "next/image";

export default function CTrader() {
  const { t } = useTranslation("common");
  console.log("22");
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
      <div>
        <Container className="!pb-0 !pt-0">
          <PageBannerHeader>
            <h1 className="text-[40px] font-[500] z-10 text-center leading-10">
              cTrader
            </h1>
            <p className="text-[18px] font-[300] text-[#B0B4C1] mt-4 z-10 text-center">
              With a wide range of professional trading features, fast entry,
              <br />
              synchronization, and order processing capabilities, cTrader is a
              <br />
              one-stop-shop platform preferred by advanced traders.
            </p>
            <div className="mt-4 z-10">
              <a
                className="inline-flex items-center justify-center w-56 bg-[#00B144] text-white text-[16px] font-light px-4 py-4 rounded-full  hover:bg-[#009e3e] transition duration-200 gap-2 hover:scale-105 "
                href="/account-type"
              >
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
            </div>
          </PageBannerHeader>
        </Container>
        <Container>
          <div className="laptonAnimationContainer relative z-10 mx-auto">
            <div className="pulse">
              {[...Array(5)].map((_, index) => (
                <span key={index} style={{ ["--i" as any]: index }}></span>
              ))}
            </div>
            <div className="absolute w-[200px] h-[120px] lg:w-[200px] lg:h-[200px] flex items-center justify-center">
              <Image
                src="/static/assets/images/ctrader.svg"
                className="absolute w-[200px] h-[120px] lg:w-[200px] lg:h-[200px] "
                alt=""
                height={220}
                width={300}
              />
            </div>
          </div>
        </Container>
        <PlatformIntroWithShield
          title={t("Why cTrader?")}
          description={t(
            "cTrader is a powerful trading platform that offers plenty of educational resources and in-depth market analysis to help you make informed trading decisions."
          )}
          img="/static/images/platform/c-trader.png"
          list1={[
            {
              label: t("State-of-the-art trading technology"),
              img: "/static/assets/icons/pen.svg",
            },
            {
              label: t(" Fast execution, low latency"),
              img: "/static/assets/icons/timer.svg",
            },
          ]}
          list2={[
            {
              label: t("Highly intuitive and advanced interface"),
              img: "/static/assets/icons/picture-frame.svg",
            },
            {
              label: t("Cutting edge charting tools"),
              img: "/static/assets/icons/favorite-chart.svg",
            },
          ]}
        />
        <div className="stkbnx-container">
          <PlatformLorem
            title={t("cTrader Is For All Types Of Traders")}
            description={t(
              "cTrader's mission is to balance simple and complex functionality. It is an intuitive and easy-to-use trading platform for new and advanced traders."
            )}
            semiTitle={t("Key features and benefits")}
            group={[
              [
                t("Detailed analysis and trading indicators"),
                t("Extensive educational videos"),
                t("User-friendly interface"),
                t("High speed order execution"),
                t("Optimized expert advisor's processing"),
                t("Multiple take-profit orders"),
                t("Advanced platform customisation"),
              ],
            ]}
            headerClassName="max-w-2xl"
          />
        </div>
        <div className="md:pt-20 xl:pt-20 lg:pt-20 pt-2">
          <Download
            img="/static/images/platform/ctrader.png"
            title={t("Download cTrader")}
            description={t(
              "With cTrader, you can customize your on-the-go trading experience with a variety of order types, technical analysis tools, price alerts, and trade statistics."
            )}
            width="360px"
            height="360px"
            x="md:-translate-x-[31%]"
            y="md:-translate-y-[45%]"
            google="https://play.google.com/store/apps/details?id=com.stockbanx.app"
            desktop="https://getctrader.com/stockbanx/ctrader-stockbanx-setup.exe"
            ios="https://getctradermac.com/stockbanx/ctrader-stockbanx-setup.dmg"
            web="https://app.stockbanx.com/"
          />
        </div>
        {/* <FAQ /> */}

        <div className="stkbnx-container">
          <Faqs
            faqs={[
              {
                question: t(
                  "How to log in to my cTrader Account on Android and iOS devices?"
                ),
                answer: (
                  <ul className="list-decimal ml-2 gap-2 answer text-sm lg:text-base !text-white2">
                    <li>
                      <p>
                        {t(
                          "Your Stockbanx cTrader credentials will be sent to your registered email address once your account is created."
                        )}
                      </p>
                    </li>
                    <li>
                      <p>
                        {t(
                          "Launch the cTrader app on your Android or iOS device."
                        )}
                      </p>
                    </li>
                    <li>
                      <p>
                        {t(
                          "By default, your cTrader email will be the registered email address of your Stockbanx profile. You can change the password anytime through your Client Portal."
                        )}
                      </p>
                    </li>
                    <li>
                      <p>
                        {t(
                          "Once logged in, you can switch between any cTrader accounts registered under your Stockbanx profile, including Demo and Live accounts."
                        )}
                      </p>
                    </li>
                  </ul>
                ),
              },
              {
                question: t("How to open a chart in the cTrader platform?"),
                answer: (
                  <div>
                    <p className="text-base text-[#a8adba]">
                      {t("On PC/Laptop")}:
                    </p>
                    <ul className="list-decimal ml-2 gap-2 answer text-sm lg:text-base !text-white2">
                      <li>
                        <p>
                          {t(
                            "To open a chart in the cTrader platform, select a symbol in the Active Symbol panel, right-click on it, and choose New Chart from the submenu."
                          )}
                        </p>
                      </li>
                    </ul>
                  </div>
                ),
              },
              {
                question: t(
                  "How to modify/delete trade on the cTrader Platform?"
                ),
                answer: (
                  <div>
                    <p className="text-base text-[#a8adba]">
                      {t("On PC/Laptop")}:
                    </p>
                    <ul className="list-decimal ml-4 gap-2 answer text-sm lg:text-base !text-white2">
                      <li>
                        <p>
                          {t(
                            "To open a chart on your Mobile device select a symbol, go to the Symbol Details, scroll to the symbol chart, and tap the full-screen button in the upper left. Alternatively, double-tap the chart to open it in full-screen mode."
                          )}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "Right-click on the order you wish to modify or delete."
                          )}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "By clicking on Modify, a new window will appear that will allow you to change the parameters of your pending order."
                          )}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "By clicking on Cancel, your order will be automatically removed from the list."
                          )}
                        </p>
                      </li>
                    </ul>

                    <p className="text-base text-[#a8adba] mt-6">
                      {t("On Mobile")}:
                    </p>
                    <ul className="list-decimal ml-2 gap-2 answer text-sm lg:text-base !text-white2">
                      <li>
                        <p>
                          {t("Tap on the Trade tab in your trading platform.")}
                        </p>
                      </li>
                      <li>
                        <p>{t("From the top options, select Orders.")}</p>
                      </li>
                      <li>
                        <p>
                          {t("Tap on the pending order you want to modify.")}
                        </p>
                      </li>
                      <li>
                        <p>{t("Make the desired changes.")}</p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "Confirm the modifications by tapping the Modify button."
                          )}
                        </p>
                      </li>
                    </ul>

                    <p className="text-base text-[#a8adba] mt-6">
                      NOTE: The pending orders can be canceled all at a time by
                      tapping Cancel All on the bottom of the Orders tab, or one
                      by one by tapping the Close icons next to them.
                    </p>
                  </div>
                ),
              },
              {
                question: t(
                  "How to change the Time Frame on the cTrader Platform?"
                ),
                answer: (
                  <div>
                    <p className="text-base text-[#a8adba]">
                      {t("On PC/Laptop")}:
                    </p>
                    <ul className="list-decimal ml-4 gap-2 answer text-sm lg:text-base !text-white2">
                      <li>
                        <p>{t("Open the chart for the desired symbol.")}</p>
                      </li>
                      <li>
                        <p>
                          {t("Locate the time frame selector above the chart.")}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "Click on the time frame selector and choose the desired time frame from the dropdown menu."
                          )}
                        </p>
                      </li>
                    </ul>

                    <p className="text-base text-[#a8adba] mt-6">
                      {t("On Mobile")}:
                    </p>
                    <ul className="list-decimal ml-2 gap-2 answer text-sm lg:text-base !text-white2">
                      <li>
                        <p>
                          {t(
                            "Open the desire chart in your cTrader Mobile App."
                          )}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "Tap on the time frame selection panel in upper left corner of the chart."
                          )}
                        </p>
                      </li>
                      <li>
                        <p>{t("Select the time frame you wish to use.")}</p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "You may add or remove your favorite time frames by tapping on All Period and using the star symbol next to each time frame."
                          )}
                        </p>
                      </li>
                    </ul>
                  </div>
                ),
              },
              {
                question: t("How to add Indicators on cTrader chart?"),
                answer: (
                  <div>
                    <p className="text-base text-[#a8adba]">
                      {t("On PC/Laptop")}:
                    </p>
                    <ul className="list-decimal ml-4 gap-2 answer text-sm lg:text-base !text-white2">
                      <li>
                        <p>
                          {t(
                            "Open cTrader Platform and select the desired chart."
                          )}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "Click on the indicator’s icon represented by the f symbol"
                          )}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "Choose your indicator and adjust the settings as per your requirements."
                          )}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "The indicator will be applied automatically to your chart for analysis."
                          )}
                        </p>
                      </li>
                    </ul>

                    <p className="text-base text-[#a8adba] mt-6">
                      {t("On Mobile")}:
                    </p>
                    <ul className="list-decimal ml-2 gap-2 answer text-sm lg:text-base !text-white2">
                      <li>
                        <p>{t("Open the chart you want to modify.")}</p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "Long-press the indicators button to access the indicator options."
                          )}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "Tap the plus (+) icon located at the upper right corner to add the desired indicators."
                          )}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "Select the specific indicator group you want by tapping on it, which will expand the list of available indicators."
                          )}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "Tap on an indicator to customize its settings such as shift, color, etc."
                          )}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "Once you have finished customizing, tap Back to return to the chart view, and the selected indicators will be applied immediately."
                          )}
                        </p>
                      </li>
                    </ul>
                  </div>
                ),
              },
              {
                question: t(
                  "How to change/reset my Trading Account password? OR How to change/reset my cTtrader password?"
                ),
                answer: (
                  <div>
                    <p className="text-base text-[#a8adba]">
                      {t(
                        "In order to reset or change your Trading Account password"
                      )}
                      :
                    </p>

                    <ul className="list-decimal ml-4 gap-2 answer text-sm lg:text-base !text-white2">
                      <li>
                        <p>{t("Log in to your Client Portal")}</p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "Go to 'Accounts' and select the relevant trading account."
                          )}
                        </p>
                      </li>
                      <li>
                        <p>{t('Click the "key – change password" icon.')}</p>
                      </li>
                      <li>
                        <p>
                          {t("Enter your registered email to receive a code.")}
                        </p>
                      </li>
                      <li>
                        <p>
                          {t(
                            "Submit the code and double-enter your new password."
                          )}
                        </p>
                      </li>
                    </ul>
                  </div>
                ),
              },
              {
                question: t("Do you charge commissions for trading?"),
                answer: t(
                  "We do not charge commissions for trading on Classic or Prime accounts. However, for ECN accounts, you will receive spreads starting from 0.1 pip with a transparent commission of $5 per lot."
                ),
              },
              {
                question: t("How to change Trading Account Leverage?"),
                answer: t(
                  "To change the leverage of your trading account, please send an email directly to our Support Team. In your email, include the exact Trading Account number and the desired leverage."
                ),
              },
            ]}
          />
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

