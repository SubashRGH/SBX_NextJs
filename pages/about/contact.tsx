"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import bg from "../assets/images/register.jpg";
import { motion } from "framer-motion";
import Psp from "../../components/Psp";
import Slider from "react-slick";
import { EnvelopeIcon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import BannerMain from "@/components/BannerMain";
import OtpInput from "react-otp-input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import CSS for react-phone-input-2
import PageBanner from "@/components/PageBanner";
import Head from "next/head";
import Link from "next/link";
import Container from "@/components/Container";
import PageBannerHeader from "@/components/PageBannerHeader";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  businessClassification: string;
  message: string;
};

const Contact: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [country, setCountry] = useState<any>();
  const [lang, setLang] = useState<any>();

  const [showModal, setShowModal] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    setError,
    clearErrors,
  } = useForm<FormValues>(); // Specify the type for form values

  const handleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };
  const isFirstValidate = useRef(false);
  useEffect(() => {
    setLang(sessionStorage.getItem("lang") || "en");

    const data = sessionStorage.getItem("country");
    setError("businessClassification", {
      type: "manual",
      message: "Please select a business classification", // Set custom error message
    });
    setCountry(data);
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    handleValidation();
    // Handle form submission here
    try {
      const formValues = getValues();
      // Make API calls, submit data, etc.
      setIsSubmitting(true);
      const payload = {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        mobile: formValues.phoneNumber,
        subject: formValues.subject,
        businessDetails: formValues.businessClassification,
        nationality: "",
        message: formValues.message,
      };
      fetch(
        `${process.env.NEXT_PUBLIC_CRM_API_URL}/Unified/AddNewsLetterSubscription`,
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((response) => {
          router.push("/thanks");
          setIsSubmitting(false);
        })
        .catch((e) => {
          setIsSubmitting(false);
        });
    } catch (error) {
      console.error("Error occurred during form submission:", error);
    }
  };
  const handleValidation = () => {
    const businessClassificationValue = getValues("businessClassification");
    // Perform custom validation logic
    if (!businessClassificationValue) {
      setError("businessClassification", {
        type: "manual",
        message: "Please select a business classification", // Set custom error message
      });
    } else {
      // Clear the error message if validation passes
      clearErrors("businessClassification");
    }
  };

  const handleDropChange = (value: string) => {
    setValue("businessClassification", value);
    setOpenDropDown(false);
    handleValidation();
  };

  return (
    <>
      <div>
        <Head>
          <title>Online Forex Trading Brokers | Stockbanx</title>
          <meta
            name="description"
            content="Choose online forex trading brokers from Stockbanx. We offer 130+ leveraged product instruments for global investors to trade with expert insights."
            key="Online Forex Trading Brokers"
          />
        </Head>
      </div>

      <div className="w-full">
        {/* <BannerMain
          title={t("Contacts")}
          description={t(
            "Our dedicated support team is available 24 hours a day, 5 days a week, providing assistance in multiple languages to ensure you get the help you need, no matter where you are."
          )}
          // imgSrc="/static/images/contact/contactbg.png"
          // tabImgSrc="/static/images/contact/mdcontactbg.png"
          // mobImgSrc="/static/images/contact/smcontactbg.png"
        ></BannerMain> */}

        <Container className="!pb-0 !pt-0">
          <PageBannerHeader>
            <h1 className="text-[40px] font-[500] z-10 text-center leading-10">
              {t("Contact Us")}
            </h1>
            <p className="text-[18px] font-[300] text-[#B0B4C1] mt-4 z-10 text-center">
              {t(
                "Our dedicated support team is available 24 hours a day, 5 days a week,"
              )}
              <br />
              {t(
                "providing assistance in multiple languages to ensure you get the help"
              )}
              <br />
              {t("you need, no matter where you are.")}
            </p>
            <div className="mt-4 z-10">
              <Link href="https://live.stockbanx.com/agent/signup/">
                <a className="inline-flex items-center justify-center w-56 bg-[#00B144] text-white text-[16px] font-normal px-4 py-4 rounded-full  hover:bg-[#009e3e] transition duration-200 gap-2 hover:scale-105 ">
                  {t("Open Account")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                </a>
              </Link>
            </div>
          </PageBannerHeader>
        </Container>
        <motion.h3
          id="connect-with-us"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 1 },
          }}
          transition={{ duration: 0.4 }}
          className="sbTextH2 text-center"
        >
          Get in Touch with us
        </motion.h3>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 1 },
          }}
          transition={{ duration: 0.6 }}
          className="sbTextGray-p mt-4 text-center "
        >
          Please complete the form below, and our team will assist you as soon
          as possible
        </motion.p>
        <div className="stkbnx-container my-10 mb-0 w-full">
          {/* contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.4 }}
            className="lg:p-6 bg-transparent lg:max-w-4xl w-full mx-auto"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full mt-5  mb-20 rounded-[40px]">
                <div className="w-full gap-4 flex-col md:flex-row flex ">
                  <div className="input-content flex-1">
                    {/* <p className="font-normal text-sm mb-2 text-white">
                      {t("First Name (required)")}
                    </p> */}
                    <input
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                      placeholder={t("Enter your first name")}
                      className="contact-input px-5 py-3 w-full lg:w-1/2"
                    ></input>
                    {errors.firstName && (
                      <p className="text-red-500">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="input-content flex-1">
                    {/* <p className="font-normal text-sm mb-2 text-white">
                      {t("Last Name (required)")}
                    </p> */}
                    <input
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                      placeholder={t("Enter your last name")}
                      className="contact-input px-5 py-3 w-full lg:w-1/2"
                    ></input>
                    {errors.lastName && (
                      <p className="text-red-500">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                <div className="w-full mt-4 flex-col gap-4 flex ">
                  <div className="input-content flex-1">
                    {/* <p className="font-normal text-sm mb-2 text-white">
                      {t("Email Address (required)")}
                    </p> */}

                    <input
                      {...register("email", {
                        required: "Email is required",
                      })}
                      placeholder={t("Enter your email")}
                      className="contact-input px-5 py-3 w-full lg:w-1/2"
                    ></input>
                    {errors.email && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="input-content flex-1 contact-tel">
                    {/* <p className="font-normal text-sm mb-2 text-white">
                      {t("Telephone (required)")}
                    </p> */}

                    <PhoneInput
                      {...register("phoneNumber", {
                        required: "Phone Number is required",
                      })}
                      inputProps={{
                        name: "phoneNumber",
                        required: true, // Add required attribute if needed
                      }}
                      containerClass="contact-phone-number"
                      enableSearch={true}
                      disableSearchIcon
                      country={"bh"} // Set the default country
                      value={""} // Set initial value, you can get the value from form state if needed
                      onChange={(value, country) => {
                        // You can handle phone number change if needed
                        setValue("phoneNumber", value);
                      }}
                    />
                    {/* Display error message for phoneNumber field */}
                    {errors.phoneNumber && (
                      <p className="text-red-500">
                        Please enter a valid phone number
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full mt-4 flex md:flex-row flex-col gap-4">
                  <div className="lg:w-1/2 w-full">
                    {/* <p className="font-normal text-sm mb-2 text-white">
                      {t("Subject (required)")}
                    </p> */}
                    <input
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      placeholder={t("Enter subject")}
                      className="contact-input px-5 py-3 w-full"
                    ></input>
                    {errors.subject && (
                      <p className="text-red-500">{errors.subject.message}</p>
                    )}
                  </div>
                  <div className="lg:w-1/2 w-full">
                    {/* <p className="font-normal text-sm mb-2 text-white">
                      {t("Type of Business (required)")}
                    </p> */}

                    <div className="relative">
                      <div
                        onClick={() => {
                          handleDropDown();
                        }}
                        className="contact-input cursor-default items-center flex justify-between px-5 py-3 w-full "
                      >
                        <p className="text-white2">
                          {" "}
                          {getValues("businessClassification") ||
                            "Type of business"}
                        </p>
                        <div>
                          {openDropDown ? (
                            <>
                              <svg
                                className="rotate-180"
                                width="13"
                                height="9"
                                viewBox="0 0 13 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.54552 8.125L6.77276 1.875L12 8.125"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </>
                          ) : (
                            <>
                              <svg
                                width="13"
                                height="9"
                                viewBox="0 0 13 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.54552 8.125L6.77276 1.875L12 8.125"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </>
                          )}
                        </div>
                      </div>

                      {openDropDown ? (
                        <>
                          <div className="absolute text-white2 left-0 top-14 bg-[#24272E] py-4 rounded-[10px] w-full gap-4 flex flex-col">
                            <div
                              className="cursor-pointer px-4"
                              onClick={() => {
                                handleDropChange("Introducing Broker");
                              }}
                            >
                              <p> {t("Introducing Broker")}</p>
                            </div>
                            <div
                              className="cursor-pointer px-4"
                              onClick={() => {
                                handleDropChange("Institutional Partner");
                              }}
                            >
                              <p>{t("Institutional Partner")}</p>
                            </div>
                            <div
                              className="cursor-pointer px-4"
                              onClick={() => {
                                handleDropChange("Individual Client");
                              }}
                            >
                              <p>{t("Individual Client")}</p>
                            </div>
                            <div
                              className="cursor-pointer px-4"
                              onClick={() => {
                                handleDropChange("Other");
                              }}
                            >
                              <p> {t("Other")}</p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>

                    {errors.businessClassification &&
                      isFirstValidate.current && (
                        <p className="text-red-500">
                          {t("Please select a business classification")}
                        </p>
                      )}
                  </div>
                </div>

                <div className="w-full mt-4 flex gap-4">
                  <div className="w-full">
                    {/* <p className="font-normal text-sm mb-2 text-white">
                      {t("Message (required)")}
                    </p> */}
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                      })}
                      placeholder={t("Enter your message")}
                      className="resize-none h-[172px] contact-input px-5 py-3 w-full "
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500">{errors.message.message}</p>
                    )}
                  </div>
                </div>
                <div className="w-full flex justify-center items-center">
                  <button
                    type={t("submit")}
                    onClick={() => (isFirstValidate.current = true)}
                    className="mt-4 px-4 py-4 w-56 bg-turquoise font-normal rounded-full hover:bg-[#009e3e] transition duration-200 gap-2 hover:scale-105  text-white"
                  >
                    {isSubmitting ? (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                </div>
                <div className="w-full text-center mt-4 flex justify-center ">
                  <p className="sbTextGray-p !text-[16px] !font-[300] mt-5 ">
                    <span>
                      {t(
                        "By submitting this form, you agree to receive emails from Stockbanks in accordance with our "
                      )}
                      <br />
                      {t(
                        "Terms & Conditions, Privacy Policy and Cookie Policy."
                      )}
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </motion.div>

          {/* contact details */}
        </div>

        {/* chat box here */}
        {showModal ? (
          <>
            <div className="chat-window">
              <div className="">
                <button
                  className="bg-white rounded-full flex items-center justify-center border-0 text-black float-right absolute w-8 h-8 top-[-8px] right-0"
                  onClick={() => setShowModal(false)}
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
                {/* Modal data here */}
                {(() => {
                  if (["CN", "HK", "TW"].includes(country)) {
                    return (
                      <>
                        <iframe src="https://chat.cptinternational.com/#/SessionForm?lang=en"></iframe>
                        {/* <iframe src="https://chat.conv.rs/3b4ef5f17291760ef49bd332c04475a2644252fa.html"></iframe> */}
                      </>
                    );
                  } else if (country === "GB") {
                    return <> </>;
                  } else {
                    return (
                      <>
                        <iframe src="https://chat.conv.rs/3b4ef5f17291760ef49bd332c04475a2644252fa.html"></iframe>
                      </>
                    );
                  }
                })()}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Contact;

