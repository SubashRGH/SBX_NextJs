import { useTranslation } from "next-i18next";
import React from "react";
import Container from "../Container";

const DepositSteps = () => {
  const { t } = useTranslation("common");

  return (
    <Container>
      <div className="w-full pt-10  text-center flex justify-center flex-col gap-[50px] ">
        <div className="flex  w-full justify-center">
          <p className="text-white heading-font leading-9 text-[28px]">
            {t("Deposit your funds in 3 easy steps")}
          </p>
        </div>
        <div className="flex flex-col xl:flex-row items-start justify-center max-w-full md:max-w-[430px] xl:max-w-full mx-auto pl-[25px] xl:pl-0">
          <div className="min-h-[258px] border border-primary border-t-0 xl:border-t-[6px] border-l-[6px] xl:border-l-0 border-r-0 border-b-0 flex-1 pr-[60px] pl-[46px] xl:pl-0 xl:pt-[46px] relative">
            <div className="absolute -top-[4px] -left-[30px] xl:-top-[26px] xl:-left-[4px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
              >
                <circle cx="26.6085" cy="26.503" r="26.0343" fill="#00b144" />
                <path
                  d="M12.6484 27.0028C12.7791 26.8925 12.9159 26.7877 13.0405 26.6708C14.2316 25.5538 15.4205 24.434 16.6401 23.2873C18.6509 25.4397 20.6536 27.5838 22.6743 29.7465C27.431 25.3184 32.1768 20.9018 36.939 16.4688C37.3546 16.9192 37.7549 17.3532 38.1547 17.7877C38.9209 18.6211 39.6859 19.455 40.4527 20.2873C40.5134 20.3532 40.5828 20.4113 40.6484 20.4728V20.5276C39.897 21.2178 39.1418 21.9042 38.3942 22.5993C33.1081 27.5141 27.8231 32.43 22.5376 37.3459C22.4977 37.3826 22.455 37.4166 22.3938 37.4688C22.2855 37.3552 22.1788 37.2449 22.0744 37.1335C18.9791 33.817 15.8832 30.5009 12.7873 27.1855C12.7447 27.1394 12.6949 27.1004 12.6484 27.0576C12.6484 27.0395 12.6484 27.0209 12.6484 27.0028Z"
                  fill="#ffff"
                />
              </svg>
            </div>

            <p className="font-inter text-white2 text-left para-text pb-[60px] xl:pb-0">
              {t("Register and Verify Your Account")}
            </p>
          </div>
          <div className="min-h-[258px] border border-primary border-t-0 xl:border-t-[6px] border-l-[6px] xl:border-l-0 border-r-0 border-b-0 flex-1 pr-[60px] pl-[46px] xl:pl-0 xl:pt-[46px] relative">
            <div className="absolute top-0 -left-[30px] xl:-top-[26px] xl:left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
              >
                <circle cx="26.4601" cy="26.503" r="26.0343" fill="#00b144" />
                <path
                  d="M40.2995 23.6316C40.158 23.6316 40.0443 23.6316 39.9306 23.6316C38.3826 23.6316 36.8355 23.6274 35.2875 23.6325C32.397 23.6418 30.1499 25.9407 30.1971 28.8321C30.2409 31.4846 32.4652 33.7236 35.1156 33.7573C36.7159 33.7776 38.3161 33.7624 39.9163 33.7633C40.0309 33.7633 40.1454 33.7633 40.281 33.7633C40.2894 33.8586 40.3037 33.9388 40.3037 34.019C40.3054 34.7684 40.3105 35.517 40.3037 36.2664C40.2903 37.7248 39.1937 38.8227 37.7341 38.827C35.1653 38.8337 32.5966 38.8286 30.0278 38.8286C25.4267 38.8286 20.8265 38.8286 16.2254 38.8286C13.7383 38.8286 12 37.0817 12 34.5844C12 28.9705 12 23.3573 12 17.7434C12 15.2478 13.74 13.5 16.2254 13.5C22.3627 13.5 28.5008 13.5 34.6389 13.5008C35.5797 13.5008 36.2644 14.1498 36.2602 15.0276C36.2569 15.82 35.6345 16.4842 34.8445 16.5357C34.719 16.5441 34.5918 16.5399 34.4655 16.5399C28.4014 16.5399 22.3374 16.5399 16.2726 16.5399C16.1362 16.5399 15.9963 16.5323 15.8633 16.5568C15.3563 16.6471 14.9958 17.1214 15.0354 17.632C15.0733 18.1274 15.4851 18.5308 15.9905 18.5629C16.1058 18.5705 16.2221 18.5654 16.3374 18.5654C23.4441 18.5654 30.55 18.5654 37.6566 18.5654C39.0977 18.5654 40.2313 19.5629 40.2911 20.9242C40.3299 21.8087 40.2987 22.6957 40.2987 23.6308L40.2995 23.6316Z"
                  fill="#ffff"
                />
                <path
                  d="M40.298 25.6889V31.7122C40.2247 31.7223 40.1556 31.7392 40.0866 31.7392C38.4653 31.7409 36.8432 31.7502 35.2219 31.7367C33.8331 31.7249 32.6624 30.7906 32.3146 29.4496C31.9734 28.1322 32.542 26.7337 33.7556 26.0754C34.159 25.8569 34.6458 25.6965 35.0989 25.6839C36.7927 25.6374 38.4889 25.6636 40.1843 25.6636C40.2138 25.6636 40.2432 25.6763 40.298 25.6889Z"
                  fill="#ffff"
                />
              </svg>
            </div>
            {/* <h2 className="font-inter text-white text-left leading-9 text-[24px] font-bold mb-[10px]">
              {t("Choose one of the available payment methods")}
            </h2> */}
            <p className="font-inter text-white2 text-left para-text pb-[60px] xl:pb-0">
              {t("Select Your Preferred Payment Method")}
              {/* {t(
                "If you pass the first challenge,you will establish yourself as a consistent trader and move to the verification step with a 5% simulated gain target"
              )} */}
            </p>
          </div>
          <div className="min-h-[258px] border border-primary border-t-0 xl:border-t-[6px] border-l-[6px] xl:border-l-0 border-r-0 border-b-0 flex-1 pl-[46px] xl:pl-0 xl:pt-[46px] relative">
            <div className="absolute top-0 -left-[30px] xl:-top-[26px] xl:left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
              >
                <circle cx="26.0353" cy="26.503" r="26.0343" fill="#00b144" />
                <path
                  d="M26.0091 44.4687C16.0947 44.4742 8.0064 36.3934 8.00098 26.4769C7.99556 16.5614 16.0752 8.47417 25.9928 8.46875C35.9116 8.46333 43.9945 16.5386 44.001 26.4595C44.0075 36.3761 35.9278 44.4622 26.0091 44.4687ZM24.3826 16.1558C24.1689 16.2036 23.9933 16.2426 23.8187 16.2827C21.0958 16.9203 19.1028 19.4838 19.2047 22.2186C19.3142 25.1735 21.3875 27.5786 24.2557 27.9907C25.1253 28.1154 26.02 28.0633 26.9026 28.098C28.3622 28.1544 29.5257 29.3483 29.5452 30.8046C29.5648 32.2577 28.4218 33.4776 26.9493 33.5416C26.2824 33.5708 25.6111 33.5719 24.9443 33.5329C23.7601 33.4635 22.7593 32.5602 22.5239 31.3988C22.486 31.2112 22.4491 31.0236 22.4177 30.861H19.222C19.2177 32.0538 19.5419 33.1089 20.1665 34.0675C21.1566 35.5888 22.589 36.4477 24.3977 36.7816V40.0369H27.6302V36.786C27.8048 36.7394 27.9252 36.7014 28.0477 36.6754C30.7673 36.1104 32.7333 33.7216 32.7951 30.9054C32.8547 28.2173 30.9853 25.6831 28.3459 25.0824C27.2887 24.8417 26.1631 24.9013 25.0668 24.8406C23.6148 24.7603 22.448 23.548 22.4524 22.1036C22.4567 20.6636 23.5801 19.4653 25.0223 19.397C25.6892 19.3656 26.3604 19.3656 27.0273 19.4014C28.2418 19.4675 29.2438 20.3719 29.4769 21.5658C29.5105 21.7404 29.5452 21.9139 29.5799 22.0863H32.8135C32.5403 18.7876 30.7749 16.8607 27.6053 16.1233V12.9103H24.3804V16.1569L24.3826 16.1558Z"
                  fill="#ffff"
                />
              </svg>
            </div>
            {/* <h2 className="font-inter text-white text-left leading-9 text-[24px] font-bold mb-[10px]">
              {t("Complete your deposit request")}
            </h2> */}
            <p className="font-inter text-white2 text-left para-text pb-[60px] xl:pb-0">
              {t("Submit Your Deposit Request")}
              {/* {t(
                "Once proven you can successfully and consistently trade,get up to an 80%split on all net sim gains you generate.Continue to trade for as long as you want and get live sim accounts up to $1.5 million with our scaling plan"
              )} */}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DepositSteps;

