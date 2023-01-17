/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      primary: "var(--tw-color-primary)",
      "primary-offset": "var(--tw-color-primary-offset)",
      secondary: "var(--tw-color-secondary)",
      "secondary-offset": "var(--tw-color-secondary-offset)",
      tertiary: "var(--tw-color-tertiary)",
      "tertiary-offset": "var(--tw-color-tertiary-offset)",
      quaternary: "var(--tw-color-quaternary)",
      quinary: "var(--tw-color-quinary)",
    },
  },
  plugins: [plugin(({ addVariant }) => addVariant("where", ":where(&)"))],
};
