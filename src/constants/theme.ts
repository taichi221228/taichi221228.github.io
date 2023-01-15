import type { Theme } from "~/types/theme";

export const THEMES: Theme[] = [
  {
    name: "classic",
    colors: {
      primary: "#fff",
      primaryOffset: "#f7f7f9",
      secondary: "#373a3c",
      secondaryOffset: "#818a91",
      tertiary: "#ff335f",
      tertiaryOffset: "#ff1447",
      quaternary: "#43a9a3",
      quinary: "#eceeef",
    },
  },
  {
    name: "dark",
    colors: {
      primary: "#0e141b",
      primaryOffset: "#252526",
      secondary: "#fff",
      secondaryOffset: "#818a91",
      tertiary: "#ff5277",
      tertiaryOffset: "#ff2957",
      quaternary: "#43a9a3",
      quinary: "#2d2d2d",
    },
  },
];
