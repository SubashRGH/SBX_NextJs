import { CheckIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { ReactNode } from "react";
import Download from "../../components/DownloadApp";
import FAQ from "../../components/FAQ";
import PageBanner from "../../components/PageBanner";
import PlatformIntroWithShield from "../../components/platform/PlatformIntroWithShield";
import PlatformLorem from "../../components/platform/PlatformLorem";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import * as animationData from "../../public/static/images/animation/MT5 Icon Animation.json";
import Head from "next/head";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Metatrader5() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>Online Brokers and Trading Platforms | Stockbanx</title>
        <meta
          name="description"
          content="Stockbanx offers top online brokers and trading platforms.
          Experience the advanced features of MetaTrader 5 and forex
          opportunities today. Contact now"
          key="Online Brokers and Trading Platforms"
        />
      </Head>

      <div>
        <PageBanner
          title={t("Metatrader 5 Trading Platform")}
          description={t("The most advanced trading platform")}
          size="md"
          imgSrc="/static/images/platform/mt5-banner.png"
          btnText={t("Open Account")}
        />
        <Introduce />
        <div className="stkbnx-container">
          <PlatformLorem
            title={t("Why Stockbanx Metatrader 5")}
            description={t(
              "MT5 provides professional traders with everything they need in today's dynamic markets, including more indicators, market orders, and instruments."
            )}
            semiTitle={t("Key features and benefits")}
            group={[
              [
                t("Intuitive interface"),
                t("Fully customizable"),
                t("Advanced analytics"),
                t("Flexible and convenien"),
                t("Secure and stable platform"),
                t("Industry-favourite choice"),
                t("MetaTrader 5 expert advisors"),
                t("More assets, more opportunities"),
                t("User-friendly interface"),
                t("Available for Windows or Mac"),
              ],
            ]}
            headerClassName="max-w-2xl"
          />
        </div>
        <div className="md:pt-20 xl:pt-20 lg:pt-20 pt-10 ">
          <Download
            title={t("Download MT5")}
            img="/static/images/platform/mt5-down.png"
            descriptiontitle={t("Trade on the go")}
            description={t(
              "Take your trading journey to the next level with an intuitive and easy-to-use trading platform."
            )}
            google="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5&hl=en&gl=US"
            desktop="https://download.mql5.com/cdn/web/cpt.markets.pty/mt5/cptmarkets5setup.exe"
            ios="https://apps.apple.com/us/app/metatrader-5/id413251709"
            web="https://trading.cptmarkets.com/"
            width="350px"
            height="380px"
            x="md:-translate-x-[31%]"
            y="md:-translate-y-[52%]"
          />
        </div>
        <FAQ />
      </div>
    </>
  );
}

function Introduce() {
  const { t } = useTranslation("common");
  return (
    <div className="relative max-w-6xl px-4 md:px-0 mx-auto flex flex-col-reverse md:flex-row items-center py-10 md:pb-14 md:pt-24">
      <div className="absolute top-[0%] -right-[15%]">
        <Image
          src={"/static/images/banner/gradiant-radial.png"}
          width={800}
          height={800}
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left space-y-2.5 pb-6 md:pb-0">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: { opacity: 1, x: 1 },
          }}
          transition={{ duration: 0.4 }}
          className="intro-font text-2xl md:text-3xl text-white"
        >
          {t("About MT5")}
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: { opacity: 1, x: 1 },
          }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-white2"
        >
          {t(
            "MT5, or MetaTrader 5, is the successor of MetaTrader 4 (MT4), a popular online trading platform. It was originally released as a beta version in 2010 by MetaQuotes Software Corp."
          )}
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: { opacity: 1, x: 1 },
          }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-white2"
        >
          {t(
            "MetaTrader 5 gives you access to trade leveraged products on your favorite instruments. MT5 has improved trading functionalities, enhanced scripting tools, and expert advisors, making it intuitive and advanced."
          )}
        </motion.p>
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
        className="md:w-1/2"
      >
        <div className="relative flex-shrink-0 mx-auto">
          <Lottie options={defaultOptions} height={400} width={400} />

          {/* <video className="video-mt4" autoPlay loop muted>
            <source src="/static/images/video/mt5.mp4" type="video/mp4" />
          </video> */}
          {/* <Image src="/static/images/platform/mt5.png" layout="fill" /> */}
        </div>
      </motion.div>
    </div>
  );
}

