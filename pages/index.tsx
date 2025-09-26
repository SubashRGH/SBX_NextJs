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
import { countryCodes, fetchCountry } from "@/utils/utils";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";
import { useRouter } from "next/router";
import FullLoader from "@/components/FullLoader";
import { belizeCountries, ukCountries } from "@/constants";

interface PageProps {
  country: string;
}

const HomePage: NextPage<PageProps> = ({ country }) => {
  const router = useRouter();
  useEffect(() => {
    console.log({ country }, "Index");
    if (country && typeof window !== undefined)
      sessionStorage.setItem("country", country);
  }, [country]);

  /* Don't change below changes
     In case if required, please connect with khursheed
  */
  useEffect(() => {
    const getCountry = async () => {
      const country = await fetchCountry();
      if (belizeCountries?.includes(country?.toLowerCase())) {
        router.push(`/${country.toLowerCase()}`);
      } else if (ukCountries?.includes(country?.toLowerCase())) {
        router.push(`/${country.toLowerCase()}`);
      } else {
        router.push(`/${country.toLowerCase()}`);
      }
    };
    // getCountry();
  }, []);
  /* Don't change above changes
     In case if required, please connect with khursheed
  */

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
      {/* <FullLoader /> */}
    </>
  );
};

// type RedirectResult = {
//   redirect: { destination: string; permanent: false; basePath?: string };
// };
// type ServerSidePropsResult = GetServerSidePropsResult<PageProps>;

// export const getServerSideProps: GetServerSideProps<PageProps> = async ({
//   resolvedUrl,
//   locale,
//   req,
// }: GetServerSidePropsContext<ParsedUrlQuery>): Promise<ServerSidePropsResult> => {
//   console.log(
//     "Detected IP",
//     req.headers["x-original-forwarded-for"],
//     req.headers["x-forwarded-for"],
//     req.socket.remoteAddress
//   );
//   const country = await fetchCountry(
//     String(
//       req.headers["x-original-forwarded-for"] ||
//         req.headers["x-forwarded-for"] ||
//         req.socket.remoteAddress
//     )
//   );

//   const props = {
//     country,
//     locale,
//     ...(await serverSideTranslations(locale || "", ["common"])),
//   };

//   if (!resolvedUrl.includes(country.toLowerCase())) {
//     const redirectResult: RedirectResult = {
//       redirect: {
//         destination: `${
//           locale === "en" ? "" : `/${locale}/`
//         }${country.toLowerCase()}`,
//         permanent: false,
//       },
//     };
//     return { props, ...redirectResult };
//   }

//   return { props };
// };

// export const getStaticProps = async ({ locale }: any) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ["common"])),
//   },
// });

export const getStaticProps = async ({ locale }: any) => {
  console.log({ locale });
  return {
    props: { locale, ...(await serverSideTranslations(locale, ["common"])) },
  };
};

export default HomePage;
