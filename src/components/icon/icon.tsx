import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div>
      <img src="/icon.jpg" alt="profile icon" class="rounded-full" width={48} height={48} />
    </div>
  );
});
