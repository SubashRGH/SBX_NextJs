import { FC, Fragment, useState } from "react";
import Container from "@/components/Container";
import Link from "next/link";
import { legalDocuments } from "@/constants";
import { useRouter } from "next/router";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PageBannerHeader from "@/components/PageBannerHeader";

const RiskDisclosure: FC = () => {
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
              <h2 className="text-3xl font-normal mb-3 ">
                RISK DISCLOSURE STATEMENT
              </h2>
              <p className="text-base font-light leading-relaxed mb-4">
                You are strongly advised to carefully read the risk disclosures
                and the warnings contained in this Schedule before applying for
                an account with us and before you begin trading using our
                services.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                If English is not your first language, you should seek advice
                from professionals, such as a solicitor, accountant, or
                financial advisor, who can explain the technical and financial
                terms included in these terms &amp; conditions before
                undertaking any trading,
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                You are aware that giving access to the use of your account by
                third parties may lead to losses and fees accumulated on your
                account which you may not be directly aware or in control of. In
                such instances Stockbanx will have no responsibility or
                liability for the losses, financial or otherwise that take
                place.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                Trading CFDs is not suitable for everyone, involves high risk
                and can result in a complete loss of your funds.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                The purpose of this Schedule is to advise you of some of the
                risks associated with trading CFDs. It is not intended that this
                Schedule includes a full and complete description of all the
                risks involved in trading CFDs. You should ensure that your
                decision to use our services is made on an informed basis and
                that you are happy with the information available to you. If you
                are unsure or do not understand the contents of this Schedule in
                particular, please seek independent financial advice
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                Prior to trading CFDs you must be aware of the risks involved.
                The high degree of leverage associated with these types of
                investments means that the degree of risk compared to other
                financial products is higher. Leverage (or Margin trading) may
                work against you resulting in a substantial loss as well as a
                substantial gain.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                Past performance of these types of investments does not
                guarantee any future results. You must bear in mind any
                commission and tax liabilities you will personally incur.
                Stockbanx accepts no liability or responsibility for any tax you
                may be required to pay on any profits made on our Online
                Platform.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                Trading on Margin involves a high level of risk and is not
                suitable for all investors. The high degree of leverage can work
                against you, as well as for you. It is your sole responsibility
                to monitor your open positions and you should monitor them
                closely.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                Before trading, you should carefully consider your investment
                objectives, level of financial experience, and risk appetite. If
                you are at all unsure as to the suitability of the products
                offered by us, please seek independent financial advice. There
                is always a relationship between high reward and high risk. Any
                type of market or trade speculation that can yield unusually
                high returns also poses a high risk to capital. Only surplus
                funds should be placed at risk and if you are not able to
                sustain trading losses then you should not trade CFDs.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                We recommend that ALL CLIENTS AND PROSPECTIVE CLIENTS
                familiarize themselves with CFDs, Margin requirements, trading
                tools, our trading platforms, and financial markets in general
                by taking advantage our FREE TO USE and RISK-FREE Demonstration
                account (Demo Account). Please see our website{" "}
                <a href="/" className="underline text-[#3b82f6]">
                  https://stockbanx.com/
                </a>{" "}
                for more details. It is noted however that this document and the
                Demo Account cannot and do not disclose or explain all of the
                risks involved when dealing in Financial Instruments on a fair
                and non-misleading basis. As it is impossible for this Risk
                Disclosure to contain all the risks and aspects involved in
                trading CFD’s you need to ensure that your decision is made on a
                well-educated and informed basis but as minimum you should take
                the below in consideration.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="text-base font-light mb-2">
                  <h3 className="text-2xl font-normal mb-2 ">
                    CFDs IN GENERAL
                  </h3>
                  <p className="text-base font-light leading-relaxed mb-4">
                    CFDs are complex financial derivative products which
                    generally only close when a client chooses to close an
                    existing open position, and therefore generally have no set
                    maturity date. (This can be subject to change depending on
                    the terms of the underlying asset className and or product).
                  </p>
                  <p className="text-base font-light leading-relaxed mb-4">
                    CFDs can be likened to futures contracts, which can be
                    entered into in relation to certain foreign currencies,
                    indices, precious metals, oil, commodities, or other
                    financial instruments. However, unlike other futures, CFD
                    contracts can only be settled in cash. Transactions in CFDs
                    may also have a contingent liability and you should be aware
                    of the implications of this as set out below. All our CFDs
                    are synthetic contracts, which means that clients do not
                    have any right to the underlying instrument or thing or the
                    rights which are attached to the same unless specifically
                    stated in the CFD. This includes no right to any underlying
                    reference shares or attached voting rights.
                  </p>
                </li>
                <li className="text-base font-light mb-2">
                  <h3 className="text-2xl font-normal mb-2 ">
                    Foreign Markets
                  </h3>
                  <p className="text-base font-light leading-relaxed mb-4">
                    CFDs relating to foreign markets involve different risks
                    from the client’s native markets. In some cases, risks will
                    be greater. The potential for profit or loss from
                    transactions relating to foreign markets will be affected by
                    fluctuations in foreign exchange rates. Such enhanced risks
                    include the risks of political or economic policy charges in
                    a foreign jurisdiction, which may substantially and
                    permanently alter the conditions, terms, marketability, or
                    price of a foreign currency.
                  </p>
                </li>
                <li className="text-base font-light mb-2">
                  <h3 className="text-2xl font-normal mb-2 ">
                    Risk Reducing Orders or Strategies
                  </h3>
                  <p className="text-base font-light leading-relaxed mb-4">
                    The placing of certain orders (e.g. ‘’stop loss’’ or ‘‘stop
                    limits’’ orders) that are intended to limit losses to
                    certain amounts may not always work because market
                    conditions or technological limitations may make it
                    impossible to execute such orders at the required prices or
                    at all. Should a client trade using such orders or strategy
                    they must do so accepting this risk.
                  </p>
                </li>
                <li className="text-base font-light mb-2">
                  <h3 className="text-2xl font-normal mb-2 ">Leverage</h3>
                  <p className="text-base font-light leading-relaxed mb-4">
                    CFDs carry a high degree of risk. The gearing and leverage
                    that is obtainable with CFD trading means that you only need
                    to place a small deposit (Margin) to commence trading with
                    us although this small deposit may result in large losses or
                    large gains. Highly leveraged transactions are subject to
                    significant changes in value because of relatively small
                    changes in the value or level of the underlying instrument
                    or thing on which the price of the CFD is based.
                  </p>
                </li>
                <li className="text-base font-light mb-2">
                  <h3 className="text-2xl font-normal mb-2 ">
                    Contingent Liability Transactions
                  </h3>
                  <p className="text-base font-light leading-relaxed mb-4">
                    CFDs are leveraged or margined transactions requiring you to
                    make a series of payments against the contract value,
                    instead of paying the entire contract value immediately. You
                    may sustain a total loss of the Margin you deposit with us
                    to establish or maintain a position. We re-value your open
                    positions continuously during each business day, and any
                    profit or loss is immediately reflected in your account and
                    a loss may result in you being called upon to pay
                    substantial additional Margin on short notice to maintain
                    your open positions.
                  </p>
                  <p className="text-base font-light leading-relaxed mb-4">
                    We may change the rates of Margin and/or notional trading
                    requirements at any time (including over weekends/bank
                    holidays or in abnormal market conditions), which may also
                    result in a change to the Margin you are required to
                    maintain. If you do not maintain sufficient Margin on your
                    account at all times and/or provide such additional funds
                    within the time required, your open positions may be closed
                    at a loss, and you may be liable for any resulting deficit.
                  </p>
                </li>
                <li className="text-base font-light mb-2">
                  <h3 className="text-2xl font-normal mb-2 ">
                    Over- the Counter (OTC) Transactions
                  </h3>
                  <p className="text-base font-light leading-relaxed mb-4">
                    When trading CFDs you are not trading on a regulated market
                    or exchange. You will enter directly into a contract with
                    us, in respect of the underlying financial instrument or
                    thing on which the price of the CFD is based. All open
                    positions with us must be closed with us and cannot be
                    closed with any other party. This may make it difficult for
                    you to close a position at a price that you are happy with
                    or at all (for example, if we experience technical problems
                    with our Online Platform and it is unavailable, or we become
                    insolvent).
                  </p>
                  <p className="text-base font-light leading-relaxed mb-4">
                    Trading in OTC financial transactions may expose you to
                    greater risks than trading on a regulated market because
                    there is no market on which to close out your open positions
                    and prices and other conditions are set by us subject to any
                    legal/regulatory requirements. OTC transactions may increase
                    the liquidity risk and introduce other significant risk
                    factors: it may be impossible, for example, to assess the
                    value of a position resulting from an OTC transaction or to
                    determine the risk exposure. Also, bid prices and offer
                    prices need not be quoted by us and, even where they are, we
                    may find it difficult to establish a fair price particularly
                    when the relevant exchange or market for the underlying is
                    closed or suspended. You are also exposed to the risk of our
                    default.
                  </p>
                </li>
                <li className="text-base font-light mb-2">
                  <h3 className="text-2xl font-normal mb-2 ">Prices</h3>
                  <p className="text-base font-light leading-relaxed mb-4">
                    The prices posted on our Online Platform may not necessarily
                    reflect the broader market. We will select prices that we
                    feel are appropriate to determine margin requirements and in
                    periodically marking to market the positions in your account
                    and closing out such positions. Although we expect that
                    these prices will be reasonably related to those available
                    on what is known as the interbank market or any appropriate
                    trading venue or other financial market (Reference Market),
                    prices we use may vary from those available to banks and
                    other participants in the Reference Market. Consequently, we
                    may exercise considerable discretion in setting Margin
                    requirements and collecting Margin from you. As the CFDs are
                    in part related to the underlying (and any Reference
                    Market), you should ensure you are aware of the risks
                    involved in the underlying including currency fluctuation,
                    volatility, and gapping (a sudden price shift which can be
                    caused by many factors including but not exclusively,
                    economic events, market announcements and periods where
                    trading in the underlying does not take place).
                  </p>
                  <p className="text-base font-light leading-relaxed mb-4">
                    A non-guaranteed stop will not protect you against this risk
                    as it is not immediate and only triggers an order to close
                    the position at the nearest available price.
                  </p>
                </li>
                <li className="text-base font-light mb-2">
                  <h3 className="text-2xl font-normal mb-2 ">
                    Position Monitoring
                  </h3>
                  <p className="text-base font-light leading-relaxed mb-4">
                    It is your responsibility to always monitor the positions
                    you have opened, and you should always be in a position to
                    do so. Whilst we will attempt to close positions once your
                    Margin has been used up, we cannot guarantee this will be
                    possible and therefore you will remain liable for any
                    resulting shortfall.
                  </p>
                  <p className="text-base font-light leading-relaxed mb-4">
                    This Schedule should be read in conjunction with the main
                    terms and conditions of business of which this Schedule
                    forms a part, and any other document supplied or otherwise
                    made available on our Online Platform.
                  </p>
                </li>
                <li className="text-base font-light mb-2">
                  <h3 className="text-2xl font-normal mb-2 ">
                    Unexpected Event and Weekend Risk
                  </h3>
                  <p className="text-base font-light leading-relaxed mb-4">
                    Various situations, developments, suspensions, unexpected
                    breaks in trading hours or events that may arise over a
                    weekend/bank holiday (either US or in another country) when
                    a market will generally close for trading, may cause the
                    market/underlying asset className to re-open at a
                    significantly different price/level from where
                    market/underlying asset className closed on the previous
                    business/trading day. You will not be able to use the Online
                    Platform to place or change orders at these times when the
                    markets are generally closed. There is a substantial risk
                    that stop-loss orders left to protect open positions held at
                    these times will be executed at levels significantly worse
                    than their specified price. When doing this you accept this
                    risk and that you will be liable for any resulting deficit.
                  </p>
                </li>
                <li className="text-base font-light mb-2">
                  <h3 className="text-2xl font-normal mb-2 ">
                    Electronic Trading
                  </h3>
                  <p className="text-base font-light leading-relaxed mb-4">
                    Trading in OTC contracts through the Online Platform may
                    differ from trading on other electronic trading systems as
                    well as from trading in a conventional or open market. You
                    will be exposed to risks associated with the electronic
                    trading system including the failure of hardware and
                    software and system down time, with respect to the Online
                    Platform, your systems, and the communications
                    infrastructure (for example the Internet) connecting the
                    Online Platform with you.
                  </p>
                </li>
                <li className="text-base font-light mb-2">
                  <h3 className="text-2xl font-normal mb-2 ">
                    Trading Suspensions
                  </h3>
                  <p className="text-base font-light leading-relaxed mb-4">
                    Under certain conditions it may be difficult or impossible
                    to liquidate a position. This can occur, for example, at
                    times of rapid price movement where the price for an
                    underlying rise or falls during one trading session to such
                    an extent that trading in the underlying is restricted or
                    suspended. Where this occurs, you accept any associated
                    risk, and you will be liable for any resulting deficit. You
                    should also be aware that under certain circumstances we may
                    be required to close positions due to regulatory or exchange
                    instructions and as such we are not responsible for any
                    losses that may result.
                  </p>
                </li>
                <li className="text-base font-light mb-2">
                  <h3 className="text-2xl font-normal mb-2 ">Commissions</h3>
                  <p className="text-base font-light leading-relaxed mb-4">
                    Before you begin to trade, you should obtain details of all
                    commissions and other charges for which you will be liable,
                    as indicated in the rates schedule available on the Online
                    Platform.
                  </p>
                </li>
                <li className="text-base font-light mb-2">
                  <h3 className="text-2xl font-normal mb-2 ">Insolvency</h3>
                  <p className="text-base font-light leading-relaxed mb-4">
                    If you become insolvent or bankrupt or default in your
                    obligations to us, this may lead to your positions being
                    liquidated or closed out without your consent. In the event
                    of our insolvency, any money you hold with us may be
                    irrecoverable by you.
                  </p>
                </li>
                <li className="text-base font-light mb-2">
                  <h3 className="text-2xl font-normal mb-2 ">Communication</h3>
                  <p className="text-base font-light leading-relaxed mb-4">
                    We accept no responsibility for any losses that arise
                    because of delayed or un-received communication between you
                    and us.
                  </p>
                </li>
                <li className="text-base font-light mb-2">
                  <h3 className="text-2xl font-normal mb-2 ">Advice</h3>
                  <p className="text-base font-light leading-relaxed mb-4">
                    We do not provide investment advice and we provide execution
                    only services. Whilst we may make general assessments of the
                    markets, such assessments are not individual investment
                    advice and do not take into consideration your individual
                    circumstances. Any decision to trade is yours alone.
                  </p>
                  <p className="text-base font-light leading-relaxed mb-4">
                    We carry out an appropriateness assessment for CFD trading
                    based on the information you give us regarding your trading
                    experience and your financial assets and earnings. We do not
                    monitor on your behalf that the information you provided in
                    a duly completed application form or otherwise remains true
                    or that your financial situation remains the same. You must
                    take sole responsibility to ensure we are updated with any
                    relevant information that may affect our assessment of the
                    appropriateness of CFD trading for you.
                  </p>
                </li>
                <li className="text-base font-light mb-2">
                  <h3 className="text-2xl font-normal mb-2 ">
                    Corporate Actions: Share CFDs
                  </h3>
                  <p className="text-base font-light leading-relaxed mb-4">
                    Please note that the treatment you receive during a
                    corporate action may be less favorable that if you owned the
                    underlying instrument because changes, we make may need to
                    be made in a reactionary manner and to take effect sooner
                    than required by the corporate action. Therefore, the time
                    you have to make decisions could be considerably reduced;
                    the options available may be more restrictive/less
                    advantageous and may be such that there is no opportunity
                    for you to close the position. Given that corporate events
                    can often be announced at extremely short notice you may
                    have no opportunity to close positions out to avoid negative
                    consequences and you may be required to provide more funds
                    to cover margin at very short notice.
                  </p>
                </li>
                <li className="text-base font-light mb-2">
                  <h3 className="text-2xl font-normal mb-2 ">
                    Dividends and Dividend Adjustments on CFD’s
                  </h3>
                  <p className="text-base font-light leading-relaxed mb-4">
                    A ‘<strong>Dividend Adjustment</strong>’ is an adjustment
                    that is applied when a share passes its ex- dividend date
                    (including the ex-date of any special dividend) in the
                    underlying stock market.
                  </p>
                  <p className="text-base font-light leading-relaxed mb-4">
                    In the case of long positions, the dividend adjustment is
                    credited to your account.
                  </p>
                  <p className="text-base font-light leading-relaxed mb-4">
                    In the case of short positions, the dividend adjustment is
                    debited from your account.
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="text-base font-light mb-2">
                      <h4 className="text-xl font-normal mb-1 ">
                        How do dividends affect positions on indices or shares?
                      </h4>
                      <p className="text-base font-light leading-relaxed mb-4">
                        When an underlying share goes ex-dividend (that is, they
                        pay a dividend to shareholders), we make a cash
                        adjustment to your account so that your position is not
                        affected by the drop in price that occurs in the market
                        for that share or index. If you are long, we will credit
                        your account. If you are re short, we will debit it.
                      </p>
                    </li>
                    <li className="text-base font-light mb-2">
                      <h4 className="text-xl font-normal mb-1 ">
                        What happens when a stock or index goes ex-dividend?
                      </h4>
                      <p className="text-base font-light leading-relaxed mb-4">
                        When a share goes ex-dividend the value of the share
                        will generally fall by the same amount as the dividend.
                        Since a share index is made up of a number of companies,
                        the fall in value of the shares will also cause a fall
                        in the value of the index.
                      </p>
                    </li>
                    <li className="text-base font-light mb-2">
                      <h4 className="text-xl font-normal mb-1 ">
                        Why we make the adjustment
                      </h4>
                      <p className="text-base font-light leading-relaxed mb-4">
                        When the price of a share or index drops after going
                        ex-dividend, your running profit &amp; loss (P&amp;L) is
                        affected. If you are long, this means you miss out on
                        potential profit. If you are short, this means your
                        P&amp;L is better than it should be.
                      </p>
                      <p className="text-base font-light leading-relaxed mb-4">
                        Given that the drop in price is an expected market
                        movement, we must make an adjustment so that your
                        P&amp;L is not affected. The dividend amount will vary
                        depending on the company or index.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default RiskDisclosure;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

