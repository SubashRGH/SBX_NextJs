import { Trans, useTranslation } from "next-i18next";
import Image from "next/image";

const MoneyPeriod = () => {
  // language changes
  const { t } = useTranslation("common");

  return (
    <>
      <div className="mt-20">
        {/* <div className="w-full flex lg:flex-row flex-col text-center lg:text-left px-10 lg:px-0">
          <div className="lg:w-[30%] w-full">
            <p className="text-white meri-font font-bold text-4xl leading-[3.5rem]">
              {t("Your Money is Yours")}
            </p>
          </div>
          <div className="lg:w-[70%] w-full font-normal text-base text-[#A8ADBA] h-full flex justify-center items-center py-4 lg:pr-20">
            {t(
              "Stockbanx operates globally with offices and teams around the world, offering localized support and tailored trading solutions. Our international reach allows us to understand and meet the unique needs of traders in different regions, making us a trusted partner in your financial journey."
            )}
          </div>
        </div> */}
        {/* <div className="mt-10 px-4 lg:px-0 flex gap-6 md:flex-row flex-col ">
          <div className="relative overflow-hidden glass-effect-bg lg:w-[60%] w-full h-[440px] md:h-[520px] lg:h-[626px] py-[46px] lg:py-[54px] pl-[46px] lg:pl-[54px]">
            <div className="lg:mb-[30px] md:mb-[87px] mb-[73px]">
              <div className="text-white text-[28px] font-semibold mb-[10px]">
                Instant withdrawals
              </div>
              <div className="text-white2 text-[20px] font-semibold">
                Triage responsibility
              </div>
            </div>
            <div className="w-full z-10 absolute left-0 flex justify-center items-center">
              <div className="lg:w-[341px] lg:h-[328px] md:w-[208px] md:h-[200px] w-[176px] h-[169px] ">
                <img
                  src="/static/images/about/money_period1.png"
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </div>
            </div>

            <div className="absolute z-0 -bottom-[22px] left-0">
              <Image
                src="/static/images/about/small-bg.png"
                height={531}
                width={781}
              />
            </div>

          </div>

          <div className="relative glass-effect-bg overflow-hidden lg:w-[40%] w-full h-[440px] md:h-[520px] lg:h-[626px]">
            <div className="lg:pt-[140px] lg:pl-[110px] lg:pr-[80px] pt-[151px] pl-[134px] pr-[94px] mb-[71px]">
              <img
                src="/static/images/about/money_period2.png"
                style={{ width: "100%", height: "100%" }}
              ></img>
            </div>
            <div className="lg:pb-[54px] lg:pl-[54px] pl-[46px] pb-[46px]">
              <div className="text-white text-[28px] font-semibold mb-[10px]">
                No transaction fees
              </div>
              <div className="text-white2 text-[20px] font-semibold">
                Triage responsibility
              </div>
            </div>
            <div className="absolute -bottom-[10px] right-0">
              <Image
                src="/static/images/about/small-bg-2.png"
                height={531}
                width={781}
              />
            </div>
          </div>
        </div> */}
        {/* <  */}
      </div>
    </>
  );
};

export default MoneyPeriod;
