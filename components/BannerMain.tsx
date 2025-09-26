import React, { Fragment, ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
interface Props {
  title: ReactNode;
  description: string;
  imgSrc?: any;
  tabImgSrc?: any;
  mobImgSrc?: any;
}
import Image from "next/image";
const BannerMain = ({
  title,
  description,
  imgSrc,
  tabImgSrc,
  mobImgSrc,
}: Props) => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="z-[1] stkbnx-bannerbg hidden md:block stkbnx-main-banner bz-banner relative">
        <div className="z-[2] relative">
          {/* desktop banner */}
          <div className="stkbnx-bannerbg-content   stkbnx-main-banner  relative hidden lg:flex sm:flex-row lg:flex-row  md:flex-row flex-col justify-between items-center">
            {imgSrc && <Image src={imgSrc} layout="fill" alt="banner" />}
            <div className="flex lg:flex-row flex-col w-full stkbnx-container mx-auto">
              <div
                className={`stkbnx-bannerbg-content-div ${
                  imgSrc ? "md:basis-5/12" : "m-auto"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 1 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <div
                    className={`md:text-3xl ${
                      imgSrc ? "w-[300px]" : "w-full text-center"
                    } xl:text-5xl lg:text-5xl text-3xl intro-font mb-2 xl:leading-[3.5rem] lg:leading-[3.5rem] leading-[2rem] mt-10 xl:mt-0 lg:mt-0`}
                  >
                    <p className="text-white mb-4 ">{title}</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <p
                    className={`WhyCpt-text ${
                      imgSrc
                        ? "w-[530px] text-left"
                        : "max-w-[500px] text-center m-auto"
                    } text-base text-white  opacity-60`}
                  >
                    {description}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* tablet banner */}

          <div className="stkbnx-bannerbg-content   stkbnx-main-banner  relative flex lg:hidden sm:flex-row lg:flex-row  md:flex-row flex-col justify-between items-center">
            {tabImgSrc && <Image src={tabImgSrc} layout="fill" alt="banner" />}

            {/* </div> */}
            <div className="flex lg:flex-row flex-col w-full stkbnx-container mx-auto">
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
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-[1] hidden xl:block absolute -top-[70%] -left-[95%] md:-top-[70%] md:-left-[40%] xl:-top-[60%] xl:-left-[30%]">
          <Image
            src={"/static/images/banner/gradiant-radial.png"}
            width={788}
            height={877}
          />
        </div>
        <div className="absolute top-[34%] -right-[27%] md:-top-[80%] md:-right-[20%] xl:-top-[100%] xl:-right-[10%]">
          <Image
            src={"/static/images/banner/gradiant-radial.png"}
            width={788}
            height={877}
          />
        </div>
      </div>

      {/* mobile banner */}

      <div className="md:hidden  relative block w-full ">
        <div className="z-[1] relative px-6 gap-4 pb-6 pt-20  text-center flex flex-col justify-center items-center">
          <p className="meri-font w-[202px] text-white font-bold text-3xl">
            {title}
          </p>
          <p className="text-[#A8ADBA] text-sm font-normal">{description}</p>
        </div>
        {mobImgSrc && (
          <div className="mt-8">
            <img src={mobImgSrc} className="w-full h-full"></img>
          </div>
        )}
        <div className="absolute -top-[70%] -right-[60%] md:-top-[10%] md:-right-[10%] xl:-top-[100%] xl:-right-[10%]">
          <Image
            src={"/static/images/banner/gradiant-radial.png"}
            width={788}
            height={877}
          />
        </div>
      </div>
    </>
  );
};

export default BannerMain;

