import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Register from "./form/Register";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import HomeBanner from "./HomeBanner";
type Props = {};

function Banner({}: Props) {
  const [showModal, setShowModal] = useState(false);
  const { t, i18n } = useTranslation("common");
  const [lang, setLang] = useState<any>();
  const [country, setCountry] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setCountry(data);
  }, []);

  useEffect(() => {
    setLang(i18n.language === "zh" ? "cn" : i18n.language || "en");
  }, [i18n.language]);

  useEffect(() => {
    const params = router.query;
    console.log(params);
    const referName = params.referredby;
    if (router.query) {
      setTimeout(() => {
        if (referName) {
          setShowModal(true);
        }
      }, 500);
    }
  }, [router.query]);

  return (
    <>
      <>
        {/* seo keyword hide  */}
        <h1 style={{ display: "none" }}> Stockbanx </h1>
        {/* seo keywod hide  */}
        <div className="stkbnx-home-bannerbg pt-10 lg:pt-20 bz-banner">
          <HomeBanner />
          <div className="hidden lg:block absolute left-0 top-0">
            <div className="h-full overflow-hidden flex justify-center lg:justify-end w-full relative">
              <video className="video scale-110" autoPlay loop muted>
                <source
                  src="/static/images/HeroAnimation.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute top-0 left-0 h-full w-full video-gradient" />
            </div>
          </div>
        </div>
      </>
      {/* book meeting modal here  */}
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed lg:inset-0 xl:inset-0 top-7 z-50 outline-none focus:outline-none overlay p-7 c trader-modal h-full">
            <div className="relative lg:p-5 xl:p-5 p-2 mx-aut bg-white rounded-xl md:w-[350px] xl:w-[350px] sm:w-[350px] w-full">
              <button
                className="bg-white rounded-full after:flex items-center justify-center border-0 text-black float-right absolute w-8 h-8 top-[17px] right-[10px] z-10"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <span
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  <XMarkIcon className="h-5 w-5 text-black" />
                </span>
              </button>
              {/* Modal data here */}
              <>
                <Register
                  title={t("Register Your Details")}
                  submitText={t("Meet the team")}
                />
              </>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Banner;

