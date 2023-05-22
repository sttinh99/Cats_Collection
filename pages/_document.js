import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          as="font"
          href="/fonts/QuattrocentoSans-Bold.ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/QuattrocentoSans-BoldItalic.ttf"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/QuattrocentoSans-Regular.ttf"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
