import { useContext } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

import { ThemeContext } from "./provider";
import type { Theme } from "~/types/theme";

import type { PropFunction } from "@builder.io/qwik";

interface Props {
  theme: Theme["name"];
  onClick$: PropFunction<() => any>;
}

export default component$((props: Props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      onClick$={props.onClick$}
      class={`bg-primary rounded-xl p-3 theme-${props.theme} ${
        themeContext.value === props.theme ? "border-tertiary border-2" : "cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-xl"
      }`}
    >
      <p class="text-secondary mb-2 text-center">
        {props.theme.charAt(0).toUpperCase()}
        {props.theme.slice(1)}
      </p>
      <div class="flex">
        <div class="bg-tertiary shadow-quinary h-6 w-6 rounded-full shadow-[0_0_0_2px]" />
        <div class="bg-quaternary shadow-quinary h-6 w-6 rounded-full shadow-[0_0_0_2px]" />
        <div class="bg-primary shadow-quinary h-6 w-6 rounded-full shadow-[0_0_0_2px]" />
        <div class="bg-secondary-offset shadow-quinary h-6 w-6 rounded-full shadow-[0_0_0_2px]" />
        <div class="bg-secondary shadow-quinary h-6 w-6 rounded-full shadow-[0_0_0_2px]" />
      </div>
    </div>
  );
});
