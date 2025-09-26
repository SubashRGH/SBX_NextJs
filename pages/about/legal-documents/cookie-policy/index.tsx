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
          <div className="flex flex-col flex-1 gap-4 pt-6 text-white">
            <div>
              <p className="text-base font-light leading-relaxed mb-4">
                This Cookie Policy applies to all the Clients and whoever
                accesses the website of Stockbanx.
              </p>
              <h2 className="text-3xl font-normal mb-3 ">What are Cookies?</h2>
              <p className="text-base font-light leading-relaxed mb-4">
                A cookie is a small file which asks permission to be placed on
                your computer’ s hard drive. Once you agree, the file is added
                and the cookie helps analyze web traffic or lets businesses know
                when you visit a particular site. Cookies allow web applications
                to respond to you as an individual. Cookies help us provide you
                with a better website by enabling us to monitor the pages that
                you find useful and tailor our website to your needs, likes and
                dislikes by gathering and remembering information about your
                preferences.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                The cookies that we use cannot execute code or deliver any
                viruses. The cookies that we use are only ever used for the
                essential functioning of our website, for analytical purposes in
                order to provide you a great service, and for marketing, so that
                you are served content that is in line with your interests,
                based on your activity on our site.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                Stockbanx fully respects your privacy and provides you with the
                relevant information and tools in order to manage your cookie
                preferences. Stockbanx uses a number of cookies in order to
                provide users with our products and services via our website and
                platform.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                Note that we categorize our cookies into the following groups:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="text-base font-light mb-2">
                  Essential: cookies which are essential to the functioning of
                  the website and our products and services and enable you to
                  browse the website and use its features. This includes
                  enabling you to complete trading account applications,
                  remembering your login details, initiating web chat with our
                  support team or other website functionality. If you disable
                  these cookies you will not be able to fully access our
                  platform.
                </li>
                <li className="text-base font-light mb-2">
                  Analytical: cookies that allow us to improve our oﬀering and
                  website, enabling us to tailor the site to your personal
                  preferences.
                </li>
                <li className="text-base font-light mb-2">
                  Marketing: cookies that allow us to provide information to
                  visitors on third party websites and measure the effectiveness
                  of our marketing initiatives. We adhere to industry accepted
                  best practice in respect of our use of marketing cookies.
                  Whilst we do collect certain pieces of information about you
                  in order to provide our products and services to you and
                  improve our offering, we ensure that this information is
                  anonymized. In other words, we do not collect any information
                  about you through our cookies that could identify you as an
                  individual. Please be aware that if you choose not to accept
                  cookies, you may not be able to take full advantage of the
                  website.
                </li>
              </ul>
              <h2 className="text-3xl font-normal mb-3 ">
                Cookies used by our websites:
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li className="text-base font-light mb-2">
                  Do not store any personally identiﬁable information such as
                  passwords
                </li>
                <li className="text-base font-light mb-2">
                  Do not access any other information stored on your computer
                </li>
                <li className="text-base font-light mb-2">
                  Do not compromise the security of your device(s)
                </li>
                <li className="text-base font-light mb-2">
                  Do allow us to provide a service through which people can
                  access their trading account(s)
                </li>
                <li className="text-base font-light mb-2">
                  Do allow us to monitor the number of people using our website
                </li>
                <li className="text-base font-light mb-2">
                  Do allow us to see how people arrive at our website (for
                  example, via search engine or via email)
                </li>
                <li className="text-base font-light mb-2">
                  Do allow us to gather technical information about people using
                  our website, such as their geographical location and the type
                  of web browsers they are using
                </li>
                <li className="text-base font-light mb-2">
                  Do allow us to display advertisements on other websites to
                  people who have previously accessed our websites (for example,
                  banner ads). We cannot identify individuals to whom these
                  advertisements may be displayed.
                </li>
                <li className="text-base font-light mb-2">
                  Do allow us to display content on our websites that is more
                  relevant to you and your preferences based on the information
                  we hold and your behavior on our website
                </li>
                <li className="text-base font-light mb-2">
                  Do allow our website to recall certain settings and
                  preferences to make it easier to use our website.
                </li>
              </ul>
              <h2 className="text-3xl font-normal mb-3 ">
                General Information
              </h2>
              <p className="text-base font-light leading-relaxed mb-4">
                You can choose to accept or decline cookies when you use our
                website. Most web browsers automatically accept cookies, but you
                can usually modify your browser settings to decline cookies if
                you prefer. To ﬁnd out more about how you can block, delete or
                manage cookies, please visit aboutcookies.org. Please be aware
                that if you choose not to accept cookies, you may not be able to
                take full advantage of the website. For more information on how
                we handle your data please see our privacy.
              </p>
              <p className="text-base font-light leading-relaxed mb-4">
                If you have any questions or concerns, please contact us:{" "}
                <a
                  href="mailto:contact@stockbanx.com"
                  className="underline text-[#3b82f6]"
                >
                  contact@stockbanx.com
                </a>
              </p>
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

