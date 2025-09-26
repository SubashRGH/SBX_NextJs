import { XMarkIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { changeLang } from "../../utils/utils";

interface Props {
  title: string;
  description: string;
  btnText: string;
  bg: string;
  videoUrl?: string;
  headText: string;
  rating?: number;
  direction?: "row" | "row-reverse";
}

export default function ProductVideoIntro({
  title,
  description,
  btnText,
  bg,
  headText,
  videoUrl,
  rating = 5,
  direction = "row",
}: Props) {
  const [showModal, setShowModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const { t } = useTranslation("common");
  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();
  useEffect(() => {
    setLang(localStorage.getItem("lang") || "en");
    const data = localStorage.getItem("country");
    setCountry(data);
  }, []);
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 md:flex py-10 md:py-14 space-y-4 md:space-y-0">
        <div
          className={`md:flex ${
            direction === "row" ? "md:flex-row" : "md:flex-row-reverse"
          } product-video-bg max-w-6xl mx-auto bg-[#24272E26]  border-[#24272E] border overflow-hidden rounded-3xl`}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="flex-1 flex flex-col items-start justify-center py-[70px] md:pl-[35px] md:py-[79px] productVideo  px-[18px] md:pr-32 "
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-white text-2xl md:text-3xl whitespace-pre-wrap break-words md:w-3/4 xl:w-3/4 lg:w-3/4 pb-3">
              {title}
            </div>
            <div className="text-white opacity-60 whitespace-pre-wrap break-words !mb-4">
              {description}
            </div>
            {(() => {
              if (["CN", "HK", "TW"].includes(country)) {
                return (
                  <div>
                    <button className="rounded-full cmn-btn bg-primary text-neutral btn-pad">
                      {" "}
                      <a
                        className=""
                        href={`${process.env.NEXT_PUBLIC_BLREG}${changeLang(
                          lang
                        )}`}
                        target="_blank"
                      >
                        {" "}
                        {btnText}{" "}
                      </a>{" "}
                    </button>
                  </div>
                );
              } else {
                return (
                  <div>
                    {/* account South Africa */}
                    <button className="rounded-full cmn-btn bg-primary text-neutral btn-pad">
                      {" "}
                      <a
                        className=""
                        href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${lang}/user/register`}
                        target="_blank"
                      >
                        {" "}
                        {btnText}{" "}
                      </a>{" "}
                    </button>
                  </div>
                );
              }
            })()}
          </motion.div>
          <div className="flex-1">
            {/* <Image
          width={543}
          height={371}
          src="/static/images/products/what-is-forex.png"
          objectFit="cover"
        /> */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.5 }}
              // onClick={() => setShowModal(videoUrl ? true : false)}
              className={classNames(
                `rounded-3xl cursor-auto w-full h-[316px] md:h-full bg-no-repeat bg-cover bg-center md:bg-cover lg:bg-cover xl:bg-cover relative ${bg}`
              )}
            >
              {/* <div className="playBut">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="190.7px"
                  height="190.7px"
                  viewBox="0 0 213.7 213.7"
                  enable-background="new 0 0 213.7 213.7"
                  xmlSpace="preserve"
                >
                  <polygon
                    className="triangle"
                    id="XMLID_18_"
                    fill="none"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    points="
      73.5,62.5 148.5,105.8 73.5,149.1 "
                  />

                  <circle
                    className="circle"
                    id="XMLID_17_"
                    fill="none"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    cx="100.8"
                    cy="100.8"
                    r="70.3"
                  />
                </svg>
              </div> */}
              {/* <div className="absolute md:bottom-24 xl:bottom-24 lg:bottom-24 bottom-24">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 1.5 }}
                >
                  <button className="rounded-r-3xl mb-3 brand py-3 px-6 md:text-[18px] lg:text-[18px] xl:text-[18px] text-[13px] font-bold">
                    {" "}
                    {t("Learn With Us")}
                  </button>
                </motion.div>
              </div> */}
              {/* <div className="absolute md:bottom-8 xl:bottom-8 lg:bottom-8 bottom-10 left-6 md:w-10/12 xl:w-10/12 lg:w-10/12">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-white text-xl lg:text-2xl xl:text-2xl">
                    {" "}
                    {headText}{" "}
                  </h1>
                </motion.div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed lg:inset-0 xl:inset-0 top-7 z-[9999] outline-none focus:outline-none overlay p-7">
            <div className="relative modal-video lg:p-2 xl:p-2 p-2 mx-aut bg-white rounded-lg">
              <button
                className="bg-white rounded-full flex items-center justify-center border-0 text-black float-right absolute w-8 h-8 top-[-10px] right-[-14px]"
                onClick={() => setShowModal(false)}
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
              {/* Modal data here */}
              {videoUrl && (
                <>
                  <ReactPlayer
                    controls
                    url={videoUrl}
                    width="100%"
                    height="550px"
                    playing={isPlaying}
                  />
                </>
              )}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
