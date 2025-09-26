import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import Loader from "../../components/Loader";
import PhoneInput from "react-phone-input-2";
interface Props {
  submitText?: string;
  title?: string;
  slug?: string;
}

declare global {
  interface Window {
    __adroll: any;
  }
}

function Register({ submitText, title, slug }: Props) {
  const { t } = useTranslation("common");
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState<any>();
  const [token, setToekn] = useState<any>([]);
  const [ipPhone, setIPphone] = useState<any>("us");
  const [dialCode, setDialCode] = useState<any>();
  const [referBy, setReferBy] = useState<any>();
  const [tel, setTel] = useState<any>();
  const router = useRouter();
  let data = {
    sec_name: "",
    lang_name: "",
    lic_name: "",
  };

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

  // get loc here
  const getGeoInfo = () => {
    fetch(`https://freeipapi.com/api/json/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        // setTel(response?.data?.country_code)
        setTel(response?.countryCode);
      });
  };

  // get token
  const getToekn = () => {
    fetch(`${process.env.NEXT_PUBLIC_COMPAIGHN_URL}/v1/token`, {
      method: "POST",
      body: JSON.stringify({
        merchant_Token: process.env.NEXT_PUBLIC_MERCHANT_TOKEN,
        merchant_Secret: process.env.NEXT_PUBLIC_MERCHANT_SECRET,
        grant_Type: "password",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setToekn(response?.data?.token);
      });
  };

  const getDafaultIP = () => {
    setIPphone(tel?.toLowerCase());
  };

  useEffect(() => {
    getGeoInfo();
    getToekn();
    const timer = setInterval(() => {
      getToekn();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (tel) getDafaultIP();
    const params = router.query;
    setReferBy(params.referredby);
  }, [tel]);

  const handleChange = (phone: string, country: any) => {
    const reducedPhone = phone.replace(country.dialCode, "");
    setDialCode(country.dialCode + " " + reducedPhone);
    setIPphone(country.countryCode);
  };

  const trackAdrollUser = async () => {
    try {
      if (window?.__adroll) {
        window?.__adroll?.record_user({ adroll_segments: "f754e0c6" });
      } else {
        console.log("ADROLL NOT FOUND");
      }
    } catch (error) {}
  };

  // form submit
  const formSubmit = (data: any) => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_COMPAIGHN_URL}/v1/Lead/NewMarketingLead`, {
      method: "POST",
      body: JSON.stringify({
        first_name: data.firstName,
        email: data.email,
        mobile_number: `+${dialCode}`,
        country_of_residence: "st",
        callback_url: "https://accounts/promotions",
        source: "cpt web",
        campaign_name: window.location.href,
        reference_id: uuidv4(),
        ReferredBy: referBy,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status >= 400 && res.status < 600) {
          let errList = "";
          for (var key of Object.keys(res?.errors)) {
            for (let i = 0; i < res?.errors[key].length; i++) {
              errList += res?.errors[key][i];
            }
          }
          toast(`${errList}`, {
            hideProgressBar: false,
            autoClose: 1000,
            type: "error",
            position: "top-right",
          });
          setLoading(false);
        } else if (res.statuscode === 101) {
          toast(`${t("Registration Successful")}`, {
            hideProgressBar: false,
            autoClose: 1000,
            type: "success",
            position: "top-right",
          });
          reset();
          getDafaultIP();
          setLoading(false);
          sessionStorage.setItem("formsubmit", "true");
          if (slug && slug === "core") trackAdrollUser();
          router.push("/thanks");
        } else {
          toast(`${res.message}`, {
            hideProgressBar: false,
            autoClose: 1000,
            type: "error",
            position: "top-right",
          });
          setLoading(false);
        }
      })
      .catch((res: any) => {
        console.log(res);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        {loading ? (
          <>
            <div className="loading-spinner">
              <Loader />
            </div>
          </>
        ) : null}
        <div className="form-container">
          <h3 className="!text-base mb-4 stkbnx-heading"> {title} </h3>
          <div className="form-area">
            <label>
              {" "}
              {t("Full Name")} <span> * </span>
            </label>
            <input
              {...register("firstName", { required: true })}
              placeholder={t("Full Name")}
            />
            {errors.firstName && (
              <p className="error"> {t("Full Name is required")}</p>
            )}
          </div>
          <div className="form-area">
            <label>
              {" "}
              {t("Phone Number")} <span> * </span>{" "}
            </label>
            <Controller
              control={control}
              name="phone"
              rules={{ required: false }}
              render={({ field: { ref, ...field } }) => (
                <PhoneInput
                  country={ipPhone}
                  value={field.value} // Pass the value from field
                  onChange={(phone, country) => {
                    field.onChange(phone); // Update the field value
                    handleChange(phone, country); // Update the state
                  }}
                />
                // <ReactPhoneInput
                //   {...field}
                //   country={ipPhone}
                //   countryCodeEditable={false}
                //   placeholder={t("Phone Number")}
                //   enableSearch={true}
                //   disableSearchIcon={true}
                //   onChange={handleChange}
                // />
              )}
            />
            {errors.phone && (
              <p className="error"> {t("Phone Number is required")} </p>
            )}
          </div>
          <div className="form-area">
            <label> {t("Email")} </label>
            <input
              type="email"
              {...register("email", { required: false })}
              placeholder={t("Email")}
            />
            {errors.email && (
              <p className="error"> {t("Email address is required")}</p>
            )}
          </div>
        </div>
        <div className="formData">
          <input
            className="cmn-btn bg-primary  promote-btn rounded-full cursor-pointer"
            type="submit"
            value={submitText}
          />
          <div
            className="text-center text-sm read-font mt-4"
            dangerouslySetInnerHTML={{
              __html: t(
                "I have read and consent to my data being used in accordance with the Privacy Policy",
                {
                  interpolation: { escapeValue: false },
                }
              ),
            }}
          ></div>
        </div>
      </form>
    </>
  );
}

export default Register;

