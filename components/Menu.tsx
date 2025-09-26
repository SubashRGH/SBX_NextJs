import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import BlurImage from "../components/BlurImage";
import MobMenu from "./MobMenu";
import { useRouter } from "next/router";
import classNames from "classnames";
import { changeLang } from "../utils/utils";
import RegisterButton from "./button/RegisterButton";
import Language from "./Language";
import Container from "./Container";

type Props = {
  handleRegisterClick: Function;
};

export default function Menu({ handleRegisterClick }: Props) {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const [country, setCountry] = useState<any>();
  const [isActive, setIsActive] = useState(false);
  const [lang, setLang] = useState<any>();
  const [condition, setCondition] = useState<any>("");
  const [eventName, setEventName] = useState<any>("");
  const [path, setPath] = useState(Boolean);
  const [url, setUrl] = useState<any>();
  const [openRegistrationOptions, setOpenRegistrationOptions] = useState(false);
  // const menuClick = () => {
  //   const parent = document.getElementsByClassName('mega-menu');
  //   parent.classList.toggle('hide');
  //   console.log('ff')
  // }

  const menuClick = (event: any) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
    setTimeout(() => {
      setIsActive(false);
    }, 1000);
  };

  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setCountry(data);
    if (data === "CN") {
      setCondition("/products/conditionsbz");
    } else {
      setCondition("/products/conditions");
    }

    setTimeout(() => {
      if (sessionStorage.getItem("event") !== null) {
        setEventName(`${sessionStorage.getItem("event")}`);
      } else {
      }
    }, 500);
  }, []);

  useEffect(() => {
    if (router.pathname === "/partner") {
      setPath(true);
      setUrl(process.env.NEXT_PUBLIC_IB_URL);
    } else {
      setPath(false);
      setUrl(process.env.NEXT_PUBLIC_CLIENT_URL);
    }
  }, [router.pathname]);

  useEffect(() => {
    setLang(i18n.language === "zh" ? "cn" : i18n.language || "en");
  }, [i18n.language]);

  const handleNavigateToRoot = () => {
    // router.push(`/${sessionStorage.getItem("country") || "ae"}`, undefined, {
    //   locale: router.locale,
    // });
    router.push(`/`, undefined, {
      locale: router.locale,
    });
  };

  const isRtl = i18n.language === "ar";

  return (
    <>
      <header
        className="header res-header-mx lg:flex hidden bg-background"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <a
          onClick={handleNavigateToRoot}
          className="logo"
          style={{ cursor: "pointer" }}
        >
          {/* <Link href="/"> */}
          <Image
            src="/static/images/sb-logo.png"
            width={150}
            height={20}
            alt="stkbnx-logo"
          />
          {/* </Link> */}
        </a>
        {/* mobile menu here */}
        <div className="mobile-master">
          <MobMenu />
        </div>

        <nav className="menu-master">
          <ul className="menu-items">
            {/* <li>
              <Link href="/">{t("Home")}</Link>
            </li> */}
            <li tabIndex={1} className="cursor-pointer">
              {t("Products")}
              <div
                className={classNames(
                  `mega-menu bg-background ${isActive ? "hide" : ""}`
                )}
              >
                <div className="content container !w-full !max-w-full">
                  <div className="text-[14px] font-[500] mb-4 hidden lg:block">
                    {" "}
                    {t("Products")}{" "}
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 mx-auto w-full">
                    <div className="menuitems mb-2">
                      <Link href="/products/forex" prefetch>
                        <div
                          className="rounded-lg p-2 menu-hover cursor-pointer"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <img
                                alt={"Section Item"}
                                loading="lazy"
                                width={25}
                                height={25}
                                className="object-cover"
                                src={"/static/images/icons/forex.webp"}
                              />
                            </div>
                            <div>
                              <div className="text-white text-base mb-1 font-light">
                                {t("Forex")}
                              </div>
                              <p className="menu-text text-sm">
                                {t("Trade Major and Minor forex pairs")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="menuitems mb-2">
                      <Link href="/products/indices" prefetch>
                        <div
                          className="rounded-lg p-2 menu-hover cursor-pointer"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <img
                                alt={"Section Item"}
                                loading="lazy"
                                width={25}
                                height={25}
                                className="object-cover"
                                src={"/static/images/icons/indices.webp"}
                              />
                            </div>
                            <div>
                              <div className="text-white text-base mb-1 font-light">
                                {t("Indices")}
                              </div>
                              <p className="menu-text text-sm">
                                {" "}
                                {t("Trade leveraged products on Indices")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="menuitems mb-2">
                      <Link href="/products/commodities" prefetch>
                        <div
                          className="rounded-lg p-2 menu-hover cursor-pointer"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <img
                                alt={"Section Item"}
                                loading="lazy"
                                width={25}
                                height={25}
                                className="object-cover"
                                src={"/static/images/icons/commodities.webp"}
                              />
                            </div>
                            <div>
                              <div className="text-white text-base mb-1 font-light">
                                {t("Commodities")}
                              </div>
                              <p className="menu-text text-sm">
                                {" "}
                                {t(
                                  "Trade popular commodities with competitive conditions"
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="menuitems mb-2">
                      <Link href="/products/crypto" prefetch>
                        <div
                          className="rounded-lg p-2 menu-hover cursor-pointer"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <img
                                alt={"Section Item"}
                                loading="lazy"
                                width={25}
                                height={25}
                                className="object-cover"
                                src={"/static/images/icons/cryptoCFD.webp"}
                              />
                            </div>
                            <div>
                              <div className="text-white text-base mb-1 font-light">
                                {t("Crypto CFD")}
                              </div>
                              <p className="menu-text text-sm">
                                {" "}
                                {t(
                                  "Trade your favorite cryptocurrencies with Stockbanx"
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="menuitems mb-2">
                      <Link href="/products/stocks" prefetch>
                        <div
                          className="rounded-lg p-2 menu-hover cursor-pointer"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <img
                                alt={"Section Item"}
                                loading="lazy"
                                width={25}
                                height={25}
                                className="object-cover"
                                src={"/static/images/icons/stocks.webp"}
                              />
                            </div>
                            <div>
                              <div className="text-white text-base mb-1 font-light">
                                {t("Stocks")}
                              </div>
                              <p className="menu-text text-sm">
                                {" "}
                                {t(
                                  "Trade shares of the biggest companies in the world"
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="text-[14px] font-[500] mb-4 hidden lg:block">
                    {t("Pricing")}
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 mx-auto w-full">
                    <div className="menuitems mb-2">
                      <Link href={condition}>
                        <div
                          className="rounded-lg p-2 menu-hover cursor-pointer"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <img
                                alt={"Section Item"}
                                loading="lazy"
                                width={25}
                                height={25}
                                className="object-cover"
                                src={
                                  "/static/images/icons/tradingCondition.webp"
                                }
                              />
                            </div>
                            <div>
                              <div className="text-white text-base mb-1 font-light">
                                {t("Trading Condition")}
                              </div>
                              <p className="menu-text text-sm">
                                {" "}
                                {t("Have a look at our spread and leverage")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li tabIndex={2} className="cursor-pointer">
              {t("Accounts")}
              <div
                className={classNames(
                  `mega-menu bg-background ${isActive ? "hide" : ""}`
                )}
              >
                <div className="content container !w-full !max-w-full">
                  <div className="text-[14px] font-[500] mb-4 hidden lg:block">
                    {t("Account")}{" "}
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 mx-auto w-full">
                    <div className="menuitems mb-2">
                      <a
                        target="_blank"
                        href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${lang}/user/login`}
                      >
                        <div
                          className="rounded-lg p-2 menu-hover cursor-pointer"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="icon"
                              >
                                <g
                                  id="vuesax_bold_status-up"
                                  data-name="vuesax/bold/status-up"
                                  transform="translate(-236 -252)"
                                >
                                  <g id="status-up">
                                    <path
                                      id="Vector"
                                      d="M0,0H24V24H0Z"
                                      transform="translate(260 276) rotate(180)"
                                      fill="none"
                                      opacity="0"
                                    />
                                    <g
                                      id="vuesax_bold_task-square"
                                      data-name="vuesax/bold/task-square"
                                      transform="translate(-255.394 -64.395)"
                                    >
                                      <g
                                        id="task-square"
                                        transform="translate(493.394 318.394)"
                                      >
                                        <path
                                          id="Vector-2"
                                          data-name="Vector"
                                          d="M14.19,0H5.81C2.17,0,0,2.17,0,5.81v8.38C0,17.83,2.17,20,5.81,20h8.38C17.83,20,20,17.83,20,14.19V5.81C20,2.17,17.83,0,14.19,0ZM7.97,12.9,5.72,15.15a.742.742,0,0,1-.53.22.725.725,0,0,1-.53-.22l-.75-.75a.737.737,0,0,1,0-1.06.754.754,0,0,1,1.06,0l.22.22,1.72-1.72A.75.75,0,1,1,7.97,12.9Zm0-7L5.72,8.15a.742.742,0,0,1-.53.22.725.725,0,0,1-.53-.22L3.91,7.4a.737.737,0,0,1,0-1.06.754.754,0,0,1,1.06,0l.22.22L6.91,4.84A.75.75,0,0,1,7.97,5.9Zm7.59,8.72H10.31a.75.75,0,0,1,0-1.5h5.25a.75.75,0,1,1,0,1.5Zm0-7H10.31a.75.75,0,0,1,0-1.5h5.25a.75.75,0,0,1,0,1.5Z"
                                          transform="translate(0 0)"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div>
                              <div className="text-white text-base mb-1 font-light">
                                {t("Manage Account")}
                              </div>
                              <p className="menu-text text-sm">
                                {" "}
                                {t(
                                  "View and update your personal details and account preferences"
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="menuitems mb-2">
                      <Link href="/accounts/account-type">
                        <div
                          className="rounded-lg p-2 menu-hover cursor-pointer"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <img
                                alt={"Section Item"}
                                loading="lazy"
                                width={25}
                                height={25}
                                className="object-cover min-w-[25px]"
                                src={"/static/images/icons/accountTypes.svg"}
                              />
                            </div>
                            <div>
                              <div className="text-white text-base mb-1 font-light">
                                {t("Account Types")}
                              </div>
                              <p className="menu-text text-sm">
                                {" "}
                                {t(
                                  "Explore the variety of accounts we offer and choose the one that suits you best."
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="text-[14px] font-[500] mb-4 hidden lg:block">
                    {t("Conditions")}{" "}
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 mx-auto w-full">
                    <div className="menuitems mb-2">
                      <Link href="/accounts/deposits-and-withdrawals">
                        <div
                          className="rounded-lg p-2 menu-hover cursor-pointer"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <img
                                alt={"Section Item"}
                                loading="lazy"
                                width={25}
                                height={25}
                                className="object-cover"
                                src={
                                  "/static/images/icons/depositAndWithdrawals.webp"
                                }
                              />
                            </div>
                            <div>
                              <div className="text-white text-base mb-1 font-light">
                                {t("Deposits and withdrawals")}
                              </div>
                              <p className="menu-text text-sm">
                                {" "}
                                {t(
                                  "Manage your funds securely and effortlessly."
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="menuitems mb-2">
                      <Link href="/accounts/client-protection">
                        <div
                          className="rounded-lg p-2 menu-hover cursor-pointer"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <img
                                alt={"Section Item"}
                                loading="lazy"
                                width={25}
                                height={25}
                                className="object-cover"
                                src={
                                  "/static/images/icons/clientProtection.webp"
                                }
                              />
                            </div>
                            <div>
                              <div className="text-white text-base mb-1 font-light">
                                {t("Client protection")}
                              </div>
                              <p className="menu-text text-sm">
                                {" "}
                                {t(
                                  "Comprehensive security for your peace of mind."
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="menuitems mb-2">
                      <Link href="/accounts/fees">
                        <div
                          className="rounded-lg p-2 menu-hover cursor-pointer"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <img
                                alt={"Section Item"}
                                loading="lazy"
                                width={25}
                                height={25}
                                className="object-cover"
                                src={"/static/images/icons/fees.webp"}
                              />
                            </div>
                            <div>
                              <div className="text-white text-base mb-1 font-light">
                                {t("Fees")}
                              </div>
                              <p className="menu-text text-sm">
                                {" "}
                                {t("Know your costs upfront and clearly.")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="flex sm:flex-row lg:flex-row items-center flex-wrap"></div>
                </div>
              </div>
            </li>
            <li tabIndex={3} className="cursor-pointer">
              {t("Platform")}
              <div
                className={classNames(
                  `mega-menu bg-background ${isActive ? "hide" : ""}`
                )}
              >
                <div className="content container !w-full !max-w-full">
                  <div className="text-[14px] font-[500] mb-4 hidden lg:block">
                    {" "}
                    {t("Trading Platforms")}
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 mx-auto w-full">
                    <div className="menuitems mb-2">
                      <Link href="/platform/c-trader">
                        <div
                          className="rounded-lg p-2 menu-hover cursor-pointer"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22.175"
                                height="22.175"
                                viewBox="0 0 22.175 22.175"
                                className="icon"
                              >
                                <g
                                  id="ctrader_round-01"
                                  transform="translate(-142.79 -1.83)"
                                >
                                  <path
                                    id="Path_58063"
                                    data-name="Path 58063"
                                    d="M153.877,1.83a11.088,11.088,0,1,0,11.088,11.088A11.088,11.088,0,0,0,153.877,1.83Zm-.028,1.248a9.814,9.814,0,0,1,9.106,6.153,7.018,7.018,0,0,1,.5,4.382A9.043,9.043,0,0,1,160,18.475c-4.205,2.662-7.058.777-7.058.777-3.971-2.587-.82-6.355-.82-6.355a6.906,6.906,0,0,1,7.207-2.182l.54-2.72c-6.252-1.588-10.028.768-10.859,1.37-.121.087-.242.172-.365.257a8.495,8.495,0,0,0-3.695,7.413,9.815,9.815,0,0,1,8.895-13.956Z"
                                    transform="translate(0 0)"
                                  />
                                </g>
                              </svg>
                            </div>
                            <div>
                              <div className="text-white text-base mb-1 font-light">
                                {t("CTrader")}
                              </div>
                              <p className="menu-text text-sm">
                                {" "}
                                {t("Seamless trading experiance")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="menuitems mb-2">
                      <a>
                        <div
                          className="rounded-lg p-2 menu-hover cursor-pointer"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <img
                                alt={"Section Item"}
                                loading="lazy"
                                width={25}
                                height={25}
                                className="object-cover"
                                src={"/static/images/icons/metaTrader.webp"}
                              />
                            </div>
                            <div>
                              <div className="text-white text-base mb-1 font-light">
                                <span className="text-[#909197]">
                                  Metatrader 5
                                </span>
                                <span className="ml-2 text-[12px] font-semibold text-black bg-turquoise px-[6px] rounded-full">
                                  Soon
                                </span>
                              </div>
                              <p className="menu-text text-sm">
                                {t("Advanced and intuitive trading platform")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li tabIndex={4} className="cursor-pointer">
              {t("Market News")}
              <div
                className={classNames(
                  `mega-menu bg-background ${isActive ? "hide" : ""}`
                )}
              >
                <div className="content container !w-full !max-w-full">
                  <div className="text-[14px] font-[500] mb-4 hidden lg:block">
                    {" "}
                    {t("Market Updates")}
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 mx-auto w-full">
                    <div className="menuitems mb-2 opacity-50 cursor-not-allowed pointer-events-none">
                      <Link href="/trade/education">
                        <div
                          className="rounded-lg p-2 menu-hover cursor-pointer"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <svg
                                width="24"
                                height="21"
                                viewBox="0 0 24 21"
                                fill="none"
                                className="icon"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_6_1959)">
                                  <path d="M24 4.61874C23.8769 4.93594 23.6312 5.08859 23.3156 5.1937C19.6794 6.40117 16.0456 7.61615 12.4131 8.83426C12.1338 8.9281 11.8756 8.92873 11.595 8.83426C7.945 7.61052 4.29375 6.39178 0.64 5.17868C0.3375 5.07858 0.11625 4.91654 0 4.61811V4.28966C0.114375 4.00312 0.31875 3.83232 0.61625 3.73409C4.28687 2.51661 7.95562 1.29287 11.6219 0.0628801C11.8981 -0.0297136 12.1488 -0.0165753 12.4181 0.0741415C16.05 1.291 19.6825 2.50535 23.3175 3.71282C23.6331 3.81793 23.88 3.97058 24 4.29028V4.61874Z" />
                                  <path d="M24 20.4807C23.8069 20.8793 23.4875 21.0106 23.0525 21C22.1706 20.9781 21.2881 20.9944 20.4063 20.9931C19.8563 20.9931 19.5863 20.7241 19.5856 20.1748C19.5844 18.9711 19.5806 17.768 19.5869 16.5643C19.5919 15.5814 20.0556 14.8857 20.945 14.4822C21.0888 14.4171 21.0913 14.3314 21.0913 14.2106C21.09 12.0378 21.0944 9.86561 21.0844 7.69278C21.0831 7.47256 21.1469 7.38184 21.3556 7.32429C21.7294 7.22106 22.0931 7.08404 22.4969 6.94891C22.4969 7.06778 22.4969 7.15724 22.4969 7.24733C22.4969 9.55279 22.4988 11.8582 22.4938 14.1637C22.4938 14.337 22.5256 14.4352 22.7044 14.5147C23.3669 14.81 23.77 15.333 23.9481 16.0337C23.9631 16.0932 23.9831 16.152 24.0006 16.2108V20.4813L24 20.4807Z" />
                                  <path d="M4.54123 7.96118C5.00935 8.11696 5.46623 8.26837 5.92248 8.4204C7.6681 9.00223 9.41685 9.57532 11.1575 10.1709C11.7306 10.3667 12.2775 10.3636 12.8494 10.1703C14.9756 9.45081 17.1069 8.7476 19.2369 8.03813C19.3081 8.01436 19.3812 7.99559 19.4844 7.96494C19.4844 8.06754 19.4844 8.14324 19.4844 8.21894C19.4844 9.66541 19.4794 11.1112 19.4881 12.5577C19.49 12.8937 19.3819 13.1508 19.135 13.3848C17.4475 14.9889 15.4544 15.9599 13.1425 16.1933C9.91185 16.5198 7.10685 15.5432 4.7706 13.2728C4.63435 13.1408 4.52998 12.9056 4.5281 12.7166C4.50873 11.1688 4.51685 9.62099 4.51748 8.07317C4.51748 8.04439 4.52935 8.01561 4.54185 7.96118H4.54123Z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_6_1959">
                                    <rect width="24" height="21" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div className="flex items-center">
                              <div className="text-white text-base mb-1 font-light">
                                {t("Blogs")}
                              </div>
                              <p className="!text-[8px] !mb-0 bg-[#01c86e] rounded-full px-1 py-0 leading-[10px] !text-[#000] font-semibold ml-2">
                                {" "}
                                {t("Soon")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="menuitems mb-2">
                      <Link href="/trade/economic-calendar">
                        <div
                          className="rounded-lg menu-hover p-3 cursor-pointer hover:bg-white"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="icon"
                              >
                                <g
                                  id="vuesax_bold_calendar"
                                  data-name="vuesax/bold/calendar"
                                  transform="translate(-492 -188)"
                                >
                                  <g id="calendar">
                                    <path
                                      id="Vector"
                                      d="M0,0H24V24H0Z"
                                      transform="translate(492 188)"
                                      fill="none"
                                      opacity="0"
                                    />
                                    <path
                                      id="Vector-2"
                                      data-name="Vector"
                                      d="M13.711,2.31V.75a.75.75,0,0,0-1.5,0v1.5h-6.5V.75a.75.75,0,0,0-1.5,0V2.31A4.248,4.248,0,0,0,0,6.56a.5.5,0,0,0,.5.53h16.92a.5.5,0,0,0,.5-.53A4.248,4.248,0,0,0,13.711,2.31Z"
                                      transform="translate(495.039 189.25)"
                                    />
                                    <path
                                      id="Vector-3"
                                      data-name="Vector"
                                      d="M17,0H1A1,1,0,0,0,0,1V7.16c0,3,1.5,5,5,5h8c3.5,0,5-2,5-5V1A1,1,0,0,0,17,0ZM6.21,8.37a1.576,1.576,0,0,1-.15.12.757.757,0,0,1-.18.09.636.636,0,0,1-.18.06,1.355,1.355,0,0,1-.2.02,1,1,0,0,1-.38-.08,1.032,1.032,0,0,1-.33-.21,1.014,1.014,0,0,1,0-1.42,1.032,1.032,0,0,1,.33-.21.956.956,0,0,1,.58-.06.636.636,0,0,1,.18.06.757.757,0,0,1,.18.09l.15.12a1.014,1.014,0,0,1,0,1.42Zm0-3.5a1.014,1.014,0,0,1-1.42,0,1.014,1.014,0,0,1,0-1.42,1,1,0,0,1,1.09-.21.933.933,0,0,1,.33.21,1.014,1.014,0,0,1,0,1.42Zm3.5,3.5A1,1,0,0,1,8.29,6.95,1,1,0,0,1,9.71,8.37Zm0-3.5-.15.12a.757.757,0,0,1-.18.09.636.636,0,0,1-.18.06,1.355,1.355,0,0,1-.2.02.99.99,0,0,1-1-1,1.052,1.052,0,0,1,.29-.71.933.933,0,0,1,.33-.21,1,1,0,0,1,1.09.21,1.014,1.014,0,0,1,0,1.42Zm3.5,3.5a1,1,0,0,1-1.42-1.42,1,1,0,0,1,1.42,1.42Zm0-3.5-.15.12a.757.757,0,0,1-.18.09.636.636,0,0,1-.18.06,1.5,1.5,0,0,1-.2.02.99.99,0,0,1-1-1,1.052,1.052,0,0,1,.29-.71,1.032,1.032,0,0,1,.33-.21.956.956,0,0,1,.58-.06.636.636,0,0,1,.18.06.757.757,0,0,1,.18.09l.15.12a1.014,1.014,0,0,1,0,1.42Z"
                                      transform="translate(495 197.84)"
                                    />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div>
                              <div className="text-white text-base mb-1 font-light">
                                {t("Economic Calendar")}
                              </div>
                              <p className="menu-text text-sm">
                                {" "}
                                {t(
                                  "Forecast potential volatility on your favorite assets"
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link href="/partner">{t("Partners")}</Link>
            </li>
            <li tabIndex={5} className="cursor-pointer">
              {t("About us")}
              <div
                className={classNames(
                  `mega-menu bg-background mx-auto ${isActive ? "hide" : ""}`
                )}
              >
                <div className="content container !w-full !max-w-full">
                  <div className="text-[14px] font-[500] mb-4 hidden lg:block">
                    {" "}
                    {t("About")}{" "}
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 mx-auto w-full">
                    <div className="menuitems mb-2">
                      <Link href="/about/who-we-are">
                        <div
                          className="rounded-lg p-2 menu-hover cursor-pointer"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Group_19694"
                                data-name="Group 19694"
                                width="16.504"
                                height="14.367"
                                viewBox="0 0 16.504 14.367"
                                className="icon"
                              >
                                <path
                                  id="Path_47145"
                                  data-name="Path 47145"
                                  d="M142.162,7.071l-4.354-1.616a1.754,1.754,0,0,1,.3-3.369l4.019-.727L149.456.03a1.753,1.753,0,0,1,1.962,2.317L148.9,9.362l-1.379,3.844a1.753,1.753,0,0,1-3.372-.261l-.877-4.562a1.752,1.752,0,0,0-1.112-1.313"
                                  transform="translate(-135.02 0)"
                                />
                                <path
                                  id="Path_47146"
                                  data-name="Path 47146"
                                  d="M61.1,66.621a3.129,3.129,0,1,1-3.129-3.129A3.129,3.129,0,0,1,61.1,66.621"
                                  transform="translate(-54.841 -55.383)"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white text-base mb-1 font-light">
                                {t("About Us")}
                              </div>
                              <p className="menu-text text-sm">
                                {" "}
                                {t(
                                  "Learn more about Stockbanx's wide range of services and products designed to meet your trading needs."
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="menuitems mb-2">
                      <Link href="/about/contact">
                        <div
                          className="rounded-lg p-2 cursor-pointer menu-hover hover:bg-white"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Layer_2"
                                data-name="Layer 2"
                                width="20.155"
                                height="18.324"
                                viewBox="0 0 20.155 18.324"
                                className="icon"
                              >
                                <g id="icons_Q2" data-name="icons Q2">
                                  <path
                                    id="Path_21023"
                                    data-name="Path 21023"
                                    d="M15.7,6H2.962A.916.916,0,0,0,2,6.915V19.741a.458.458,0,0,0,.458.458.6.6,0,0,0,.366-.137l4.214-3.985H15.7a.916.916,0,0,0,.962-.916V6.915A.916.916,0,0,0,15.7,6Z"
                                    transform="translate(-2 -5.997)"
                                  />
                                  <path
                                    id="Path_21024"
                                    data-name="Path 21024"
                                    d="M27.7,15h-2.7v7.787H14V24.16a.916.916,0,0,0,.962.916h8.657l4.214,3.985a.6.6,0,0,0,.366.137.458.458,0,0,0,.458-.458V15.915A.916.916,0,0,0,27.7,15Z"
                                    transform="translate(-8.503 -10.875)"
                                  />
                                </g>
                              </svg>
                            </div>
                            <div>
                              <div className="text-white text-base mb-1 font-light">
                                {t("Contact Us")}
                              </div>
                              <p className="menu-text text-sm">
                                {" "}
                                {t(
                                  "Get in touch with our support team, available 24/5 to assist you with any questions or issues."
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="menuitems mb-2">
                      <Link href="/about/legal-documents/privacy-policy">
                        <div
                          className="rounded-lg p-2 cursor-pointer menu-hover hover:bg-white"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Group_29164"
                                data-name="Group 29164"
                                width="17.49"
                                height="21.146"
                                viewBox="0 0 17.49 21.146"
                                className="icon"
                              >
                                <g
                                  id="Group_18772"
                                  data-name="Group 18772"
                                  transform="translate(0 7.5) rotate(-30)"
                                >
                                  <path
                                    id="Rectangle_12932"
                                    data-name="Rectangle 12932"
                                    d="M0,0H3A0,0,0,0,1,3,0V8.5A1.5,1.5,0,0,1,1.5,10h0A1.5,1.5,0,0,1,0,8.5V0A0,0,0,0,1,0,0Z"
                                    transform="translate(6 9)"
                                  />
                                  <rect
                                    id="Rectangle_12933"
                                    data-name="Rectangle 12933"
                                    width="7"
                                    height="7"
                                    transform="translate(4 1)"
                                  />
                                  <rect
                                    id="Rectangle_12934"
                                    data-name="Rectangle 12934"
                                    width="3"
                                    height="9"
                                    rx="1.5"
                                    transform="translate(12 0)"
                                  />
                                  <rect
                                    id="Rectangle_12935"
                                    data-name="Rectangle 12935"
                                    width="3"
                                    height="9"
                                    rx="1.5"
                                    transform="translate(0 0)"
                                  />
                                </g>
                                <rect
                                  id="Rectangle_12938"
                                  data-name="Rectangle 12938"
                                  width="3"
                                  height="10"
                                  rx="1.5"
                                  transform="translate(0.049 21.146) rotate(-90)"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white text-base mb-1 font-light">
                                {t("Legal Documents")}
                              </div>
                              <p className="menu-text text-sm">
                                {t(
                                  "Access and download our legal documents for detailed information on our policies and terms."
                                )}
                                {/* {t("Coming Soon")} */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="menuitems mb-2 opacity-50 cursor-not-allowed pointer-events-none">
                      <Link href="/trade/events">
                        <div
                          className="rounded-lg p-2 menu-hover cursor-pointer"
                          onClick={menuClick}
                        >
                          <div className="flex">
                            <div className="mr-2">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                className="icon"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM11.33 15H8.66C8.46109 15 8.27032 14.921 8.12967 14.7803C7.98902 14.6397 7.91 14.4489 7.91 14.25C7.91 14.0511 7.98902 13.8603 8.12967 13.7197C8.27032 13.579 8.46109 13.5 8.66 13.5H11.33C11.5289 13.5 11.7197 13.579 11.8603 13.7197C12.001 13.8603 12.08 14.0511 12.08 14.25C12.08 14.4489 12.001 14.6397 11.8603 14.7803C11.7197 14.921 11.5289 15 11.33 15ZM14 10.75H6C5.80109 10.75 5.61032 10.671 5.46967 10.5303C5.32902 10.3897 5.25 10.1989 5.25 10C5.25 9.80109 5.32902 9.61032 5.46967 9.46967C5.61032 9.32902 5.80109 9.25 6 9.25H14C14.1989 9.25 14.3897 9.32902 14.5303 9.46967C14.671 9.61032 14.75 9.80109 14.75 10C14.75 10.1989 14.671 10.3897 14.5303 10.5303C14.3897 10.671 14.1989 10.75 14 10.75ZM16 6.5H4C3.80109 6.5 3.61032 6.42098 3.46967 6.28033C3.32902 6.13968 3.25 5.94891 3.25 5.75C3.25 5.55109 3.32902 5.36032 3.46967 5.21967C3.61032 5.07902 3.80109 5 4 5H16C16.1989 5 16.3897 5.07902 16.5303 5.21967C16.671 5.36032 16.75 5.55109 16.75 5.75C16.75 5.94891 16.671 6.13968 16.5303 6.28033C16.3897 6.42098 16.1989 6.5 16 6.5Z" />
                              </svg>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="text-white text-base mb-1 font-light">
                                {t("Company Events")}
                              </div>
                              <p className="!text-[8px] !mb-0 bg-[#01c86e] rounded-full px-1 py-0 leading-[10px] !text-[#000] font-semibold">
                                {" "}
                                {t("Soon")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <div className="live-btn live-master">
          <>
            {path ? (
              <></>
            ) : (
              <>
                <Link href="/">
                  <a className=" inline-flex items-center justify-center bg-[#272835] text-center text-[#F6F7FF] px-6 py-2 rounded-full border border-[#52535D] hover:bg-[#3a3b4a] transition duration-300 mr-4">
                    Login
                  </a>
                </Link>
              </>
            )}
            <button className="rounded-full register-btn quick-btn live no-pad">
              {path ? (
                <Link href="/">
                  <a className="inline-flex items-center justify-center gap-4 bg-sbGreen hover:bg-primary/95 text-center text-white px-6 py-2 rounded-full border-[1.5px] border-[#52535D]  transition duration-300">
                    IB Portal
                  </a>
                </Link>
              ) : (
                <Link href="/">
                  <a className="inline-flex items-center justify-center gap-4 bg-sbGreen hover:bg-primary/95 text-center text-white px-6 py-2 rounded-full border-[1.5px] border-[#52535D]  transition duration-300">
                    Open Account
                  </a>
                </Link>
              )}
            </button>
          </>
        </div>
      </header>
    </>
  );
}

