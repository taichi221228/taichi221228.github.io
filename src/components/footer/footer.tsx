import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="border-t-2 py-6 text-center">
      Made with{" "}
      <a href="https://www.github.com/taichi221228/" target="_blank">
        ❤️
      </a>{" "}
      and{" "}
      <a href="https://www.builder.io/" target="_blank" class="text-sky-500 hover:text-violet-500">
        qwik
      </a>
    </footer>
  );
});
