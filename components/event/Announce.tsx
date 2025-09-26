import {
  ChevronRightIcon,
  LinkIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { MouseEventHandler } from "react";
import Image from "next/image";
import RegisterButton from "../button/RegisterButton";
import { useTranslation } from "next-i18next";
import Link from "next/link";
interface Props {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const Announce = ({ handleClick }: Props) => {
  const { t } = useTranslation("common");

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed lg:inset-0 xl:inset-0 top-7 z-[99999999] outline-none focus:outline-none overlay p-7 c trader-modal">
      <div className="relative lg:p-4 xl:p-4 p-2 mx-aut bg-white rounded-xl md:w-[589px] xl:w-[589px] sm:w-[589px] w-full text-center ani-modal">
        <button
          className="bg-white rounded-full after:flex items-center justify-center border-0 text-black float-right absolute w-8 h-8 top-[20px] right-[30px] z-10"
          onClick={handleClick}
        >
          <span onClick={handleClick}>
            <XMarkIcon className="h-7 w-7 text-black" />
          </span>
        </button>
        {/* Modal data here */}
        <>
          <Image
            src="/static/images/home/system_notice-new.png"
            alt="main-banner"
            width={380}
            height={450}
            layout="responsive"
          />

          {/* <h4 className="intro-font text-xl mb-4"> Stockbanx Client Portal Upgrade Notice </h4>
          <p className="text-left mb-3 leading-7"> In order to further enhance our service quality, Stockbanx will be conducting a
            system upgrade for the Client Portal from 00:00 on Saturday, July 27, 2024, to 00:00 on
            Monday, July 29, 2024 (GMT+8). During this period, some functions of the Client
            Portal will be temporarily unavailable.</p>
          <p className="text-left mb-3 leading-7"> We sincerely apologize for any inconvenience this system upgrade may cause. If you
            have any questions or need assistance, please do not hesitate to contact the Stockbanx
            customer service team.</p>
          <p className="text-left mb-3 leading-7">
            Thank you for your understanding and support!</p> */}
          {/* <h3 className="intro-font text-3xl mb-4"> Introducing cTtrader </h3>
          <h1 className="text-center text-base text-black leading-6	mb-4">
            Customizable indicators and versatile order types. Elevate your
            trading journey with the seamless integration of cTrader on our
            platform.
          </h1>
          <Link href="/platform/c-trader">
            <button
              onClick={handleClick}
              className="link-cbtn p-3 w-full text-[#3CF] cursor-pointer flex items-center font-semibold"
            >
              <span>
                {" "}
                <LinkIcon className="h-7 w-7 mr-4" />
              </span>
              <span>Learn more about cTrader integration </span>
              <span className="ml-auto">
                {" "}
                <ChevronRightIcon className="h-7 w-7 mr-4" />
              </span>
            </button>
          </Link>
          <div className="flex lg:flex-row flex-col justify-evenly mt-4 announce-btn">
            <RegisterButton
              containerStyle="rounded-full quick-btn live h-[59px] !w-[240px] !max-w-[240px]"
              title={t("Live Account")}
              setEvent={handleClick}
            />
          </div>
          <p className="text-sm mt-5 opacity-40">
            Embrace the Future of Trading cTrader empowers informed decisions
          </p> */}
        </>
      </div>
    </div>
  );
};

export default Announce;
