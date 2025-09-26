import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { Faqs } from "@/components/ClientProtection/Faq";
import Link from "next/link";
import { whyStockbanxList } from "@/constants";
import Container from "@/components/Container";
import PageBannerHeader from "@/components/PageBannerHeader";
import { Stack } from "@/components/Stack";
import { AccountTypes } from "@/components/AccountTypes";
import { ListCard } from "@/components/Account/ListCard";
import { ToUseStockbanxSteps } from "@/components/ToUseStockbanxSteps";

function AccountType() {
  const { t } = useTranslation("common");
  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();

  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setCountry(data);
  }, []);

  return (
    <>
      <Head>
        <title>
          Best Trading Platform | Stock Trading Platform | Stockbanx
        </title>
        <meta
          name="description"
          content="Stockbanx provides a top-notch stock trading platform with
          advanced features & competitive pricing. Explore account types for
          the best trading platform today!"
          key="Best Trading Platform | - Stock Trading Platform"
        />
      </Head>

      <Container className="!pb-0 !pt-0">
        <PageBannerHeader>
          <h1 className="text-[40px] font-[500] z-10 text-center leading-10">
            Find more details about <br /> our{" "}
            <span className="text-primary">products</span>
          </h1>

          <Link href="/">
            <a className="relative z-10 mt-4 inline-flex items-center justify-center w-56 bg-[#00B144] text-white text-[16px] font-normal px-4 py-4 rounded-full  hover:bg-[#009e3e] transition duration-200 gap-2 hover:scale-105">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                ></path>
              </svg>
            </a>
          </Link>
        </PageBannerHeader>
      </Container>

      <Stack className="w-full max-w-7xl mt-24">
        <div className="mx-auto w-full text-center">
          <h2 className="text-3xl font-semibold">Account Type</h2>
          <p className="text-[#D2D3DF] text-lg font-normal mb-10">
            At Stockbanx, we provide tailored account options to suit all levels
            of trading experience, from beginners to professional traders.
            <br /> Each account is designed to maximize your trading potential
            with competitive features and reliable support.
          </p>

          <div className="mt-4">
            <AccountTypes />
          </div>
        </div>

        <div className="mx-auto w-full">
          <p className="text-primary text-base font-medium">WHY</p>
          <h2 className="text-3xl font-medium">The Stockbanx Advantage</h2>
          <p className="text-[#D2D3DF] text-xl font-normal">
            Find Out Why We're the Broker of Choice.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {whyStockbanxList.map((li) => (
              <ListCard
                key={li.title}
                title={li.title}
                subTitle={li.subTitle}
                description={li.description}
                icon={li.icon}
              />
            ))}
          </ul>

          <div className="flex justify-center my-12">
            <Link href="/about-us">
              <a
                href="/about-us"
                className="inline-flex items-center justify-center w-56 bg-primary text-white text-base font-normal px-4 py-4 rounded-full  hover:bg-primary/80 transition duration-200 gap-2 hover:scale-105 "
              >
                Discover More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full">
          <ToUseStockbanxSteps
            subTitle="ACT NOW"
            title="Start trading with Stockbanx"
            description="Where financial opportunities meet precision"
            steps={[
              {
                title: "Apply",
                description:
                  "Complete a simple online application form on our official website",
              },
              {
                title: "Provide",
                description:
                  "Submit identification documents to ensure your account's security",
              },
              {
                title: "Fund",
                description:
                  "Deposit funds into your trading account to get started",
              },
              {
                title: "Get the App",
                description:
                  "Download and install the platform from our official website. Access your account, monitor your balance, and execute trades seamlessly via Stockbanx servers",
              },
            ]}
            btnText="Get Started"
            btnLink="/"
          />
        </div>

        <Faqs
          faqs={[
            {
              question: t("What account types do you offer?"),
              answer: (
                <>
                  <p>
                    Islamic Accounts: We offer specialized Islamic accounts
                    tailored to comply with Islamic principles.
                  </p>
                  <ul>
                    <li>
                      <p className="font-bold text-white">Classic (Standard)</p>
                    </li>
                    <li>
                      <p className="font-bold text-white">Prime</p>
                    </li>
                    <li>
                      <p className="font-bold text-white">ECN</p>
                    </li>
                  </ul>

                  <p>
                    For more details{" "}
                    <Link href="/accounts/account-type">
                      <a href="/accounts/account-type" className="underline">
                        click here
                      </a>
                    </Link>
                  </p>
                </>
              ),
            },
            {
              question: t("What is the minimum deposit for Classic account?"),
              answer: "The minimum deposit for the Classic Account is $500.",
            },
            {
              question: t("What is the minimum deposit for Prime account?"),
              answer: t(
                "The minimum deposit amount is 10,000 USD for Prime account."
              ),
            },
            {
              question: t("How can I request for a Demo account?"),
              answer: (
                <>
                  <p>
                    You can register for a demo account by{" "}
                    <a
                      href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/#/${lang}/user/register/individual`}
                      className="underline"
                    >
                      clicking
                    </a>{" "}
                    here. (Register - Client Portal (stockbanx.com)) Simply
                    select the Demo account option and complete the requested
                    details. After submitting your information, you will receive
                    an email with your Demo account details.
                  </p>
                </>
              ),
            },
            {
              question: t("Is a Swap Free account available?"),
              answer: (
                <>
                  <p>
                    Yes, offers traders a swap-free option trading account.{" "}
                    <Link href="/accounts/account-type">
                      <a href="/accounts/account-type" className="underline">
                        click
                      </a>
                    </Link>{" "}
                    here for more information.
                  </p>
                </>
              ),
            },
            {
              question: t("How to Top-Up my Demo Account?"),
              answer: t(
                "To top up your Demo account, please contact our Support Team as confirming your Demo Account number and the amount you wish to Top-Up."
              ),
            },
            {
              question: t("How long can I practice on my Demo account?"),
              answer: t(
                "Stockbanx Markets offers a free practicing Demo account for a 30-day trial period after registration."
              ),
            },
            {
              question: t(
                "Are the spreads on your demo account the same as live?"
              ),
              answer: t(
                " Yes. The Demo account mirrors our Live Classic or Prime accounts, with the same spreads and swap rates."
              ),
            },
            {
              question: t(
                "Can I trade all products (FX, CFDs, commodities) from one Demo account?"
              ),
              answer: t(
                " Yes, all Demo accounts have access to all products, including currencies, commodities, indices, and stocks."
              ),
            },
            {
              question: t("How do I open an Islamic account?"),
              answer: t(
                "To open an Islamic account, a “Swap-Free Account Agreement” has to be signed, which outlines details of the interest-free nature and general conditions of the account. Please be aware that Stockbanx reserves the right to monitor an interest-free account to ensure it is being used in good faith and for intended purposes. Contact you directly if we suspect any irregular trading behaviour. Please contact our Client Experience Team or Sales Department and we’ll help you through the process."
              ),
            },
            {
              question: t("What is the maximum leverage you offer?"),
              answer: t(
                "We offer a maximum leverage of 1:1000, depending on the specific products you trade."
              ),
            },
            {
              question: t(
                "How can I view the minimum and maximum trade sizes on the cTrader platform?"
              ),
              answer: (
                <>
                  <p>On PC/Laptop:</p>
                  <ul className="list-disc">
                    <li>
                      Right-click on the instrument in the Finder window under
                      the Trader section of the left menu, then select{" "}
                      <strong>Symbol Window</strong> to access information about
                      the minimum and maximum trading volumes for that
                      instrument.
                    </li>
                  </ul>

                  <p className="mt-6">On Mobile:</p>
                  <ul className="list-disc">
                    <li>
                      Tap the <strong>Trade</strong> option on the bottom and
                      then tap on the desired pair in the{" "}
                      <strong>Watchlist</strong> section, scroll down to see the
                      minimum and maximum trading volumes for the selected
                      instrument.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              question: t("What is your margin call?"),
              answer: t(
                "Our margin calls are 50% for the Classic Account, Prime Account, and ECN account. Note: Your account may be subject to a margin call if your account equity falls to a level that is equal to the margin of your existing positions."
              ),
            },
            {
              question: t("What is your order execution speed?"),
              answer: t("Our average execution speed is 0.3 seconds."),
            },
            {
              question: t("Can I open a Demo account?"),
              answer: t(
                "Yes, you can open a free Demo account with a balance of $10,000 in simulated funds to test the platform and your trading strategies on live markets in a risk-free environment."
              ),
            },
            {
              question: t("Can I open a swap-free account?"),
              answer: t(
                "Yes, we offer swap-free accounts which are exempted from swaps on currency majors, minors & precious metals. It is not possible to have a swap-free and swap-enabled account open at the same time, but you can convert your existing account to swap-free by contacting our dedicated account managers."
              ),
            },
            {
              question: t("How do I open a live account?"),
              answer: t(
                "Apply for an account by submitting your contact details, personal information (with proof of address), bank statement & trading experience. Once the application is complete & all appropriateness checks are valid, we’ll email you access codes to our client portal. Upon opening the portal with your unique details, you’ll be able to make your first deposit via secure transfer along with your proof of account."
              ),
            },
            {
              question: t(
                "What is the minimum deposit requirement for opening an ECN account?"
              ),
              answer: t(
                "The minimum deposit required to open an ECN account is $1000."
              ),
            },
          ]}
        />
      </Stack>
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default AccountType;

