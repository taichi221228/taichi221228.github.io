import { THEMES } from "~/constants/theme";

export const styles = `
  ${THEMES.map(
    ({ id, colors, isDarkType }) => `
      [data-theme="${id}"] {
        ${Object.entries(colors)
          .map(([key, value]) => {
            const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
            return `--tw-color-${kebabKey}: ${value};`;
          })
          .join("")}
          --tw-shadow-rgb-code: ${isDarkType ? "125 125 125" : "0 0 0"};
      }
    `
  ).join("")}
  ::-webkit-scrollbar {
    height: 0.5rem;
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--tw-color-primary-offset);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tw-color-quinary);
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--tw-color-tertiary);
  }
`;
