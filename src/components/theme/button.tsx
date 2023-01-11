import type { PropFunction } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

interface Props {
  onClick$: PropFunction<() => void>;
}

export default component$((props: Props) => {
  return (
    <button onClick$={props.onClick$} class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 hover:bg-slate-200">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"></path>
      </svg>
    </button>
  );
});
