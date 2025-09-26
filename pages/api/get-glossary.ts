import { glossaryList } from "@/glossary/glossary-data";

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { lang } = req.query;

  try {
    const glossary = glossaryList.hasOwnProperty(
      lang as keyof typeof glossaryList
    )
      ? glossaryList[lang as keyof typeof glossaryList]
      : glossaryList["en"];

    const glossarySnippet = glossary.map((item) => ({
      faq_q: item.faq_q,
      faq_a: item.faq_a,
    }));

    if (!glossarySnippet.length) {
      return res.status(404).json({ message: "Not Found" });
    }

    res.status(200).json(glossarySnippet);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
}
