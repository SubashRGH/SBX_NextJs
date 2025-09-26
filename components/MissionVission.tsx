import React, { Fragment, ReactNode, useEffect, useState } from "react";
import Banner from "./Banner";
import Why from "./Why";
import ProductTable from "./product/ProductTable";
import News from "./News";
import Download from "./DownloadApp";
import Image from "next/image";
import Psp from "./Psp";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
interface Props {
  title: ReactNode;
  description: string;

  imgSrc: string;
}
const MissionVission = () => {
  const { t } = useTranslation("common");

  return (
    <div className="md:px-16 lg:px-0 mx-auto">
      <div className="flex sm:flex-row md:flex-col lg:flex-row lg:space-x-8 flex-col justify-between items-center mt-12 gap-12">
        <div className="lg:w-1/2 w-full h-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 1 },
            }}
            className="h-full"
            transition={{ duration: 0.8 }}
          >
            <div className="border-slate-200  h-full relative">
              <div className="rounded-full w-15	h-15  ">
                <img
                  src="/static/images/icons/about-us-1.webp"
                  alt="apple"
                  // width={60}
                  // height={60}
                />
              </div>
              <h1 className="text-[32px] font-[500]"> {t("Mission")} </h1>
              <p className="text-[15px] font-[500] pt-4">
                {t(
                  "Our mission is to empower traders to achieve financial growth through a platform that combines innovation, reliability, and support. We aim to equip our users with the tools and insights they need to transform their"
                )}
              </p>
            </div>
          </motion.div>
        </div>
        <div className="lg:w-1/2 md:mt-10 lg:mt-0 mt-4 w-full h-full">
          <motion.div
            className="h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-slate-200 h-full relative">
              <div className="rounded-full w-15	h-15">
                <img
                  src="/static/images/icons/about-us-2.webp"
                  alt="apple"
                  // width={60}
                  // height={60}
                />
              </div>
              <h1 className="text-[32px] font-[500]">
                {" "}
                {t("Your guided steps into trading")}{" "}
              </h1>
              <p className="text-[15px] font-[500] pt-4">
                {t(
                  "Our vision is to redefine the trading landscape by making high-quality trading accessible and achievable for everyone, ensuring that every trader can confidently pursue their financial ambitions. Our goal is to be the gateway to trading excellence, creating a global community where every trader has the opportunity to succeed and thrive."
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MissionVission;

