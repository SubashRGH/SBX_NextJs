import { useContext, useEffect, useRef, useState } from "react";

import { useRouter } from "next/router";

import classNames from "classnames";

import { LanguageContext } from "./LanguageWrapper";
import { langList } from "@/constants";

type Props = {
  iconClass?: string;
  flagImg?: any;
  flagImgClass?: string;
};

export default function Language({
  iconClass,
  flagImg,
  flagImgClass = "",
}: Props) {
  const { language, switchLanguage } = useContext(LanguageContext);

  const [dropdown, setDropdown] = useState(false);

  const toggleOpen = () => setDropdown(!dropdown);

  const router = useRouter();
  const langMenu = useRef<any>(null);

  const handleLocaleChange = (data: any) => {
    switchLanguage(data?.locale || "en", data.displayName || "Eng", () => {
      toggleOpen();
      setDropdown(false);
    });
  };

  const closeOpenMenus = (e: { target: any }) => {
    if (langMenu.current && dropdown && !langMenu.current.contains(e.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
  }, [dropdown]);

  const getLanguageList = (currentPath: string) => {
    if (currentPath.includes("/vncampaign")) {
      return langList.filter((i) => i.vnCampaignOnly);
    }
    if (
      currentPath !== "/generic-landing" &&
      currentPath !== "/thanks" &&
      !currentPath.includes("/campaign")
    ) {
      return langList;
    }

    if (currentPath === "/campaign") {
      return langList.filter(
        (i) => i.locale === "en" || i.locale === "vt" || i.locale === "id"
      );
    }

    return langList.filter((item) => item.landing);
  };

  return (
    <>
      <div className="dropdown">
        <button onClick={toggleOpen}>
          <div className="flex relative  items-center gap-1">
            <p className="font-medium text-base ">{language.displayLang}</p>
            {/* <svg
              className={classNames(
                `h-4 w-4 arrow-rotate absolute top-[3px]  right-[-20px] ${iconClass} ${
                  dropdown ? "down" : ""
                }`
              )}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg> */}
          </div>
        </button>
        {/* <div
          className={`language-menu z-[9999] lang-dropdown 	absolute top-[28px] right-[-25px] hidden w-[200px] p-2 mt-4 space-y-2 text-sm bg-white border border-gray-100 rounded-lg shadow-lg ${
            dropdown ? "show" : ""
          }`}
          aria-labelledby="dropdownMenuButton"
          ref={langMenu}
        >
          {getLanguageList(router.pathname).map((item: any, idx) => {
            // console.log(getLanguageList(router.pathname), item);
            return (
              <ul key={`Language Number ${idx}`}>
                <li
                  key={item.locale}
                  onClick={() => handleLocaleChange(item)}
                  style={{ cursor: "pointer" }}
                  className={classNames(
                    `${item.locale === router.locale ? "selected" : ""}`
                  )}
                >
                  <div className="flex">
                    <span className="mr-2"> {item.langName} </span>
                  </div>
                </li>
              </ul>
            );
          })}
        </div> */}
      </div>
    </>
  );
}

