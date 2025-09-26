import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "../../styles/ProductsCrypto.module.css";
import PanelHeader from "../PanelHeader";
interface Props {
  title: string;
}

export default function Introduce() {
  const { t } = useTranslation("common");

  return (
    <div className="max-w-6xl mx-auto py-10 md:py-14 px-4">
      <PanelHeader
        title={t("Why trade cryptocurrency leveraged products with Stockbanx?")}
      />
      <ul className="flex flex-wrap justify-center">
        {[
          {
            img: "/static/images/products/wallet.png",
            title: t("No digital wallet"),
            // title: 'No digital\nwallet',
            content: t(
              "You can trade cryptocurrency on the same MT4 platform."
            ),
            tc: false,
          },
          {
            img: "/static/images/products/commission.png",
            title: t("Zero Commission"),
            // title: 'Zero\nCommission',
            content: t("No need to pay a commission on any transaction*"),
            tc: true,
          },
          {
            img: "/static/images/products/lever.png",
            title: t("Leveraged crypto trading"),
            // title: 'Leveraged\ncrypto trading',
            content: t(
              "Get higher capital when you trade cryptocurrencies with up to 1:10 leverage."
            ),
            tc: false,
          },
          {
            img: "/static/images/products/lamplight-check.png",
            title: t("All trading strategies allowed"),
            // title: 'All trading\nstrategies allowed',
            content: t(
              "Expert advisors & algorithmic trading strategies are welcome to ensure you have the flexibility to trade your favorite cryptocurrencies."
            ),
            tc: false,
          },
          {
            img: "/static/images/products/trade.png",
            title: t("Trade Cryptocurrency CFDs 24/7"),
            // title: 'Trade Cryptocurrency\nCFDs 24/7',
            content: t(
              "Trade Bitcoin, Bitcoin Cash, Ethereum, Litecoin and Ripple anytime, anywhere."
            ),
            tc: false,
          },
        ].map((item, index) => (
          <motion.li
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.4, delay: index / 10 }}
            className={`${styles["introduce-item"]} product-type-list-bg mb-4 md:mb-6 px-3 md:px-5 pt-2 md:pt-3 pb-3 md:pb-6 rounded-3xl space-y-2 md:space-y-4`}
          >
            <div className="w-14 h-14 md:w-20 md:h-20 relative">
              <Image src={item.img} layout="fill" alt="introduce" />
            </div>
            <h4 className="text-white intro-font text-lg md:text-2xl whitespace-pre-wrap break-words !font-normal md:w-10/12 xl:w-10/12 lg:w-10/12">
              {item.title}
            </h4>

            {(() => {
              if (item.tc) {
                return (
                  <>
                    <p className="text-[#6D7987] text-sm md:text-base w-11/12">
                      {item.content}
                    </p>
                    <p className="text-[#6D7987] text-[13px]  w-11/12">
                      {t("T&Cs Apply*")}
                    </p>
                  </>
                );
              } else {
                return (
                  <>
                    <p className="text-[#6D7987] text-sm md:text-base w-11/12">
                      {item.content}
                    </p>
                  </>
                );
              }
            })()}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

