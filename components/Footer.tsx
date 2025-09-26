import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BlurImage from "./BlurImage";
import $ from "jquery";
import { changeLang, getCurrentYear } from "../utils/utils";
import {
  ChevronDownIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Language from "./Language";
import License from "./License";
import { Trans, useTranslation } from "next-i18next";
import Award from "./Award";
import RegisterButton from "./button/RegisterButton";

type Props = {};
function Footer() {
  const { t, i18n } = useTranslation("common");
  const [showModal, setShowModal] = useState(false);
  const [countryStr, setCountryStr] = useState<any>();
  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();
  const [eventName, setEventName] = useState<any>("");
  const types = (type: string) => {
    let str = "";
    switch (type) {
      case "CN":
      case "HK":
      case "TW":
        str = "BELIZE";
        break;
      case "GB":
        str = "FCA";
        break;
      default:
        str = "SA";
    }
    return str;
  };
  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setTimeout(() => {
      if (sessionStorage.getItem("event") !== null) {
        setEventName(`?event=${sessionStorage.getItem("event")}`);
      } else {
      }
    }, 500);
    if (data) {
      setCountry(data);
    } else {
      const countryDefault = sessionStorage.getItem("countryDefault");
      setCountry(countryDefault);
    }
  }, []);

  useEffect(() => {
    setLang(i18n.language === "zh" ? "cn" : i18n.language || "en");
  }, [i18n.language]);

  useEffect(() => {
    if (country) {
      setCountryStr(types(country));
    }
  }, [country]);

  return (
    <>
      <div className="flex mt-[150px] flex-col px-4 py-12 mx-auto my-0 max-w-screen-xl md:px-5 md:py-8 sm:px-4 sm:py-6">
        <div className="flex flex-col w-full">
          <h1 className="text-[35px] sm:text-[40px] font-[600]">
            Newsletter Subscription
          </h1>
          <div className="flex flex-wrap md:flex-nowrap gap-6 items-start mt-6 w-full">
            <div className="flex flex-col grow h-full shrink w-full md:w-1/2">
              <div className="text-[15px] font-[400]">
                Stay ahead with real-time Forex news and the latest trading
                updates. <br />
                Get insights on currency and commodity market trends to help you
                make smarter trading decisions.
              </div>
              <div className="flex mt-4 items-center gap-2 w-full text-sm font-semibold ">
                <Image
                  src={"/static/assets/images/newsletter-subscribers.webp"}
                  width={54}
                  height={24}
                />
                <div className="text-[14px] font-[600] text-[#B0B4C1]">
                  5k more subscribed
                </div>
              </div>
            </div>
            <div className="flex flex-col grow shrink text-base w-full md:w-1/2">
              <form className="flex gap-2 items-center w-full flex-col">
                <div className="flex flex-wrap gap-2 justify-center items-center w-full">
                  <input
                    id="consent"
                    className="opacity-0 shrink-0 self-stretch my-auto w-1 h-1 accent-green-600"
                    required
                    type="checkbox"
                    name="consent"
                  />
                  <label
                    htmlFor="consent"
                    className="flex-1 flex flex-row gap-4 shrink self-stretch text-[16px] font-[400] text-[#B0B4C1]"
                  >
                    <span className="checkbox-container shrink-0 self-stretch my-auto w-4 h-4 flex items-center justify-center bg-[transparent] rounded-[3px] border border-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="checkmark hidden w-4 h-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-4l-3-3 1.4-1.4L9 12.2l4.2-4.2 1.4 1.4-5.6 5.6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    I consent to my data being used as per the Privacy Policy
                    &amp; Terms.
                  </label>
                </div>
                <div className="flex flex-col flex-1 shrink self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
                  <div className="flex gap-3 items-center pl-4 w-full rounded-full border border-solid border-zinc-500 max-md:max-w-full">
                    <label htmlFor="emailInput" className="sr-only">
                      Enter your email
                    </label>
                    <input
                      id="emailInput"
                      className="flex-1 shrink self-stretch my-auto max-md:max-w-full bg-transparent border-none outline-none"
                      placeholder="Enter your email"
                      required
                      type="email"
                      value=""
                    />
                    <button
                      type="submit"
                      className="gap-2.5 self-stretch px-6 py-4 my-auto font-[600] text-center text-[16px] whitespace-nowrap bg-[#00B144]  min-h-[56px] rounded-[999px] max-md:px-5"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
              <section
                className="Toastify"
                aria-live="polite"
                aria-atomic="false"
                aria-relevant="additions text"
                aria-label="Notifications Alt+T"
              ></section>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-primary ">
        <div className="stkbnx-container p-8">
          <div className="md:block sm:mb-12 lg:mb-12 xl:mb-12 mb-0 border-t-2 border-t-solid border-t-[#3A3A47]">
            <div className="container mx-auto">
              <div className="footer-quick-menu flex justify-end items-center">
                <ul className="flex">
                  <li className="hover:text-primary !py-8 !px-0 text-sm font-light">
                    AOFA
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:flex  hidden  sm:flex-row lg:flex-row space-x-4 flex-col justify-between items-start">
            <div className="md:basis-1/4 xl:basis-1/3 lg:basis-1/3 flex-item">
              <BlurImage
                src="/static/images/sb-logo.png"
                alt="footer-logo"
                width={170}
                height={25}
              />
              <>
                <p className="footer-color text-xs my-3 leading-5"></p>
                <p className="footer-color text-xs  mb-3 leading-5">
                  <span className="text-primary">{t("Get in touch")} </span>
                  <br />
                  <a href="mailto:contact@stockbanx.com">
                    contact@stockbanx.com
                  </a>
                </p>
              </>

              <div className="flex items-center">
                <a href="https://www.youtube.com/@StockBanx" target="_blank">
                  <span className="mr-5">
                    <BlurImage
                      src="/static/images/icons/youtube.svg"
                      alt="youTube"
                      width={17}
                      height={17}
                    />
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/share/1DQhY6e9Cc/?mibextid=LQQJ4d"
                  target="_blank"
                >
                  <span className="mr-5">
                    <BlurImage
                      src="/static/images/icons/facebook.svg"
                      alt="facebook"
                      width={17}
                      height={17}
                    />
                  </span>
                </a>
                <a
                  href="https://www.tiktok.com/@stockbanx?_t=8s8CPpHhJXq&_r=1"
                  target="_blank"
                >
                  <span className="mr-5">
                    <BlurImage
                      src="/static/images/icons/tiktok.svg"
                      alt="TikTok"
                      width={17}
                      height={17}
                    />
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/stockbanxtrading?igsh=bDliaHV4OXY0d3R1&utm_-source=qr"
                  target="_blank"
                >
                  <span>
                    <BlurImage
                      src="/static/images/icons/instagram.svg"
                      alt="instagram"
                      width={17}
                      height={17}
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="md:basis-4/5 lg:basis-4/5 xl:basis-4/5 w-full lg:mt-0 xl:mt-0 md:mt-0 mt-6 nav-menu">
              <div className="nav-footer sm:flex md:flex xl:flex lg:flex justify-between">
                <div className="md:basis-1/5 nav-footer-item nav">
                  <h6 className="text-white text-base sm:text-sm lg:text-xl xl:text-xl sm:p-0 lg:p-0 xl:p-0 sm:bg-inherit	lg:bg-inherit xl:bg-inherit mb-5 p-1">
                    {t("Products")}
                  </h6>
                  <div className="footer-ul">
                    <ul>
                      <li className="hover:text-primary">
                        <Link href="/products/forex">
                          <a>{t("Forex")}</a>
                        </Link>
                      </li>
                      <li className="hover:text-primary">
                        <Link href="/products/commodities">
                          <a>{t("Commodities")}</a>
                        </Link>
                      </li>
                      <li className="hover:text-primary">
                        <Link href="/products/indices">
                          <a>{t("Indices")}</a>
                        </Link>
                      </li>
                      <li className="hover:text-primary">
                        <Link href="/products/stocks">
                          <a>{t("Stocks")}</a>
                        </Link>
                      </li>
                      <li className="hover:text-primary">
                        <Link href="/products/crypto">
                          <a>{t("Crypto CFD")}</a>
                        </Link>
                      </li>
                      <li className="hover:text-primary">
                        <Link href="/products/conditions">
                          <a>{t("Trading Conditions")}</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:basis-1/5 nav-footer-item nav">
                  <h6 className="text-white text-base sm:text-sm lg:text-xl xl:text-xl sm:p-0 lg:p-0 xl:p-0 sm:bg-inherit	lg:bg-inherit xl:bg-inherit mb-5 p-1">
                    {t("Accounts")}
                  </h6>
                  <div className="footer-ul">
                    <ul>
                      <li className="hover:text-primary">
                        <a
                          target="_blank"
                          href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${lang}/user/login`}
                        >
                          {t("Manage Account")}
                        </a>
                      </li>
                      <li className="hover:text-primary">
                        <Link href="/accounts/account-type">
                          <a>{t("Account Types")}</a>
                        </Link>
                      </li>
                      {/* <li className="hover:text-primary">
                        <Link href="/accounts/mam-accounts">
                          <a>{t("Mam Accounts")}</a>
                        </Link>
                      </li> */}
                      {/* <li className="hover:text-primary">
                        <Link href="/accounts/corporate">
                          <a>{t("Corporate Accounts")}</a>
                        </Link>
                      </li> */}
                      <li className="hover:text-primary">
                        <Link href="/accounts/deposits-and-withdrawals">
                          <a>{t("Deposits and withdrawals")}</a>
                        </Link>
                      </li>
                      <li className="hover:text-primary">
                        <Link href="/accounts/client-protection">
                          <a>{t("Client protection")}</a>
                        </Link>
                      </li>
                      <li className="hover:text-primary">
                        <Link href="/accounts/fees">
                          <a>{t("Fees")}</a>
                        </Link>
                      </li>
                      {/* <li className="cursor-not-allowed opacity-40">
                        <a>{t("Referral Program")}</a>
                      </li>
                      <li className="cursor-not-allowed opacity-40">
                        
                        {t("Rewards Program")}
                      </li> */}
                      {/* <li className="hover:text-primary">
                        <Link href="/accounts/promotions">
                          <a>{t("Promotions")}</a>
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="md:basis-1/5 nav-footer-item nav">
                  <h6 className="text-white text-base sm:text-sm lg:text-xl xl:text-xl sm:p-0 lg:p-0 xl:p-0 sm:bg-inherit	lg:bg-inherit xl:bg-inherit mb-5 p-1">
                    {t("Platform")}
                  </h6>
                  <div className="footer-ul">
                    <ul>
                      {/* <li className="hover:text-primary">
                        
                        <Link href="/platform/metatrader4">
                          <a>{t("MetaTrader4")}</a>
                        </Link>
                      </li>
                      {countryStr == "SA" ? (
                        <li className="hover:text-primary">
                          
                          <Link href="/platform/metatrader5">
                            <a>{t("MetaTrader5")}</a>
                          </Link>
                        </li>
                      ) : null} */}

                      <li className="hover:text-primary">
                        <Link href="/platform/c-trader">
                          <a>{t("cTrader")}</a>
                        </Link>
                      </li>
                      <li className="hover:text-primary opacity-50 pointer-events-none cursor-not-allowed">
                        <Link href="">
                          <a>
                            {t("Metatrader 5")}
                            <span className="!text-[8px] !mb-0 bg-[#01c86e] rounded-full px-1 py-0 leading-[10px] !text-[#000] font-semibold">
                              Soon
                            </span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:basis-1/5 nav-footer-item nav">
                  <h6 className="text-white text-base sm:text-sm lg:text-xl xl:text-xl sm:p-0 lg:p-0 xl:p-0 sm:bg-inherit	lg:bg-inherit xl:bg-inherit mb-5 p-1">
                    {t("Market news")}
                  </h6>
                  <div className="footer-ul">
                    <ul>
                      {/* <li className="hover:text-primary">
                        
                        <Link href="/trade/market-overview">
                          <a>{t("Market OverView")}</a>
                        </Link>
                      </li> */}
                      {/* <li className="hover:text-primary">
                        
                        <Link href="/trade/knowledge-articles">
                          <a>{t("Knowledge Articles")}</a>
                        </Link>
                      </li> */}
                      <li className="hover:text-primary opacity-50 cursor-not-allowed pointer-events-none">
                        <Link href="/trade/education">
                          <a>
                            {t("Blogs")}
                            <span className="!text-[8px] !mb-0 bg-[#01c86e] rounded-full px-1 py-0 leading-[10px] !text-[#000] font-semibold">
                              Soon
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li className="hover:text-primary">
                        <Link href="/trade/economic-calendar">
                          <a>{t("Economic Calendar")}</a>
                        </Link>
                      </li>
                      {/* <li className="hover:text-primary">
                        <Link href="/trade/webinars">
                          <a>{t("Webinars")}</a>
                        </Link>
                      </li> */}
                      {/* <li className="hover:text-primary">
                        <Link href="/trade/events">
                          <a>{t("Events")}</a>
                        </Link>
                      </li> */}
                      {/* <li className="hover:text-primary">
                        <Link href="/trade/glossary">
                          <a>{t("Glossary")}</a>
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="md:basis-1/5 nav-footer-item nav">
                  <h6 className="text-white text-base sm:text-sm lg:text-xl xl:text-xl sm:p-0 lg:p-0 xl:p-0 sm:bg-inherit	lg:bg-inherit xl:bg-inherit mb-5 p-1">
                    {t("About")}
                  </h6>
                  <div className="footer-ul" id="nav">
                    <ul>
                      <li className="hover:text-primary">
                        <Link href="/about/who-we-are">
                          <a>{t("Who We Are?")}</a>
                        </Link>
                      </li>
                      <li className="hover:text-primary">
                        <Link href="/about/contact">
                          <a>{t("Contact Details")}</a>
                        </Link>
                      </li>
                      <li className="hover:text-primary">
                        <Link href="/about/legal-documents/privacy-policy">
                          <a>{t("Legal Documents")}</a>
                        </Link>
                      </li>
                      <li className="hover:text-primary opacity-50 pointer-events-none cursor-not-allowed">
                        <Link href="/about/legal-documents">
                          <a>
                            {t("Company Events")}
                            <span className="!text-[8px] !mb-0 bg-[#01c86e] rounded-full px-1 py-0 leading-[10px] !text-[#000] font-semibold">
                              Soon
                            </span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* mob footer */}
          <div className="w-full block md:hidden">
            <div className="w-full flex-col flex justify-center items-center">
              {/* <div className="flex w-full items-center justify-center py-4">
                <img src="/static/images/sb-logo.png" className="w-1/2"></img>
              </div> */}
              <div className="w-full mt-20 text-white text-sm flex justify-between stkbnx-container registration-menu">
                {/* <div>
                  <Link href="/partner">
                    <a>Partners</a>
                  </Link>
                </div> */}
                <div>
                  <Link href="/faq">
                    <a>FAQs</a>
                  </Link>
                </div>
                {/* <div className="-mt-[0.85rem]">
                  <Language
                    iconClass="fill-white"
                    flagImg="/static/images/icons/footerlanglogo.png"
                  />
                </div> */}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
              {/* Logo and Contact Section */}
              <div className="flex flex-col col-span-1 lg:col-span-2 order-last md:order-first">
                <a href="/">
                  <img
                    alt="Logo"
                    loading="lazy"
                    width="182"
                    height="26"
                    decoding="async"
                    src="/static/images/sb-logo.png"
                    className="mb-[26px]"
                    style={{ color: "transparent" }}
                  />
                </a>
                <p className="text-[12px] font-serif:[Lato] text-[#00B144]">
                  Get in touch
                </p>
                <p className="text-[12px] font-serif:[Lato] mb-[22px]">
                  contact@stockbanx.com
                </p>
                <div className="flex gap-[12px]">
                  <a href="https://www.youtube.com/@StockBanx" target="_blank">
                    <span className="mr-5">
                      <BlurImage
                        src="/static/images/icons/youTube.svg"
                        alt="linkedin"
                        width={17}
                        height={17}
                      />
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1DQhY6e9Cc/?mibextid=LQQJ4d"
                    target="_blank"
                  >
                    <span className="mr-5">
                      <BlurImage
                        src="/static/images/icons/facebook.svg"
                        alt="facebook"
                        width={17}
                        height={17}
                      />
                    </span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@stockbanx?_t=8s8CPpHhJXq&_r=1"
                    target="_blank"
                  >
                    <span className="mr-5">
                      <BlurImage
                        src="/static/images/icons/tiktok.svg"
                        alt="twitter"
                        width={17}
                        height={17}
                      />
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/stockbanxtrading?igsh=bDliaHV4OXY0d3R1&utm_-source=qr"
                    target="_blank"
                  >
                    <span>
                      <BlurImage
                        src="/static/images/icons/instagram.svg"
                        alt="instagram"
                        width={17}
                        height={17}
                      />
                    </span>
                  </a>
                </div>
              </div>

              {/* Products Section */}
              <div>
                <h3 className="text-footer-title pb-[20px]">Products</h3>
                <ul>
                  {[
                    "Forex",
                    "Commodities",
                    "Indices",
                    "Stocks",
                    "Crypto CFD",
                  ].map((product) => (
                    <li key={product} className="text-footer-link pb-[10px]">
                      <a
                        href={`/products#${product
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {product}
                      </a>
                    </li>
                  ))}
                  <li className="text-footer-link pb-[10px]">
                    <a href="/trading-conditions">Trading Conditions</a>
                  </li>
                </ul>
              </div>

              {/* Accounts Section */}
              <div>
                <h3 className="text-footer-title pb-[20px]">Accounts</h3>
                <ul>
                  <li className="text-footer-link pb-[10px]">
                    <a href="#">Manage Account</a>
                  </li>
                  <li className="text-footer-link pb-[10px]">
                    <a href="/account-type">Account Types</a>
                  </li>
                  <li className="text-footer-link pb-[10px]">
                    <a href="/deposit-and-withdraws">
                      Deposits and withdrawals
                    </a>
                  </li>
                  <li className="text-footer-link pb-[10px]">
                    <a href="/client-protection">Client Protection</a>
                  </li>
                  <li className="text-footer-link pb-[10px]">
                    <a href="/fees">Fees</a>
                  </li>
                </ul>
              </div>

              {/* Platform Section */}
              <div>
                <h3 className="text-footer-title pb-[20px]">Platform</h3>
                <ul>
                  <li className="text-footer-link pb-[10px]">
                    <a href="/platform#ctrader">cTrader</a>
                  </li>
                  <li className="text-footer-link pb-[10px] flex items-center">
                    <a className="text-[#909197]" href="#">
                      Metatrader 5
                    </a>
                    <span className="ml-2 font-serif:[Lato] text-[12px] font-semibold text-black bg-[#01C86E] px-[6px] rounded-full">
                      Soon
                    </span>
                  </li>
                </ul>
              </div>

              {/* Market News Section */}
              <div>
                <h3 className="text-footer-title pb-[20px]">Market News</h3>
                <ul>
                  <li className="text-footer-link pb-[10px] flex items-center">
                    <a className="text-[#909197]" href="#">
                      Blogs
                    </a>
                    <span className="ml-2 font-serif:[Lato] text-[12px] font-semibold text-black bg-[#01C86E] px-[6px] rounded-full">
                      Soon
                    </span>
                  </li>
                  <li className="text-footer-link pb-[10px]">
                    <a href="/economic-calendar">Economic calendar</a>
                  </li>
                </ul>
              </div>

              {/* About Section */}
              <div>
                <h3 className="text-footer-title pb-[20px]">About</h3>
                <ul>
                  <li className="text-footer-link pb-[10px]">
                    <a href="/about-us">Who We Are</a>
                  </li>
                  <li className="text-footer-link pb-[10px]">
                    <a href="/contact-us">Contact Details</a>
                  </li>
                  <li className="text-footer-link pb-[10px]">
                    <a href="/legal-documents">Legal Documents</a>
                  </li>
                  <li className="text-footer-link pb-[10px] flex items-center">
                    <a className="text-[#909197]" href="#">
                      Company Events
                    </a>
                    <span className="ml-2 font-serif:[Lato] text-[12px] font-semibold text-black bg-[#01C86E] px-[6px] rounded-full">
                      Soon
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* disclaimer */}
          <div className="disc mt-8">
            <p className="text-xs mb-4 risk-color !font-bold">
              {t("Disclaimer")}:
            </p>
            <p className="text-xs mb-4 risk-color"> {t("DisclaimerFirst")} </p>
            {/* <p className='text-xs mb-4 risk-color'>  {t("DisclaimerSecond")}  </p> */}
            {/* <p className="text-xs mb-4 risk-color"> {t("DisclaimerThird")} </p> */}
            <p
              className="text-xs mb-4 risk-color"
              dangerouslySetInnerHTML={{
                __html: t("DisclaimerSecond", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
            <p
              className="text-xs mb-4 risk-color"
              dangerouslySetInnerHTML={{
                __html: t("DisclaimerThird", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
            <p
              className="text-xs mb-4 risk-color"
              dangerouslySetInnerHTML={{
                __html: t("DisclaimerFour", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
            <p
              className="text-xs mb-4 risk-color"
              dangerouslySetInnerHTML={{
                __html: t("DisclaimerFive", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
            <p
              className="text-xs mb-4 risk-color"
              dangerouslySetInnerHTML={{
                __html: t("DisclaimerSix", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
            {/* <p className="text-xs mb-4 risk-color">
              
              Stockbanx Operations LTD ( the ''payment agent'' ) of Stockbanx Markets PTY
              registered under HE 459315 in Cyprus .
            </p> */}
            {/* <p className='text-xs mb-4 risk-color'>  {t("DisclaimerFive")} </p> */}
            {/* <p
              className="text-xs mb-4 risk-color"
              dangerouslySetInnerHTML={{
                __html: t("DisclaimerSix", {
                  interpolation: { escapeValue: false },
                }),
              }}
            /> */}
            {/* <p className='text-xs mb-4 risk-color'>  {t("DisclaimerSeven")} </p> */}
            {/* <p
              className="text-xs mb-4 risk-color footer-risk"
              dangerouslySetInnerHTML={{
                __html: t("DisclaimerEight", {
                  interpolation: { escapeValue: false },
                }),
              }}
            /> */}
            {/* <p
              className="text-xs mb-4 risk-color"
              dangerouslySetInnerHTML={{
                __html: t(
                  "Restricted Countries: Stockbanx Markets PTY LTD (“Stockbanx SA”) does not provide services for residents of certain countries including but not limited to the United States, United Kingdom, Canada, Israel, Iran, Cyprus, and North Korea or any country where such distribution or use would be contrary to local law or regulation.",
                  {
                    interpolation: { escapeValue: false },
                  }
                ),
              }}
            /> */}
            {/* <p
              className="text-xs mb-4 risk-color"
              dangerouslySetInnerHTML={{
                __html: t(
                  "You must be 18 years old, or of legal age as determined in your country. Upon registering an account with Stockbanx Markets PTY LTD (“Stockbanx SA”), you acknowledge that you are registering at your own free will, without solicitation on behalf of Stockbanx Markets PTY LTD (“Stockbanx SA”).",
                  {
                    interpolation: { escapeValue: false },
                  }
                ),
              }}
            /> */}
            {/* <p
              className="text-xs mb-4 risk-color"
              dangerouslySetInnerHTML={{
                __html: t(
                  "Stockbanx Markets PTY LTD (“Stockbanx SA”) does not direct its website and services to any individual in any country in which the use of its website and services are prohibited by local laws or regulations. When accessing this website from a country in which its use may or may not be prohibited, it is the user's responsibility to ensure that any use of the website or services adheres to local laws or regulations. Stockbanx Markets PTY LTD (“Stockbanx SA”) does not affirm that the information on its website is suitable for all jurisdictions.",
                  {
                    interpolation: { escapeValue: false },
                  }
                ),
              }}
            /> */}
            {/* <p
              className="text-xs mb-4 risk-color"
              dangerouslySetInnerHTML={{
                __html: t(
                  "* It came to our attention that fraudulent websites are using our Company's Logo and/or Name. We advise our clients that the official domains of Stockbanx Markets can be found ONLY on this website.",
                  {
                    interpolation: { escapeValue: false },
                  }
                ),
              }}
            /> */}
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-xs risk-color mt-4">
              Copyright © {getCurrentYear()} Stockbanx
            </p>
            {/* <p className="text-xs risk-color mt-4">
              {t("Stockbanx is Powered by CPT")}
            </p> */}
          </div>
        </div>
      </div>
      {/* fca modal here  */}
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto lg:fixed xl:fixed lg:inset-0 xl:inset-0 top-7 absolute z-50 outline-none focus:outline-none overlay p-7">
            <div className="relative modal-width lg:p-5 xl:p-5 p-5 mx-aut bg-white rounded-lg">
              <button
                className="bg-white rounded-full flex items-center justify-center border-0 text-black float-right absolute w-8 h-8 top-[4px] right-2"
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
export default Footer;
