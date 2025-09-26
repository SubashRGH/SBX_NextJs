import React, { useState } from "react";
import { Trans, useTranslation } from "next-i18next";

const Accordion = () => {
  const { t } = useTranslation("common");

  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleAccordion = (accordionNumber) => {
    switch (accordionNumber) {
      case 1:
        setIsOpen1(!isOpen1);
        break;
      case 2:
        setIsOpen2(!isOpen2);
        break;
      case 3:
        setIsOpen3(!isOpen3);
        break;
      case 4:
        setIsOpen4(!isOpen4);
        break;
      default:
        break;
    }
  };

  return (
    <div className="">
      <div className="flex flex-col lg:px-0 px-6 gap-4 shadow-md rounded-md">
        <div className="relative">
          <div
            className={`border rounded-[20px] border-[#FFFFFF2B] ${
              isOpen1 ? "open-accordian" : ""
            }`}
          >
            <input
              className="hidden"
              type="checkbox"
              id="accordion-item-1"
              checked={isOpen1}
              // onChange={() => toggleAccordion(1)}
            />
            <label
              className="cursor-default accordian-label flex font-normal text-3xl items-center text-white justify-between py-10 px-8"
              htmlFor="accordion-item-1"
            >
              <div className="stkbnx-heading text-white !text-left">
                <span className="font-extrabold stkbnx-heading text-white">
                  AOFA
                </span>{" "}
                - Stockbanx
              </div>
              <div>
                {/* {isOpen1 ? (
                  <>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 11.6665L9.41074 7.25576C9.73618 6.93032 10.2638 6.93032 10.5893 7.25576L15 11.6665"
                        stroke="white"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 8.8335L10.5893 13.2442C10.2638 13.5697 9.73618 13.5697 9.41074 13.2442L5 8.8335"
                        stroke="white"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                      />
                    </svg>
                  </>
                )} */}
              </div>
            </label>
            <div
              className={`accordion-content  px-6 pb-4 ${
                isOpen1 ? "" : "hidden"
              }`}
            >
              <p
                className="font-normal text-lg pl-2 lg:pr-16 text-[#A8ADBA] mb-4"
                dangerouslySetInnerHTML={{
                  __html: t(
                    "Stockbanx is licensed as an International Brokerage and Clearing House and is regulated by The Anjouan OMshore Finance Authority (AOFA), providing you with a reliable and compliant trading environment.",
                    {
                      interpolation: { escapeValue: false },
                    }
                  ),
                }}
              />
            </div>
          </div>
        </div>

        {/* <div className="relative">
          <div
            className={`border rounded-[20px] border-[#FFFFFF2B] ${
              isOpen2 ? "open-accordian" : ""
            }`}
          >
            <input
              className="hidden"
              type="checkbox"
              id="accordion-item-2"
              checked={isOpen2}
              onChange={() => toggleAccordion(2)}
            />
            <label
              className="accordian-label flex font-normal text-3xl items-center text-white justify-between cursor-pointer py-10 px-8"
              htmlFor="accordion-item-2"
            >
              <div>
                <span className="font-extrabold">AOFA</span>- Stockbanx PTY LTD
              </div>
              <div>
                {isOpen1 ? (
                  <>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 11.6665L9.41074 7.25576C9.73618 6.93032 10.2638 6.93032 10.5893 7.25576L15 11.6665"
                        stroke="white"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 8.8335L10.5893 13.2442C10.2638 13.5697 9.73618 13.5697 9.41074 13.2442L5 8.8335"
                        stroke="white"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                      />
                    </svg>
                  </>
                )}
              </div>
            </label>
            <div
              className={`accordion-content  px-6 pb-4 ${
                isOpen2 ? "" : "hidden"
              }`}
            >
              <p
                className="font-normal text-base pl-2 lg:pr-16 text-[#A8ADBA] mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("DisclaimerFour", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className={`border rounded-[20px] border-[#FFFFFF2B] ${
              isOpen3 ? "open-accordian" : ""
            }`}
          >
            <input
              className="hidden"
              type="checkbox"
              id="accordion-item-3"
              checked={isOpen3}
              onChange={() => toggleAccordion(3)}
            />
            <label
              className="accordian-label flex font-normal text-3xl items-center text-white justify-between cursor-pointer py-10 px-8"
              htmlFor="accordion-item-3"
            >
              <div>
                <span className="font-extrabold">IFSC</span> - Stockbanx Belize
              </div>
              <div>
                {isOpen3 ? (
                  <>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 11.6665L9.41074 7.25576C9.73618 6.93032 10.2638 6.93032 10.5893 7.25576L15 11.6665"
                        stroke="white"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 8.8335L10.5893 13.2442C10.2638 13.5697 9.73618 13.5697 9.41074 13.2442L5 8.8335"
                        stroke="white"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                      />
                    </svg>
                  </>
                )}
              </div>
            </label>
            <div
              className={`accordion-content  px-6 pb-4 ${
                isOpen3 ? "" : "hidden"
              }`}
            >
              <p
                className="font-normal text-base pl-2 lg:pr-16 text-[#A8ADBA] mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("DisclaimerThird", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              />
            </div>
          </div>
        </div> */}

        {/* <div className="relative">
          <div
            className={`border rounded-[20px] border-[#FFFFFF2B] ${
              isOpen4 ? "open-accordian" : ""
            }`}
          >
            <input
              className="hidden"
              type="checkbox"
              id="accordion-item-4"
              checked={isOpen4}
              onChange={() => toggleAccordion(4)}
            />
            <label
              className="accordian-label flex font-normal text-3xl items-center text-white justify-between cursor-pointer py-10 px-8"
              htmlFor="accordion-item-4"
            >
              <div>
                <span className="font-extrabold">AOFA -</span> Stockbanx Global Ltd
              </div>
              <div>
                {isOpen4 ? (
                  <>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 11.6665L9.41074 7.25576C9.73618 6.93032 10.2638 6.93032 10.5893 7.25576L15 11.6665"
                        stroke="white"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 8.8335L10.5893 13.2442C10.2638 13.5697 9.73618 13.5697 9.41074 13.2442L5 8.8335"
                        stroke="white"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                      />
                    </svg>
                  </>
                )}
              </div>
            </label>
            <div
              className={`accordion-content  px-6 pb-4 ${
                isOpen4 ? "" : "hidden"
              }`}
            >
              <p className="font-normal text-base pl-2 lg:pr-16 text-[#A8ADBA] mb-4">
                {t(
                  " Stockbanx operates globally with offices and teams around the world, offering localized support and tailored trading solutions. Our international reach allows us to understand and meet the unique needs of traders in different regions, making us a trusted partner in your financial journey.."
                )}
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Accordion;

