"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const CustomTable = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation("common");
  const [lang, setLang] = useState();
  const [intervalId, setIntervalId] = useState(null);
  const showAllTypes = useRef(false);
  const sectionRef = useRef(null);
  const [tableData, setTableData] = useState([]);
  // const [tableDataPrev, setTableDataPrev] = useState([]);
  const [country, setCountry] = useState();
  const prevActiveCategoryRef = useRef(null);

  const elementBIDRefs = useRef([]);
  const elementAskRefs = useRef([]);
  const elementSpreadRefs = useRef([]);

  const controller = new AbortController();
  const signal = controller.signal;

  let tableDataPrev = [];

  const { product } = router.query;

  // get news list
  const tradingData = async (symbolType) => {
    fetch(
      `${process.env.NEXT_PUBLIC_UTIL_API_URL}/Unified/GetSymbolPriceList/${symbolType}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
      signal
    )
      .then((res) => res.json())
      .then((response) => {
        const resData = response?.data;
        const modifiedData = resData.map((d) => {
          const validators = {
            bidState: "", // 'positive', 'negative','nochange'
            askState: "",
            spreadState: "",
          };
          return { ...d, ...validators };
        });

        validateTabledata(modifiedData);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  const validateTabledata = (resData) => {
    const prevData = tableDataPrev;
    const currentData = [...resData];

    if (prevData.length > 0) {
      for (let i = 0; i < currentData.length; i++) {
        const currentBid = currentData[i].bid;
        const prevBid = prevData[i].bid;
        if (currentBid > prevBid) {
          // console.log("positive");
          currentData[i].bidState = "positive";
        } else if (currentBid < prevBid) {
          // console.log("negative");
          currentData[i].bidState = "negative";
        } else {
          // console.log("noChange");
          currentData[i].bidState = "noChange";
        }

        const currentAsk = currentData[i].ask;
        const prevAsk = prevData[i].ask;
        if (currentAsk > prevAsk) {
          // console.log("positive");
          currentData[i].askState = "positive";
        } else if (currentAsk < prevAsk) {
          // console.log("negative");
          currentData[i].askState = "negative";
        } else {
          // console.log("noChange");
          currentData[i].askState = "noChange";
        }

        const currentSpread = currentData[i].spread;
        const prevSpread = prevData[i].spread;
        if (currentSpread > prevSpread) {
          // console.log("positive");
          currentData[i].spreadState = "positive";
        } else if (currentSpread < prevSpread) {
          // console.log("negative");
          currentData[i].spreadState = "negative";
        } else {
          // console.log("noChange");
          currentData[i].spreadState = "noChange";
        }
      }
    }
    setTableData(currentData);
    // setTableDataPrev([...currentData]);
    tableDataPrev = [...currentData];

    // Clear the bidState after 1 second
    setTimeout(() => {
      const modifiedData = currentData.map((d) => ({
        ...d,
        bidState: "", // Clearing bidState
        askState: "",
        spreadState: "",
      }));
      setTableData(modifiedData);
      // setTableDataPrev([...modifiedData]);
      tableDataPrev = [...modifiedData];
    }, 1500);
  };

  const getFlag = (name) => {
    const flagtype = [
      {
        flagName: "EURJPY",
        image: "/static/images/home/EURJPY.png",
      },
      {
        flagName: "EURUSD",
        image: "/static/images/home/EURUSD.png",
      },
      {
        flagName: "GBPJPY",
        image: "/static/images/home/GBPJPY.png",
      },
      {
        flagName: "GBPUSD",
        image: "/static/images/home/GBPUSD.png",
      },
      {
        flagName: "USDCAD",
        image: "/static/images/home/USDCAD.png",
      },
      {
        flagName: "USDJPY",
        image: "/static/images/home/USDJPY.png",
      },
      {
        flagName: "XAGUSD",
        image: "/static/images/home/XAGUSD.svg",
      },
      {
        flagName: "XAUUSD",
        image: "/static/images/home/XAUUSD.svg",
      },
      {
        flagName: "USOUSD",
        image: "/static/images/home/USOUUSD.svg",
      },
      {
        flagName: "UKOUSD",
        image: "/static/images/home/UKOUSD.svg",
      },
      {
        flagName: "NASUSD",
        image: "/static/images/home/NASUSD.svg",
      },
      {
        flagName: "100GBP",
        image: "/static/images/home/100GBP.svg",
      },
      {
        flagName: "D30EUR",
        image: "/static/images/home/DAX.svg",
      },
      {
        flagName: "SPXUSD",
        image: "/static/images/home/SPXUSD.svg",
      },
      {
        flagName: "BCHUSD",
        image: "/static/images/home/BCHUSD.svg",
      },
      {
        flagName: "LTCUSD",
        image: "/static/images/home/LTCUSD.svg",
      },
      {
        flagName: "ETHUSD",
        image: "/static/images/home/TradingProducts.svg",
      },
      {
        flagName: "RPLUSD",
        image: "/static/images/home/RPLUSD.svg",
      },
      {
        flagName: "BTCUSD",
        image: "/static/images/home/BTCUSD.svg",
      },

      {
        flagName: "TSLA",
        image: "/static/images/home/tesla.svg",
      },
      {
        flagName: "MSFT",
        image: "/static/images/home/MSFT.svg",
      },
      {
        flagName: "META",
        image: "/static/images/home/Meta.svg",
      },
      {
        flagName: "META",
        image: "/static/images/home/RPLUSDImg.svg",
      },
      {
        flagName: "AMZN",
        image: "/static/images/home/amazon.svg",
      },
      {
        flagName: "AAPL",
        image: "/static/images/home/apple.svg",
      },
    ];
    let flagImg;
    flagtype.map((item) => {
      if (item.flagName === name) {
        flagImg = item.image;
      }
    });
    return (
      <div className="max-w-[40px]">
        <img
          src={flagtype?.filter((i) => i.flagName === name)?.[0]?.image}
        ></img>
      </div>
    );
  };

  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setCountry(data);
    // tradingData(activeCategory);
    // const eventFire = setInterval(() => {
    //   tradingData();
    // }, 10000);

    const capitalizedStr =
      product.charAt(0).toUpperCase() + product.slice(1).toLowerCase();

    if (
      ["Forex", "Commodities", "Stocks", "Indices", "Crypto"].includes(
        capitalizedStr
      )
    ) {
      showAllTypes.current = true;
      setActiveCategory(capitalizedStr);
    } else {
      showAllTypes.current = true;
      setActiveCategory("Forex");
    }
    setTimeout(() => {
      if (sessionStorage.getItem("event") !== null) {
        setEventName(`${sessionStorage.getItem("event")}`);
      } else {
      }
    }, 500);
    () => {};
  }, [product]);

  // useEffect(() => {
  //   let intervalId;
  //   // Clear previous interval if it exists
  //   if (intervalId) {
  //     clearInterval(intervalId);
  //   }

  //   // Function to start the interval
  //   const startInterval = () => {
  //     intervalId = setInterval(async () => {
  //       await tradingData(activeCategory);
  //     }, 2000);
  //   };

  //   const callPrice = async () => {
  //     await startInterval();
  //   };

  //   // Start new interval if activeCategory exists
  //   if (activeCategory) {
  //     clearInterval(intervalId);
  //     controller.abort();
  //     tradingData(activeCategory); // reinitialized api
  //     callPrice();
  //   }

  //   // ==========================

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [activeCategory]); // Run effect when activeCategory changes
  useEffect(() => {
    let intervalId;

    const observer = new IntersectionObserver(
      (entries) => {
        // console.log(entries, "entries pol");
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (intervalId) {
              clearInterval(intervalId);
            }
            // Function to start the interval
            const startInterval = () => {
              intervalId = setInterval(async () => {
                await tradingData(activeCategory);
              }, 2000);
            };

            const callPrice = async () => {
              await startInterval();
            };

            // Start new interval if activeCategory exists
            if (activeCategory) {
              clearInterval(intervalId);
              controller.abort();
              tradingData(activeCategory); // reinitialized api
              callPrice();
            }
            console.log("Section is visible!");
            // tradingData(activeCategory);
          } else {
            clearInterval(intervalId);
            console.log("Section is not visible!");
          }
        });
      },
      {
        root: null, // relative to the viewport
        rootMargin: "150px",
        threshold: 0, // trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        clearInterval(intervalId);
        observer.unobserve(sectionRef.current);
      }
    };
  }, [intervalId, activeCategory]);

  return (
    <>
      <div
        ref={sectionRef}
        className="customtable  px-4 py-4 mt-4 overflow-x-auto"
      >
        {showAllTypes.current ? (
          <div className="w-full p-2 flex items-center customtablehead">
            {router.pathname.includes("forex") || showAllTypes.current ? (
              <div
                className={`cursor-pointer py-4 px-4 md:px-0 flex items-center justify-center w-[143px] rounded-[10px] transition-all duration-300 ease-in-out ${
                  activeCategory === "Forex"
                    ? "bg-[#00b144] text-black"
                    : "bg-transparent text-[#A6A9BC]"
                }`}
                onClick={() => {
                  setActiveCategory("Forex");
                }}
              >
                {t("FOREX")}
              </div>
            ) : null}

            {router.pathname.includes("indices") || showAllTypes.current ? (
              <div
                className={`cursor-pointer py-4 px-4 md:px-0 flex items-center justify-center w-[143px] rounded-[10px] transition-all duration-300 ease-in-out ${
                  activeCategory === "Indices"
                    ? "bg-[#00b144] text-black"
                    : "bg-transparent text-[#A6A9BC]"
                }`}
                onClick={() => {
                  setActiveCategory("Indices");
                }}
              >
                {t("INDICES")}
              </div>
            ) : null}

            {router.pathname.includes("commodities") || showAllTypes.current ? (
              <div
                className={`cursor-pointer py-4 px-4 md:px-0 flex items-center justify-center w-[143px] rounded-[10px] transition-all duration-300 ease-in-out ${
                  activeCategory === "Commodities"
                    ? "bg-[#00b144] text-black"
                    : "bg-transparent text-[#A6A9BC]"
                }`}
                onClick={() => {
                  setActiveCategory("Commodities");
                }}
              >
                {t("COMMODITIES")}
              </div>
            ) : null}

            {router.pathname.includes("crypto") || showAllTypes.current ? (
              <div
                className={`cursor-pointer py-4 px-4 md:px-0 flex items-center justify-center w-[143px] rounded-[10px] transition-all duration-300 ease-in-out ${
                  activeCategory === "Crypto"
                    ? "bg-[#00b144] text-black"
                    : "bg-transparent text-[#A6A9BC]"
                }`}
                onClick={() => {
                  setActiveCategory("Crypto");
                }}
              >
                {t("CRYPTO")}
              </div>
            ) : null}

            {router.pathname.includes("stocks") || showAllTypes.current ? (
              <div
                className={`cursor-pointer py-4 px-4 md:px-0 flex items-center justify-center w-[143px] rounded-[10px] transition-all duration-300 ease-in-out ${
                  activeCategory === "Stocks"
                    ? "bg-[#00b144] text-black"
                    : "bg-transparent text-[#A6A9BC]"
                }`}
                onClick={() => {
                  setActiveCategory("Stocks");
                }}
              >
                {t("STOCKS")}
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="w-full px-6">
          <table className="table-auto table-gap w-full">
            <thead>
              <tr>
                <th className="py-6 text-[#8E9090] text-left"></th>
                <th className="py-6 text-[#8E9090] text-left">{t("Symbol")}</th>
                <th className="py-6 text-[#8E9090] text-left">{t("BID")}</th>
                <th className="py-6 text-[#8E9090] text-left">{t("ASK")}</th>
                <th
                  style={{ width: 200 }}
                  className="py-6 text-[#8E9090] text-left relative"
                >
                  {t("SPREAD")}
                  <span className="spread-note">
                    Please note spreads are average ( floating ) and still may
                    depend on the market conditions
                  </span>
                </th>
                {/* <th className="py-6 text-[#8E9090] text-left">{t("CHANGE")}</th> */}
              </tr>
            </thead>
            <tbody className="text-white custom-stats">
              {tableData && tableData.length ? (
                tableData.map((item, idx) => {
                  return (
                    <tr className="border-table" key={idx}>
                      <td className="flex img-td items-center justify-center text-center">
                        {getFlag(item?.symbol)}
                      </td>
                      <td className="text-left">
                        <p className="font-normal text-sm text-white">
                          {t(item?.symbol || "-")}
                        </p>
                        <p className="font-normal text-[10px] text-[#8E9090]">
                          {t(item?.symbol || "-")}
                        </p>
                      </td>
                      <td className="text-left font-normal text-sm text-white">
                        <span
                          ref={(element) =>
                            (elementBIDRefs.current[idx] = element)
                          }
                          className={`stats ${
                            item.bidState === "positive"
                              ? "stats-green"
                              : item.bidState === "negative"
                              ? "stats-red"
                              : ""
                          }`}
                        >
                          {t(item?.bid || "-")}
                        </span>
                      </td>
                      <td className="text-left font-normal text-sm text-white">
                        <span
                          ref={(element) =>
                            (elementAskRefs.current[idx] = element)
                          }
                          className={`stats ${
                            item.askState === "positive"
                              ? "stats-green"
                              : item.askState === "negative"
                              ? "stats-red"
                              : ""
                          }`}
                        >
                          {t(item?.ask || "-")}
                        </span>
                      </td>
                      <td className="text-left">
                        <span
                          ref={(element) =>
                            (elementSpreadRefs.current[idx] = element)
                          }
                          className={`stats ${
                            item.spreadState === "positive"
                              ? "stats-green"
                              : item.spreadState === "negative"
                              ? "stats-red"
                              : ""
                          }`}
                        >
                          {t(item?.spread || "-")}
                        </span>
                      </td>
                      {/* <td className="text-left">
                        <div className="border border-[#33CCFF] rounded-[20px] text-[#33CCFF] flex justify-center items-center py-2 max-w-[70px]">
                          {t(item?.change || "-")}
                        </div>
                      </td> */}
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td className="py-5 text-center" colSpan={6}>
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CustomTable;
