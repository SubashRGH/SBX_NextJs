import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { changeLang } from "../../utils/utils";
import RegisterButton from "../button/RegisterButton";

interface Props {
  title: string;
}

export default function TypeExtra() {
  const { t } = useTranslation("common");
  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();
  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setCountry(data);
  }, []);

  return (
    <div className="pb-10 md:pb-14 px-4">
      <ul className="max-w-6xl mx-auto flex sm:flex-row lg:flex-row flex-col">
        {[
          {
            img: "/static/images/products/national-flag-u.s.png",
            title: t("Some of the biggest U.S indices:"),
            sectionList: [
              {
                title: t("S&P 500"),
                content: t(
                  `Standard & Poor's 500 Index, also known as the S&P 500, tracks 500 leading publicly traded companies in the United States by market capitalization. It includes companies like Twitter, Cisco Systems, eBay, MasterCard, McDonald's, Nike, PayPal, Pfizer, Starbucks, among others.`
                ),
              },
              {
                title: t("TECH 100"),
                content: t(
                  `The Nasdaq 100 Index is a basket of the 100 largest, most actively traded U.S companies listed on the Nasdaq stock exchange. The index includes companies from various industries except for the financial industry, like commercial and investment banks. These non-financial sectors include retail, biotechnology, industrial, technology, health care, and others.`
                ),
              },
              {
                title: t("USA30"),
                content: t(
                  `Dow Jones Industrial Average (DJIA) is an index containing stocks from 30 of the largest and most influential companies in the United States, including Apple, Chevron, Coca-Cola, Exxon Mobil, Visa, Goldman Sachs, and JPMorgan Chase. `
                ),
              },
            ],
            child: {
              title: t("Global"),
              content: t(
                "Global indices relay companies regardless of which stock exchange they are listed on and based."
              ),
            },
          },
          {
            img: "/static/images/products/national-flag-eu.png",
            title: t("Some of the biggest EU indices:"),
            sectionList: [
              {
                title: t("DAX30"),
                content: t(
                  `The DAX is a German blue-chip stock market index that tracks the performance of the 40 largest companies trading on the Frankfurt Stock Exchange. It covers sectors such as clothing, insurance, manufacturing, energy, transport, and many others.`
                ),
              },
              {
                title: t("FTSE100"),
                content: t(
                  `It is also known as the UK100 and is a list of the UK's hundred biggest companies by market capitalization. These companies include Unilever, Tesco, Barclays, Vodafone Group, GlaxoSmithKline and Sainsbury's covering industries such as food, pharmaceuticals, electronic products, banks, telecommunications and more.`
                ),
              },
              {
                title: t("EUROSTOXX"),
                content: t(
                  `The index covers 12 European countries and represents the 50 largest companies in Europe, such as Bayer, Danone, and Volkswagen Group, among others, listed in other European indices.`
                ),
              },
            ],
            child: {
              title: t("Regional"),
              content: t(
                "Regional indices include companies from specific regions."
              ),
            },
          },
          {
            img: "/static/images/products/national-flag-japan.png",
            title: t(
              "Some of the national indices covering Asia-Pacific region:"
            ),
            sectionList: [
              {
                title: t("JAPAN225"),
                content: t(
                  `The Nikkei is short for Japan's Nikkei 225 Stock Average, the leading and most-respected index of Japanese stocks. It is a price-weighted index composed of Japan's top 225 blue-chip companies traded on the Tokyo Stock Exchange.`
                ),
              },
              {
                title: t("JAPAN225"),
                content: t(
                  `The Nikkei is short for Japan's Nikkei 225 Stock Average, the leading and most-respected index of Japanese stocks. It is a price-weighted index composed of Japan's top 225 blue-chip companies traded on the Tokyo Stock Exchange.`
                ),
              },
              {
                title: t("HONGKONG50"),
                content: t(
                  `The Hang Seng Index or HSI is a free-float market capitalization-weighted index of the sixty largest companies that trade on the Hong Kong Exchange (HKEx). HKEx is among the largest stock exchanges in the world, with an aggregate market cap of more than $38 trillion as of 2022.`
                ),
              },
              {
                title: t("ASX200"),
                content: t(
                  `The S&P/ASX 200 Index is the benchmark institutional investable stock market index in Australia, comprising the 200 largest stocks by float-adjusted market capitalization. `
                ),
              },
            ],
            child: {
              title: t("National"),
              content: t(
                "Typically, national indices are used to reflect investor sentiment on the health of the economy inside a given country by analysing the performance of the stock market."
              ),
            },
          },
        ].map((item, index) => (
          <>
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.4 }}
              key={item.title}
              className={classNames(
                "relative block md:hidden mt-[80px] mb-[30px] flex-1 flex-shrink-0 pl-3 md:pl-6 xl:first:pl-0 space-y-2 md:space-y-4 group !border-b-0"
              )}
            >
              <div className="intro-font text-xl md:text-3xl text-white text-left xl:text-left">
                {item?.child?.title}
              </div>
              <div className=" text-white2 opacity-60  pr-3 md:pr-6 text-left xl:text-left text-base md:text-lg">
                {item?.child?.content}
              </div>
            </motion.li>
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.4 }}
              key={index}
              className="product-type-list-bg pt-[50px] md:odd:mr-6 mb-4 md:mb-0 md:flex-1 md:mr-6 md:odd:last:mr-0 md:last:mr-0"
            >
              <div className="flex items-center space-x-2 md:space-x-12 px-3 md:px-6 md:pr-10 rounded-2xl">
                <div className="relative w-10 h-10 md:w-16 md:h-16 rounded-2xl flex-shrink-0">
                  <Image src={item.img} layout="fill" alt="extra" />
                </div>
                <div className="text-white">{item.title}</div>
              </div>
              <ul className="px-3 md:px-6 space-y-8 md:space-y-11 pt-6 md:pt-10 pb-8">
                {item.sectionList.map((section, i) => (
                  <li className="space-y-2" key={i}>
                    <h4 className="text-lg md:text-2xl text-white">
                      {section.title}
                    </h4>
                    <p className="text-white2 lg:min-h-[210px] xl:min-h-[210px] md:min-h-[210px]">
                      {section.content}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.li>
          </>
        ))}
      </ul>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 1 },
        }}
        transition={{ duration: 0.4 }}
        className="pt-10 flex justify-center"
      >
        {(() => {
          if (["CN", "HK", "TW"].includes(country)) {
            return (
              <>
                <button className="rounded-full cmn-btn bg-primary text-neutral py-[0.5rem] px-[1.5rem]">
                  {" "}
                  <a
                    href={`${process.env.NEXT_PUBLIC_BLREG}${changeLang(lang)}`}
                    target="_blank"
                  >
                    {" "}
                    {t("Trade Indices")}{" "}
                  </a>{" "}
                </button>
              </>
            );
          } else {
            return (
              <>
                <RegisterButton
                  containerStyle="rounded-full cmn-btn bg-primary text-neutral"
                  title={t("Trade Indices")}
                />
              </>
            );
          }
        })()}
      </motion.div>
    </div>
  );
}
