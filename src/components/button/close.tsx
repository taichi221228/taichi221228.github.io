import { component$, useContext } from "@builder.io/qwik";

import { ThemeContext } from "../theme/provider";

import type { PropFunction } from "@builder.io/qwik";

interface Props {
  onClick$: PropFunction<() => any>;
  class?: string;
}

export default component$((props: Props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <button
      onClick$={props.onClick$}
      class={`hover:bg-primary-offset h-10 w-10 rounded-full transition-all duration-300 ${
        themeContext.isDarkType ? "hover:brightness-150" : "hover:brightness-95"
      } ${props.class}`}
    >
      <span class="bg-secondary absolute inset-0 m-auto h-0.5 w-5 rotate-45" />
      <span class="bg-secondary absolute inset-0 m-auto h-0.5 w-5 -rotate-45" />
    </button>
  );
});
