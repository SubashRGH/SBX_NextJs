import React from "react";
import Container from "../Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { paymentEfficientList } from "@/constants";
import { useTranslation } from "next-i18next";

const Payments = () => {
  const { t } = useTranslation("common");

  return (
    <Container className="flex-col">
      <div className="font-inter text-white text-[26px] md:text-[28px] font-bold md:mb-[20px] text-center">
        {t("Streamline your payments with Our Efficient System")}
      </div>
      <div className="text-white2 text-[14px] md:text-[20px] font-normal text-center mb-[50px] md:mb-[80px]">
        {t("Enjoy our excellent payment system")}:
        {t(
          "easy deposits with global and local options, 24/7 access, and simple withdrawals."
        )}
      </div>
      <div className="!mt-[50px]">
        <div className="flex sm:flex-row lg:flex-row  md:flex-col  flex-col justify-between items-center gap-[50px]">
          <div className="md:basis-1/2">
            <div className="flex justify-center m-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 1 }}
              >
                <Image
                  className=" video "
                  src={"/static/images/efficient-system.png"}
                  alt="main-banner"
                  width={812}
                  height={609}
                />
              </motion.div>
            </div>
          </div>
          <div className="md:basis-5/12 md:flex items-center text-center lg:text-left mt-10 lg:mt-0 w-[100%] lg:w-full">
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
              <ul className="flex flex-col">
                {paymentEfficientList.map((item) => (
                  <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 80 },
                      visible: { opacity: 1, y: 1 },
                    }}
                    transition={{ duration: 0.4 }}
                    key={item.title}
                    className="mb-10"
                  >
                    <div className="text-xl md:text-xl text-white text-left xl:text-left">
                      {t(item.title)}
                    </div>
                    <div className=" text-white pr-3 md:pr-6 text-left xl:text-left text-base md:text-sm">
                      {t(item.content)}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Payments;

