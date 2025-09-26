import { XMarkIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { changeLang } from "../../utils/utils";
import PreviousEventPopup from "./PreviousEventPopup";
interface Props {
  title: string;
  description: string;
  location: string;
  url: string;
  testText: string;
  popupTitle: string;
  popupDis: string;
  popUpDetails: string;
  images: string[];
}

export default function PreviousEvent({
  title,
  description,
  location,
  url,
  popupTitle,
  popUpDetails,
  popupDis,
  images,
}: Props) {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation("common");
  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();
  const [eventName, setEventName] = useState<any>("");
  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setCountry(data);
    setTimeout(() => {
      if (sessionStorage.getItem("event") !== null) {
        setEventName(`?event=${sessionStorage.getItem("event")}`);
      } else {
      }
    }, 500);
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="flex flex-col justify-center relative"
        style={{ cursor: "pointer" }}
      >
        <div className="relative">
          {/* Image */}
          <img
            src={url}
            height="1000px"
            alt={`Image ${1}`}
            className="w-full shadow-md"
            onClick={() => openModal()}
          />
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
            style={{ pointerEvents: "none" }}
          ></div>
          {/* Text overlay */}
          <div className="absolute bottom-10 left-10 flex text-white font-bold flex-col">
            <div className="font-extrabold lg:text-4xl xl:text-4xl md:text-2xl text-xl pb-3">
              {" "}
              {title}{" "}
            </div>
            <div className="font-normal lg:text-4xl xl:text-4xl md:text-2xl text-xl pb-3">
              {" "}
              {description}{" "}
            </div>
            <div className="font-normal text-base flex items-center">
              <div className="w-[13px] h-[13px] items-end bg-[url('/static/images/events/location.svg')] bg-cover bg-center xl:rounded-2xl lg:rounded-2xl md:rounded-2xl"></div>
              <span className="ml-2">{location}</span>
            </div>
          </div>
        </div>
        {showModal ? (
          <>
            <PreviousEventPopup
              showModel={showModal}
              closeModal={closeModal}
              title={popupTitle}
              dis={popupDis}
              details={popUpDetails}
              images={images}
            />
          </>
        ) : null}
      </div>
    </>
  );
}
