import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import PanelHeader from "../../components/PanelHeader";

interface Props {
  title: string;
}

export default function Decision() {
  const { t } = useTranslation("common");

  return (
    <div className="max-w-6xl mx-auto py-10 md:py-14 px-4">
      <PanelHeader title={t("How To Make Informed Trading Decision")} />
      <ul className="flex sm:flex-row lg:flex-row flex-col">
        {[
          {
            title: t("Fundamental & Technical Analysis"),
            desc: t(
              "Traders can decide whether they want to rely exclusively on fundamental or technical analysis or if they would like to combine both."
            ),
            img: "/static/images/products/analysis.png",
          },
          {
            // title: `Manage\nRisks`,
            title: t(`Manage Risks`),
            desc: t(
              "Based on your risk-reward ratio, you can determine how much potential profit you need to counteract a potential loss. If you have a 2:1 ratio, you can expect your potential profit to be twice your potential loss."
            ),
            img: "/static/images/products/risk.png",
          },
          {
            // title: `Test your\nstrategy`,
            title: t(`Test your strategy`),
            desc: t(
              "Investing on a demo account might help you sharpen your skills before trading with real money."
            ),
            img: "/static/images/products/lamplight-setting.png",
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
            transition={{ duration: 0.4 + index / 10 }}
            className="product-type-list-bg mb-4 md:mb-0 md:mr-8 md:last:odd:mr-0 md:last:mr-0 md:flex-1 rounded-xl md:rounded-3xl p-3 md:p-6"
          >
            <div>
              <div className="mb-3 md:mb-7">
                <Image src={item.img} width={90} height={90} alt="decision" />
              </div>
              <div className="text-white text-xl md:text-2xl whitespace-pre-wrap break-words mb-2 md:mb-4 md:w-9/12 xl:w-9/12 lg:w-9/12">
                {item.title}
              </div>
              <div className="text-white2">{item.desc}</div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

