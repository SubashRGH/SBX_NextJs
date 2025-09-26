import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
const GetStarted = () => {
  const { t, i18n } = useTranslation("common");
  const [lang, setLang] = useState<any>();
  const [country, setCountry] = useState<any>();
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
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setCountry(data);
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
      <div className="py-10 mt-14">
        <div className="flex w-full justify-center">
          <p className="head-texts text-white text-center">
            {" "}
            {t("How to Get Started")}
          </p>
        </div>

        <div className="flex md:flex-row flex-col mt-8 w-full gap-4">
          <div className="lg:w-1/3 w-full">
            {/* <img src="/static/images/home/newgetstarted1.png" className="w-full h-full"></img> */}
            <div className="get-started-card-1 lg:min-h-[354px] px-8 py-8 flex flex-col gap-[2rem]">
              <div className="max-w-[60px] lg:max-w-[83px]">
                <img
                  src="/static/images/home/createacc.png"
                  className="h-full w-full"
                ></img>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <div>
                  <p className="font-bold text-xl text-white">
                    01. {t("Create Account")}
                  </p>
                </div>
                <div className="lg:min-h-[48px]">
                  <p className="font-normal text-[#A8ADBA]">
                    {t("Sign up and verify your accounts")}
                  </p>
                </div>
              </div>
              <div>
                <a
                  href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${lang}/user/register${eventName}`}
                  target="_blank"
                >
                  <button className="bg-primary text-white px-8 py-3 rounded-[100px]">
                    {" "}
                    {t("Open Account")}{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full">
            {/* <img src="/static/images/home/newgetstarted2.png" className="w-full h-full"></img> */}
            <div className="get-started-card-1 lg:min-h-[354px] px-8 py-8 flex flex-col gap-[2rem]">
              <div className="max-w-[60px] lg:max-w-[83px]">
                <img
                  src="/static/images/home/fundacc.png"
                  className="h-full w-full"
                ></img>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <div>
                  <p className="font-bold text-xl text-white">
                    02. {t("Fund Your Account")}
                  </p>
                </div>
                <div className="lg:min-h-[48px]">
                  <p className="font-normal text-[#A8ADBA]">
                    {" "}
                    {t(
                      "Fund your account, choose your  instrument and set your trade size"
                    )}
                  </p>
                </div>
              </div>
              <div>
                <a
                  href={`
                ${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${lang}/user/login`}
                  target="_blank"
                >
                  <button className="bg-primary text-white px-8 py-3 rounded-[100px]">
                    {" "}
                    {t("Deposit")}{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full">
            {/* <img src="/static/images/home/newgetstarted3.png" className="w-full h-full"></img> */}
            <div className="get-started-card-1 lg:min-h-[354px] px-8 py-8 flex flex-col gap-[2rem]">
              <div className="max-w-[60px] lg:max-w-[83px]">
                <img
                  src="/static/images/icons/trading-stock.png"
                  className="h-full w-full"
                ></img>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <div>
                  <p className="font-bold text-xl text-white">
                    03. {t("Start Trading")}
                  </p>
                </div>
                <div className="lg:min-h-[48px]">
                  <p className="font-normal text-[#A8ADBA]">
                    {" "}
                    {t(
                      "Choose direction (Buy or Sell) based on your assessment of the influencing factors"
                    )}{" "}
                  </p>
                </div>
              </div>
              <div>
                <a
                  href={`
                ${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${lang}/user/login`}
                  target="_blank"
                >
                  <button className="bg-primary text-white px-8 py-3 rounded-[100px]">
                    {" "}
                    {t("Trade")}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
