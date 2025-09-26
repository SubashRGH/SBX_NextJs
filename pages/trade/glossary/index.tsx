import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, NextPage } from "next";
import PageBanner from "@/components/PageBanner";
import AccordionItem from "@/components/AccordionItem";
import { LanguageContext } from "@/components/LanguageWrapper";

const Glossary: NextPage = ({ }) => {
  const { t } = useTranslation("common");
  const { language } = useContext(LanguageContext);
  const [selectedChar, setSelectedChar] = useState<string>("A");
  const [clicked, setClicked] = useState<string>("-1");
  const [data, setData] = useState<Glossaryitem[]>([]);
  const [filteredItems, setFilteredItems] = useState<Glossaryitem[]>([]);

  const handleToggle = (index: number) => {
    const newIndex = index.toString(); // Convert index to string
    setClicked(clicked === newIndex ? "-1" : newIndex);
  };

  const resetList = (char: string) => {
    const filtered = data.filter((item) => item.faq_q.startsWith(char));
    setFilteredItems(filtered);
  };

  const retrieveNews = async () => {
    try {
      const response = await fetch(
        `/api/get-glossary?lang=${language.lang || "en"}`,
        { method: "GET" }
      );

      if (response.status !== 200) {
        console.error("Error with API, status code:", response.status);
        throw new Error("Error fetching data from API");
      }

      const fetchedData = await response.json();
      console.log("Fetched data:", fetchedData); // Log the data to check its structure

      setData(fetchedData as Glossaryitem[]);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };

  useEffect(() => {
    retrieveNews();
  }, [language.lang]);

  useEffect(() => {
    resetList(selectedChar);
  }, [selectedChar, data]);

  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  return (
    <>
      <PageBanner
        title={t("Glossary of Forex trading terms")}
        description={t(
          "Improve your knowledge of trading terms with our glossary. Get a better understanding of trading terms and definitions used across the financial markets."
        )}
        size="md"
        imgSrc="/static/images/glossary/glossary.png"
        btnText={t("")}
      />

      {/* Alphabet Tabs */}
      <div className="container mx-auto px-9">
        <div className="mt-5 flex flex-wrap justify-between">
          {alphabet.map((char) => (
            <button
              key={char}
              className={`px-2 py-1 rounded-md text-white hover:bg-gray-200 ${
                selectedChar === char ? "border bg-blue-500" : ""
              }`}
              onClick={() => setSelectedChar(char)}
            >
              {char}
            </button>
          ))}
        </div>

        <div className="mt-12 px-11">
          <h3 className="intro-font text-2xl mb-4 text-white border-b-2 pb-2">{selectedChar}</h3>

          {/* Two Column Layout for FAQ Items with Space */}
          <div className="flex flex-wrap -mx-4">
            <div className="w-1/2 px-4">
              <ul className="accordion">
                {filteredItems.slice(0, Math.ceil(filteredItems.length / 2)).map((item, index) => (
                  <AccordionItem
                    key={index}
                    faq={item}
                    active={clicked === index.toString()}
                    onToggle={() => handleToggle(index)}
                  />
                ))}
              </ul>
            </div>

            <div className="w-1/2 px-4">
              <ul className="accordion">
                {filteredItems.slice(Math.ceil(filteredItems.length / 2)).map((item, index) => (
                  <AccordionItem
                    key={index + Math.ceil(filteredItems.length / 2)}
                    faq={item}
                    active={clicked === (index + Math.ceil(filteredItems.length / 2)).toString()}
                    onToggle={() => handleToggle(index + Math.ceil(filteredItems.length / 2))}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Glossary;
