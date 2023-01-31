import { useClientEffect$ } from '@builder.io/qwik';

import { FADE_LOCATOR } from '~/constants/fade';

export function useFade() {
  useClientEffect$(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        const element = target as HTMLElement;
        if (isIntersecting) {
          element.classList.remove('opacity-0');
          observer.unobserve(element);
        }
      });
    });
    const elements = document.getElementsByClassName(FADE_LOCATOR);
    Array.from(elements).forEach((element) => observer.observe(element));
  });
}
