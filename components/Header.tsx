import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "./Banner";
import {
  ChevronDownIcon,
  UserCircleIcon,
  XMarkIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Menu from "./Menu";
import { useTranslation, Trans } from "next-i18next";
import { motion } from "framer-motion";
import Language from "./Language";
import License from "./License";
import classNames from "classnames";
import uniqid from "uniqid";
import { changeLang } from "../utils/utils";
import { useRouter } from "next/router";
import RegistrationMenu from "./RegistrationMenu";
import {
  ArrowPathRoundedSquareIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

type Props = {};

function Header({}: Props) {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const [isOpen, setOpen] = useState(Boolean);
  const [showModal, setShowModal] = useState(false);
  const [showModalChat, setChatModal] = useState(false);
  const [country, setCountry] = useState<any>();
  const [scroll, setScroll] = useState(false);
  const [lang, setLang] = useState<any>();
  const [path, setPath] = useState(Boolean);
  const [url, setUrl] = useState<any>();
  const [isCookies, setCookies] = useState(Boolean);
  const [openRegistrationOptions, setOpenRegistrationOptions] = useState(false);

  const toggleCookies = () => {
    setCookies(false);
    localStorage.setItem("cookies", "true");
  };

  useEffect(() => {
    if (localStorage.getItem("cookies") !== null) {
      setCookies(false);
    } else {
      setCookies(true);
    }
  }, []);

  let data = {
    sec_name: "",
    lang_name: "",
    lic_name: "",
  };

  const checkScroll = () => {
    if (window.scrollY > 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    if (router.pathname === "/partner") {
      setPath(true);
      setUrl(process.env.NEXT_PUBLIC_IB_URL);
    } else {
      setPath(false);
      setUrl(process.env.NEXT_PUBLIC_CLIENT_URL);
    }
  }, [router.pathname]);

  // get psp list
  const getGeoInfo = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/SiteAPI/RequestLoc`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        // setCountry(response?.data?.country_code)

        sessionStorage.setItem("countryDefault", response?.data?.country_code);
      });
  };

  const toggleRisk = () => {
    setOpen(false);
    sessionStorage.setItem("info", "true");
  };

  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setCountry(data);
  }, []);

  useEffect(() => {
    setLang(i18n.language === "zh" ? "cn" : i18n.language || "en");
  }, [i18n.language]);

  // useEffect(() => {
  //   if (lang) {
  //     if (sessionStorage.getItem('lang') === 'ar') {
  //       addCss('arabic.css')
  //     }
  //   };
  // }, [lang]);

  // add css if change language in arabic interface
  const addCss = (fileName: string) => {
    var head = document.head;
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;
    head.appendChild(link);
  };

  useEffect(() => {
    getGeoInfo();
    if (sessionStorage.getItem("info") !== null) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const isRtl = i18n.language === "ar";

  return (
    <>
      {/* top bar */}
      {/* {isOpen && (
        <div className="risk relative bg-primary text-white z-[9999]">
          <div dir={isRtl ? "rtl" : "ltr"} className=" text-[10px] mx-auto">
            {t(
              "Risk Warning: Trading Contracts for Difference (CFDs) on margin carries a high level of risk and may not be suitable for all investors. Please ensure that you fully understand the risks and take the right measures to manage your risk"
            )}
          </div>
        </div>
      )} */}
      {/* allow cookies  */}
      {isCookies && (
        <div className="flex justify-center">
          <div className="md:w-6/12 bg-white fixed bottom-0 drop-shadow-xl rounded-t-lg z-[100] cookies">
            <div className="flex sm:flex-row lg:flex-row flex-col justify-between items-center">
              <div className="md:basis-7/12 lg:basis-7/12 xl:basis-7/12 basis-6/12">
                <p
                  className="text-sm font-color"
                  dangerouslySetInnerHTML={{
                    __html: t("allowCookies", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              </div>
              <button
                onClick={toggleCookies}
                className="rounded-full cookies-btn text-white font-light"
              >
                {t("Allow Cookies")}{" "}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* <div className="chat-box" onClick={() => setChatModal(!showModalChat)}>
        <svg focusable="false" aria-hidden="true" viewBox="0 0 28 32" width="28" height="32"><path fill="#fff" d="M28,32 C28,32 23.2863266,30.1450667 19.4727818,28.6592 L3.43749107,28.6592 C1.53921989,28.6592 0,27.0272 0,25.0144 L0,3.6448 C0,1.632 1.53921989,0 3.43749107,0 L24.5615088,0 C26.45978,0 27.9989999,1.632 27.9989999,3.6448 L27.9989999,22.0490667 L28,22.0490667 L28,32 Z M23.8614088,20.0181333 C23.5309223,19.6105242 22.9540812,19.5633836 22.5692242,19.9125333 C22.5392199,19.9392 19.5537934,22.5941333 13.9989999,22.5941333 C8.51321617,22.5941333 5.48178311,19.9584 5.4277754,19.9104 C5.04295119,19.5629428 4.46760991,19.6105095 4.13759108,20.0170667 C3.97913051,20.2124916 3.9004494,20.4673395 3.91904357,20.7249415 C3.93763774,20.9825435 4.05196575,21.2215447 4.23660523,21.3888 C4.37862552,21.5168 7.77411059,24.5386667 13.9989999,24.5386667 C20.2248893,24.5386667 23.6203743,21.5168 23.7623946,21.3888 C23.9467342,21.2215726 24.0608642,20.9827905 24.0794539,20.7254507 C24.0980436,20.4681109 24.0195551,20.2135019 23.8614088,20.0181333 Z"></path></svg>
      </div> */}
      {/* show chat modal here */}
      {showModalChat ? (
        <>
          <div className="chat-window">
            <div className="">
              <button
                className="bg-white rounded-full flex items-center justify-center border-0 text-black float-right absolute w-8 h-8 top-[15px] right-[23px]"
                onClick={() => setChatModal(false)}
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
              {/* Modal data here */}
              <iframe src="https://chat.conv.rs/3b4ef5f17291760ef49bd332c04475a2644252fa.html"></iframe>
            </div>
          </div>
        </>
      ) : null}
      {/* header bar */}
      {/* <div className="stkbnx-headerbar z-50  md:block hidden">
        <div className="container mx-auto">
          <div
            dir={isRtl ? "rtl" : "ltr"}
            className={classNames(
              `quick-menu flex justify-end items-center ${country === "CN" ? "quickbz" : ""
              }`
            )}
          >
            <ul>
              <li>
                <a
                  href={`${process.env.NEXT_PUBLIC_IB_URL}/#/${lang}/user/register-list`}
                  target="_blank"
                >
                  {t("Partner Portal")}
                </a>
              </li>

              {(() => {
                if (["CN", "HK", "TW"].includes(country)) {
                  return <></>;
                } else {
                  return (
                    <>
                      <li>
                        <Link href="/partner">
                          <a>{t("Partners")}</a>
                        </Link>
                      </li>
                    </>
                  );
                }
              })()}
              <li>
                <Link href="/about/contact">
                  <a>{t("Contact us")}</a>
                </Link>
              </li>
              <li>
                <a href="https://copytrading.cptmarkets.com/portal/login" target="_blank">
                  {t("Copy Trading")}
                </a>
              </li>
              <li>
                <a >
                  AOFA
                </a>
              </li>
              {/* <li onClick={() => setShowModal(true)}>
                {(() => {
                  if (["CN", "HK", "TW"].includes(country)) {
                    return <>IFSC </>;
                  } else if (country === "GB") {
                    return <>FCA</>;
                  } else {
                    return <>AOFA</>;
                  }
                })()}
                <svg
                  className={classNames(
                    `h-4 w-4 inline-block align-middle relative top-[-2px] left-[3px]
                    }`
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </li>

              <li style={{ width: "80px" }}>
                <Language
                  iconClass="fill-[#0C2038]"
                  flagImg="/static/images/icons/flag.svg"
                />
              </li>
              <li>
                {(() => {
                  if (["CN", "HK", "TW"].includes(country)) {
                    return (
                      <a
                        href={`${process.env.NEXT_PUBLIC_BLLOGIN}${changeLang(
                          lang
                        )}`}
                        target="_blank"
                      >
                        <UserCircleIcon className="h-6 w-6 inline-block align-top mr-1" />
                        {t("Sign in")}{" "}
                      </a>
                    );
                  } else {
                    return (
                      <a
                        href={`
                        ${url}/#/${lang}/user/login`}
                        target="_blank"
                      >
                        {path ? (
                          <UserGroupIcon className="h-6 w-6 inline-block align-top mr-1" />
                        ) : (
                          <UserCircleIcon className="h-6 w-6 inline-block align-top mr-1" />
                        )}

                        {path ? t("Sign in IB") : t("Sign in")}
                      </a>
                    );
                  }
                })()}
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* <div className="stkbnx-headerbar z-50  md:block hidden">
        <div className="container mx-auto">
          <div
            dir={isRtl ? "rtl" : "ltr"}
            className={classNames(
              `quick-menu flex justify-end items-center ${country === "CN" ? "quickbz" : ""
              }`
            )}
          >
            <ul>
              <li style={{ width: "80px" }}>
                <Language
                  iconClass="fill-[#0C2038]"
                  flagImg="/static/images/icons/flag.svg"
                />
              </li>
              <li>
                <a
                >
                  {t("Corporate")}
                </a>
              </li>

              {(() => {
                if (["CN", "HK", "TW"].includes(country)) {
                  return <></>;
                } else {
                  return (
                    <>
                      <li>
                        <Link href="/partner">
                          <a>{t("Partners")}</a>
                        </Link>
                      </li>
                    </>
                  );
                }
              })()}
              <li>
                <Link href="/about/contact">
                  <a>{t("Contact us")}</a>
                </Link>
              </li>
              <li >
                <div className="flex">
                  <svg
                    className={classNames(
                      `h-4 w-4 inline-block align-middle relative top-[3px] left-[3px] mr-3
                    }`
                    )}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8.99879 2.50015C7.75337 2.50454 6.55959 2.9983 5.67493 3.87493C4.79028 4.75155 4.28566 5.94079 4.26991 7.18611C4.25416 8.43143 4.72856 9.63305 5.59076 10.5318C6.45296 11.4305 7.63388 11.9543 8.87879 11.9901C8.95177 11.9801 9.0258 11.9801 9.09878 11.9901H9.16879C10.4188 11.9552 11.6045 11.4284 12.4682 10.5241C13.3319 9.61986 13.8038 8.41127 13.7814 7.161C13.759 5.91072 13.2441 4.71981 12.3486 3.84707C11.453 2.97433 10.2492 2.49029 8.99879 2.50015Z" fill="black" />
                    <path d="M14.0809 14.6489C12.5456 13.7358 10.7923 13.2539 9.00594 13.2539C7.21958 13.2539 5.46632 13.7358 3.93094 14.6489C3.35836 14.9792 2.87792 15.4481 2.53371 16.0125C2.18951 16.5768 1.99256 17.2186 1.96094 17.8789C1.99181 18.5355 2.18755 19.1737 2.5301 19.7347C2.87265 20.2958 3.35097 20.7615 3.92094 21.0889C5.44139 22.0423 7.2066 22.5323 9.00094 22.4989C10.7953 22.5323 12.5605 22.0423 14.0809 21.0889C14.6518 20.7575 15.1303 20.2881 15.4728 19.7238C15.8152 19.1595 16.0105 18.5183 16.0409 17.8589C16.008 17.2028 15.8114 16.5654 15.469 16.0047C15.1267 15.444 14.6495 14.9779 14.0809 14.6489Z" fill="black" />
                    <path d="M19.9894 7.84163C20.0718 8.76674 19.7913 9.68766 19.2073 10.4098C18.6232 11.132 17.7813 11.5988 16.8594 11.7116H16.8094C16.752 11.7078 16.6943 11.7146 16.6394 11.7316C15.7208 11.7897 14.815 11.4926 14.1094 10.9016C14.6367 10.4277 15.0467 9.83777 15.307 9.17831C15.5673 8.51886 15.6708 7.80794 15.6094 7.10163C15.5407 6.32164 15.2758 5.57171 14.8394 4.92163C15.3633 4.66621 15.9416 4.54221 16.5241 4.56033C17.1067 4.57845 17.6762 4.73816 18.1832 5.02565C18.6902 5.31314 19.1197 5.71976 19.4344 6.21039C19.749 6.70102 19.9395 7.26089 19.9894 7.84163Z" fill="black" />
                    <path d="M21.9902 17.0908C21.9254 17.6023 21.7317 18.0891 21.4274 18.5053C21.123 18.9216 20.718 19.2538 20.2502 19.4708C19.1672 20.0294 17.958 20.2982 16.7402 20.2508C17.4264 19.6602 17.8626 18.8309 17.9602 17.9308C17.9865 17.2727 17.8475 16.6185 17.5557 16.0281C17.264 15.4376 16.8289 14.9297 16.2902 14.5508C15.5956 14.0109 14.8191 13.5855 13.9902 13.2908C15.123 12.9683 16.314 12.9061 17.4742 13.1087C18.6344 13.3113 19.7338 13.7735 20.6902 14.4608C21.1114 14.7537 21.4514 15.1486 21.6787 15.6085C21.9061 16.0683 22.0132 16.5783 21.9902 17.0908Z" fill="black" />
                  </svg>
                  <p className="font-medium text-base text-black">IB Portal</p>
                </div>
              </li>


              <li>
                {(() => {
                  if (["CN", "HK", "TW"].includes(country)) {
                    return (
                      <a
                        href={`${process.env.NEXT_PUBLIC_BLLOGIN}${changeLang(
                          lang
                        )}`}
                        target="_blank"
                      >
                        <UserCircleIcon className="h-6 w-6 inline-block align-top mr-1" />
                        {t("Client Login")}{" "}
                      </a>
                    );
                  } else {
                    return (
                      <a
                        href={`
                        ${url}/#/${lang}/user/login`}
                        target="_blank"
                      >
                        {path ? (
                          <UserGroupIcon className="h-6 w-6 inline-block align-top mr-1" />
                        ) : (
                          <UserCircleIcon className="h-6 w-6 inline-block align-top mr-1" />
                        )}

                        {path ? t("Client Login") : t("Client Login")}
                      </a>
                    );
                  }
                })()}
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className=" z-50 bg-black text-white py-4 lg:hidden xl:hidden hidden">
        <div className="stkbnx-container ">
          <div
            dir={isRtl ? "rtl" : "ltr"}
            className={classNames(
              `flex justify-end md:pr-6 items-center ${
                country === "CN" ? "quickbz" : ""
              }`
            )}
          >
            <div className="xl:w-[70%] w-[90%]  flex justify-between">
              {/* <div className="min-w-[40px] mr-5">
            
                <Language
                  iconClass="fill-white"
                  flagImg="/static/images/home/lang.png"
                  flagImgClass="brightness-0 invert"
                />
              </div> */}
              <div className="h-[26px] w-[1px] bg-white"></div>
              <div className="cursor-pointer">
                <a
                  target="_blank"
                  className="flex whitespace-nowrap items-center"
                  href={`${process.env.NEXT_PUBLIC_COPY_TRADING_URL}/portal/login`}
                >
                  <span className="mr-2 flex items-center">
                    <Image
                      src={"/static/images/icon-copy-trading.svg"}
                      height={18}
                      width={18}
                      alt=""
                      className="invert"
                    />
                  </span>
                  {t("Copy Trading")}
                </a>
              </div>
              <div className="h-[26px] w-[1px] bg-white"></div>
              <div className="cursor-pointer">
                <Link
                  className="flex whitespace-nowrap items-center"
                  href={`/corporate`}
                >
                  <span className="flex items-center">
                    <span className="mr-2 flex items-center">
                      <Image
                        src={"/static/images/icon-corporate.svg"}
                        height={18}
                        width={18}
                        alt=""
                        className="invert"
                      />
                    </span>
                    {t("Corporate")}
                  </span>
                </Link>
              </div>
              <div className="h-[26px] w-[1px] bg-white"></div>
              {/* {(() => {
                if (["CN", "HK", "TW"].includes(country)) {
                  return <></>;
                } else {
                  return (
                    <>
                      <span className="flex whitespace-nowrap items-center">
                        <span className="mr-2 flex items-center">
                          <Image
                            src={"/static/images/icon-partner.svg"}
                            height={22}
                            width={22}
                            alt=""
                            className="invert"
                          />
                        </span>
                        <Link href="/partner">{t("Partners")}</Link>
                      </span>
                    </>
                  );
                }
              })()} */}
              <div className="h-[26px] w-[1px] bg-white"></div>
              <div>
                <Link href="/about/contact">
                  <a className="flex whitespace-nowrap items-center">
                    <span className="mr-2 flex items-center">
                      <Image
                        src={"/static/images/icon-call.svg"}
                        height={18}
                        width={18}
                        alt=""
                        className="invert"
                      />
                    </span>
                    {t("Contact us")}
                  </a>
                </Link>
              </div>
              <div className="h-[26px] w-[1px] bg-white"></div>
              <a
                target="_blank"
                href={`${process.env.NEXT_PUBLIC_IB_URL}#/en/user/register`}
              >
                <div className="flex cursor-pointer">
                  <svg
                    className={classNames(
                      `h-4 w-4 inline-block align-middle relative top-[3px] left-[3px] mr-3
                    }`
                    )}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M8.99879 2.50015C7.75337 2.50454 6.55959 2.9983 5.67493 3.87493C4.79028 4.75155 4.28566 5.94079 4.26991 7.18611C4.25416 8.43143 4.72856 9.63305 5.59076 10.5318C6.45296 11.4305 7.63388 11.9543 8.87879 11.9901C8.95177 11.9801 9.0258 11.9801 9.09878 11.9901H9.16879C10.4188 11.9552 11.6045 11.4284 12.4682 10.5241C13.3319 9.61986 13.8038 8.41127 13.7814 7.161C13.759 5.91072 13.2441 4.71981 12.3486 3.84707C11.453 2.97433 10.2492 2.49029 8.99879 2.50015Z"
                      fill="white"
                    />
                    <path
                      d="M14.0809 14.6489C12.5456 13.7358 10.7923 13.2539 9.00594 13.2539C7.21958 13.2539 5.46632 13.7358 3.93094 14.6489C3.35836 14.9792 2.87792 15.4481 2.53371 16.0125C2.18951 16.5768 1.99256 17.2186 1.96094 17.8789C1.99181 18.5355 2.18755 19.1737 2.5301 19.7347C2.87265 20.2958 3.35097 20.7615 3.92094 21.0889C5.44139 22.0423 7.2066 22.5323 9.00094 22.4989C10.7953 22.5323 12.5605 22.0423 14.0809 21.0889C14.6518 20.7575 15.1303 20.2881 15.4728 19.7238C15.8152 19.1595 16.0105 18.5183 16.0409 17.8589C16.008 17.2028 15.8114 16.5654 15.469 16.0047C15.1267 15.444 14.6495 14.9779 14.0809 14.6489Z"
                      fill="white"
                    />
                    <path
                      d="M19.9894 7.84163C20.0718 8.76674 19.7913 9.68766 19.2073 10.4098C18.6232 11.132 17.7813 11.5988 16.8594 11.7116H16.8094C16.752 11.7078 16.6943 11.7146 16.6394 11.7316C15.7208 11.7897 14.815 11.4926 14.1094 10.9016C14.6367 10.4277 15.0467 9.83777 15.307 9.17831C15.5673 8.51886 15.6708 7.80794 15.6094 7.10163C15.5407 6.32164 15.2758 5.57171 14.8394 4.92163C15.3633 4.66621 15.9416 4.54221 16.5241 4.56033C17.1067 4.57845 17.6762 4.73816 18.1832 5.02565C18.6902 5.31314 19.1197 5.71976 19.4344 6.21039C19.749 6.70102 19.9395 7.26089 19.9894 7.84163Z"
                      fill="white"
                    />
                    <path
                      d="M21.9902 17.0908C21.9254 17.6023 21.7317 18.0891 21.4274 18.5053C21.123 18.9216 20.718 19.2538 20.2502 19.4708C19.1672 20.0294 17.958 20.2982 16.7402 20.2508C17.4264 19.6602 17.8626 18.8309 17.9602 17.9308C17.9865 17.2727 17.8475 16.6185 17.5557 16.0281C17.264 15.4376 16.8289 14.9297 16.2902 14.5508C15.5956 14.0109 14.8191 13.5855 13.9902 13.2908C15.123 12.9683 16.314 12.9061 17.4742 13.1087C18.6344 13.3113 19.7338 13.7735 20.6902 14.4608C21.1114 14.7537 21.4514 15.1486 21.6787 15.6085C21.9061 16.0683 22.0132 16.5783 21.9902 17.0908Z"
                      fill="white"
                    />
                  </svg>
                  <p className="font-medium text-base text-white">IB Portal</p>
                </div>
              </a>

              <div className="h-[26px] w-[1px] bg-black"></div>
              <div>
                {(() => {
                  if (["CN", "HK", "TW"].includes(country)) {
                    return (
                      <a
                        href={`${process.env.NEXT_PUBLIC_BLLOGIN}${changeLang(
                          lang
                        )}`}
                        target="_blank"
                      >
                        <UserCircleIcon className="h-6 w-6 inline-block align-top mr-1" />
                        {t("Client Login")}{" "}
                      </a>
                    );
                  } else {
                    return (
                      <a
                        href={`
                        ${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${lang}/user/login`}
                        target="_blank"
                      >
                        {path ? (
                          <UserGroupIcon className="h-6 w-6 inline-block align-top mr-1" />
                        ) : (
                          <UserCircleIcon className="h-6 w-6 inline-block align-top mr-1" />
                        )}

                        {path ? t("Client Login") : t("Client Login")}
                      </a>
                    );
                  }
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={classNames(
          `hidden stkbnx-container mob-responsive-nav-padding justify-between mx-auto w-full px-4 py-4 bg-black ${
            country === "CN" ? "quickbz" : ""
          }`
        )}
      >
        <div className="flex justify-start items-center ">
          {/* {(() => {
            if (["CN", "HK", "TW"].includes(country)) {
              return <></>;
            } else {
              return (
                <>
                  <Link href="/partner">
                    <p className="font-medium text-base text-white">
                      {t("Partners")}
                    </p>
                  </Link>
                </>
              );
            }
          })()} */}
        </div>
        <div className="h-[26px] w-[1px] bg-white"></div>
        <a
          target="_blank"
          href={`${process.env.NEXT_PUBLIC_IB_URL}#/en/user/register`}
          className=" flex justify-center gap-2 items-center "
        >
          <div>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99879 2.50015C7.75337 2.50454 6.55959 2.9983 5.67493 3.87493C4.79028 4.75155 4.28566 5.94079 4.26991 7.18611C4.25416 8.43143 4.72856 9.63305 5.59076 10.5318C6.45296 11.4305 7.63388 11.9543 8.87879 11.9901C8.95177 11.9801 9.0258 11.9801 9.09878 11.9901H9.16879C10.4188 11.9552 11.6045 11.4284 12.4682 10.5241C13.3319 9.61986 13.8038 8.41127 13.7814 7.161C13.759 5.91072 13.2441 4.71981 12.3486 3.84707C11.453 2.97433 10.2492 2.49029 8.99879 2.50015Z"
                fill="white"
              />
              <path
                d="M14.0809 14.6489C12.5456 13.7358 10.7923 13.2539 9.00594 13.2539C7.21958 13.2539 5.46632 13.7358 3.93094 14.6489C3.35836 14.9792 2.87792 15.4481 2.53371 16.0125C2.18951 16.5768 1.99256 17.2186 1.96094 17.8789C1.99181 18.5355 2.18755 19.1737 2.5301 19.7347C2.87265 20.2958 3.35097 20.7615 3.92094 21.0889C5.44139 22.0423 7.2066 22.5323 9.00094 22.4989C10.7953 22.5323 12.5605 22.0423 14.0809 21.0889C14.6518 20.7575 15.1303 20.2881 15.4728 19.7238C15.8152 19.1595 16.0105 18.5183 16.0409 17.8589C16.008 17.2028 15.8114 16.5654 15.469 16.0047C15.1267 15.444 14.6495 14.9779 14.0809 14.6489Z"
                fill="white"
              />
              <path
                d="M19.9894 7.84163C20.0718 8.76674 19.7913 9.68766 19.2073 10.4098C18.6232 11.132 17.7813 11.5988 16.8594 11.7116H16.8094C16.752 11.7078 16.6943 11.7146 16.6394 11.7316C15.7208 11.7897 14.815 11.4926 14.1094 10.9016C14.6367 10.4277 15.0467 9.83777 15.307 9.17831C15.5673 8.51886 15.6708 7.80794 15.6094 7.10163C15.5407 6.32164 15.2758 5.57171 14.8394 4.92163C15.3633 4.66621 15.9416 4.54221 16.5241 4.56033C17.1067 4.57845 17.6762 4.73816 18.1832 5.02565C18.6902 5.31314 19.1197 5.71976 19.4344 6.21039C19.749 6.70102 19.9395 7.26089 19.9894 7.84163Z"
                fill="white"
              />
              <path
                d="M21.9902 17.0908C21.9254 17.6023 21.7317 18.0891 21.4274 18.5053C21.123 18.9216 20.718 19.2538 20.2502 19.4708C19.1672 20.0294 17.958 20.2982 16.7402 20.2508C17.4264 19.6602 17.8626 18.8309 17.9602 17.9308C17.9865 17.2727 17.8475 16.6185 17.5557 16.0281C17.264 15.4376 16.8289 14.9297 16.2902 14.5508C15.5956 14.0109 14.8191 13.5855 13.9902 13.2908C15.123 12.9683 16.314 12.9061 17.4742 13.1087C18.6344 13.3113 19.7338 13.7735 20.6902 14.4608C21.1114 14.7537 21.4514 15.1486 21.6787 15.6085C21.9061 16.0683 22.0132 16.5783 21.9902 17.0908Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="font-medium text-base text-white">IB Portal</p>
        </a>
        <div className="h-[26px] w-[1px] bg-white"></div>
        <div className=" flex justify-center gap-2 items-center ">
          {(() => {
            if (["CN", "HK", "TW"].includes(country)) {
              return (
                <a
                  className="font-medium text-base text-white"
                  href={`${process.env.NEXT_PUBLIC_BLLOGIN}${changeLang(lang)}`}
                  target="_blank"
                >
                  <UserCircleIcon className="h-6 w-6 inline-block align-top mr-1" />
                  {t("Client Login")}{" "}
                </a>
              );
            } else {
              return (
                <a
                  className="font-medium text-base text-white"
                  href={`
                ${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${lang}/user/login`}
                  target="_blank"
                >
                  {path ? (
                    <UserGroupIcon className="h-6 w-6 inline-block align-top mr-1" />
                  ) : (
                    <UserCircleIcon className="h-6 w-6 inline-block align-top mr-1" />
                  )}

                  {path ? t("Client Login") : t("Client Login")}
                </a>
              );
            }
          })()}
        </div>
      </div>

      {/* menu header bar */}
      <div
        // className={classNames(
        //   `stkbnx-menuheader relative ${scroll ? "fixed-header" : ""}`
        // )}
        className="stkbnx-menuheader sticky top-0 bg-background shadow-bottomAndSides"
      >
        <div className=" lg:w-full">
          <div className="flex mob-nav stkbnx-container sm:flex-row lg:flex-row space-x-4 flex-col items-center z-[999] relative">
            <Menu
              handleRegisterClick={() => setOpenRegistrationOptions(true)}
            />
          </div>
          {openRegistrationOptions && (
            <RegistrationMenu
              handleClose={() => setOpenRegistrationOptions(false)}
            />
          )}
        </div>
      </div>
      {/* fca modal here  */}
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto lg:fixed xl:fixed lg:inset-0 xl:inset-0 top-7 absolute z-50 outline-none focus:outline-none overlay p-7 kiosk-lc">
            <div className="relative modal-width lg:p-2 xl:p-2 p-2 mx-aut bg-white rounded-[8px]">
              <button
                className="bg-white rounded-full flex items-center justify-center border-0 text-black float-right absolute w-6 h-6 top-[-4px] right-[-5px]"
                onClick={() => setShowModal(false)}
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
              {/* Modal data here */}
              <License />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Header;

