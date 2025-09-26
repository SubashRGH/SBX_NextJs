import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageBanner from "../../components/PageBanner";
import RewardTable from "../../components/partner/RewardTable";
import FAQ from "../../components/FAQ";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const RewardProgram = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <PageBanner
        title="Reward Program"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero"
        imgSrc="/static/images/reward/reward.png"
        size="sm"
        btnText="Lorem"
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
            <div className="stkbnx-heading text-center mb-8">
              {t("Rewards You Actually Use!")}
            </div>{" "}
          </motion.div>
          <RewardTable />
          <div className="reward-table">
            {/* <table className="styled-table">
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Category</th>
                  <th>NTCs</th>
                  <th>Min Lots per client</th>
                  <th>Min Deposit $</th>
                  <th>Net Funding $</th>
                  <th>Total Lots Traded</th>
                  <th>Rewards</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>CPTPartner</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1000</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Welcome Kit</td>
                </tr>
                <tr className="active-row">
                  <td>2</td>
                  <td>CPTPremium</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1000</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Welcome Kit</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>CPTPartner</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1000</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Welcome Kit</td>
                </tr>
                <tr className="active-row">
                  <td>4</td>
                  <td>CPTPartner</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1000</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Welcome Kit</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>CPTPartner</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1000</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Welcome Kit</td>
                </tr>
                <tr className="active-row">
                  <td>6</td>
                  <td>CPTPartner</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1000</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Welcome Kit</td>
                </tr>
              </tbody>
            </table> */}
            {/* button account */}
            <div className="flex justify-center flex-col max-w-[250px] mx-auto">
              <button className="rounded-full cmn-btn bg-primary mt-3">
                {t("Lorem")}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* vision and mission */}
      <div className="gray-bg py-4">
        <div className="stkbnx-container mx-auto">
          <div className="flex sm:flex-row lg:flex-row  flex-col justify-between items-center">
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
                <div className="stkbnx-heading mb-5">
                  {t("An Innovative")} <br /> {t("Rewards Program")}
                </div>
                <p className="text-base read-font">
                  {t(
                    "Stet clita kasd Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"
                  )}{" "}
                </p>
                <button className="rounded-full cmn-btn bg-primary mt-7">
                  {t("Start Trading")}
                </button>
              </motion.div>
            </div>
            <div className="md:basis-5/12 w-full">
              <div className="">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, x: 150, scale: 0.6 },
                    visible: { opacity: 1, x: 1, scale: 1.1 },
                  }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    alt="car"
                    src="/static/images/reward/car.png"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* safe and secure */}
      {/* faq */}
      <FAQ />
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default RewardProgram;

