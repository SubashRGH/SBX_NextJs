import React from "react";
import Image from "next/image";
import bg from "../assets/images/register.jpg";
import { motion } from "framer-motion";
import Psp from "../../components/Psp";
import Slider from "react-slick";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Contact = () => {
  const { t } = useTranslation("common");

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };
  return (
    <>
      <div className="gray-bg">
        <div className="stkbnx-container mx-auto py-20">
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
            <div className="stkbnx-page-heading">{t("Contact Details")}</div>
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
            <p className="text-base read-font mb-10">
              {t(
                "5*24 Hours Online Customer Service providing online support and assistance"
              )}{" "}
            </p>{" "}
          </motion.div>
          <div className="flex sm:flex-row lg:flex-row lg:space-x-6 md:space-x-6 flex-col justify-between items-center">
            <div className="md:basis-3/4 lg:basis-3/4">
              <div className="bg-white rounded-[20px] p-7 shadow-lg">
                <div className="flex sm:flex-row lg:flex-row flex-col lg:space-x-6 md:space-x-6 justify-between items-center">
                  <div>gdfgdgdfgdgdgdfgdfg</div>
                  <div>fff</div>
                </div>
              </div>
            </div>
            <div className="md:basis-1/4">
              <div className="bg-white rounded-[20px] p-5 shadow-lg">ff</div>
            </div>
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

export default Contact;

