import classNames from "classnames";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSymbolPriceList } from "../../pages/api";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import Overview from "../widget/Overview";

const tabNames: any = {
  Popular: "/",
  Forex: "/products/forex",
  Indices: "/products/indices",
  Commodities: "/products/commodities",
  Crypto: "/products/crypto",
};

const paramNames: any = {
  "/[country]": "HomePage",
  "/products/forex": "ForexPage",
  "/products/crypto": "CryptoPage",
  "/products/commodities": "CommoditiesPage",
  "/products/indices": "IndiciesPage",
  "/products/stocks": "StocksPage",
};

export default function ProductTable() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [activeIdx, setActiveIdx] = useState<any>(router.pathname);

  const [datas, setDatas] = useState<any>([]);
  const [bid, setBid] = useState<boolean>(false);

  const onSymbolPriceList = async () => {
    const res: any = await getSymbolPriceList<any>({
      sec_name: "",
      lang_name: "",
      lic_name: "",
      country_code: "",
      action_name: "",
      page_name: "",
      meta_data: "",
      raw_url: "",
      business_id: "",
      parameter: "",
      startPage: 0,
      pageNum: 0,
      sort_type: "",
      sort_field: "",
      language: "",
      type: "",
      symbolType: paramNames[router.pathname],
    } as SymbolParams);
    setDatas([...res]);
  };

  useEffect(() => {
    console.log(router.pathname);
    if (router.pathname === "/[country]") {
      setBid(true);
    } else {
      setBid(false);
    }
    onSymbolPriceList();
    const timer = setInterval(() => {
      onSymbolPriceList();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const onChangeColor = (item: any) => {
    const str = item?.charAt(0);
    if (str == "-") {
      return "#D90000";
    }
    if (str == "+") {
      return "#00CB00";
    }
    return "#00CB00";
  };

  const dat = {
    up: [5, 10, 5, 20, 15, 10, 32, 2, 23, 22],
    down: [5, 10, 5, 20, 15, 10, 32, 2, 13, 0],
  };

  const redirectTo = (tab: any) => {
    router.push(tabNames[tab]);
  };

  return (
    <div className="max-w-6xl mx-auto pb-8 pt-10 px-4 md:pb-14 md:pt-20">
      <div className="flex sm:flex-row lg:flex-row flex-col justify-between items-center mb-4 md:mb-7">
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 1 },
          }}
          transition={{ duration: 0.4 }}
          className="start-products mb-5 xl:mb-0 lg:mb-0 md:mb-0 text-xl base-black intro-font md:text-3xl text-center md:text-left lg:text-left xl:text-left"
        >
          {t("Trade over 1900 global markets")}
        </motion.div> */}
        {/* <div className="relative gray-bg overflow-hidden rounded-full">
          <input
            className="bg-transparent h-10 outline-none w-full pl-6 pr-10"
            placeholder={t("search")}
            type="text"
          />
          <span className="text-[#748597] absolute right-4 top-1/2 -translate-y-1/2 text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div> */}
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 1 },
        }}
        transition={{ duration: 0.4 }}
        className=" md:rounded-3xl shadow"
      >
        {(() => {
          if (router.pathname === "/[country]") {
            return (
              <>
                <div className="bg-[#0C2038] h-12 md:h-16 space-x-1 md:space-x-2 rounded-t-xl md:rounded-t-3xl overflow-x-auto table-wide-range">
                  <ul className="flex h-full">
                    {[
                      "Popular",
                      "Forex",
                      "Indices",
                      "Commodities",
                      "Crypto",
                    ].map((tab, index) => (
                      <li
                        key={index}
                        onClick={() => redirectTo(tab)}
                        className={classNames(
                          "text-white relative h-full flex items-center justify-center cursor-pointer",
                          "px-6 md:px-10",
                          "after:absolute after:left-0 after:bottom-0 after:h-1 after:bg-[#00b144] after:rounded after:transition-all",
                          {
                            "after:w-full": tabNames[tab] === activeIdx,
                            "after:w-0 hover:after:w-full":
                              tabNames[tab] !== activeIdx,
                          }
                        )}
                      >
                        {t(tab)}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            );
          } else {
            return <></>;
          }
        })()}
        <div className="lg:overflow-hidden xl:overflow-hidden	">
          <table className="w-full rounded-b-xl md:rounded-b-3xl">
            <colgroup>
              <col width={60} />
              <col width={220} />
              <col width={220} />
              <col width={220} />
              <col width={220} />
              <col width={220} />
              <col width={220} />
              <col width={60} />
            </colgroup>
            <thead>
              <tr
                className={classNames(
                  `${
                    bid ? "pro-bg" : "pro-pagebg"
                  } h-12 md:h-16 text-left text-[10px] md:text-base lg:text-base xl:text-base whitespace-nowrap`
                )}
              >
                <th />
                <th className="border-b border-[#C0CFE2]">
                  {t("Instruments")}
                </th>
                <th className="border-b border-[#C0CFE2]">{t("Bid Price")}</th>
                <th className="border-b border-[#C0CFE2]">{t("Ask Price")}</th>
                <th className="border-b border-[#C0CFE2]">{t("Spread")}</th>
                <th className="border-b border-[#C0CFE2]">{t("Change")}</th>
                <th className="border-b border-[#C0CFE2]">{t("Trend")}</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {datas.map((item: any, index: number) => (
                <motion.tr
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 0.4, delay: index / 10 }}
                  key={index}
                  className="h-12 md:h-16 odd:bg-[#F5F6FA] text-sm md:text-base"
                >
                  <td />
                  <td className="read-font">{item.symbol_Name}</td>
                  <td className="read-font">{item.bid_Price}</td>
                  <td className="read-font">{item.ask_Price}</td>
                  <td className="read-font">{item.spread}</td>
                  <td style={{ color: onChangeColor(item.change_Percent) }}>
                    {item.change_Percent ?? "--"}
                  </td>
                  <td>
                    <Sparklines
                      data={Number(item.change_Percent) > 0 ? dat.up : dat.down}
                    >
                      <SparklinesLine
                        style={{
                          strokeWidth: 2.5,
                        }}
                        color={onChangeColor(item.change_Percent)}
                      />
                    </Sparklines>
                  </td>
                  <td />
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 1 },
        }}
        transition={{ duration: 0.4 }}
        className="flex justify-center pt-10"
      >
        <Link href="/products/conditions">
          <button className="rounded-full cmn-btn bg-primary px-[1.5rem] py-[0.5rem]">
            {t("More Instruments")}
          </button>
        </Link>
        {/* <button className="rounded-full cmn-btn bg-primary">
          {' '}
          {t('Explore Markets')}
        </button> */}
      </motion.div>
    </div>
  );
}
