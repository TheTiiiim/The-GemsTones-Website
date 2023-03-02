import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/syq1pzk.css" />
        <meta name="description" content="The GemsTones is a retro-rock band with a love for all things nostalgia. Bringing back the biggest hits of the 50's." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico"></link>
      </Head>
      <body>
        <NextScript />
      </body>
    </Html>
  )
}