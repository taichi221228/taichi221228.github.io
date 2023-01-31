import { component$ } from '@builder.io/qwik';

import Icon from '../icon/icon';
import ThemeButton from '../theme/button';
import ThemeMenu from '../theme/menu';

import { FADE_CLASS } from '~/constants/fade';

export default component$(() => {
  return (
    <>
      <ThemeMenu />
      <header class={`${FADE_CLASS} wrapper py-6 md:py-8`}>
        <div class="flex justify-between">
          <div>
            <a class="flex items-center gap-2 transition-colors duration-300 hover:text-tertiary" href="https://www.github.com/taichi221228" target="_blank">
              <Icon />
              <p>Taichi Fukuda</p>
            </a>
          </div>

          <ThemeButton />
        </div>
      </header>
    </>
  );
});
