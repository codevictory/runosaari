import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css?family=Crimson+Text&display=optional'
            rel='stylesheet'
          />
          <meta property="og:title" content="Runosaari" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.runosaari.net/" />
          <meta property="og:image:url" content="https://www.runosaari.net/runosaari-logo.jpg" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:width" content="1516" />
          <meta property="og:image:height" content="582" />
          <meta property="og:description" content="Runofestivaali saariston sylissä 12. - 14.6.2025" />
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
