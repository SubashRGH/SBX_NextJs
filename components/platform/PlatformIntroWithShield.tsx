import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";
import PanelHeader from "../PanelHeader";
import classNames from "classnames";
import Icon from "../Icon";

interface Props {
  title: string;
  description: string;
  img: string;
  list1: { label: string; img: string }[];
  list2: { label: string; img: string }[];
}

export default function PlatformIntroWithShield({
  title,
  description,
  img,
  list1,
  list2,
}: Props) {
  return (
    <div className="mx-auto mt-[150px] text-center">
      <div className="max-w-[700px] mx-auto ">
        <h2 className="sbTextH2">{title}</h2>
        <p className="sbTextGray-p">{description}</p>
      </div>
      <div className="flex flex-col justify-center py-6 md:relative w-full">
        <div className="grid grid-cols-3 gap-8 justify-center items-center self-center px-8 mt-12 w-full max-w-screen-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="col-span-3 lg:col-span-1 flex flex-col  my-auto  w-full lg:w-[309px]">
            <div className="flex flex-col flex-1 justify-between w-full">
              <div className="flex flex-col flex-1 justify-between items-center lg:items-start pl-px w-full">
                {list1.map((item, index) => (
                  <div
                    key={item.label}
                    className={index === 0 ? "" : "mt-20 lg:mt-40 max-md:mt-10"}
                  >
                    <div className="flex gap-10 items-center w-full max-w-[353px] min-h-[68px]">
                      <div className="flex gap-2 items-center self-stretch p-3 my-auto w-14 h-14 bg-turquoise rounded-2xl">
                        <div className="flex self-stretch my-auto w-8 min-h-[32px]">
                          <Icon
                            src={item.img}
                            width={56}
                            height={56}
                            classname="w-14 h-14 !p-0"
                          />
                        </div>
                      </div>
                      <div className="self-stretch my-auto text-[24px] font-[500] text-left">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1 flex gap-2 justify-center items-center self-stretch my-auto min-h-[344px] min-w-[240px]">
            <Image width={298} height={323} src={img} />
          </div>
          <div className="col-span-3 lg:col-span-1 flex flex-col  my-auto  w-full lg:w-[309px]">
            <div className="flex flex-col flex-1 justify-between w-full">
              <div className="flex flex-col flex-1 justify-between items-center lg:items-start pl-px w-full">
                {list2.map((item, index) => (
                  <div
                    key={item.label}
                    className={index === 0 ? "" : "mt-20 lg:mt-40 max-md:mt-10"}
                  >
                    <div className="flex gap-10 items-center w-full max-w-[353px] min-h-[68px]">
                      <div className="flex gap-2 items-center self-stretch p-3 my-auto w-14 h-14 bg-turquoise rounded-2xl">
                        <div className="flex self-stretch my-auto w-8 min-h-[32px]">
                          <Icon
                            src={item.img}
                            width={56}
                            height={56}
                            classname="w-14 h-14 !p-0"
                          />
                        </div>
                      </div>
                      <div className="self-stretch my-auto text-[24px] font-[500] text-left">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntroduceLine({
  children,
  img,
  className,
}: {
  children: ReactNode;
  img: string;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 1 },
      }}
      transition={{ duration: 0.4 }}
      className={classNames(
        "flex space-x-4 md:space-x-7 items-center",
        className
      )}
    >
      <div className="w-8 h-8 md:w-14 md:h-14 relative flex-shrink-0">
        <Image src={img} layout="fill" alt="shield" />
      </div>
      <p className=" text-white text-lg md:text-xl xl:text-2xl">{children}</p>
    </motion.div>
  );
}

