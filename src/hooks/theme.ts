import { useClientEffect$, useContextProvider, useStore, useStyles$ } from '@builder.io/qwik';

import { ThemeContext } from '~/components/theme/provider';
import { THEMES } from '~/constants/theme';
import { styles } from '~/styles/theme';
import type { ThemeStore } from '~/types/theme';

export function useTheme() {
  useStyles$(styles);

  const store = useStore<ThemeStore>({ ...THEMES[0], isMenuVisible: false });
  useContextProvider(ThemeContext, store);

  useClientEffect$(() => {
    store.id = localStorage.getItem('theme') ?? THEMES[0].id;
  });

  useClientEffect$(({ track }) => {
    const id = track(() => store.id);
    const theme = THEMES.find((theme) => theme.id === id);
    if (!theme) return;
    store.isDarkType = theme.isDarkType;
    const { documentElement } = document;
    localStorage.setItem('theme', id);
    documentElement.dataset.theme = id;
  });

  useClientEffect$(({ track }) => {
    const isMenuVisible = track(() => store.isMenuVisible);
    isMenuVisible && window.scrollTo(0, 0);
  });
}
