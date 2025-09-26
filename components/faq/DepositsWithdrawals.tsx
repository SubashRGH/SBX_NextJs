import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { motion } from "framer-motion";
import { SetStateAction, useEffect, useId, useState } from "react";
import uniqid from "uniqid";
import AccordionItem from "../AccordionItem";

export default function DepositsWithdrawals() {
  const [activeIdx, setActiveIdx] = useState<number>();
  const [list, setList] = useState<any>([]);
  const [clicked, setClicked] = useState("0");
  const [country, setCountry] = useState<any>();
  const handleToggle = (index: SetStateAction<string>) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  // get faq list
  const faq = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/SiteAPI/SearchFAQ`, {
      method: "POST",
      body: JSON.stringify({
        sec_name: "faq",
        lang_name: sessionStorage.getItem("lang"),
        lic_name: country,
        country_code: sessionStorage.getItem("country"),
        action_name: "SearchFAQ",
        page_name: "faq",
        meta_data: "string",
        raw_url: "string",
        business_id: "string",
        parameter: "string",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        const general = response?.data?.filter(
          (res: any) => res.faq_type === "Deposits_Withdrawals"
        );
        setList(general);
      });
  };

  // get language first
  const getLang = () => {
    if (sessionStorage.getItem("country") === "CN") {
      setCountry("Bleize");
    } else {
      setCountry("SA");
    }
  };

  useEffect(() => {
    getLang();
  }, []);

  useEffect(() => {
    if (country) faq();
  }, [country]);
  return (
    <div className="max-w-6xl mx-auto px-2 md:px-4 xl:px-4 lg:px-4">
      <ul className="accordion">
        {list &&
          list.map((faq: any, index: any) => (
            <AccordionItem
              onToggle={() => handleToggle(index)}
              active={clicked === index}
              key={index}
              faq={faq}
            />
          ))}
      </ul>
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
                    className={classNames('flex-1 text-left', {
                      'text-xl md:text-2xl text-left': checked,
                    })}
                  >
                    {item.faq_q}
                  </h4>
                  <button type="button" className="flex-shrink-0">
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
                    <p className="text-[#6D7987] text-left">{item.faq_a}</p>
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
