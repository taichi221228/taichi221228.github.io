import { useContext } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

import { ThemeContext } from "./provider";

export default component$(() => {
  const theme = useContext(ThemeContext);

  const size = 24;

  return (
    <button
      aria-label="Toggle theme menu"
      onClick$={() => (theme.isMenuVisible = !theme.isMenuVisible)}
      class={`${
        theme.isDarkType ? "pointer:hover:brightness-150" : "pointer:hover:brightness-95"
      } bg-primary-offset flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-hidden="true"
        class="fill-secondary h-6 w-6"
      >
        <path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z" />
      </svg>
    </button>
  );
});
