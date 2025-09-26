import {
  FC,
  createContext,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useRouter } from "next/router";

import { i18n } from "next-i18next";

import {
  getWebDisplaySelectedLang,
  getWebSelectedLang,
  setWebDisplaySelectedLang,
  setWebSelectedLang,
} from "@/utils/utils";
import { langList } from "@/constants";

const defaultContextState: {
  language: {
    lang: languageType;
    displayLang: languageDisplayNameType;
  };
  switchLanguage: (
    language: languageType,
    displayLang: languageDisplayNameType,
    callbackFnc: () => void | null
  ) => void;
} = {
  language: {
    lang: "en",
    displayLang: "Eng",
  },
  switchLanguage: (language, displayLang, callbackFnc) => {},
};

export const LanguageContext = createContext(defaultContextState);

export const LanguageWrapper: FC<LanguageWrapperProps> = ({ children }) => {
  const router = useRouter();

  const [currentLanguage, setCurrentLanguage] = useState<{
    lang: languageType;
    displayLang: languageDisplayNameType;
  }>({
    lang: "en",
    displayLang: "Eng",
  });

  const changeLangRoutes = async (lang: languageType) => {
    try {
      return await router.push(router.route, router.asPath, {
        locale: lang,
      });
    } catch (error) {}
  };

  const switchLanguage = useCallback(
    async (
      lang: languageType,
      displayLang: languageDisplayNameType,
      callbackFnc: () => void
    ) => {
      setWebSelectedLang(lang);
      setWebDisplaySelectedLang(displayLang);

      i18n?.changeLanguage(lang);

      setCurrentLanguage({ lang, displayLang });

      (await changeLangRoutes(lang)) && callbackFnc();
    },
    [router.pathname]
  );

  useLayoutEffect(() => {
    if (!window || !window.document) return;

    const lang = getWebSelectedLang() as languageType;
    const displayLang = getWebDisplaySelectedLang() as languageDisplayNameType;

    if (lang && displayLang) {
      lang !== currentLanguage.lang &&
        switchLanguage(lang, displayLang, () => {});
      return;
    }

    switchLanguage(
      (router.locale || "en") as languageType,
      (langList.filter((item) => router.locale?.includes(item.locale))?.at(0)
        ?.displayName || "Eng") as languageDisplayNameType,
      () => {}
    );
  }, []);

  return (
    <>
      <LanguageContext.Provider
        value={{ language: currentLanguage, switchLanguage }}
      >
        {children}
      </LanguageContext.Provider>
    </>
  );
};

LanguageContext.displayName = "LanguageWrapper";
