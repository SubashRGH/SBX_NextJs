import React from "react";
import { useTranslation } from "next-i18next";
import CustomTable from "./CustomTable";

const Embark = () => {
  const { t } = useTranslation("common");

  return (
    <>
      {/* <div className="w-full pt-10 md:px-10 px-10 text-center flex justify-center flex-col gap-4"> */}
      <div className="w-full pt-10  text-center flex justify-center flex-col gap-4">
        <div className="flex  w-full justify-center">
          <p className="text-white heading-font leading-9 text-[28px]">
            {t("Embark On A Trading Journey")}
          </p>
        </div>
        <div className="flex w-full mb-4 justify-center items-center text-center">
          <p className="res-embark-para-width md:leading-6 opacity-80 para-text">
            {t(
              "Trade with 0 Commissions and low spreads starting at 0.7 pips on an respsonsive and User-friendly trading platform. Stockbanx holds many licenses from prestigious financial authorities worldwide including FCA UK, AOFA South Africa and IFSC Belize."
            )}
          </p>
        </div>
        <div className="w-full flex justify-center items-center ">
          <div className="res-embark-image md:max-w-[666px] lg:min-w-[766px]">
            {/* <img
              src="/static/images/home/embarkImage.png"
              className="w-full h-full"
            ></img> */}
            <CustomTable></CustomTable>
          </div>
        </div>
      </div>
    </>
  );
};
export default Embark;

