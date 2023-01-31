import { component$ } from '@builder.io/qwik';

import { FADE_CLASS } from '~/constants/fade';

export default component$(() => {
  return (
    <section class={FADE_CLASS}>
      <h2 class="text-lg text-tertiary md:text-lg">HELLO, MY NAME IS TAICHI</h2>
      <h1 class="my-7 text-5xl font-bold md:mt-2 md:mb-9 md:text-8xl">I make websites.</h1>
      <p class="text-xl md:text-3xl">I'm a front-end developer for a website development company in Osaka.</p>
    </section>
  );
});
