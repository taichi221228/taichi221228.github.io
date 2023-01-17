import { component$, Slot } from "@builder.io/qwik";

import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <div class="mx-auto max-w-7xl">
          <Slot />
        </div>
      </main>
      <Footer />
    </>
  );
});
