import Head from "next/head";

import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { motion } from "framer-motion";

import dynamic from "next/dynamic";
import Container from "@/components/Container";
import PageBannerHeader from "@/components/PageBannerHeader";

const EconomicCalendarNoSSR = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.EconomicCalendar),
  {
    ssr: false,
  }
);

function EconomicCalendar() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Best Forex Promotions Services | Stockbanx</title>
        <meta
          name="description"
          content="Stay updated with the latest economic events using Stockbanx'
          comprehensive economic calendar. Unlock the best forex promotions
          services & start trading."
          key="Best Forex Promotions Services"
        />
      </Head>
      <div className="relativc">
        <Container className="!pb-0 !pt-0">
          <PageBannerHeader className="relative !justify-start min-h-min">
            <h1 className="text-[40px] font-[500] z-10 text-center leading-10 mt-8">
              Economic calendar
            </h1>
            <div className="z-10 w-full mt-8 min-h-[65vh] mb-8">
              <EconomicCalendarNoSSR colorTheme="dark" autosize />
            </div>
          </PageBannerHeader>
        </Container>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default EconomicCalendar;

