import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer data-fade="3" class="border-quinary border-t-2 py-6 text-center">
      Made with{" "}
      <a href="https://www.github.com/taichi221228/" target="_blank">
        ❤️
      </a>{" "}
      and{" "}
      <a href="https://www.builder.io/" target="_blank" class="text-[#55B3F0] transition-colors duration-300 hover:text-[#A580ED]">
        qwik
      </a>
    </footer>
  );
});
