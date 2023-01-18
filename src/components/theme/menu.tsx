import { useContext } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

import CloseButton from "../button/close";

import Card from "./card";
import { ThemeContext } from "./provider";
import { THEMES } from "~/constants/theme";

export default component$(() => {
  const themeContext = useContext(ThemeContext);

  return (
    <div class={`bg-primary-offset relative overflow-hidden px-6 py-8 transition-all ${themeContext.isMenuVisible || "-mt-48"}`}>
      <CloseButton onClick$={() => (themeContext.isMenuVisible = false)} class="absolute top-3 right-3" />
      <p class="mb-4 text-center">SELECT THEME</p>
      <div class="-m-8 flex gap-4 overflow-x-auto p-8">
        {THEMES.map(({ id, name }) => (
          <Card key={id} id={id} name={name} onClick$={() => (themeContext.id = id)} />
        ))}
      </div>
    </div>
  );
});
