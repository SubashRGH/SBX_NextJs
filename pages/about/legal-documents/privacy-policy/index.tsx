import { FC, Fragment, useState } from "react";
import Container from "@/components/Container";
import Link from "next/link";
import { legalDocuments } from "@/constants";
import { useRouter } from "next/router";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PageBannerHeader from "@/components/PageBannerHeader";

const PrivacyPolicy: FC = () => {
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
          <div className="flex flex-col flex-1 gap-4 p-4 overflow-y-auto">
            <div>
              <h2 className="text-3xl font-normal mb-3 ">Privacy Clause</h2>
              <p className="text-base font-light leading-relaxed mb-4">
                It is one of our primary responsibilities to protect the privacy
                of our customers and visitors to our website and to ensure the
                security of their personal and financial information. The
                following privacy statement explains how Stockbanx collects and
                protects your information.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                According to the privacy statement, once you open an account or
                use our website, you agree that we collect and use your personal
                information in accordance with the contents of this privacy
                agreement.
              </p>
              <h2 className="text-3xl font-normal mb-3 ">
                Personal Information Collection
              </h2>
              <p className="text-base font-light leading-relaxed mb-4">
                We obtain your personal information directly from you or
                indirectly through your relationship with us. We may apply the
                information gathered from you to: Confirm your identity and
                contact information, open your trading account, set up your
                trading account and password, maintain your account live,
                contact you for account-related information, or other reasons.
                This information can also help us improve the quality of our
                service, provide personalized browsing experience, and market
                products, services, offers and other information that might be
                of interest to you.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                Most of the information we get is provided by you directly,
                including your name, mailing address, phone number, email and
                other contact information. In addition, we collect information
                that can identify you according to the law, including your
                passport number. We also collect personal background information
                when you open an account, including gender, date of birth, and
                employment status. Our regulators also require us to evaluate
                your trading experience, annual gross income, gross net worth
                and affordable venture capital, to assess your ﬁnancial
                situation.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                You can provide this information to us by submitting an account
                opening application and related documents, via our website.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                Information we collect from you indirectly: Your IP address,
                browser type, operating system, network provider, server clock,
                and transaction record. If you close an account, we will retain
                your information, but will only use it in compliance with
                regulatory requirements, as well as to contact you and provide
                the opportunity to re-open the account or participate in
                promotional activities.
              </p>
              <h2 className="text-3xl font-normal mb-3 ">
                Sharing Personal Information with Stockbanx Affiliates and
                Partners
              </h2>
              <p className="text-base font-light leading-relaxed mb-4">
                Stockbanx will not sell, license, lease or disclose your
                personal information to any members of the Stockbanx, including
                any of our ultimate holding companies and their subsidiary or
                third party for any reason other than the following:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="text-base font-light mb-2">
                  If your personal information is required to provide you with
                  the product or service you requested, or to provide you with
                  the product or service through our affiliates.
                </li>
                <li className="text-base font-light mb-2">
                  To improve the quality of our service, we may contract other
                  companies to handle certain internal aﬀairs, such as account
                  processing, execution, customer service, customer satisfaction
                  survey or other data collection related to our business. We
                  may also provide the database of our client information to
                  non-affiliated third parties, including name, address, phone
                  number, and email, to help us analyse and clarify customer
                  needs, product, and service information, or carry out general
                  marketing and market research. To ensure that such products
                  and services meet your needs and are available in an effective
                  and appropriate manner, we may share a portion of your
                  personal information with these non-affiliated third parties.
                </li>
              </ul>
              <p className="text-base font-light leading-relaxed mb-4">
                Stockbanx reserves the right to provide your personal
                information to third parties when required by law to provide
                relevant information to regulators, law enforcement agencies or
                other government agencies.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                Any time you choose to purchase a product or service from
                another company, for example by clicking on an advertisement on
                a website owned or controlled Stockbanx, the personal
                information you share with that company will no longer be
                subject to our privacy statement. We are not responsible for the
                privacy policies or content of the sites we link to, and we
                cannot control the use of the information you provide or
                collected by these sites and protect such information. Any time
                you choose to link to a joint site or visit a linked site, you
                may be asked to provide registration or other information.
                Please note that the information you provide will be submitted
                to a third party. You must first be familiar with the privacy
                policy published by the third party.
              </p>
              <h2 className="text-3xl font-normal mb-3 ">
                Security of Personal Information
              </h2>
              <p className="text-base font-light leading-relaxed mb-4">
                We use network security software, systems, and programs to
                provide you with a secure trading environment and protect your
                personal, financial, and trading information.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                When we open an account for you, you will be given a unique
                account number, username, and password. You are responsible for
                maintaining your account information, such as account number,
                username, and password. We strongly recommend that you do not
                disclose this information to anyone else. Our website and online
                account opening page use encryption technology to secure the
                transmission of information and use e-business certiﬁcation
                authority to authenticate our website, guarantee transactions
                and the safety of clients' online applications, to help you
                identify whether it is our website that is connected.
              </p>
              <h2 className="text-3xl font-normal mb-3 ">
                Storage of Personal Information and retention period
              </h2>
              <p className="text-base font-light leading-relaxed mb-4">
                We will hold personal information for as long as we have a
                business relationship with you. Once our relationship with you
                has come to an end, we will retain your personal information for
                additional number of years that enables us to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="text-base font-light mb-2">
                  maintain business records for analysis and/or audit purposes;
                </li>
                <li className="text-base font-light mb-2">
                  meet our regulatory requirements;
                </li>
                <li className="text-base font-light mb-2">
                  comply with record retention requirements under applicable
                  law;
                </li>
                <li className="text-base font-light mb-2">
                  defend or bring any existing or potential legal claims; and
                </li>
                <li className="text-base font-light mb-2">
                  deal with any complaints regarding the services.
                </li>
              </ul>
              <p className="text-base font-light leading-relaxed mb-4">
                If there is any information that we are unable to delete
                entirely from our systems for technical issues, we will put in
                place appropriate measures to prevent any further processing or
                use of the information.
              </p>
              <h2 className="text-3xl font-normal mb-3 ">
                Privacy Policy Changes and Exits
              </h2>
              <p className="text-base font-light leading-relaxed mb-4">
                Once Stockbanx updates the content of this privacy statement,
                the revised privacy statement will be posted to the website
                immediately. By opening our account, you agree that the
                electronic notice on the privacy statement issued on the website
                is the actual notice.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                In some cases, such as when we share your personal information
                with non-affiliated third parties, you can contact us through
                the following contact information to inform us that you wish to
                "exit" the privacy policy. If you have multiple accounts at
                Stockbanx, you must submit an exit request separately for each
                account.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                Any dispute over privacy claims must be governed by this notice
                and the customer agreement of Stockbanx. If you have any other
                questions not mentioned in this statement, please contact our
                customer service representative.
              </p>
              <h2 className="text-3xl font-normal mb-3 ">Legal Disclaimer</h2>
              <p className="text-base font-light leading-relaxed mb-4">
                Stockbanx may disclose your personally information as required
                by rules and regulations and when we believe that disclosure is
                necessary to protect our rights and/or to comply with any
                proceedings, court order, legal process to governmental,
                intergovernmental, or other regulatory bodies. Stockbanx shall
                not be liable for misuse or loss of personal information or
                otherwise on our website that that we do not have access to or
                control over. Stockbanx will not be liable for unlawful or
                unauthorised use of your personal information due to misuse or
                misplacement of your information/password by you or due to your
                acts or omissions or a person authorised by you.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default PrivacyPolicy;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