// function Trait() {
//   return (
//     <div className="max-w-6xl mx-auto lg:flex pb-10 md:pb-14 px-4">
//       <div
//         className="lg:w-[48%] flex flex-col justify-center items-center border border-[#D5D5D5] px-6 md:px-16 py-10 md:py-14 rounded-xl"
//       >
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: { opacity: 0, x: 80 },
//             visible: { opacity: 1, x: 1 },
//           }}
//           transition={{ duration: 0.4 }}
//           className="w-16 h-16 relative"
//         >
//           <Image src="/static/images/mt5-logo.png" layout="fill" />
//         </motion.div>
//         <motion.h3
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: { opacity: 0, x: 80 },
//             visible: { opacity: 1, x: 1 },
//           }}
//           transition={{ duration: 0.4 }}
//           className="intro-font text-2xl md:text-3xl text-center my-4"
//         >
//           More Tools And Instruments For Greater Flexibility
//         </motion.h3>
//         <ul className="space-y-3 md:space-y-5">
//           {
//             [
//               'Exhaustive analysis & charting suite',
//               'Unrestricted automated trading capabilities',
//               'Complimentary plug-ins for clients',
//             ].map((item, index) => (
//               <motion.li
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={{
//                   hidden: { opacity: 0, x: 80 },
//                   visible: { opacity: 1, x: 1 },
//                 }}
//                 transition={{ duration: 0.4, delay: index / 10 }}
//                 key={index}
//                 className="text-white2 flex space-x-3 items-center"
//               >
//                 <CheckIcon width="1em" height="1em" />
//                 <p>{item}</p>
//               </motion.li>
//             ))
//           }
//         </ul>
//       </div>
//       <ul className="bg-[#F5F6FA] flex-1 flex-shrink-0 flex flex-wrap my-4 rounded-r-2xl">
//         {
//           [
//             {
//               title: 'Automated Trading',
//               content: 'Automate your trading with robots or copy trading.',
//             },
//             {
//               title: 'Trading & Orders',
//               content: 'Market Order Pending Orders',
//             },
//             {
//               title: 'Analysis & Charting',
//               content: 'Detect trends and forecast price direction with MT5 technical analysis tools.',
//             },
//             {
//               title: 'Plug-ins',
//               content: 'Autochartist MetaTrader Master Edition Trading Central',
//             },
//           ].map((item, index) => (
//             <li key={index} className="w-1/2 px-4 py-6 md:p-10 odd:border-r first:border-b last:border-t">
//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={{
//                   hidden: { opacity: 0, y: 60 },
//                   visible: { opacity: 1, y: 1 },
//                 }}
//                 transition={{ duration: 0.4 }}
//                 className="flex items-center justify-center w-8 h-8 bg-[#3B3D42] rounded-md text-white"
//               >
//                 {index + 1}
//               </motion.div>
//               <motion.h4
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={{
//                   hidden: { opacity: 0, y: 60 },
//                   visible: { opacity: 1, y: 1 },
//                 }}
//                 transition={{ duration: 0.4 }}
//                 className="intro-font mt-4 md:mt-7 mb-3"
//               >
//                 {item.title}
//               </motion.h4>
//               <motion.p
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={{
//                   hidden: { opacity: 0, y: 60 },
//                   visible: { opacity: 1, y: 1 },
//                 }}
//                 transition={{ duration: 0.4 }}
//                 className="text-white2"
//               >
//                 {item.content}
//               </motion.p>
//             </li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

