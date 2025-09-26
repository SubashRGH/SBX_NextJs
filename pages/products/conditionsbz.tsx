import { CheckIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import PageBanner from "../../components/PageBanner";
import PanelHeader from "../../components/PanelHeader";
import styles from "../../styles/ProductsConditions.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

export default function ConditionsBz() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const Swap = dynamic(() => import("../../components/product/Swap"));
  useEffect(() => {
    const data = sessionStorage.getItem("country");
    if (data === "CN") {
      router.push("/products/conditionsbz");
    } else {
      router.push("/products/conditions");
    }
  }, []);
  return (
    <div>
      <PageBanner
        title={t("Trading Condition")}
        description={t("Find more details about trading our products")}
        imgSrc="/static/images/products/cpt_trading_banner_element.svg"
        size="sm"
      />
      <div className="bg-[#F5F6FA]">
        <Main />
        <Swap
          title={t(
            "Please bear in mind that when trading forex pairs, triple swaps are charged on Wednesdays (to cover the weekend fee)."
          )}
        />
      </div>
    </div>
  );
}

function Main() {
  const { t } = useTranslation("common");
  const Table = dynamic(() => import("../../components/product/Table"));
  return (
    <div className="max-w-6xl mx-auto bg-white py-10 md:py-28 rounded-3xl space-y-10 md:space-y-28">
      <div>
        <PanelHeader
          className="max-w-2xl"
          title={t("Trading Hours")}
          description={t(
            "The trading hours (in GMT+0) for all instruments in winter (November to March)"
          )}
        />
        {/* <div className="w-2/5"></div> */}
        <Table
          firstClassName="w-1/2 md:w-2/5"
          first={t("Trading Products")}
          last={t("Trading Time based on (GMT+0)")}
          list={[
            [
              [t("FX")],
              [
                t(
                  `Sunday: 21:05 - 24:00\nMonday to Thursday: 00:00 - 20:59, 21:05 - 24:00\nFriday: 00:00 - 20:55`
                ),
              ],
            ],
            [
              [t("XAUUSD"), t("XAGUSD"), t("XNGUSD"), t("USOUSD")],
              [
                t(
                  `Sunday: 22:05 - 24:00\nMonday to Thursday: 00:00 - 20:59, 22:01 - 24:00\nFriday: 00:00 - 20:55`
                ),
              ],
            ],
            [
              [t("UKOUSD")],
              [
                t(
                  `Monday: 00:05 - 20:59\nTuesday to Thursday: 00:01 - 20:59\nFriday: 00:01 - 20:55`
                ),
              ],
            ],
            [
              [t("U30USD"), t("NASUSD"), t("SPXUSD")],
              [
                t(
                  `Sunday: 22:05 - 24:00\nMonday to Thursday: 00:00 - 20:15, 20:30 - 21:00, 22:05 - 24:00\nFriday: 00:00 - 20:15 , 20:30 - 20:55`
                ),
              ],
            ],
            [
              [t("100GBP"), t("E50EUR"), t("D30EUR")],
              [
                t(
                  `Sunday: 22:05 - 24:00\nMonday to Thursday: 00:00 - 21:00, 22:00 - 24:00\nFriday: 00:00 - 20:55`
                ),
              ],
            ],
            [
              [t("H33HKD"), t("225JPY")],
              [
                t(
                  `Sunday: 22:05 - 24:00\nMonday to Thursday: 00:00 - 21:00, 22:00 - 24:00\nFriday: 00:00 - 20:55`
                ),
              ],
            ],
            [
              [t("CHN50USD")],
              [t("Monday to Friday: 01:00 - 08:30, 09:00 - 20:45")],
            ],
          ]}
        />
      </div>
      {/* Margin and levearge */}
      <div>
        <PanelHeader
          className="max-w-2xl"
          title={t("Margin & Leverage")}
          description={t(
            "Maximum leverage changes based on your account’s equity"
          )}
        />
        <Table
          firstClassName="w-1/2"
          first={t("Leverage")}
          last={t("Equity")}
          list={[
            [["1:1000"], [t("between 0 -$1,000 equity")]],
            [["1:500"], [t("between $1000 -$20,000 equity")]],
            [["1:400"], [t("between $20,000-$50,000 equity")]],
            [["1:300"], [t("between $50,000-$100,000 equity")]],
            [["1:200"], [t("between $100,000- $200,000 equity")]],
            [["1:100"], [t("between $200,000 - $1,000,000 equity")]],
            [["1:50"], [t("above $1,000,000")]],
          ]}
        />
      </div>
      <div>
        <PanelHeader
          className="max-w-2xl"
          title={t("Spreads")}
          description={t(
            "Trade a wide range of leveraged products with tight Spreads as low as 0.5 Pips"
          )}
        />
        <Table
          firstClassName="w-1/2"
          first={t("Markets")}
          last={t("Spread from")}
          list={[
            [
              [t("Forex")],
              [
                t("Majors") + ": 1.3",
                t("Minors") + ": 1.9",
                t("Exotic") + ": 2",
              ],
            ],
            [[t("Commodities")], ["1.7"]],
            [[t("Futures")], ["1.7"]],
            [[t("Stocks")], ["1.5"]],
            [[t("Crypto")], ["4.1"]],
          ]}
        />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="max-w-6xl mx-auto space-y-5 py-10 md:py-20 px-4 md:px-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 1 },
        }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <h2 className="text-2xl md:text-3xl intro-font">Trading Conditions</h2>
        <p className="text-[#6D7987]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo doloresLorem
          ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 1 },
        }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-[#0B1642]">Lorem ipsum dolor sit</h3>
        <p className="text-[#6D7987]">
          By visiting our websites, we obtain information such as the IP address
          used by your computer or mobile device, the operating system (OS), the
          browser type and version, the length of your visit, the date and time
          of your visit, links you have clicked, and information you have
          provided when you registered. When you visit our website, we will ask
          your permission to set cookies. The information you provide, such as
          your full name, email address, and contact information, will be kept
          confidential in our database for customer and technical support
          purposes.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 1 },
        }}
        transition={{ duration: 0.4 }}
      >
        <h3>Lorem ipsum dolor sit</h3>
        <p className="text-[#6D7987]">
          By visiting our websites, we obtain information such as the IP address
          used by your computer or mobile device, the operating system (OS), the
          browser type and version, the length of your visit, the date and time
          of your visit, links you have clicked, and information you have
          provided when you registered. When you visit our website, we will ask
          your permission to set cookies. The information you provide, such as
          your full name, email address, and contact information, will be kept
          confidential in our database for customer and technical support
          purposes.
        </p>
      </motion.div>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 1 },
        }}
        transition={{ duration: 0.4 }}
        className="text-[#6D7987]"
      >
        By visiting our websites, we obtain information such as the IP address
        used by your computer or mobile device, the operating system (OS), the
        browser type and version, the length of your visit, the date and time of
        your visit, links you have clicked, and information you have provided
        when you registered. When you visit our website, we will ask your
        permission to set cookies. The information you provide, such as your
        full name, email address, and contact information, will be kept
        confidential in our database for customer and technical support
        purposes.
      </motion.p>
    </div>
  );
}

