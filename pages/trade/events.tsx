import React, { useEffect, useState } from "react";
import "yet-another-react-lightbox/styles.css";
import { changeLang } from "../../utils/utils";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { motion } from "framer-motion";
import classNames from "classnames";
import PreviousEvent from "@/components/event/PreviousEvent";
import PageBanner from "@/components/PageBanner";
import RegisterButton from "@/components/button/RegisterButton";
import { info } from "console";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

function Events() {
  const { t } = useTranslation("common");
  const images = [
    {
      url: "/static/images/events/dubai-summit/summit.gif",
      title: "Forex Summit 2023",
      dis: "Forex Summit",
      location: "Dubai",
      popupTitle: "Forex Summit 2023 - Dubai",
      popUpDis:
        "Proud moment! Stockbanx had an exhilarating experience at Smart Vision‘s Forex Summit 2023 in Ritz Carlton DIFC! We had 2 amazing days full of excitement, networking, workshops, and meetings with passionate traders & different service providers. Excited to announce that we received the Best Regulated Broker award.",
      popUpImages: [
        "/static/images/events/dubai-summit/summit10.jpg",
        "/static/images/events/dubai-summit/summit1.jpg",
        "/static/images/events/dubai-summit/summit2.jpg",
        "/static/images/events/dubai-summit/summit3.jpg",
        "/static/images/events/dubai-summit/summit4.jpg",
        "/static/images/events/dubai-summit/summit5.jpg",
        "/static/images/events/dubai-summit/summit6.jpg",
        "/static/images/events/dubai-summit/summit7.jpg",
        "/static/images/events/dubai-summit/summit8.jpg",
        "/static/images/events/dubai-summit/summit9.jpg",
      ],
    },
    {
      url: "/static/images/events/egy-video.gif",
      title: "Egyptian",
      dis: "Food Bank 2023",
      location: "Egypt",
      popupTitle: "Trade To Care - Egypt",
      popUpDis:
        "Under our 'Trade to Care' campaign initiative, Stockbanx Group is proud to collaborate with the Egyptian Food Bank to give back to society and those in need.With over 2,000 boxes filled with food supplies, in every box packed, there's not just food, but hope and compassion for breadwinner mothers and their children, people with special abilities, and the elderly.Every contribution, every trade  made a difference, and together we're providing much-needed support to our community.",
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
      url: "/static/images/events/vietnam-traders-fair.gif",
      title: "Hanoi Traders Fair 2023, Vietnam",
      dis: "Hanoi Traders Fair 2023, Vietnam",
      location: "Vietnam",
      popupTitle: "Hanoi Traders Fair 2023, Vietnam",
      popUpDis:
        "The Stockbanx team is still abuzz from all the engaging conversations we had with our newly forged connections today at the Traders Fair Hanoi FINEXPO (Finexpo.org). It has been an absolute pleasure for us to showcase our latest products, expertise, and brand offerings.This expo has served as a catalyst for us to cultivate deeper connections with the Vietnam Market, which we firmly believe will shape the future trajectory of Stockbanx here locally.We extend our heartfelt gratitude to our incredible team, partners, and clients in Vietnam for the warm welcome! We eagerly look forward to strengthening our relationships and remaining part of your trading journey.",
      popUpDetails:
        "Daily workshops led by renowned authors and historians covered topics like researching historical contexts, character development, and narrative techniques specific to historical fiction. The retreat also included guided tours to nearby historical sites and individual mentoring sessions, culminating in a cozy fireside reading session where participants shared excerpts from their works in progress.",
      popUpImages: [
        "/static/images/events/fair-vietnam/fair1.jpg",
        "/static/images/events/fair-vietnam/fair2.jpg",
        "/static/images/events/fair-vietnam/fair3.jpg",
        "/static/images/events/fair-vietnam/fair4.jpg",
        "/static/images/events/fair-vietnam/fair5.jpg",
        "/static/images/events/fair-vietnam/fair6.jpg",
        "/static/images/events/fair-vietnam/fair7.jpg",
      ],
    },
    {
      url: "/static/images/events/Vietnam-Awards.gif",
      title: "Vietnam Awards",
      dis: "The Best Moments 2023",
      location: "Vietnam",
      popupTitle: "Seminar: Setting Trading Goals - Vietnam",
      popUpDis:
        "Hello again Vietnam! Stockbanx’ trip in Vietnam isn’t over yet! From Hanoi’s Traders Fair, we hosted a seminar in the vibrant Ho Chi Minh City last July 15, 2023 at the Sofitel Saigon Plaza. Our very own Ngoc Nguyen, Edwin Thinh Vu and Denys Peleshok, Head of Asia at Stockbanx, have gathered to introduce the subject of setting trading goals to Stockbanx' traders. 📈 Once again, as part of our commitment to continuous learning, we provided a seminar filled with interactive and informative materials to help you enhance your trading skills.Be on the lookout for upcoming seminars by Stockbanx in your area!",
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
    {
      url: "/static/images/events/india/india.gif",
      title: "Money Expo 2023 - India",
      dis: "Money Expo 2023",
      location: "India",
      popupTitle: "Money Expo 2023 - India",
      popUpDis:
        "Two whirlwind days at MoneyExpo India, each moment a treasure. Grateful and happy to participate in representing Stockbanx. Winning 'Most Reputable Forex Broker 2023' was a proud achievement, echoing the dedication of our remarkable team and the trust bestowed upon us. To all who joined us at Booth 39, your engaging conversations added a special spark to our mission. It was an absolute pleasure connecting with clients, partners, and Payment Service Providers, discussing the future of finance. The event also proved to be a fantastic opportunity to meet regional PR agencies and data providers, fostering valuable collaborations. Here's to more milestones, more growth, and the vibrant spirit of the Stockbanx family!",
      popUpDetails:
        "Daily workshops led by renowned authors and historians covered topics like researching historical contexts, character development, and narrative techniques specific to historical fiction. The retreat also included guided tours to nearby historical sites and individual mentoring sessions, culminating in a cozy fireside reading session where participants shared excerpts from their works in progress.",
      popUpImages: [
        "/static/images/events/india/india1.jpg",
        "/static/images/events/india/india2.jpg",
        "/static/images/events/india/india3.jpg",
        "/static/images/events/india/india4.jpg",
        "/static/images/events/india/india5.jpg",
        "/static/images/events/india/india6.jpg",
        "/static/images/events/india/india7.jpg",
        "/static/images/events/india/india8.jpg",
        "/static/images/events/india/india9.jpg",
        "/static/images/events/india/india10.jpg",
      ],
    },
    {
      url: "/static/images/events/south-africa/south.gif",
      title: "Traders Fair 2023 - South Africa",
      dis: "Traders Fair 2023 - South Africa",
      location: "South Africa",
      popupTitle: "Traders Fair 2023 - South Africa",
      popUpDis:
        "Traders Fair 2023 - South Africa Stockbanx' was at the Traders Fair & Traders Awards, Johannesburg and our experience has been nothing short of extraordinary. We've had the privilege of connecting with the dynamic and enthusiastic South African trading community, and we're genuinely inspired by the depth of knowledge exhibited by both our South African traders and our esteemed partners.",
      popUpDetails:
        "Stockbanx' was at the Traders Fair & Traders Awards, Johannesburg 🇿🇦 and our experience has been nothing short of extraordinary. We've had the privilege of connecting with the dynamic and enthusiastic South African trading community, and we're genuinely inspired by the depth of knowledge exhibited by both our South African traders and our esteemed partners. 🤝📚",
      popUpImages: [
        "/static/images/events/south-africa/south1.jpg",
        "/static/images/events/south-africa/south2.jpg",
        "/static/images/events/south-africa/south3.jpg",
        "/static/images/events/south-africa/south4.jpg",
        "/static/images/events/south-africa/south5.jpg",
        "/static/images/events/south-africa/south6.jpg",
        "/static/images/events/south-africa/south7.jpg",
        "/static/images/events/south-africa/south8.jpg",
        "/static/images/events/south-africa/south9.jpg",
        "/static/images/events/south-africa/south10.jpg",
      ],
    },
    {
      url: "/static/images/events/FOREX-EXPO-2021.gif",
      title: "Forex Expo",
      dis: "Dubai",
      location: "United Arab Emirates",
      popupTitle: "Forex Expo 2023 - Dubai",
      popUpDis:
        "Dubai Forex Expo 2023: A Grand Showcase of Forex's Global Impact.The Dubai Forex Expo 2023, now in its sixth grand edition, took place on the 26th and 27th of September, 2023, and it has left a memorable mark on the world of forex trading. With its unprecedented scale of participation, it can confidently stake its claim as one of the largest forex expos in the world, if not the largest. This remarkable event provided an extravagant platform for Forex traders, IBs, Investors, Financial Institutions, and Brokers from across the Trading and Investing ecosystem to come together, collaborate, and establish connections poised to reshape the industry's future. A huge shoutout to our dedicated Stockbanx team for embodying our brand values throughout the event.",
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

    // Add more objects as needed
  ];
  const uncomingEvents: any = [
    // {
    //   image: "/static/images/events/vietnam.png",
    //   title: "HCMC Traders Fair",
    //   country: "Vietnam",
    //   month: "Dec",
    //   day: "9",
    //   time: "From 9:30 Am",
    //   location: ", Booth No: M12-7"
    // },
  ];

  return (
    <>
      <div>
        <Head>
          <title>Events | Forex IB Commission | Stockbanx</title>
          <meta
            name="description"
            content="Stay up to date on current events while earning valuable Forex-IB-Commissions via Stockbanx. Get in touch with us if you have any questions. Contact us now."
            key="Forex IB Commission"
          />
        </Head>
      </div>

      <PageBanner
        title={t("Stockbanx Insider")}
        description={t("Be part of the Global Stockbanx Insider Community")}
        imgSrc="/static/images/refer/event-page-banner.png"
        size="sm"
        imgClass="object-contain"
      />

      <div className="stkbnx-container stkbnx-container mx-auto md:py-8 xl:py-8 lg:py-8 py-4">
        {/*intro gif*/}
        <div className="flex  justify-center items-center flex-col pb-10">
          <div className="w-full h-[400px] items-end bg-[url('/static/images/events/FOREX-EXPO-2021.gif')] bg-cover bg-center xl:rounded-2xl lg:rounded-2xl md:rounded-2xl">
            <div className="w-full h-[400px] flex   items-end backdrop-brightness-50 xl:rounded-2xl lg:rounded-2xl md:rounded-2xl">
              <div className="pl-10 md:w-[46%] xl:w-[46%] lg:w-[46%]">
                <h4 className="text-3xl text-white mb-6 intro-font mt-10 leading-10">
                  {" "}
                  {t("Recap: Unforgettable Forex Events in Our History")}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="stkbnx-container ">
          <div className="stkbnx-heading-white !text-center  m-heading p-2 md:pt-20 lg:pt-20 xl:pt-20 pt-0">
            {t("About The Trading Condition")}
          </div>{" "}
          <p className=" text-center text-white2 md:w-9/12 xl:w-9/12 lg:w-9/12 m-auto text-black">
            {t(
              "Embark on a thrilling exploration of our events section, where each occasion is a unique chapter in the dynamic narrative of Stockbanx"
            )}
          </p>
        </div>
        {/*uncoming events*/}
        <div className="stkbnx-heading-white  stkbnx-container m-heading p-8 pt-20 text-center">
          {t("Upcoming Events")}
        </div>{" "}
        {uncomingEvents?.length > 0 ? (
          <>
            <div
              className={`${
                uncomingEvents?.length <= 2
                  ? "justify-center md:items-center xl:items-center lg:items-center"
                  : ""
              }  flex sm:flex-row lg:flex-row xl:flex-row flex-col lg:space-x-8 md:space-x-8 xl:pace-x-8 md:pb-20 lg:pb-20 xl:pb-20 pb-0 `}
            >
              {uncomingEvents?.map((Info: any, index: any) => (
                <div key={index}>
                  <div className="flex flex-wrap  pb-2">
                    <div
                      className="fade-img relative  flex  m-rewards-content md:w-[270px] lg:w-[270px] xl:w-[270px] w-full h-[170px] md:p-20 xl:p-20 lg:p-20 p-2  bg-no-repeat bg-cover  xl:rounded-2xl lg:rounded-2xl md:rounded-2xl"
                      style={{ backgroundImage: `url('${Info.image}')` }}
                    >
                      <div className=" absolute bottom-2 left-2 rounded-full bg-[#00b144] px-2 py-1 text-sm p-2">
                        <p>{Info.country}</p>
                      </div>
                    </div>
                  </div>
                  {/*details*/}
                  <div className="flex mb-4">
                    {/* date */}
                    <div className="bg-gray-100 w-10  flex items-center justify-center rounded-md ">
                      <div className="font-normal">
                        <div className=" text-[#00b144] text-bold">
                          {Info.month}
                        </div>
                        <div className="font-bold text-center">{Info.day}</div>
                      </div>
                    </div>
                    <div className="ml-2"></div>
                    {/* Column */}
                    <div>
                      <div className="font-extrabold mb-1 text-normal text-white2">
                        {Info.title}
                      </div>
                      <div className="flex items-center">
                        {/* Clock icon and text */}
                        <div className="flex items-center mr-2">
                          {/* You can replace this with your clock icon */}
                          <div className="w-[13px] h-[13px] items-end bg-[url('/static/images/events/clock.svg')] bg-cover bg-center xl:rounded-2xl lg:rounded-2xl md:rounded-2xl"></div>
                          <div className="text-white2 ml-1 text-xs">
                            {Info.time}
                          </div>
                        </div>

                        {/* Bold text */}
                        <div className="text-white2 font-bold text-xs">
                          {Info.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="text-center text-white2 text-xl mb-8">
              There is no upcoming events.
            </div>
          </>
        )}
        {/*Previous Events*/}
        <div>
          <div className="stkbnx-heading-white  stkbnx-container   m-heading !p-0">
            {t("Previous Events:")}
          </div>{" "}
        </div>
      </div>

      <div className="md:pt-5 lg:pt-5 xl:pt-5 pb-20">
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
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Events;

