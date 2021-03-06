// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
        	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
        	<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}