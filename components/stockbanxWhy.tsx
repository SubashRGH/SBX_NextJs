import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { stockbanxWhyItems } from "@/constants";

const StockbanxWhy = () => {
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col justify-center items-center xl:items-start text-center mt-14 pt-14">
      <div className=" pb-0 pt-10 lg:pt-20 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 1 },
          }}
          transition={{ duration: 0.4 }}
        >
          <div className="stkbnx-heading text-white mb-2 head-texts xl:ltr:!text-left xl:rtl:!text-right">
            {t("The Stockbanx Advantage")}
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 1 },
          }}
          transition={{ duration: 0.6 }}
        >
          <p className=" text-center text-base read-font mb-10 m-auto m-who-we-are mt-4 xl:ltr:!text-left xl:rtl:!text-right">
            {t("Find Out Why We're the Broker of Choice.")}
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.6 }}
            className="flex md:flex-row flex-col mt-8 w-full gap-4"
          >
            {stockbanxWhyItems.map((i) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <div className="get-started-card-1 px-4 xl:px-8 py-8 flex items-center h-full flex-col gap-[2rem]">
                  <div className="max-w-[40px]">
                    <img src={i.icon} className="h-full w-full"></img>
                  </div>
                  <div className="flex flex-col items-start gap-[1rem]">
                    <div className="text-center w-full">
                      <p className="font-bold w-full text-xl text-white ltr:text-center rtl:text-right">
                        {t(i.heading)}
                      </p>
                    </div>
                    <div className="lg:min-h-[48px]">
                      <p className="font-normal text-[#A8ADBA] ltr:!text-left rtl:text-right">
                        {t(i.desc)}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.6 }}
            className="mt-12 mb-12"
          >
            <Link href={`/about/who-we-are`}>
              <a className="rounded-full bg-primary cmn-btn mb-3 md:mb-0 xl:mb-0 lg:mb-0 ltr:mr-4 rtl:ml-4">
                {t("Discover more")}
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default StockbanxWhy;

