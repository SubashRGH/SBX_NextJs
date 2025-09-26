import { FC, Fragment, useState } from "react";
import Container from "@/components/Container";
import Link from "next/link";
import { legalDocuments } from "@/constants";
import { useRouter } from "next/router";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PageBannerHeader from "@/components/PageBannerHeader";

const ConflictsOfInterestPolicy: FC = () => {
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
                  Conflicts of Interest Policy
                </h2>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">INTRODUCTION</h3>
                    <p className="text-base font-light leading-relaxed mb-4">
                      SB Global, operating the brand Stockbanx (
                      <a href="/" className="underline text-[#3b82f6]">
                        www.stockbanx.com
                      </a>
                      ), is an Investment Firm registered in the Union of
                      Comoros with company registration number 15825. The
                      Company's registered office is located at Hamchako,
                      Mutsamudu, Autonomous Island of Anjouan, Union of Comoros.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      SB Global adheres to the applicable legislative framework
                      under the Comoros Securities Act and related regulations.
                      The Company is committed to acting honestly, fairly, and
                      professionally in the best interests of its clients while
                      complying with relevant legal requirements.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      This Conflicts of Interest Policy (“Policy”) outlines the
                      procedures in place for identifying, managing, and, where
                      necessary, disclosing conflicts of interest to prevent
                      disadvantage to clients and to protect the Company’s
                      integrity and reputation.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      PURPOSE AND SCOPE
                    </h3>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The purpose of this Policy is to ensure that SB Global:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        Identifies potential conflicts of interest that may
                        arise in the course of its operations.
                      </li>
                      <li className="text-base font-light mb-2">
                        Implements robust procedures to responsibly manage and
                        mitigate conflicts of interest.
                      </li>
                      <li className="text-base font-light mb-2">
                        Discloses conflicts where appropriate to ensure
                        transparency with clients.
                      </li>
                    </ul>
                    <p className="text-base font-light leading-relaxed mb-4">
                      This Policy applies to SB Global’s managers, employees,
                      tied agents, and any other individuals or entities
                      directly or indirectly linked to the Company by control
                      (collectively referred to as "related persons") in all
                      interactions with clients.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      IDENTIFICATION OF CONFLICTS OF INTEREST
                    </h3>
                    <p className="text-base font-light leading-relaxed mb-4">
                      SB Global is committed to identifying and managing
                      conflicts of interest that may arise between:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          The Company and its clients.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          Two or more clients.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          The Company’s employees and its clients.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          Different departments within the Company.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          A conflict of interest may arise when:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                          <li className="text-base font-light mb-2">
                            The Company or a related person stands to gain
                            financially at the expense of a client.
                          </li>
                          <li className="text-base font-light mb-2">
                            The Company has an interest in the outcome of a
                            service or transaction that conflicts with the
                            client’s interest.
                          </li>
                          <li className="text-base font-light mb-2">
                            The Company or a related person has a financial or
                            other incentive to prioritize one client over
                            another.
                          </li>
                          <li className="text-base font-light mb-2">
                            The Company or its employees participate in business
                            activities similar to those of the client.
                          </li>
                          <li className="text-base font-light mb-2">
                            The Company receives an inducement from a third
                            party, other than standard commissions or fees,
                            related to services provided to clients.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      ORGANISATIONAL REQUIREMENTS
                    </h3>
                    <p className="text-base font-light leading-relaxed mb-4">
                      To prevent conflicts of interest from adversely affecting
                      client interests, SB Global has implemented the following
                      measures:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        Effective organizational and administrative
                        arrangements.
                      </li>
                      <li className="text-base font-light mb-2">
                        Internal controls and risk assessment procedures.
                      </li>
                      <li className="text-base font-light mb-2">
                        Segregation of duties to avoid overlapping
                        responsibilities.
                      </li>
                      <li className="text-base font-light mb-2">
                        Restrictions on the flow of confidential information
                        between departments (e.g., "Chinese walls").
                      </li>
                      <li className="text-base font-light mb-2">
                        Monitoring of employee activities to ensure adherence to
                        the Policy.
                      </li>
                      <li className="text-base font-light mb-2">
                        Procedures governing access to electronic data and
                        physical separation of departments.
                      </li>
                      <li className="text-base font-light mb-2">
                        Record-keeping of any gifts, inducements, or benefits
                        offered or received.
                      </li>
                      <li className="text-base font-light mb-2">
                        Clear guidelines to prohibit external business interests
                        conflicting with the Company’s interests unless
                        expressly approved by the Board of Directors.
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      MANAGEMENT OF CONFLICTS OF INTEREST
                    </h3>
                    <p className="text-base font-light leading-relaxed mb-4">
                      SB Global takes the following steps to manage conflicts of
                      interest effectively:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        Implementing a Best Execution Policy to ensure client
                        orders are executed with the best possible results.
                      </li>
                      <li className="text-base font-light mb-2">
                        Monitoring client communications to identify potential
                        conflicts.
                      </li>
                      <li className="text-base font-light mb-2">
                        Enforcing strict compliance procedures for all
                        employees, including regular training and acknowledgment
                        of the Policy.
                      </li>
                      <li className="text-base font-light mb-2">
                        Requiring employees to disclose personal transactions
                        and external business interests that may lead to
                        conflicts.
                      </li>
                      <li className="text-base font-light mb-2">
                        Establishing mechanisms to prevent or control the
                        exchange of information that could harm client
                        interests.
                      </li>
                      <li className="text-base font-light mb-2">
                        If conflicts of interest cannot be managed adequately,
                        SB Global will disclose the nature and source of the
                        conflict to the affected client(s).
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      REPORTING A CONFLICT OF INTEREST
                    </h3>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Employees and related persons are encouraged to report
                      potential conflicts of interest to the Compliance
                      Department. All reported cases are escalated to the
                      Company’s Senior Management for review. The process
                      involves:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        Identifying the nature of the conflict.
                      </li>
                      <li className="text-base font-light mb-2">
                        Assessing the material risks to clients and the Company.
                      </li>
                      <li className="text-base font-light mb-2">
                        Implementing corrective actions to mitigate the
                        conflict.
                      </li>
                      <li className="text-base font-light mb-2">
                        Documenting the steps taken and notifying clients where
                        applicable.
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      RECORD-KEEPING
                    </h3>
                    <p className="text-base font-light leading-relaxed mb-4">
                      SB Global maintains comprehensive records of:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        Identified conflicts of interest.
                      </li>
                      <li className="text-base font-light mb-2">
                        Actions taken to manage or mitigate conflicts.
                      </li>
                      <li className="text-base font-light mb-2">
                        Relevant communications and assessments.
                      </li>
                    </ul>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Records are retained for at least seven years to ensure
                      transparency and compliance with regulatory requirements.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">DISCLOSURE</h3>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Where a conflict of interest is identified and cannot be
                      effectively mitigated, SB Global will disclose the
                      conflict to the client before proceeding with any related
                      investment business. Disclosure will:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        Be presented in a durable medium (e.g., written notice
                        or email).
                      </li>
                      <li className="text-base font-light mb-2">
                        Include sufficient detail to enable the client to make
                        an informed decision.
                      </li>
                      <li className="text-base font-light mb-2">
                        If disclosure is insufficient to manage the conflict, SB
                        Global may opt not to proceed with the transaction or
                        activity.
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h3 className="text-2xl font-normal mb-2 ">
                      REVIEW AND MONITORING
                    </h3>
                    <p className="text-base font-light leading-relaxed mb-4">
                      SB Global regularly reviews and monitors this Policy to
                      ensure its effectiveness. The Policy is updated as needed
                      to reflect changes in the Company’s operations, regulatory
                      environment, or market conditions. Amendments are
                      communicated to clients via the Company’s website or
                      direct notifications.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      For further inquiries or additional information about this
                      Policy, please contact us at{" "}
                      <a
                        href="mailto:contact@stockbanx.com"
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

export default ConflictsOfInterestPolicy;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

