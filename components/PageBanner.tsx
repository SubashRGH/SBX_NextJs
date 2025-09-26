import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { changeLang, getResponsiveImage } from "../utils/utils";
import useViewport from "@/hooks/useViewport";
import { BreakpointValue } from "@/constants";
import { useTranslation } from "next-i18next";
interface Props {
  subtitle?: ReactNode;
  title: ReactNode;
  description: string;
  btnText?: string;
  className?: string;
  imgClass?: string;
  size: "sm" | "md";
  imgSrc?: string;
  // images?: { [key in BreakpointValue]: string };
  tc?: string;
  withMultiBtn?: {
    btn1Text?: string;
    btn2Text?: string;
    btn1Click?: () => void;
    btn2Click?: () => void;
  };
  mamBtn?: {
    btnText?: string;
    btnClick?: () => void;
  };
  hideBgGradient?: boolean;
}

export default function PageBanner({
  subtitle,
  title,
  description,
  btnText,
  className,
  size,
  imgSrc,
  // images,
  imgClass,
  tc,
  withMultiBtn,
  mamBtn,
  hideBgGradient = false,
}: Props) {
  const { width } = useViewport();

  const { i18n } = useTranslation("common");

  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();
  const [eventName, setEventName] = useState<any>("");

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
    <div
      className={`${className} relative min-h-[575px] md:min-h-[591px] xl:min-h-[600px] overflow-hidden`}
    >
      <div className="stkbnx-banner-img-container absolute top-0 left-0 h-full w-full z-[1]">
        <div className="stkbnx-container py-14 md:py-0 h-full flex justify-between items-center flex-col md:flex-row">
          <div
            className={`w-full h-full flex flex-col items-center ${
              imgSrc ? "md:items-start" : "md:items-cebter"
            } justify-start md:justify-center`}
          >
            {subtitle ? (
              <motion.h4
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.5 }}
                className=" text-center md:text-2xl gray mb-2 w-full md:text-left"
              >
                {subtitle}
              </motion.h4>
            ) : null}
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.5 }}
              className={`w-full text-center text-white ${
                imgSrc ? "md:text-left" : "md:text-center"
              } text-3xl md:text-[42px] intro-font !leading-[1.2] whitespace-pre-wrap break-words ${
                imgSrc ? "max-w-[514px]" : "max-w-full"
              } `}
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.8 }}
              className={`w-full text-center ${
                imgSrc ? "md:text-left" : "md:text-center"
              } text-white2 whitespace-pre-wrap mt-4  ${
                imgSrc
                  ? "md:w-9/12 xl:w-9/12 lg:w-9/12 max-w-[501px] md:max-w-[395px]"
                  : "max-w-[514px]"
              } `}
              dangerouslySetInnerHTML={{ __html: description }}
            ></motion.p>
            {tc ? (
              <motion.h5
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.5 }}
                className="text-sm gray mt-6 mx-auto lg:ml-[0px]"
              >
                {tc}
              </motion.h5>
            ) : null}
            {btnText ? (
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.8 }}
                className=" rounded-full cmn-btn bg-primary text-neutral mt-5 mb-5 xl:mb-0 lg:mb-0 md:mb-0 !p-0 max-w-fit"
              >
                <>
                  {/* account South Africa */}
                  <a
                    className="btn-pad block"
                    href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${lang}/user/register${eventName}`}
                    target="_blank"
                  >
                    {" "}
                    {btnText}{" "}
                  </a>
                </>
              </motion.button>
            ) : null}
            {withMultiBtn && (
              <div className="flex gap-2 flex-col w-full lg:flex-row">
                {withMultiBtn.btn1Text && (
                  <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 1 }}
                    transition={{ duration: 0.8 }}
                    onClick={
                      withMultiBtn?.btn1Click
                        ? withMultiBtn?.btn1Click
                        : () => {}
                    }
                    className="btn-pad block rounded-full cmn-btn bg-primary text-neutral mt-5 mb-5 xl:mb-0 lg:mb-0 md:mb-0 !p-0"
                  >
                    {withMultiBtn.btn1Text}
                  </motion.button>
                )}
                {withMultiBtn.btn2Text && (
                  <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 1 }}
                    transition={{ duration: 0.8 }}
                    onClick={
                      withMultiBtn?.btn2Click
                        ? withMultiBtn?.btn2Click
                        : () => {}
                    }
                    className="btn-pad block rounded-full cmn-btn bg-primary text-neutral mt-5 mb-5 xl:mb-0 lg:mb-0 md:mb-0 !p-0"
                  >
                    {withMultiBtn.btn2Text}
                  </motion.button>
                )}
              </div>
            )}
            {mamBtn && (
              <div className="flex gap-2 flex-col w-full lg:flex-row">
                {mamBtn.btnText && (
                  <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 1 }}
                    transition={{ duration: 0.8 }}
                    onClick={mamBtn?.btnClick ? mamBtn?.btnClick : () => {}}
                    className="btn-pad block rounded-full cmn-btn bg-primary text-neutral mt-5 mb-5 xl:mb-0 lg:mb-0 md:mb-0 !p-0"
                  >
                    {mamBtn.btnText}
                  </motion.button>
                )}
              </div>
            )}
          </div>
          {imgSrc && (
            <div className="z-[10]">
              <Image
                src={imgSrc}
                alt=""
                height={545}
                width={674}
                className={imgClass}
              />
            </div>
          )}
        </div>
      </div>
      {!hideBgGradient && (
        <>
          <div className="absolute -top-[70%] -left-[95%] md:-top-[70%] md:-left-[40%] xl:-top-[60%] xl:-left-[30%] block">
            <Image
              src={"/static/images/banner/gradiant-radial.png"}
              width={788}
              height={877}
            />
          </div>
          <div className="absolute top-[34%] -right-[27%] md:top-[0%] md:-right-[10%] xl:top-[-15%] xl:right-[0%]">
            <Image
              src={"/static/images/banner/gradiant-radial.png"}
              width={788}
              height={877}
            />
          </div>
        </>
      )}
    </div>
  );
}

// <div
//   style={{
//     backgroundImage: `url('/static/images/banner/cpt_inner-bg.png')`,
//     backgroundSize: "100% 100%",
//     backgroundRepeat: "no-repeat",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   }}
//   className={classNames(
//     " banner-image-top relative bg-[#f5f6fa] px-4 pt-4",
//     {
//       // "md:h-[510px]": size === "md",
//       // "md:h-[323px]": size === "sm",
//     }
//   )}
// >
//   <div className="stkbnx-container flex flex-col lg:flex-row justify-center items-center">
//     <div className="md:flex max-w-xl mx-auto md:h-full">
//       <div className="md:w-[100%] flex flex-col justify-center lg:items-start items-center">
//         {subtitle ? (
//           <motion.h4
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 1 }}
//             transition={{ duration: 0.5 }}
//             className="text-center md:text-2xl gray mb-2"
//           >
//             {subtitle}
//           </motion.h4>
//         ) : null}
//         <motion.h1
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 1 }}
//           transition={{ duration: 0.5 }}
//           className="text-center lg:text-left text-3xl md:text-[40px] intro-font !leading-[1.2] whitespace-pre-wrap break-words"
//         >
//           {title}
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-center lg:text-left text-[#6D7987] whitespace-pre-wrap opacity-50 mt-4 md:w-9/12 xl:w-9/12 lg:w-9/12"
//           dangerouslySetInnerHTML={{ __html: description }}
//         ></motion.p>
//         {btnText ? (
//           <motion.button
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 1 }}
//             transition={{ duration: 0.8 }}
//             className="rounded-full cmn-btn bg-primary mt-5 mb-5 xl:mb-0 lg:mb-0 md:mb-0 !p-0"
//           >
//             {(() => {
//               if (["CN", "HK", "TW"].includes(country)) {
//                 return (
//                   <>
//                     <a
//                       className="btn-pad block"
//                       href={`${process.env.NEXT_PUBLIC_BLREG}${changeLang(
//                         lang
//                       )}}`}
//                       target="_blank"
//                     >
//                       {" "}
//                       {btnText}{" "}
//                     </a>
//                   </>
//                 );
//               } else {
//                 return (
//                   <>
//                     {/* account South Africa */}
//                     <a
//                       className="btn-pad block"
//                       href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${lang}/user/register-list${eventName}`}
//                       target="_blank"
//                     >
//                       {" "}
//                       {btnText}{" "}
//                     </a>
//                   </>
//                 );
//               }
//             })()}
//           </motion.button>
//         ) : null}
//         {tc ? (
//           <motion.h5
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 1 }}
//             transition={{ duration: 0.5 }}
//             className="text-sm gray mt-6"
//           >
//             {tc}
//           </motion.h5>
//         ) : null}
//       </div>
//     </div>
//     <div
//       className={classNames("relative", {
//         "md:w-[790px] xl:w-[790px] lg:w-[790px] h-[323px] w-full":
//           size === "sm",
//         "w-full md:w-[526px] md:h-[340px] xl:w-[790px] xl:h-[510px] h-[248px]":
//           size === "md",
//       })}
//     >
//       <Image src={imgSrc} layout="fill" alt="banner" />
//     </div>
//   </div>
// </div>;
