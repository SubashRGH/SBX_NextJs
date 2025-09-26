import { useEffect, useMemo, useState, ReactNode, useContext } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { motion } from "framer-motion";

import { LanguageContext } from "@/components/LanguageWrapper";

import Loader from "@/components/Loader";

function NewsDetails() {
  const router = useRouter();

  const { language } = useContext(LanguageContext);

  const { t } = useTranslation("common");

  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState<ArticleLang | null>(null);

  const bodyContent = useMemo(() => {
    const contents = [] as ReactNode[];

    const contentIterator = (data: ArticleData) => {
      const { type, childrens, props } = data;

      let element = null as null | React.ReactNode;

      switch (type) {
        case "paragraph":
          element = (
            <>
              <p
                className={`text-base text-[#a8adba] mb-6 ${
                  props?.styles?.italic ? "italic" : ""
                }`}
              >
                {childrens.map((item) =>
                  typeof item === "string" ? item : contentIterator(item)
                )}
              </p>
            </>
          );
          return element;

        case "span":
          element = (
            <>
              <span
                className={`text-base text-[#a8adba] mb-6 ${
                  props?.styles?.italic ? "italic" : ""
                }`}
              >
                {childrens.map((item) =>
                  typeof item === "string" ? item : contentIterator(item)
                )}
              </span>
            </>
          );
          return element;

        case "heading":
          if (props?.type === "h1") {
            element = (
              <>
                <h1 className="md:text-5xl xl:text-5xl lg:text-5xl text-2xl text-[#0B1642] font-semibold mb-6">
                  {childrens.map((item) =>
                    typeof item === "string" ? item : contentIterator(item)
                  )}
                </h1>
              </>
            );
            return element;
          }

          if (props?.type === "h2") {
            element = (
              <>
                <h2 className="text-xl mb-3 text-[#0c2038]">
                  {childrens.map((item) =>
                    typeof item === "string" ? item : contentIterator(item)
                  )}
                </h2>
              </>
            );
            return element;
          }

          element = (
            <>
              <p className="text-base text-[#a8adba] mb-6">
                {childrens.map((item) =>
                  typeof item === "string" ? item : contentIterator(item)
                )}
              </p>
            </>
          );
          return element;

        case "bold":
          element = (
            <>
              <strong className="text-base mb-6 font-normal">
                {childrens.map((item) =>
                  typeof item === "string" ? item : contentIterator(item)
                )}
              </strong>
            </>
          );
          return element;

        case "link":
          element = (
            <>
              <Link href={props?.href || ""}>
                <button className="text-base text-[#3cf] mb-6 underline">
                  {childrens.map((item) =>
                    typeof item === "string" ? item : contentIterator(item)
                  )}
                </button>
              </Link>
            </>
          );
          return element;

        case "div":
          element = (
            <>
              <div
                style={{
                  display: props?.styles?.display,
                  flexDirection: props?.styles?.flexDirection,
                  gap: props?.styles?.gap,
                }}
              >
                {childrens.map((item) =>
                  typeof item === "string" ? item : contentIterator(item)
                )}
              </div>
            </>
          );
          return element;

        case "image":
          element = (
            <>
              <img
                src={props?.src || ""}
                alt={""}
                style={{
                  width: props?.styles?.width || "100%",
                  height: props?.styles?.height || "100%",
                }}
                className="object-contain object-center mb-6"
              />
            </>
          );
          return element;

        default:
          return element;
      }
    };

    news &&
      news?.contents?.forEach((content) => {
        contents.push(contentIterator(content as any));
      });

    return contents;
  }, [news]);

  const newsDetails = async (newsId: string) => {
    try {
      const data = await fetch(
        `/api/retrieve-articles?id=${newsId}&lang=${language?.lang || "en"}`,
        {
          method: "GET",
        }
      );

      if (data.status !== 200) {
        throw new Error("Article Not Found");
      }

      setNews((await data.json()) as ArticleLang);
    } catch (error) {
      router.push("/trade/education");
      setNews(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (router.isReady) {
      const item = router.query.slug;
      setLoading(true);

      item && typeof item === "string"
        ? newsDetails(item)
        : router.push("/trade/education");
    }
  }, [router.isReady, language.lang]);

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        news && (
          <>
            <div className="bg-white">
              <div className="stkbnx-container md:py-14 xl:py-13 lg:py-14 py-4">
                {/* breadcrumb */}
                <nav
                  className="flex mb-8 md:mb-12 xl:mb-12 lg:mb-12"
                  aria-label="Breadcrumb"
                >
                  <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <Link href="/">
                      <li className="inline-flex items-center">
                        <a
                          href="#"
                          className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                        >
                          <svg
                            aria-hidden="true"
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                          </svg>
                        </a>
                      </li>
                    </Link>

                    {(() => {
                      if (news?.type === "Knowledge_Articles_Main") {
                        return (
                          <>
                            <Link href="/trade/knowledge-articles">
                              <li>
                                <div className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    className="w-6 h-6 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                  <a
                                    href="#"
                                    className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                  >
                                    {" "}
                                    {t("Knowledge Articles")}{" "}
                                  </a>
                                </div>
                              </li>
                            </Link>
                          </>
                        );
                      } else {
                        return (
                          <>
                            <Link href="/trade/market-overview">
                              <li>
                                <div className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    className="w-6 h-6 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                  <a
                                    href="#"
                                    className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                  >
                                    {" "}
                                    {t("Market Overview")}{" "}
                                  </a>
                                </div>
                              </li>
                            </Link>
                          </>
                        );
                      }
                    })()}
                    <li aria-current="page">
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="w-6 h-6 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                          {news?.title}
                        </span>
                      </div>
                    </li>
                  </ol>
                </nav>
                <div className="flex mb-8 md:mb-12 xl:mb-12 lg:mb-12 share-news">
                  <FacebookShareButton
                    url={`${process.env.NEXT_PUBLIC_WEB_URL}/trade/newsdetails?id=${news.id}`}
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  <LinkedinShareButton
                    url={`${process.env.NEXT_PUBLIC_WEB_URL}/trade/newsdetails?id=${news.id}`}
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                  <TwitterShareButton
                    url={`${process.env.NEXT_PUBLIC_WEB_URL}/trade/newsdetails?id=${news.id}`}
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 0.6 }}
                ></motion.div>
                {/* news data here html format data bindig here  */}
                <div className="d:w-9/12 xl:w-9/12 lg:w-9/12">
                  {/* <div dangerouslySetInnerHTML={{ __html: news.desc }} /> */}
                  {bodyContent}
                </div>
              </div>
            </div>
          </>
        )
      )}
    </>
  );
}

export const getServerSideProps = async ({ locale }: any) => {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
};

export default NewsDetails;

