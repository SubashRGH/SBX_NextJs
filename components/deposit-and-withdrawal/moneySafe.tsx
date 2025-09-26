import React, { Fragment, useEffect, useState } from "react";
import Container from "../Container";
import { moneySafeItems } from "@/constants";
import { useTranslation } from "next-i18next";

const MoneySafe = () => {
  const { t } = useTranslation("common");

  const [lang, setLang] = useState<any>();
  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
  }, []);
  return (
    <Container className="flex-col">
      <div className="flex flex-col">
        <div className="font-inter text-white text-[28px] md:text-[28px] md:mb-[20px] text-center">
          {t("Your money is safe with us")}
        </div>
        <div className="text-white2 text-[14px] md:text-[20px] font-normal text-center mb-[50px] md:mb-[80px]">
          {t(
            "As the best retail multi-asset broker, we apply multiple layers of security to keep your funds safe and instantly available to you upon request."
          )}
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-[40px] md:gap-[40px]">
          {moneySafeItems?.map((item) => {
            return (
              <div className="get-started-card-1 p-[60px] flex flex-col justify-center items-center text-center">
                <div className="mt-[30px]">
                  <img src={item?.img} className="mb-[10px]" />
                </div>
                <div className="text-white text-[18px] font-bold mb-[10px]">
                  {t(item?.header)}
                </div>
                <div className="text-white2 text-[14px] md:text-[16px] font-normal">
                  {t(item?.subText)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default MoneySafe;

