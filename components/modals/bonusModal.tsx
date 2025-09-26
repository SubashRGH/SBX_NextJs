import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";

interface Props {
  onClose: () => void;
}

const BonusModal: React.FC<Props> = ({ onClose }) => {
  const { t } = useTranslation("common");

  const handleClaim = () => {
    onClose();
    window.open(
      "https://api.whatsapp.com/send/?phone=97145126966&text=Claim%20My%20Bonus",
      "_blank"
    );
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-black-70 h-screen flex items-center justify-center">
      <div className="relative w-with-padd bg-white max-w-[700px] h-auto px-[40px] py-[20px] rounded-[30px] flex flex-col items-center justify-center">
        <Image
          src={"/static/images/campaign/discount-coupon.png"}
          alt=""
          width={599}
          height={465}
        />

        <img
          src={"/static/images/campaign/limited-time-offer.png"}
          alt=""
          width={100}
          height={100}
          className="absolute -top-[13.57px] -left-[11px]"
        />
        <button
          onClick={handleClaim}
          className="rounded-full cmn-btn bg-primary mb-[15px] flex items-center justify-center text-[30px] font-bold leading-[150%]"
        >
          {t("Claim Now!")}
        </button>
        <p className="text-[16px] font-[400] leading-[150%]">
          {t("Terms & Conditions Apply")}
        </p>
        <button className="absolute top-[20px] right-[30px]" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BonusModal;

