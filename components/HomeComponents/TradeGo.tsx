import Link from "next/link";
// import Lottie from "react-lottie";
import * as animationData from "../../public/static/images/animation/Laptop Animation.json";
import { Trans, useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const TradeGo = () => {
  const { t } = useTranslation("common");

  return (
    <>
      {/* <div className="flex lg:flex-row flex-col lg:py-32 lg:px-[6rem]"> */}
      <div className="flex trade-go lg:flex-row flex-col lg:py-32 ">
        <div className="lg:w-1/2 py-10 lg:pt-0 pt-20 md:pt-[10rem] lg:py-0 flex justify-center items-center relative w-full">
          <div className="lg:block hidden absolute z-10 top-[40%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 w-full">
            <img
              src="/static/images/home/tradeleftbg.png"
              className="w-full"
            ></img>
          </div>
          <div className="lg:hidden block">
            <Lottie
              options={defaultOptions}
              style={{ maxWidth: "400px", maxHeight: "400px" }}
            />
            {/* <img src="/static/images/home/cropdesk-with-bg.png"></img> */}
          </div>
          <div className="w-full lg:flex hidden  justify-center items-center relative z-20">
            {/* <img
              src="/static/images/home/tradeongo.png"
              className="w-[60%]"
            ></img> */}
            <Lottie
              options={defaultOptions}
              style={{ maxWidth: "500px", maxHeight: "500px" }}
            />
          </div>
        </div>

        <div className="lg:w-1/2 px-6 md:px-0 mb-20 md:mb-0 flex justify-center items-center w-full">
          <div className="w-full px-10 py-14 md:py-16 lg:py-14  tradecard rounded-[40px]">
            <div className="flex w-full justify-center md:justify-start">
              <p className="head-texts text-white"> {t("Trade On the Go")} </p>
            </div>
            <div>
              <p className="para-texts mt-4 text-[#A8ADBA]">
                {t(
                  "An outstanding global trading platform and the world's leading CFD and spread betting provider. Trade on cTrader with Stockbanx."
                )}
              </p>
            </div>
            <div className="flex md:flex-row flex-col mt-10 lg:mt-6 gap-4 lg:gap-2">
              {/* <Link href="/platform/metatrader4">
                <div className="rounded-[100px] cursor-pointer group border trade-product-border hover:bg-[#00b144] transition-all duration-300 ease-in-out w-full md:w-1/3 py-2 justify-center flex items-center gap-2">
                  <div>
                    <img src="/static/images/home/metatrader.png"></img>
                  </div>
                  <p className="trade-product cursor-pointer group-hover:text-[#3B3D43]">
                    MetaTrader 4
                  </p>
                </div>
              </Link>

              <Link href="/platform/metatrader5">
                <div className="rounded-[100px] cursor-pointer group trade-product-border hover:bg-[#00b144] border w-full transition-all duration-300 ease-in-out md:w-1/3 py-2 justify-center flex items-center gap-2">
                  <div>
                    <img src="/static/images/home/metatrader.png"></img>
                  </div>
                  <p className="trade-product cursor-pointer group-hover:text-[#3B3D43]">
                    MetaTrader 5
                  </p>
                </div>
              </Link> */}

              <Link href="/platform/c-trader">
                <div className="rounded-[100px] cursor-pointer group trade-product-border transition-all duration-300 ease-in-out hover:bg-[#00b144] border w-full md:w-1/3 py-2 justify-center flex items-center gap-2">
                  <div className="max-w-[27px]">
                    <img src="/static/images/home/ctrader.png"></img>
                  </div>
                  <p className="trade-product cursor-pointer group-hover:text-[#3B3D43]">
                    cTrader
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TradeGo;

