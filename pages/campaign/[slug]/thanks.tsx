import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { GetServerSideProps } from "next";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const Thanks: React.FC = (props: any) => {
  const { t } = useTranslation("common");
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      props?.slug &&
      props.slug === "pinnacle"
    ) {
      const gtag = (...args: any) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(args);
      };

      // Create the script tag
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=DC-14055034";

      // Event listener to initialize gtag after the script loads
      script.onload = () => {
        gtag("event", "conversion", {
          allow_custom_scripts: true,
          send_to: "DC-14055034/invmedia/cptma0+standard",
        });
      };

      // Append the script to the body
      document.body.appendChild(script);
    }
  }, [props?.slug]);

  const noscriptInnerHTML = {
    __html: `<img src="https://ad.doubleclick.net/ddm/activity/src=14055034;type=invmedia;cat=cptma0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${encodeURIComponent(
      "GDPR"
    )};gdpr_consent=${encodeURIComponent(
      "GDPR_CONSENT_755"
    )};ord=1?" width="1" height="1" alt=""/>`,
  };
  return (
    <>
      <Head>
        <meta
          http-equiv="refresh"
          content="10;url=https://za.cptmarkets.com/"
        />
        <script
          src="https://code.tidio.co/iwsj2wkksh0zqrtjvdhw5bleovqrynhn.js"
          async
        ></script>
        <script
          // src="https://ttrk.adextension.com/pixel?adid=65784ab38ba53837885eb3dc&txn_id=ORDER_ID_OR_TRANS_ID"
          src="https://ttrk.adextension.com/pixel?adid=658174d6448a2f4fde7fe99d&txn_id=RANDOM"
          async
        ></script>
      </Head>
      {props?.slug === "pinnacle" && (
        <noscript dangerouslySetInnerHTML={noscriptInnerHTML} />
      )}
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
              src="/static/images/landing-page/form.png"
              width={382}
              height={278}
              alt="stkbnx-logo"
            />
            <img
              src="http://adbird.smartstalk.com/postback/postback.aspx?event=PB&cs=TqdjWXsxBkYPaeU7VsRI9ahj0&clickid={clickid}"
              width="0px"
              height="0px"
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
            <div className="text-center text-[#3B3D43] xl:text-6xl lg:text-6xl text-4xl intro-font mb-4">
              {t("Thank you!")}
            </div>
            <div className="xl:text-2xl lg:text-2xl text-xl text-center mb-3 !text-[#3B3D43]">
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
                {" "}
                <GlobeAltIcon className="h-6 w-6 text-black" />
                {t("Visit our Website")}{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  locale,
}) => {
  const slug = params?.slug;

  return {
    props: {
      ...(await serverSideTranslations(String(locale), ["common"])),
      slug,
    },
  };
};

export default Thanks;

