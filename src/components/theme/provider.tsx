import { component$, createContext, Slot, useClientEffect$, useContextProvider, useStore, useStyles$ } from "@builder.io/qwik";

import { THEMES } from "~/constants/theme";
import type { Theme } from "~/types/theme";

type Store = { isMenuVisible: boolean } & Pick<Theme, "id" | "isDarkType">;

export const style = THEMES.map(
  ({ id, colors }) => `
    .theme-${id} {
      ${Object.entries(colors)
        .map(([key, value]) => {
          const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
          return `--tw-color-${kebabKey}: ${value};`;
        })
        .join("")}
    }
  `
).join("");

export const ThemeContext = createContext<Store>("theme");

export default component$(() => {
  useStyles$(style);

  const store = useStore<Store>({ id: THEMES[0].id, isDarkType: THEMES[0].isDarkType, isMenuVisible: false });
  useContextProvider(ThemeContext, store);

  useClientEffect$(() => {
    store.id = localStorage.getItem("theme") ?? THEMES[0].id;
  });

  useClientEffect$(({ track }) => {
    const id = track(() => store.id);
    const theme = THEMES.find((theme) => theme.id === id);
    if (!theme) return;
    localStorage.setItem("theme", id);
    store.isDarkType = theme.isDarkType;
  });

  useClientEffect$(({ track }) => {
    const isMenuVisible = track(() => store.isMenuVisible);
    isMenuVisible && window.scrollTo(0, 0);
  });

  return (
    <div class={`theme-${store.id} bg-primary text-secondary`}>
      <Slot />
      <style>
        {`
          body {
            --tw-shadow-rgb-code: ${store.isDarkType ? "125 125 125" : "0 0 0"};
          }
        `}
      </style>
    </div>
  );
});
