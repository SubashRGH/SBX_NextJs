import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { changeLang } from "../../utils/utils";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { motion } from "framer-motion";
import classNames from "classnames";
import PreviousEvent from "@/components/event/PreviousEvent";

function Events() {
  const { t } = useTranslation("common");
  const images = [
    {
      url: "/static/images/events/egyptFood.jpg",
      title: "Egyption",
      dis: "Food Bank 2023",
      location: "Egypt",
      popupTitle: "Set in the scenic countryside of Dorset",
      popUpDis:
        "The Historical Fiction Writers' Retreat was a week-long haven for both budding.",
      popUpDetails:
        "Daily workshops led by renowned authors and historians covered topics like researching historical contexts, character development, and narrative techniques specific to historical fiction. The retreat also included guided tours to nearby historical sites and individual mentoring sessions, culminating in a cozy fireside reading session where participants shared excerpts from their works in progress.",
      popUpImages: [
        "/static/images/events/egypt/egypt1.jpg",
        "/static/images/events/egypt/egypt2.jpg",
        "/static/images/events/egypt/egypt3.jpg",
        "/static/images/events/egypt/egypt4.jpg",
        "/static/images/events/egypt/egypt5.jpg",
        "/static/images/events/egypt/egypt6.jpg",
        "/static/images/events/egypt/egypt7.jpg",
        "/static/images/events/egypt/egypt8.jpg",
        "/static/images/events/egypt/egypt9.jpg",
        "/static/images/events/egypt/egypt10.jpg",
      ],
    },
    {
      url: "/static/images/events/forexExpo.jpg",
      title: "Forex Expo",
      dis: "Dubai",
      location: "United Arab Emirates",
      popupTitle: "Set in the scenic countryside of Dorset",
      popUpDis:
        "The Historical Fiction Writers' Retreat was a week-long haven for both budding.",
      popUpDetails:
        "Daily workshops led by renowned authors and historians covered topics like researching historical contexts, character development, and narrative techniques specific to historical fiction. The retreat also included guided tours to nearby historical sites and individual mentoring sessions, culminating in a cozy fireside reading session where participants shared excerpts from their works in progress.",
      popUpImages: [
        "/static/images/events/expo/forex1.jpg",
        "/static/images/events/expo/forex2.jpg",
        "/static/images/events/expo/forex3.jpg",
        "/static/images/events/expo/forex4.jpg",
        "/static/images/events/expo/forex5.jpg",
        "/static/images/events/expo/forex6.jpg",
        "/static/images/events/expo/forex7.jpg",
        "/static/images/events/expo/forex8.jpg",
        "/static/images/events/expo/forex9.jpg",
        "/static/images/events/expo/forex10.jpg",
      ],
    },
    {
      url: "/static/images/events/vitnamAward.jpg",
      title: "Vietnam Awards",
      dis: "The Best Moments 2023",
      location: "Vietnam",
      popupTitle: "Set in the scenic countryside of Dorset",
      popUpDis:
        "The Historical Fiction Writers' Retreat was a week-long haven for both budding.",
      popUpDetails:
        "Daily workshops led by renowned authors and historians covered topics like researching historical contexts, character development, and narrative techniques specific to historical fiction. The retreat also included guided tours to nearby historical sites and individual mentoring sessions, culminating in a cozy fireside reading session where participants shared excerpts from their works in progress.",
      popUpImages: [
        "/static/images/events/vietnam/vietnam1.jpg",
        "/static/images/events/vietnam/vietnam2.jpg",
        "/static/images/events/vietnam/vietnam3.jpg",
        "/static/images/events/vietnam/vietnam4.jpg",
        "/static/images/events/vietnam/vietnam5.jpg",
        "/static/images/events/vietnam/vietnam6.jpg",
        "/static/images/events/vietnam/vietnam7.jpg",
        "/static/images/events/vietnam/vietnam8.jpg",
        "/static/images/events/vietnam/vietnam9.jpg",
        "/static/images/events/vietnam/vietnam10.jpg",
      ],
    },
    // Add more objects as needed
  ];

  return (
    <>
      <div className="stkbnx-container">
        {/*title*/}
        <div className=" text-center text-6xl font-serif pb-9 pt-10">
          {t("Events")}
        </div>
        {/*intro gif*/}
        <div className="flex  justify-center items-center flex-col pb-10">
          <div className="w-full h-[400px] items-end bg-[url('/static/images/events/FOREX-EXPO-2021.gif')] bg-cover bg-center xl:rounded-2xl lg:rounded-2xl md:rounded-2xl">
            <div className="w-full h-[400px] flex   items-end backdrop-brightness-50 xl:rounded-2xl lg:rounded-2xl md:rounded-2xl">
              <div className="pl-10 md:w-[46%] xl:w-[46%] lg:w-[46%]">
                <h4 className="text-3xl text-white mb-6 intro-font mt-10">
                  {" "}
                  {t("Recap: Unforgettable")}
                </h4>
                <h4 className="text-3xl text-white mb-6 intro-font">
                  {" "}
                  {t("Forex Events in Our History")}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="stkbnx-container ">
          <div className="stkbnx-heading text-center  m-heading p-2 pt-20">
            {t("About  The Trading Condition")}
          </div>{" "}
          <p className=" text-center md:w-9/12 xl:w-9/12 lg:w-9/12 m-auto text-black">
            {t(
              "Explore trading CFDs on indices like US500, UK100, and more, using MT4 on any device you prefer. Trade US30 with leverage up to 1:200 and low spreads."
            )}
          </p>
        </div>
        <div className="flex justify-center pb-10">
          <div>
            <button className="rounded-full cmn-btn bg-primary mt-7">
              <a> {t("Live Account")} </a>
            </button>{" "}
          </div>
        </div>
        {/*uncoming events*/}
        <div className="stkbnx-heading  stkbnx-container m-heading p-8 pt-20">
          {t("Upcoming Events")}
        </div>{" "}
        <div className=" flex sm:flex-row space-x-8  pb-20 ">
          {/*egypt event8 */}
          <div>
            <div className="flex flex-wrap  pb-2">
              <div className=" relative  flex  m-rewards-content w-[270px] h-[170px] md:p-20 xl:p-20 lg:p-20 p-2 bg-[url('/static/images/events/egypt.png')] bg-no-repeat bg-cover  xl:rounded-2xl lg:rounded-2xl md:rounded-2xl">
                <div className=" absolute bottom-2 left-2 rounded-full rounded-full bg-[#00b144] px-2 py-1 text-sm p-2">
                  <p>Egypt</p>
                </div>
              </div>
            </div>
            {/*details*/}
            <div className="flex mb-4">
              {/* date */}
              <div className="bg-gray-100 w-10  flex items-center justify-center rounded-md ">
                <div className="font-normal ">
                  <div className=" text-[#00b144] text-bold ">Nov</div>
                  <div className="font-bold text-center">11</div>
                </div>
              </div>
              <div className="ml-2"></div>
              {/* Column */}
              <div>
                <div className="font-extrabold mb-1 text-normal">
                  Egypt investment Expo
                </div>
                <div className="flex items-center">
                  {/* Clock icon and text */}
                  <div className="flex items-center mr-2">
                    {/* You can replace this with your clock icon */}
                    <div className="w-[13px] h-[13px] items-end bg-[url('/static/images/events/clock.svg')] bg-cover bg-center xl:rounded-2xl lg:rounded-2xl md:rounded-2xl"></div>
                    <div className="text-gray-500 ml-1 text-xs">
                      From 9:30 Am
                    </div>
                  </div>

                  {/* Bold text */}
                  <div className="text-black font-bold text-xs">
                    , Booth No: 14
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* veitnam event*/}
          <div>
            <div className="flex flex-wrap  pb-2">
              <div className=" relative  flex  m-rewards-content w-[270px] h-[170px] md:p-20 xl:p-20 lg:p-20 p-2 bg-[url('/static/images/events/vietnam.png')] bg-no-repeat bg-cover  xl:rounded-2xl lg:rounded-2xl md:rounded-2xl">
                <div className="absolute bottom-2 left-2 rounded-full rounded-full bg-[#00b144] px-2 py-1 text-sm p-2 ">
                  <p>Vietnam</p>
                </div>
              </div>
            </div>

            {/*details*/}
            <div className="flex mb-4">
              {/* date */}
              <div className="bg-gray-100 w-10 flex items-center justify-center rounded-md mb-2">
                <div className="font-normal ">
                  <div className=" text-[#00b144]">Dec</div>
                  <div className="font-bold text-center">9</div>
                </div>
              </div>
              <div className="ml-2"></div>
              {/* Column */}
              <div>
                <div className="text-black font-bold mb-1 text-normal">
                  HCMC Traders Fair
                </div>
                <div className="flex items-center">
                  {/* Clock icon and text */}
                  <div className="flex items-center mr-2">
                    {/* You can replace this with your clock icon */}
                    <div className="w-[13px] h-[13px] items-end bg-[url('/static/images/events/clock.svg')] bg-center xl:rounded-2xl lg:rounded-2xl md:rounded-2xl"></div>

                    <div className="text-gray-500 ml-1 text-xs">
                      From 9:30 Am
                    </div>
                  </div>

                  {/* Bold text */}
                  <div className="text-black font-bold text-xs ">
                    , Booth No: M12-7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Previous Events*/}
        <div>
          <div className="stkbnx-heading  stkbnx-container pt-50  m-heading ">
            {t("Previous Events:")}
          </div>{" "}
          <div className="stkbnx-container pt-4">
            <p className=" p-2 font-bold">
              {t(
                "Take a journey with us as we revisit our exciting past events. These are the moments when we joined hands with traders, partners, and industry enthusiasts from across the globe."
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="pt-20 pb-20">
        {images.map((imageInfo, index) => (
          <PreviousEvent
            title={t(imageInfo.title)}
            description={t(imageInfo.dis)}
            location={t(imageInfo.location)}
            url={imageInfo.url}
            testText="ll"
            popupTitle={t(imageInfo.popupTitle)}
            popupDis={t(imageInfo.popUpDis)}
            popUpDetails={t(imageInfo.popUpDis)}
            images={imageInfo.popUpImages}
          />
        ))}
      </div>
    </>

    /* <button type="button" onClick={() => setOpen(true)}>
    Open Lightbox
  </button>
  <Lightbox
    open={open}
    close={() => setOpen(false)}
    plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
    slides={[
      { src: "https://za.cptmarkets.com/static/images/home/why_cpt_marekets.png" },
      { src: "https://image.cptmarkets.com/Contents/cptza/Images/nick.png" },
      { src: "https://image.cptmarkets.com/Contents/cptza/Images/yousuf.png" },
    ]}
  /> */
  );
}

export default Events;

