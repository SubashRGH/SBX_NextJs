import classNames from "classnames";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import PanelHeader from "../PanelHeader";
import Container from "../Container";

interface Props {
  title: string;
  description: string;
  list: {
    title: string;
    content: string;
  }[];
  extra?: ReactNode;
  headerClassName?: string;
  noBg?: boolean;
}

export default function ProductTypeList({
  title,
  description,
  list,
  extra,
  headerClassName,
  noBg,
}: Props) {
  return (
    <Container>
      <div className="w-full py-10 md:py-14">
        <div className="px-4 md:px-0">
          <PanelHeader
            title={title}
            description={description}
            className={headerClassName}
          />
        </div>
        <div
          className={`forex-type md:block mt-[65px] md:mt-[68px] xl:mt-[48px] rounded-[40px] py-[42px] px-[26px] md:py-[94px] xl:py-[50px] xl:px-[50px] ${noBg ? "" : "product-type-list-bg"
            }`}
        >
          <ul className="max-w-[638px] xl:max-w-6xl mx-auto flex xl:flex-row flex-col gap-[83px] xl:gap-0">
            {list.map((item) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 80 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.4 }}
                key={item.title}
                className={classNames(
                  "relative flex-1 flex-shrink-0 pl-3 md:pl-6 xl:first:pl-0 space-y-2 md:space-y-4 group !border-b-0"
                )}
              >
                <div className="intro-font text-xl md:text-[32px] text-white text-center xl:text-left">
                  {item.title}
                </div>
                <div className=" text-white2 opacity-60  pr-3 md:pr-6 text-center xl:text-left text-base md:text-lg">
                  {item.content}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
        {extra}
      </div>
    </Container>
  );
}

