import { component$, createContext, Slot, useClientEffect$, useContextProvider, useStore, useStyles$ } from "@builder.io/qwik";
import { THEMES } from "~/constants/theme";
import type { Theme } from "~/types/theme";

type ThemeStore = { value: Theme["name"]; isMenuVisible: boolean };

export const themeStyle = THEMES.map(
  ({ name, colors }) => `
    .theme-${name} {
      ${Object.entries(colors)
        .map(([key, value]) => {
          const cssKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
          return `--tw-color-${cssKey}: ${value};`;
        })
        .join("")}
    }
  `
).join("");

export const ThemeContext = createContext<ThemeStore>("theme");

export default component$(() => {
  useStyles$(themeStyle);

  const themeStore = useStore<ThemeStore>({ value: THEMES[0].name, isMenuVisible: false });
  useContextProvider(ThemeContext, themeStore);

  useClientEffect$(() => {
    themeStore.value = localStorage.getItem("theme") ?? THEMES[0].name;
  });

  useClientEffect$(({ track }) => {
    const theme = track(() => themeStore.value);
    localStorage.setItem("theme", theme);
  });

  useClientEffect$(({ track }) => {
    const isMenuVisible = track(() => themeStore.isMenuVisible);
    isMenuVisible && window.scrollTo(0, 0);
  });

  return (
    <div class={`bg-primary text-secondary theme-${themeStore.value}`}>
      <Slot />
    </div>
  );
});
