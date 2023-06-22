import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css?family=Crimson+Text'
            rel='stylesheet'
          />
          <script
            async
            defer
            data-website-id='3fb34a0a-f153-4941-9fa4-16c6b648b055'
            src='https://umami.avislacus.com/umami.js'
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
