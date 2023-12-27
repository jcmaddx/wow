import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/_next/static/style.css" />
      </Head>
      <body>
        <script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}