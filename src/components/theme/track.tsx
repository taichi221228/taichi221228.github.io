import type { Signal } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { THEMES } from "~/constants/theme";
import CloseButton from "../button/close";
import Card from "./card";

interface Props {
  isVisibleSignal: Signal<boolean>;
}

export default component$((props: Props) => {
  return (
    <div class={`bg-primary-offset relative overflow-hidden px-6 py-8 transition-all ${props.isVisibleSignal.value || "-mt-48"}`}>
      <CloseButton onClick$={() => (props.isVisibleSignal.value = false)} class="absolute top-3 right-3" />
      <p class="mb-4 text-center">SELECT THEME</p>
      <div class="flex gap-4">
        {THEMES.map(({ name }) => (
          <Card key={name} name={name} />
        ))}
      </div>
    </div>
  );
});
