import { useClientEffect$, useStyles$ } from "@builder.io/qwik";

export const style = `
  [data-fade] {
    opacity: 0;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 750ms;
  }
  [data-fade='true'] {
    opacity: 1;
  }
`;

export function useFade() {
  useStyles$(style);

  useClientEffect$(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        const element = target as HTMLElement;
        const isFaded = element.dataset.fade === "true";
        if (isFaded) return;
        element.style.transitionDelay = "250ms";
        element.dataset.fade = "true";
      });
    });

    const elements = document.querySelectorAll("[data-fade]");
    elements.forEach((element) => observer.observe(element));
  });
}
