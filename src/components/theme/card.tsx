import { component$ } from "@builder.io/qwik";
import type { Theme } from "~/types/theme";

export default component$((props: Pick<Theme, "name">) => {
  return (
    <div class={`bg-primary rounded-xl p-4 theme-${props.name}`}>
      <p class="text-secondary mb-2 text-center">
        {props.name.charAt(0).toUpperCase()}
        {props.name.slice(1)}
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
