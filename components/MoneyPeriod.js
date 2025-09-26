import { Trans, useTranslation } from "next-i18next";

const MoneyPeriod = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="mt-20">
        <div className="w-full flex lg:flex-row flex-col text-center lg:text-left px-10 lg:px-0">
          <div className="lg:w-[30%] w-full">
            <p className="text-white meri-font font-bold text-4xl leading-[3.5rem]">
              {t("Your Money is Yours. Period.")}
            </p>
          </div>
          <div className="lg:w-[70%] w-full font-normal text-base text-[#A8ADBA] h-full flex justify-center items-center py-4 lg:pr-20">
            {t(
              "Stockbanx operates globally with offices and teams around the world, offering localized support and tailored trading solutions. Our international reach allows us to understand and meet the unique needs of traders in different regions, making us a trusted partner in your financial journey."
            )}
          </div>
        </div>
        <div className="mt-10 px-4 lg:px-0 flex gap-6 md:flex-row flex-col ">
          <div className="lg:w-[60%] w-full h-[300px] md:h-[300px] lg:h-[400px]">
            <img
              src="/static/images/about/moneyleft.png"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>

          <div className="lg:w-[40%]  w-full h-[300px] md:h-[300px] lg:h-[400px]">
            <img
              src="/static/images/about/moneyright.png"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>
        </div>
        <div className="px-4 w-full lg:px-0">
          <div className="mt-6  mb-20 w-full flex lg:flex-row flex-col payment-bg rounded-[20px]">
            <div className="lg:w-1/2 w-full ">
              <img src="/static/images/about/paymentleft.png"></img>
            </div>

            <div className="lg:w-1/2 px-20 lg:pl-0 pb-10 lg:pb-0 lg:pr-6 py-6 w-full flex flex-col text-left justify-center gap-2 items-center">
              <p className="font-semibold text-2xl text-[#F7F8F8] w-full ">
                {t("Local payment options")}
              </p>

              <p className="text-[#8A8F98] font-medium text-xl">
                {t(
                  "With multiple local and international payment providers, you have the freedom to choose."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoneyPeriod;
