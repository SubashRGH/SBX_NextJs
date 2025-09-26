import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

interface Props {
  title: string;
  containerStyle?: string;
  rightIcon?: any;
  setEvent?: any;
}

const RegisterButton = ({ title, containerStyle, setEvent }: Props) => {
  const { t, i18n } = useTranslation("common");
  const [lang, setLang] = useState<any>();
  const [eventName, setEventName] = useState<any>("");

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

  return (
    <>
      <button className={containerStyle} onClick={setEvent}>
        <a
          href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${lang}/user/register${eventName}`}
          target="_blank"
        >
          {title}
        </a>
      </button>
    </>
  );
};

export default RegisterButton;
