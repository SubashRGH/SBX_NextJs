import React, { Fragment, ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
interface Props {
  title: ReactNode;
  description: string;
  imgSrc: any;
  tabImgSrc: any;
  mobImgSrc: any;
  btnText: any;
}
import Image from "next/image";
const BannerMainWithButton = ({
  title,
  description,
  imgSrc,
  tabImgSrc,
  mobImgSrc,
  btnText,
}: Props) => {
  const { t } = useTranslation("common");
  const [lang, setLang] = useState<any>();
  const [eventName, setEventName] = useState<any>("");
  const [country, setCountry] = useState<any>();
  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setCountry(data);
    setTimeout(() => {
      if (sessionStorage.getItem("event") !== null) {
        setEventName(`${sessionStorage.getItem("event")}`);
      } else {
      }
    }, 500);
  }, []);
  return (
    <>
      <div className="stkbnx-bannerbg relative hidden md:block stkbnx-main-btnbanner bz-banner">
        <div>
          {/* desktop banner */}

          <div className="stkbnx-bannerbg-content   stkbnx-main-btnbanner  relative hidden lg:flex sm:flex-row lg:flex-row  md:flex-row flex-col justify-between items-center">
            {/* <div className="main-first-fold-bg-img"> */}

            <Image src={imgSrc} layout="fill" alt="banner" />

            {/* </div> */}
            <div className="flex relative lg:flex-row flex-col w-full stkbnx-container mx-auto">
              <div className="absolute -left-[35rem] -top-[45rem]">
                <img
                  src="/static/images/about/atheletemask.png"
                  className="w-full h-full select-none"
                ></img>
              </div>
              <div className="stkbnx-bannerbg-content-div md:basis-5/12 ">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 1 }}
                  transition={{ duration: 0.8 }}
                  className="mb-4"
                >
                  <div className="md:text-3xl xl:text-[42px] lg:text-[42px] text-3xl intro-font mb-2 xl:leading-[3.5rem] lg:leading-[3.5rem] leading-[2rem] mt-10 xl:mt-0 lg:mt-0">
                    <p className="text-white ">{title}</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.8 }}
                  className="mb-6"
                >
                  <p className=" WhyCpt-text w-[80%] text-left text-base text-white  opacity-60 ">
                    {description}
                  </p>
                  {/* <RegisterButton
                            containerStyle="rounded-full cmn-btn bg-primary mb-3 md:mb-0 xl:mb-0 lg:mb-0"
                            title={t("Open Account")}
                          /> */}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <a
                    className="btn-pad font-bold block text-center bg-primary text-neutral text-base w-[188px] h-[52px] rounded-[100px]"
                    href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${lang}/user/register/individual${eventName}`}
                    target="_blank"
                  >
                    {" "}
                    {btnText}{" "}
                  </a>
                  {/* <button className="bg-[#00b144] font-medium  text-base w-[188px] h-[52px] rounded-[100px]">
                    {btnText}
                  </button> */}
                  {/* <RegisterButton
                            containerStyle="rounded-full cmn-btn bg-primary mb-3 md:mb-0 xl:mb-0 lg:mb-0"
                            title={t("Open Account")}
                          /> */}
                </motion.div>
              </div>
              <div className="md:basis-5/12">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 80 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 1 }}
                  className="video-content"
                >
                  {/* <div className="main-first-fold-bg-img"> */}
                  {/* <Image
                              className=" video "
                              src="/static/images/home/Get-to-know-banner.svg"
                              alt="main-banner"
                              width={790}
                              height={500}
                            /> */}
                  {/* <image></image> */}
                  {/* <video
                              className="video"
                              autoPlay
                              loop
                              muted
                              poster="/static/images/home/poster.png"
                            >
                              <source src={video} type="video/mp4" />
                            </video> */}
                  {/* </div> */}
                </motion.div>
              </div>
            </div>
          </div>

          {/* tablet banner */}

          <div className="stkbnx-bannerbg-content   stkbnx-main-btnbanner  relative flex lg:hidden sm:flex-row lg:flex-row  md:flex-row flex-col justify-between items-center">
            {/* <div className="main-first-fold-bg-img"> */}

            <Image src={tabImgSrc} layout="fill" alt="banner" />

            {/* </div> */}
            <div className="flex relative lg:flex-row flex-col w-full stkbnx-container mx-auto">
              <div className="absolute -left-[30rem] -top-[40rem]">
                <img
                  src="/static/images/about/atheletemask.png"
                  className="w-full h-full select-none"
                ></img>
              </div>
              <div className="stkbnx-bannerbg-content-div md:basis-5/12 ">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 1 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <div className="md:text-3xl xl:text-5xl lg:text-5xl text-3xl intro-font mb-2 xl:leading-[3.5rem] lg:leading-[3.5rem] leading-[2rem] mt-10 xl:mt-0 lg:mt-0">
                    <p className="text-white mb-4 ">{title}</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="w-[40%] WhyCpt-text text-left text-base text-white  opacity-60 ">
                    {description}
                  </p>
                  {/* <RegisterButton
                            containerStyle="rounded-full cmn-btn bg-primary mb-3 md:mb-0 xl:mb-0 lg:mb-0"
                            title={t("Open Account")}
                          /> */}

                  <button className="bg-[#00b144] mt-8 font-medium  text-base w-[188px] h-[52px] rounded-[100px]">
                    {btnText}
                  </button>
                </motion.div>
              </div>
              <div className="md:basis-5/12">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 80 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 1 }}
                  className="video-content"
                >
                  {/* <div className="main-first-fold-bg-img"> */}
                  {/* <Image
                              className=" video "
                              src="/static/images/home/Get-to-know-banner.svg"
                              alt="main-banner"
                              width={790}
                              height={500}
                            /> */}
                  {/* <image></image> */}
                  {/* <video
                              className="video"
                              autoPlay
                              loop
                              muted
                              poster="/static/images/home/poster.png"
                            >
                              <source src={video} type="video/mp4" />
                            </video> */}
                  {/* </div> */}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile banner */}

      <div className="md:hidden  relative block w-full ">
        {/* <div className="absolute top-0 left-0 ">
          <img src="/static/images/about/aboutmobtop.png"></img>
        </div> */}
        <div className="relative px-6 gap-4 pb-6 pt-20  text-center flex flex-col justify-center items-center">
          <p className="meri-font text-white text-3xl">{title}</p>
          <p className="text-[#A8ADBA] text-sm font-normal">{description}</p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* <RegisterButton
                            containerStyle="rounded-full cmn-btn bg-primary mb-3 md:mb-0 xl:mb-0 lg:mb-0"
                            title={t("Open Account")}
                          /> */}

            <button className="bg-[#00b144] mt-8 font-medium  text-base w-[188px] h-[52px] rounded-[100px] mx-auto">
              {btnText}
            </button>
          </motion.div>
        </div>
        <div className="mt-8">
          <img src={mobImgSrc} className="w-full h-full"></img>
        </div>
      </div>
    </>
  );
};

export default BannerMainWithButton;

