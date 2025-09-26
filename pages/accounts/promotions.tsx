import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageBanner from "../../components/PageBanner";
import RewardProgram from "../../components/Reward/RewardProgram";
import FAQ from "../../components/FAQ";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Loader from "../../components/Loader";
import { useRouter } from "next/router";
import Register from "../../components/form/Register";
import BannerMain from "@/components/BannerMain";
import Head from "next/head";

const Promotions = () => {
  const { t } = useTranslation("common");
  const [doc, setDoc] = useState<any>([]);
  const [lang, setLang] = useState<any>();
  const [country, setCountry] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [token, setToekn] = useState<any>([]);
  const [ipPhone, setIPphone] = useState<any>();
  const [dialCode, setDialCode] = useState<any>();
  const router = useRouter();
  // get legal doc list
  const getPromotion = () => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/SiteAPI/GetPromotionList`, {
      method: "POST",
      body: JSON.stringify({
        sec_name: "promotions",
        lang_name: "en",
        lic_name: "SA",
        country_code: sessionStorage.getItem("country"),
        action_name: "promotions",
        page_name: "accounts/promotions",
        sort_field: "country_code",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setDoc(response?.data?.result);
        setLoading(false);
      });
  };

  // get language first
  const getLang = () => {
    setLang(sessionStorage.getItem("lang") || "en");
  };

  useEffect(() => {
    getLang();
  }, []);

  useEffect(() => {
    if (lang) getPromotion();
  }, [lang]);

  return (
    <>
      <div>
        <Head>
          <meta name="description" content="Best Forex Promotions Services" />
        </Head>
      </div>

      {/* <PageBanner
        title={t("Supercharge Your Trading with Exclusive Offers!")}
        description={t(
          "Unlock a realm of thrilling offers, bonuses, and promotions to amplify your trading adventure. At Stockbanx, we're dedicated to elevating your potential through trader-centric rewards. Dive into our latest campaigns and elevate your trading voyage to unprecedented levels."
        )}
        imgSrc="/static/images/refer/refer.png"
        size="md"
        tc={t("T&Cs Apply*")}
      /> */}

      <div className="relative">
        <div className="absolute hidden md:block z-10 w-1/2 md:right-[1rem] md:top-[1rem]  lg:-right-[5rem] lg:-top-[7rem]">
          <img
            src="/static/images/about/atheletemask.png"
            className="select-none"
          />
        </div>
        <div className="absolute z-10 lg:block hidden  -left-[30rem] -top-[35rem]">
          <img
            src="/static/images/about/atheletemask.png"
            className="select-none"
          />
        </div>
        <div className="w-full !py-16 md:py-12 lg:py-6 flex flex-col stkbnx-container md:flex-row">
          <div className="lg:w-[60%] md:text-left text-center flex flex-col justify-center w-full md:w-[50%]">
            <p className="text-white md:text-4xl xl:text-5xl lg:text-5xl text-3xl font-bold xl:leading-[3.5rem] lg:leading-[3.5rem] leading-[2rem] ">
              Supercharge Your Trading with Exclusive Offers!
            </p>
            <p className="text-[#A8ADBA] mt-6">
              Unlock a realm of thrilling offers, bonuses, and promotions to
              amplify your trading adventure. At Stockbanx, we're dedicated to
              elevating your potential through trader-centric rewards. Dive into
              our latest campaigns and elevate your trading voyage to
              unprecedented levels.
            </p>

            <p className="text-[#A8ADBA] mt-6">T&Cs Apply*</p>
          </div>
          <div className="w-full relative z-20 lg:w-[40%] md:w-[50%]">
            <div className="absolute block w-full md:hidden z-10 md:right-[1rem] md:top-[1rem]  lg:-right-[5rem] lg:-top-[7rem]">
              <img
                src="/static/images/about/atheletemask.png"
                className="select-none"
              />
            </div>
            <div className="w-full relative z-20">
              <img
                src="/static/images/refer/refer.png"
                className="w-full h-full"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black relative">
        <div className="absolute -left-[40rem] top-0">
          <img
            src="/static/images/about/atheletemask.png"
            className="select-none"
          ></img>
        </div>
        <div className="absolute -right-[40rem] top-[5rem]">
          <img
            src="/static/images/about/atheletemask.png"
            className="select-none"
          ></img>
        </div>
        <div className="stkbnx-container md:py-20 xl:py-20 lg:py-20 py-4">
          <div className="flex relative sm:flex-row lg:flex-row  lg:space-x-6 md:space-x-6 md:flex-col flex-col justify-between">
            <div className="w-full flex flex-col items-center">
              {loading ? (
                <>
                  <Loader />
                </>
              ) : (
                <>
                  {doc &&
                    doc?.map((item: any, i: any) => {
                      return (
                        <div
                          className="mb-6 md:text-left  text-center flex promotioncards lg:w-[70%] md:flex-row lg:flex-row flex-col-reverse justify-between items-center border border-slate-200 rounded-3xl"
                          key={i}
                        >
                          <div className="md:basis-2/5 h-full flex flex-col lg:ml-6 xl:ml-6 ml-0">
                            <motion.div
                              initial="hidden"
                              className="flex flex-col justify-center  h-full"
                              whileInView="visible"
                              viewport={{ once: true }}
                              variants={{
                                hidden: { opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 1 },
                              }}
                              transition={{ duration: 0.5 }}
                            >
                              <div
                                className="stkbnx-heading  text-white promotion-card-head tracking-[1px] lg:text-2xl sm:text-3xl xl:text-3xl"
                                dangerouslySetInnerHTML={{
                                  __html: t(item.title, {
                                    interpolation: { escapeValue: false },
                                  }),
                                }}
                              />

                              <p
                                className="text-sm mt-6 read-font"
                                dangerouslySetInnerHTML={{
                                  __html: t(item.description, {
                                    interpolation: { escapeValue: false },
                                  }),
                                }}
                              />
                              <div className="mt-10">
                                {(() => {
                                  if (item.btn_text === "CTA buttons") {
                                    return (
                                      <>
                                        <a
                                          href={item.btn_url}
                                          target="_blank"
                                          className="!py-4	!px-6	rounded-full cmn-btn bg-primary lg:mb-0 md:mb-0 xl:mb-0 mb-5 cursor-pointer !text-base"
                                        >
                                          {t("Terms and Conditions")}
                                        </a>
                                      </>
                                    );
                                  } else if (item.btn_text === "Join Now") {
                                    return (
                                      <>
                                        <div className="!py-4	!px-6	rounded-full cmn-btn bg-primary lg:mb-0 md:mb-0 xl:mb-0 mb-5 cursor-pointer !text-base text-center w-[170px]">
                                          <Link href="/campaign">
                                            {t("More Detail")}
                                          </Link>
                                        </div>
                                      </>
                                    );
                                  } else {
                                    return (
                                      <>
                                        {item?.buttons?.map((res: any) => (
                                          <a
                                            href={res.url}
                                            target="_blank"
                                            className="!py-4	!px-6	rounded-full cmn-btn bg-primary lg:mb-0 md:mb-0 xl:mb-0 mb-5 cursor-pointer mr-3 !text-base"
                                          >
                                            {res.text}
                                          </a>
                                        ))}
                                      </>
                                    );
                                  }
                                })()}
                              </div>
                            </motion.div>
                          </div>
                          <div className="md:basis-3/5 w-full mb-14 xl:mt-0 lg:mt-0 md:mt-0 md:text-right xl:text-right lg:md:text-right text-center lg:mr-8 xl:mr-8 img-promote">
                            <motion.div
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              className="image-end"
                              variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 1 },
                              }}
                              transition={{ duration: 1 }}
                            >
                              <img alt="promotion" src={item.image_URL} />
                              <p className="text-[11px] text-white">
                                {" "}
                                {item.promotion_tc}{" "}
                              </p>
                            </motion.div>
                          </div>
                        </div>
                      );
                    })}
                </>
              )}
            </div>
            {/* <div className="md:basis-1/4 mt-6 md:mt-0 xl:mt-0 lg:mt-0 promote-form relative">
            
              <div className="sticky-form">
                <Register
                  title={t("Register Your Details")}
                  submitText={t("Submit")}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Promotions;

