import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageBanner from "../../components/PageBanner";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ClockIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Loader from "../../components/Loader";
function MarketOverview() {
  const { t } = useTranslation("common");
  const [market, setMarket] = useState<any>("");
  const [lang, setLang] = useState<any>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleUpdate = (item: any) => {
    router.push(
      {
        pathname: "/trade/newsdetails",
        query: { id: item },
      },
      undefined,
      { shallow: true }
    );
  };
  // get news list
  const news = () => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/SiteAPI/GetNewsList`, {
      method: "POST",
      body: JSON.stringify({
        sec_name: "",
        lang_name: lang,
        lic_name: "",
        country_code: "",
        action_name: "",
        page_name: "",
        meta_data: "",
        raw_url: "",
        business_id: "",
        parameter: "",
        startPage: 0,
        pageNum: 0,
        sort_type: "",
        sort_field: "",
        language: "",
        search: "",
        news_type: "Market_Analysis",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setMarket(response?.data?.result);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (lang) news();
  }, [lang]);

  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
  }, []);

  return (
    <>
      <PageBanner
        title={t("Market Overview")}
        description={t(
          "Financial events provide daily information for your trading decisions. Find out how to develop your market intuition and improve your risk management strategies with resources created by our market analysts."
        )}
        imgSrc="/static/images/banner/market-analysis.svg"
        size="sm"
      />

      <div className="bg-white">
        <div className="stkbnx-container md:py-20 xl:py-20 lg:py-20 py-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base read-font text-center mb-10 md:w-7/12 xl:w-7/12 lg:w-7/12 mx-auto">
              {t("newstrade")}
            </p>{" "}
          </motion.div>
          {/* news data here    */}
        </div>
      </div>
      <div className="gray-bg">
        <div className="stkbnx-container md:py-20 xl:py-20 lg:py-20 py-4">
          {loading ? (
            <>
              <Loader />
            </>
          ) : (
            <div className="flex sm:flex-row lg:flex-row md:space-x-5 lg:space-x-5 xl:space-x-5 flex-col items-center md:flex-wrap	xl:flex-wrap	lg:flex-wrap">
              {market &&
                market.map((item: any, index: any) => {
                  return (
                    <div className="md:basis-[31%]">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, delay: index / 10 }}
                      >
                        <div className="bg-white rounded-[20px] mb-10 min-h-[492px]">
                          <div className="relative">
                            <Image
                              src={item.news_image}
                              alt="news"
                              width="100%"
                              height="60%"
                              layout="responsive"
                              objectFit="cover"
                              className="rounded-t-lg"
                            />
                            <div className="date-news">
                              <div className="flex items-center">
                                <ClockIcon className="h-5 w-5 text-white mr-1" />{" "}
                                {item.create_date}
                              </div>
                            </div>
                          </div>
                          <div className="p-10">
                            <div className="news-heading mb-2">
                              {item.news_title}
                            </div>
                            <p className="text-base read-font mb-4 clamp">
                              {item.news_description}{" "}
                            </p>
                            {/* <a href='#' className='link-btn'> Read More</a> */}
                            <button
                              className="link-btn"
                              onClick={() => handleUpdate(item.tb_news_id)}
                            >
                              {" "}
                              {t("Read More")}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default MarketOverview;

