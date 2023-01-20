import { component$, createContext, Slot, useClientEffect$, useContextProvider, useStore, useStyles$ } from "@builder.io/qwik";

import { THEMES } from "~/constants/theme";
import type { Theme } from "~/types/theme";

type Store = { isMenuVisible: boolean } & Pick<Theme, "id" | "isDarkType">;

export const style = `
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

export const ThemeContext = createContext<Store>("theme");

export default component$(() => {
  useStyles$(style);

  const store = useStore<Store>({ ...THEMES[0], isMenuVisible: false });
  useContextProvider(ThemeContext, store);

  useClientEffect$(() => {
    store.id = localStorage.getItem("theme") ?? THEMES[0].id;
  });

  useClientEffect$(({ track }) => {
    const id = track(() => store.id);
    const theme = THEMES.find((theme) => theme.id === id);
    if (!theme) return;
    store.isDarkType = theme.isDarkType;
    const { documentElement } = document;
    localStorage.setItem("theme", id);
    documentElement.dataset.theme = id;
  });

  useClientEffect$(({ track }) => {
    const isMenuVisible = track(() => store.isMenuVisible);
    isMenuVisible && window.scrollTo(0, 0);
  });

  return (
    <div class="bg-primary text-secondary">
      <Slot />
    </div>
  );
});
