import { CheckIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { motion } from "framer-motion";
import PanelHeader from "../PanelHeader";
import Image from "next/image";
import Container from "../Container";
import { useTranslation } from "next-i18next";
const LOREM_GROUP = [
  [
    { color: "#00b144", content: "50+ preinstalled technical indicators" },
    { color: "#25D5F0", content: "24 analytical charting tools" },
    { color: "#19DBE5", content: "3 chart types & 9 time-frames" },
    { color: "#13E0DE", content: "1-click trading & trade from charts" },
    { color: "#00b144", content: "Trailing Stop" },
  ],
  [
    { color: "#00b144", content: "Easy to use interface" },
    { color: "#25D5F0", content: "Fully customizable charts" },
    { color: "#19DBE5", content: "Add custom EAs & indicators" },
    { color: "#13E0DE", content: "News feed & broker mailbox" },
    { color: "#00b144", content: "Available for Windows or Mac" },
  ],
];

const COLORS = ["#00b144", "#25D5F0", "#19DBE5", "#13E0DE", "#00b144"];

interface Props {
  title: string;
  description?: string;
  group: string[][];
  headerClassName?: string;
  semiTitle?: string;
}

export default function PlatformLorem({
  title,
  description,
  group,
  headerClassName,
  semiTitle,
}: Props) {
  const { t } = useTranslation("common");

  return (
    <Container className="!px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-[150px]">
        <div className="flex flex-col gap-4 justify-center">
          <p className="text-turquoise">We got you</p>
          <h1 className="sbTextH2">
            cTrader Is <br />
            For <span className="text-turquoise">All Types Of Traders</span>
          </h1>
          <p className="sbTextGray-p mt-4">
            As a licensed and regulated global broker, we provide multiple
            account security options to ensure your peace of mind.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-4 lg:mt-0">
          <div className="flex flex-col gap-4 mt-4 lg:mt-0 w-full">
            <h3 className="text-[22px] font-[500]">
              Key features and benefits :
            </h3>
            <ul className="space-y-4 md:ml-0  md:space-y-0 md:flex md:space-x-4 xl:space-x-14">
              {group.map((list, index) => (
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 80 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 0.4 + index / 10 }}
                  key={index}
                  className="flex-1 space-y-4 text-sm"
                >
                  {list.map((item, i) => (
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0, y: 80 },
                        visible: { opacity: 1, y: 1 },
                      }}
                      transition={{ duration: 0.4, delay: i / 10 }}
                      key={i}
                      className="flex space-x-4 items-center "
                    >
                      <span
                        className={classNames(
                          `flex items-center justify-center text-white w-7 h-7 rounded-full bullet${i} bg-turquoise`
                        )}
                      >
                        {/* <CheckIcon style={{ width: '12em', height: '1em' }} /> */}
                        <svg
                          className="mt-px"
                          xmlns="http://www.w3.org/2000/svg"
                          height="13px"
                          version="1.1"
                          viewBox="0 0 18 15"
                          width="15px"
                        >
                          <title />
                          <desc />
                          <defs />
                          <g
                            fill="none"
                            fillRule="evenodd"
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                          >
                            <g
                              fill="#000"
                              id="Core"
                              transform="translate(-423.000000, -47.000000)"
                            >
                              <g
                                id="check"
                                transform="translate(423.000000, 47.500000)"
                              >
                                <path
                                  d="M6,10.2 L1.8,6 L0.4,7.4 L6,13 L18,1 L16.6,-0.4 L6,10.2 Z"
                                  id="Shape"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <div className="text-base text-[#F1F3F9] opacity-60">
                        {item}
                      </div>
                    </motion.div>
                  ))}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

