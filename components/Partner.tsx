import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

type Props = {};

export default function Partner({}: Props) {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="partner-bg mt-24">
        <div className="stkbnx-container py-24">
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
              {t("IB Program")}{" "}
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
            <p className="text-base read-font text-center mb-12">
              {t(
                "Stockbanx is an excellent choice for Introducing Brokers, offering interesting rewards programs and exciting incentives."
              )}
            </p>{" "}
          </motion.div>
          <div className="flex sm:flex-row lg:flex-row md:space-x-10 lg:space-x-10 xl:space-x-10 flex-col justify-between items-center">
            <div className="md:basis-1/2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-[20px] p-5 text-center mb-10 min-h-[441px]  shadow-lg">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 1 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src="/static/images/home/ib.png"
                      alt="ib"
                      width={256}
                      height={256}
                    />
                  </motion.div>
                  <div className="stkbnx-heading text-center mb-2">
                    {" "}
                    {t("Transparent IB Portal")}
                  </div>
                  <p className="text-base read-font text-center mb-2">
                    {t(
                      "Free access to trading tools - You will also be granted access to all our free trading tools to help assist with your trading decisions and help your clients."
                    )}
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="md:basis-1/2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 1 }}
              >
                <div className="bg-white rounded-[20px] p-5 text-center mb-10 min-h-[441px] shadow-lg">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 1 },
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src="/static/images/home/rebate.png"
                      alt="rebate"
                      width={256}
                      height={256}
                    />
                  </motion.div>
                  <div className="stkbnx-heading text-center mb-2">
                    {t("Instant Rebate Payments")}
                  </div>
                  <p className="text-base read-font text-center mb-2">
                    {t(
                      "Competitive and customisable rebate scheme - We always put our clients and partners first. You’ll be rewarded with extremely competitive and customisable rebate options."
                    )}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex sm:flex-row lg:flex-row md:space-x-10 lg:space-x-10 xl:space-x-10 flex-col justify-between items-center">
            <div className="md:basis-1/2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 1.4 }}
              >
                <div className="bg-white rounded-[20px] p-5 text-center min-h-[441px] shadow-lg">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 1 },
                    }}
                    transition={{ duration: 1.8 }}
                  >
                    <Image
                      src="/static/images/home/reward.png"
                      alt="reward"
                      width={285}
                      height={263}
                    />
                  </motion.div>
                  <div className="stkbnx-heading text-center mb-2">
                    {t("Exclusive Rewards")}
                  </div>
                  <p className="text-base read-font text-center mb-2">
                    {t(
                      "Get up to $10 commission for each standard lot your client trade. Be rewarded additionally through our tiered IB Rewards Program, which offers the chance to win a luxury car and other exciting Apple products."
                    )}
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="md:basis-1/2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 2 }}
              >
                <div className="bg-white rounded-[20px] p-5 text-center min-h-[441px] shadow-lg lg:mt-0 md:mt-0 xl:mt-0 mt-8">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: -50 },
                      visible: { opacity: 1, y: 1 },
                    }}
                    transition={{ duration: 2.1 }}
                  >
                    <Image
                      src="/static/images/home/flexible.png"
                      alt="forex"
                      width={242}
                      height={232}
                    />
                  </motion.div>
                  <div className="stkbnx-heading text-center mb-2">
                    {" "}
                    {t("Flexibility")}
                  </div>
                  <p className="text-base read-font text-center mb-2">
                    {t(
                      "Customized support tailored to your needs. Our team welcomes any special requests that serve your needs and support better trading for your clients."
                    )}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.4 }}
            className="flex justify-center pt-10"
          >
            <button className="rounded-full cmn-btn bg-primary">
              {" "}
              {t("Learn More")}
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
}

