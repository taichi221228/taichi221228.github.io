import { component$, useSignal } from "@builder.io/qwik";
import Icon from "../icon/icon";
import ThemeButton from "../theme/button";
import ThemeTrack from "../theme/track";

export default component$(() => {
  const isThemeTrackVisible = useSignal(false);

  return (
    <>
      <ThemeTrack isVisible={isThemeTrackVisible.value} />
      <header class="py-8">
        <div class="mx-auto flex w-11/12 max-w-7xl justify-between">
          <div>
            <a class="flex items-center gap-2 hover:text-rose-600" href="https://www.github.com/taichi221228" target="_blank">
              <Icon />
              <p>Taichi Fukuda</p>
            </a>
          </div>

          <ThemeButton
            onClick$={() => {
              isThemeTrackVisible.value = !isThemeTrackVisible.value;
            }}
          />
        </div>
      </header>
    </>
  );
});
