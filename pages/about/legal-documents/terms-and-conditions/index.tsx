import { FC, Fragment, useState } from "react";
import Container from "@/components/Container";
import Link from "next/link";
import { legalDocuments } from "@/constants";
import { useRouter } from "next/router";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PageBannerHeader from "@/components/PageBannerHeader";

const Tnc: FC = () => {
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
                <p className="text-base font-light leading-relaxed mb-4">
                  These terms and conditions (hereinafter referred to as Terms
                  &amp; Conditions) apply to this website ( “we” or “us” or
                  “our”). The terms “you”, “your” and “yours” mean you, the
                  person(s) accessing this Site and any party on whose behalf
                  you are doing.
                </p>
                <p className="text-base font-light leading-relaxed mb-4">
                  The access to our website, online trading, mobile trading
                  application or our branded social media sites or pages
                  (together “Online Services”) and any other electronic channel,
                  implies your acknowledgment and acceptance of all terms,
                  conditions, and notices contained or referenced in these Terms
                  &amp; Conditions, as well as acceptance of our policies and
                  guidelines, client onboarding documentation and application
                  forms (together hereinafter referred to as the “Online
                  Documents”).
                </p>
                <p className="text-base font-light leading-relaxed mb-4">
                  The use of our Online Services, including any patterns or
                  characteristics concerning your interaction note that they,
                  may be monitored, and recorded. By using our Online Services,
                  you expressly consent to such monitoring, tracking and
                  recording.
                </p>
                <p className="text-base font-light leading-relaxed mb-4">
                  You may not be eligible for all of the products or services
                  that we offer. Eligibility for account opening, for example is
                  determined according to our onboarding policies and procedures
                  and regulatory framework. Stockbanx reserves the right to
                  determine the eligibility for any product or service offered
                  by us.
                </p>
                <p className="text-base font-light leading-relaxed mb-4">
                  Please read these Terms &amp; Conditions carefully. It sets
                  out the terms and conditions under which we provide services
                  to you and contains important information concerning the Terms
                  and Conditions applicable to you. You may therefore wish to
                  obtain legal advice before you proceed any further.
                </p>
                <p className="text-base font-light leading-relaxed mb-4">
                  Where you use our services on behalf of a third party,
                  including your employer, you represent and warrant that you
                  are authorized by such third party to access and use the
                  services and to agree to these Terms &amp; Conditions on the
                  third party’ s behalf and the relevant documents and/or Power
                  of Attorney should be signed. Unauthorized use of our Online
                  Services, including but limited to unauthorized entry into the
                  online services, misuse of passwords, or misuse of any
                  information posted on any of our websites is strictly
                  prohibited.
                </p>
                <p className="text-base font-light leading-relaxed mb-4">
                  We provide services relating to complex financial derivative
                  products. The contracts on our online platform are traded on a
                  margin or leverage basis, a type of trading which carries a
                  high degree of risk to your capital. The buy and sell price
                  quoted of any contract you enter into with us is subject to
                  quick change and your profits and losses may be greater than
                  your initial amount invested. If you do not hold suHicient
                  funds to meet your margin requirements, then we may close your
                  open positions immediately and without notice and you may then
                  have to provide us with further funds to cover any losses.
                  Please read the risk disclosure in Schedule 1 carefully to
                  understand the risks of trading on a margin or leverage basis.
                  Trading in these products may not
                  <a href="/" className="underline text-[#3b82f6]">
                    www.stockbanx.com
                  </a>{" "}
                  3 be suitable for everyone and you should not trade our
                  products unless you understand and accept the risks of trading
                  on a margin or leverage basis and are able to sustain
                  potential losses.
                </p>
                <p className="text-base font-light leading-relaxed mb-4">
                  THIS IS A LEGALLY BINDING CONTRACT. DO NOT ACCEPT THIS
                  CONTRACT UNTIL YOU HAVE CAREFULLY READ ALL OF THE FOREGOING
                  COMPLETELY AND HAVE COMPLETED THE CUSTOMER ACCOUNT
                  APPLICATION.
                </p>
                <p className="text-base font-light leading-relaxed mb-4">
                  Your acceptance of these Terms &amp; Conditions acknowledges
                  that you have carefully read, in its entirety, and understood
                  Risk Disclosure in Schedule 1 and Trading Policies and
                  Procedures, and that you agree to all of the provisions
                  contained therein.
                </p>
                <p className="text-base font-light leading-relaxed mb-4">
                  Your acceptance of these Terms &amp; Conditions further
                  represents, warranties and certifies that the information
                  provided by you in the Customer Account Application is correct
                  and complete.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">INTRODUCTION</h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The online trading services are provided by SB Global (SB
                      Global, we, us, ours or our as appropriate) on and subject
                      to the following terms and conditions in these Terms &amp;
                      Conditions and the duly completed account opening form and
                      its accompanying documents (as updated or amended from
                      time to time) (together “Terms &amp; Conditions”) all of
                      which shall apply to all dealings between us and you.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We are authorized and regulated by the Offshore Finance
                      Authority (AOFA) in Anjouan (registration no. L15825/SBG).
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      These Terms &amp; Conditions shall supersede any previous
                      agreement, arrangement or understanding, whether written
                      or oral, between us as to the basis on which we provide
                      services to you. We may vary or amend these Terms &amp;
                      Conditions at any time upon notice to you, given or
                      confirmed in writing (which variation or amendment shall
                      be effective on the date specified in our notice or, if no
                      date is specified, immediately) which may include
                      displaying such notice on our website, online trading
                      platform and account management facility (collectively,
                      the Online Platform). Our services are provided subject to
                      any disclosures or disclaimers found in these Terms &amp;
                      Conditions or the Online Platform.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      A current and definitive copy of these Terms &amp;
                      Conditions (as amended from time time) will be always
                      available to you on the Online Platform.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You undertake (which is a type of contractually binding
                      promise) to notify us immediately of any changes to any
                      information you have provided to us in connection with
                      these Terms &amp; Conditions (which includes in relation
                      to the duly completed account opening form)
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      In accepting these Terms &amp; Conditions you authorize us
                      or any agent acting on our behalf to investigate your
                      identity or credit standing and to contact such banks,
                      financial institutions, and credit agencies as we or they
                      shall deem appropriate to verify such information. You
                      further authorise us or any agent to investigate any
                      current and past investment activity, and in connection
                      therewith, to contact such banks, brokers, and others as
                      we shall deem appropriate.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Note that any violation of these Terms &amp; Conditions
                      may result in termination of your Account with us.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We do not authorise and may NOT be used for purposes of,
                      offering or soliciting in an unauthorised manner. This
                      extends to anyone in any restricted jurisdictions and/or
                      any persons to whom such solicitations would be deemed
                      unlawful.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      It is your sole responsibility when accessing and/or using
                      the Online Platform, and oHering of financial contracts
                      through the Online Platform, to inform yourself of, and to
                      observe, any such restrictions imposed based on your
                      jurisdictions.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      In these Terms &amp; Conditions we have used defined words
                      and terms to make it easier to read. After a definition or
                      an explanatory word or phrase, we have included the
                      relevant defined word or term in bold between brackets.
                      Unless the context requires otherwise, all other uses of a
                      defined word or term will have the same meaning.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      <strong>Cancellation Rights:</strong>
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You have a right to cancel these Terms &amp; Conditions
                      within 14 days of the day you fully complete your account
                      opening form. If you would like to cancel these Terms
                      &amp; Conditions, please let your contact at Stockbanx,
                      using the contact details on our website:{" "}
                      <a href="/" className="underline text-[#3b82f6]">
                        https://www.stockbanx.com/
                      </a>
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The right to cancel these Terms &amp; Conditions only
                      relates to cancelling these Terms &amp; Conditions itself.
                      Cancellation will not affect your or our accrued rights,
                      indemnities, existing commitments, or any other
                      contractual provision intended to survive termination of
                      these Terms &amp; Conditions.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      No penalty will apply on cancellation. Cancellation will
                      not affect the completion of transactions initiated prior
                      to us receiving your notice of cancellation. In addition,
                      you will pay any fees and charges incurred up to the date
                      of cancellation and any additional expenses necessarily
                      incurred by us (or a third party) in cancelling these
                      Terms &amp; Conditions and any losses necessarily realised
                      in settling or concluding outstanding transactions and
                      transferring your funds back to you.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      In accordance with the Commodity Futures Trading
                      Commission (CFTC) forex regulations, Stockbanx does not
                      open accounts to US citizens and residents.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      If you do not exercise the right to cancel within the
                      requisite time, you will still be entitled to exercise
                      your right to terminate these Terms &amp; Conditions.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      SCOPE OF SERVICES
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We oHer a non-advisory, execution-only dealing service to
                      you in relation to transactions in Contracts for
                      Differences (CFDs) where the underlying investments or
                      products include: foreign exchange contracts; precious
                      metals; oil, commodities, indices, and any other financial
                      products we may offer through the Online Platform from
                      time to time (collectively Products). Subject to these
                      Terms &amp; Conditions and acceptance of your application
                      to open an Account with Stockbanx, the Company will
                      maintain one account in your name and will and provide
                      such other services and Products as Stockbanx may, in its
                      sole discretion, determine from time to time in the
                      future. Unless expressly stated otherwise in writing, all
                      contracts and other transactions entered into between
                      Stockbanx and you shall be governed by these Term &amp;
                      Conditions, as amended from time to time (including,
                      without limitation, Stockbanx Trading Policies and
                      Procedures).
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We will not advise you on the merits of any transaction
                      implemented by you nor will we manage or monitor any open
                      positions you may have in the Products. You acknowledge
                      that our execution of any order on your behalf does not in
                      any way imply that we have approved or recommended that
                      transaction or Product. We have set out various risk
                      disclosures in relation to our services and the Products
                      on the Online Platform and at Schedule 1 to these Terms
                      &amp; Conditions.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We are authorised as an Intermediary therefore all your
                      orders will be executed by such a counterparty/liquidity
                      provider as we may reasonably select.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Unless we have otherwise agreed in advance in writing, you
                      will enter each transaction as principal and not as agent
                      on behalf of someone else. We shall be responsible to you
                      alone and shall have no duties or obligations to any of
                      your underlying principals or customers. You alone will be
                      responsible for the performance of your obligations to us.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We reserve the right to modify, suspend or discontinue,
                      temporarily or permanently, all or any of our intermediary
                      services (in whole or in part) with or without notice. You
                      agree that we will not be responsible or liable to you (or
                      to any third party for whom you may be acting) for any
                      modification, suspension, or discontinuance of any of our
                      intermediary services.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">PRICE</h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We will provide you with “bid” and “offer” prices in
                      respect of each of the Products offered through the Online
                      Platform. We may also charge you a commission on each
                      transaction which shall be notified to you through the
                      Online Platform.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Each price published through the Online Platform shall be
                      valid until the earlier of its expiration time and the
                      time, if any, at which it is otherwise cancelled or
                      withdrawn by us. Each price shall be available for you to
                      enter into a transaction through us, up to a principal
                      amount not to exceed a maximum determined by us published
                      on the Online Platform or otherwise notified to you.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You acknowledge that the prices and maximum amounts we may
                      oHer to you may differ from prices and maximum amounts
                      provided to our other clients and may be withdrawn or
                      changed without notice. We may at our absolute discretion
                      and without prior notice to you immediately alter,
                      withdraw or refuse to deal on any price we may have
                      published or cease the provision of prices altogether in
                      some or all Products and for some or all delivery or
                      settlement dates at any time (for example, where you have
                      accepted a quotation from us or submitted an order at a
                      particular price, we cannot guarantee the price at which
                      your order is actually executed. This is commonly known as
                      “slippage”. However, we will adopt a consistent approach,
                      therefore on some occasions “slippage” will work in our
                      favour and on others it will work in your favour).
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Slippage is the difference between the expected price of a
                      trade, and the price at which the trade was actually
                      executed at. While Stockbanx endeavors to provide clients
                      with optimal execution, instances of slippage may arise,
                      particularly during periods of heightened volatility or
                      constrained liquidity. Variables such as prevailing market
                      conditions and specific order instructions may impact
                      execution outcomes. Consequently, Stockbanx explicitly
                      states that although the Company carries out certain
                      quality checks to monitor slippage it cannot guarantee
                      execution at requested rates, including take-profit and
                      stop-loss settings, and is not liable for any resulting
                      losses.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      ORDERS, TRANSACTIONS ANDS OPEN POSITIONS
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Unless otherwise agreed by us, all orders must be given to
                      us electronically through the Online Platform (although we
                      may in an emergency and at our absolute discretion accept
                      instructions by telephone).
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We may at our absolute discretion require confirmation of
                      any order in such form as we may specify.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      An order given to us by you, or on your behalf, shall not
                      take effect until received and accepted by us. An order
                      once received by us cannot be rescinded, withdrawn, or
                      amended without our express consent.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We shall be entitled to act on your behalf upon any order
                      or instruction we reasonably believe to have been given or
                      purporting to be given by you or any other person on your
                      behalf without further enquiry as to the authenticity of
                      the order or the instruction or the authority or identity
                      of any such person giving or purporting to give such order
                      or instruction.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We may, at our discretion refuse to accept any order from
                      you in whole or in part or following receipt of your order
                      refuse to act on it but should we do so we will use our
                      reasonable endeavors to notify you of any such refusal,
                      with or without giving any reasons. In addition, an order
                      which, for any reason, is not received by us in a way it
                      can be processed, including a failure of the Online
                      Platform to accept or process such instruction, shall be
                      deemed not to have been received by us.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The execution of an order by us shall constitute a binding
                      agreement between us on the terms of such executed order.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The procedure for entering orders is specified on the
                      Online Platform.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You acknowledge that following execution of any
                      transaction, you are solely responsible for making and
                      maintaining contact with us and for monitoring open
                      positions and ensuring that any further instructions are
                      given on a timely basis. In the event of any failure to do
                      so, we can give no assurance that it will be possible for
                      us to contact you and we accept no responsibility or
                      liability to you for loss suffered (or alleged to be
                      suHered) because of any failure by you to do so.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You agree to keep adequate records to demonstrate the
                      nature of orders submitted and the time at which such
                      orders are submitted.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We may, at our absolute discretion, require you to limit
                      the number of orders you may give us or the number or
                      value of open positions which you may have at any time
                      and/or only allow you to enter into closing transactions
                      or we may close out any one or more positions or reverse
                      transactions in order to ensure that any position limits
                      we may have imposed are maintained.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Upon submitting a withdrawal request you may be required
                      to submit documentation as required by applicable
                      “Anti-Money Laundering (“AML”) &amp; Know Your Customer
                      (“KYC”) Legislation” and/or any other similar rules and
                      regulations applicable to us. When a withdrawal or refund
                      is performed, we reserve the right (but shall under no
                      circumstances be obliged) to remit the funds to the same
                      remitter from, and by the same payment method through
                      which such funds were initially received by us. In that
                      connection, we reserve the right, at our sole discretion,
                      (i) to decline withdrawals via certain specific payment
                      methods, (ii) to require another payment method as the one
                      indicated in any withdrawal request, in which instance a
                      new withdrawal request may have to be submitted, and/or
                      (iii) to require that further documentation be submitted,
                      as required by applicable AML &amp; KYC Legislation - FATF
                      recommendations, local Comoros AML laws and/or any other
                      similar rules and regulations applicable to us, before
                      proceeding with any withdrawal request.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The Union of Comoros adheres to international anti-money
                      laundering (AML) and counterfinancing of terrorism (CFT)
                      standards, primarily guided by the recommendations of the
                      Financial Action Task Force (FATF). As a member of the
                      Eastern and Southern Africa Anti-Money Laundering Group
                      (ESAAMLG), a FATF-style regional body, the Comoros aligns
                      its regulations with FATF's global standards. These
                      include mandates for customer due diligence, suspicious
                      transaction reporting, record-keeping, and adopting
                      risk-based approaches.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      On a national level, AML and CFT compliance is governed by
                      Law No. 11-027/AU of 2011, which establishes robust
                      frameworks for financial institutions and entities
                      handling substantial transactions. The Financial
                      Intelligence Unit (FIU) of the Comoros, known locally as
                      the Cellule Nationale de Renseignements Financiers (CNRF),
                      oversees the implementation and enforcement of these laws.
                      Together, these measures ensure that businesses in the
                      Comoros operate within a framework that combats illicit
                      financial activities effectively.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      If we are unable to remit the funds, or any partial amount
                      thereof, to the same remitter from, and by the same
                      payment method through which such funds were initially
                      received by us, we reserve the right (but shall under no
                      circumstances be obliged) to transmit the funds via an
                      alternative payment method selected by us, at our sole
                      discretion, in any currency we deem fit (regardless of the
                      currency in which the initial deposit was made). Under
                      these circumstances, we shall not be responsible for any
                      transfer fees or charges charged by the receiver and/or
                      for any currency exchange rates resulting from the payment
                      of such amount.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Withdrawal requests that are accepted and approved by us
                      in accordance with these Terms &amp; Conditions are, in
                      principle, processed within one Business Day following the
                      receipt of the transfer request instructions. The amount
                      to be transferred reduces the balance of the relevant
                      account from which such transfer is to be made, when the
                      transfer request process is concluded. We reserve the
                      right (i) to decline a withdrawal request if the request
                      is not in accordance with the provisions of this Section,
                      or (ii) to delay the processing of the request if we are
                      not satisfied with the ancillary documentation submitted
                      with the withdrawal request.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You agree, when we so request, to pay any bank transfer
                      fees incurred when you are withdrawing funds from your
                      account or when funds are refunded by us to your
                      designated bank account. You are solely responsible for
                      the payments details you are providing us with and we do
                      not accept any responsibility for your funds, if the
                      payment details you have provided to us are incorrect or
                      incomplete. It is also understood that we do not accept
                      any responsibility for any funds that are not directly
                      deposited into our bank accounts.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      If you place a stop loss order and are stopped out
                      incurring a loss, you must cover the shortfall on your
                      account within one business day or within such other time
                      as we may agree with you in writing.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Should quoting and/or execution errors occur due to a
                      typographical error or other mistake in a quote or
                      indication, we will not be responsible or liable to you
                      for the resulting errors in your account balances. In the
                      event of a quoting and/or execution error, we reserve the
                      right to cancel orders, reverse transactions, close
                      positions and make any necessary corrections or
                      adjustments on the account involved (including in relation
                      to any “slippage”). Any dispute arising from such quoting
                      or execution errors (including any “slippage”) will be
                      resolved by us at our absolute discretion.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      In the case of a manifestly erroneous trade, we will at
                      our absolute discretion, at any time and without prior
                      written notice, reverse any profits or any swap fees
                      received due to a manifest error.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      If any regulated market, central clearing counterparty,
                      multilateral trading facility or other type of trading
                      platform (each a Market) (or intermediate broker or agent,
                      acting at the direction of, or as a result of action taken
                      by, a Market) or regulatory body takes any action which
                      affects a transaction, or becomes insolvent or is
                      suspended from operating, then we may take any action
                      which we, in our reasonable discretion, consider desirable
                      to correspond with such action or event or to mitigate any
                      loss incurred as a result of such action or event. Any
                      such action shall be binding on you. If a Market or
                      regulatory body makes an enquiry in respect of any of your
                      transactions, you agree to cooperate with us and to
                      promptly supply information requested by us.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      ONLINE PLATFORM
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      To use our Online Platform, you will need to set up your
                      access details (Access Details or Access Code). The use of
                      your Access Code will be deemed by us to be the use of the
                      Online Platform by you or someone with your knowledge and
                      consent.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      In relation to the Access Code, you acknowledge and
                      undertake that:
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You will be responsible for the confidentiality and use of
                      your Access Code;
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You will change your password regularly;
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Other than with our prior written consent, you will not
                      disclose your Access Code to other persons for any purpose
                      whatsoever;
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Without limiting the generality, we may rely on all
                      instructions, orders and other communications entered
                      using your Access Code, and you will be bound by any
                      resulting transaction entered or expense incurred on your
                      behalf; and
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You will immediately notify us on the telephone number
                      provided on our website if you become aware of loss,
                      theft, or disclosure to any third party or of any
                      unauthorized use of your Access Details.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You acknowledge that the Online Platforms provided for use
                      only by you or by others you have permitted to use the
                      Online Platform on your behalf.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      If you tell us or we believe that your Access Code is
                      being used without your knowledge by unauthorized persons
                      or has been disclosed by you to other persons without our
                      consent, we may without prior notice suspend or terminate
                      your right to use the Online Platform.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We shall not be responsible or liable to you for any loss,
                      liability or cost whatsoever arising from any unauthorised
                      use of your Access Details or the Online Platform. You
                      shall remain responsible for and on demand indemnify,
                      protect and hold us harmless from and against (i.e. you
                      will be responsible for and reimburse us on demand for)
                      all losses, liabilities, judgements, suits, actions,
                      proceedings, claims, damages and costs resulting from or
                      arising out of any act or omission by any person using the
                      Online Platform by using your Access Details, whether or
                      not you authorised such use.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We may at our absolute discretion introduce and require
                      additional levels of user identification and security. We
                      may change our security procedures at any time, and we
                      will tell you of any new procedures that apply to you as
                      soon as possible.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The Online Platform will normally be available during
                      normal business hours. Further details on operating times
                      are available on the Online Platform.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You shall be solely responsible for providing and
                      maintaining any equipment you use to access the Online
                      Platform and for making all appropriate arrangements with
                      any telecommunications suppliers or, where access to the
                      Online Platform is provided through a thirdparty server,
                      any such third party, necessary to obtain access to the
                      Online Platform. Neither we nor any company maintaining,
                      operating, owning, licensing, or providing services to us
                      in connection with, the Online Platform (Service
                      Providers) make any representation or warranty as to the
                      availability, utility, suitability or otherwise of the
                      Online Platform or any such equipment or arrangements
                      (i.e., neither we nor any third parties that we use are
                      responsible or liable to you for the same). Since we do
                      not control signal power, its reception or routing via the
                      internet, configuration of your equipment or that of any
                      third party or the reliability of its connection, we will
                      not be responsible for communication failures,
                      distortions, or delays when you are accessing the Online
                      Platform via the internet.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      For the avoidance of doubt, we shall have no
                      responsibility or liability to you (whether in contract or
                      in tort, including negligence) for damage (i.e. losses or
                      expenses or anything similar) which you may suffer because
                      of transmission errors, technical faults, malfunctions,
                      illegal intervention in network equipment, network
                      overloads, malicious blocking of access by third parties,
                      internet malfunctions, interruptions, or other
                      deficiencies on the part of internet service providers.
                      You will be responsible for all orders entered on your
                      behalf via the Online Platform and you will be fully
                      responsible and liable to us for the settlement of any
                      transaction arising from such use. You acknowledge that
                      access to the Online Platform may be limited or
                      unavailable due to such system errors, and that we reserve
                      the right upon notice to suspend access to the Online
                      Platform for this reason.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We shall have no responsibility or liability to you if any
                      viruses, worms, software bombs or similar items are
                      introduced into your equipment or systems via the Online
                      Platform or any software provided by us to you to enable
                      you to use the Online Platform, provided that we have
                      taken reasonable steps to prevent any such introduction.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You will ensure that no computer viruses, worms, software
                      bombs or similar items are introduced into our computer
                      system or network, and you will be responsible for and
                      will indemnify us on demand, protect and hold us harmless
                      for any loss that we suffer arising as a result of any
                      such introduction.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We shall not be responsible or liable to you for any act
                      taken by or on the instruction of a Market, clearing house
                      or regulatory body.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Internet connectivity delays and price feed errors
                      sometimes create a situation where the prices displayed on
                      the Online Platform do not accurately reflect the then
                      prevailing market rates. In the event of such delays and
                      errors, we reserve the right to cancel orders, reverse
                      transactions, close positions and make any necessary
                      corrections or adjustments on the account involved.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Delays in execution can arise from various factors,
                      including technical, confirmation delays from liquidity
                      providers (LPs), or inadequate liquidity for the traded
                      currency pair. Stockbanx assumes no responsibility for
                      delays in execution and any resulting consequences.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You will not use, or allow the use of, the Online
                      Platform:
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      In contravention of any laws (in any jurisdiction),
                      regulations or the AOFA Rules (including rules on market
                      abuse) or any other regulatory authorities to which you or
                      we may be subject;
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      In any way (including, without limitation, posting
                      information on the Online Platform where this facility is
                      available) which is defamatory, obscene, abusive, indecent
                      or menacing or which infringes any intellectual property
                      rights or breaches obligations of confidence, or which is
                      otherwise illegal or unlawful;
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      To introduce a software virus or other disruptive program
                      or do any act which would cause the Online Platform damage
                      or to become unavailable for use by others;
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      To solicit or encourage other internet websites to frame
                      or hypertext link direct to the Online Platform without
                      our prior written consent; or
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      In any way which is not authorised by us or is otherwise
                      in breach of these Terms &amp; Conditions.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We do not permit the use of the Online Platform for unfair
                      arbitrage activity, abusive trading or otherwise taking
                      advantage of internet delays, using any other manipulative
                      or abusive behaviour (such as the dissemination of false
                      or misleading market information through media, including
                      the internet, or by any other means with the intention of
                      moving the price of a product or the underlying property
                      or value) which could adversely impact on fair and orderly
                      trading on the Online Platform.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We regularly publish on the Online Platform updates of the
                      system, features available to clients as well as
                      information, declarations and warnings related to our
                      services. We may also send this information to your email
                      address. You undertake to read any such communications on
                      publication or receipt and regularly familiarise yourself
                      with this information and to inform us immediately of any
                      disagreement with any such information.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You will be responsible for obtaining and using a suitable
                      device, mechanism, or system (Device) to enable you to use
                      the Online Platform and you will be responsible for the
                      installation and proper use of any virus
                      detection/scanning program we may require from time to
                      time.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      When using the Online Platform, you must:
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Ensure that your Device is maintained in good order and is
                      suitable for use with the Online Platform;
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Run such tests and provide such information to us as we
                      shall reasonably consider necessary to establish that your
                      Device satisfies the requirements notified by us to you
                      from time to time;
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Carry out virus checks on a regular basis;
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Inform us immediately of any unauthorised access to the
                      Online Platform or any unauthorised transaction or
                      instruction of which you know of or suspect and, if within
                      your control, cause such unauthorised use to cease; and
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Not at any time leave unattended the Device from which you
                      have accessed the Online Platform or let anyone else use
                      the Device until you have logged off the Online Platform.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      In the event you become aware of a material defect,
                      malfunction, or virus in any Device through which you
                      access the Online Platform, or in the Online Platform
                      itself, you will immediately notify us of such defect,
                      malfunction or virus and cease all use of the Online
                      Platform until you have received permission from us to
                      resume use.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      All rights in patents, copyrights, design rights,
                      trademarks, and any other intellectual property rights
                      (whether registered or unregistered) relating to the
                      Online Platform remain vested in us or our licensors. You
                      will not copy, interfere with, tamper with, alter, amend,
                      or modify the Online Platform or any part or parts thereof
                      unless expressly permitted by us in writing; reverse
                      compile or disassemble the Online Platform; nor purport to
                      do any of the same or permit any of the same to be done,
                      except in so far as such acts are expressly permitted by
                      law. Any copies of the Online Platform must be made on
                      your behalf in accordance with law are subject to the
                      terms and conditions of these Terms &amp; Conditions. You
                      shall ensure that all the licensors’ trademarks and
                      copyright and restricted rights notices are reproduced on
                      any copies. You shall maintain an up-to-date written
                      record of the number of copies of the Online Platform made
                      by you. If we so request, you shall as soon as reasonably
                      practical, provide to us a statement of the number and
                      whereabouts of copies of the Online Platform. If you
                      receive any data, information or software via the Online
                      Platform other than that which you are entitled to receive
                      pursuant to these Terms &amp; Conditions, you will
                      immediately notify us and will not use, in any way
                      whatsoever, such data, information or software.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We may suspend or permanently withdraw the Online
                      Platform, by giving you reasonable written notice.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We have the right, unilaterally and with immediate effect,
                      to suspend or withdraw permanently your ability to use the
                      Online Platform, or any part thereof, without notice,
                      where we consider it necessary or advisable to do so, in
                      our discretion and in good faith. We may choose to do so,
                      for example, in the event of your non-compliance with an
                      applicable law or regulation or your breach of any
                      provisions of these Terms &amp; Conditions.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      In the event of a termination of the use of the Online
                      Platform for any reason, upon request by us, you shall, at
                      our discretion, return to us or destroy all hardware,
                      software and documentation we may have provided you in
                      connection with the Online Platform and any copies
                      thereof.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      ABUSIV TRADING ACTIVITIES
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Stockbanx is committed to maintaining the highest
                      standards of integrity and fairness in the trading
                      environment, we strictly prohibit any forms of abusive
                      behavior. There are many ways in the financial markets to
                      manipulate trading for example a typical manipulation is
                      pump-anddump, which is illegal in many countries. The
                      typical abusive activities are, including but not limited
                      to, market abuse, pricing abuse, swap-free abuse, latency
                      abuse, arbitrage abuse, scalping abuse, churning abuse,
                      system error abuse, credit/bonus abuse, promotion abuse,
                      multiple accounts abuse, etc. These transactions or orders
                      are often placed in a manner that deviates from typical
                      trading behavior, suggesting an intention to exploit the
                      features such as swap-free or credit bonus. In such
                      instances, traders may engage in trading practices that
                      differ from what they would normally pursue in the absence
                      of features.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Below, we detail specific practices that are considered
                      unacceptable and against our firm's policies.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      <strong>Market Abuse:</strong>
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      When Stockbanx transacts with clients, it retains the
                      right to buy or sell securities or underlying instruments
                      on exchanges or directly with other financial institutions
                      or liquidity providers involving the pertinent instrument.
                      Consequently, the Client's Transactions with Stockbanx may
                      influence the market for said instrument, in addition to
                      affecting Stockbanx own pricing strategies.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      <strong>Price Manipulation:</strong>
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Certain traders may engage in market manipulation tactics
                      by artificially inflating or deflating prices on specific
                      exchanges to influence the value of underlying assets.
                      These traders might strategically place orders with
                      Stockbanx either concurrently or in advance, intending to
                      capitalize on the resulting price discrepancies and
                      benefit from the manipulation of pricing.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      <strong>Swap-Free Account Abuse:</strong>
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Traders might misuse the swap-free account option by
                      placing strategically orders for specific instruments,
                      such as gold (XAU) or silver (XAG), in an attempt to
                      exploit the benefits of the swap-free account, not
                      necessarily for religious reasons or genuine trading
                      purposes.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      <strong>Latency Abuse:</strong>
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Exploiting trade execution delays, particularly through
                      the use of high-speed trading technologies, provides an
                      unfair advantage over participants with slower systems.
                      This enables traders to profit from discrepancies in the
                      timing of market data and trade execution, distorting
                      market fairness and efficiency.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      <strong>Arbitrage Abuse:</strong>
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      This involves traders that open accounts with Stockbanx
                      while also simultaneously opening accounts with other
                      brokers trading identical or diHerent products using
                      similar or diHerent instruments to secure unjust,
                      risk-free profits. This practice exploits price diHerences
                      between markets or platforms, potentially undermining
                      market fairness and integrity.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      <strong>Scalping and Abuse:</strong>
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      This strategy involves exploiting rapid fluctuations in
                      market prices, scalping entails executing numerous trades
                      within short timeframes (typically opening and closing
                      trades within three minutes or opening and closing with
                      "hedged positions" to avoid being seen as scalping) to
                      capitalize on small price movements. Often facilitated by
                      high-frequency trading, this can lead to unfair advantages
                      over other market participants.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      <strong>Churning Abuse:</strong>
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      This occurs when a broker or trader engages in excessive
                      trading activity in a Client's account primarily to
                      generate commissions, rather than to benefit the client.
                      This practice involves repeatedly buying and selling
                      securities or assets at a high frequency, often without
                      consideration for the client's investment objectives or
                      risk tolerance
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      <strong>System Error Abuse:</strong>
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Traders may exploit technical malfunctions or certain
                      loopholes in trading platforms to gain unfair advantages.
                      This abuse involves taking advantage of errors or
                      weaknesses in the system's operation to execute trades at
                      prices or under conditions that would not normally be
                      possible.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      <strong>Credit/Bonus Abuse:</strong>
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Credit or bonus abuse occurs when traders manipulate
                      promotional offers or incentives from brokerage firms or
                      trading platforms to their advantage, often employing
                      deceptive methods. Typical strategies include opening
                      multiple accounts across diHerent brokers to claim
                      promotional bonuses repeatedly and executing hedging
                      orders strategically. Some traders might also pursue
                      high-risk trading strategies solely to satisfy conditions
                      for bonus withdrawal. Such practices compromise the
                      integrity of promotional programs and can inflict
                      significant financial losses on providers.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      <strong>Multiple Accounts Abuse:</strong>
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Some traders engage in multiple accounts abuse by opening
                      several accounts under the same or different names. This
                      enables individuals or groups, including introducing
                      brokers (IBs), to manipulate market actions more
                      effectively. The abuse may involve executing coordinated
                      trades, opposing trades, or exploiting arbitrage
                      opportunities within the market. The primary objective
                      often revolves around maximizing leverage on bonuses or
                      credits offered by firms, thereby distorting market
                      fairness and trading conditions.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      <strong>Promotion Abuse:</strong>
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Promotion abuse occurs when individuals exploit
                      promotional offers or incentives such as higher leverage,
                      bonus, marketing expenses, cashback, etc, provided by the
                      firm for their own advantage. This can involve
                      manipulating the terms or conditions of promotions to
                      maximize personal gain, often through deceptive or
                      fraudulent means. Examples include exploiting loopholes in
                      promotional terms, creating multiple accounts to claim
                      bonuses multiple times, or engaging in prohibited
                      activities to qualify for promotional rewards. This
                      behavior not only violates the intended fairness of
                      promotional offerings but also creates significant
                      regulatory and financial repercussions for the firms
                      involved.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Due to ongoing technological advancements and swift
                      changes in market dynamics, this document cannot
                      comprehensively address all potential forms of abusive
                      trading activities. As such, it is explicitly stated that
                      the determination of whether a client has engaged in
                      abusive trading activities rests solely within the
                      discretion of the Stockbanx Risk Department, irrespective
                      of any circumstances. In the event that Stockbanx
                      identifies any abusive activities, Stockbanx reserves the
                      right, without prior notice:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        to revoke the "Swap Free" status or any status from
                        certain promotions from all trading accounts of the
                        client that have been granted such privileges.
                        Additionally, Stockbanx may recover and adjust any
                        related un-accrued swaps, interest expenses, and costs
                        concerning any of such client’s Swap Free accounts
                        during the duration for which such accounts were
                        converted into Swap Free accounts.
                      </li>
                      <li className="text-base font-light mb-2">
                        to cancel all “credit/bonus” immediately without prior
                        notice.
                      </li>
                      <li className="text-base font-light mb-2">
                        to cancel and/or reverse all trades held in the client's
                        trading accounts, along with revoking all profits or
                        losses incurred, including any related IB commission,
                        and subsequently terminating all trading accounts
                        associated with the client.
                      </li>
                      <li className="text-base font-light mb-2">
                        To close the client’s account and freeze the fund for
                        further investigation.
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      TRANSACTION CONFIRMATIONS AND ACCOUNT STATEMENTS
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Following the execution of an order for your account, we
                      will confirm that transaction via the Online Platform
                      (Confirmation) on or before the next business day after
                      the execution but failure to do so will not affect the
                      validity of the transaction.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We will post details of your positions and account
                      activity via the Online Platform on the first day of each
                      month for the previous month’s activity. Account
                      information may include Confirmations, statements of
                      profits and losses, and any other information required to
                      be provided under applicable Comorian law and regulations
                      governing financial services (together Account
                      Information). Posting of Account Information via the
                      Online Platform will be deemed delivery of Confirmations
                      and account statements. We may at our absolute discretion
                      withdraw or amend any Account Information at any time. You
                      agree that we are under no obligation to provide
                      Confirmations in hard copy. The Account Information posted
                      via the Online Platform (save if manifestly incorrect)
                      shall be conclusive evidence of your transactions and
                      shall be binding on you if not objected to immediately
                      upon receipt, with such objection confirmed in writing
                      (including email or similar electronic mail) and (in any
                      event) no later than one business day after the Account
                      Information is posted via the Online Platform.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You are allowed to a Single Transaction / Single Deposit
                      of 300$ maximum, prior completing the onboarding process
                      and/or verifying your account. Please note that you will
                      not be able to trade if you do not complete the necessary
                      process and/or provide the details required. In case you
                      would like to proceed with a withdraw request, you will
                      still need to provide your Identification Documents and
                      Proof of Address and/or any other details requested by the
                      Company
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      CONSENT TO ELECTRONIC COMMUNICATION
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You consent to communications being made via electronic
                      media. If you no longer wish to communicate via electronic
                      media, you must notify us and revoke this consent in
                      writing. Communications sent through the Online Platform
                      or by electronic media shall be treated as satisfying any
                      legal requirement that a communication should be signed
                      and in writing, to the extent permitted by applicable law.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">MARGIN</h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You shall provide to us and maintain with us such amount
                      of money in respect of and as security for your actual,
                      future and contingent or potential liabilities to us
                      (Liabilities) in such amounts and in such forms as we, at
                      our absolute discretion, may require (Margin). We may
                      change our Margin requirements at any time. We may at our
                      discretion provide you with credit lines to allow you to
                      trade with lower or no Margin. For the avoidance of doubt
                      neither trading on Margin nor using credit lines is not a
                      form of consumer credit.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Any requirement for Margin must be satisfied in such
                      currency and within such time as may be specified by us
                      (in our absolute discretion) or, if none is specified,
                      immediately
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You are responsible for always maintaining appropriate
                      arrangements with us for the receipt and communication of
                      information regarding Margin. If you fail to provide
                      Margin to us in the required time, we may automatically
                      close out your open positions and we will be entitled to
                      exercise our rights
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Unless otherwise agreed by us, you charge to us all Margin
                      provided by you to us under these Terms &amp; Conditions
                      as a continuing security for your Liabilities under or
                      pursuant to these Terms &amp; Conditions (including under
                      every transaction from time to time governed by these
                      Terms &amp; Conditions).
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You agree to execute such further documents and to take
                      such further steps as we may reasonably require perfecting
                      our security interest over, be registered as owner of or
                      obtain legal title to the Margin, secure further the
                      Liabilities, enable us to exercise our rights.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You may not withdraw or substitute any property which is
                      subject to our security interest without our prior
                      consent.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      SETTLEMENT DATE, ROLLOVER AND OFFSET INSTRUCTIONS
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      All positions held at the end of each business day may be
                      subject to automatic roll- over. We may charge you a fee
                      in respect of each such position that is rolled over. The
                      fees that we charge will be published on the Online
                      Platform.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      In the absence of clear and timely instructions from you,
                      you agree that in order to protect your interests and
                      ours, we are authorised, at our absolute discretion and at
                      your expense, at the end of each business day, to close
                      any open position, rollover or offset all or any open
                      position(s), enter into offsetting transactions or to make
                      or receive delivery on your behalf upon such terms and by
                      such methods as we may deem reasonable in the
                      circumstances.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      For the avoidance of doubt, we will not arrange delivery
                      of any applicable underlying investment or product which
                      is linked to any Product (including any foreign currency)
                      unless we deem it necessary or if we otherwise agreed in
                      writing with you to do so and, accordingly, unless such
                      arrangements have been made by us any open positions
                      (where applicable) shall be closed and the resulting
                      profit or loss credited or debited to your account with
                      us.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Rollover, involving the simultaneous closure and reopening
                      of positions to circumvent currency delivery, incurs
                      interest charges or credits post 5:00 PM New York Time.
                      Clients are informed that swap rates vary among brokers,
                      including Stockbanx, and are determined based on factors
                      such as liquidity costs and overall exposure. Stockbanx
                      explicitly disclaims any liability for rollover costs
                      incurred by clients.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">CLIENT MONEY</h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We may hold funds you pay to us with banks located outside
                      of Anjouan and/ or outside Comoros Islands. The legal and
                      regulatory regime applying to any such bank will be
                      diHerent from that of Anjouan and/ or Comoros Islands and
                      in the event of the insolvency or any other equivalent
                      failure of the bank, your money may be treated differently
                      from the treatment which would apply if the money were
                      held in Anjouan and/ or Comoros Islands. We will not be
                      responsible or liable to you for the solvency, acts or
                      omissions of any bank or other third-party holding money.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We are authorised to convert money in your account
                      (including for Margin) into and from such foreign currency
                      at a rate of exchange determined by us based on the then
                      prevailing money market rates. In such circumstances, we
                      will not be responsible or liable to you for any loss
                      suffered by you because of such action (although, we will
                      use reasonable endeavours to only convert such funds as
                      may prudently be required to cover Liabilities in respect
                      of relevant transactions).
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Where any obligations owing to us from you are due and
                      payable to us, we may cease to treat as client money so
                      much of the money held on your behalf as equals the amount
                      of those obligations in accordance with applicable Comoros
                      laws and regulations relating to client money. You agree
                      that we may apply that money in or towards satisfaction of
                      all or part of those obligations due and payable to us.
                      Any such obligations become immediately due and payable,
                      without notice or demand by us, when incurred by you or on
                      your behalf
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You agree that we shall be entitled to apply money you
                      hold with us in or towards satisfaction of all or any part
                      of any Liabilities which are due and payable.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      TOTAL TITLE TRANSFER ARRANGEMENTS
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      This clause shall not apply if you are a professional
                      client and that the terms will apply to you for all or any
                      of your use of our services.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You shall transfer to us absolute title to any funds
                      transferred to us (including Margin) as required by us for
                      the purpose of securing or covering your present or
                      future, actual or contingent or prospective obligations to
                      us (Title Transfer Funds). Any such Title Transfer Funds
                      so transferred to us shall be transferred free and clear
                      of any lien, pledge, claim, charge, encumbrance, or other
                      security interest whatsoever. Consequently, we shall not
                      owe any fiduciary duties to you in respect of such Title
                      Transfer Funds. Upon transfer to us, Title Transfer Funds
                      shall become our absolute property and you shall not
                      retain any equity, right, title or interest in such Title
                      Transfer Funds.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Subject to our rights under these Terms &amp; Conditions
                      and each transaction, we shall have a contractual
                      obligation to repay you an amount of money equivalent to
                      the Title Transfer Funds to which you may be entitled (or
                      in our absolute discretion assets the value thereof) when
                      it is no longer necessary for us to hold the Title
                      Transfer Funds. Our repayment obligations shall be reduced
                      to the extent that (i) we are entitled to apply such
                      money, or set-off its repayment obligation, against any of
                      your obligations to us, whether under any transaction,
                      these Terms &amp; Conditions or otherwise; and/or (ii) any
                      market, intermediate broker, bank or other third party to
                      whom we have transferred money as Margin in relation to
                      transactions, fails (whether as a result of insolvency or
                      otherwise) to return an equivalent amount of money to us.
                      Unless we agree otherwise in writing, you shall not be
                      entitled to receive interest on Title Transfer Funds.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We shall not be liable to you for the loss of any Title
                      Transfer Funds which is the direct or indirect result of
                      the bankruptcy, insolvency, liquidation, receivership,
                      custodianship, or assignment for the benefit of creditors
                      of any bank, another broker, market, clearing
                      organisation, or similar entity
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You may request a cancellation of the Title Transfer Funds
                      arrangements in which case we may terminate these Terms
                      &amp; Conditions and an amount of money (or in our
                      absolute discretion assets to the value thereof)
                      equivalent to the Title Transfer Funds due to you will be
                      returned to you.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      PROFITS, LOSSES, AND INTEREST CHARGES ON OPEN POSITIONS
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      For any open position held by you, we shall credit your
                      account with profits, or debit your account for losses,
                      interest and fees incurred as described on the Online
                      Platform.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      FEES AND CHARGES
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You shall pay to us such fees and charges at such rates as
                      published on the Online Platform or as otherwise notified
                      by us to you from time to time. These will include
                      transaction charges, interest, and charges in respect of
                      automatic rollover of your positions. In addition to this
                      you shall be responsible for the payment of any other
                      charges that we have notified to you that may be incurred
                      because of the provision of our services to you.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You acknowledge and agree that where we deduct
                      adjustments, commissions and various other fees from your
                      account, such deductions may affect the amount of equity
                      in the account to be applied against the Margin
                      requirements. Your positions are subject to liquidation,
                      if the deduction of commissions, fees or other charges
                      causes your account to have an insuHicient balance to
                      satisfy the Margin requirements.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You acknowledge and agree that we may make or receive a
                      fee, commission, monetary or non-monetary benefit
                      (“Benefit”) to or from any other person in connection with
                      our service to you and that such Benefit when paid to a
                      person by us can be made either as a one oH or as an
                      ongoing payment. For one-off Benefits, we will notify you
                      of such Benefit at the beginning of our business
                      relationship upon request. If the Firm agrees to pay an
                      ongoing Benefit to another person, such Benefit will be
                      calculated by multiplying your trading volume by a
                      percentage agreed between the Firm and such person. If
                      this applies to you, we will provide you with separate
                      information regarding such fee, commission, monetary or
                      non-monetary benefit at the end of each year. Full details
                      can be provided in the meantime upon request.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      All fees and charges shall be regarded as being due and
                      payable immediately. Any sums due to us may be deducted by
                      us from the proceeds of any transaction or debited from
                      your account(s) with us. In the event of late payment by
                      you, overdue amounts shall bear interest at a rate that we
                      shall reasonably determine as notified to you in the
                      Account Information.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      For the purposes of any calculation hereunder, we may
                      convert amounts denominated in any currency into such
                      other currency as we may from time to time specify, at
                      such rate prevailing at the time of the calculation as we
                      shall reasonably select.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      If we receive or recover any amount in respect of any of
                      your obligations in a currency other than that in which
                      such amount is payable, whether pursuant to a judgment of
                      any court or otherwise, you will be responsible for and
                      indemnify us on demand and hold us harmless from and
                      against any cost (including costs of conversion) and loss
                      suffered by us as a result of receiving such amount in a
                      currency other than the currency in which it is due.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      CONFLICTS OF INTEREST
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You should be aware that when we enter a transaction with
                      or for you, we or our directors, oHicers, employees,
                      agents and aHiliated entities (together Associates) or
                      Service Providers, may have an interest, relationship or
                      arrangement that is material in relation to the
                      transaction concerned. Should such a conflict of interest
                      arise we will seek to resolve the conflict in such a way
                      as we believe is in your best interests in accordance with
                      our conflicts of interest policy (as amended from time to
                      time).
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Full details of our Conflicts of Interest Policy are
                      available on our website. Our Conflicts of Interest Policy
                      is an internal policy only; it does not form part of these
                      Terms &amp; Conditions and is not intended to be
                      contractually binding or to impose any obligations on us
                      which we would not otherwise have whether under these
                      Terms &amp; Conditions or the FAIS Act.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      LIABILITY AND LOSSES
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You shall be responsible or liable on our written demand
                      for all direct losses, damage, costs, and expenses (Direct
                      Losses) and all indirect losses, damage, costs and
                      expenses and other similar liabilities (such as the loss
                      of an opportunity to gain) (Indirect Losses) incurred by
                      us or any of our Associates as a consequence of your use
                      of our services (including the Online Platform) or your
                      breach of any of the terms of these Terms &amp;
                      Conditions. However, you shall not be responsible or
                      liable to us for any Direct Losses or Indirect Losses
                      (together Losses) incurred by us to the extent that they
                      are caused by our breach of these Terms &amp; Conditions,
                      negligence, willful default, or fraud.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You shall be responsible or liable for all losses incurred
                      by you if you shared your access data (password and login
                      details) with any third party, including an introducing
                      broker or money manager whether such third party was
                      notified to us or not.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Neither we nor any Associates accept any responsibility or
                      liability to you in any circumstances for an Indirect
                      Losses that you may incur.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We will carry out our duties pursuant to these Terms &amp;
                      Conditions with reasonable skill, care and diligence and
                      in accordance with the instructions and authority you have
                      given us. If we do this, neither we nor any Associates
                      accept any responsibility or liability for your Losses
                      which arise from the provision of our services to you or
                      otherwise pursuant to these Terms &amp; Conditions.
                      However, we shall be responsible or liable to you for any
                      Direct Losses you incur where we have not carried out our
                      duties pursuant to these Terms &amp; Conditions with
                      reasonable skill, care and diligence or in accordance with
                      any reasonable or proper instructions and authority you
                      have given us, or to the extent such Direct Losses are
                      caused by our wilful default or fraud. Without limiting
                      the foregoing, to the maximum extent permitted by
                      applicable law, in no event will Stockbanx' aggregate
                      liability arising out of or relating to these Terms or
                      your use of Data exceed twelve (12) months fees paid to
                      us. If any limitations in this paragraph are unenforceable
                      as written in any instance, then such limitations will
                      apply to the maxi- mum extent permitted by applicable law.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Neither we nor you shall be responsible or liable to each
                      other for any delay in performing, or failure to perform
                      any obligation under these Terms &amp; Conditions if such
                      delay or failure results from events, circumstances or
                      causes beyond the affected party’s reasonable control (for
                      example, including because of any acts of God or acts of
                      terrorism). In such circumstances, the aHected party shall
                      be entitled to a reasonable extension of the time required
                      to perform such obligations.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Without limiting the general scope of the previous
                      sub-clauses, neither we nor any Associates shall be
                      responsible or liable to you for any Losses incurred by
                      you arising out of, or in connection with your use of any
                      data or information obtained, downloaded or supplied in
                      relation thereto, including (without limitation) any loss
                      of, or delay in the transmission of, instructions or the
                      inability to make instructions or access the Online
                      Platform whether due to breakdown or failure of
                      communication facilities or otherwise.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Without limiting the general scope of the previous
                      sub-clauses, we will exercise reasonable care in our
                      choice of nominees or agents, and we will monitor their
                      continuing suitability. If we do this, neither we nor any
                      of our Associates shall be responsible or liable to you
                      for any Losses incurred by you arising from any act or
                      omission of any nominees or agents.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You are responsible for the tax implications or treatment
                      of transactions entered by you pursuant to these Terms
                      &amp; Conditions.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      If you hold an account with us with another person(s) (in
                      the case of joint account holders) the responsibilities or
                      liabilities to us of each such person shall be joint and
                      several (i.e. we can hold any one or group of you solely
                      responsible or liable to us, or we can hold all of you, as
                      a group, responsible or liable to us ) and we may act upon
                      orders and instructions received from any one person
                      (unless you notify us in writing to the contrary) who is,
                      or who appears to us to be, such a person.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Nothing in these Terms &amp; Conditions shall exclude or
                      restrict our responsibility or liability to you in respect
                      of a breach by us or any of our Associates under the
                      regulatory system (as defined under the Union of Comoros
                      Offshore Financial Authority Laws &amp; Rules) or as
                      otherwise may be prohibited by Law.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">RISK WARNING</h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      HIGH RISK INVESTMENT Trading is speculative and risky.
                      Foreign Exchange and CFD Trading is not suitable for all
                      investors. You represent, warrant and agree that you
                      understand these risks, that are willing and able,
                      financially and otherwise, to assume the risks of Foreign
                      Exchange and CFD Trading and that a potential loss of your
                      entire account balance will not have an impact on your
                      life style. The high leverage and low margin associated
                      with Foreign Exchange Trading can result in significant
                      losses due to price changes in Foreign Exchange and CFD
                      Contracts. Company’ s margin policies may require that
                      additional funds should provided to your account and that
                      you must immediately meet such margin requirements.
                      Failure to maintain the Minimum Margin Requirement may
                      result in the liquidation of any open positions, resulting
                      in a loss to your account.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      WE STRONGLY RECOMMEND THAT ALL CLIENTS AND POTENTIAL
                      CLIENTS SHOULD READ OUR RISK DISCLOSURE STATEMENT BEFORE
                      APPLYING FOR AN ACCOUNT WITH US AND BEFORE THEY START
                      TRADING USING OUR SERVICES. IF YOU DON’ T UNDERSTAND THEM,
                      PLEASE DO NOT ACCESS SUCH INSTRUMENTS, CONTACT OUR
                      CUSTOMER SERVICE AND/OR SEEK AN INDEPENDENT ADVICE.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      FOREX CFDs AND OTHER CFDs ARE OVER THE COUNTER (OTC)
                      MARKET DERIVATIVE INSTRUMENTS, MEANING THAT THE TRADES YOU
                      ARE ENTERING INTO, ARE NOT CONDUCTED ON A REGULATED
                      EXCHANGE, BUT IN A BILATERAL MODEL WITH YOUR BROKER. AS A
                      RESULT, Stockbanx’ S INTERESTS MAY BE IN CONFLICT WITH
                      YOURS.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      REPRESENTATIONS AND WARRANTIES
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You represent and warrant to us that (i.e., you are making
                      statements and promises on which we will rely when we
                      provide services to you. You therefore need to make sure
                      that they are accurate as you will be responsible and
                      liable to us or to third parties, including regulatory
                      bodies, if they are not):
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        If you are an individual, you are at least 18 years of
                        age, of sound mind and have the legal capacity to enter
                        into a legally binding agreement with us;
                      </li>
                      <li className="text-base font-light mb-2">
                        If you share your Access Code with any third parties,
                        you shall notify us immediately in writing via e-mail;
                      </li>
                      <li className="text-base font-light mb-2">
                        If you are a corporation, you are duly incorporated and
                        validly existing under the laws of the country of your
                        incorporation and that (i) you have approved the opening
                        of an account with us by a board resolution certified by
                        the corporation’ s oHicers; (ii) execution and delivery
                        of these terms &amp; conditions and all contracts and
                        other transactions contemplated hereunder and
                        performance of all obligations contemplated under these
                        Terms &amp; Conditions and all contracts and other
                        transactions contemplated hereunder have been duly
                        authorized by you and (iii) each person executing and
                        delivering these Terms &amp; Conditions and all
                        contracts and other transactions contemplated hereunder
                        on behalf of you performing the obligations contemplated
                        under these Terms &amp; Conditions and any contract and
                        other transaction contemplated hereunder on behalf of
                        you, has been duly authorized by you to do so.
                      </li>
                    </ul>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You will provide us with all the information you have
                      (including those that a third party may maintain on your
                      behalf) on your underlying clients (if any) as soon as
                      possible upon receiving a request from us for such
                      information to be used either for our own internal
                      purposes or further to receiving a request from a
                      regulatory body or following a court order (which we may
                      or may not be able to share with you at the time of the
                      request). For the avoidance of doubt, where you have
                      underlying clients or otherwise act as an agent on behalf
                      of others, we will only have a contract with and owe
                      obligations to you and we will not contract with or owe
                      any obligations to any of your underlying clients or
                      principals.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You have read and understood the provisions contained in
                      these Terms &amp; Conditions, including, without
                      limitation, Stockbanx Risk Disclosure Statement and
                      Trading Policies and Procedures, you will review these
                      Terms &amp; Conditions each time they are amended. You
                      will not affect any opening transaction in your account
                      unless you understand Stockbanx revised these Terms &amp;
                      Conditions, and you agree that in effecting any opening
                      transaction you are deemed to represent that you have read
                      and understood Stockbanx revised Terms &amp; Conditions as
                      in effect at the time of such opening transaction.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You agree to comply with all applicable law. You may not
                      use your personal account with You agree to comply with
                      all applicable law. You may not use your personal account
                      with Stockbanx for any illegal activity.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You will use the Services offered by us pursuant to these
                      Terms &amp; Conditions honestly, fairly and in good faith.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      If you breach any warranty or representation made under
                      these Terms &amp; Conditions, we may close any orders or
                      trades that you have made, and/or close or freeze your
                      account.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      These Terms &amp; Conditions, each transaction and the
                      obligations created under them both are binding upon you
                      and enforceable against you in accordance with their terms
                      (subject to applicable principles of equity and do not and
                      will not violate the terms of any regulation, order,
                      charge or agreement by which you are bound).
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Except as otherwise agreed by us with prior written
                      consent, you are the sole beneficial owner (i.e., no one
                      else has any kind of legal ownership rights) of all Margin
                      or money you transfer under these Terms &amp; Conditions,
                      free and clear of any security interest (i.e., you have
                      not given some form of rights to the money to someone
                      else);
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Regardless of any subsequent determination to the
                      contrary, trading in the Products is suitable for you and
                      that you are aware of the risks involved with such
                      transactions;
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The information disclosed to us in the duly completed
                      account opening form (including any financial including
                      financial information and information regarding your
                      trading experience and investment) is true, accurate and
                      complete in all material respects (save for any change to
                      such information notified to us in writing); and you will
                      notify us promptly of any changes in such information.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      If you have underlying clients or otherwise act as an
                      agent for another person, you have complied with all
                      relevant laws and regulations and you have performed all
                      customer identification, including AML, “KYC“, “customer
                      due diligence” and other due diligence checks in respect
                      of each such underlying client or person (natural or
                      otherwise) that would be expected of a reputable firm
                      operating in the financial services sector and that you
                      maintain the information for your underlying clients up to
                      date; and
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We represent and warrant to you that:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        If you are a retail client, the Firm will adhere to the
                        negative balance protection rules ensuring that you do
                        not lose more than the balance held on your account even
                        if the markets move quickly against your positions;
                      </li>
                      <li className="text-base font-light mb-2">
                        If market movements lead you to suHer losses greater
                        than the balance maintained in your account and your
                        account balance falls below zero, we will proceed to
                        bring your balance back to zero at no cost to you.
                      </li>
                    </ul>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Each representation and warranty shall be deemed repeated
                      on each occasion you place an order or enter a transaction
                      with or through us.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">COVENANTS</h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You covenant to us that (i.e., you make a contractually
                      binding promise to us that you will do things on which we
                      will rely when we provide services to you. You therefore
                      need to make sure that you keep those promises as you will
                      be responsible and liable to us if you do not):
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          You will always obtain and comply, and do all that is
                          necessary to maintain in full force and effect, all
                          authority, powers, consents, licenses, and
                          authorizations;
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          You are willing and able, upon request, to provide us
                          with information in respect of your financial position
                          domicile, or other matters as requested;
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          You will promptly notify us of the occurrence of any
                          bankruptcy or insolvency event or anything similar;
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          You will:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                          <li className="text-base font-light mb-2">
                            Comply with all applicable law in relation to these
                            Terms &amp; Conditions and any transaction, so far
                            as they are applicable to you; and
                          </li>
                          <li className="text-base font-light mb-2">
                            Use all reasonable steps to comply with all
                            applicable laws and regulations in relation to these
                            Terms &amp; Conditions and each transaction, where
                            such applicable laws and regulations do not apply to
                            you, but your cooperation is needed to help us
                            comply with our obligations;
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You will not send orders or otherwise take any action that
                      could create a false impression of the demand for or value
                      of a Product or send orders which you have reason to
                      believe are in breach of applicable law or regulations.
                      You shall observe the standard of behaviour reasonably
                      expected of persons in your position and not take any step
                      which would cause us to fail to observe the standard of
                      behaviour reasonably expected of persons in our position;
                      and
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Upon demand, you will provide us with such information as
                      we may reasonably require evidencing the matters referred
                      to in this clause.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      CONFIDENTIALITY AND DATA PROTECTION
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We will ask you to provide us with the relevant personal
                      data and/or information in order for us to be able to:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        Carry out our obligations as per these Terms &amp;
                        Conditions
                      </li>
                      <li className="text-base font-light mb-2">
                        Carry out our everyday business activities and dealings
                        with you;
                      </li>
                      <li className="text-base font-light mb-2">
                        Compile statistical analysis of the pages of the Online
                        Platform visited;
                      </li>
                      <li className="text-base font-light mb-2">
                        Monitor and analyse our business;
                      </li>
                      <li className="text-base font-light mb-2">
                        Crime prevention, legal and regulatory compliance;
                      </li>
                      <li className="text-base font-light mb-2">
                        Market and develop other products and services;
                      </li>
                      <li className="text-base font-light mb-2">
                        Transfer any of our rights or obligations under these
                        Terms &amp; Conditions; and
                      </li>
                      <li className="text-base font-light mb-2">
                        Process any personal data for other related purposes.
                      </li>
                    </ul>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You are providing us with your consent to use your Data
                      only for the above purposes.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      If you choose to withhold non-sensitive personal data
                      about an Individual which we have requested, we will not
                      be able to give you access to the Online Platform.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Neither we nor any of our Associates or Service Providers
                      will disclose any personal data we or they may collect
                      about an Individual to third parties, except:
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      To the extent that we or they are required to do so as per
                      these Terms and Conditions, by any applicable law or
                      regulation;
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Where there is a duty to the public to disclose;
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Where our legitimate business interests require
                      disclosure; or
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      At the request or with consent of the Individual or to
                      persons.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We or our Associates or Service Providers may disclose
                      personal data to those who provide services to us or our
                      Associates or our Service Providers or act as our or our
                      Associates’ or our Service Providers’ agents, to any
                      person to whom we or our Associates or our Service
                      Providers transfers or proposes to transfer any of our or
                      their rights obligations under these Terms &amp;
                      Conditions and to licensed credit reference agencies or
                      other organizations that help us or our Associates or our
                      Service Providers and others make credit decisions and
                      reduce the incidence of fraud or in the course of carrying
                      out identity, fraud prevention or credit control checks.
                      In addition, we may share personal data about an
                      Individual with our Associates and Service Providers for
                      business purposes, such as servicing client accounts and
                      informing clients about new products and services, as
                      permitted by the Protection of Personal information Act
                      No. 4 of 2013.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      An Individual may have certain rights of access to some or
                      all the personal data we collect and hold about the
                      Individual at the time of request, or to have inaccurate
                      information corrected, under applicable data protection
                      laws. If the Individual wishes to exercise such rights
                      (solely at their own cost and expense), the Individual
                      should contact us in writing, and you may be requested to
                      provide further information to assist us in complying with
                      such request.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We or our Associates or a Service Provider may record or
                      monitor telephone conversations between you and us or our
                      Associates or a Service Provider for security, compliance
                      with law, training purposes and to maintain and improve
                      the quality of our services. Such telephone conversations
                      may be used by us as evidence in the event of any dispute
                      between us.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We may use cookies or IP address tracking devices on the
                      Online Platform to administer the Online Platform, store
                      password and usernames, to monitor visits to pages on the
                      Online Platform on this and other occasions from your
                      terminal, to personalise the Online Platform service to
                      you and to track and facilitate browsing through the
                      Online Platform. A cookie is a piece of data stored on
                      your hard drive containing information about you relating
                      to the use of the Online Platform. IP addresses may be
                      linked to your personal data and by tracking these
                      addresses, we would be obtaining such personal data.
                      Access to the Online Platform is conditional on acceptance
                      by you of any cookies and IP address tracking devices
                      described in and for the purposes explained in this
                      clause. By accepting these Terms &amp; Conditions, you
                      acknowledge that you understand the broad nature of
                      cookies and IP address tracking devices and the purposes
                      for which they will be used by us. Please refer to our
                      cookie policy (which is available on the Online Platform)
                      for more information.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You acknowledge and accept that any services provided
                      through the Online Platform involve transmissions over the
                      internet and that such transmissions are therefore subject
                      to the internet’ s inherent risks. Whilst we acknowledge
                      our responsibility to take reasonable security
                      precautions, you also acknowledge and accept that, as with
                      any network, you may also be exposed to unauthorised
                      programs transmitted by third parties, electronic
                      trespassing and/or the failure of information and data to
                      reach their intended destinations and/or erroneous receipt
                      or misdirection of such information. Although our, our
                      Associates’ and our Service Providers’ privacy and
                      security features are designed to reduce these risks, we
                      cannot guarantee their elimination. You therefore
                      acknowledge that no transmission via the Online Platform
                      shall be guaranteed to be confidential and that we shall
                      not be responsible or liable to you for any breach of
                      confidence arising because of such event.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Any queries about the use of confidential or personal data
                      by us should be referred to our Compliance Officer.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      DEFAULT, NETTING AND SET-OFF
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The following shall be construed as Events of Default if
                      at any time:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          You fail to comply fully and immediately with any
                          obligation to make any payment to us or close any open
                          position on the due settlement date or when required
                          by us;
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          You default in any other obligation to us under these
                          Terms &amp; Conditions or in relation to any
                          transaction or commit any breach of any other
                          obligations under these Terms &amp; Conditions
                          including but not limited to satisfying any Margin
                          Call;
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          Any representation or warranty made by you was or has
                          become or subsequently would, if repeated at any time,
                          be incorrect;
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          Due to market fluctuations or for any other reason we
                          shall at our absolute discretion consider that we hold
                          insufficient Margin to meet your Liabilities;
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          We consider it necessary or desirable to prevent what
                          we consider is or might be a violation by you;
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          (Where you are a corporate) you commence a voluntary
                          case or an involuntary case is commenced against you
                          or other procedure seeking or proposing liquidation,
                          reorganisation, an arrangement or composition, a
                          freeze or moratorium, or other similar relief with
                          respect to you or your debts under any bankruptcy,
                          insolvency, regulatory, supervisory, or similar law
                          (including any corporate or other law with potential
                          application to you, if insolvent), or seeking the
                          appointment of a trustee, receiver, liquidator,
                          conservator, administrator, custodian or other similar
                          official of you or any substantial part of your
                          assets; or if you take any corporate action to
                          authorise any of the foregoing; and, in the case of a
                          reorganization, arrangement or composition, we do not
                          consent to the proposals;
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          (Where you are a corporate) you are dissolved, or, if
                          your capacity or existence is dependent upon a record
                          in a formal register, the registration is removed or
                          ends, or any procedures are commenced seeking or
                          proposing your dissolution, removal from such a
                          register, or the ending of such a registration;
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          (Where you are an individual) you (or if you are joint
                          account holders if any of you) die, become of unsound
                          mind, are unable to pay your debts as they fall due or
                          are bankrupt or insolvent, as defined under any
                          bankruptcy or insolvency law applicable to you; or any
                          indebtedness of yours is not paid on the due date
                          therefore, or becomes capable at any time of being
                          declared, due and payable under agreements or
                          instruments evidencing such indebtedness before it
                          would otherwise have been due and payable, or any
                          suit, action or other proceedings are commenced, or
                          any action is taken for any execution, any attachment
                          or garnishment, or distress against, or an
                          encumbrancer takes possession of, the whole or any
                          part of your property or assets (tangible and
                          intangible); or
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          We reasonably anticipate that any of the foregoing may
                          occur; then we may exercise our rights, except in the
                          case of the occurrence of an Event of Default (each a
                          Bankruptcy Event of Default), in which case the
                          provisions shall apply
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          We may on or at any time following the occurrence of
                          an Event of Default, cancel any outstanding orders,
                          terminate our services and liquidate all or any of
                          your open positions (the Liquidation Date).
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          Should a Bankruptcy Event of Default occur we shall be
                          deemed to have exercised our rights immediately before
                          the time of the occurrence of the Bankruptcy Event of
                          Default.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          On the Liquidation Date and following it we shall (on,
                          or as soon as reasonably practicable after, the
                          Liquidation Date) close all your open positions and
                          apply all monies held by us towards the costs of such
                          closures.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          If because of the actions taken by us, your account is
                          in credit, we shall pay such money to such account as
                          you direct as soon as reasonably practicable. If there
                          is insuHicient money in your account to cover the
                          actions undertaken by us, the differences between the
                          amount of money in your account and the cost of
                          closing your open positions will be immediately due
                          and payable to us.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <p className="text-base font-light leading-relaxed mb-4">
                          Our rights are in addition to, and not in limitation
                          or exclusion of, any other rights which we may have
                          under these Terms &amp; Conditions or otherwise
                          whether by agreement or operation of law. In
                          particular and without prejudice to the provisions we
                          are authorised and entitled, without notification to
                          you and at our absolute discretion, to take such
                          action to protect our own position, including without
                          limitation, one or more of the following actions
                          (whether in whole or in part):
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                          <li className="text-base font-light mb-2">
                            Cancel all or any unexecuted orders;
                          </li>
                          <li className="text-base font-light mb-2">
                            Close out, perform, cancel or, if applicable,
                            abandon any of your open positions or enter
                            oHsetting positions;
                          </li>
                          <li className="text-base font-light mb-2">
                            Combine accounts, set-oH between accounts or convert
                            one currency into any other currency; or
                          </li>
                        </ul>
                        <p className="text-base font-light leading-relaxed mb-4">
                          Satisfy any obligation that you may have to us, either
                          directly or by way of guarantee or suretyship, out of
                          any of your monies in our custody or control.
                        </p>
                        <p className="text-base font-light leading-relaxed mb-4">
                          We or any Associate of ours may (but is not obliged
                          to), without prior notice to you, set-off any
                          obligation owing by you or any of your associates to
                          us or an Associate of ours (whether arising under
                          these Terms &amp; Conditions or any other associate of
                          yours) (whether or not arising under these Terms &amp;
                          Conditions or any other document or obligation of any
                          kind, matured or contingent, monetary or non-monetary
                          and irrespective of the currency, place of payment or
                          place of booking of the obligation), so that only the
                          net amount
                        </p>
                        <p className="text-base font-light leading-relaxed mb-4">
                          If an obligation (arising either as part of the normal
                          operation of your account or as part of you breaching
                          these Terms &amp; Conditions) is unascertained or
                          unliquidated, we may in good faith estimate the
                          obligation and set-off in respect of the estimate,
                          subject to the relevant party accounting to the other
                          when the obligation is ascertained or liquidated. For
                          the avoidance of doubt, we or any Associate of ours
                          may set-off in respect of an obligation owing by you
                          or any of your associates even when that obligation is
                          disputed by you or one of your associates and has not
                          yet been finally established by settlement or
                          adjudication. If the obligations are in diHerent
                          currencies, we may convert the obligations at the Spot
                          Rate
                        </p>
                        <p className="text-base font-light leading-relaxed mb-4">
                          You will indemnify us for any loss, damage, costs,
                          claims and demands arising as a result of the
                          operation of this set-off. The rights conferred on us
                          are continuing and outstanding liabilities are not to
                          be considered satisfied by any partial repayment.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      INTELLECTUAL PROPERTY RIGHTS
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The Online Platform may incorporate third party data,
                      text, images, software, multi-media materials and other
                      content (Third Party Content) and references to the term
                      “Online Platform” shall be taken to include all materials,
                      content and services made available from time to time on
                      the Online Platform whether viewed on screen or downloaded
                      to another computer including, without limitation, Third
                      Party Content.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The Online Platform is protected by copyright, database
                      rights and other intellectual property rights. You
                      acknowledge that we and/or third parties retain all right,
                      title, and interest in and to the Online Platform. Use of
                      the Online Platform does not confer any ownership rights
                      in the Online Platform.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Except as otherwise specifically agreed in writing or to
                      the extent necessary for you to view the Online Platform
                      in accordance with these Terms &amp; Conditions, you shall
                      not:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        Copy the Online Platform in whole or in part (except to
                        make backup copies solely for disaster recovery
                        purposes);
                      </li>
                      <li className="text-base font-light mb-2">
                        Display, reproduce, create derivative works from,
                        transmit, sell, distribute, rent, lease, sublicense,
                        time-share, lend or transfer or in any way exploit the
                        Online Platform in whole or in part;
                      </li>
                      <li className="text-base font-light mb-2">
                        Embed the Online Platform into other products;
                      </li>
                      <li className="text-base font-light mb-2">
                        Use the Online Platform for any file sharing;
                      </li>
                      <li className="text-base font-light mb-2">
                        Create embedded links from any software program to the
                        Online Platform;
                      </li>
                      <li className="text-base font-light mb-2">
                        Remove or obscure any of our copyright notices or those
                        of any of our Associates;
                      </li>
                      <li className="text-base font-light mb-2">
                        Use any of our trademarks, service marks, domain names,
                        logos, or other identifiers or those of any of our
                        third-party suppliers; or Save to the extent permitted
                        by law, reverse engineer, decompile, disassemble, or
                        access the source code of the Online Platform
                      </li>
                    </ul>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">LINKS</h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The Online Platform may contain links to other websites
                      which are not controlled by us or any of our Associates
                      and contain material produced by independent third
                      parties. The owners of such linked websites do not
                      necessarily have any relationship, commercial or
                      otherwise, with us. The existence of a link from the
                      Online Platform to any third-party website does not
                      constitute a recommendation or other approval by us or any
                      of our Associates or Service Providers of such website its
                      content or any provider thereof. Any opinions or
                      recommendations expressed on third party websites are
                      those of the relevant provider and are not the opinions or
                      recommendations of ours or any of our Associates. Neither
                      we nor any of our Associates accepts any responsibility
                      for content provided on any website that may be accessed
                      through links on the Online Platform.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">TERMINATION</h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You may request to terminate these Terms &amp; Conditions
                      at any time, by notice in writing to us, provided that you
                      do not have any open position(s) do not have any
                      outstanding liabilities to us. We may terminate the
                      provision of our services to you upon notice in writing to
                      you at any time, and once you have received the relevant
                      termination notice, you will have 10 days to close your
                      open positions. In case you do not close your position we
                      will have the right to proceed and close your open
                      position on the 10th day.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Termination will not aHect your or our accrued rights,
                      indemnities, existing commitments, or any other
                      contractual provision intended to survive termination of
                      these Terms &amp; Conditions.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Termination will not aHect the completion of transactions
                      initiated prior to us receiving your notice of
                      termination. In addition, you will pay any fees and
                      charges incurred up to the date of termination and any
                      additional expenses necessarily incurred by us (or a third
                      party) in terminating these Terms &amp; Conditions and any
                      losses necessarily realised in settling or concluding
                      outstanding transactions and transferring your funds back
                      to you.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">NOTICES</h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Notices and any other communications may be transmitted
                      via the Online Platform, or via email. All communications
                      so sent, whether by posting on the Online Platform, mail,
                      email, or otherwise, shall be deemed transmitted and
                      received when posted on the Online Platform, deposited in
                      the mail, or when received by a transmitting agent.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      COMPLAINTS RESOLUTION PROCEDURE
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      For details of our complaint’s resolution procedure,
                      please visit our website at Legal Documents
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      COMMUNICATION
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You expressly consent to us using our Online Platform or
                      website{" "}
                      <a href="/" className="underline text-[#3b82f6]">
                        https://www.stockbanx.com/
                      </a>{" "}
                      as we deem appropriate, to inform you of information about
                      us and of changes to such information.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We may also communicate with you via our website and
                      applications, by email, telephone, newsletter, electronic
                      chats, and/or any other means of communication.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We will use the contact details you gave us when you
                      opened your account, and as updated by you to us.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      If your details change, including your email address,
                      contact numbers, name, home address, country of residence
                      or nationality, you must tell us as soon as possible. If
                      you do not let us know, you might not receive important
                      information from us.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Our Terms &amp; Conditions with you, and all information,
                      statements and notifications between you and us, will be
                      in English and we will communicate in English.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      If we provide you with documents in another language, and
                      there is an inconsistency, the English version will
                      prevail.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      If you have any questions about the Terms &amp;
                      Conditions, or would like to speak to us, you can contact
                      us in the following ways:
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Email:{" "}
                      <a
                        href="mailto:contact@stockbanx.com"
                        className="underline text-[#3b82f6]"
                      >
                        contact@stockbanx.com
                      </a>
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">GENERAL</h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The provision of our services to you is subject to all
                      applicable laws, regulations and other provisions or
                      market practices to which we are subject (collectively
                      applicable laws or regulations). If any conflict arises
                      between these Terms &amp; Conditions and any applicable
                      laws or regulations, the latter shall prevail. We are not
                      required to do anything or refrain from doing anything
                      which would infringe any applicable laws or regulations
                      and may do whatever we consider necessary to comply with
                      them.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Outstanding rights and obligations and transactions shall
                      survive the termination of these Terms &amp; Conditions
                      and shall continue to be governed by its provisions and
                      the clauses agreed between us in relation to such
                      transactions until all obligations have been fully
                      performed.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      If any provision of these Terms &amp; Conditions shall be
                      found by any court or administrative body of competent
                      jurisdiction to be invalid or unenforceable, such
                      invalidity or unenforceability shall not affect the other
                      provisions of these Terms &amp; Conditions which shall
                      remain in full force and effect.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Any failure by us (whether continued or not) to insist
                      upon strict compliance with any provision of these Terms
                      &amp; Conditions shall not constitute nor be deemed to
                      constitute a waiver by us of any of our rights or
                      remedies. The rights and remedies conferred upon us under
                      these Terms &amp; Conditions shall be cumulative and the
                      exercise or waiver of any part thereof shall not preclude
                      or inhibit the exercise of any other additional rights and
                      remedies.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      No action, regardless of form, arising out of or in
                      connection these Terms &amp; Conditions, or otherwise
                      existing between the parties, may be brought by a party
                      more than two years after the cause of action is
                      discovered. Discovery of action must be reported within
                      two years of termination of these Terms &amp; Conditions.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">
                      GOVERNING LAW AND JURISDICTION
                    </h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      The Agreement is governed by and shall be construed in
                      accordance with the Laws of Anjouan and the Laws of the
                      Islands of Comoros. Each party irrevocably submits to the
                      exclusive jurisdiction of Anjouan and Islands of Comoros
                      courts to settle any suit, action or other proceedings
                      relating to these Terms &amp; Conditions (proceedings).
                      Nothing in these Terms &amp; Conditions shall prevent us
                      from bringing proceedings against you in any jurisdiction.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Each party irrevocably agrees to waive any objection which
                      it may have at any time to the laying of venue of any
                      proceedings brought in Anjouan and/or Islands of Comoros
                      courts and agrees not to claim that such proceedings have
                      been brought in an inconvenient forum or that such court
                      does not have jurisdiction over it.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      In the event of any inconsistency, conflict, or
                      discrepancy between the terms of this document and any
                      prior agreements, whether written or oral, express or
                      implied, the provisions of this agreement shall prevail.
                    </p>
                  </li>
                  <li className="text-base font-light mb-2">
                    <h2 className="text-3xl font-normal mb-3 ">Schedule 1</h2>
                    <p className="text-base font-light leading-relaxed mb-4">
                      <strong>RISK DISCLOSURE STATEMENT</strong>
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      You are strongly advised to carefully read the risk
                      disclosures and the warnings contained in this Schedule
                      before applying for an account with us and before you
                      begin trading using our services.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      If English is not your first language, you should seek
                      advice from professionals, such as a solicitor,
                      accountant, or financial advisor, who can explain the
                      technical and financial terms included in these terms
                      &amp; conditions before undertaking any trading. You are
                      aware that giving access to the use of your account by
                      third parties may lead to losses and fees accumulated on
                      your account which you may not be directly aware or in
                      control of. In such instances Stockbanx Limited will have
                      no responsibility or liability for the losses, financial
                      or otherwise that take place.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Trading CFDs is not suitable for everyone, involves high
                      risk and can result in a complete loss of your funds. The
                      purpose of this Schedule is to advise you of some of the
                      risks associated with trading CFDs. It is not intended
                      that this Schedule includes a full and complete
                      description of all the risks involved in trading CFDs. You
                      should ensure that your decision to use our services is
                      made on an informed basis and that you are happy with the
                      information available to you. If you are unsure or do not
                      understand the contents of this Schedule in particular,
                      please seek independent financial advice.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Trading Forex and CFDs involves significant risk to your
                      capital, and it is essential to trade only with funds you
                      can afford to lose. Before participating in any trading
                      activities with Stockbanx, clients must thoroughly assess
                      their investment objectives, financial situation, and
                      level of expertise. The Company does not and cannot
                      guarantee the initial capital of the Clients’ portfolio or
                      its value at any time or any money invested in any
                      financial instrument.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Transactions undertaken through the dealing services of
                      the Company may be of a speculative nature. Large Losses
                      may occur in a short period of time, equaling the total of
                      funds deposited with the Company
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      For a detailed explanation of how our services operate
                      kindly read the Legal Documents on our website. You should
                      NOT commence trading with us until you have read and
                      understood the documents referred to above.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Prior to trading CFDs you must be aware of the risks
                      involved. The high degree of leverage associated with
                      these types of investments means that the degree of risk
                      compared to other financial products is higher. Leverage
                      (or Margin trading) may work for or against you, resulting
                      in a substantial loss as well as a substantial gain.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Past performance of these types of investments does not
                      guarantee any future results. You must bear in mind any
                      commission and tax liabilities you will personally incur.
                      Stockbanx accepts no liability or responsibility for any
                      tax you may be required to pay on any profits made on our
                      Online Platform.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Trading on Margin involves a high level of risk and is not
                      suitable for all investors. The high degree of leverage
                      can work against you as well as for you. It is your sole
                      responsibility to monitor your open positions and you
                      should monitor them closely.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      Before trading, you should carefully consider your
                      investment objectives, level of financial experience, and
                      risk appetite. If you are at all unsure as to the
                      suitability of the products oHered by us, please seek
                      independent financial advice. There is always a
                      relationship between high reward and high risk. Any type
                      of market or trade speculation that can yield unusually
                      high returns also poses a high risk to capital. Only
                      surplus funds should be placed at risk and if you are not
                      able to sustain trading losses then you should not trade
                      CFDs.
                    </p>
                    <p className="text-base font-light leading-relaxed mb-4">
                      We recommend that ALL CLIENTS AND PROSPECTIVE CLIENTS
                      familiarize themselves with CFDs, Margin requirements,
                      trading tools, our trading platforms, and financial
                      markets in general by taking advantage our FREE TO USE and
                      RISK-FREE Demonstration account (Demo Account). Please see
                      our website
                      <a href="/" className="underline text-[#3b82f6]">
                        https://www.stockbanx.com/
                      </a>{" "}
                      for details. It is noted however that this document and
                      the Demo Account cannot and do not disclose or explain all
                      of the risks involved when dealing in Financial
                      Instruments on a fair and non-misleading basis. As it is
                      impossible for this Risk Disclosure to contain all the
                      risks and aspects involved in trading CFD’ s you need to
                      ensure that your decision is made on a well educated and
                      informed basis, but as a minimum you should take the below
                      in consideration.
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="text-base font-light mb-2">
                        <h3 className="text-2xl font-normal mb-2 ">
                          CFDs IN GENERAL
                        </h3>
                        <p className="text-base font-light leading-relaxed mb-4">
                          A CFD is an agreement between a ‘buyer’ and a ‘seller’
                          to exchange the diHerence between the current price of
                          an underlying asset (currencies, commodities, indices,
                          shares etc.) and its price when the contract is
                          closed. (This can be subject to change, depending on
                          the terms of the underlying asset className and or
                          product).
                        </p>
                        <p className="text-base font-light leading-relaxed mb-4">
                          CFDs can be likened to futures contracts, which can be
                          entered into in relation to certain foreign
                          currencies, indices, precious metals, oil,
                          commodities, or other financial instruments. However,
                          unlike other futures, CFD contracts can only be
                          settled for the difference of the closing value and
                          the opening value of the CFD. Transactions in CFDs may
                          also have a contingent liability and you should be
                          aware of the implications of this as set out below.
                        </p>
                        <p className="text-base font-light leading-relaxed mb-4">
                          All our CFDs are synthetic contracts, which means that
                          clients do not have any right to the underlying
                          instrument or thing or the rights which are attached
                          to the same, unless specifically stated in the CFD.
                          This includes no right to any underlying reference
                          shares or attached voting rights.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <h3 className="text-2xl font-normal mb-2 ">
                          Foreign Markets
                        </h3>
                        <p className="text-base font-light leading-relaxed mb-4">
                          CFDs relating to foreign markets involve different
                          risks from the client’ s native markets. In some
                          cases, risks will be greater. The potential for profit
                          or loss from transactions relating to foreign markets
                          will be affected by fluctuations in foreign exchange
                          rates. Such enhanced risks include the risks of
                          political or economic policy charges in a foreign
                          jurisdiction, which may substantially and permanently
                          alter the conditions, terms, marketability, or price
                          of a foreign currency.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <h3 className="text-2xl font-normal mb-2 ">
                          Risk Reducing Orders or Strategies
                        </h3>
                        <p className="text-base font-light leading-relaxed mb-4">
                          The placing of certain orders (e.g., ‘’ stop loss’’ or
                          ‘‘stop limits’’ orders) that are intended to limit
                          losses to certain amounts may not always work because
                          market conditions or technological limitations may
                          make it impossible to execute such orders at the
                          required prices or at all. Should a client trade using
                          such orders or strategy they must do so accepting this
                          risk.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <h3 className="text-2xl font-normal mb-2 ">Leverage</h3>
                        <p className="text-base font-light leading-relaxed mb-4">
                          CFDs carry a high degree of risk. The gearing and
                          leverage that is obtainable with CFD trading means
                          that you only need to place a small deposit (Margin)
                          to commence trading with us although this small
                          deposit may result in large losses or large gains.
                          Highly leveraged transactions are subject to
                          significant changes in value because of relatively
                          small changes in the value or level of the underlying
                          instrument or thing on which the price of the CFD is
                          based.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <h3 className="text-2xl font-normal mb-2 ">
                          Contingent Liability Transactions
                        </h3>
                        <p className="text-base font-light leading-relaxed mb-4">
                          CFDs are leveraged or margined transactions requiring
                          you to make a series of payments against the contract
                          value, instead of paying the entire contract value
                          immediately. You may sustain a total loss of the
                          Margin you deposit with us to establish or maintain a
                          position. We revalue your open positions continuously
                          during each business day, and any profit or loss is
                          immediately reflected in your account and a loss may
                          result in you being called upon to deposit additional
                          Margin on short notice, in order to maintain your open
                          positions. We may change the rates of Margin and/or
                          notional trading requirements at any time (including
                          over weekends/bank holidays or in abnormal market
                          conditions), which may also result in a change to the
                          Margin you are required to maintain. If you do not
                          always maintain sufficient Margin on your account
                          and/or provide such additional funds within the time
                          required, your open positions may be closed at a loss,
                          and you may be liable for any resulting deficit.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <h3 className="text-2xl font-normal mb-2 ">
                          Widened Spreads Awareness
                        </h3>
                        <p className="text-base font-light leading-relaxed mb-4">
                          Under certain conditions, spreads may widen beyond
                          customary levels, notably during periods of market
                          uncertainty, heightened volatility, or constrained
                          liquidity (e.g., market opening or rollover at 5:00 PM
                          ET). It's crucial for clients to understand that
                          widened spreads can negatively impact all positions in
                          their accounts. Our firm explicitly disclaims any
                          responsibility for widened spreads and their potential
                          effects on trading outcomes
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <h3 className="text-2xl font-normal mb-2 ">
                          CFDs are Over-the Counter (OTC) Derivatives
                        </h3>
                        <p className="text-base font-light leading-relaxed mb-4">
                          CFDs are not regulated by a recognized or designated
                          investment exchange and are known as
                          “Over-the-Counter” (OTC) transactions as they will not
                          be executed on a recognized or designated investment
                          exchange. You will enter directly into a contract with
                          us in respect of the underlying financial instrument
                          or thing on which the price of the CFD is based. All
                          open positions with us must be closed with us and
                          cannot be closed with any other party. This may make
                          it diHicult for you to close a position at a price
                          that you are happy with or at all (for example, if we
                          experience technical prob- lems with our Online
                          Platform and it is unavailable, or we become
                          insolvent). Trading in OTC financial transactions may
                          expose you to greater risks than trading on a
                          regulated market because there is no market on which
                          to close out your open positions and prices and other
                          conditions are set by us subject to any
                          legal/regulatory requirements. OTC transactions may
                          increase the liquidity risk and introduce other
                          significant risk factors: it may be impossible, for
                          example, to assess the value of a position resulting
                          from an OTC transaction or to determine the risk
                          exposure. Also, bid prices and oHer prices need not be
                          quoted by us and, even where they are, we may find it
                          diHicult to establish a fair price particularly when
                          the relevant exchange or market for the underlying is
                          closed or suspended. You are also exposed to the risk
                          of our default.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <h3 className="text-2xl font-normal mb-2 ">Prices</h3>
                        <p className="text-base font-light leading-relaxed mb-4">
                          The prices posted on our Online Platform may not
                          necessarily reflect the broader market. We will select
                          prices that we feel are appropriate to determine
                          margin requirements and in periodically marking to
                          market the positions in your account and closing out
                          such positions. Although we expect that these prices
                          will be reasonably related to those available on what
                          is known as the interbank market or any appropriate
                          trading venue or other financial market (Reference
                          Market), prices we use may vary from those available
                          to banks and other participants in the Reference
                          Market. Consequently, we may exercise considerable
                          discretion in setting Margin requirements and
                          collecting Margin from you. As the CFDs are in part
                          related to the underlying (and any Reference Market),
                          you should ensure you are aware of the risks involved
                          in the underlying including currency fluctuation,
                          volatility, and gapping (a sudden price shift which
                          can be caused by many factors including but not
                          exclusively, economic events, market announcements and
                          periods where trading in the underlying does not take
                          place). A nonguaranteed stop will not protect you
                          against this risk as it is not immediate and only
                          triggers an order to close the position at the nearest
                          available price.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <h3 className="text-2xl font-normal mb-2 ">
                          Position Monitoring
                        </h3>
                        <p className="text-base font-light leading-relaxed mb-4">
                          It is your responsibility to always monitor the
                          positions you have opened, and you should always be in
                          a position to do so. Whilst we will attempt to close
                          positions once your Margin has been used up, we cannot
                          guarantee this will be possible and therefore you will
                          remain liable for any resulting shortfall. This
                          Schedule should be read in conjunction with the main
                          terms and conditions of business of which this
                          Schedule forms a part, and any other document supplied
                          or otherwise made available on our Online Platform.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <h3 className="text-2xl font-normal mb-2 ">
                          Unexpected Event and Weekend Risk
                        </h3>
                        <p className="text-base font-light leading-relaxed mb-4">
                          Various situations, developments, suspensions,
                          unexpected breaks in trading hours or events that may
                          arise over a weekend/bank holiday (either US or in
                          another country) when a market will generally close
                          for trading, may cause the market/underlying asset
                          className to reopen at a significantly diHerent
                          price/level from where market/underlying asset
                          className closed on the previous business/trading day.
                          You will not be able to use the Online Platform to
                          place or change orders at these times when the markets
                          are generally closed. There is a substantial risk that
                          stoploss orders left to protect open positions held at
                          these times will be executed at levels significantly
                          worse than their specified price. When doing this you
                          accept this risk and that you can be held liable for
                          any resulting deficit.
                        </p>
                        <p className="text-base font-light leading-relaxed mb-4">
                          Clients are explicitly warned of the risks associated
                          with holding positions over the weekend and
                          acknowledge that any resulting losses are their sole
                          responsibility.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <h3 className="text-2xl font-normal mb-2 ">
                          Electronic Trading
                        </h3>
                        <p className="text-base font-light leading-relaxed mb-4">
                          Trading in OTC contracts through the Online Platform
                          may diHer from trading on other electronic trading
                          systems as well as from trading in a conventional or
                          open market. You will be exposed to risks associated
                          with the electronic trading system including the
                          failure of hardware and software and system down time,
                          with respect to the Online Platform, your systems, and
                          the communications infrastructure (for example the
                          Internet) connecting the Online Platform with you. It
                          is your responsibility to monitor your account at all
                          times given that Stockbanx does not exercise control
                          over signal strength, internet transmission, or client
                          equipment configuration. The company absolves itself
                          from responsibility for any communication failures,
                          distortions, or delays that may occur during
                          internet-based trading operations.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <h3 className="text-2xl font-normal mb-2 ">
                          Trading Suspensions
                        </h3>
                        <p className="text-base font-light leading-relaxed mb-4">
                          Under certain conditions it may be difficult or
                          impossible to liquidate a position. This can occur,
                          for example, at times of rapid price movement where
                          the price for an underlying rise or falls during one
                          trading session to such an extent that trading in the
                          underlying is restricted or suspended. When this
                          occurs, you accept any associated risk, and you will
                          be liable for any resulting deficit. You should also
                          be aware that under certain circumstances we may be
                          required to close positions due to regulatory or
                          exchange instructions and as such we are not
                          responsible for any losses that may result.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <h3 className="text-2xl font-normal mb-2 ">
                          Commissions
                        </h3>
                        <p className="text-base font-light leading-relaxed mb-4">
                          Before you begin to trade, you should obtain details
                          of all commissions and other charges for which you
                          will be liable, as indicated in the rates schedule
                          available on the Online Platform.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <h3 className="text-2xl font-normal mb-2 ">
                          Insolvency
                        </h3>
                        <p className="text-base font-light leading-relaxed mb-4">
                          If you become insolvent or bankrupt or default in your
                          obligations to us, this may lead to your positions
                          being liquidated or closed out without your consent.
                          In the event of our insolvency, any money you hold
                          with us may be irrecoverable by you.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <h3 className="text-2xl font-normal mb-2 ">
                          Communication
                        </h3>
                        <p className="text-base font-light leading-relaxed mb-4">
                          We accept no responsibility for any losses that arise
                          because of delayed or unreceived communication between
                          you and us
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <h3 className="text-2xl font-normal mb-2 ">Advice</h3>
                        <p className="text-base font-light leading-relaxed mb-4">
                          We do not provide investment advice and we provide
                          execution only services. Whilst we may make general
                          assessments of the markets, such assessments are not
                          individual investment advice and do not take into
                          consideration your individual circumstances. Any
                          decision to trade is yours alone. We carry out an
                          initial appropriateness assessment for CFD trading
                          based on the information that you give us regarding
                          your trading experience and your financial assets and
                          earnings. We do not monitor on your behalf that the
                          information you provided in a duly completed
                          application form or otherwise, remains true or that
                          your financial situation remains the same. You must
                          take sole responsibility to ensure that we are updated
                          with any relevant information that may aHect our
                          assessment of the appropriateness of CFD trading for
                          you.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <h3 className="text-2xl font-normal mb-2 ">
                          Corporate Actions: Share CFDs
                        </h3>
                        <p className="text-base font-light leading-relaxed mb-4">
                          Please note that the treatment you receive during a
                          corporate action may be less favourable that if you
                          owned the underlying instrument, because changes we
                          make may need to be made in a reactionary manner and
                          to take eHect sooner than required by the corporate
                          action. Therefore, the time you have to make decisions
                          could be considerably reduced; the options available
                          may be more restrictive/less advantageous and may be
                          such that there is no opportunity for you to close the
                          position. Given that corporate events can often be
                          announced at extremely short notice, you may have no
                          opportunity to close positions out to avoid negative
                          consequences and you may be required to provide more
                          funds to cover margin at very short notice.
                        </p>
                      </li>
                      <li className="text-base font-light mb-2">
                        <h3 className="text-2xl font-normal mb-2 ">
                          Acknowledgement
                        </h3>
                        <p className="text-base font-light leading-relaxed mb-4">
                          You hereby acknowledge and declare that you have read,
                          understood and thus accept without any reservation all
                          the information included herein, including the
                          following:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                          <li className="text-base font-light mb-2">
                            The value of the financial instrument (CFD or any
                            other derivative product) may decrease and you may
                            receive less money than originally invested or the
                            value of the financial instrument may present high
                            fluctuations. It is possible that the invested
                            capital may become of no value;
                          </li>
                          <li className="text-base font-light mb-2">
                            CFDs or any other financial derivative product are
                            highly speculative and are suitable only for those
                            Customers who understand and are willing to assume
                            the economic, legal and other risks involved, and
                            are financially able to assume losses significantly
                            in excess of margin or deposits.
                          </li>
                          <li className="text-base font-light mb-2">
                            Information on past performance of a financial
                            instrument does not guarantee the present and/or
                            future performance. The use of historic data does
                            not constitute a binding or safe forecast as to the
                            corresponding future return of the financial
                            instruments to which such data refers;
                          </li>
                          <li className="text-base font-light mb-2">
                            Some financial instruments may not become
                            immediately liquid due to various reasons such as
                            reduced demand and the we may not be in a position
                            to sell them or easily obtain information on the
                            value of such financial instruments or the extent of
                            any related or inherent risk concerning such
                            financial instruments;
                          </li>
                          <li className="text-base font-light mb-2">
                            When a financial instrument is negotiated in a
                            currency other than the currency of your country of
                            residence, any changes in an exchange rate may have
                            a negative effect on the financial instrument’s
                            value, price and performance;
                          </li>
                          <li className="text-base font-light mb-2">
                            A financial instrument in foreign markets may entail
                            risks diHerent from the usual risks in the markets
                            in your country of residence. The prospect of profit
                            or loss from transactions in foreign markets is also
                            influenced by the exchange rate fluctuations;
                            Various situations, developments or events may arise
                            over a weekend when the currency markets generally
                            close for trading, that may cause the markets to
                            open at a significantly different price from where
                            they closed on Friday afternoon. You will not be
                            able to use the trading platform to place or change
                            orders over the weekend and at other times when the
                            markets are generally closed. There is a substantial
                            risk that stop-loss orders left to protect open
                            positions held over the weekend will be executed at
                            levels significantly worse than their specified
                            price.
                          </li>
                          <li className="text-base font-light mb-2">
                            In case of any quoting error (including responses to
                            Client requests, typing errors, etc), the Company is
                            not liable for any resulting errors in account
                            balances and reserves the right to make necessary
                            corrections or adjustments to the relevant account.
                          </li>
                          <li className="text-base font-light mb-2">
                            Where the Company provides generic market
                            recommendations, such generic recommendations do not
                            constitute a personal recommendation or investment
                            advice and have not considered any of your personal
                            circumstances or your investment objectives, nor is
                            it an oHer to buy or sell, or the solicitation of an
                            oHer to buy or sell. Each decision, by the Client,
                            to enter into a CFD contract with us and each
                            decision as to whether a transaction is appropriate
                            or proper for you, is an independent decision made
                            solely by yourself.
                          </li>
                        </ul>
                        <p className="text-base font-light leading-relaxed mb-4">
                          <strong>Definitions:</strong>
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Abnormal Market Conditions" shall mean conditions
                              contrary to Normal Market Conditions e.g., when
                              there is low liquidity in the market and/or high
                              volatity, resulting in rapid price movements in
                              the market or Price Gaps.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Abusive Trading" shall include any of the
                              following actions such as, but not limited to
                              scalping; sniping; arbitrage; manipulations; a
                              combination of faster/slower feeds; abuse of the
                              cancelation of trades feature available on the
                              Platform; use (without the prior and written
                              consent of the Company) of any robots, spiders or
                              other automated data entry system with the
                              Platform (unless you receive express written
                              consent by the Company prior to activating the
                              robot) or use of any software which applies
                              artificial intelligence analysis to the
                              Platform(s) and/or Client Account; entering into
                              transactions or combinations of transactions
                              (voluntarily and/or involuntarily) such as holding
                              long and short positions in the same or similar
                              Underlying Assets at similar times, either by the
                              Client or by the Client acting in concert with
                              others, possibly with connected accounts,
                              including (but not limited to) between accounts
                              held with different entities within the Company,
                              which taken together or separately are for the
                              purpose of manipulating the Platform for gain.
                              Abusive Trading constitutes an event of Default as
                              stated in this agreement.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Access Data" shall mean the Login Username and
                              Password of the Client, which are required to have
                              access on and use the Platform(s) any other secret
                              codes issued by the Company to the Client to allow
                              him to place Orders. "Account Opening Application
                              Form" shall mean the application
                              form/questionnaire completed by the Client in
                              order to apply for the Company’s Services under
                              this Agreement and a Client Account, via which
                              form/questionnaire the Company will obtain amongst
                              other things information for the Client’s
                              identification and due diligence, his
                              categorization and appropriateness or suitability
                              (as applicable) in accordance with the Applicable
                              Regulations.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Applicable Regulations" shall mean (a) AOFA
                              regulatory framework or any other rules of a
                              relevant regulatory authority having powers over
                              the Company; (b) the Rules of the relevant Market;
                              and (c) all other applicable laws, rules, and
                              regulations of Anjouan and the Islands of Comoros.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Ask" shall mean the higher price in a Quote at
                              which the price the Client may buy
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Authorised Representative" shall mean the person
                              of paragraph 38.1 of this Client Agreement.
                              "Balance" is the sum of net deposits to client’s
                              trading account plus realized profit and loss
                              minus commissions plus/minus swap fees
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Bid" shall mean the lower price in a Quote at
                              which the Client may sell
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Business Day" shall mean any day (GMT + 2), other
                              than a Saturday or a Sunday, or any other
                              international holidays to be announced on the
                              Company’s Website.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Client Account" shall mean the unique
                              personalized account of the Client consisting of
                              all Completed Transactions, Open Positions, and
                              Orders on the Platform, the Balance of the Client
                              money and deposit/withdrawal transactions of the
                              Client money. It is understood that the Company
                              may use the term Trading Account or Account on its
                              Website or communications, which shall mean your
                              Client Account.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Contract for Differences" (“CFD”) shall mean a
                              contract, which is a contract for differences by
                              reference to variations in the price of an
                              Underlying Asset. A CFD is a Derivative Financial
                              Instrument.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Currency Pair" shall mean the object or
                              Underlying Asset of a CFD Transaction based on the
                              change in the value of one currency against the
                              other. A Currency Pair consists of two currencies
                              (the Quote Currency and the Base Currency) and
                              shows how much of the Quote currency is needed to
                              purchase one unit of the Base Currency
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "AOFA" shall mean the Anjouan OHshore Finance
                              Authority, which is the Company’s supervisory
                              authority
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "AOFA regulatory framework" shall mean the Rules,
                              Directives, Regulations, Guidance notes, opinions
                              or recommendations of AOFA.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Dealing" means trading against proprietary
                              capital resulting in the conclusion of
                              transactions in one or more financial instruments;
                              the terms «trade on own account" or "trading on
                              own account" shall have a similar interpretation.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Equity" shall mean the Balance plus or minus any
                              Floating Profit or Loss that derives from an Open
                              Position and shall be calculated as: Equity =
                              Balance + Floating Profit - Floating Loss.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Free Margin" shall mean the amount of funds
                              available in the Client Account, which may be used
                              to open a position or maintain an Open Position.
                              Free Margin shall be calculated as: Equity less
                              (minus) Margin Requirement [Free margin = Equity-
                              Margin Requirement].
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Hedged Margin" for CFD trading shall mean the
                              necessary margin required by the Company so as to
                              open and maintain Matched Positions.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Initial Margin" for CFD trading shall mean the
                              necessary margin required by the Company so as to
                              open a position.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Instruction" shall mean an instruction from the
                              Client Markets to open/close a position or to
                              place/modify/delete an Order.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Instrument" shall mean any CFD contract.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Investment Services" shall mean the Investment
                              Services under the Company’s license, as regulated
                              by the Union of Comoros Offshore Financial
                              Authority and detailed on our website.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Law" shall mean the Offshore Finance Authority
                              Act, 2005 (Act No. 003 of 2005) as amended from
                              time to time.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Leverage" is the ratio showing by how many times
                              the purchasing power of deposit is increased
                              .e.g., a leverage of 1:50, means that for a $1,000
                              deposit you can open trades worth maximum of
                              $50,000 (1000 x 50).
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Month" shall mean 30 calendar days.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Margin Call" shall mean the situation when the
                              Company informs the Client to deposit additional
                              Margin when the Client does not have enough Margin
                              to open or maintain open positions.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Margin Requirement" is the amount of money based
                              on the margin rate needed to open a position, to
                              the actual market exposure of that position.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Margin Trading" means that the client can trade
                              amounts significantly higher than his deposit.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Open Position" shall mean any open option
                              contract (call and / or put) which has not been
                              closed. In relation to CFD trading this may be a
                              Long Position or a Short Position which is not a
                              Completed Transaction.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Order" shall mean an instruction from the Client
                              to trade in CFDs as the case may be.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Personal Data" shall mean any information
                              relating to an identified or identifiable natural
                              person such as a name, an identification document
                              and number, location data, electronic and
                              telephone communications, financial information,
                              trading and non-trading activity and history or
                              one or more factors specific to the physical,
                              physiological, genetic, mental, economic, cultural
                              or social identity of that natural person.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Parties" shall mean the parties to this Agreement
                              – i.e., the Company and the Client.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Platform" shall mean the electronic mechanism
                              operated and maintained by the Company, consisting
                              of a trading platform, computer devices, software,
                              databases, telecommunication hardware, programs
                              and technical facilities, which facilitates
                              trading activity of the Client in Financial
                              Instruments via the Client Account.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Principal" refers to the execution venue with
                              respect to the execution of Client orders, the
                              liquidity provider, and the product supplier.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Quote" shall mean the information of the current
                              price for a specific Underlying Asset, in the form
                              of the Bid and Ask prices.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Quote Currency" shall mean the second currency in
                              the Currency Pair which can be bought or sold by
                              the Client for the Base Currency
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Required Margin" shall mean the necessary
                              guarantee funds so as to open or maintain Open
                              Positions in a CFD Transaction.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Services" shall mean the services to be offered
                              by the Company to the Client under this Agreement.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Segregated Account" shall mean a client bank
                              account as defined by and held in accordance with
                              the Applicable Regulations.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Short Position" for CFD trading shall mean a sell
                              position that appreciates in value if underlying
                              market prices fall.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Sniping" shall mean executing trading strategies
                              with the objective or as a result of exploiting
                              misquotation(s). Misquotations may occur as a
                              result of the highly automated nature of offering
                              tradable prices on the Platform.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Spread" for CFD trading shall mean the difference
                              between Ask and Bid of a CFD.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Swap Fee" for CFD trading shall mean the interest
                              added or deducted for holding a position open
                              overnight.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Trading Account" shall mean the unique
                              personified registration system of all Completed
                              Transactions, Open Positions, Orders, and
                              deposit/withdrawal transactions in the Trading
                              Platform.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              “Trailing Stop” in CFD trading shall mean a
                              stop-loss order set at a percentage level below
                              the market price - for a long position. The
                              trailing stop price is adjusted as the price
                              fluctuates. A sell trailing stop order sets the
                              stop price at a fixed amount below
                            </p>
                            <ul className="list-disc pl-6 mb-4">
                              <li className="text-base font-light mb-2">
                                the market price with an attached “trailing”
                                amount. As the market price rises, the stop
                                price rises by the trail amount, but if the pair
                                price falls, the stop loss price doesn't change,
                                and a market order is submitted when the stop
                                price is hit.
                              </li>
                            </ul>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Transaction" shall mean a transaction of the
                              Client in a CFD or any deposit or withdrawal of
                              funds.
                            </p>
                          </li>
                          <li className="text-base font-light mb-2">
                            <p className="text-base font-light leading-relaxed mb-4">
                              "Website" shall mean the Company’s website
                              <a href="/" className="underline text-[#3b82f6]">
                                https://www.stockbanx.com/
                              </a>{" "}
                              or such other website as the Company may maintain
                              from time to time
                            </p>
                          </li>
                        </ul>
                        <p className="text-base font-light leading-relaxed mb-4">
                          <strong>ADDITIONAL CLAUSES FOR COMPLIANCE:</strong>
                        </p>
                        <p className="text-base font-light leading-relaxed mb-4">
                          For enhanced security and compliance, we ensure that
                          customer data is encrypted and stored in compliance
                          with international data protection standards.
                        </p>
                        <p className="text-base font-light leading-relaxed mb-4">
                          We reserve the right to update these terms
                          periodically to reflect changes in applicable laws or
                          operational policies.
                        </p>
                        <p className="text-base font-light leading-relaxed mb-4">
                          Users must ensure that their use of the platform
                          complies with the laws of their respective
                          jurisdictions. Stockbanx assumes no responsibility for
                          illegal activities conducted by its users.
                        </p>
                      </li>
                    </ul>
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

export default Tnc;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

