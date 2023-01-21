import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="relative h-12 w-12 rounded-full bg-[#C8E9FB]">
      <img src="/icon.jpg" alt="profile icon" class="rounded-full" width={48} height={48} />
    </div>
  );
});
