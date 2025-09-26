import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, NextPage } from "next";
import PageBanner from "@/components/PageBanner";
import AccordionItem from "@/components/AccordionItem";
import { smallCardArray } from "@/constants";
import { motion } from "framer-motion";
import BlurImage from "@/components/BlurImage";
import CorporateSmallCard from "@/components/corporate/CorporateSmallCard";
import EducationCard from "./educationcard/[slug]";
import { useRouter } from "next/router";

const Education: NextPage = ({}) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const smallCardArray2 = [
    {
      id: 1,
      pannerTitle: "What is lot",
      img: "path/to/image1.jpg",
      header: "Header 1",
      text: "Some text here",
      dis1: "Candlestick charts are a popular type of financial chart traders use to analyze price movements in various markets, including cryptocurrencies. They were initially developed by Japanese traders in the 18th century and are now widely used worldwide.Candlestick charts are a visual representation of price movements over a certain period. Each candlestick on the chart represents a specific period, such as one hour or day. The candlestick's body represents the opening and closing prices, while the wicks or shadows represent the high and low prices for that time period. By analyzing candlestick charts, traders can identify trends, support, resistance levels and potential reversal patterns. Understanding how to read and interpret candlestick charts is essential for effective crypto trading.",
      imgSrc1: "/static/images/education/lot/SELL-BUY.png",
      title1: "Why does Lot Size matter?",
      dis2: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc2: "/static/images/education/lot/lots.png",
      title2:
        "A lot is a term in forex trading, representing the standard amount of a currency pair you are buying or selling.",
      dis3: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc3: "/static/images/education/lot/risk.png",
      title3: "The lot size impacts your risk level as a trader.",
      dis4: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
    },
    {
      id: 2,
      pannerTitle: "What is Pip",
      img: "path/to/image1.jpg",
      header: "Header 1",
      text: "Some text here",
      dis1: "Candlestick charts are a popular type of financial chart traders use to analyze price movements in various markets, including cryptocurrencies. They were initially developed by Japanese traders in the 18th century and are now widely used worldwide \n\n.Candlestick charts are a visual representation of price movements over a certain period. Each candlestick on the chart represents a specific period, such as one hour or day. The candlestick's body represents the opening and closing prices, while the wicks or shadows represent the high and low prices for that time period. By analyzing candlestick charts, traders can identify trends, support, resistance levels and potential reversal patterns. Understanding how to read and interpret candlestick charts is essential for effective crypto trading.",
      imgSrc1: "/static/images/education/pip/pip5.png",
      title1:
        "A pip is a fundamental term in forex trading that stands for percentage and point.",
      dis2: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc2: "/static/images/education/pip/pip3.png",
      title2:
        "A lot is a term in forex trading, representing the standard amount of a currency pair you are buying or selling.",
      dis3: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc3: "/static/images/education/pip/pip4.png",
      title3:
        "For example, if the euro and US dollar pair moves from 1.1 to 1.1001, it has moved by 1 pip.",
      dis4: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc4: "/static/images/education/pip/pip6.png",
      dis5: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      title5:
        "The value of a pip affects your profit and loss. Understanding pips is crucial for calculating gains, losses, and risk management in forex trading.",
    },
    {
      id: 3,
      pannerTitle: "What is a Equity",
      img: "path/to/image1.jpg",
      header: "Header 1",
      text: "Some text here",
      dis1: "Candlestick charts are a popular type of financial chart traders use to analyze price movements in various markets, including cryptocurrencies. They were initially developed by Japanese traders in the 18th century and are now widely used worldwide.Candlestick charts are a visual representation of price movements over a certain period. Each candlestick on the chart represents a specific period, such as one hour or day. The candlestick's body represents the opening and closing prices, while the wicks or shadows represent the high and low prices for that time period. By analyzing candlestick charts, traders can identify trends, support, resistance levels and potential reversal patterns. Understanding how to read and interpret candlestick charts is essential for effective crypto trading.",
      imgSrc1: "/static/images/education/equity/equity1.png",
      title1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis2: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc2: "/static/images/education/equity/equity2.png",
      title2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis3: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc3: "/static/images/education/equity/equity4.png",
      title3:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis4: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc4: "/static/images/education/equity/equity3.png",
    },

    {
      id: 4,
      pannerTitle: "What is a Free Margin",
      img: "path/to/image1.jpg",
      header: "Header 1",
      text: "Some text here",
      dis1: "Candlestick charts are a popular type of financial chart traders use to analyze price movements in various markets, including cryptocurrencies. They were initially developed by Japanese traders in the 18th century and are now widely used worldwide.Candlestick charts are a visual representation of price movements over a certain period. Each candlestick on the chart represents a specific period, such as one hour or day. The candlestick's body represents the opening and closing prices, while the wicks or shadows represent the high and low prices for that time period. By analyzing candlestick charts, traders can identify trends, support, resistance levels and potential reversal patterns. Understanding how to read and interpret candlestick charts is essential for effective crypto trading.",
      imgSrc1: "/static/images/education/margin/margin1.png",
      title1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis2: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc2: "/static/images/education/margin/margin2.png",
      title2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis3: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc3: "/static/images/education/margin/margin3.png",
      title3:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis4: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc4: "/static/images/education/margin/margin4.png",
    },

    {
      id: 5,
      pannerTitle: "What is a Leverage",
      img: "path/to/image1.jpg",
      header: "Header 1",
      text: "Some text here",
      dis1: "Candlestick charts are a popular type of financial chart traders use to analyze price movements in various markets, including cryptocurrencies. They were initially developed by Japanese traders in the 18th century and are now widely used worldwide.Candlestick charts are a visual representation of price movements over a certain period. Each candlestick on the chart represents a specific period, such as one hour or day. The candlestick's body represents the opening and closing prices, while the wicks or shadows represent the high and low prices for that time period. By analyzing candlestick charts, traders can identify trends, support, resistance levels and potential reversal patterns. Understanding how to read and interpret candlestick charts is essential for effective crypto trading.",
      imgSrc1: "/static/images/education/leverage/leverage1.png",
      title1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis2: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc2: "/static/images/education/leverage/leverage2.png",
      title2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis3: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc3: "/static/images/education/leverage/leverage3.png",
      title3:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis4: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc4: "/static/images/education/leverage/leverage4.png",
    },
    {
      id: 6,
      pannerTitle: "What is a Margin Call",
      img: "path/to/image1.jpg",
      header: "Header 1",
      text: "Some text here",
      dis1: "Candlestick charts are a popular type of financial chart traders use to analyze price movements in various markets, including cryptocurrencies. They were initially developed by Japanese traders in the 18th century and are now widely used worldwide.Candlestick charts are a visual representation of price movements over a certain period. Each candlestick on the chart represents a specific period, such as one hour or day. The candlestick's body represents the opening and closing prices, while the wicks or shadows represent the high and low prices for that time period. By analyzing candlestick charts, traders can identify trends, support, resistance levels and potential reversal patterns. Understanding how to read and interpret candlestick charts is essential for effective crypto trading.",
      imgSrc1: "/static/images/education/margin-call/marginCall1.png",
      title1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis2: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc2: "/static/images/education/margin-call/marginCall2.png",
      title2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis3: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc3: "/static/images/education/margin-call/marginCall3.png",
      title3:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis4: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc4: "/static/images/education/margin-call/marginCall4.png",
    },

    {
      id: 7,
      pannerTitle: "What is a Margin Level",
      img: "path/to/image1.jpg",
      header: "Header 1",
      text: "Some text here",
      dis1: "Candlestick charts are a popular type of financial chart traders use to analyze price movements in various markets, including cryptocurrencies. They were initially developed by Japanese traders in the 18th century and are now widely used worldwide.Candlestick charts are a visual representation of price movements over a certain period. Each candlestick on the chart represents a specific period, such as one hour or day. The candlestick's body represents the opening and closing prices, while the wicks or shadows represent the high and low prices for that time period. By analyzing candlestick charts, traders can identify trends, support, resistance levels and potential reversal patterns. Understanding how to read and interpret candlestick charts is essential for effective crypto trading.",
      imgSrc1: "/static/images/education/margin-level/marginLevel1.png",
      title1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis2: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc2: "/static/images/education/margin-level/marginLevel2.png",
      title2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis3: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc3: "/static/images/education/margin-level/marginLevel3.png",
      title3:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis4: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc4: "/static/images/education/margin-level/marginLevel4.png",
    },

    {
      id: 8,
      pannerTitle: "What is a Spread",
      img: "path/to/image1.jpg",
      header: "Header 1",
      text: "Some text here",
      dis1: "Candlestick charts are a popular type of financial chart traders use to analyze price movements in various markets, including cryptocurrencies. They were initially developed by Japanese traders in the 18th century and are now widely used worldwide.Candlestick charts are a visual representation of price movements over a certain period. Each candlestick on the chart represents a specific period, such as one hour or day. The candlestick's body represents the opening and closing prices, while the wicks or shadows represent the high and low prices for that time period. By analyzing candlestick charts, traders can identify trends, support, resistance levels and potential reversal patterns. Understanding how to read and interpret candlestick charts is essential for effective crypto trading.",
      imgSrc1: "/static/images/education/spread/spread1.png",
      title1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis2: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc2: "/static/images/education/spread/spread2.png",
      title2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis3: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc3: "/static/images/education/spread/spread3.png",
      title3:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis4: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc4: "/static/images/education/spread/spread4.png",
    },

    {
      id: 9,
      pannerTitle: "What is a Stop Loss",
      img: "path/to/image1.jpg",
      header: "Header 1",
      text: "Some text here",
      dis1: "Candlestick charts are a popular type of financial chart traders use to analyze price movements in various markets, including cryptocurrencies. They were initially developed by Japanese traders in the 18th century and are now widely used worldwide.Candlestick charts are a visual representation of price movements over a certain period. Each candlestick on the chart represents a specific period, such as one hour or day. The candlestick's body represents the opening and closing prices, while the wicks or shadows represent the high and low prices for that time period. By analyzing candlestick charts, traders can identify trends, support, resistance levels and potential reversal patterns. Understanding how to read and interpret candlestick charts is essential for effective crypto trading.",
      imgSrc1: "/static/images/education/stop-loss/stopLoss1.png",
      title1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis2: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc2: "/static/images/education/stop-loss/stopLoss2.png",
      title2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis3: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc3: "/static/images/education/stop-loss/stopLoss3.png",
      title3:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis4: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc4: "/static/images/education/stop-loss/stopLoss4.png",
    },

    {
      id: 10,
      pannerTitle: "What is a Stop Out",
      img: "path/to/image1.jpg",
      header: "Header 1",
      text: "Some text here",
      dis1: "Candlestick charts are a popular type of financial chart traders use to analyze price movements in various markets, including cryptocurrencies. They were initially developed by Japanese traders in the 18th century and are now widely used worldwide.Candlestick charts are a visual representation of price movements over a certain period. Each candlestick on the chart represents a specific period, such as one hour or day. The candlestick's body represents the opening and closing prices, while the wicks or shadows represent the high and low prices for that time period. By analyzing candlestick charts, traders can identify trends, support, resistance levels and potential reversal patterns. Understanding how to read and interpret candlestick charts is essential for effective crypto trading.",
      imgSrc1: "/static/images/education/stop-out/stopOut1.png",
      title1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis2: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc2: "/static/images/education/stop-out/stopOut2.png",
      title2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis3: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc3: "/static/images/education/stop-out/stopOut3.png",
      title3:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis4: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc4: "/static/images/education/stop-out/stopOut4.png",
    },

    {
      id: 11,
      pannerTitle: "What is a Swap",
      img: "path/to/image1.jpg",
      header: "Header 1",
      text: "Some text here",
      dis1: "Candlestick charts are a popular type of financial chart traders use to analyze price movements in various markets, including cryptocurrencies. They were initially developed by Japanese traders in the 18th century and are now widely used worldwide.Candlestick charts are a visual representation of price movements over a certain period. Each candlestick on the chart represents a specific period, such as one hour or day. The candlestick's body represents the opening and closing prices, while the wicks or shadows represent the high and low prices for that time period. By analyzing candlestick charts, traders can identify trends, support, resistance levels and potential reversal patterns. Understanding how to read and interpret candlestick charts is essential for effective crypto trading.",
      imgSrc1: "/static/images/education/swap/swap1.png",
      title1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis2: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc2: "/static/images/education/swap/swap2.png",
      title2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis3: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc3: "/static/images/education/swap/swap3.png",
      title3:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis4: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc4: "/static/images/education/swap/swap4.png",
    },

    {
      id: 12,
      pannerTitle: "What is a Take Profit",
      img: "path/to/image1.jpg",
      header: "Header 1",
      text: "Some text here",
      dis1: "Candlestick charts are a popular type of financial chart traders use to analyze price movements in various markets, including cryptocurrencies. They were initially developed by Japanese traders in the 18th century and are now widely used worldwide.Candlestick charts are a visual representation of price movements over a certain period. Each candlestick on the chart represents a specific period, such as one hour or day. The candlestick's body represents the opening and closing prices, while the wicks or shadows represent the high and low prices for that time period. By analyzing candlestick charts, traders can identify trends, support, resistance levels and potential reversal patterns. Understanding how to read and interpret candlestick charts is essential for effective crypto trading.",
      imgSrc1: "/static/images/education/profit/profit1.png",
      title1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis2: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc2: "/static/images/education/profit/profit2.png",
      title2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis3: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc3: "/static/images/education/profit/profit3.png",
      title3:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      dis4: "Lorem ipsum dolor sit amet consectetur. Sed parturient quisque at nibh tellus. In vivamus a netus facilisi ipsum id auctor purus condimentum. Fames lacus viverra metus enim. Mi id pretium at vel urna vestibulum. Non ultricies lacus auctor ut ligula morbi interdum. Massa et nisl nunc nec eu eget enim non. Adipiscing amet varius urna purus pretium sit laoreet egestas orci. Ultricies in non phasellus risus cras et vestibulum id gravida. Tincidunt vitae in quam rhoncus vulputate aliquet consectetur. Velit non pretium facilisis morbi posuere bibendum nunc massa. Et vitae ullamcorper fames ridiculus orci mattis egestas. Lorem sed tempus nibh.",
      imgSrc4: "/static/images/education/profit/profit4.png",
    },
  ];
  const handleCardClick = (id: any) => {
    console.log("Clicked from Education page!", id);
    const card = smallCardArray2.find((card) => card.id === id);

    router.push({
      pathname: "/education/what-is-lot",
      query: { ...card },
    });
  };

  return (
    <>
      {/* <PageBanner
        title={t("Forex Trading For Beginners")}
        description={t(
          "Improve your knowledge of trading terms with our glossary. Get a better understanding of trading terms and definitions used across the financial markets."
        )}
        size="md"
        imgSrc="/static/images/glossary/glossary.png"
        btnText={t("")}
      /> */}
      <div className="relative">
        <div className="absolute hidden md:block z-10 w-1/2 md:right-[1rem] md:top-[1rem]  lg:-right-[5rem] lg:-top-[7rem]">
          <img
            src="/static/images/about/atheletemask.png"
            className="select-none"
          />
        </div>
        <div className="absolute z-10 lg:block hidden  -left-[30rem] -top-[35rem]">
          <img
            src="/static/images/about/atheletemask.png"
            className="select-none"
          />
        </div>
        <div className="w-full !py-16 md:py-12 lg:py-6 flex flex-col stkbnx-container md:flex-row">
          <div className="lg:w-[60%] md:text-left text-center flex flex-col justify-center w-full md:w-[50%]">
            <p className="text-white md:text-4xl xl:text-5xl lg:text-5xl text-3xl font-bold xl:leading-[3.5rem] lg:leading-[3.5rem] leading-[2rem] ">
              Forex Trading For Beginners
            </p>
            <p className="text-[#A8ADBA] mt-6">
              improve your knowledge of trading terms with our glossary. Get a
              better understanding of trading terms and definitions used across
              the financial markets.
            </p>

            {/* <p className="text-[#A8ADBA] mt-6">T&Cs Apply*</p> */}
          </div>
          <div className="w-full relative z-20 lg:w-[40%] md:w-[50%]">
            <div className="absolute block w-full md:hidden z-10 md:right-[1rem] md:top-[1rem]  lg:-right-[5rem] lg:-top-[7rem]">
              <img
                src="/static/images/about/atheletemask.png"
                className="select-none"
              />
            </div>
            <div className="w-full relative z-20">
              <img
                src="/static/images/refer/refer.png"
                className="w-full h-full"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="stkbnx-container mx-auto md:py-8 xl:py-8 lg:py-8 py-4 stkbnx-heading-white mb-5 md:mb-0 xl:mb-0 ">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="stkbnx-container mt-10" key={index}>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-12 xl:gap-x-12 w-full">
              {smallCardArray?.map((item) => (
                <EducationCard
                  img={item?.img}
                  header={item?.header}
                  text={item?.text}
                  onClick={() => handleCardClick(item.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Education;

