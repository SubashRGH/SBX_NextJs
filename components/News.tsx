import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { LanguageContext } from "./LanguageWrapper";
import { getWebSelectedLang } from "@/utils/utils";

export default function News({ title, description, classText }: NewsProps) {
  const { language } = useContext(LanguageContext);

  const { t } = useTranslation("common");

  const router = useRouter();

  const [market, setMarket] = useState<ArticleSnippetList[]>([]);

  const retrieveNews = async () => {
    try {
      const data = await fetch(
        `/api/get-articles?lang=${language.lang || "en"}`,
        {
          method: "GET",
        }
      );

      if (data.status !== 200) {
        throw new Error("Something is Error with an API");
      }

      setMarket((await data.json()) as ArticleSnippetList[]);
    } catch (error) {
      setMarket([]);
    }
  };

  const handleUpdate = (item: string) => {
    router.push({
      pathname: `/trade/newsdetails/${item}`,
    });
  };

  useEffect(() => {
    retrieveNews();
  }, [language.lang]);

  return (
    <>
      <div className="">
        <div className="">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            <div className="stkbnx-heading-white text-center mb-2">
              {" "}
              {title}{" "}
            </div>{" "}
          </motion.div>
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
            <p className="text-base text-base-h read-font text-center mb-10">
              {description}
            </p>{" "}
          </motion.div>
          <div className="flex sm:flex-row lg:flex-row lg:space-x-5 xl:space-x-5 flex-col xl:items-center lg:items-center md:flex-wrap	xl:flex-wrap	lg:flex-wrap lg:justify-center xl:justify-center md:justify-between news-pad">
            {market &&
              market?.slice(0, 4).map((item: any, index: any) => {
                return (
                  //Older Code
                  // <div className={classText}>
                  //   <motion.div
                  //     initial="hidden"
                  //     key={index}
                  //     whileInView="visible"
                  //     viewport={{ once: true }}
                  //     variants={{
                  //       hidden: { opacity: 0, y: 50 },
                  //       visible: { opacity: 1, y: 0 },
                  //     }}
                  //     transition={{ duration: 0.4, delay: index / 10 }}
                  //   >
                  //     <div className="rounded-[20px] mb-10 lg:min-h-[440px] xl:min-h-[440px] md:min-h-[470px] border  border-solid border-[#7F8696] overflow-hidden">
                  //       <Image
                  //         src={item.news_image}
                  //         alt="news"
                  //         width="100%"
                  //         height="60%"
                  //         layout="responsive"
                  //         objectFit="cover"
                  //         className="rounded-t-lg"
                  //       />
                  //       <div className="lg:p-2 xl:p-2 p-2">
                  //         <div className="news-heading-white mb-2 text-white">
                  //           {item.news_title}
                  //         </div>
                  //         <p className="text-base text-white2 mb-4 clamp-white">
                  //           {item.news_description}{" "}
                  //         </p>
                  //         <button
                  //           className="link-btn"
                  //           onClick={() => handleUpdate(item.tb_news_id)}
                  //         >
                  //           {" "}
                  //           {t("Read More")}
                  //         </button>
                  //       </div>
                  //     </div>
                  //   </motion.div>
                  // </div>

                  //Latest Code
                  <div className={classText}>
                    <motion.div
                      initial="hidden"
                      key={index}
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.4, delay: index / 10 }}
                    >
                      <div className="rounded-[20px] mb-10 lg:min-h-[440px] xl:min-h-[440px] md:min-h-[470px] border  border-solid border-[#7F8696] overflow-hidden">
                        <Image
                          src={item.image}
                          alt="news"
                          width="100%"
                          height="85%"
                          layout="responsive"
                          objectFit="fill"
                          className="rounded-t-lg !object-contain bg-[#F6F7FB]"
                        />
                        <div className="lg:p-2 xl:p-2 p-2">
                          <div className="news-heading-white mb-2 text-white h-[50px] overflow-hidden overflow-ellipsis">
                            {item.title}
                          </div>
                          <p className="text-base text-white2 mb-4 clamp-white h-[140px] overflow-hidden overflow-ellipsis">
                            {item.description}{" "}
                          </p>
                          <button
                            className="link-btn"
                            onClick={() => handleUpdate(item.id)}
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
        </div>
      </div>
    </>
  );
}

