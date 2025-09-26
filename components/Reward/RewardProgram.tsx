import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import classNames from "classnames";

type Props = {
  img: string;
  title?: string;
  description?: string;
  trade?: string;
  google?: string;
  desktop?: string;
  width?: string;
  height?: string;
  x?: string;
  y?: string;
};

function RewardProgram({
  img,
  title,
  description,
  width,
  height,
  x,
  y,
}: Props) {
  return (
    <>
      {/* <div className='stkbnx-container mt-5 md:mt-20 lg:mt-20 xl:mt-20'>
        <div className="max-w-6xl mx-auto bg-[#F5F6FA] lg:space-x-10 xl:space-x-10 md:space-x-10  space-y-4 md:space-y-0 py-8 md:py-0 rounded-2xl md:rounded-3xl md:flex lg:mb-24 xl:mb-24 mb-4">
          <div className="flex-1 md:pl-10 md:py-20 space-y-2 md:space-y-4 px-4 md:px-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="intro-font mb-2 md:text-4xl xl:text-4xl text-2xl">{title}</div> </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base read-font mb-8 md:w-[80%] xl:w-[80%] lg:w-[80%]">
                {description}
              </p>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 1 }}
            className="md:relative md:w-5/12 flex-shrink-0"
          >
            <div
              style={{ width: width, height: height }}
              className={classNames(`mx-auto md:mx-0 md:absolute md:left-1/3 md:top-1/2 ${x} ${y}`)}
            >
              <Image
                alt='reward'
                src={img}
                width={width}
                height={height}
                objectFit="cover"
              />
            </div>
          </motion.div>

        </div>
      </div> */}

      <div className=" w-full mx-auto">
        <div className="reward-box rounded-[40px] px-6 py-10 lg:py-0 w-full flex md:flex-row flex-col">
          <div className="md:w-1/2 lg:pl-36  lg:py-10 flex flex-col justify-center items-start w-full">
            <p className="stkbnx-heading-white sm-head-in-mob">
              Rewards Program
            </p>
            <p className="text-[#F1F3F9] mt-4 sm-para-in-mob">
              Get up to $10 commission for each standard lot your client trades.
              Be rewarded additionally through our tiered IB Rewards Program,
              which offers the chance to win a luxury car and other exciting
              Apple products.
            </p>
          </div>
          <div className="md:w-1/2 center-in-mob mt-10 lg:mt-0 w-full flex items-center">
            <div className="lg:w-full w-[70%]  h-[80%] flex justify-center">
              <img src="/static/images/partner/reward.png"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RewardProgram;

