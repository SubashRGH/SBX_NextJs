import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetStaticPaths,
  NextPage,
} from "next";
import React from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Home from "@/components/Home";
import { countryCodes } from "@/utils/utils";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

const HomePage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query?.country && typeof window !== undefined)
      sessionStorage.setItem("country", router.query?.country as string);
  }, [router.query]);

  return (
    <>
      <Head>
        <title>
          Forex, Metals, Shares, Indices Trading Broker | Stockbanx{" "}
        </title>
        <meta
          name="description"
          content="Stockbanx offers a range of award-winning MT4 & MT5 and mobile app trading platforms. Open a LIVE account to trade Forex, Shares, Stocks, Gold, Oil and leveraged financial derivatives."
        />
      </Head>
      <Home />
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => {
  console.log({ locale });
  return {
    props: { locale, ...(await serverSideTranslations(locale, ["common"])) },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  // Generate paths for each slug
  const paths = countryCodes.map((country) => ({ params: { country } }));

  return { paths, fallback: true };
};

export default HomePage;
