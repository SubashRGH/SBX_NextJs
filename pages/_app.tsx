import "../styles/globals.css";
import "../styles/Menu.css";
import "../styles/responsive.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";
import { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { appWithTranslation, useTranslation } from "next-i18next";
import BackToTopButton from "../components/BackToTopButton";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ProSidebarProvider } from "react-pro-sidebar";
import Script from "next/script";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Announce from "../components/event/Announce";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation("common");

  const closeModal = () => {
    setShowModal(false);
    sessionStorage.setItem("eventModal", "true");
  };

  // if query parameters with refer by announce modal not open
  // useEffect(() => {
  //   const url = window.location.search;
  //   console.log(url);
  //   if (router.query) {
  //     if (sessionStorage.getItem("eventModal") !== null) {
  //       setShowModal(false);
  //     } else if (url.includes("referredby")) {
  //       setShowModal(false);
  //     } else {
  //       setShowModal(false);
  //     }
  //   }
  // }, [router.query]);

  useLayoutEffect(() => {
    if (sessionStorage.getItem("eventModal") !== null) {
      setShowModal(false);
    } else {
      setShowModal(false);
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link href="https://www.cptmarkets.com/" rel="canonical" />
        <link
          rel="stylesheet prefetch"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            $(".nav-footer h6").click(function(){
              $(this).parent(".nav").toggleClass("open"); 
          });
  `,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: ` $(function() {
    $(".nav-footer h6").click(function(){
      $(this).parent(".nav").toggleClass("open"); 
  });
  })`,
          }}
        />
        {/* sa chat hide  */}
        {/* <script
          defer
          id="convrs-webchat"
          src="https://webchat.conv.rs/3b4ef5f17291760ef49bd332c04475a2644252fa.js"
        ></script> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CJEXJY16KQ"
        ></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CJEXJY16KQ');
          `,
          }}
        />
        {/* Google Tag Manager */} {/* this is not editable */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WZW6S32');
          `,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J02R6MTVWR"
        ></script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TCPMXHSH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `  window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J02R6MTVWR');
          `,
          }}
        />
        {/* Google Tag Manager */} {/* this is not editable */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TCPMXHSH');
          `,
          }}
        />
        {/* schema tag added */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Stockbanx Markets",
            "url": "https://cptmarkets.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://cptmarkets.com/search?q=cptmarkets){search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
          `,
          }}
        />
      </Head>

      <Layout>
        <main className="main-pages">
          <motion.div
            key={router.route}
            // this is a simple animation that fades in the page. You can do all kind of fancy stuff here
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Component {...pageProps} />
            <ToastContainer />
          </motion.div>
          {/* <BackToTopButton /> */}
          {/* announcement modal */}
          {showModal ? (
            <>
              <Announce handleClick={closeModal} />
            </>
          ) : null}
        </main>
      </Layout>
    </>
  );
}

export default appWithTranslation(MyApp);

