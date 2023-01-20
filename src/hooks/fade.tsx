import { useClientEffect$, useStyles$ } from "@builder.io/qwik";

export const style = `
  [data-fade] {
    opacity: 0;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
  }
  [data-fade].is-visible {
    opacity: 1;
  }
`;

export function useFade() {
  useStyles$(style);

  useClientEffect$(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;

        const delay = (Number(element.dataset.fade) ?? 1 - 1) * 250;

        setTimeout(() => element.classList.add("is-visible"), delay);
      });
    });

    const elements = document.querySelectorAll("[data-fade]");
    elements.forEach((element) => {
      observer.observe(element);
    });
  });
}
