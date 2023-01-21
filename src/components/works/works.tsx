import { component$ } from "@builder.io/qwik";

import { items } from "./mock";
import { Atropos } from "~/integrations/react/atropos";

export default component$(() => {
  return (
    <section>
      <h2 data-fade class="mb-9 text-3xl md:text-4xl">
        WORKS
      </h2>

      <div class="grid gap-10 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:gap-6">
        {items.map((item) => (
          <div key={item.id} data-fade>
            <a href={item.link}>
              <Atropos client:visible className="pointer:pointer-events-auto group pointer-events-none" innerClassName="rounded-xl">
                <div class="relative pt-[75%] md:pt-[100%]">
                  <div
                    style={{ backgroundImage: `url(${item.image.src})` }}
                    class="bg-primary-offset absolute inset-0 h-full w-full bg-cover bg-no-repeat p-4"
                    data-atropos-offset="1"
                  >
                    <h3 class="mb-4 text-3xl">{item.title}</h3>
                    <p class="pointer:translate-y-4 pointer:opacity-0 pointer:duration-500 pointer:group-hover:opacity-100 pointer:transition-all pointer:group-hover:translate-y-0 md:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Atropos>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
});
