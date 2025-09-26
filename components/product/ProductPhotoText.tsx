import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { changeLang } from "../../utils/utils";
import RegisterButton from "../button/RegisterButton";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import * as animationData from "../../public/static/images/animation/Laptop Animation.json";

interface Props {
  title: string;
  forexTitle: string;
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function ProductPhotoText({ title, forexTitle }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const { t, i18n } = useTranslation("common");
  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();
  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setCountry(data);
  }, []);

  useEffect(() => {
    setLang(i18n.language === "zh" ? "cn" : i18n.language || "en");
  }, [i18n.language]);

  return (
    <div className="relative max-w-6xl mx-auto md:flex py-10 md:py-14 space-y-4 md:space-y-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 1 },
        }}
        transition={{ duration: 0.4 }}
        className="md:w-[55%] flex flex-col md:flex-row  items-center justify-center"
      >
        <div className="w-[282px] h-[300px] md:w-[497px] md:h-[526px] relative product-video">
          {/* <img src="/static/images/partner/partnercom.png"></img> */}
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />

          {/* <Image src="/static/images/stock-market.png" layout="fill" /> */}
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 1 },
        }}
        transition={{ duration: 0.6 }}
        className="md:flex-1 space-y-3 md:space-y-5 px-4 md:px-0"
      >
        <div className="intro-font text-2xl text-center md:text-left md:text-2xl md:w-11/12 xl:w-3/4 lg:w-3/4 text-white">
          {title}
        </div>
        <ul className="product-photo">
          {[
            {
              text: (
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("Log in your account or create account", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              ),
              btn: false,
            },
            {
              text: <div dangerouslySetInnerHTML={{ __html: forexTitle }} />,
              btn: false,
            },
            {
              text: (
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("Set your trade size", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              ),
              btn: false,
            },
            {
              text: (
                <div
                  dangerouslySetInnerHTML={{
                    __html: t(
                      "Choose direction (Buy or Sell) based on your assessment of the influencing factors",
                      { interpolation: { escapeValue: false } }
                    ),
                  }}
                />
              ),
              btn: false,
            },
            {
              text: t("Place your trade!"),
              btn: true,
            },
          ].map((item, index) => (
            <li
              key={index}
              className={classNames(
                "relative group py-2 md:py-6 last:after:hidden last:bg-primary last:max-w-max last:rounded-full last:max-h-[52px] last:flex",
                "after:absolute after:left-5 after:z-0 after:h-full after:w-0 after:border-l-2 after:border-dashed after:border-[#7F8696]"
              )}
              onClick={() => setActiveIdx(index)}
            >
              <div
                className={classNames(
                  "relative z-[1] inline-flex space-x-2 md:space-x-4 items-center rounded-full pl-1 pr-4 py-1 no-bg",
                  "",
                  {
                    "bg-gradient-to-r": activeIdx === index,
                  }
                )}
              >
                <span className="w-9 h-9 flex-shrink-0 rounded-full border-2 border-grey bg-black flex items-center justify-center text-2xl font-medium absolute z-[1] text-grey">
                  {index + 1}
                </span>
                <div
                  className={classNames({
                    "!ml-14 text-product": activeIdx !== index,
                    "text-[#6D7988] !ml-14": activeIdx === index,
                  })}
                >
                  {(() => {
                    if (item.btn) {
                      return (
                        <>
                          {(() => {
                            if (["CN", "HK", "TW"].includes(country)) {
                              return (
                                <>
                                  <button className="rounded-full cmn-btn bg-primary text-neutral become-btn">
                                    {" "}
                                    <a
                                      href={`${
                                        process.env.NEXT_PUBLIC_BLREG
                                      }${changeLang(lang)}`}
                                      target="_blank"
                                      className="text-left"
                                    >
                                      {" "}
                                      {t("Place your trade!")}{" "}
                                    </a>
                                  </button>
                                </>
                              );
                            } else {
                              return (
                                <>
                                  <RegisterButton
                                    containerStyle="rounded-full cmn-btn bg-primary text-neutral become-btn text-left lg:text-center !px-2 lg:!px-[3.5rem]"
                                    title={t("Place your trade!")}
                                  />
                                </>
                              );
                            }
                          })()}
                        </>
                      );
                    } else {
                      return <>{item.text}</>;
                    }
                  })()}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
      <div className="absolute -top-[5%] -left-[10%] md:-top-[15%] md:-left-[20%] xl:-top-[18%] xl:-left-[28%] z-[-1]">
        <Image
          src={"/static/images/banner/gradiant-radial.png"}
          width={877}
          height={877}
        />
      </div>
    </div>
  );
}

