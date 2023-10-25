module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_purple: { 50: "#e9dcfa", "50_01": "#eadcfb" },
        blue_gray: { 100: "#d9d9d9" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        purple: { 500: "#9e08c3" },
        white: { A700: "#ffffff" },
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
