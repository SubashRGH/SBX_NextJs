import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import PanelHeader from "../../components/PanelHeader";
import { CheckIcon } from "@heroicons/react/24/solid";

interface Props {
  title: string;
}

export default function Swap({ title }: Props) {
  const { t } = useTranslation("common");

  return (
    <div className="max-w-4xl mx-auto py-10 md:py-28 space-y-10 md:space-y-16 px-4 md:px-0">
      <div>
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 1 },
          }}
          transition={{ duration: 0.4 }}
          className="intro-font text-2xl md:text-3xl mb-3 text-white text-center lg:text-left"
        >
          {t("4. Overnight Positions (Swaps)")}
        </motion.h3>
        <div className="space-y-4">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.4 }}
            className="text-[#6D7987] md:w-8/12 xl:w-8/12 lg:w-8/12"
          >
            {/* Swap is the interest that is applied to all forex trading
          positions that are left open overnight between Monday to Friday
          (at 17:00 EST) for all open positions. Swap rates differ from
          one currency pair to another. */}
            {t(
              "Swap is the interest that is applied to all forex trading positions that are left open overnight between Monday to Friday (at 17:00 EST) for all open positions. Swap rates differ from one currency pair to another."
            )}
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.4 }}
            className="text-[#6D7987] md:w-10/12 xl:w-10/12 lg:w-10/12"
          >
            {/* Please bear in mind that when trading forex pairs, triple swaps
          are charged on Wednesdays (to cover the weekend fee). Overnight
          fees for oil and natural gas are charged on Friday. */}
            {title}
          </motion.p>
        </div>
      </div>
      <div>
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 1 },
          }}
          transition={{ duration: 0.4 }}
          className="intro-font text-2xl md:text-3xl mb-3 text-white text-center lg:text-left"
        >
          {t("5. Execution Policy")}
        </motion.h3>
        <ul className="space-y-4">
          {[
            t("All our trades are executed in less than a second"),
            t("No requotes policy"),
            t("Real-time market execution"),
          ].map((text, i) => (
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.4 }}
              key={text}
              className="flex items-center space-x-2 md:space-x-4"
            >
              <div
                className={classNames(
                  `flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-[#00b144] rounded-full text-white text-lg bullet${i}`
                )}
              >
                {/* <CheckIcon className="w-[1em] h-[1em]" /> */}
                <svg
                  className="mt-px"
                  xmlns="http://www.w3.org/2000/svg"
                  height="13px"
                  version="1.1"
                  viewBox="0 0 18 15"
                  width="15px"
                >
                  <title />
                  <desc />
                  <defs />
                  <g
                    fill="none"
                    fillRule="evenodd"
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                  >
                    <g
                      fill="#fff"
                      id="Core"
                      transform="translate(-423.000000, -47.000000)"
                    >
                      <g
                        id="check"
                        transform="translate(423.000000, 47.500000)"
                      >
                        <path
                          d="M6,10.2 L1.8,6 L0.4,7.4 L6,13 L18,1 L16.6,-0.4 L6,10.2 Z"
                          id="Shape"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <p className="text-white">{text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

