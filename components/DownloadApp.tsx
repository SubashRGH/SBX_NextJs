import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import Container from "./Container";

type Props = {
  img: string;
  title?: string;
  descriptiontitle?: string;
  description?: string;
  trade?: string;
  google?: string;
  desktop?: string;
  ios?: string;
  web?: string;
  width?: string;
  height?: string;
  x?: string;
  y?: string;
};

export default function Download({
  img,
  title,
  trade,
  descriptiontitle,
  description,
  google,
  desktop,
  ios,
  web,
  width,
  height,
  x,
  y,
}: Props) {
  const { t } = useTranslation("common");
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[150px]">
        <div className="flex flex-col gap-4 justify-center">
          <p className="sbTextGreen">We got you</p>
          <h1 className="sbTextH2">Download cTrader</h1>
          <p className="sbTextGray-p mt-4">
            With cTrader, you can customize your on-the-go trading experience
            with a variety of order types, technical analysis tools, price
            alerts, and trade statistics.
          </p>
          <div className="flex flex-row justify-end gap-4 mt-4">
            <Image
              src={"/static/assets/icons/google-play.svg"}
              width={177}
              height={119}
            />
            <Image
              src={"/static/assets/icons/app-store.svg"}
              width={160}
              height={119}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 lg:mt-0 justify-center items-center">
          <Image
            src={"/static/assets/images/Samsung-Galaxy-s23-Ultra.webp"}
            width={600}
            height={480}
          />
        </div>
      </div>
    </Container>
  );
}

