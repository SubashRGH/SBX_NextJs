import classNames from "classnames";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function License() {
  const [fca, setfca] = useState<boolean>(false);
  const [sa, setSa] = useState(false);
  const [beliz, setbeliz] = useState<boolean>(false);
  const [country, setCountry] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    if (country) {
      if (["CN", "HK", "TW"].includes(country)) {
        setbeliz(true);
        setfca(false);
        setSa(false);
        return;
      } else if (country === "GB") {
        setfca(true);
        setbeliz(false);
        setSa(false);
        return;
      } else {
        setSa(true);
        setfca(false);
        setbeliz(false);
        return;
      }
    }
  }, [country]);

  useEffect(() => {
    const data = sessionStorage.getItem("country");
    if (data) {
      setCountry(data);
    } else {
      const countryDefault = sessionStorage.getItem("countryDefault");
      setCountry(countryDefault);
    }
  }, []);

  const licenseChange = (data: any) => {
    sessionStorage.setItem("country", data);
    setTimeout(() => {
      router.reload();
    }, 500);
  };

  const gotoFCA = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_UK_URL}`,
      "_blank",
      "noopener,noreferrer"
    );
    sessionStorage.setItem("country", "GB");
    setTimeout(() => {
      router.reload();
    }, 100);
  };

  const { t } = useTranslation("common");
  return (
    <>
      <div className="flex sm:flex-row lg:flex-row lg:space-x-4 md:space-x-1 md:flex-col flex-col justify-between items-center">
        <div className="md:basis-2/6 mb-mt">
          <div
            className={classNames(
              `beliz-bg relative min-h-[473px] hover:shadow-xl
              }`
            )}
          >
            <div
              className={classNames(
                `fca-header text-2xl text-white intro-font rounded-t-3xl
                }`
              )}
            >
              FCA
            </div>
            <div className="fca-content my-2 px-6">
              <ul className="text-sm">
                <li className="pb-lg"> {t("Stockbanx UK")} </li>
                <li>
                  {" "}
                  {t(
                    "Client funds are guarded in segregated bank accounts"
                  )}{" "}
                </li>
                <li> {t("Negative Balance Protection")} </li>
                <li> {t("Leverage up to 1:30")} </li>
                <li>
                  {" "}
                  {t(
                    "For Retail clients, Professional clients and Market Counterparties"
                  )}{" "}
                </li>
                <button
                  onClick={() => gotoFCA()}
                  className="rounded-full cmn-btn bg-primary mt-3 continue-btn"
                >
                  {t("Continue")}{" "}
                </button>

                {/* {
                  fca ? <>   <button className="rounded-full cmn-btn bg-primary mt-3 continue-btn selected-btn">
                    <Image
                      src="/static/images/icons/check-mark.svg"
                      alt="selected"
                      width={24}
                      height={24}
                    />
                    <span className='ml-2'> {t("Selected")}</span>  </button> </> : <>
                    <button onClick={() => licenseChange('GB')} className="rounded-full cmn-btn bg-primary mt-3 continue-btn">{t("Continue")} </button>
                  </>
                } */}
              </ul>
            </div>
          </div>
        </div>
        <div className="md:basis-2/6 mb-mt">
          <div
            className={classNames(
              `beliz-bg relative min-h-[473px] hover:shadow-xl
              }`
            )}
          >
            <div
              className={classNames(
                `fca-header text-2xl text-white intro-font rounded-t-3xl
                }`
              )}
            >
              AOFA
            </div>
            <div className="sa-content my-2 px-6">
              <ul className="text-sm">
                <li className="pb-lg"> {t("Stockbanx")} </li>
                <li>
                  {" "}
                  {t(
                    "Client funds are guarded in separated bank accounts"
                  )}{" "}
                </li>
                <li> {t("Negative Balance Protection")}</li>
                <li> {t("Leverage up to 1:500")} </li>
                <li>
                  {" "}
                  {t(
                    "For Retail clients, Professional clients and Market Counterparties"
                  )}{" "}
                </li>
                {sa ? (
                  <>
                    {" "}
                    <button className="rounded-full cmn-btn bg-primary mt-3 continue-btn selected-btn">
                      <Image
                        src="/static/images/icons/check-mark.svg"
                        alt="selected"
                        width={24}
                        height={24}
                      />
                      <span className="ml-2"> {t("Selected")}</span>{" "}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => licenseChange("AE")}
                      className="rounded-full cmn-btn bg-primary mt-3 continue-btn"
                    >
                      {t("Continue")}{" "}
                    </button>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="md:basis-2/6 mb-mt">
          <div
            className={classNames(
              `beliz-bg relative min-h-[473px] hover:shadow-xl
              }`
            )}
          >
            <div
              className={classNames(
                `fca-header text-2xl text-white intro-font rounded-t-3xl
                }`
              )}
            >
              IFSC
            </div>
            <div className="fca-content my-2 px-6">
              <ul className="text-sm">
                <li className="pb-lg"> {t("Stockbanx International")}</li>
                <li>
                  {" "}
                  {t("Client funds are guarded in separated bank accounts")}
                </li>
                <li> {t("Negative Balance Protection")}</li>
                <li> {t("Leverage up to 1:500")}</li>
                <li>
                  {" "}
                  {t(
                    "For Retail clients, Professional clients and Market Counterparties"
                  )}
                </li>
                {beliz ? (
                  <>
                    {" "}
                    <button className="rounded-full cmn-btn bg-primary mt-3 continue-btn selected-btn">
                      <Image
                        src="/static/images/icons/check-mark.svg"
                        alt="selected"
                        width={24}
                        height={24}
                      />
                      <span className="ml-2"> {t("Selected")}</span>{" "}
                    </button>{" "}
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => licenseChange("CN")}
                      className="rounded-full cmn-btn bg-primary mt-3 continue-btn"
                    >
                      {t("Continue")}{" "}
                    </button>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm read-font text-center mt-4">
        {t(
          "The information on the website is displayed in accordance with the regulation you have chosen. If you would like to switch to a different regulation, you can select another one from the menu and the website will adjust accordingly."
        )}{" "}
      </p>
    </>
  );
}

