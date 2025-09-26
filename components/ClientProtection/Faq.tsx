import { FC, useState } from "react";
import { FaqItem } from "./FaqItem";
import { useTranslation } from "next-i18next";

interface FaqsProps {
  faqs: {
    question: string;
    answer: string | React.ReactNode;
  }[];
}

export const Faqs: FC<FaqsProps> = ({ faqs }) => {
  const { t } = useTranslation();

  const [activeFaqId, setActiveFaqId] = useState<number>(-1);

  return (
    <div className="mx-auto mt-10 text-center">
      <h2 className="font-[500] text-[40px]">Frequently Asked Questions</h2>
      <p className="text-[#D2D3DF] text-[20px] font-[300] leading-[1.4]">
        Explore the genuine feedback and testimonials from our satisfied users
      </p>
      <ul className="max-w-2xl mx-auto mt-20 divide-y divide-[1px] divide-[#525252] rounded-xl text-left">
        {faqs.map((item, index) => {
          return (
            <FaqItem
              key={index}
              faq={{ question: item.question, answer: item.answer }}
              isActive={index === activeFaqId}
              handleToggle={() =>
                activeFaqId === index
                  ? setActiveFaqId(-1)
                  : setActiveFaqId(index)
              }
            />
          );
        })}
      </ul>
    </div>
  );
};

