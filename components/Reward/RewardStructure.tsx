import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BlurImage from "../BlurImage";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import LotsText from "./LotsText";

function RewardStructure() {
  const { t } = useTranslation("common");
  const [country, setCountry] = useState<any>();
  // const LotsText = dynamic(() => import("./LotsText"));
  useEffect(() => {
    const data = sessionStorage.getItem("country");
    setCountry(data);
  }, []);
  return (
    <>
      <div className="bg-black">
        <div className="py-10">
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
            <div className="stkbnx-heading-white text-center mb-2">
              {t("Stockbanx's Reward Structure")}
            </div>{" "}
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
            <p className="text-base text-[#A8ADBA] text-center mb-10">
              {t("The more you refer, the higher the reward.")}
            </p>{" "}
          </motion.div>
          <div className="stpe-row relative">
            {/* reward step  */}
            <div className="flex items-center mb-8">
              <Image
                src="/static/images/partner/step-1.svg"
                alt="step"
                width={50}
                height={33}
              />
              <p className="text-xl text-white ml-6"> {t("Premium")} </p>
            </div>
            <div className="gray-bg min-h-[231px] mob-airpod-card-padding md:pt-6 md:p-4 md:px-20 rounded-2xl flex sm:flex-row lg:flex-row  flex-col justify-between sm:ml-12 lg:ml-[5rem] ml-0 md:items-center xl:items-center lg:items-center prize-card-bg">
              <div className="md:basis-1/2">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xl text-[#00b144] intro-font">
                    {" "}
                    {t("Get")}
                  </p>
                  <div className="stkbnx-heading-white center-in-mob mb-2">
                    {t("Apple Airpod")} <br /> {t("3rd Generation")}
                  </div>{" "}
                </motion.div>
              </div>
              <div className="md:basis-1/2 center-in-mob flex justify-end items-center">
                <div className="w-[50%]">
                  <img
                    src="/static/images/partner/cropairpod.png"
                    className="w-full h-full"
                  ></img>
                </div>
                {/* <Image
                  src="/static/images/partner/cropairpod.png"
                  alt="award"
                  width={224}
                  height={247}
                /> */}
                {/* <div className="shade-gray-bg rounded-2xl px-10 relative w-[90%] h-[160px] flex justify-center float-right">
                  <div className="absolute sm:top-[-58px] lg:top-[-58px]  xl:top-[-58px] top-[0px]">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 1 },
                      }}
                      transition={{ duration: 1.2 }}
                    >
                      <Image
                        src="/static/images/partner/airpod.png"
                        alt="award"
                        width={224}
                        height={247}
                      />
                    </motion.div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* client list */}
            <div className="flex text-white gap-in-mob sm:flex-row lg:flex-row lg:space-x-6 md:space-x-6 flex-col justify-between mt-6 mb-8 sm:ml-12 lg:ml-[5rem] ml-0 md:items-center xl:items-center lg:items-center">
              <motion.div
                className="bg-[#33CCFF1A] border border-[#33CCFF] py-4 px-8 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-4xl mb-2 font-semibold"> 10</h1>
                <p className="text-sm"> {t("New Clients")}</p>
              </motion.div>
              {/* <h1 className="text-2xl font-semibold md:text-left xl:text-left	 lg:text-left	 text-center">
                {" "}
                Or{" "}
              </h1> */}
              <motion.div
                className="bg-[#33CCFF1A] border border-[#00b144] py-4 px-8 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl mb-2 font-semibold"> 50,000</h1>
                <p className="text-sm"> {t("Net Deposit $")} </p>
              </motion.div>
              {/* <h1 className="text-4xl font-semibold md:text-left xl:text-left	 lg:text-left	 text-center">
                {" "}
                +{" "}
              </h1> */}
              <motion.div
                className="bg-[#33CCFF1A] border border-[#00b144] py-4 px-8 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-4xl mb-2 font-semibold"> 400</h1>
                <p className="text-sm"> {t("Total Lots Traded (new)")} </p>
              </motion.div>
            </div>
            {/* text data */}
            <LotsText />
          </div>
          {/* step 2 */}
          <div className="stpe-row relative">
            {/* reward step  */}
            <div className="flex items-center mb-8">
              <Image
                src="/static/images/partner/step-2.svg"
                alt="step"
                width={50}
                height={33}
              />
              <p className="text-xl ml-6 text-white"> {t("Premium")}+ </p>
            </div>
            <div className="gray-bg min-h-[231px] mob-airpod-card-padding md:pt-6 md:py-4 md:px-20 rounded-2xl flex sm:flex-row lg:flex-row  flex-col justify-between sm:ml-12 lg:ml-[5rem] ml-0 md:items-center xl:items-center lg:items-center prize-card-bg">
              <div className="md:basis-1/2">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xl text-[#00b144] intro-font">
                    {" "}
                    {t("Win")}
                  </p>
                  <div className="stkbnx-heading-white center-in-mob mb-2">
                    {t("Apple Watch")}
                  </div>{" "}
                </motion.div>
              </div>
              <div className="md:basis-1/2 center-in-mob flex justify-end items-end">
                <div className="w-[70%] ">
                  <img
                    src="/static/images/partner/watch.png"
                    className="w-full h-full"
                  ></img>
                </div>
                {/* <Image
                  src="/static/images/partner/cropairpod.png"
                  alt="award"
                  width={224}
                  height={247}
                /> */}
                {/* <div className="shade-gray-bg rounded-2xl px-10 relative w-[90%] h-[160px] flex justify-center float-right">
                  <div className="absolute sm:top-[-58px] lg:top-[-58px]  xl:top-[-58px] top-[0px]">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 1 },
                      }}
                      transition={{ duration: 1.2 }}
                    >
                      <Image
                        src="/static/images/partner/airpod.png"
                        alt="award"
                        width={224}
                        height={247}
                      />
                    </motion.div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* client list */}
            <div className="flex gap-in-mob text-white sm:flex-row lg:flex-row lg:space-x-6 md:space-x-6 flex-col justify-between md:items-center xl:items-center lg:items-center mt-6 mb-8 sm:ml-12 lg:ml-[5rem] ml-0">
              <motion.div
                className="bg-[#33CCFF1A] border border-[#33CCFF] py-4 px-8 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-4xl mb-2 font-semibold"> 25</h1>
                <p className="text-sm"> {t("New Clients")}</p>
              </motion.div>
              {/* <h1 className="text-2xl font-semibold md:text-left xl:text-left	 lg:text-left	 text-center">
                {" "}
                Or{" "}
              </h1> */}
              <motion.div
                className="bg-[#33CCFF1A] border border-[#00b144] py-4 px-8 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl mb-2 font-semibold"> 100,000</h1>
                <p className="text-sm"> {t("Net Deposit $")} </p>
              </motion.div>
              {/* <h1 className="text-4xl font-semibold md:text-left xl:text-left	 lg:text-left	 text-center">
                {" "}
                +{" "}
              </h1> */}
              <motion.div
                className="bg-[#33CCFF1A] border border-[#00b144] py-4 px-8 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-4xl mb-2 font-semibold"> 1,000</h1>
                <p className="text-sm"> {t("Total Lots Traded (new)")} </p>
              </motion.div>
            </div>
            {/* text data */}
            <LotsText />
          </div>
          {/* step 2 */}
          <div className="stpe-row relative">
            {/* reward step  */}
            <div className="flex items-center mb-8">
              <Image
                src="/static/images/partner/step-3.svg"
                alt="step"
                width={50}
                height={33}
              />
              <p className="text-xl ml-6 text-white"> {t("Elite")} </p>
            </div>
            <div className="gray-bg min-h-[231px]   rounded-2xl flex sm:flex-row lg:flex-row  flex-col justify-between sm:ml-12 lg:ml-[5rem] ml-0 md:items-center xl:items-center lg:items-center prize-card-bg">
              <div className="md:basis-1/2 mob-airpod-card-padding md:pt-6 md:p-4 md:pl-20">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xl text-[#00b144] intro-font">
                    {" "}
                    {t("Win")}
                  </p>
                  <div className="stkbnx-heading-white center-in-mob mb-2">
                    {t("iPhone 14")}
                  </div>{" "}
                </motion.div>
              </div>
              <div className="md:basis-1/2 center-in-mob flex justify-center items-end">
                <div className="w-[70%]">
                  <img
                    src="/static/images/partner/iphone.png"
                    className="w-full h-full"
                  ></img>
                </div>
                {/* <Image
                  src="/static/images/partner/cropairpod.png"
                  alt="award"
                  width={224}
                  height={247}
                /> */}
                {/* <div className="shade-gray-bg rounded-2xl px-10 relative w-[90%] h-[160px] flex justify-center float-right">
                  <div className="absolute sm:top-[-58px] lg:top-[-58px]  xl:top-[-58px] top-[0px]">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 1 },
                      }}
                      transition={{ duration: 1.2 }}
                    >
                      <Image
                        src="/static/images/partner/airpod.png"
                        alt="award"
                        width={224}
                        height={247}
                      />
                    </motion.div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* client list */}
            <div className="flex gap-in-mob text-white sm:flex-row lg:flex-row lg:space-x-6 md:space-x-6 flex-col justify-between md:items-center xl:items-center lg:items-center mt-6 mb-8 sm:ml-12 lg:ml-[5rem] ml-0">
              <motion.div
                className="bg-[#33CCFF1A] border border-[#33CCFF] py-4 px-8 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-4xl mb-2 font-semibold"> 50</h1>
                <p className="text-sm"> {t("New Clients")}</p>
              </motion.div>
              {/* <h1 className="text-2xl font-semibold md:text-left xl:text-left	 lg:text-left	 text-center">
                {" "}
                Or{" "}
              </h1> */}
              <motion.div
                className="bg-[#33CCFF1A] border border-[#00b144] py-4 px-8 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl mb-2 font-semibold"> 250,000</h1>
                <p className="text-sm"> {t("Net Deposit $")} </p>
              </motion.div>
              {/* <h1 className="text-4xl font-semibold md:text-left xl:text-left	 lg:text-left	 text-center">
                {" "}
                +{" "}
              </h1> */}
              <motion.div
                className="bg-[#33CCFF1A] border border-[#00b144] py-4 px-8 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-4xl mb-2 font-semibold"> 2,500</h1>
                <p className="text-sm"> {t("Total Lots Traded (new)")} </p>
              </motion.div>
            </div>
            {/* text data */}
            <LotsText />
          </div>
          {/* step 3 */}
          {/* <div className='stpe-row relative'>
            <div className='flex items-center mb-8'>
              <Image
                src='/static/images/partner/step-3.svg'
                alt="step"
                width={50}
                height={33}
              />
              <p className='text-xl ml-3'> Elite</p>
            </div>
            <div className='gray-bg rounded-2xl p-10 flex sm:flex-row lg:flex-row lg:space-x-6 md:space-x-6 flex-col justify-between sm:ml-12 lg:ml-[5rem] ml-0 md:items-center xl:items-center lg:items-center prize-card-bg'>
              <div className="md:basis-1/2">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 0.5 }} >
                  <p className='text-xl text-primary intro-font'> {t("Get")}</p>
                  <div className="stkbnx-heading-white mb-2">MacBook <br /> Pro 13 </div> </motion.div>
              </div>
              <div className="md:basis-1/2">
                <div className='shade-gray-bg rounded-2xl px-10 relative w-[90%] h-[160px] flex justify-center float-right'>
                  <div className='absolute sm:top-[-58px] lg:top-[-58px]  xl:top-[-58px] top-[0px] '>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 1 },
                      }}
                      transition={{ duration: 1.2 }}
                    >
                      <Image
                        src='/static/images/partner/macbook.png'
                        alt="award"
                        width={200}
                        height={241}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex sm:flex-row lg:flex-row lg:space-x-6 md:space-x-6 flex-col justify-between md:items-center xl:items-center lg:items-center mt-6 mb-8 sm:ml-12 lg:ml-[5rem] ml-0'>
              <motion.div className='bg-[#33CCFF1A] border border-[#33CCFF] py-4 px-8 rounded-2xl text-center' initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.4 }}>
                <h1 className='text-4xl mb-2 font-semibold'>  50</h1>
                <p className='text-sm'>  {t("New Clients")}</p>
              </motion.div>
              <h1 className='text-2xl font-semibold xl:text-left	 lg:text-left	 text-center'> Or </h1>
              <motion.div className='bg-[#33CCFF1A] border border-[#33CCFF] py-4 px-8 rounded-2xl text-center' initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.8 }}>
                <h1 className='text-4xl mb-2 font-semibold'> 300,000</h1>
                <p className='text-sm'> {t("Net Deposit $")} </p>
              </motion.div>
              <h1 className='text-4xl font-semibold xl:text-left	 lg:text-left	 text-center'> + </h1>
              <motion.div className='bg-[#33CCFF1A] border border-[#33CCFF] py-4 px-8 rounded-2xl text-center' initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 1 }}>
                <h1 className='text-4xl mb-2 font-semibold'>  5,000</h1>
                <p className='text-sm'> {t("Total Lots Traded (new)")} </p>
              </motion.div>
            </div>
            <LotsText />
          </div> */}
          {/* step 4 */}
          {/* <div className='stpe-row relative'>
            <div className='flex items-center mb-8'>
              <Image
                src='/static/images/partner/step-4.svg'
                alt="step"
                width={50}
                height={33}
              />
              <p className='text-xl ml-3'> Elite + </p>
            </div>
            <div className='gray-bg rounded-2xl p-10 flex sm:flex-row lg:flex-row lg:space-x-6 md:space-x-6 flex-col justify-between sm:ml-12 lg:ml-[5rem] ml-0 md:items-center xl:items-center lg:items-center prize-card-bg'>
              <div className="md:basis-1/2">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 0.5 }} >
                  <p className='text-xl text-primary intro-font'> {t("Win")}</p>
                  <div className="stkbnx-heading-white mb-2">Ingrem Orionx  <br /> Trading Station </div> </motion.div>
              </div>
              <div className="md:basis-1/2">
                <div className='shade-gray-bg rounded-2xl px-10 relative w-[90%] h-[160px] flex justify-center float-right'>
                  <div className='absolute sm:top-[-58px] lg:top-[-58px]  xl:top-[-58px] top-[0px] '>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 1 },
                      }}
                      transition={{ duration: 1.2 }}
                    >
                      <Image
                        src='/static/images/partner/ingrem.png'
                        alt="award"
                        width={413}
                        height={387}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex sm:flex-row lg:flex-row lg:space-x-6 md:space-x-6 flex-col justify-between md:items-center xl:items-center lg:items-center mt-6 mb-8 sm:ml-12 lg:ml-[5rem] ml-0'>
              <motion.div className='bg-[#33CCFF1A] border border-[#33CCFF] py-4 px-8 rounded-2xl text-center' initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.4 }}>
                <h1 className='text-4xl mb-2 font-semibold'>  75</h1>
                <p className='text-sm'>  {t("New Clients")}</p>
              </motion.div>
              <h1 className='text-2xl font-semibold xl:text-left	 lg:text-left	 text-center'> Or </h1>
              <motion.div className='bg-[#33CCFF1A] border border-[#33CCFF] py-4 px-8 rounded-2xl text-center' initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.8 }}>
                <h1 className='text-4xl mb-2 font-semibold'> 500,000</h1>
                <p className='text-sm'> {t("Net Deposit $")} </p>
              </motion.div>
              <h1 className='text-4xl font-semibold xl:text-left	 lg:text-left	 text-center'> + </h1>
              <motion.div className='bg-[#33CCFF1A] border border-[#33CCFF] py-4 px-8 rounded-2xl text-center' initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 1 }}>
                <h1 className='text-4xl mb-2 font-semibold'>  10,000</h1>
                <p className='text-sm'> {t("Total Lots Traded (new)")} </p>
              </motion.div>
            </div>
            <LotsText />
          </div> */}
          {/* step 5 */}
          <div className="stpe-row relative">
            {/* reward step  */}
            <div className="flex items-center mb-8">
              <Image
                src="/static/images/partner/step-4.svg"
                alt="step"
                width={50}
                height={33}
              />
              <p className="text-xl ml-6 text-white"> {t("Elite+")} </p>
            </div>
            <div className="gray-bg min-h-[231px]  rounded-2xl flex sm:flex-row lg:flex-row  flex-col justify-between sm:ml-12 lg:ml-[5rem] ml-0 md:items-center xl:items-center lg:items-center prize-card-bg">
              <div className="md:basis-1/2 mob-airpod-card-padding md:pt-6 md:p-4 md:pl-20">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xl text-[#00b144] intro-font">
                    {" "}
                    {t("Win")}
                  </p>
                  <div className="stkbnx-heading-white center-in-mob mb-2">
                    {t("5Days 4Nights")} <br />
                    {t("Experience")}
                  </div>{" "}
                </motion.div>
              </div>
              <div className="md:basis-1/2 flex justify-end md:justify-center items-end">
                <div className="w-[80%]">
                  <img
                    src="/static/images/partner/bus.png"
                    className="w-full h-full"
                  ></img>
                </div>
                {/* <Image
                  src="/static/images/partner/cropairpod.png"
                  alt="award"
                  width={224}
                  height={247}
                /> */}
                {/* <div className="shade-gray-bg rounded-2xl px-10 relative w-[90%] h-[160px] flex justify-center float-right">
                  <div className="absolute sm:top-[-58px] lg:top-[-58px]  xl:top-[-58px] top-[0px]">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 1 },
                      }}
                      transition={{ duration: 1.2 }}
                    >
                      <Image
                        src="/static/images/partner/airpod.png"
                        alt="award"
                        width={224}
                        height={247}
                      />
                    </motion.div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* client list */}
            <div className="flex text-white gap-in-mob sm:flex-row lg:flex-row lg:space-x-6 md:space-x-6 flex-col justify-between md:items-center xl:items-center lg:items-center mt-6 mb-8 sm:ml-12 lg:ml-[5rem] ml-0">
              <motion.div
                className="bg-[#33CCFF1A]  border border-[#33CCFF] py-4 px-8 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-4xl mb-2 font-semibold"> 75</h1>
                <p className="text-sm"> {t("New Clients")}</p>
              </motion.div>
              {/* <h1 className="text-2xl font-semibold xl:text-left	 lg:text-left	 text-center">
                {" "}
                Or{" "}
              </h1> */}
              <motion.div
                className="bg-[#33CCFF1A] border border-[#00b144] py-4 px-8 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl mb-2 font-semibold"> 500,000</h1>
                <p className="text-sm"> {t("Net Deposit $")} </p>
              </motion.div>
              {/* <h1 className="text-4xl font-semibold xl:text-left	 lg:text-left	 text-center">
                {" "}
                +{" "}
              </h1> */}
              <motion.div
                className="bg-[#33CCFF1A] border border-[#00b144] py-4 px-8 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-4xl mb-2 font-semibold"> 8,000</h1>
                <p className="text-sm"> {t("Total Lots Traded (new)")} </p>
              </motion.div>
            </div>
            {/* text data */}
            <LotsText />
          </div>
          {/* step 6 */}
          <div className="stpe-row hide-path relative">
            {/* reward step  */}
            <div className="flex items-center mb-8">
              <Image
                src="/static/images/partner/step-6.svg"
                alt="step"
                width={50}
                height={33}
              />
              <p className="text-xl ml-6 text-white"> {t("Ambassador")} </p>
            </div>
            <div className="gray-bg mob-airpod-card-padding  min-h-[231px]  rounded-2xl flex sm:flex-row lg:flex-row  flex-col justify-between sm:ml-12 lg:ml-[5rem] ml-0 md:items-center xl:items-center lg:items-center prize-card-bg">
              <div className="md:basis-1/2   md:pl-20">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xl text-[#00b144] intro-font">
                    {" "}
                    {t("Get")}
                  </p>
                  <div className="stkbnx-heading-white center-in-mob mb-2">
                    {t("Luxury car")}
                  </div>{" "}
                </motion.div>
              </div>
              <div className="md:basis-1/2 center-in-mob flex justify-end items-center">
                <div className="w-[100%]">
                  <img
                    src="/static/images/partner/tesla.png"
                    className="w-full h-full"
                  ></img>
                </div>
                {/* <Image
                  src="/static/images/partner/cropairpod.png"
                  alt="award"
                  width={224}
                  height={247}
                /> */}
                {/* <div className="shade-gray-bg rounded-2xl px-10 relative w-[90%] h-[160px] flex justify-center float-right">
                  <div className="absolute sm:top-[-58px] lg:top-[-58px]  xl:top-[-58px] top-[0px]">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 1 },
                      }}
                      transition={{ duration: 1.2 }}
                    >
                      <Image
                        src="/static/images/partner/airpod.png"
                        alt="award"
                        width={224}
                        height={247}
                      />
                    </motion.div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* client list */}
            <div className="flex gap-in-mob  text-white sm:flex-row lg:flex-row lg:space-x-6 md:space-x-6 flex-col justify-between md:items-center xl:items-center lg:items-center mt-6 mb-8 sm:ml-12 lg:ml-[5rem] ml-0">
              <motion.div
                className="bg-[#33CCFF1A] border border-[#33CCFF] py-4 px-8 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-4xl mb-2 font-semibold"> 150</h1>
                <p className="text-sm"> {t("New Clients")}</p>
              </motion.div>
              {/* <h1 className="text-4xl font-semibold xl:text-left	 lg:text-left	 text-center">
                {" "}
                +{" "}
              </h1> */}
              <motion.div
                className="bg-[#33CCFF1A] border border-[#00b144] py-4 px-8 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl mb-2 font-semibold"> 1,000,000</h1>
                <p className="text-sm"> {t("Net Deposit $")} </p>
              </motion.div>
              {/* <h1 className="text-4xl font-semibold xl:text-left	 lg:text-left	 text-center">
                {" "}
                +{" "}
              </h1> */}
              <motion.div
                className="bg-[#33CCFF1A] border border-[#00b144] py-4 px-8 rounded-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-4xl mb-2 font-semibold"> 60,000</h1>
                <p className="text-sm"> {t("Total Lots Traded (new)")} </p>
              </motion.div>
            </div>
            {/* text data */}
            <LotsText />
          </div>
          <div className="text-center lg:mt-24 xl:mt-24  md:mt-24 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.8 }}
            >
              {(() => {
                if (["CN", "HK", "TW"].includes(country)) {
                  return (
                    <>
                      <a
                        className="rounded-full cmn-btn bg-primary mt-5 btn-pad"
                        href={`${process.env.NEXT_PUBLIC_IB_URL}/#/en/user/register`}
                        target="_blank"
                      >
                        {" "}
                        {t("Become a partner")}{" "}
                      </a>
                    </>
                  );
                } else if (country === "GB") {
                  return (
                    <a
                      className="rounded-full cmn-btn bg-primary mt-5 btn-pad"
                      href={`${process.env.NEXT_PUBLIC_IB_URL}/#/en/user/register`}
                      target="_blank"
                    >
                      {" "}
                      {t("Become a partner")}{" "}
                    </a>
                  );
                } else {
                  return (
                    <>
                      {/* account South Africa */}
                      <a
                        className="rounded-full cmn-btn bg-primary mt-5 btn-pad"
                        href={`${process.env.NEXT_PUBLIC_IB_URL}/#/user/register`}
                        target="_blank"
                      >
                        {" "}
                        {t("Become a partner")}{" "}
                      </a>
                    </>
                  );
                }
              })()}
              {/* <button className="rounded-full cmn-btn bg-primary mt-2"> {t("Become a partner")}</button> */}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RewardStructure;

