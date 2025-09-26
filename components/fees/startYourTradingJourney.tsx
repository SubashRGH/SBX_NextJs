import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const StartYourTradingJourney: FC = () => {
  return (
    <div className="w-full flex flex-col-reverse xl:flex-row items-center gap-[60px] xl:gap-[28px]">
      <div className="flex-1">
        <h2 className="font-medium text-[36px] xl:text-[44px] leading-[36px] xl:leading-[52px] space-x-[0.15px] gap-[12px] flex flex-wrap text-center">
          <span className="white-gradient-for-text whitespace-nowrap">
            Start Your
          </span>{" "}
          <span className="yellow-gradient-for-text whitespace-nowrap">
            Trading Journey
          </span>
        </h2>

        <ul className="flex flex-col gap-[54px] mt-[54px] xl:mt-[56px] max-w-[487px]">
          <li className="flex items-center gap-[16px]">
            <div className="w-[50px] xl:w-[60px] min-w-[50px] xl:min-w-[60px] h-[50px] xl:h-[60px] min-h-[50px] xl:min-h-[60px]">
              <Image
                width={60}
                height={60}
                src="/static/images/koofx/trading/health.svg"
              />
            </div>
            <div className="flex flex-col gap-[16px]">
              <strong className="font-bold text-[#F8F9FC] text-[20px] leading-[23.44px]">
                Advanced Platforms
              </strong>
              <p className="font-normal text-[16px] leading-[21px] text-white/60">
                Trading platforms with user-friendly interfaces provide
                comprehensive tools for price analysis and technical analysis.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-[16px]">
            <div className="w-[60px] min-w-[60px] h-[60px] min-h-[60px]">
              <Image
                width={60}
                height={60}
                src="/static/images/koofx/trading/heart.svg"
              />
            </div>
            <div className="flex flex-col gap-[16px]">
              <strong className="font-bold text-[#F8F9FC] text-[20px] leading-[23.44px]">
                Flexibility
              </strong>
              <p className="font-normal text-[16px] leading-[21px] text-white/60">
                Accounts tailored to your needs. Whenever you have a special
                request, we're happy to help.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-[16px]">
            <div className="w-[60px] min-w-[60px] h-[60px] min-h-[60px]">
              <Image
                width={60}
                height={60}
                src="/static/images/koofx/trading/message-tick.svg"
              />
            </div>
            <div className="flex flex-col gap-[16px]">
              <strong className="font-bold text-[#F8F9FC] text-[20px] leading-[23.44px]">
                Support
              </strong>
              <p className="font-normal text-[16px] leading-[21px] text-white/60">
                Creative support and free marketing materials, including
                banners, business cards, newsletters, and promotional materials
              </p>
            </div>
          </li>
          <li className="flex items-center gap-[16px]">
            <div className="w-[60px] min-w-[60px] h-[60px] min-h-[60px]">
              <Image
                width={60}
                height={60}
                src="/static/images/koofx/trading/innovation.svg"
              />
            </div>
            <div className="flex flex-col gap-[16px]">
              <strong className="font-bold text-[#F8F9FC] text-[20px] leading-[23.44px]">
                Innovation
              </strong>
              <p className="font-normal text-[16px] leading-[21px] text-white/60">
                Cutting-edge and intuitive trading platform for on-the-go
                traders.
              </p>
            </div>
          </li>
        </ul>

        <Link href="/">
          <button className=" font-semibold text-[16px] leading-[24px] text-black bg-[#FFDE02] py-[12px] px-[16px] w-fit rounded-md mt-[54px]">
            Open Account
          </button>
        </Link>
      </div>

      <div className="flex-1 max-w-[382px] xl:max-w-[631px] max-h-[396px] xl:max-h-[655px]">
        <Image
          width={631}
          height={655}
          src="/static/images/koofx/trading/macbook-start-your-trading.png"
          className="object-contain object-center"
        />
      </div>
    </div>
  );
};

