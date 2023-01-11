import { component$ } from "@builder.io/qwik";

interface Props {
  isVisible: boolean;
}

export default component$((props: Props) => {
  return (
    <div class={`overflow-hidden bg-slate-100 transition-all ${props.isVisible ? "h-auto py-6" : "h-0"}`}>
      <p class="text-center">SELECT THEME</p>
    </div>
  );
});
