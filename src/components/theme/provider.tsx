import { component$, createContext, Slot } from "@builder.io/qwik";

import { useTheme } from "~/hooks/theme";
import type { ThemeStore } from "~/types/theme";

export const ThemeContext = createContext<ThemeStore>("theme");

export default component$(() => {
  useTheme();

  return (
    <div class="bg-primary text-secondary">
      <Slot />
    </div>
  );
});
