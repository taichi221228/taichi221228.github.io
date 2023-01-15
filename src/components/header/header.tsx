import { component$, useSignal } from "@builder.io/qwik";
import Icon from "../icon/icon";
import ThemeButton from "../theme/button";
import ThemeTrack from "../theme/track";

export default component$(() => {
  const isThemeTrackVisibleSignal = useSignal(false);

  return (
    <>
      <ThemeTrack isVisibleSignal={isThemeTrackVisibleSignal} />
      <header class="py-8">
        <div class="mx-auto flex w-11/12 max-w-7xl justify-between">
          <div>
            <a class="hover:text-tertiary flex items-center gap-2 transition-colors duration-300" href="https://www.github.com/taichi221228" target="_blank">
              <Icon />
              <p>Taichi Fukuda</p>
            </a>
          </div>

          <ThemeButton onClick$={() => (isThemeTrackVisibleSignal.value = !isThemeTrackVisibleSignal.value)} />
        </div>
      </header>
    </>
  );
});
