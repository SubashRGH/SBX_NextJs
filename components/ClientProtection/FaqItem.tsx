import { FC, isValidElement } from "react";

export const FaqItem: FC<FaqItemProps> = ({ faq, isActive, handleToggle }) => {
  return (
    <li className="flex items-center flex-col gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
      <button
        className="w-full button !text-white flex !flex-nowrap gap-3 items-center"
        onClick={handleToggle}
      >
        <span className="control">
          {!isActive ? (
            <svg
              className="w-5 h-5 text-[#D2D3DF] transition group-open:rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-[#D2D3DF] transition rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          )}
        </span>
        <span className="text-xl md:text-[24px] font-normal text-left">
          {faq.question}
        </span>
      </button>
      {isActive && (
        <div className="text-[#D2D3DF] text-[16px] md:text-[20px] font-[300] list-disc pl-6">
          {isValidElement(faq.answer) ? faq.answer : <p>{faq.answer}</p>}
        </div>
      )}
    </li>
  );
};
