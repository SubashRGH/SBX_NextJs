import classNames from "classnames";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import chart from "../public/static/images/about/leader.png";
export default function ProductTable() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [list, setList] = useState<any>([]);
  const { t } = useTranslation("common");

  const symbolList = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/SiteAPI/GetSymbolPriceList`, {
      method: "POST",
      body: JSON.stringify({
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
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    symbolList();
  }, []);

  return (
    <div className="max-w-6xl mx-auto pb-8 pt-10 px-4 md:pb-14 md:pt-20">
      {/* <div className="flex items-center justify-between mb-4 md:mb-7">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 1 },
          }}
          transition={{ duration: 0.4 }}
          className="text-xl base-black intro-font md:text-3xl"
        >
          Trade over 1900 global markets
        </motion.div>
        <div className="relative gray-bg overflow-hidden rounded-full">
          <input className="bg-transparent h-10 outline-none w-full pl-6 pr-10" placeholder="search" type="text" />
          <span className="text-[#748597] absolute right-4 top-1/2 -translate-y-1/2 text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>
      </div> */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 1 },
        }}
        transition={{ duration: 0.4 }}
        className="rounded-xl md:rounded-3xl shadow"
      >
        <div className="bg-[#0C2038] h-12 md:h-16 space-x-1 md:space-x-2 rounded-t-xl md:rounded-t-3xl overflow-x-auto">
          <ul className="flex h-full">
            {["Popular", "Forex", "Indices", "Commodities", "Crypto"].map(
              (tab, index) => (
                <li
                  key={tab}
                  onClick={() => setActiveIdx(index)}
                  className={classNames(
                    "text-white relative h-full flex items-center justify-center cursor-pointer",
                    "px-6 md:px-10",
                    "after:absolute after:left-0 after:bottom-0 after:h-1 after:bg-[#00b144] after:rounded after:transition-all",
                    {
                      "after:w-full": index === activeIdx,
                      "after:w-0 hover:after:w-full": index !== activeIdx,
                    }
                  )}
                >
                  {tab}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="overflow-x-auto">
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
              <tr className="h-12 md:h-16 text-left text-sm md:text-base whitespace-nowrap">
                <th />
                <th className=" border-[#C0CFE2]">{t("Instruments")}</th>
                <th className=" border-[#C0CFE2]">{t("Bid Price")}</th>
                <th className=" border-[#C0CFE2]">{t("Ask Price")}</th>
                <th className=" border-[#C0CFE2]">{t("Spread")}</th>
                <th className=" border-[#C0CFE2]">{t("Change")}</th>
                <th className=" border-[#C0CFE2]">{t("Trend")}</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {new Array(6)
                .fill(undefined)
                .map(() => [
                  "GBP/USD",
                  "1.1122",
                  "1.1123",
                  "0.0001",
                  "-0.24%",
                  "Chart Image",
                ])
                .map((item, index) => (
                  <motion.tr
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: { opacity: 1, y: 1 },
                    }}
                    transition={{ duration: 0.4, delay: index / 10 }}
                    key={index}
                    className="h-12 md:h-16 odd:bg-[#F5F6FA] text-sm md:text-base"
                  >
                    <td />
                    <td className="read-font">{item[0]}</td>
                    <td className="read-font">{item[1]}</td>
                    <td className="read-font">{item[2]}</td>
                    <td className="read-font">{item[3]}</td>
                    <td className="text-[#D90000]">{item[4]}</td>
                    <td>
                      <div className="inline-block w-36 h-9">{item[5]}</div>
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
        <button className="rounded-full cmn-btn bg-primary">
          {t("More Instruments")}
        </button>
      </motion.div>
    </div>
  );
}

