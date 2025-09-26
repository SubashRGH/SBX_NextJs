// ImageWithTextButton.js
import React from "react";
import BlurImage from "../BlurImage";
import { useTranslation } from "next-i18next";
import RegisterButton from "../button/RegisterButton";
const ReferEarn = () => {
  const { t } = useTranslation("common");
  return (
    <div
      className="flex flex-col items-center rounded-2xl  max-w-6xl mx-auto bg-cover bg-center g:mb-50 xl:mb-50 space-y-4 py-20"
      style={{
        backgroundImage: 'url("/static/images/partner/Background.png")',
        height: "500px",
      }}
    >
      <img
        src="/static/images/partner/Market.png"
        alt="Description of Image"
        className="mb-3 w-[200px] h-[200px] "
      />
      <div className="stkbnx-heading !text-4xl  font-bold  text-center capitalize">
        {" "}
        {t("Refer & Earn")}{" "}
      </div>

      <div className="text-base font-inter font-normal text-black text-center">
        {t("Refer your clients to Stockbanx and get up to $800 CPA*")}{" "}
      </div>
      <RegisterButton
        containerStyle="bg-white rounded-full py-2 px-12 "
        title={t("Start Now!")}
      />
      <div className="text-gray-600 text-center text-xs font-inter text-base font-medium">
        Terms & Conditions apply*
      </div>
    </div>
  );
};

export default ReferEarn;

