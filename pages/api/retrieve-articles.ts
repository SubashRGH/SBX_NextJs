import { newsList } from "@/articles/article-data";

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, lang } = req.query;

  try {
    if (!id) {
      return res.status(400).json({ message: "Article is required" });
    }

    let articles = newsList.hasOwnProperty(lang as keyof typeof newsList)
      ? newsList[lang as keyof typeof newsList]
      : newsList["en"];

    if (!articles)
      return res.status(400).json({ message: "Article Not Found" });

    /* This section is to check if article is not present in
        current given language, then it will check in "en" version
        as last option
    */
    let article = articles.filter((article) => article.id === id);

    if (!article.length && lang !== "en") {
      let articles = newsList["en"];
      article = articles.filter((article) => article.id === id);
    }

    if (!article.length) return res.status(404).json({ message: "Not Found" });

    if (article.length > 1)
      return res.status(404).json({ message: "Duplicate Article Found" });

    res.status(200).json(article.at(0));
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
}
