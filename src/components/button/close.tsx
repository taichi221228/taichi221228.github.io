import { component$, useContext } from "@builder.io/qwik";

import { ThemeContext } from "../theme/provider";

import type { PropFunction } from "@builder.io/qwik";

interface Props {
  onClick$: PropFunction<() => any>;
  class?: string;
}

export default component$((props: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      aria-label="Close"
      tabIndex={theme.isMenuVisible ? 0 : -1}
      onClick$={props.onClick$}
      class={`${theme.isDarkType ? "pointer:hover:brightness-150" : "pointer:hover:brightness-95"} ${
        props.class
      } pointer:hover:bg-primary-offset h-10 w-10 rounded-full transition-all duration-300`}
    >
      <span class="bg-secondary absolute inset-0 m-auto h-0.5 w-5 rotate-45" />
      <span class="bg-secondary absolute inset-0 m-auto h-0.5 w-5 -rotate-45" />
    </button>
  );
});
