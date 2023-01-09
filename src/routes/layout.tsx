import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <div class="mx-auto max-w-7xl">
            <Slot />
          </div>
        </section>
      </main>
      <footer>
        Made with{" "}
        <a href="https://www.github.com/taichi221228" target="_blank">
          ❤️
        </a>{" "}
        and{" "}
        <a href="https://www.builder.io/" target="_blank">
          qwik
        </a>
      </footer>
    </>
  );
});
