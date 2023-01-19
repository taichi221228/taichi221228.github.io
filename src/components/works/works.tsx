import { component$ } from "@builder.io/qwik";

import { items } from "./mock";
import { Atropos } from "~/integrations/react/atropos";

export default component$(() => {
  return (
    <section>
      <h2 class="mb-9 text-4xl">WORKS</h2>

      <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {items.map((item) => (
          <Atropos key={item.id} innerClassName="rounded-xl" client:visible>
            <div class="group relative pb-[100%]">
              <a href="#" class="bg-primary-offset absolute inset-0 h-full w-full overflow-hidden shadow">
                <img src={item.image.src} alt={item.image.alt} class="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" />
                <div class="relative p-4" data-atropos-offset="1">
                  <h3 class="mb-4 text-3xl">{item.title}</h3>
                  <p class="translate-y-4 text-lg opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.description}
                  </p>
                </div>
              </a>
            </div>
          </Atropos>
        ))}
      </div>
    </section>
  );
});
