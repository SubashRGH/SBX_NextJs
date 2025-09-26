import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { listItems, relatedArticals, smallCardArray } from "@/constants";
import EducationCard from "./educationcard/[slug]";
import BlurImage from "@/components/BlurImage";

function getAsString(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) {
    return value[0]; // Take the first element if it's an array
  }
  return value; // Return as is if it's already a string or undefined
}

const WhatIsLot: React.FC = () => {
  const router = useRouter();

  const {
    pannerTitle,
    pannerDis,
    dis1,
    imgSrc1,
    title1,
    dis2,
    imgSrc2,
    title2,
    dis3,
    imgSrc3,
    title3,
    dis4,
    imgSrc4,
    dis5,
    title5,
  } = router.query;
  useEffect(() => {
    console.log("Query parameters:", router.query);
  }, [router.query]);

  const handleCopyUrl = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("URL copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <div className="relative">
        <div className="w-full !py-16 md:py-12 lg:py-6 flex flex-col stkbnx-container md:flex-row">
          <div className="lg:w-[60%] md:text-left text-center flex flex-col justify-center w-full md:w-[50%]">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full text-center text-white md:text-left text-3xl md:text-[40px] intro-font !leading-[1.2] whitespace-pre-wrap break-words max-w-[514px]"
            >
              {pannerTitle}
            </motion.h1>

            <p className="text-[#A8ADBA] mt-6">
              Improve your knowledge of trading terms with our glossary. Get a
              better understanding of trading terms and definitions used across
              the financial markets.
            </p>
            <div className="flex social-icon items-center mt-11">
              <a href=" /" target="_blank">
                <span className="mr-5">
                  <BlurImage
                    src="/static/images/icons/twitter.svg"
                    alt="twitter"
                    width={17}
                    height={17}
                  />
                </span>
              </a>
              <a href="/" target="_blank">
                <span className="mr-5">
                  <BlurImage
                    src="/static/images/icons/linkedin.svg"
                    alt="linkedin"
                    width={17}
                    height={17}
                  />
                </span>
              </a>
              <a href="/" target="_blank">
                <span className="mr-5">
                  <BlurImage
                    src="/static/images/icons/facebook.svg"
                    alt="facebook"
                    width={17}
                    height={17}
                  />
                </span>
              </a>

              <span onClick={handleCopyUrl} style={{ cursor: "pointer" }}>
                <BlurImage
                  src="/static/images/icons/share.png"
                  alt="share"
                  width={17}
                  height={17}
                />
              </span>
            </div>
          </div>
          <div className="w-full relative z-20 lg:w-[40%] md:w-[50%]">
            <div className="w-full relative z-20">
              <img
                src="/static/images/glossary/glossary.png"
                className="w-full h-full"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="stkbnx-container mx-auto md:py-8 xl:py-8 lg:py-8 py-4 stkbnx-heading-white mb-5 md:mb-0 xl:mb-0">
        <div className="flex lg:flex-row">
          <div className="col-lg-8 w-[90%]">
            {dis1 && (
              <>
                <div className="lato-font font-normal text-base text-[#A8ADBA]">
                  {dis1}
                </div>
                <br />
                <div className="z-[10] mt-10">
                  <img
                    src={getAsString(router.query.imgSrc1)}
                    alt=""
                    height={545}
                    width={900}
                  />
                </div>
                {/* first section */}
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.5 }}
                  className="pt-20 w-full text-center text-white md:text-left text-sm md:text-[25px] intro-font !leading-[1.2] whitespace-pre-wrap break-words max-w-[514px]"
                >
                  {title1}
                </motion.h1>
              </>
            )}

            {dis2 && (
              <>
                <div className=" lato-font font-normal text-base text-[#A8ADBA] pt-10">
                  {dis2}
                </div>
                <br />
                <div className="lato-font font-normal text-base text-[#A8ADBA]">
                  {dis2}
                </div>
                <div className="z-[10] mt-10">
                  <img
                    src={getAsString(router.query.imgSrc2)}
                    alt=""
                    height={545}
                    width={900}
                  />
                </div>
                {/* second section */}
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.5 }}
                  className="pt-20 w-full text-center text-white md:text-left text-sm md:text-[25px] intro-font !leading-[1.2] whitespace-pre-wrap break-words max-w-[800px]"
                >
                  {title2}
                </motion.h1>
              </>
            )}

            {dis3 && (
              <>
                <div className="lato-font font-normal text-base text-[#A8ADBA] pt-10">
                  {dis3}
                </div>
                <div className="z-[10] mt-10">
                  <img
                    src={getAsString(router.query.imgSrc3)}
                    alt=""
                    height={545}
                    width={900}
                  />
                </div>
                {/* third section */}
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.5 }}
                  className="pt-20 w-full text-center text-white md:text-left text-sm md:text-[25px] intro-font !leading-[1.2] whitespace-pre-wrap break-words max-w-[800px]"
                >
                  {title3}
                </motion.h1>
              </>
            )}

            {dis4 && (
              <>
                <div className="lato-font font-normal text-base text-[#A8ADBA] pt-10">
                  {dis4}
                </div>
                <div className="z-[10] mt-10">
                  {imgSrc4 && (
                    <img
                      src={getAsString(router.query.imgSrc4)}
                      alt=""
                      height={545}
                      width={900}
                    />
                  )}
                </div>
                {/* fourth section */}
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.5 }}
                  className="pb-5 pt-20 w-full text-center text-white md:text-left text-sm md:text-[25px] intro-font !leading-[1.2] whitespace-pre-wrap break-words max-w-[800px]"
                ></motion.h1>
              </>
            )}

            {dis5 && (
              <>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.5 }}
                  className="pt-0 w-full text-center text-white md:text-left text-sm md:text-[25px] intro-font !leading-[1.2] whitespace-pre-wrap break-words max-w-[800px]"
                >
                  {title5}
                </motion.h1>
                <div className="lato-font font-normal text-base text-[#A8ADBA] pt-10">
                  {dis5}
                </div>

                {/* fourth section */}
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.5 }}
                  className="pb-5 pt-20 w-full text-center text-white md:text-left text-sm md:text-[25px] intro-font !leading-[1.2] whitespace-pre-wrap break-words max-w-[800px]"
                ></motion.h1>
              </>
            )}
          </div>

          <div
            className="col-lg-4 mt-4 mt-lg-0 ml-10 w-[40%]"
            style={{
              maxHeight: "400px",
              overflowY: "auto",
              direction: "rtl",
              scrollbarWidth: "thin",
            }}
          >
            <ul
              className="list-disc ml-4"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "gray lightgray",
              }}
            >
              {listItems.map((item, index) => (
                <li
                  key={index}
                  style={{ marginBottom: "25px", alignItems: "start" }}
                  className="font-normal text-base text-[#ffffff] text-left"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>{"Related Articles"}</div>

        <div className="stkbnx-container mx-auto md:py-8 xl:py-8 lg:py-8 py-4 stkbnx-heading-white mb-5 md:mb-0 xl:mb-0 ">
          <div className="stkbnx-container mt-0">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-12 xl:gap-x-12 w-full">
              {relatedArticals?.map((item) => (
                <EducationCard
                  img={item?.img}
                  header={item?.header}
                  text={item?.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIsLot;

