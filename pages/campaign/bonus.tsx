import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
// import Lottie from "react-lottie";
import * as animationData from "../../public/static/images/animation/Laptop Animation.json";
import RegisterButton from "@/components/button/RegisterButton";
import { paymentEfficientList } from "@/constants";
interface Props {
  buttonText: string;
  stepsList: Array<{ title: string; subTitle: string; description: string }>;
  openTermsModal: () => void;
}
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Bonus({
  stepsList,
  buttonText,
  openTermsModal,
}: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const { t } = useTranslation("common");
  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();
  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");
    const data = sessionStorage.getItem("country");
    setCountry(data);
  }, []);
  const handleButtonClick = () => {
    openTermsModal();
  };
  return (
    <div className="max-w-6xl mx-auto md:flex py-10 md:py-14 space-y-4 md:space-y-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 1 },
        }}
        transition={{ duration: 0.4 }}
        className="md:w-[55%]"
      >
        <div className="w-[282px] h-[300px] md:w-[497px] md:h-[526px] relative product-video">
          <Image
            src="/static/images/campaign/bonus.png"
            layout="fill"
            alt="Bonus Image"
          />
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 1 },
        }}
        transition={{ duration: 0.6 }}
        className="md:flex-1 space-y-3 md:space-y-5 px-4 md:px-0"
      >
        <ul className="flex flex-col pt-6">
          {stepsList?.map((item, index) => (
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.4 }}
              key={index}
              className="mb-10 pb-4 border-b border-white last:border-none"
            >
              <div className="flex items-center space-x-4 text-white text-left xl:text-left pb-4">
                <div className="text-xl md:text-2xl font-bold">
                  {t(item.title)}
                </div>
                <div className="text-lg md:text-xl font-bold">
                  {t(item.subTitle)}
                </div>
              </div>
              <div className="text-white pr-3 md:pr-6 text-left xl:text-left text-base md:text-sm">
                {t(item.description)}
              </div>
            </motion.li>
          ))}
        </ul>
        <button
          className="bg-[#00b144] mt-8 text-xl h-[60px] rounded-[100px] w-full font-bold"
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      </motion.div>
      <div className="absolute -top-[5%] -left-[10%] md:-top-[15%] md:-left-[20%] xl:-top-[18%] xl:-left-[28%] z-[-1]">
        <Image
          src="/static/images/banner/gradiant-radial.png"
          width={877}
          height={877}
          alt="Background Gradient"
        />
      </div>
    </div>
  );
}

