import { useContext } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

import { ThemeContext } from './provider';
import type { Theme } from '~/types/theme';

import type { PropFunction } from '@builder.io/qwik';

type Props = {
  onClick$: PropFunction<() => any>;
} & Pick<Theme, 'id' | 'name'>;

export default component$((props: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      data-theme={props.id}
      tabIndex={theme.isMenuVisible ? 0 : -1}
      onClick$={props.onClick$}
      onKeyDown$={(event) => event.key === 'Enter' && props.onClick$()}
      class={`${
        theme.id === props.id ? 'border-tertiary' : `border-transparent hover:shadow pointer:cursor-pointer pointer:hover:scale-110`
      } rounded-xl border-2 bg-primary p-3 transition-transform duration-300`}
    >
      <p class="mb-2 text-center text-xs text-secondary">{props.name}</p>
      <div class="flex">
        <div class="h-6 w-6 rounded-full bg-tertiary shadow-[0_0_0_2px] shadow-quinary" />
        <div class="h-6 w-6 rounded-full bg-quaternary shadow-[0_0_0_2px] shadow-quinary" />
        <div class="h-6 w-6 rounded-full bg-primary shadow-[0_0_0_2px] shadow-quinary" />
        <div class="h-6 w-6 rounded-full bg-secondary-offset shadow-[0_0_0_2px] shadow-quinary" />
        <div class="h-6 w-6 rounded-full bg-secondary shadow-[0_0_0_2px] shadow-quinary" />
      </div>
    </div>
  );
});
