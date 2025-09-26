import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageBanner from "../../components/PageBanner";
import FAQ from "../../components/FAQ";
import {
  CheckCircleIcon,
  CheckIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import OpenAccount from "../../components/Account/OpenAccount";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { changeLang } from "../../utils/utils";
import BlurImage from "@/components/BlurImage";
import Link from "next/link";

function MamAccounts() {
  const { t } = useTranslation("common");
  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();
  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setCountry(data);
  }, []);

  return (
    <div className="mam-accounts relative">
      <div className="absolute right-0 top-[55%] overflow-x-hidden">
        <Image
          src={"/static/images/banner/gradiant-radial.png"}
          width={600}
          height={600}
          className="xl:!ml-[20rem]"
        />
      </div>

      <PageBanner
        title={t("Unlock Your Outreach with MAM Accounts")}
        description={t("Invest Smarter & Efficiently with MAM Stockbanx")}
        imgSrc="/static/images/account/accountLandingImg-v2.png"
        size="sm"
        imgClass="w-[700px]"
        mamBtn={{
          btnText: t("Learn More"),
          btnClick: () => {
            window.open(
              "https://image.cptmarkets.com/Contents/cptza/Manuals/mam-manual.pdf",
              "_blank"
            );
          },
        }}
      />

      <div className="lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col-reverse items-center  lg:flex-row  pt-3 pb-10 lg:py-14  space-y-4 md:space-y-0 mt-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.4 }}
            className="md:w-[35%] lg:w-[45%]"
          >
            <div className="w-[282px] h-[300px] lg:w-[420px] lg:h-[350px] relative mx-auto">
              <Image
                src={"/static/images/banner/gradiant-radial.png"}
                layout="fill"
                alt="stock"
                className="z-1"
              />
              <Image
                src="/static/images/account/accountSecondFoldImg.png"
                layout="fill"
                alt="stock"
                className="z-2"
              />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.6 }}
            className="md:flex-1 md:flex-row md:justify-center space-y-3 account-second-fold-text-container md:space-y-5 px-4 "
          >
            <div className="intro-font text-2xl text-center lg:text-left ">
              {/* <div className="stkbnx-container md:py-20 xl:py-20 lg:py-20 py-4"> */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="stkbnx-heading-white mb-4">
                  {t(
                    `Unleash Efficiency & Expertise MAM Accounts for Investors & Fund Managers`
                  )}
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
                <p className="text-base mb-2 second-fold-subtitle text-white">
                  {t("Stockbanx MAM elevates your investment experience.")}
                </p>
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
                <p className="text-base text-white2 second-fold-content">
                  {t(
                    "This innovative solution caters to both ambitious investors seeking expert guidance and established fund managers looking to optimize client management."
                  )}
                </p>
              </motion.div>
              {/* </div> */}
            </div>
          </motion.div>
        </div>
      </div>
      {/* account */}
      <div className="lg:px-8">
        <div className="max-w-6xl mx-auto md:flex py-5 lg:py-10 space-y-4 md:space-y-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.6 }}
            className="md:flex-1 space-y-3   md:space-y-5 px-4 lg:px-0"
          >
            <div className="intro-font text-2xl text-center px-auto  md:text-3xl">
              {/* <div className="stkbnx-container md:py-20 xl:py-20 lg:py-20 py-4"> */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="stkbnx-heading-white mb-8 ">
                  {t("Why Stockbanx MAM Account?")}
                </div>
                <motion.div
                  className="account-third-fold-container"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="account-third-fold-content left-col "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 1 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-center col-heading mb-5 bg-primary !text-neutral rounded-[20px] py-[10px]">
                      {t("Investors")}
                    </h2>
                    <div>
                      <div className="menuitems mb-2">
                        <div className="rounded-lg p-2">
                          <div className="flex">
                            <div className="mr-2 third-fold-icon">
                              <div className="w-20px  h-20px lg:w-309 lg:h-400  relative mx-auto mt-2px">
                                <Image
                                  src="/static/images/account/tick.svg"
                                  layout="fill"
                                  alt="flexible"
                                />
                              </div>
                              {/* <BlurImage
                                src="/static/images/account/tick.svg"
                                alt="flexible"
                                width={30}
                                height={30}
                              /> */}
                            </div>
                            <div className="text-left text-white">
                              <div className=" text-base mb-1">
                                {t("Empower Your Portfolio")}
                              </div>
                              <p className="third-fold-content  text-sm">
                                {t(
                                  `Gain access to the strategies of seasoned fund managers, diversifying your holdings beyond your own capabilities.`
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="menuitems mb-2">
                        <div className="rounded-lg p-2">
                          <div className="flex">
                            <div className="mr-2 third-fold-icon">
                              <div className="w-20px h-20px md:w-309 md:h-400 relative mx-auto mt-2px">
                                <Image
                                  src="/static/images/account/tick.svg"
                                  layout="fill"
                                  alt="flexible"
                                />
                              </div>
                            </div>
                            <div className="text-left text-white">
                              <div className=" text-base mb-1">
                                {t("Tailored Control")}
                              </div>
                              <p className=" third-fold-content  text-sm">
                                {t(
                                  "Maintain a level of control by customizing allocation within your MAM sub-account to align with your risk tolerance."
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="menuitems mb-2">
                        <div className="rounded-lg p-2">
                          <div className="flex">
                            <div className="mr-2 third-fold-icon">
                              <div className="w-20px h-20px md:w-309 md:h-400 relative mx-auto mt-2px">
                                <Image
                                  src="/static/images/account/tick.svg"
                                  layout="fill"
                                  alt="flexible"
                                />
                              </div>
                            </div>
                            <div className="text-left text-white">
                              <div className=" text-base mb-1">
                                {t("Effortless Management")}
                              </div>
                              <p className=" third-fold-content  text-sm">
                                {t(
                                  "Free yourself from the burden of active monitoring. Trust a proven expert to navigate the markets on your behalf."
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="account-third-fold-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 1 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-center col-heading mb-5 bg-primary !text-white rounded-[20px] py-[10px]">
                      {t("Fund Managers")}
                    </h2>
                    <div>
                      <div className="menuitems mb-2">
                        <div className="rounded-lg p-2">
                          <div className="flex">
                            <div className="mr-2 third-fold-icon">
                              <div className="w-20px h-20px md:w-309 md:h-400 relative mx-auto mt-2px">
                                <Image
                                  src="/static/images/account/tick.svg"
                                  layout="fill"
                                  alt="flexible"
                                />
                              </div>
                            </div>
                            <div className="text-left text-white">
                              <div className="text-base mb-1">
                                {t("Streamline Your Operations")}
                              </div>
                              <p className="third-fold-content text-sm">
                                {" "}
                                {t(
                                  "Manage multiple client accounts efficiently through a single master account, maximizing your time and resources."
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="menuitems mb-2">
                        <div className="rounded-lg p-2">
                          <div className="flex">
                            <div className="mr-2 third-fold-icon">
                              <div className="w-20px h-20px md:w-309 md:h-400 relative mx-auto mt-2px">
                                <Image
                                  src="/static/images/account/tick.svg"
                                  layout="fill"
                                  alt="flexible"
                                />
                              </div>
                            </div>

                            <div className="text-left text-white">
                              <div className=" text-base mb-1">
                                {t("Boost Transparency")}
                              </div>
                              <p className="third-fold-content text-sm">
                                {t(
                                  "Provide real-time performance insights to sub-account holders, fostering trust and attracting new investors."
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="menuitems mb-2">
                        <div className="rounded-lg p-2">
                          <div className="flex">
                            <div className="mr-2 third-fold-icon">
                              <div className="w-20px h-20px md:w-309 md:h-400 relative mx-auto mt-2px">
                                <Image
                                  src="/static/images/account/tick.svg"
                                  layout="fill"
                                  alt="flexible"
                                />
                              </div>
                            </div>
                            <div className="text-left text-white">
                              <div className=" text-base mb-1">
                                {t("Expand Your Reach")}
                              </div>
                              <p className="third-fold-content text-sm">
                                {t(
                                  "Leverage the Stockbanx platform to connect with a wider pool of potential clients seeking qualified management."
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* </div> */}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="lg:px-8">
        <div className="max-w-6xl mx-auto md:flex py-10 md:py-14 space-y-4 md:space-y-0 mt-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.6 }}
            className="md:flex-1 space-y-3   md:space-y-5 px-4 md:px-0"
          >
            <div className="intro-font text-2xl text-center px-auto  md:text-3xl">
              {/* <div className="stkbnx-container md:py-20 xl:py-20 lg:py-20 py-4"> */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="stkbnx-heading-white mb-5">
                  {t("Benefits for All")}
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
                transition={{ duration: 0.5 }}
              >
                <div className="stkbnx-heading-white benefits flex lg:flex flex-col xl:flex-row">
                  <div className="box2 lg:px-4 px-2 product-type-list-bg">
                    <div className="text-center mb-6">
                      <BlurImage
                        src="/static/images/account/wand.svg"
                        alt="flexible"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="benefit-content-container">
                      <div className=" text-base financial-future-title  mb-3 text-center text-white">
                        {t("Seamless Integration")}
                      </div>
                      <p className="benefit-content  text-center text-white2">
                        {t(
                          "Manage your MAM account alongside your individual trading activity on our user-friendly platform."
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="box2 lg:px-4 px-2 product-type-list-bg">
                    <div className="text-center mb-6">
                      <BlurImage
                        src="/static/images/account/24hours.svg"
                        alt="flexible"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="benefit-content-container">
                      <div className=" text-base financial-future-title mb-3 text-center">
                        {t("Dedicated Support")}
                      </div>
                      <p className="benefit-content  text-center text-white2">
                        {t(
                          "Our experienced team is readily available to address any queries related to MAM accounts."
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="box2 lg:px-4 px-2 product-type-list-bg">
                    <div className="text-center mb-6">
                      <BlurImage
                        src="/static/images/account/texhnology.svg"
                        alt="flexible"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="benefit-content-container">
                      <div className="financial-future-title text-base mb-3 text-center">
                        {t("Advanced Technology")}
                      </div>
                      <p className="benefit-content  text-center text-white2">
                        {t(
                          "Benefit from our secure and feature-rich platform designed for optimal investment management."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className=" lg:px-8 px-4">
        <div className="max-w-6xl mx-auto md:flex pt-6 md:pt-6 space-y-4 md:space-y-0 mt-10 transy-calc-withoutbg product-type-list-bg ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.4 }}
            className="w-[100%] lg:w-[33%]"
          >
            <div className="calc-img-width h-[300px] lg:w-309 lg:h-400  relative mx-auto">
              <Image
                src="/static/images/transparentCalculation.png"
                layout="fill"
                alt="stock"
              />
            </div>
          </motion.div>
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.6 }}
              className="textual md:flex-1 space-y-3 md:space-y-5 lg:px-0"
            >
              <div className="intro-font transy-title text-2xl text-center md:text-left md:text-3xl text-white">
                <div>
                  <h4>{t("Transparent Calculation")}</h4>
                </div>
              </div>
              <div>
                <div className="menuitems mb-2">
                  <div className="rounded-lg p-2  transparent">
                    <div className="flex">
                      <div className="w-20px transy-tick-img h-20px md:w-309 md:h-400 mr-2 relative   mt-3px">
                        <Image
                          src="/static/images/account/tick.svg"
                          layout="fill"
                          alt="flexible"
                        />
                      </div>
                      <div className="text-left transy-content text-white">
                        <p className=" transy-calcy-desc">
                          {t(
                            `We track the forex markets in real-time so that you get fast accreditation of commissions in your live trading account.`
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menuitems mb-2">
                  <div className="rounded-lg p-2 transparent ">
                    <div className="flex">
                      <div className="w-20px transy-tick-img h-20px md:w-309 md:h-400 mr-2 relative  mt-3px">
                        <Image
                          src="/static/images/account/tick.svg"
                          layout="fill"
                          alt="flexible"
                        />
                      </div>
                      <div className="text-left transy-content text-white">
                        <p className="transy-calcy-desc">
                          {t("Withdraw your funds at any time.")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menuitems mb-2">
                  <div className="rounded-lg p-2 transparent">
                    <div className="flex">
                      <div className="w-20px transy-tick-img h-20px md:w-309 md:h-400 mr-2 relative  mt-3px">
                        <Image
                          src="/static/images/account/tick.svg"
                          layout="fill"
                          alt="flexible"
                        />
                      </div>
                      <div className="text-left transy-content text-white">
                        <p className="transy-calcy-desc ">
                          {t(
                            "All Stockbanx MAM managers can quickly calculate performance fees for all their clients, as needed."
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className=" lg:px-8">
        <div className="max-w-6xl mx-auto md:flex pt-20 pb-10 mt-8 md:mt-0 md:py-20 space-y-4 md:space-y-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.6 }}
            className="md:flex-1 space-y-3   md:space-y-5 px-4 md:px-0"
          >
            <div className="take-control intro-font text-2xl  text-center px-auto  md:text-3xl ">
              {/* <div className="stkbnx-container md:py-20 xl:py-20 lg:py-20 py-4"> */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="stkbnx-heading-white mb-5">
                  {t("Take Control of Your Financial Future")}
                </div>
              </motion.div>
              <div className="box2 w-[100%] product-type-list-bg">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="stkbnx-heading-white  flex  flex-col xl:flex-row">
                    <div className="px-4 pt-4 pb-10 md:py-4 text-left">
                      <div className="  mb-8">
                        <BlurImage
                          src="/static/images/account/dollarbag.svg"
                          alt="flexible"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="benefit-content-container">
                        <div className="text-base financial-future-title mb-5">
                          {t("Investors")}
                        </div>
                        <p className="financial text-white2">
                          {t(
                            `Open a MAM sub-account today and unlock the potential of expert-driven investing. Explore our directory of qualified fund managers and find the perfect fit for your goals. `
                          )}
                          <Link href="/">
                            <button className="text-primary">
                              {t("Get Started Here!")}
                            </button>
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="px-4 pt-4 pb-10 md:py-4 text-left">
                      <div className=" mb-8">
                        <BlurImage
                          src="/static/images/account/richPeople.svg"
                          alt="flexible"
                          width={60}
                          height={60}
                        />
                      </div>

                      <div className="benefit-content-container">
                        <div className="text-base financial-future-title mb-5">
                          {t("Fund Managers")}
                        </div>
                        <p className="financial  text-white2">
                          {t(
                            "Elevate your client management with Stockbanx MAM accounts. Learn more about our streamlined process and dedicated support system. "
                          )}
                          <Link href="/">
                            <button className="text-primary">
                              {t("Become a MAM Manager Today!")}
                            </button>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* faq */}
      <FAQ />
    </div>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default MamAccounts;

