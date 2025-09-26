import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import Loader from "../Loader";
import { useTranslation } from "next-i18next";
import Link from "next/link";
const NewsLetter = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendNewsLetter = (data) => {
    if (data.email) {
      setIsLoading(true);
      const payload = {
        email: data.email,
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
          setIsLoading(false);
        })
        .catch((e) => {
          setIsLoading(false);
        });
    }
  };
  return (
    <>
      <div className="my-[4rem]  w-full">
        <div className="w-full h-full newsletterbg  md:items-center flex lg:flex-row flex-col">
          <div className="lg:w-[55%] px-4 py-4 md:px-12 md:py-12  lg:pl-[99px] w-full">
            <p className="head-texts text-[#F8F9FC]">
              {" "}
              {t("Newsletter Subscription")}{" "}
            </p>
            <p className="para-texts mt-6 text-[#E2E6EE]">
              {t(
                "Get real-time Forex news and the latest trading updates. Stay informed on currency and commodity market trends to make smarter trading decisions."
              )}
            </p>
            <p className="text-[#F1F3F9] mt-6 font-bold text-md">
              {" "}
              {t("Email")}{" "}
            </p>
            <form onSubmit={handleSubmit(sendNewsLetter)}>
              <div className="flex md:flex-row flex-col w-full mt-4 gap-2">
                <input
                  placeholder="example@stockbanx.com"
                  className="bg-[#24272E] px-3 rounded-[11px] w-full py-4 md:py-0 lg:w-[70%] focus-visible:outline-0 focus-visible:border focus-visible:border-solid focus-visible:border-primary"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                <div className="w-[50%] mt-4 md:mt-0 md:w-[30%]">
                  <button
                    type="submit"
                    className="bg-primary  w-full rounded-[100px] text-white py-2 md:py-4 px-6"
                  >
                    {isLoading ? (
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
                        <span class="sr-only"> {t("Loading...")}</span>
                      </div>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </div>
              </div>
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <div className="flex w-full items-center mt-6 gap-3">
                <div className="custom-checkbox">
                  <label className="form-control text-sm text-white para-texts cursor-pointer">
                    <input
                      type="checkbox"
                      name="checkbox"
                      {...register("consent", {
                        required: "Please consent to terms",
                      })}
                    ></input>
                    <p>
                      {t("I consent to my data being used as per the")}{" "}
                      <Link href="/about/legal-documents/privacy-policy">
                        {t("Privacy Policy")}
                      </Link>{" "}
                      &{" "}
                      <Link href="/about/legal-documents/terms-and-conditions">
                        {t("Terms")}
                      </Link>
                      .
                    </p>
                  </label>
                  {/* <input
                    type="checkbox"
                    {...register("consent", {
                      required: "Please consent to terms",
                    })}
                  /> */}
                </div>
                {/* <p className="text-white para-texts">
                  I consent to my data being used as per the Privacy Policy &
                  Terms.
                </p> */}
              </div>
              {errors.consent && (
                <p className="text-red-500">{errors.consent.message}</p>
              )}
            </form>
          </div>

          {/* <div className="lg:w-[45%] flex justify-start relative h-full w-full">
            <div className="absolute md:block hidden h-full w-full">
              <img src="/static/images/home/Frame.png"></img>
            </div>
            <div className="absolute md:block hidden top-10 z-10 right-[20%]">
              <img src="/static/images/home/newslettertop.png"></img>
            </div>
            <div className="relative md:left-24 lg:left-0 lg:z-20">
              <img src="/static/images/home/newsletterright.png"></img>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
