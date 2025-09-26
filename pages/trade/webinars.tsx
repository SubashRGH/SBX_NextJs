import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageBanner from "../../components/PageBanner";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classNames from "classnames";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { webinar } from "@/constants";
import Head from "next/head";

function Webinars() {
  const {
    register,
    getValues,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm();
  const formData = watch();
  const { t } = useTranslation("common");
  const [searchValue, setSearchValue] = useState("");
  const formSubmit = (data: any) => {
    console.log(data);
  };

  const filterNames = ({ name }: any) => {
    return name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  };

  return (
    <>
      <Head>
        <title>Webinars | Best Forex Trading Brokers | Stockbanx</title>
        <meta
          name="description"
          content="Stockbanx can improve your trading with the help of our experienced advisor. Start your journey to success with our best forex trading brokers today!"
          key="Best Forex Trading brokers"
        />
      </Head>

      <div className="stkbnx-container mx-auto">
        <div className="flex sm:flex-row lg:flex-row  flex-col justify-between items-center mt-20">
          <div className="md:basis-3/5">
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
              <div className="stkbnx-heading-white mb-5 md:w-10/12 xl:w-2/3 lg:w-2/3">
                {t("Unlock Your Trading Potential with Stockbanx")}
              </div>
              <p
                className="text-base text-white2"
                dangerouslySetInnerHTML={{
                  __html: t("webinar", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              ></p>
              <div className="flex items-center mt-6 space-x-2">
                <p className="text-white2"> {t("Available in:")} </p>
                <div className="rounded-full bg-[#C1F0FF] text-[#0C2038] text-base py-1 px-5">
                  English
                </div>
                <div className="rounded-full bg-[#C1F0FF] text-[#0C2038] text-base py-1 px-5">
                  Arabic
                </div>
              </div>
              {/* <form onSubmit={handleSubmit(formSubmit)}>
                <div className='flex items-center mt-6 space-x-2'>
                  <div className='subscribe'>
                    <input
                      type="email"
                      className='md:w-[280px] lg:w-[280px xl:w-[280px'
                      {...register("email", { required: true })}
                      placeholder={t("Enter your email")}
                    />
                    {errors.email && <p className="error">  {t("Email address is required")}</p>}
                  </div>
                  <div>
                    <input className="cmn-btn bg-primary  promote-btn rounded-full cursor-pointer !font-medium !px-8" type="submit" value="Subscribe" />
                  </div>
                </div>
              </form> */}
            </motion.div>
          </div>
          <div className="md:basis-2/5 w-full mt-6 md:mt-0 xl:mt-0 lg:mt-0">
            <div className="">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 1 }}
              >
                <Image
                  alt="leader"
                  src="/static/images/webinars/zoom.png"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* webinar list here */}
      <div className="stkbnx-container md:py-20 xl:py-20 lg:py-20 py-4">
        {webinar.length > 0 ? (
          <>
            <div className="relative">
              <input
                type="search"
                className="bg-purple-white shadow rounded border-0 p-3 w-full"
                placeholder="Search by name..."
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <div className="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter top-[7px] right-[0px]">
                <svg
                  version="1.1"
                  className="h-4 text-dark"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 52.966 52.966"
                  xmlSpace="preserve"
                >
                  <path
                    d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
        c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
        C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
        S32.459,40,21.983,40z"
                  />
                </svg>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {webinar.length > 0 ? (
          <>
            {webinar?.filter(filterNames)?.map((item: any, i: any) => (
              <div
                key={i}
                className={classNames(
                  `product-type-list-bg shadow-xl p-6 rounded-[20px] mb-10 ${
                    item.ar ? "web-arab" : ""
                  }`
                )}
              >
                <div className="flex sm:flex-row lg:flex-row  md:flex-col flex-col justify-between items-center">
                  <div className="md:basis-1/4">
                    <div className="avatar-bg rounded-full relative">
                      <div
                        className="sales-man"
                        style={{
                          backgroundImage: `url('${item.avatar}')`,
                          backgroundRepeat: "no-repeat",
                          position: "absolute",
                          top: "-39px",
                          left: "18px",
                          width: "171px",
                          height: "217px",
                          backgroundSize: "contain",
                          zIndex: 1,
                        }}
                      ></div>
                      <div className="badge bg-white shadow-md py-2 px-2 text-center rounded-full">
                        <p className="text-lg font-bold"> {item.name} </p>
                        <p className="text-sm"> {item.designation} </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:basis-3/4">
                    <div className="flex sm:space-x-9 lg:space-x-9 xl:space-x-9 sm:flex-row lg:flex-row md:flex-col flex-col justify-between md:items-center lg:items-baseline	xl:items-baseline">
                      <div className="">
                        <div className="md:mt-4 flex sm:space-x-9 md:space-x-9 lg:space-x-9 space-x-5 mb-3 sm:flex-row lg:flex-row md:justify-center xl:justify-start lg:justify-start">
                          <p className="flex mt-3 lg:mt-0 md:mt-0 xl:mt-0 text-white2">
                            {" "}
                            <svg
                              className="mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                d="M16.7502 4.06V2.5C16.7502 2.09 16.4102 1.75 16.0002 1.75C15.5902 1.75 15.2502 2.09 15.2502 2.5V4H8.75023V2.5C8.75023 2.09 8.41023 1.75 8.00023 1.75C7.59023 1.75 7.25023 2.09 7.25023 2.5V4.06C4.55023 4.31 3.24023 5.92 3.04023 8.31C3.02023 8.6 3.26023 8.84 3.54023 8.84H20.4602C20.7502 8.84 20.9902 8.59 20.9602 8.31C20.7602 5.92 19.4502 4.31 16.7502 4.06Z"
                                fill="#00b144"
                              />
                              <path
                                opacity="0.4"
                                d="M20 10.3398C20.55 10.3398 21 10.7898 21 11.3398V17.4998C21 20.4998 19.5 22.4998 16 22.4998H8C4.5 22.4998 3 20.4998 3 17.4998V11.3398C3 10.7898 3.45 10.3398 4 10.3398H20Z"
                                fill="#00b144"
                              />
                              <path
                                d="M8.5 15.5008C8.24 15.5008 7.98 15.3908 7.79 15.2108C7.61 15.0208 7.5 14.7608 7.5 14.5008C7.5 14.2408 7.61 13.9809 7.79 13.7909C8.07 13.5109 8.51 13.4208 8.88 13.5808C9.01 13.6308 9.12 13.7009 9.21 13.7909C9.39 13.9809 9.5 14.2408 9.5 14.5008C9.5 14.7608 9.39 15.0208 9.21 15.2108C9.02 15.3908 8.76 15.5008 8.5 15.5008Z"
                                fill="#00b144"
                              />
                              <path
                                d="M12 15.5008C11.74 15.5008 11.48 15.3908 11.29 15.2108C11.11 15.0208 11 14.7608 11 14.5008C11 14.2408 11.11 13.9809 11.29 13.7909C11.38 13.7009 11.49 13.6308 11.62 13.5808C11.99 13.4208 12.43 13.5109 12.71 13.7909C12.89 13.9809 13 14.2408 13 14.5008C13 14.7608 12.89 15.0208 12.71 15.2108C12.66 15.2508 12.61 15.2908 12.56 15.3308C12.5 15.3708 12.44 15.4009 12.38 15.4209C12.32 15.4509 12.26 15.4709 12.2 15.4809C12.13 15.4909 12.07 15.5008 12 15.5008Z"
                                fill="#00b144"
                              />
                              <path
                                d="M15.5 15.5C15.24 15.5 14.98 15.39 14.79 15.21C14.61 15.02 14.5 14.76 14.5 14.5C14.5 14.24 14.61 13.98 14.79 13.79C14.89 13.7 14.99 13.63 15.12 13.58C15.3 13.5 15.5 13.48 15.7 13.52C15.76 13.53 15.82 13.55 15.88 13.58C15.94 13.6 16 13.63 16.06 13.67C16.11 13.71 16.16 13.75 16.21 13.79C16.39 13.98 16.5 14.24 16.5 14.5C16.5 14.76 16.39 15.02 16.21 15.21C16.16 15.25 16.11 15.29 16.06 15.33C16 15.37 15.94 15.4 15.88 15.42C15.82 15.45 15.76 15.47 15.7 15.48C15.63 15.49 15.56 15.5 15.5 15.5Z"
                                fill="#00b144"
                              />
                              <path
                                d="M8.5 19C8.37 19 8.24 18.97 8.12 18.92C7.99 18.87 7.89 18.8 7.79 18.71C7.61 18.52 7.5 18.26 7.5 18C7.5 17.74 7.61 17.48 7.79 17.29C7.89 17.2 7.99 17.13 8.12 17.08C8.3 17 8.5 16.98 8.7 17.02C8.76 17.03 8.82 17.05 8.88 17.08C8.94 17.1 9 17.13 9.06 17.17C9.11 17.21 9.16 17.25 9.21 17.29C9.39 17.48 9.5 17.74 9.5 18C9.5 18.26 9.39 18.52 9.21 18.71C9.16 18.75 9.11 18.8 9.06 18.83C9 18.87 8.94 18.9 8.88 18.92C8.82 18.95 8.76 18.97 8.7 18.98C8.63 18.99 8.57 19 8.5 19Z"
                                fill="#00b144"
                              />
                              <path
                                d="M12 18.9992C11.74 18.9992 11.48 18.8892 11.29 18.7092C11.11 18.5192 11 18.2592 11 17.9992C11 17.7392 11.11 17.4792 11.29 17.2892C11.66 16.9192 12.34 16.9192 12.71 17.2892C12.89 17.4792 13 17.7392 13 17.9992C13 18.2592 12.89 18.5192 12.71 18.7092C12.52 18.8892 12.26 18.9992 12 18.9992Z"
                                fill="#00b144"
                              />
                              <path
                                d="M15.5 18.9992C15.24 18.9992 14.98 18.8892 14.79 18.7092C14.61 18.5192 14.5 18.2592 14.5 17.9992C14.5 17.7392 14.61 17.4792 14.79 17.2892C15.16 16.9192 15.84 16.9192 16.21 17.2892C16.39 17.4792 16.5 17.7392 16.5 17.9992C16.5 18.2592 16.39 18.5192 16.21 18.7092C16.02 18.8892 15.76 18.9992 15.5 18.9992Z"
                                fill="#00b144"
                              />
                            </svg>{" "}
                            {item.date}
                          </p>
                          <p className="flex mt-3 lg:mt-0 md:mt-0 xl:mt-0 text-white2">
                            {" "}
                            <svg
                              className="mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                opacity="0.4"
                                d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
                                fill="#00b144"
                              />
                              <path
                                d="M15.7106 16.4298C15.5806 16.4298 15.4506 16.3998 15.3306 16.3198L12.2306 14.4698C11.4606 14.0098 10.8906 12.9998 10.8906 12.1098V8.00977C10.8906 7.59977 11.2306 7.25977 11.6406 7.25977C12.0506 7.25977 12.3906 7.59977 12.3906 8.00977V12.1098C12.3906 12.4698 12.6906 12.9998 13.0006 13.1798L16.1006 15.0298C16.4606 15.2398 16.5706 15.6998 16.3606 16.0598C16.2106 16.2998 15.9606 16.4298 15.7106 16.4298Z"
                                fill="#00b144"
                              />
                            </svg>
                            {item.time}{" "}
                          </p>
                        </div>
                        <h2 className="stkbnx-heading-white mb-4 !text-2xl text-middle">
                          {" "}
                          {item.title}{" "}
                        </h2>
                        <div className="flex items-center space-x-2 mb-6 justify-center lg:justify-start md:justify-center xl:justify-start ">
                          <p className="text-white2"> {t("Available in:")} </p>
                          <div className="rounded-full bg-[#C1F0FF] text-[#0C2038] text-base py-1 px-5">
                            {" "}
                            {item.language}{" "}
                          </div>
                        </div>
                      </div>
                      <div>
                        <a
                          href={item.zoomLink}
                          target="_blank"
                          className="md:mb-4 invite-btn rounded-full cursor-pointer !font-medium !px-8 mb-3 lg:mb-0 md:mb-0 xl:mb-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            className="mr-1"
                          >
                            <path
                              opacity="0.4"
                              d="M13.5 3.75H7.5C4.08 3.75 2.75 5.08 2.75 8.5V16.5C2.75 18.8 4 21.25 7.5 21.25H13.5C16.92 21.25 18.25 19.92 18.25 16.5V8.5C18.25 5.08 16.92 3.75 13.5 3.75Z"
                              fill="black"
                            />
                            <path
                              d="M11.9972 11.8791C13.0355 11.8791 13.8772 11.0374 13.8772 9.99914C13.8772 8.96085 13.0355 8.11914 11.9972 8.11914C10.9589 8.11914 10.1172 8.96085 10.1172 9.99914C10.1172 11.0374 10.9589 11.8791 11.9972 11.8791Z"
                              fill="black"
                            />
                            <path
                              d="M22.1466 6.66962C21.7366 6.45962 20.8766 6.21962 19.7066 7.03962L18.2266 8.07962C18.2366 8.21962 18.2466 8.34962 18.2466 8.49962V16.4996C18.2466 16.6496 18.2266 16.7796 18.2266 16.9196L19.7066 17.9596C20.3266 18.3996 20.8666 18.5396 21.2966 18.5396C21.6666 18.5396 21.9566 18.4396 22.1466 18.3396C22.5566 18.1296 23.2466 17.5596 23.2466 16.1296V8.87962C23.2466 7.44962 22.5566 6.87962 22.1466 6.66962Z"
                              fill="black"
                            />
                          </svg>{" "}
                          {t("Get Zoom Invitation")}
                        </a>
                      </div>
                    </div>
                    <p className="text-sm	text-white2 border-inherit border-solid	border-t-2 pt-3 text-middle md:mb-4">
                      {" "}
                      {item.description}{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="text-center mt-8 text-xl text-white2">
              There is no upcoming webinar.
            </div>
          </>
        )}
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Webinars;

