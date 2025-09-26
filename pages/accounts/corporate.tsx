import Container from "@/components/Container";
import PageBanner from "@/components/PageBanner";
import CorporateSmallCard from "@/components/corporate/CorporateSmallCard";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState } from "react";

const Corporate = () => {
  const { t, i18n } = useTranslation("common");
  const [lang, setLang] = useState<any>();

  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
  }, []);

  useEffect(() => {
    setLang(i18n.language === "zh" ? "cn" : i18n.language || "en");
  }, [i18n.language]);

  const smallCardArray = [
    {
      img: "/static/images/corporate/fund.png",
      header: "Fund from a compant card",
      text: "Use allocated company money to fund and trade your account.",
    },
    {
      img: "/static/images/corporate/trade.png",
      header: "Trade in your business name",
      text: "Opt to use trades and funds in a company name instead of a personal account.",
    },
    {
      img: "/static/images/corporate/multiple.png",
      header: "Multiple authorised traders",
      text: "Manage your trading - as well as your business - as a team, with multiple users able to access.",
    },
  ];
  return (
    <>
      <PageBanner
        title={t("The Complete Corporate Account")}
        description={t(
          "An account for institutial and retail business trading that allows multiple authoried users and corporate cash deposits"
        )}
        withMultiBtn={{
          btn1Text: t("Open Trader Account"),
          btn2Text: t("Open Partner Account"),
          btn2Click: () => {
            window.open(
              "https://zaportal.cptmarkets.com/#/en/user/register/corporate",
              "_blank"
            );
          },
          btn1Click: () => {
            window.open(
              "https://ibportal.cptmarkets.com/#/en/user/register/corporate",
              "_blank"
            );
          },
        }}
        imgSrc="/static/images/corporate/corporate.png"
        size="md"
        className="!min-h-[720px]"
      />

      <div className="stkbnx-container mt-20">
        <div className="flex items-center w-full justify-center flex-col xl:flex-row">
          <div className="flex items-center justify-center w-full gap-[21px] px-[14px] md:px-[35px] h-[218px] product-type-list-bg max-w-[400px]">
            <div className="text-[64px] text-white font-inter">1</div>
            <div className="">
              <h2 className="text-white font-inter mb-3 text-[32px]">
                {t("Open Account")}
              </h2>
              <p className="text-[#E2E6EE] font-inter text-lg">
                {t("To open an account applying its easy and takes minutes")}
              </p>
            </div>
          </div>

          <div className="register-divider" />

          <div className="flex items-center justify-center w-full gap-[21px] px-[14px] md:px-[35px] h-[218px] product-type-list-bg max-w-[400px]">
            <div className="text-[64px] text-white font-inter">2</div>
            <div className="">
              <h2 className="text-white font-inter mb-3 text-[32px]">
                {" "}
                {t("Fund")}
              </h2>
              <p className="text-[#E2E6EE] font-inter text-lg">
                {" "}
                {t(
                  "Deposit easily and scurity via debit card or bank transger"
                )}
              </p>
            </div>
          </div>

          <div className="register-divider" />

          <div className="flex items-center justify-center w-full gap-[21px] px-[14px] md:px-[35px] min-h-[218px] max-h-[218px] product-type-list-bg max-w-[400px]">
            <div className="text-[64px] text-white font-inter">3</div>
            <div className="">
              <h2 className="text-white font-inter mb-3 text-[32px]">
                {t("Start Trading")}
              </h2>
              <p className="text-[#E2E6EE] font-inter text-lg">
                {" "}
                {t("Hundred of markets on desktop, web and mobile")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="stkbnx-container mt-20">
        <div className="flex flex-col xl:flex-row  items-center">
          <div className="text-white mb-[40px] xl:mb-[40px] text-[42px] font-bold text-center md:text-center xl:text-start min-w-[320px]">
            {t("Your Money Is Yours")}
          </div>
          <div className="text-white2 text-[18px] font-normal text-center md:text-center xl:text-start">
            {t(
              "Stockbanx operates globally with offices and teams around the world, offering localized support and tailored trading solutions. Our international reach allows us to understand and meet the unique needs of traders in different regions, making us a trusted partner in your financial journey."
            )}
          </div>
        </div>
      </div>

      <div className="stkbnx-container mt-20">
        <div className="flex flex-col  xl:flex-row xl:items-center  xl:pl-[100px] xl:pr-[58px] xl:pt-[98px] xl:pb-[65px] bg-[#3B3D4333] rounded-[30px] md:m-[30px] ">
          <div className="xl:w-[50%] mb-[40px] xl:mb-[0px]">
            <div className="text-white text-[42px] font-bold">
              {t("The corporate account")}
            </div>
            <div className="text-white2 text-[18px] font-normal">
              {t(
                "At Stockbanx, you can unleash a diverse trading arsenal. Explore a vast selection of instruments – stocks, forex, and even commodities – all on a single, user-friendly platform. This empowers you to spread your risk across different markets, capitalize on various opportunities, and potentially maximize your returns as market conditions evolve."
              )}
            </div>
          </div>
          <div className="w-full xl:w-[50%] text-center xl:text-start">
            <Image
              className="w-full"
              src={"/static/images/corporate/your_money_banner.png"}
              height={460}
              width={751}
              alt="banner"
            />
          </div>
        </div>
      </div>

      <div className="stkbnx-container mt-20">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-12 xl:gap-x-12 w-full">
          {smallCardArray?.map((item) => {
            return (
              <CorporateSmallCard
                img={item?.img}
                header={item?.header}
                text={item?.text}
              />
            );
          })}
        </div>
      </div>

      <div className="stkbnx-container mt-20">
        <div className="flex flex-col lg:flex-row glass-effect-bg pl-[41px] pt-[56px] pr-[48px] xl:pl-[102px] xl:pt-[91px] xl:pb-[78px]">
          <div className="w-[100%]  xl:w-[50%]">
            <div className="text-white text-[32px] font-bold xl:mb-[24px]">
              {t("Discover the World of Opportunities")}
            </div>
            <div className="text-white2 text-[18px] font-normal mb-[40px] xl:mb-[50px]">
              {" "}
              {t(
                "Get up to $10 commission for each standard lot your client trades. Be rewarded additionally through our tiered IB Rewards Program, which offers the chance to win a luxury car and other exciting Apple products."
              )}
            </div>
            <div className="grid grid-cols-3 grid-x-6 mb-[56px] xl:mb-[0px]">
              <div className="flex flex-col">
                <div className="text-white text-[48px] font-bold">150</div>
                <div className="text-white2 text-[18px] font-normal">
                  {t("Markets")}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-white text-[48px] font-bold">34</div>
                <div className="text-white2 text-[18px] font-normal">
                  {t("Countries")}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-white text-[48px] font-bold">27</div>
                <div className="text-white2 text-[18px] font-normal">
                  {t("Currencies")}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] xl:w-[50%]">
            <Image
              src="/static/images/corporate/world_map.png"
              width={659}
              height={386}
            />
          </div>
        </div>
      </div>

      <div className="stkbnx-container mt-20">
        <div className="corporate-gradiant-green-box pl-[39px] pr-[39px] pt-[87px] pb-[56px] lg:pl-[87px] lg:pr-[58px] lg:pt-[87px] lg:pb-[89px]">
          <div className="text-[32px] font-bold mb-[24px] text-[#F1F3F9]">
            {t("Trader Account")}
          </div>
          <div className="text-[18px] font-normal mb-[39px] text-[#F1F3F9]">
            {t(
              "With a legacy dating back to 2008, Stockbanx has been at the forefront of CFD trading, providing unparalleled expertise and reliability to traders worldwide. Our Corporate CFD Trading Account is meticulously crafted to address the distinctive requirements of corporations, empowering them to seize opportunities presented by price movements across a diverse array of financial instruments. Elevate your trading experience with our CFD Trading Account and join the ranks of thousands of traders who rely on Stockbanx for their CFD trading essentials and unlock the potential of the financial markets."
            )}
          </div>

          <a
            href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${lang}/user/register/corporate`}
            target="_blank"
            className="bg-primary text-neutral text-[25px] font-bold text-center rounded-[35px] xl:px-6 xl:py-2 md:px-6 md:py-2 sm:px-6 sm:py-2 px-2 py-1"
          >
            {t("Open Trader Account")}
          </a>
        </div>
      </div>

      <div className="stkbnx-container mt-20">
        <div className="corporate-gradiant-green-box pl-[39px] pr-[39px] pt-[87px] pb-[56px] lg:pl-[87px] lg:pr-[58px] lg:pt-[87px] lg:pb-[89px]">
          <div className="text-[32px] font-bold mb-[24px] text-white">
            {t("IB Account")}
          </div>
          <div className="text-[18px] font-normal mb-[39px] text-[#F1F3F9]">
            {t(
              "Become a valued member of our Corporate Partner Program and experience one of the most rewarding commission structures in the industry and unlock the potential for lucrative earnings. We pride ourselves on offering one of the most rewarding commission structures in the industry, tailored to meet your specific needs and preferences. At Stockbanx, we believe in the power of long-term relationships. That's why we're committed to nurturing strong bonds with our Partners and provide our services in the highest level for your clientele alike, fostering an environment of trust, transparency, and mutual success. Open a Corporate Partner account today and embark on a journey towards greater financial prosperity and fulfilment."
            )}
          </div>

          <a
            href={`${process.env.NEXT_PUBLIC_IB_URL}/#/${lang}/user/register/corporate`}
            target="_blank"
            className="bg-primary text-neutral text-[25px] font-bold text-center rounded-[35px] xl:px-6 xl:py-2 md:px-6 md:py-2 sm:px-6 sm:py-2 px-2 py-1"
          >
            {t("Open Partner Account")}
          </a>
        </div>
      </div>

      <div className="stkbnx-container mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12">
          <div className="flex flex-col w-full lg:w-[377px] text-center lg:text-start">
            <div className="font-bold text-[32px] text-white xl:mb-[36px]">
              {t("Backed by quality execution and transparent pricing")}
            </div>
            <div className="font-normal text-[16px] text-white2">
              {t(
                "Money managers can place orders in bulk on all accounts operating under a master account using Stockbanx's Multi Account Manager (MAM), an integrated software tool that will make the IB's journey more flexible."
              )}
            </div>
          </div>

          <div className="flex flex-col  bg-[#3B3D4333] rounded-[30px] pl-[40px] pr-[24px] pt-[50px] pb-[48px] lg:pl-[58px] lg:pr-[58px] lg:pt-[58px] lg:pb-[58px] xl:pl-[58px] xl:pt-[52px] xl:pr-[120px] xl:pb-[45px]">
            <div className="text-[32px] text-white xl:mb-[20px] font-bold">
              {t("Execution Scorecard")}
            </div>
            <div className="text-[20px] text-white2 font-normal">
              {t("Use allocated company money to fund and trade your account.")}
            </div>
          </div>
          <div className="flex flex-col bg-[#3B3D4333] rounded-[30px] pl-[40px] pr-[24px] pt-[50px] pb-[48px] lg:pl-[58px] lg:pr-[58px] lg:pt-[58px] lg:pb-[58px] xl:pl-[58px] xl:pt-[52px] xl:pr-[120px] xl:pb-[45px]">
            <div className="text-[32px] text-white xl:mb-[20px] font-bold">
              {t("Full pricing information")}
            </div>
            <div className="text-[20px] text-white2 font-normal">
              {t("Use allocated company money to fund and trade your account.")}
            </div>
          </div>
        </div>
      </div>

      <div className="stkbnx-container mt-20 mb-20">
        <div className="flex flex-col xl:flex-row xl:justify-between corporate-broker-wrapper">
          <div className="w-[100%] xl:w-[50%] order-2 xl:order-1 pl-[23px] pr-[23px] pb-[23px]">
            <div className="xl:mb-[40px] lg:mt-[24px]">
              <div className="text-[32px] font-bold text-white xl:mb-[20px] ">
                {t("A Broker You Can Trust")}
              </div>
              <div className="text-[18px] font-normal text-white2 ">
                {t(
                  "Commodities—precious metals, oil & gas have often been positioned as hedges against inflation. However, commodities tend to respond to changes in the dollar's relative strength in international markets rather than domestic inflation pressures."
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-7 lg:grid-cols-4 xl:grid-cols-2 mt-[40px] lg:mb-[40px]">
              <div className="text-center">
                <div className="text-white text-[36px] font-bold">$15B</div>
                <div className="text-white2 text-[16px] font-normal xl:mt-[5px]">
                  {t("Equity Capital")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-white text-[36px] font-bold">75.6%</div>
                <div className="text-white2 text-[16px] font-normal xl:mt-[5px]">
                  {t("Privately Held")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-white text-[36px] font-bold">2.56M</div>
                <div className="text-white2 text-[16px] font-normal xl:mt-[5px]">
                  {t("Client Account")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-white text-[36px] font-bold">1.9M</div>
                <div className="text-white2 text-[16px] font-normal xl:mt-[5px]">
                  {t("Daily Avg Revenu Trades")}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] order-1 xl:order-2  p-[23px] !pl-[23px] !pr-[23px] lg:p-[40px] xl:p-[45px]">
            <img
              className="w-full mx-auto"
              height={466}
              width={682}
              src="/static/images/corporate/clip_art.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Corporate;

