import { useContext } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { THEMES } from "~/constants/theme";
import CloseButton from "../button/close";
import Card from "./card";
import { ThemeContext } from "./provider";

export default component$(() => {
  const themeContext = useContext(ThemeContext);

  return (
    <div class={`bg-primary-offset relative overflow-hidden px-6 py-8 transition-all ${themeContext.isMenuVisible || "-mt-48"}`}>
      <CloseButton onClick$={() => (themeContext.isMenuVisible = false)} class="absolute top-3 right-3" />
      <p class="mb-4 text-center">SELECT THEME</p>
      <div class="flex gap-4">
        {THEMES.map(({ name }) => (
          <Card key={name} theme={name} onClick$={() => (themeContext.value = name)} />
        ))}
      </div>
    </div>
  );
});
