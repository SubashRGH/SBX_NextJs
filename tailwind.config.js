module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      inter: ["Inter Tight", "Lato", "serif"],
      merriweather: ["Merriweather", "serif"],
    },
    colors: {
      white: "#fff",
      white2: "#A8ADBA",
      black: "#000",
      grey: "#7F8696",
      black10: "rgba(0,0,0,0.1)",
      grey2: "#24272E",
      grey3: "#F9FAFB",
      grey4: "#d2d3df",
      white50: "rgba(255, 255, 255, 0.50)",
      blue: "#0C2038",
      white17: "rgba(255,255,255,0.17)",
      white20: "rgba(255,255,255,0.20)",
      turquoise: "#00b144",
      /* whitelabel project theme colors */
      primary: "#00b144",
      secondary: "#1c1c1c",
      neutral: "#ffff",
      /* whitelabel project theme colors */
      background: "var(--background)",
    },

    extend: {
      boxShadow: {
        bottomAndSides: "0px 4px 4px 0px #000",
      },
      backgroundColor: {
        transparent: "rgba(0,0,0,0)",
        screens: {
          lg: "1025px",
          // => @media (min-width: 992px) { ... }
        },
      },
      backgroundImage: {
        sbBackground:
          "linear-gradient(var(--tw-gradient-from), var(--tw-gradient-to))",

        infoCardBg:
          "linear-gradient(180deg, rgba(37, 37, 37, 0.00) 0%, rgba(33, 36, 40, 0.80) 100%)",
      },
    },
    variants: {
      display: ["responsive", "focus", "dropdown"],
    },
    plugins: [require("tailwindcss-dropdown")],
  },
};