function Pricing() {
  const { t } = useTranslation("common");
  return (
    <div className="gray-bg py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 1 },
          }}
          transition={{ duration: 0.8 }}
          className="space-y-2"
        >
          <h2 className="text-2xl md:text-3xl intro-font">Pricing Overview</h2>
          <p className="text-[#6D7987]">
            Get ultra-competitive spreads and commissions across all asset
            classes, with even better rates as your volume increases.
          </p>
        </motion.div>
        <ul className="flex flex-wrap">
          {new Array(5).fill(undefined).map((_, index) => (
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.5 + index / 10 }}
              className={classNames(
                "w-[48%] odd:mr-[4%] md:w-[30%] bg-white rounded-3xl px-5 py-5 md:py-11 mt-5 md:mt-11",
                {
                  "md:mr-[5%]": (index + 1) % 3,
                  "md:mr-0 md:odd:mr-0": !((index + 1) % 3),
                }
              )}
            >
              <div className="text-xl md:text-2xl mb-1 md:mb-2.5">
                {t("Forex")}
              </div>
              <div className="text-[#6D7987] mb-2.5">Commissions from</div>
              <div className="text-3xl md:text-5xl mb-2.5">$1</div>
              <div className="text-[#6D7987] mb-3 md:mb-4">On US Stocks</div>
              <div className="text-[#6D7987] mb-2 md:mb-5">
                We offer low commissions and tight spreads across our entire
                range of commodities.
              </div>
              <Link href="/">
                <span className="client-color">See full pricing</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
