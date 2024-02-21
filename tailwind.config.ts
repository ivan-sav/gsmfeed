import { COLOR_MAPPER, SCREEN_MAPPER } from "./src/constants/common";
import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: COLOR_MAPPER,
    screens: SCREEN_MAPPER,
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      serif: ["Poppins", "serif"],
      body: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
});
export default config;
