import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useTranslation } from "next-i18next";
import BlurImage from "./BlurImage";
import uniqid from "uniqid";
import Carousel from "react-multi-carousel";

type Props = {};

export default function Psp({}: Props) {
  const { t, i18n } = useTranslation("common");
  const [psp, setPsp] = useState<any>([]);
  const [lang, setLang] = useState<any>();
  const [country, setCountry] = useState<any>();

  // get psp list
  const getPspList = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/SiteAPI/GetPspList`, {
      method: "POST",
      body: JSON.stringify({
        sec_name: "GetPspList",
        lang_name: lang,
        lic_name: country,
        action_name: "GetPspList",
        page_name: "pspname",
        country_code: sessionStorage.getItem("country"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setPsp(response.data);
      });
  };

  // get language first
  const getLang = () => {
    setLang(sessionStorage.getItem("lang"));
    if (sessionStorage.getItem("country") === "CN") {
      setCountry("Bleize");
    } else {
      setCountry("SA");
    }
  };

  useEffect(() => {
    setLang(i18n.language === "zh" ? "cn" : i18n.language || "en");
  }, [i18n.language]);

  useEffect(() => {
    getLang();
  }, []);

  useEffect(() => {
    if (lang) getPspList();
  }, [lang]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      {/* <div className=" psp">
        
        <div className="mt-16 mb-24">
          <div className="md:w-4/6 xl:w-4/6 lg:w-4/6 m-auto">
            <Slider {...settings}>
              <div className="slider">
                <Image
                  src="/static/images/home/psp/alter-method.svg"
                  alt="psp"
                  width={150}
                  height={55}
                />
              </div>
              <div className="slider">
                <Image
                  src="/static/images/home/psp/bank-transfer.png"
                  alt="psp"
                  width={150}
                  height={55}
                />
              </div>
              <div className="slider">
                <Image
                  src="/static/images/home/psp/bridgerPay.png"
                  alt="psp"
                  width={150}
                  height={55}
                />
              </div>
              <div className="slider">
                <Image
                  src="/static/images/home/psp/coin.png"
                  alt="psp"
                  width={150}
                  height={55}
                />
              </div>
              <div className="slider">
                <Image
                  src="/static/images/home/psp/dragon-pay.png"
                  alt="psp"
                  width={150}
                  height={55}
                />
              </div>
              <div className="slider">
                <Image
                  src="/static/images/home/psp/ex-link.svg"
                  alt="psp"
                  width={150}
                  height={55}
                />
              </div>
              <div className="slider">
                <Image
                  src="/static/images/home/psp/fatoora.png"
                  alt="psp"
                  width={150}
                  height={55}
                />
              </div>
              <div className="slider">
                <Image
                  src="/static/images/home/psp/globe.png"
                  alt="psp"
                  width={150}
                  height={55}
                />
              </div>
              <div className="slider">
                <Image
                  src="/static/images/home/psp/help-pay.png"
                  alt="psp"
                  width={150}
                  height={55}
                />
              </div>
              <div className="slider">
                <Image
                  src="/static/images/home/psp/neteller.png"
                  alt="psp"
                  width={150}
                  height={55}
                />
              </div>
              <div className="slider">
                <Image
                  src="/static/images/home/psp/promptpay.png"
                  alt="psp"
                  width={150}
                  height={55}
                />
              </div>
              <div className="slider">
                <Image
                  src="/static/images/home/psp/quick-pay.png"
                  alt="psp"
                  width={150}
                  height={55}
                />
              </div>
              <div className="slider">
                <Image
                  src="/static/images/home/psp/skrill.png"
                  alt="psp"
                  width={150}
                  height={55}
                />
              </div>
              <div className="slider">
                <Image
                  src="/static/images/home/psp/upi.png"
                  alt="psp"
                  width={150}
                  height={55}
                />
              </div>
              <div className="slider">
                <Image
                  src="/static/images/home/psp/vnpay.png"
                  alt="psp"
                  width={150}
                  height={55}
                />
              </div>
             
            </Slider>
          </div>
        </div>
      </div> */}

      {/* <div className="w-full">
        <div className="flex marquee gap-4 py-4 bg-[#0D0D0D]">
          <div className="slider marquee-content">
            <Image
              src="/static/images/home/psp/alter-method.svg"
              alt="psp"
              className="logo black-and-white"
              width={250}
              height={60}
            />
          </div>
          <div className="slider marquee-content">
            <Image
              src="/static/images/home/psp/bank-transfer.png"
              alt="psp"
              className="logo black-and-white"
              width={250}
              height={60}
            />
          </div>
          <div className="slider marquee-content">
            <Image
              src="/static/images/home/psp/bridgerPay.png"
              alt="psp"
              className="logo black-and-white"
              width={250}
              height={60}
            />
          </div>
          <div className="slider marquee-content">
            <Image
              src="/static/images/home/psp/coin.png"
              alt="psp"
              className="logo black-and-white"
              width={250}
              height={60}
            />
          </div>
          <div className="slider marquee-content">
            <Image
              src="/static/images/home/psp/dragon-pay.png"
              alt="psp"
              className="logo black-and-white"
              width={250}
              height={60}
            />
          </div>
          <div className="slider marquee-content">
            <Image
              src="/static/images/home/psp/ex-link.svg"
              alt="psp"
              className="logo black-and-white"
              width={250}
              height={60}
            />
          </div>
          <div className="slider marquee-content">
            <Image
              src="/static/images/home/psp/fatoora.png"
              alt="psp"
              className="logo black-and-white"
              width={250}
              height={60}
            />
          </div>
          <div className="slider marquee-content">
            <Image
              src="/static/images/home/psp/globe.png"
              alt="psp"
              className="logo black-and-white"
              width={250}
              height={60}
            />
          </div>
          <div className="slider marquee-content">
            <Image
              src="/static/images/home/psp/help-pay.png"
              alt="psp"
              className="logo black-and-white"
              width={250}
              height={60}
            />
          </div>
          <div className="slider marquee-content">
            <Image
              src="/static/images/home/psp/neteller.png"
              alt="psp"
              className="logo black-and-white"
              width={250}
              height={60}
            />
          </div>
          <div className="slider marquee-content">
            <Image
              src="/static/images/home/psp/promptpay.png"
              alt="psp"
              className="logo black-and-white"
              width={250}
              height={60}
            />
          </div>
          <div className="slider marquee-content">
            <Image
              src="/static/images/home/psp/quick-pay.png"
              alt="psp"
              className="logo black-and-white"
              width={250}
              height={60}
            />
          </div>
          <div className="slider marquee-content">
            <Image
              src="/static/images/home/psp/skrill.png"
              alt="psp"
              className="logo black-and-white"
              width={250}
              height={60}
            />
          </div>
          <div className="slider marquee-content">
            <Image
              src="/static/images/home/psp/upi.png"
              alt="psp"
              className="logo black-and-white"
              width={250}
              height={60}
            />
          </div>
          <div className="slider marquee-content">
            <Image
              src="/static/images/home/psp/vnpay.png"
              alt="psp"
              className="logo black-and-white"
              width={250}
              height={60}
            />
          </div>
        </div>
      </div> */}

      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        autoPlay
        className=""
        containerClass="payment-slider"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 10,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 4,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <img
          src="/static/images/home/BankTransfer.png"
          alt="psp"
          className="logo "
        />

        <img
          src="/static/images/home/CoinPayments.png"
          alt="psp"
          className="logo "
        />

        <img
          src="/static/images/home/dragonpay.png"
          alt="psp"
          className="logo "
        />
        <img src="/static/images/home/helpay.png" alt="psp" className="logo " />

        <img
          src="/static/images/home/Korapay.png"
          alt="psp"
          className="logo "
        />

        <img src="/static/images/home/Lean.png" alt="psp" className="logo " />

        <img src="/static/images/home/LIPI.png" alt="psp" className="logo " />

        <img
          src="/static/images/home/Mastercard.png"
          alt="psp"
          className="logo "
        />

        <img
          src="/static/images/home/NetBanking.png"
          alt="psp"
          className="logo "
        />

        <img
          src="/static/images/home/neteller.png"
          alt="psp"
          className="logo "
        />

        <img
          src="/static/images/home/NganLuong.png"
          alt="psp"
          className="logo "
        />
        <img
          src="/static/images/home/PerfecMoney.png"
          alt="psp"
          className="logo "
        />
        <img src="/static/images/home/skrill.png" alt="psp" className="logo " />

        <img
          src="/static/images/home/TripleA.png"
          alt="psp"
          className="logo "
        />
        <img src="/static/images/home/Visa.png" alt="psp" className="logo " />
      </Carousel>
    </>
  );
}
