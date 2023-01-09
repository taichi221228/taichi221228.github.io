import { component$ } from "@builder.io/qwik";
import Icon from "../icon/icon";

export default component$(() => {
  return (
    <header class="py-8">
      <div class="mx-auto flex w-11/12 max-w-7xl">
        <div>
          <a class="flex items-center gap-2 hover:text-rose-600" href="https://www.github.com/taichi221228" target="_blank">
            <Icon />
            <p>Taichi Fukuda</p>
          </a>
        </div>
      </div>
    </header>
  );
});
