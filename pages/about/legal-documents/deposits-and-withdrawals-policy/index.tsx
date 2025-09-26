import { FC, Fragment, useState } from "react";
import Container from "@/components/Container";
import Link from "next/link";
import { legalDocuments } from "@/constants";
import { useRouter } from "next/router";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PageBannerHeader from "@/components/PageBannerHeader";

const DepositsAndWithdrawalsPolicy: FC = () => {
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
          <div className="flex flex-col flex-1 legal-doc-content gap-4 pt-6">
            <div>
              <div>
                <h2 className="text-3xl font-normal mb-3 ">
                  Deposits and Withdrawals Policy
                </h2>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">INTRODUCTION</h3>
                    <p className="text-base font-light leading-relaxed mb-4">
                      SB Global, operating under the brand Stockbanx (
                      <a href="/" className="underline text-[#3b82f6]">
                        www.stockbanx.com
                      </a>
                      ), is an Investment Firm registered in the Union of
                      Comoros with company registration number 15825. The
                      Company’s registered office is located at Hamchako,
                      Mutsamudu, Autonomous Island of Anjouan, Union of Comoros.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      This Deposits and Withdrawals Policy, together with the
                      Service Agreement and the Terms and Conditions of
                      Business, explains the regulations and procedures
                      governing the deposits and withdrawals of client funds. By
                      agreeing to this Policy, the Client confirms they have
                      read, understood, and accepted the terms outlined herein.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      CLIENTS’ DEPOSITS / FUNDS
                    </h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          The Client may deposit funds into their trading
                          account at any time during the term of this agreement,
                          provided their account has been verified in accordance
                          with the Company’s Customer Acceptance Policy.
                          Deposits will be accepted via bank transfer, SWIFT,
                          e-wallet, debit/credit card, or any other electronic
                          payment method acceptable by the Company.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          The Company may charge a fee per deposit, to cover the
                          payment service provider and handling fees. For bank
                          deposits, the Company will consider the net amount
                          received in its bank accounts as the deposit, subject
                          to applicable banking fees or charges. Cash deposits
                          are not accepted.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          The Company does not accept third-party or anonymous
                          payments. Deposits are credited only if the sender
                          matches the registered account holder or their
                          authorized representative (e.g., Trustee, POA, or
                          Guardian). If the sender does not meet these criteria,
                          the Company reserves the right to reject the deposit
                          and return the funds to the remitter, net of any
                          transfer fees incurred.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          The Company may request additional documentation to
                          verify the source of funds, including:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                          <li className="text-base font-light mb-2">
                            Copies of credit/debit cards used for the deposit.
                          </li>
                          <li className="text-base font-light mb-2">
                            SWIFT or SEPA transfer receipts.
                          </li>
                          <li className="text-base font-light mb-2">
                            Proof of ownership for anonymous cards from the
                            issuing bank.
                          </li>
                          <li className="text-base font-light mb-2">
                            Any other documentation deemed necessary.
                          </li>
                        </ul>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          The Company reserves the right to set minimum and
                          maximum deposit amounts. Details can be found in the
                          Terms and Conditions of Business, Service Agreement,
                          or on the Company’s official website.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          Interest earned on funds held in Company accounts will
                          not be credited to Clients and may be retained by the
                          Company.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      WITHDRAWAL OF FUNDS
                    </h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          Clients can initiate withdrawals through the trading
                          platform or by submitting a request via email to
                          <a
                            href="mailto:contact@stockbanx.com"
                            className="underline text-[#3b82f6]"
                          >
                            contact@stockbanx.com
                          </a>
                          .
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          The Client is responsible for all fees associated with
                          withdrawals, including bank charges, payment service
                          provider fees, and any applicable currency conversion
                          costs.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          Withdrawal requests must include all necessary
                          information and documents, such as:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                          <li className="text-base font-light mb-2">
                            Copies of the credit/debit card used for the
                            deposit.
                          </li>
                          <li className="text-base font-light mb-2">
                            Bank statements or IBAN details for wire transfers.
                          </li>
                          <li className="text-base font-light mb-2">
                            Confirmation letters for anonymous cards, verifying
                            ownership.
                          </li>
                          <li className="text-base font-light mb-2">
                            Any other documentation required to comply with
                            Anti-Money Laundering (AML) and Know Your Customer
                            (KYC) regulations.
                          </li>
                        </ul>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          Before processing a withdrawal, the Company will:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                          <li className="text-base font-light mb-2">
                            Before processing a withdrawal, the Company will:
                          </li>
                          <li className="text-base font-light mb-2">
                            Ensure the withdrawal request contains accurate and
                            complete information.
                          </li>
                          <li className="text-base font-light mb-2">
                            Confirm the Client has met all applicable terms and
                            conditions, including margin requirements.
                          </li>
                        </ul>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          Withdrawal requests are processed within three working
                          days provided the following conditions are met:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                          <li className="text-base font-light mb-2">
                            The Client’s available funds exceed or equal the
                            withdrawal amount, after deducting applicable fees.
                          </li>
                          <li className="text-base font-light mb-2">
                            The withdrawal request complies with the Company’s
                            Terms and Conditions of Business and Service
                            Agreement.
                          </li>
                        </ul>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          Funds may take an additional 5 to 7 working days to
                          reach the Client’s account, depending on the payment
                          method and the Client’s financial institution. The
                          Company is not responsible for delays caused by banks
                          or payment processors.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          If a Client requests a withdrawal to a bank account
                          not previously registered with the Company, additional
                          KYC verification will be performed to confirm the
                          account holder's identity.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          The Company reserves the right to suggest alternative
                          withdrawal methods or to decline requests that do not
                          comply with this Policy.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          Withdrawals will only be processed in the name of the
                          account holder. No payments will be made to third
                          parties or anonymous accounts.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          Clients are responsible for providing accurate
                          instructions. The Company will not be liable for
                          errors in processing withdrawal requests due to
                          incorrect information provided by the Client.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      SECURITY AND VERIFICATION
                    </h3>
                    <p className="text-base font-light leading-relaxed mb-4">
                      To enhance the security of client funds, withdrawal
                      requests undergo multiple levels of verification:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        To enhance the security of client funds, withdrawal
                        requests undergo multiple levels of verification:
                      </li>
                      <li className="text-base font-light mb-2">
                        Ensuring the withdrawal does not violate margin or free
                        margin requirements (e.g., the Margin Level must remain
                        above 30% after withdrawal).
                      </li>
                    </ul>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Withdrawal requests are reviewed and approved by the
                      Back-Office Department, which verifies fund availability
                      and compliance with internal policies. Approved requests
                      are forwarded to the Finance Department for execution.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      ADDITIONAL PROVISIONS
                    </h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        All charges associated with deposits or withdrawals will
                        be borne by the Client. These charges will be deducted
                        from the Client’s trading account balance before funds
                        are transferred
                      </li>
                      <li className="text-base font-light mb-2">
                        The Company reserves the right to request additional
                        information or documentation at any time to ensure
                        compliance with AML and KYC regulations.
                      </li>
                      <li className="text-base font-light mb-2">
                        In cases where delays occur due to missing documentation
                        or incorrect information provided by the Client, the
                        Company is not liable for any resulting inconveniences.
                      </li>
                      <li className="text-base font-light mb-2">
                        Withdrawal requests that cannot be processed
                        electronically may, at the Company’s discretion, be
                        accepted via email, provided the Client’s signature is
                        verified, and all necessary checks are completed.
                      </li>
                      <li className="text-base font-light mb-2">
                        All deposit and withdrawal transactions are recorded in
                        the Company’s internal ledger for auditing and
                        regulatory purposes. Records are maintained for at least
                        seven years.
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      CLIENT SUPPORT
                    </h3>
                    <p className="text-base font-light leading-relaxed mb-4">
                      For assistance with deposits or withdrawals, Clients may
                      contact the Company at{" "}
                      <a
                        href="mailto:contact@stockbanx.com"
                        className="underline text-[#3b82f6]"
                      >
                        contact@stockbanx.com
                      </a>
                      . Requests for transaction status updates will be
                      addressed promptly, with information provided no later
                      than two business days.
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

export default DepositsAndWithdrawalsPolicy;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

