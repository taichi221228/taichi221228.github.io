import { useContext } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

import { ThemeContext } from "./provider";
import type { Theme } from "~/types/theme";

import type { PropFunction } from "@builder.io/qwik";

type Props = {
  onClick$: PropFunction<() => any>;
} & Pick<Theme, "id" | "name">;

export default component$((props: Props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      onClick$={props.onClick$}
      class={`theme-${props.id} ${
        themeContext.id === props.id ? "border-tertiary border-2" : "cursor-pointer hover:scale-110 hover:shadow-xl"
      } bg-primary rounded-xl p-3 transition-transform duration-300`}
    >
      <p class="text-secondary mb-2 text-center text-xs">{props.name}</p>
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
