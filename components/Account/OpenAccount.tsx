import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { changeLang } from "../../utils/utils";
import RegisterButton from "../button/RegisterButton";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import * as animationData from "../../public/static/images/animation/Laptop Animation.json";

interface Props {
  title: string;
}
function OpenAccount({ title }: Props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { t, i18n } = useTranslation("common");
  const [activeIdx, setActiveIdx] = useState(5);
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
    <div className="max-w-6xl relative mx-auto md:flex py-10 md:py-14 space-y-4 md:space-y-0 mt-10">
      <div className="absolute w-[70%] h-full lg:z-10 -top-[17rem] -left-[15rem]">
        <img
          src="/static/images/about/atheletemask.png"
          className="w-full h-full select-none"
        ></img>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 1 },
        }}
        transition={{ duration: 0.4 }}
        className="md:w-[55%] relative lg:z-30"
      >
        <div className="w-[282px]  h-[300px] md:w-[420px] lg:w-[497px] md:h-[526px] relative mx-auto">
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
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
        <div className="intro-font mb-[2rem] text-white text-[28px] text-center md:text-left md:text-3xl">
          {title}
        </div>
        <ul>
          {[
            <>
              <p
                className="text-base -mt-6 text-[#6D7988]"
                dangerouslySetInnerHTML={{
                  __html: t(
                    "Fill in a simple online application form through our official website.",
                    {
                      interpolation: { escapeValue: false },
                    }
                  ),
                }}
              ></p>
            </>,
            <>
              <p
                className="text-base text-[#6D7988]"
                dangerouslySetInnerHTML={{
                  __html: t(
                    "Provide identification to keep your account safe.",
                    {
                      interpolation: { escapeValue: false },
                    }
                  ),
                }}
              ></p>
            </>,
            <>
              <p
                className="text-base text-[#6D7988]"
                dangerouslySetInnerHTML={{
                  __html: t("Fund your trading account", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              ></p>
            </>,
            <>
              <p
                className="text-base text-[#6D7988]"
                dangerouslySetInnerHTML={{
                  __html: t(
                    "Download and install platform via our official website so that you can access your account,check your balance via Stockbanx server, execute trades and start making profits.",
                    {
                      interpolation: { escapeValue: false },
                    }
                  ),
                }}
              ></p>
            </>,
            <>
              {(() => {
                if (["CN", "HK", "TW"].includes(country)) {
                  return (
                    <>
                      <button className="rounded-full cmn-btn bg-primary text-neutral become-btn">
                        {" "}
                        <a
                          href={`${process.env.NEXT_PUBLIC_BLREG}${changeLang(
                            lang
                          )}`}
                          target="_blank"
                        >
                          {" "}
                          {t("Open Account")}{" "}
                        </a>
                      </button>
                    </>
                  );
                } else {
                  return (
                    <>
                      <button className="rounded-full cmn-btn bg-primary text-neutral become-btn">
                        {" "}
                        <a
                          href={`${process.env.NEXT_PUBLIC_IB_URL}/#/user/register`}
                          target="_blank"
                        >
                          {" "}
                          {t("Open Account")}{" "}
                        </a>
                      </button>
                    </>
                  );
                }
              })()}
            </>,
          ].map((item, index) => (
            <li
              key={index}
              className={classNames(
                "relative group py-2 md:py-3.5 last:after:hidden",
                "after:absolute after:left-5 after:top-4 after:z-0 after:h-full after:w-0 after:border-l-2 after:border-dashed after:border-[#E4E4E4]"
              )}
              onClick={() => setActiveIdx(index)}
            >
              <div
                className={classNames(
                  "relative z-[1] inline-flex space-x-2 md:space-x-4 items-start rounded-full pl-1 pr-4 py-1",
                  "",
                  {
                    "bg-gradient-to-r items-center": activeIdx === index,
                  }
                )}
              >
                <span
                  className={`${
                    index > 0
                      ? "w-9 h-9  top-1/2 transform -translate-y-1/2 flex-shrink-0 rounded-full border-2 border-[#00b144] bg-black text-white flex items-center justify-center text-2xl font-medium absolute z-[1]"
                      : "w-9 h-9  top-0 transform -translate-y-1/2 flex-shrink-0 rounded-full border-2 border-[#00b144] bg-black text-white flex items-center justify-center text-2xl font-medium absolute z-[1]"
                  }  `}
                >
                  {index + 1}
                </span>
                <div
                  className={classNames({
                    "text-[#6D7988] group-hover:text-[#0C2038] !ml-14":
                      activeIdx !== index,
                    "text-[#0C2038] !ml-14": activeIdx === index,
                  })}
                >
                  {item}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default OpenAccount;

