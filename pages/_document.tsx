import { Html, Head, Main, NextScript } from "next/document";
import { FavIcons } from "@volvo-cars/favicons/react";
import { links } from "@volvo-cars/css/links";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <FavIcons />
        {links().map((linkProps, index) => (
          <link key={index} {...linkProps} />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
