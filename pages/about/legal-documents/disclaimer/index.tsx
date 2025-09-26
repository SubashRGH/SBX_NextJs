import { FC, Fragment, useState } from "react";
import Container from "@/components/Container";
import Link from "next/link";
import { legalDocuments } from "@/constants";
import { useRouter } from "next/router";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PageBannerHeader from "@/components/PageBannerHeader";

const CookiePolicy: FC = () => {
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
          <div className="flex flex-col flex-1 legal-doc-content gap-4 pt-6 text-white">
            <div>
              <div>
                <h2 className="text-3xl font-normal mb-3 ">Disclaimer</h2>
                <p className="text-base font-light leading-relaxed mb-4">
                  Stockbanx, owned by SB Global and regulated under the Comoros
                  jurisdiction, provides access to trading in Forex, CFDs, and
                  other financial instruments. By engaging with our services,
                  you acknowledge and accept the inherent risks involved,
                  including but not limited to the following:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      General Risk Warning
                    </h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        Trading in financial instruments, including Forex and
                        CFDs, involves substantial risk to your capital. High
                        volatility and leveraged positions can lead to
                        significant gains but equally substantial losses. Only
                        trade with risk capital—money you can afford to lose
                        without adversely affecting your financial well-being.
                      </li>
                      <li className="text-base font-light mb-2">
                        Past performance is not indicative of future results.
                        The value of investments may fluctuate due to market
                        conditions and other external factors, potentially
                        resulting in a complete loss of invested funds.
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">Risk of Loss</h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        Clients are responsible for understanding the risks of
                        trading leveraged products. Losses may exceed the
                        initial margin or account balance in certain market
                        conditions.
                      </li>
                      <li className="text-base font-light mb-2">
                        The use of tools like stop-loss orders does not
                        guarantee limitation of losses as execution depends on
                        market conditions, including liquidity and volatility.
                      </li>
                      <li className="text-base font-light mb-2">
                        Currency exchange rate fluctuations can impact deposits,
                        withdrawals, and the valuation of positions. Clients
                        bear the risks associated with such fluctuations.
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      Platform and Execution Risks
                    </h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        Clients assume risks associated with the use of
                        electronic trading platforms, including potential
                        delays, software failures, hardware malfunctions,
                        internet connectivity issues, and cybersecurity
                        vulnerabilities.
                      </li>
                      <li className="text-base font-light mb-2">
                        During high market volatility, quotes may lag, and
                        execution prices may differ significantly from expected
                        prices. Such occurrences, including slippage, are beyond
                        the Company’s control.
                      </li>
                      <li className="text-base font-light mb-2">
                        Stockbanx is not liable for disruptions caused by third
                        parties, including banks, payment systems, or internet
                        service providers.
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      Regulatory and Jurisdictional Limitations
                    </h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        Stockbanx does not provide services in jurisdictions
                        where it is unauthorized, including but not limited to
                        the USA. Clients are solely responsible for ensuring
                        compliance with their local regulations.
                      </li>
                      <li className="text-base font-light mb-2">
                        Stockbanx operates under the regulatory framework of the
                        Comoros jurisdiction and is not subject to oversight by
                        regulatory bodies outside this jurisdiction.
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      Force Majeure
                    </h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        The Company shall not be held liable for losses caused
                        directly or indirectly by events beyond its control,
                        including natural disasters, military actions,
                        government restrictions, market interruptions, or other
                        force majeure events.
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      Client Responsibilities
                    </h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        Clients are responsible for safeguarding their account
                        credentials. The Company shall not be liable for
                        unauthorized transactions resulting from compromised
                        access.
                      </li>
                      <li className="text-base font-light mb-2">
                        It is the client’s responsibility to regularly update
                        themselves on applicable trading terms, conditions, and
                        policies provided by Stockbanx.
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      Limited Guarantee
                    </h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        Stockbanx does not guarantee the success of any
                        investment or the accuracy of any forecast,
                        illustration, or hypothetical data provided. Such
                        materials are for informational purposes only and are
                        not investment advice.
                      </li>
                      <li className="text-base font-light mb-2">
                        Clients should seek independent financial, legal, and
                        tax advice before making investment decisions.
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      Risk Disclosure Scope
                    </h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        This Risk Disclosure Statement does not exhaustively
                        cover all risks associated with trading in financial
                        markets. Clients must undertake due diligence and ensure
                        full understanding of the risks involved.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h2 className="text-3xl font-normal mb-3 ">Warning</h2>
                <p className="text-base font-light leading-relaxed mb-4">
                  Trading is not suitable for everyone. If you do not fully
                  understand the risks or are uncertain about your ability to
                  bear potential losses, we strongly recommend seeking
                  professional advice or refraining from trading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default CookiePolicy;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

