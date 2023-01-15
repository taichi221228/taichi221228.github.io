import type { PropFunction } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

interface Props {
  onClick$: PropFunction<() => any>;
}

export default component$((props: Props) => {
  const size = 24;

  return (
    <button
      onClick$={props.onClick$}
      class="bg-primary-offset duration flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:brightness-95"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-hidden="true" class="h-6 w-6">
        <path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z" />
      </svg>
    </button>
  );
});
