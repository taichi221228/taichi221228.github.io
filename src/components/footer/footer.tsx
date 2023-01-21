import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer data-fade class="border-quinary mt-20 border-t-2 py-6 text-center md:mt-24">
      <div class="wrapper">
        Made with{" "}
        <a href="https://www.github.com/taichi221228/" target="_blank">
          ❤️
        </a>{" "}
        and{" "}
        <a href="https://www.builder.io/" target="_blank" class="text-[#55B3F0] transition-colors duration-300 hover:text-[#A580ED]">
          qwik
        </a>
      </div>
    </footer>
  );
});
