import React, { Fragment, useEffect, useState } from "react";
import Banner from "./Banner";
import Why from "./Why";
import ProductTable from "./product/ProductTable";
import News from "./News";
import Download from "./DownloadApp";
import Psp from "./Psp";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const licenseSection = () => {
  const { t } = useTranslation("common");

  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();
  const [event, setEvent] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setCountry(data);
  }, [country]);

  useEffect(() => {
    const queryString = window.location.search;
    if (router.query) {
      setEvent(queryString);
    }
  }, [router.query]);

  useEffect(() => {
    if (event) sessionStorage.setItem("event", event);
  }, [event]);

  return (
    <div className="stkbnx-container  ">
      <div className="flex sm:flex-row lg:flex-row relative  flex-col justify-between items-center mt-20">
        {/* <div>

        </div>
        <div></div> */}
        <div className="absolute right-50px license-gradient"></div>
      </div>
    </div>
  );
};

export default licenseSection;

