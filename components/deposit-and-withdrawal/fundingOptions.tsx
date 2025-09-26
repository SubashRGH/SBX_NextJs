import { useTranslation } from "next-i18next";

import Container from "../Container";

import { fundingOptionItems } from "@/constants";

export const FundingOptions = () => {
  const { t } = useTranslation("common");

  return (
    <Container className="flex-col">
      <div className="flex flex-col">
        <div className="font-inter text-white text-[28px] md:text-[28px] md:mb-[20px] text-center mb-4">
          {t("Funding Options")}
        </div>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-[40px] md:gap-[40px]">
          {fundingOptionItems?.map((item) => {
            return (
              <div className="get-started-card-1 p-[60px] flex flex-col justify-center items-center text-center">
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

