import { FC, Fragment, useState } from "react";
import Container from "@/components/Container";
import Link from "next/link";
import { legalDocuments } from "@/constants";
import { useRouter } from "next/router";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PageBannerHeader from "@/components/PageBannerHeader";

const OrderExecutionPolicy: FC = () => {
  const router = useRouter();
  const [showDocList, setShowDocList] = useState(false);

  return (
    <Fragment>
      <Head>
        <meta name="keywords" content="noindex" />
      </Head>
      <button
        onClick={() => setShowDocList(true)}
        className={`flex justify-center items-center cursor-pointer fixed top-[50%] left-0 z-[40] h-10 w-4 bg-turquoise text-white rounded-r-md shadow-md lg:hidden ${
          !showDocList ? "" : "hidden"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-10 w-4  font-bold"
        >
          <path
            fill-rule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <button
        onClick={() => setShowDocList(false)}
        className={`fixed top-20 right-4 z-[40]  w-[40px] cursor-pointer h-[40px] flex justify-center items-center lg:hidden ${
          showDocList ? "visible" : "hidden"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-30 w-30 text-white"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <Container className="!pb-0 !pt-0">
        <PageBannerHeader>
          <h1 className="text-[40px] font-[500] z-10 text-center leading-10">
            Legal Documents
          </h1>
          <p className="text-[18px] font-[300] text-[#B0B4C1] mt-4 z-10 text-center">
            Get access to all relevant legal documents before <br />
            opening a trading account
          </p>
        </PageBannerHeader>
      </Container>

      <Container className="!pt-0 relative">
        <div className="flex relative">
          <div
            className={`flex flex-col justify-center lg:justify-start bg-background fixed left-0 top-0 h-screen lg:h-1/2 lg:sticky lg:top-20 p-2 w-full lg:w-[300px] transition-transform duration-300 z-30 ${
              !showDocList ? "-translate-x-full" : ""
            } lg:translate-x-0`}
          >
            <ul className="space-y-2">
              {legalDocuments?.map((item) => (
                <li key={item.title}>
                  <Link href={item.href}>
                    <a
                      className={`block w-full text-left px-4 py-2 rounded-md text-[16px] font-[400] text-sbGreen ${
                        router.pathname === item.href
                          ? "text-turquoise"
                          : "text-white hover:bg-[#35363b]"
                      }`}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col flex-1 gap-4 pt-6">
            <div>
              <div>
                <h2 className="text-3xl font-normal mb-3 ">
                  Order Execution Policy
                </h2>
                <p className="text-base font-light leading-relaxed mb-4">
                  SB Global operates the brand Stockbanx (
                  <a href="/" className="underline text-[#3b82f6]">
                    www.stockbanx.com
                  </a>
                  ), providing investment services under the regulatory
                  framework of the Comoros jurisdiction. This document outlines
                  the Company’s approach to executing client orders effectively
                  and in compliance with the applicable laws and regulations of
                  the Union of Comoros.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">INTRODUCTION</h3>
                    <p className="text-base font-light leading-relaxed mb-4">
                      SB Global, registered in the Union of Comoros under
                      registration number 15825, is authorized to provide
                      investment services under the legislative framework of the
                      Comoros Securities Act, as applicable to its operations.
                      The Company's registered office is located at Hamchako,
                      Mutsamudu, Autonomous Island of Anjouan, Union of Comoros.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The Company is committed to providing its clients with the
                      highest standard of service, including ensuring the best
                      execution of client orders (“Best Execution”). This Order
                      Execution Policy (“Policy”) is designed to meet the
                      requirements of the applicable laws and regulations of the
                      Comoros, including but not limited to the Securities Act
                      and related guidelines.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      SCOPE AND SERVICES
                    </h3>
                    <p className="text-base font-light leading-relaxed mb-4">
                      This Policy applies when SB Global, under the brand
                      Stockbanx, executes client transactions. It governs the
                      execution of orders for all types of financial instruments
                      made available by the Company. The specific instruments
                      and trading terms are published on the Company's website.
                    </p>
                    <h3 className="text-2xl font-normal mb-2 ">Order Types</h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          <strong>Market Orders:</strong> Orders executed
                          instantly at the price provided by the Company at the
                          time of the order. Clients may attach Stop Loss and/or
                          Take Profit instructions to these orders.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          <strong>Pending Orders:</strong> Orders to be executed
                          at a future price specified by the client. Types of
                          pending orders include:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                          <li className="text-base font-light mb-2">
                            <strong>Buy Limit:</strong> To purchase at or below
                            a specified price.
                          </li>
                          <li className="text-base font-light mb-2">
                            <strong>Buy Stop:</strong> To purchase when the
                            price rises to a specified level.
                          </li>
                          <li className="text-base font-light mb-2">
                            <strong>Sell Limit:</strong> To sell at a specified
                            price or higher.
                          </li>
                          <li className="text-base font-light mb-2">
                            <strong>Sell Stop:</strong> To sell when the price
                            falls to a specified level.
                          </li>
                        </ul>
                        <p className="text-base font-light leading-relaxed mb-4">
                          Clients may modify pending orders before execution,
                          but Stop Loss, Take Profit, and Pending Orders cannot
                          be altered once the price has reached the execution
                          level.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      BEST EXECUTION FACTORS
                    </h3>
                    <p className="text-base font-light leading-relaxed mb-4">
                      SB Global takes reasonable steps to achieve the best
                      possible results for its clients by considering the
                      following factors:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">Price</li>
                      <li className="text-base font-light mb-2">Costs</li>
                      <li className="text-base font-light mb-2">
                        Speed of Execution
                      </li>
                      <li className="text-base font-light mb-2">
                        Likelihood of Execution
                      </li>
                      <li className="text-base font-light mb-2">
                        Likelihood of Settlement
                      </li>
                      <li className="text-base font-light mb-2">
                        Size of Order
                      </li>
                      <li className="text-base font-light mb-2">
                        Market Impact
                      </li>
                    </ul>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The order of priority for these factors may vary depending
                      on the circumstances of each transaction. In cases where
                      specific client instructions are provided, those
                      instructions will take precedence.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      BEST EXECUTION CRITERIA
                    </h3>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The relative importance of execution factors is determined
                      based on:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        The characteristics of the client, including their
                        classification (e.g., retail or professional).
                      </li>
                      <li className="text-base font-light mb-2">
                        The characteristics of the order.
                      </li>
                      <li className="text-base font-light mb-2">
                        The characteristics of the financial instruments
                        involved.
                      </li>
                      <li className="text-base font-light mb-2">
                        The characteristics of the execution venues available.
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      EXECUTION VENUES
                    </h3>
                    <p className="text-base font-light leading-relaxed mb-4">
                      SB Global collaborates with Liquidity Providers for order
                      execution. The Company ensures that the selection of
                      execution venues aligns with its commitment to Best
                      Execution.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      <strong>Off-Exchange Transactions</strong>
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The client acknowledges that transactions executed with SB
                      Global may occur outside of regulated exchanges. Such
                      transactions may carry greater risks, including but not
                      limited to price adjustments due to technical failures or
                      platform malfunctions.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The terms and conditions governing these transactions are
                      established solely by SB Global and are subject to the
                      provisions of this Policy.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      MONITORING AND REVIEW
                    </h3>
                    <p className="text-base font-light leading-relaxed mb-4">
                      SB Global regularly monitors the effectiveness of its
                      Order Execution Policy to ensure compliance and optimal
                      performance. Reviews are conducted annually or whenever
                      material changes occur that could affect the quality of
                      execution.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The Company will notify clients of any significant
                      amendments to this Policy via its website or direct
                      communication channels. The Company reserves the right to
                      amend this Policy at its sole discretion.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      For further inquiries or additional information about this
                      Policy, please contact us at{" "}
                      <a
                        href="mailto:contact@Stockbanx.com"
                        className="underline text-[#3b82f6]"
                      >
                        contact@stockbanx.com
                      </a>
                      .
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default OrderExecutionPolicy;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

