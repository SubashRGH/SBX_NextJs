import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function Thanks() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <meta
          http-equiv="refresh"
          content="10;url=https://www.stockbanx.com/"
        />
      </Head>
      <div className="thanks-bg">
        <div className="stkbnx-container mx-auto md:py-12 xl:py-12 lg:py-12 py-4 mb-6">
          <div className="text-center xl:mb-16 lg:mb-16 mb-4">
            <a
              href="javascript:;"
              className="logo"
              style={{ cursor: "pointer" }}
            >
              <Link href="/">
                <Image
                  src="/static/images/sb-logo.png"
                  width={104}
                  height={15}
                  alt="stkbnx-logo"
                />
              </Link>
            </a>
          </div>
          <div className="text-center">
            <Image
              src="/static/images/landing-page/sucess-image.png"
              width={382}
              height={278}
              alt="stkbnx-logo"
              className="object-contain object-center"
            />
          </div>
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
            <div className="text-center text-white xl:text-6xl lg:text-6xl text-4xl intro-font mb-4">
              {t("Thank you!")}
            </div>
            <div className="xl:text-2xl lg:text-2xl text-xl text-center mb-3 !text-white">
              {t(
                "We received your inquiry, and we'll get back to you very soon."
              )}{" "}
            </div>
            {/* <p className='text-center text-lg	mb-3 text-[#A8ADBA]'>  {t("Average reply time 24 hours")}
            </p> */}
          </motion.div>
          <div className="text-center mt-5 flex justify-center">
            <Link href="/">
              <button
                className="rounded-full quick-btn live flex justify-center items-center h-[42px]"
                tp-type="button"
              >
                {t("Visit our Website")}{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
