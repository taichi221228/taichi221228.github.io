import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero/hero";
import Works from "~/components/works/works";

export default component$(() => {
  return (
    <>
      <div class="mt-16">
        <Hero />
      </div>
      <div class="mt-32">
        <Works />
      </div>
    </>
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
