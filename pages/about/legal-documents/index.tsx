import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import Loader from "../../../components/Loader";
import Head from "next/head";
import { legalDocuments } from "@/constants";
import Link from "next/link";

type Props = {
  legal: any;
};

const Legal: NextPage<Props> = ({ legal }: Props) => {
  const { t } = useTranslation("common");
  const [doc, setDoc] = useState<any>([]);
  const [lang, setLang] = useState<any>();
  const [country, setCountry] = useState<any>();
  const [loading, setLoading] = useState(false);
  // get legal doc list
  const getLegalDoc = () => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/SiteAPI/GetLegalDocs`, {
      method: "POST",
      body: JSON.stringify({
        sec_name: "GetLegalDocs",
        lang_name: lang,
        lic_name: country,
        country_code: sessionStorage.getItem("countryDefault"),
        action_name: "GetLegalDocs",
        page_name: "about/legal-documents",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setDoc(response.data);
        setLoading(false);
      });
  };

  // get language first
  const getLang = () => {
    setLang(sessionStorage.getItem("lang") || "en");
    if (sessionStorage.getItem("country") === "CN") {
      setCountry("Bleize");
    } else {
      setCountry("SA");
    }
  };

  useEffect(() => {
    getLang();
  }, []);

  // useEffect(() => {
  //   if (lang) getLegalDoc();
  // }, [lang]);

  return (
    <>
      <div>
        <Head>
          <title>Best Online Trading Platforms | Stockbanx</title>
          <meta
            name="description"
            content="Before opening a trading account, explore our comprehensive collection of legal documents at Stockbanx, one of the best online trading platforms"
            key="Best Online Trading Platforms"
          />
        </Head>
      </div>

      <div className="black-bg" id="legalDocumentSection">
        <div className="stkbnx-container mx-auto md:py-20 xl:py-20 lg:py-20 py-4 md:px-20  md-padding-top">
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
            <div className="stkbnx-page-heading pt-10  text-white text-3xl leading-[42px] xl:text-[42px]">
              {t("Legal Docuements")}
            </div>
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
              <p
                className="text-base read-font mb-10 text-grey"
                dangerouslySetInnerHTML={{
                  __html: t(
                    "Get access to all relevant legal documents before opening a trading account",
                    { interpolation: { escapeValue: false } }
                  ),
                }}
              />
            </motion.div>
            {loading ? (
              <>
                <Loader />
              </>
            ) : (
              <>
                <div className="flex sm:flex-row  lg:flex-row flex-wrap flex-col justify-between sm:items-center lg:items-center">
                  {legalDocuments &&
                    legalDocuments.map((item: any) => {
                      return (
                        <div className="basis-[100%] xl:basis-[47%]  lg:flex-row  mb-8 ">
                          <div className="border border-solid border-white20 rounded-[20px] p-8 legal-content">
                            <div className="flex justify-between items-center legal-item">
                              <h1 className="text-lg text-white">
                                {" "}
                                {t(item.title)}{" "}
                              </h1>
                              <Link href={item.href} target="_blank">
                                <div className="download">
                                  <div className="pdf-text"> View</div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                    />
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  {/* <div className="md:basis-[47%] lg:basis-[47%]  mb-8 ">
                <div className="bg-white rounded-[20px] p-8">
                  <div className="flex justify-between items-center">
                    <h1 className="text-xl"> {t("Privacy Policy")}</h1>
                    <div className="download">
                      <div className="pdf-text"> PDF</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="86.11"
                        height="87.992"
                        viewBox="0 0 86.11 87.992"
                      >
                        <defs>
                          <filter
                            id="Path_16797"
                            x="0"
                            y="0"
                            width="86.11"
                            height="87.992"
                            filterUnits="userSpaceOnUse"
                          >
                            <feOffset />
                            <feGaussianBlur stdDeviation="10" result="blur" />
                            <feFlood floodColor="#fff" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          transform="matrix(1, 0, 0, 1, 0, 0)"
                          filter="url(#Path_16797)"
                        >
                          <path
                            id="Path_16797-2"
                            data-name="Path 16797"
                            d="M10.56,25.32l11.191,11.1a1.772,1.772,0,0,0,2.611,0l11.191-11.1a1.958,1.958,0,0,0,.187-2.518,1.772,1.772,0,0,0-2.8-.187l-8.02,8.02V10.865a1.865,1.865,0,1,0-3.73,0V30.636l-8.02-8.02a1.772,1.772,0,0,0-2.8.187A1.958,1.958,0,0,0,10.56,25.32Z"
                            transform="translate(20 21)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:basis-[47%] lg:basis-[47%]  mb-8">
                <div className="bg-white rounded-[20px] p-8">
                  <div className="flex justify-between items-center">
                    <h1 className="text-xl">{t("Risk Disclosure")} </h1>
                    <div className="download">
                      <div className="pdf-text"> PDF</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="86.11"
                        height="87.992"
                        viewBox="0 0 86.11 87.992"
                      >
                        <defs>
                          <filter
                            id="Path_16797"
                            x="0"
                            y="0"
                            width="86.11"
                            height="87.992"
                            filterUnits="userSpaceOnUse"
                          >
                            <feOffset />
                            <feGaussianBlur stdDeviation="10" result="blur" />
                            <feFlood floodColor="#fff" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          transform="matrix(1, 0, 0, 1, 0, 0)"
                          filter="url(#Path_16797)"
                        >
                          <path
                            id="Path_16797-2"
                            data-name="Path 16797"
                            d="M10.56,25.32l11.191,11.1a1.772,1.772,0,0,0,2.611,0l11.191-11.1a1.958,1.958,0,0,0,.187-2.518,1.772,1.772,0,0,0-2.8-.187l-8.02,8.02V10.865a1.865,1.865,0,1,0-3.73,0V30.636l-8.02-8.02a1.772,1.772,0,0,0-2.8.187A1.958,1.958,0,0,0,10.56,25.32Z"
                            transform="translate(20 21)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:basis-[47%] lg:basis-[47%]  mb-8">
                <div className="bg-white rounded-[20px] p-8">
                  <div className="flex justify-between items-center">
                    <h1 className="text-xl">  {t("CS. Agreement")}</h1>
                    <div className="download">
                      <div className="pdf-text"> PDF</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="86.11"
                        height="87.992"
                        viewBox="0 0 86.11 87.992"
                      >
                        <defs>
                          <filter
                            id="Path_16797"
                            x="0"
                            y="0"
                            width="86.11"
                            height="87.992"
                            filterUnits="userSpaceOnUse"
                          >
                            <feOffset />
                            <feGaussianBlur stdDeviation="10" result="blur" />
                            <feFlood floodColor="#fff" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          transform="matrix(1, 0, 0, 1, 0, 0)"
                          filter="url(#Path_16797)"
                        >
                          <path
                            id="Path_16797-2"
                            data-name="Path 16797"
                            d="M10.56,25.32l11.191,11.1a1.772,1.772,0,0,0,2.611,0l11.191-11.1a1.958,1.958,0,0,0,.187-2.518,1.772,1.772,0,0,0-2.8-.187l-8.02,8.02V10.865a1.865,1.865,0,1,0-3.73,0V30.636l-8.02-8.02a1.772,1.772,0,0,0-2.8.187A1.958,1.958,0,0,0,10.56,25.32Z"
                            transform="translate(20 21)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:basis-[47%] lg:basis-[47%]  mb-8">
                <div className="bg-white rounded-[20px] p-8">
                  <div className="flex justify-between items-center">
                    <h1 className="text-xl"> {t("AML Compliance")}</h1>
                    <div className="download">
                      <div className="pdf-text"> PDF</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="86.11"
                        height="87.992"
                        viewBox="0 0 86.11 87.992"
                      >
                        <defs>
                          <filter
                            id="Path_16797"
                            x="0"
                            y="0"
                            width="86.11"
                            height="87.992"
                            filterUnits="userSpaceOnUse"
                          >
                            <feOffset />
                            <feGaussianBlur stdDeviation="10" result="blur" />
                            <feFlood floodColor="#fff" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          transform="matrix(1, 0, 0, 1, 0, 0)"
                          filter="url(#Path_16797)"
                        >
                          <path
                            id="Path_16797-2"
                            data-name="Path 16797"
                            d="M10.56,25.32l11.191,11.1a1.772,1.772,0,0,0,2.611,0l11.191-11.1a1.958,1.958,0,0,0,.187-2.518,1.772,1.772,0,0,0-2.8-.187l-8.02,8.02V10.865a1.865,1.865,0,1,0-3.73,0V30.636l-8.02-8.02a1.772,1.772,0,0,0-2.8.187A1.958,1.958,0,0,0,10.56,25.32Z"
                            transform="translate(20 21)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:basis-[47%] lg:basis-[47%]  mb-8">
                <div className="bg-white rounded-[20px] p-8">
                  <div className="flex justify-between items-center">
                    <h1 className="text-xl"> {t("Licence Regulation")}</h1>
                    <div className="download">
                      <div className="pdf-text"> PDF</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="86.11"
                        height="87.992"
                        viewBox="0 0 86.11 87.992"
                      >
                        <defs>
                          <filter
                            id="Path_16797"
                            x="0"
                            y="0"
                            width="86.11"
                            height="87.992"
                            filterUnits="userSpaceOnUse"
                          >
                            <feOffset />
                            <feGaussianBlur stdDeviation="10" result="blur" />
                            <feFlood floodColor="#fff" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          transform="matrix(1, 0, 0, 1, 0, 0)"
                          filter="url(#Path_16797)"
                        >
                          <path
                            id="Path_16797-2"
                            data-name="Path 16797"
                            d="M10.56,25.32l11.191,11.1a1.772,1.772,0,0,0,2.611,0l11.191-11.1a1.958,1.958,0,0,0,.187-2.518,1.772,1.772,0,0,0-2.8-.187l-8.02,8.02V10.865a1.865,1.865,0,1,0-3.73,0V30.636l-8.02-8.02a1.772,1.772,0,0,0-2.8.187A1.958,1.958,0,0,0,10.56,25.32Z"
                            transform="translate(20 21)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:basis-[47%] lg:basis-[47%]  mb-8">
                <div className="bg-white rounded-[20px] p-8">
                  <div className="flex justify-between items-center">
                    <h1 className="text-xl"> {t("Cookies Policy")}</h1>
                    <div className="download">
                      <div className="pdf-text"> PDF</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="86.11"
                        height="87.992"
                        viewBox="0 0 86.11 87.992"
                      >
                        <defs>
                          <filter
                            id="Path_16797"
                            x="0"
                            y="0"
                            width="86.11"
                            height="87.992"
                            filterUnits="userSpaceOnUse"
                          >
                            <feOffset />
                            <feGaussianBlur stdDeviation="10" result="blur" />
                            <feFlood floodColor="#fff" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          transform="matrix(1, 0, 0, 1, 0, 0)"
                          filter="url(#Path_16797)"
                        >
                          <path
                            id="Path_16797-2"
                            data-name="Path 16797"
                            d="M10.56,25.32l11.191,11.1a1.772,1.772,0,0,0,2.611,0l11.191-11.1a1.958,1.958,0,0,0,.187-2.518,1.772,1.772,0,0,0-2.8-.187l-8.02,8.02V10.865a1.865,1.865,0,1,0-3.73,0V30.636l-8.02-8.02a1.772,1.772,0,0,0-2.8.187A1.958,1.958,0,0,0,10.56,25.32Z"
                            transform="translate(20 21)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div> */}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   let body = {
//     sec_name: "",
//     lang_name: "en",
//     lic_name: "SA",
//     country_code: "NL",
//     action_name: "",
//   };
//   const url = "https://unifiedtest.cptinternational.com/api/SiteAPI/GetLegalDocs";
//   const res = await fetch( , {
//     method: "POST",
//     body: JSON.stringify(body),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await res.json();
//   return {
//     props: {
//       legal: data.data,
//     },
//   };
// };

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Legal;

