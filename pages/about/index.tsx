import React from "react";
import Image from "next/image";
import bg from "../assets/images/register.jpg";
import { motion } from "framer-motion";
import Psp from "../../components/Psp";
import Slider from "react-slick";
function About() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };
  return (
    <>
      <div className="stkbnx-inner-bg about-bg flex items-center">
        <div className="stkbnx-container mx-auto py-4">
          <div className="flex sm:flex-row lg:flex-row space-x-4 flex-col justify-between items-center">
            <div className="md:basis-1/2">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl intro-font mb-4">
                  <span className="base-black">About Lorem </span> <br />
                  <span className="base-prime"> ipsum dolor</span>
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 1 }}
                transition={{ duration: 1 }}
              >
                <p className="text-base mb-4 font-color opacity-60">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero
                </p>
              </motion.div>
            </div>
            <div className="md:basis-1/2">
              {/* <Image
                src="/static/images/about/team.png"
                alt="team"
                width='60%'
                height='60%'
                layout='responsive'
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="stkbnx-container py-20">
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
            <div className="stkbnx-heading text-center mb-2">Who We Are</div>{" "}
          </motion.div>
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
            <p className="text-base read-font text-center mb-10">
              Stockbanx provides easy access to global financial markets and a
              truly international team of experts. Our mission is to create a
              community that appreciates convenience, inclusivity, and
              information exchange to empower Traders and Introduce Brokers to
              achieve maximized value. We are regulated by the Belize
              International Financial Services Commission (License number
              IFSC000314/247).{" "}
            </p>{" "}
          </motion.div>
          <div className="flex sm:flex-row lg:flex-row  flex-col justify-between items-center mt-20">
            <div className="md:basis-1/2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="stkbnx-heading mb-5">
                  A Global Leader in <br /> Online Trading
                </div>
                <p className="text-base read-font">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd Lorem ipsum
                  dolor sit amet, consetetur sadipscing elitr, sed{" "}
                </p>
                <button className="rounded-full cmn-btn bg-primary mt-7">
                  Lorem
                </button>
              </motion.div>
            </div>
            <div className="md:basis-5/12">
              <div className="">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 1 },
                  }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    alt="leader"
                    src="/static/images/about/leader.png"
                    width="60%"
                    height="60%"
                    layout="responsive"
                    objectFit="contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* vision and mission */}
      <div className="stkbnx-container mx-auto">
        <div className="flex sm:flex-row lg:flex-row lg:space-x-6 md:space-x-6 flex-col justify-between items-center mt-10 mb-20">
          <div className="md:basis-1/2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="border-slate-200 rounded-2xl border border-solid p-12 relative">
                <h1 className="text-2xl mb-4 mt-8"> Mission </h1>
                <p className="text-base read-font">
                  Our mission is to create a community that appreciates
                  convenience, inclusivity, and transparency, therefore
                  empowering Traders and Introduce Brokers to maximize value.
                </p>
                <div className="rounded-full w-28	h-28 absolute border-slate-200 border border-solid left-10 -top-12 flex align-center justify-center bg-white">
                  <Image
                    src="/static/images/icons/mission.svg"
                    alt="apple"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="md:basis-1/2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.8 }}
            >
              <div className="border-slate-200 rounded-2xl border border-solid p-12 relative">
                <h1 className="text-2xl mb-4 mt-8"> Vision </h1>
                <p className="text-base read-font">
                  The vision is to create the best trading experience for you to
                  support your trading journey. So anyone, anywhere, can trade.
                </p>
                <div className="rounded-full w-28	h-28 absolute border-slate-200 border border-solid left-10 -top-12 flex align-center justify-center bg-white">
                  <Image
                    src="/static/images/icons/vision.svg"
                    alt="apple"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* safe and secure */}
      {/* quick intro */}
      <div className="stkbnx-container py-20">
        <div className="">
          <Slider {...settings}>
            <div className="w-full p-20 bg-[url('/static/images/about/safe.png')] bg-no-repeat bg-cover bg-center rounded-2xl">
              <p className="text-base text-white mb-8">
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore
                magnaaliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet iam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd
              </p>
              <button className="rounded-full cmn-btn bg-primary">
                Create Account
              </button>
            </div>
            <div className="w-full p-20 bg-[url('/static/images/about/safe.png')] bg-no-repeat bg-cover bg-center rounded-2xl">
              <p className="text-base text-white mb-8">
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore
                magnaaliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet iam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd
              </p>
              <button className="rounded-full cmn-btn bg-primary">
                Create Account
              </button>
            </div>
            <div className="w-full p-20 bg-[url('/static/images/about/safe.png')] bg-no-repeat bg-cover bg-center rounded-2xl">
              <p className="text-base text-white mb-8">
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore
                magnaaliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet iam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd
              </p>
              <button className="rounded-full cmn-btn bg-primary">
                Create Account
              </button>
            </div>
          </Slider>
        </div>
      </div>
      {/* psp */}
      <Psp />
    </>
  );
}

export default About;

