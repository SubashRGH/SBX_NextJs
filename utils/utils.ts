import {
  BREAKPOINTS,
  BreakpointValue,
  DISPLAY_LANGUAGE_WEB_STORAGE_KEY,
  LANGUAGE_WEB_STORAGE_KEY,
} from "@/constants";
import axios from "axios";

export const changeLang = (lang: string) => {
  if (lang.includes("zh")) {
    return "zh-tw";
  }
  if (lang.includes("cn")) {
    return "zh-cn";
  }

  if (lang.includes("en")) {
    return "en-us";
  }
  if (lang.includes("vt")) {
    return "vn";
  }
  if (lang.includes("fr")) {
    return "fr";
  }
  return lang;
};

export const fetchCountry = async (ip?: string) => {
  console.log(ip, "IP ADDRESS");
  try {
    const { data } = await axios.get(
      ip && ip !== "::1"
        ? `https://freeipapi.com/api/json/${ip}`
        : `https://freeipapi.com/api/json/`
    );
    return data.countryCode;
  } catch (error) {
    console.log(error);
    return "us";
  }
};
// country code
export const countryCodes = [
  "af",
  "al",
  "dz",
  "as",
  "ad",
  "ao",
  "ai",
  "aq",
  "ag",
  "ar",
  "am",
  "aw",
  "au",
  "at",
  "az",
  "bs",
  "bh",
  "bd",
  "bb",
  "by",
  "be",
  "bz",
  "bj",
  "bm",
  "bt",
  "bo",
  "bq",
  "ba",
  "bw",
  "bv",
  "br",
  "io",
  "bn",
  "bg",
  "bf",
  "bi",
  "cv",
  "kh",
  "cm",
  "ca",
  "ky",
  "cf",
  "td",
  "cl",
  "cn",
  "cx",
  "cc",
  "co",
  "km",
  "cd",
  "cg",
  "ck",
  "cr",
  "hr",
  "cu",
  "cw",
  "cy",
  "cz",
  "ci",
  "dk",
  "dj",
  "dm",
  "do",
  "ec",
  "eg",
  "sv",
  "gq",
  "er",
  "ee",
  "sz",
  "et",
  "fk",
  "fo",
  "fj",
  "fi",
  "fr",
  "gf",
  "pf",
  "tf",
  "ga",
  "gm",
  "ge",
  "de",
  "gh",
  "gi",
  "gr",
  "gl",
  "gd",
  "gp",
  "gu",
  "gt",
  "gg",
  "gn",
  "gw",
  "gy",
  "ht",
  "hm",
  "va",
  "hn",
  "hk",
  "hu",
  "is",
  "in",
  "id",
  "ir",
  "iq",
  "ie",
  "im",
  "il",
  "it",
  "jm",
  "jp",
  "je",
  "jo",
  "kz",
  "ke",
  "ki",
  "kp",
  "kr",
  "kw",
  "kg",
  "la",
  "lv",
  "lb",
  "ls",
  "lr",
  "ly",
  "li",
  "lt",
  "lu",
  "mo",
  "mg",
  "mw",
  "my",
  "mv",
  "ml",
  "mt",
  "mh",
  "mq",
  "mr",
  "mu",
  "yt",
  "mx",
  "fm",
  "md",
  "mc",
  "mn",
  "me",
  "ms",
  "ma",
  "mz",
  "mm",
  "na",
  "nr",
  "np",
  "nl",
  "nc",
  "nz",
  "ni",
  "ne",
  "ng",
  "nu",
  "nf",
  "mp",
  "no",
  "om",
  "pk",
  "pw",
  "ps",
  "pa",
  "pg",
  "py",
  "pe",
  "ph",
  "pn",
  "pl",
  "pt",
  "pr",
  "qa",
  "mk",
  "ro",
  "ru",
  "rw",
  "re",
  "bl",
  "sh",
  "kn",
  "lc",
  "mf",
  "pm",
  "vc",
  "ws",
  "sm",
  "st",
  "sa",
  "sn",
  "rs",
  "sc",
  "sl",
  "sg",
  "sx",
  "sk",
  "si",
  "sb",
  "so",
  "za",
  "gs",
  "ss",
  "es",
  "lk",
  "sd",
  "sr",
  "sj",
  "se",
  "ch",
  "sy",
  "tw",
  "tj",
  "tz",
  "th",
  "tl",
  "tg",
  "tk",
  "to",
  "tt",
  "tn",
  "tr",
  "tm",
  "tc",
  "tv",
  "ug",
  "ua",
  "ae",
  "gb",
  "um",
  "us",
  "uy",
  "uz",
  "vu",
  "ve",
  "vn",
  "vg",
  "vi",
  "wf",
  "eh",
  "ye",
  "zm",
  "zw",
  "ax",
];

export const getResponsiveImage = ({
  width,
  images,
}: {
  width?: number;
  images?: { [key in BreakpointValue]: string };
}): string => {
  console.log({ images, width });
  if (images && width) {
    if (width >= BREAKPOINTS.DESKTOP) {
      return images[BREAKPOINTS.DESKTOP];
    } else if (width >= BREAKPOINTS.SMALLDESKTOP) {
      return images[BREAKPOINTS.SMALLDESKTOP];
    } else if (width >= BREAKPOINTS.TABLET) {
      return images[BREAKPOINTS.TABLET];
    } else {
      return images[BREAKPOINTS.MOBILE];
    }
  }
  return "";
};

export const getWebSelectedLang = () =>
  sessionStorage.getItem(LANGUAGE_WEB_STORAGE_KEY) || "en";

export const setWebSelectedLang = (lang: languageType) =>
  sessionStorage.setItem(LANGUAGE_WEB_STORAGE_KEY, lang);

export const getWebDisplaySelectedLang = () =>
  sessionStorage.getItem(
    DISPLAY_LANGUAGE_WEB_STORAGE_KEY
  ) as languageDisplayNameType;

export const setWebDisplaySelectedLang = (lang: languageDisplayNameType) =>
  sessionStorage.setItem(DISPLAY_LANGUAGE_WEB_STORAGE_KEY, lang);

/**
 * Returns the current year based on the current date.
 * @returns {number} The current year.
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}
