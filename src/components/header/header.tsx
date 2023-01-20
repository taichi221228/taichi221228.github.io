import { component$ } from "@builder.io/qwik";

import Icon from "../icon/icon";
import ThemeButton from "../theme/button";
import ThemeMenu from "../theme/menu";

export default component$(() => {
  return (
    <>
      <ThemeMenu />
      <header data-fade class="py-8">
        <div class="mx-auto flex w-11/12 max-w-7xl justify-between">
          <div>
            <a class="hover:text-tertiary flex items-center gap-2 transition-colors duration-300" href="https://www.github.com/taichi221228" target="_blank">
              <Icon />
              <p>Taichi Fukuda</p>
            </a>
          </div>

          <ThemeButton />
        </div>
      </header>
    </>
  );
});
