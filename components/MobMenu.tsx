import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import BlurImage from "../components/BlurImage";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import Language from "./Language";
import { changeLang } from "../utils/utils";
import RegisterButton from "./button/RegisterButton";
import { megaMenuLinks } from "@/constants";
import Head from "next/head";
type Props = {};

function MobMenu({ }: Props) {
  const { i18n } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation("common");
  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();
  const [path, setPath] = useState(Boolean);
  const [url, setUrl] = useState<any>();
  const [eventName, setEventName] = useState<any>("");
  const [activeIdx, setActiveIdx] = useState("");
  const [arfxURL, setArfxURL] = useState(false);
  const [active, setActive] = useState(true)
  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setCountry(data);
  }, []);

  useEffect(() => {
    1;
    setTimeout(() => {
      if (sessionStorage.getItem("event") !== null) {
        setEventName(`${sessionStorage.getItem("event")}`);
      } else {
      }
    }, 500);
    if (router.pathname === "/partner") {
      setPath(true);
      setUrl(process.env.NEXT_PUBLIC_IB_URL);
    } else {
      setPath(false);
      setUrl(process.env.NEXT_PUBLIC_CLIENT_URL);
    }
  }, [router.pathname]);

  // const userCountry = () => {
  //   fetch('https://portal.arfx.com/api/Miscellaneous/GetGEODetail', {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       const country = response?.data?.country_code
  //       if (arfxCountries?.includes(country?.toLowerCase())) {
  //         sessionStorage.setItem('arfxPortal', 'false')
  //       } else {
  //         sessionStorage.setItem('arfxPortal', 'true')
  //       }
  //       setTimeout(() => {
  //         if (sessionStorage.getItem("arfxPortal") === 'true') {
  //           setArfxURL(true);
  //         } else {
  //           setUrl(sessionStorage.getItem("arfxPortal"))
  //         }
  //         setActive(false)
  //       }, 1000)
  //     });
  // };


  useEffect(() => {
    // userCountry();
  }, []);


  return (
    <>
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-40 block transition-opacity bg-black opacity-50  ${isSidebarOpen ? "block" : "hidden"
          }`}
      />

      <div className="flex gap-4">
        <button
          className="btn-menu"
          onClick={(): void => setIsSidebarOpen(true)}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
          >
            <path
              d="M1 1H19"
              stroke="#02b143"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M1 6H19"
              stroke="#02b143"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M1 11H19"
              stroke="#02b143"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-[320px] overflow-y-auto transition duration-300 ease-out transform bg-black border-r border-solid border-[#0f2642] z-[999999]   ${isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
          }`}
      >
        {/* <div className="flex items-center justify-end mt-5 text-center w-100">
          <div className="lang-menu">
            <ul>
              <li style={{ width: "45px" }}>
                <Language
                  iconClass="fill-[#838383]"
                  flagImg="/static/images/icons/flag-white.svg"
                />
              </li>
            </ul>
          </div>
        </div> */}
        <div className="flex items-center justify-center mt-2 text-center py-5 w-100">
          <button className="rounded-full py-3 w-4/5 max-w-[256px]  register-btn quick-btn live no-pad"
          >
            {t("Register")}
          </button>
        </div>
        {/* <div className="flex items-center justify-center text-center w-100 mb-4">
          <button className="rounded-sm bg-grey !w-4/5 !max-w-[80%] min-h-[48px]">
            <a
              className="!text-white"
              target="_blank"
              href={arfxURL ? process.env.NEXT_PUBLIC_CLIENTARFX_URL : process.env.NEXT_PUBLIC_CLIENT_URL}
            >
              {t("Sign in")}
            </a>
          </button>
        </div> */}
        <div className="flex items-center justify-center text-center w-100 mb-4">
          <button className="rounded-full bg-[#272835] text-center text-[#F6F7FF] !w-4/5 !max-w-[80%] min-h-[48px]"
          >
            {t("Login")}
          </button>
        </div>

        {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
        <>
          <ul className="accordion-menu">
            <li className="dropdownlink">
              <Link href="/">{t("Home")}</Link>
            </li>
            {megaMenuLinks?.map((menu, idx) => (
              <li
                key={menu?.title}
                onClick={() =>
                  setActiveIdx((prev) =>
                    prev === String(idx) ? "" : String(idx)
                  )
                }
              >
                <div className="dropdownlink !flex items-center justify-between">
                  {t(menu?.title)}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>{" "}
                </div>
                {activeIdx === String(idx) && (
                  <ul className="submenuItems ">
                    {menu?.sections?.map((section) => (
                      <li
                        className="flex flex-col !items-start justify-start !p-0 !py-4"
                        key={section?.subTitle}
                      >
                        <ul className="w-full">
                          {section?.menuItems?.map((item) =>
                            item?.soon ? (
                              <li
                                onClick={() => setIsSidebarOpen(false)}
                                key={item?.title}
                                className="flex items-center gap-2"
                              >
                                <span className="opacity-40">
                                  {t(item?.title)}
                                </span>
                                <span className="text-[10px] bg-yellow text-dark rounded-full py-[2px] px-2">
                                  Soon
                                </span>
                              </li>
                            ) : (
                              <Link href={item?.link} key={item?.title}>
                                <li onClick={() => setIsSidebarOpen(false)}>
                                  {t(item?.title)}
                                </li>
                              </Link>
                            )
                          )}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li
              className="dropdownlink"
              onClick={() => setIsSidebarOpen(false)}
            >
              <Link href="/partner">
                <a className="flex items-center gap-2">
                  <span>{t("Partners")}</span>
                </a>
              </Link>
            </li>
          </ul>
        </>
        {/* <Navigation
          activeItemId={router.pathname}
          onSelect={({ itemId }) => {
            router.push(itemId);
          }}

          items={[
            {
              title: t("About"),
              itemId: '/home',
              elemBefore: () => <XMarkIcon className="w-4 h-4" />,
              subNav: [
                {
                  title: t("Who We Are?"),
                  itemId: "/about/who-we-are",

                  // Optional
                },
                {
                  title: t("Contact Details"),
                  itemId: "/about/contact",
                },
                {
                  title: t("Legal Documents"),
                  itemId: "/about/legal-documents",
                }
              ]
            },
            {
              title: "Another Tab",
              itemId: '/about',
              subNav: [
                {
                  title: "Teams",
                  itemId: "/another/teams"
                }
              ]
            }
          ]}
        /> */}
      </div>
    </>
  );
}

export default MobMenu;

