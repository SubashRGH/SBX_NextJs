import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState, MouseEventHandler } from "react";
import { useTranslation } from "next-i18next";

interface Props {
  handleClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  initialStep: number;
  userType: string;
  updateUserType: (newType: string) => void;
}

const Terms = ({
  handleClick,
  initialStep,
  userType,
  updateUserType,
}: Props) => {
  const { t } = useTranslation("common");
  const [step, setStep] = useState(initialStep);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  // const [selectedUserType, setSelectedUserType] = useState("new-user");

  const handleContinue = () => {
    setStep(2);
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleApply = () => {
    console.log("type heere" + userType);
    if (userType === "new-user") {
      window.open(
        "https://zaportal.cptmarkets.com/#/en/user/register/individual?bonus=welcome30",
        "_blank"
      );
    } else if (userType === "existing-user") {
      window.open(
        "https://zaportal.cptmarkets.com/#/en/user/login?bonus=welcome30",
        "_blank"
      );
    }
  };

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed lg:inset-0 xl:inset-0 top-7 z-50 outline-none focus:outline-none overlay p-7 c trader-modal">
      <div className="relative lg:p-4 xl:p-4 p-2 mx-aut rounded-xl md:w-[589px] xl:w-[589px] sm:w-[589px] w-full text-center">
        <div>
          <div className="backdrop" onClick={handleClick}></div>
          <div
            id="modal"
            className="relative rounded-xl p-8 w-full max-w-md mx-auto text-center shadow-lg z-50 text-white"
            style={{ backgroundColor: "rgb(29, 27, 27)" }}
          >
            <button
              className="absolute top-4 right-4 bg-transparent border-0 text-white"
              onClick={handleClick}
            >
              <XMarkIcon className="h-7 w-7 text-black" />
            </button>

            {step === 1 ? (
              <>
                <h3 className="text-xl font-bold mb-4">Choose 1 to proceed</h3>
                <div className="flex flex-col space-y-4">
                  <div
                    className="flex items-start space-x-4 p-4 rounded-xl"
                    style={{ backgroundColor: "#2c2c2c" }}
                  >
                    <input
                      type="radio"
                      id="new-user"
                      name="user-type"
                      className="custom-radio"
                      defaultChecked
                      onClick={() => updateUserType("new-user")}
                    />
                    <div className="text-left flex-1 pl-2">
                      <label
                        htmlFor="new-user"
                        className="font-semibold text-lg block"
                      >
                        New User
                      </label>
                      <span className="text-sm text-gray-300 block">
                        I am new to Stockbanx and wish to join the campaign.
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex items-start space-x-4 p-4 rounded-xl"
                    style={{ backgroundColor: "#2c2c2c" }}
                  >
                    <input
                      type="radio"
                      id="existing-user"
                      name="user-type"
                      className="custom-radio"
                      onClick={() => updateUserType("existing-user")}
                    />
                    <div className="text-left flex-1 pl-2">
                      <label
                        htmlFor="existing-user"
                        className="font-semibold text-lg block"
                      >
                        Existing User
                      </label>
                      <span className="text-sm text-gray-300 block">
                        I already have an account but have not yet deposited any
                        money into it.
                      </span>
                    </div>
                  </div>
                </div>
                <p
                  className="text-xs mt-4 pt-6 pb-9 text-start"
                  style={{ color: "#FFFFFF" }}
                >
                  Terms and conditions apply. Trading involves risk. Ensure you
                  understand these risks before trading.
                </p>
                <div className="mt-6">
                  <button
                    onClick={handleContinue}
                    className="w-full rounded-full px-8 py-2 font-semibold mb-4"
                    style={{ backgroundColor: "#00b144", color: "#000000" }}
                  >
                    Continue
                  </button>
                  <button
                    onClick={handleClick}
                    className="w-full bg-red-600 text-white rounded-full px-8 py-2 font-semibold"
                  >
                    Decline
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-4">Terms & Conditions</h3>
                <div className="flex items-center mt-4">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="terms-checkbox"
                      checked={isCheckboxChecked}
                      onChange={handleCheckboxChange}
                      className="hidden"
                    />
                    <div
                      className={`w-5 h-5 border-2 rounded ${
                        isCheckboxChecked
                          ? "bg-blue-500 border-blue-500"
                          : "bg-gray-800 border-gray-600"
                      } flex items-center justify-center cursor-pointer`}
                      onClick={handleCheckboxChange}
                    >
                      {isCheckboxChecked && (
                        <span className="text-white">✔</span>
                      )}
                    </div>
                  </div>
                  <label
                    htmlFor="terms-checkbox"
                    className="ml-2 text-sm text-gray-300 cursor-pointer"
                    onClick={handleCheckboxChange}
                  >
                    I agree to{" "}
                    <a
                      href="https://image.cptmarkets.com/Contents/cptza/Legal/Stockbanx-ZA-PromTC.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-red-500"
                    >
                      terms and conditions
                    </a>
                  </label>
                </div>
                <div className="mt-6">
                  <button
                    onClick={handleApply}
                    className="w-full rounded-full px-8 py-2 font-semibold mb-4"
                    style={{
                      backgroundColor: isCheckboxChecked ? "#00b144" : "#aaa",
                      color: isCheckboxChecked ? "#000000" : "#666",
                    }}
                    disabled={!isCheckboxChecked}
                  >
                    Apply Now
                  </button>
                  <button
                    onClick={handleClick}
                    className="w-full bg-red-600 text-white rounded-full px-8 py-2 font-semibold"
                  >
                    Decline
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

