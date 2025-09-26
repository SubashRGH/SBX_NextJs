import useOutsideClick from "@/hooks/useOutsideClick";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
interface Props {
  handleClose: Function;
}

const menuOptions = [
  {
    heading: "Individual",
    desc: "An individual brokerage account has the name of one account owner",
    path: "user/register",
    img: "/static/images/home/individual.svg",
  },
  {
    heading: "Partner",
    desc: "Stockbanx gives you a chance to grow together.",
    path: "user/register",
    img: "/static/images/home/partner-new.png",
    isIb: true,
  },
  {
    heading: "Corporate",
    desc: "Explore our comprehensive solution for corporates",
    path: "user/register/corporate",
    img: "/static/images/home/Institutional.png",
  },
];

const RegistrationMenu: React.FC<Props> = ({ handleClose }) => {
  const { t, i18n } = useTranslation("common");
  const [lang, setLang] = useState<any>();
  const [eventName, setEventName] = useState<any>("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    setTimeout(() => {
      if (sessionStorage.getItem("event") !== null) {
        setEventName(`${sessionStorage.getItem("event")}`);
      } else {
      }
    }, 500);
  }, []);

  useEffect(() => {
    setLang(i18n.language === "zh" ? "cn" : i18n.language || "en");
  }, [i18n.language]);

  const handleOutsideClick = () => {
    handleClose();
  };
  useOutsideClick(wrapperRef, handleOutsideClick);

  const handleRegistermenuClick = (menu: {
    heading: string;
    desc: string;
    path: string;
    img: string;
    isIb?: boolean;
  }) => {
    window.open(
      `${
        menu.isIb
          ? process.env.NEXT_PUBLIC_IB_URL
          : process.env.NEXT_PUBLIC_CLIENT_URL
      }/#/${lang}/${menu.path}${eventName}`,
      "_blank",
      "noopener,noreferrer"
    );
    console.log(menu.path);
  };
  return (
    <div className="registration-menu" ref={wrapperRef}>
      {menuOptions.map((menu, idx) => (
        <div
          className={`reg-menu-item ${
            idx === menuOptions.length - 1 ? "no-border" : ""
          }`}
          key={`Registration_option${idx}`}
        >
          <div>
            <Image
              src={menu.img}
              className="menu-item-img"
              alt=""
              width={"60px"}
              height={"63px"}
            />
          </div>
          <div className="menu-item-details">
            <h4 className="menu-item-heading">{t(menu.heading)}</h4>
            <p className="menu-item-desc">{t(menu.desc)}</p>
            <button
              className="menu-item-btn"
              onClick={() => handleRegistermenuClick(menu)}
            >
              {t("Live Account")}
            </button>
          </div>
        </div>
      ))}
      <button
        className="registration-menu-close-btn"
        onClick={() => handleClose()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-x-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
      </button>
    </div>
  );
};

export default RegistrationMenu;
