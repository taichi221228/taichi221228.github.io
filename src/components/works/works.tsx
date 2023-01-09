import { component$ } from "@builder.io/qwik";
import { itemList } from "./mock";

export default component$(() => {
  return (
    <section>
      <h2 class="mb-9 text-4xl">WORKS</h2>

      <div class="grid grid-cols-4 gap-10">
        {itemList.map((item) => (
          <div class="rounded-lg bg-slate-200 shadow-lg">
            <div class="p-4">
              <h3 class="mb-4 text-3xl">{item.title}</h3>
              <p class="text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
