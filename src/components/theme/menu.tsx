import { useContext, useSignal } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

import CloseButton from "../button/close";

import Card from "./card";
import { ThemeContext } from "./provider";
import { THEMES } from "~/constants/theme";

export default component$(() => {
  const theme = useContext(ThemeContext);
  const ref = useSignal<HTMLElement>();

  return (
    <div
      ref={ref}
      style={{ height: theme.isMenuVisible ? `${ref.value?.scrollHeight}px` : 0 }}
      class={`bg-primary-offset relative overflow-hidden transition-all`}
    >
      <div class="px-4 py-6 md:px-6 md:py-8">
        <CloseButton onClick$={() => (theme.isMenuVisible = false)} class="absolute top-2 right-2 md:top-3 md:right-3" />
        <p class="mb-4 text-center text-sm md:text-base">SELECT THEME</p>
        <div class="-m-6 flex gap-4 overflow-x-auto p-6 md:-m-8 md:p-8">
          {THEMES.map(({ id, name }) => (
            <Card key={id} id={id} name={name} onClick$={() => (theme.id = id)} />
          ))}
        </div>
      </div>
    </div>
  );
});
