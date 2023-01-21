import { component$, useStyles$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";

import { RouterHead } from "./components/router-head/router-head";
import ThemeProvider from "./components/theme/provider";
import globalStyles from "./global.css?inline";
import { useFade } from "./hooks/fade";

import "@fontsource/mochiy-pop-p-one";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  useFade();

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body class="overflow-x-hidden">
        <ThemeProvider>
          <div class="relative z-10">
            <RouterOutlet />
          </div>
          <ServiceWorkerRegister />
        </ThemeProvider>
      </body>
    </QwikCityProvider>
  );
});
