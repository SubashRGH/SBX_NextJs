import { useTranslation } from "next-i18next";
import { useRef } from "react";

const AccordionItem = ({ faq, active, onToggle }: any) => {
  const { t } = useTranslation("common");
  const { faq_q, faq_a } = faq;

  const contentEl = useRef<any>();

  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <button
        className="button !text-white flex !flex-nowrap gap-3"
        onClick={onToggle}
      >
        <span className="text-base lg:text-lg">{t(faq_q)}</span>
        <span className="control">
          {active ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="15"
              viewBox="0 0 25 15"
              fill="none"
            >
              <path
                d="M1 0.820312L12.5 12.8203L24 0.820312"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="15"
              viewBox="0 0 25 15"
              fill="none"
            >
              <path
                d="M24 13.8203L12.5 1.82031L1 13.8203"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          )}{" "}
        </span>
      </button>
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div
          className="answer text-sm lg:text-base  !text-white2"
          dangerouslySetInnerHTML={{ __html: faq_a }}
        ></div>
      </div>
    </li>
  );
};

export default AccordionItem;

