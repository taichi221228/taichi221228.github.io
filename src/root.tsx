import { component$, useStyles$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { THEMES } from "./constants/theme";

import globalStyles from "./global.css?inline";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
        <style>{`
        body {
          --tw-color-primary: ${THEMES[0].colors.primary};
          --tw-color-primary-offset: ${THEMES[0].colors.primaryOffset};
          --tw-color-secondary: ${THEMES[0].colors.secondary};
          --tw-color-secondary-offset: ${THEMES[0].colors.secondaryOffset};
          --tw-color-tertiary: ${THEMES[0].colors.tertiary};
          --tw-color-tertiary-offset: ${THEMES[0].colors.tertiaryOffset};
          --tw-color-quaternary: ${THEMES[0].colors.quaternary};
          --tw-color-quinary: ${THEMES[0].colors.quinary};
        }

        ${THEMES.map(
          ({ name, colors }) => `
            .theme-${name} {
              --tw-color-primary: ${colors.primary};
              --tw-color-primary-offset: ${colors.primaryOffset};
              --tw-color-secondary: ${colors.secondary};
              --tw-color-secondary-offset: ${colors.secondaryOffset};
              --tw-color-tertiary: ${colors.tertiary};
              --tw-color-tertiary-offset: ${colors.tertiaryOffset};
              --tw-color-quaternary: ${colors.quaternary};
              --tw-color-quinary: ${colors.quinary};
            }
          `
        ).join("")}
      `}</style>
      </body>
    </QwikCityProvider>
  );
});
