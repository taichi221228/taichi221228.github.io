import { component$ } from "@builder.io/qwik";

import Hero from "~/components/hero/hero";
import Works from "~/components/works/works";

import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="mt-12 md:mt-40">
      <Hero />
      <div class="mt-20 md:mt-44">
        <Works />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "title",
  meta: [
    {
      name: "description",
      content: "description",
    },
  ],
};
