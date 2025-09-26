import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageBanner from "../../components/PageBanner";
import RewardProgram from "../../components/Reward/RewardProgram";
import FAQ from "../../components/FAQ";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ReferFriend = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <PageBanner
        title="Referral Program"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero"
        imgSrc="/static/images/refer/refer.png"
        size="md"
        btnText="Lorem Ipsum"
      />

      <div className="bg-white">
        <div className="stkbnx-container py-20">
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
            <div className="stkbnx-heading text-center mb-2">
              {t("Referral Benefits")}
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
            <p className="text-base read-font text-center mb-10">
              {t("Lorem ipsum dolor sit amet, consetetur sadipscing elitr")}
            </p>{" "}
          </motion.div>
          <div className="flex sm:flex-row lg:flex-row lg:space-x-6 md:space-x-6 flex-col justify-between md:items-center lg:items-center">
            <div className="md:basis-1/3">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 80 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="border-slate-200 rounded-2xl p-8 min-h-[200px] bg-white border text-center lg:mb-0 md:mb-0 xl:mb-0 mb-4">
                  <Image
                    src="/static/images/icons/mission.svg"
                    alt="apple"
                    width={60}
                    height={60}
                  />
                  <h1 className="text-2xl mb-3 mt-3"> {t("Lorem Ipsum")} </h1>
                </div>
              </motion.div>
            </div>
            <div className="md:basis-1/3">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 80 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.9 }}
              >
                <div className="border-slate-200 rounded-2xl p-8 min-h-[200px] bg-white border text-center lg:mb-0 md:mb-0 xl:mb-0 mb-4">
                  <Image
                    src="/static/images/icons/mission.svg"
                    alt="apple"
                    width={60}
                    height={60}
                  />
                  <h1 className="text-2xl mb-3 mt-3">{t("Lorem Ipsum")} </h1>
                </div>
              </motion.div>
            </div>
            <div className="md:basis-1/3">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 80 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 1.3 }}
              >
                <div className="border-slate-200 rounded-2xl p-8 min-h-[200px] bg-white border text-center">
                  <Image
                    src="/static/images/icons/mission.svg"
                    alt="apple"
                    width={60}
                    height={60}
                  />
                  <h1 className="text-2xl mb-3 mt-3"> {t("Lorem Ipsum")} </h1>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* how does it work*x
      <RewardProgram
        title="How Does It Work?"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"
        btn="Lorem Ipsum"
        img="/static/images/refer/how_it_works.png"
      />/}
      {/* easy step */}
      <div className="stkbnx-container mx-auto">
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
          <div className="stkbnx-heading text-center mb-10">
            {t("Easy Steps To Earn!")}
          </div>{" "}
        </motion.div>
        <div className="flex sm:flex-row lg:flex-row lg:space-x-6 md:space-x-6 flex-col justify-between items-center">
          <div className="md:basis-1/3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="border-slate-200 rounded-2xl p-8 min-h-[200px] gray-bg pr-20 relative lg:mb-0 md:mb-0 xl:mb-0 mb-8">
                <h1 className="text-xl mb-3 mt-2 live-text">
                  {" "}
                  {t("Open a live account")}
                </h1>
                <p className="text-sm ac-font">
                  {" "}
                  {t(
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
                  )}{" "}
                </p>
                <div className="live-color border-full w-16	h-16 rounded-full flex items-center justify-center text-white text-xl absolute top-[-20px] right-minus">
                  {" "}
                  1{" "}
                </div>
              </div>
            </motion.div>
          </div>
          <div className="md:basis-1/3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.9 }}
            >
              <div className="border-slate-200 rounded-2xl p-8 min-h-[200px] gray-bg pr-20 relative lg:mb-0 md:mb-0 xl:mb-0 mb-8">
                <h1 className="text-xl mb-3 mt-2 live-text">
                  {" "}
                  {t("Get your referral link")}
                </h1>
                <p className="text-sm ac-font">
                  {" "}
                  {t(
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
                  )}{" "}
                </p>
                <div className="live-color border-full w-16	h-16 rounded-full flex items-center justify-center text-white text-xl absolute top-[-20px] right-minus">
                  {" "}
                  2{" "}
                </div>
              </div>
            </motion.div>
          </div>
          <div className="md:basis-1/3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 1.2 }}
            >
              <div className="border-slate-200 rounded-2xl p-8 min-h-[200px] gray-bg pr-20 relative lg:mb-0 md:mb-0 xl:mb-0 mb-4">
                <h1 className="text-xl mb-3 mt-2 live-text">
                  {" "}
                  {t("Start referring and earning")}
                </h1>
                <p className="text-sm ac-font">
                  {" "}
                  {t(
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
                  )}{" "}
                </p>
                <div className="live-color border-full w-16	h-16 rounded-full flex items-center justify-center text-white text-xl absolute top-[-20px] right-minus">
                  {" "}
                  3{" "}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* button account */}
        <div className="flex justify-center flex-col max-w-[250px] mx-auto mt-5 mb-10">
          <button className="rounded-full cmn-btn bg-primary mt-3">
            {t("Lorem Ipsum")}
          </button>
        </div>
        {/* faq */}
        <FAQ />
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default ReferFriend;

