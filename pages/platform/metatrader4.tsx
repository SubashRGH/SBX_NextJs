import { CheckIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useEffect, useState } from "react";
import Download from "../../components/DownloadApp";
import FAQ from "../../components/FAQ";
import PageBanner from "../../components/PageBanner";
import PanelHeader from "../../components/PanelHeader";
import PlatformLorem from "../../components/platform/PlatformLorem";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import * as animationData from "../../public/static/images/animation/MT4 Icon Animation.json";
import Head from "next/head";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Metatrader4() {
  const { t } = useTranslation("common");
  const [country, setCountry] = useState<any>();

  useEffect(() => {
    const data = sessionStorage.getItem("country");
    setCountry(data);
  }, [country]);

  return (
    <div>
      <Head>
        <title>Best Forex Trading Platforms | Stockbanx</title>
        <meta
          name="description"
          content="Our MetaTrader 4 platform offers advanced features, pricing, & user friendly interface. Trade forex confidently with Stockbanx' best
          trading platforms"
          key="Best Forex Trading Platforms"
        />
      </Head>

      <PageBanner
        title={t("Metatrader 4 Trading Platform")}
        description={t("Trade on the world's most popular platform")}
        size="md"
        imgSrc="/static/images/platform/mt4-web.svg"
        btnText={t("Open Account")}
      />
      <Introduce />
      <div className="stkbnx-container">
        <PlatformLorem
          title={t("Get The Best Of")}
          semiTitle={t("Key features and benefits")}
          group={[
            [
              t("57 preinstalled technical indicators"),
              t("24 analytical charting tools"),
              t("3 chart types & 9 time frames"),
              t("1-click trading & trade from charts"),
              t("Trailing Stop"),
              t("Easy to use interface"),
              t("Fully customizable charts"),
              t("Add custom EAs & indicators"),
              t("News feed & broker mailbox"),
              t("Available for Windows or Mac"),
            ],
          ]}
          headerClassName="max-w-2xl"
        />
      </div>
      <div className="md:pt-20 xl:pt-20 lg:pt-20 pt-10 relative">
        <div className="absolute top-[30%] right-0">
          <Image
            src={"/static/images/banner/gradiant-radial.png"}
            width={600}
            height={600}
            className="!ml-[15rem]"
          />
        </div>
        <>
          <Download
            title={t("Download MT4")}
            img="/static/images/platform/mt4-down.png"
            description={t(
              "Trade thousands of leveraged products instruments, including Forex, Shares, Metals, Indices and more. Execute orders and analyze markets on the go with our award-winning mobile platform."
            )}
            google="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4"
            desktop="https://download.mql5.com/cdn/web/cpt.markets.pty/mt4/cptmarkets4setup.exe"
            ios="https://apps.apple.com/us/app/metatrader-4/id496212596"
            web="https://trading.cptmarkets.com/"
            width="357px"
            height="344px"
            x="md:-translate-x-[31%]"
            y="md:-translate-y-[48%]"
          />
        </>
      </div>
      <FAQ />
    </div>
  );
}

function Introduce() {
  const { t } = useTranslation("common");
  return (
    <div className="relative max-w-6xl px-4 md:px-0 mx-auto md:flex items-center py-10 md:pb-14 md:pt-24">
      <div className="absolute top-[5%] -left-[25%]">
        <Image
          src={"/static/images/banner/gradiant-radial.png"}
          width={500}
          height={500}
        />
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
          {/* <Image src="/static/images/platform/mt4.png" layout="fill" /> */}
          <Lottie options={defaultOptions} height={400} width={400} />

          {/* <video className="video-mt4 mx-auto" autoPlay loop muted>
            <source src="/static/images/video/mt4.mp4" type="video/mp4" />
          </video> */}
        </div>
      </motion.div>
      <div className="md:w-1/2 space-y-2.5 pb-6 md:pb-0">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 1 },
          }}
          transition={{ duration: 0.4 }}
          className="intro-font text-2xl md:text-3xl text-white text-center lg:text-left mt-[40px] lg:mt-0"
        >
          {t("Why Stockbanx Metatrader 4")}
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 1 },
          }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[#6D7987] text-center lg:text-left"
        >
          {t(
            "With MetaTrader 4, traders can chart assets, place orders, and manage positions with everything they need. With advanced trading infrastructure, competitive pricing, and superior order execution, Stockbanx MT4 is one of the most powerful online forex trading platforms."
          )}
        </motion.p>
        {/* <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: { opacity: 1, x: 1 },
          }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-[#0C2038]"
        >
          {t("With its intuitive user interface and powerful trading capabilities, MT4 is the most popular retail platform, used by millions worldwide traders.")}

        </motion.p> */}
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

