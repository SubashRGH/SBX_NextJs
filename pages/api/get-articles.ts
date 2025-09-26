import { newsList } from "@/articles/article-data";

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { lang } = req.query;

  try {
    const articles = newsList.hasOwnProperty(lang as keyof typeof newsList)
      ? newsList[lang as keyof typeof newsList]
      : newsList["en"];

    const articlesSnippet = articles.map((article) => ({
      id: article?.id,
      title: article?.title,
      description: article?.description,
      image: article?.image,
    }));

    if (!articlesSnippet.length) {
      return res.status(404).json({ message: "Not Found" });
    }

    res.status(200).json(articlesSnippet);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
}
