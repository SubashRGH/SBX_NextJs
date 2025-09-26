import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useId, useState } from "react";
import uniqid from "uniqid";
import AccordionItem from "../AccordionItem";



export default function DynamicFaq({ dynamiclist }: any) {
  const [activeIdx, setActiveIdx] = useState<number>();
  const [list, setList] = useState<any>([]);
  const router = useRouter();
  const [clicked, setClicked] = useState("0");
  const { t } = useTranslation("common");
  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();
  const handleToggle = (index: SetStateAction<string>) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <div className="max-w-6xl w-full mx-auto py-10 md:py-14 px-4 flex gap-[10px] flex-col lg:flex-row">
       <h3 className="intro-font text-2xl md:text-3xl mb-7 text-white w-full lg:w-[30%]">
        {t("Frequently Asked Questions")}
      </h3>
      <div className="lg:w-[70%] w-full">
      <ul className="accordion">
        {dynamiclist &&
          dynamiclist.map((faq: any, index: any) => (
            <AccordionItem
              onToggle={() => handleToggle(index)}
              active={clicked === index}
              key={index}
              faq={faq}
            />
          ))}
      </ul>
      </div>
      {/* <ul>
        {
          list && list.map((item: any, index: any) => {
            const checked = index === activeIdx
            return (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 80 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.4, delay: index / 10 }}
                className={classNames({
                  'border border-[#28D4F7] px-5 md:px-12 py-4 md:py-9 rounded-3xl space-y-1': checked,
                  'px-4 py-5': !checked,
                  'border-b': !checked && (typeof activeIdx === 'undefined' || (typeof activeIdx === 'number' && activeIdx - 1 !== index))
                })}
                onClick={() => setActiveIdx(index)}
              >
                <div className="flex space-x-5">
                  <h4
                    className={classNames('flex-1', {
                      'text-xl md:text-2xl': checked,
                    })}
                  >
                    {item.faq_q}
                  </h4>
                  <button type="button" className="flex-shrink-0" >
                    {
                      checked ?
                        <MinusIcon width="1em" height="1em" className="text-[#28D4F7] text-lg" />
                        :
                        <PlusIcon width="1em" height="1em" className="text-[#0B1642] text-lg" />
                    }
                  </button>
                </div>
                {
                  checked ?
                    <p className="text-[#6D7987]">{item.faq_a}</p>
                    :
                    null
                }
              </motion.li>
            )
          })
        }
      </ul> */}
    </div>
  );
}

