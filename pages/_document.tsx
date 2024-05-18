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
          <meta property="og:title" content="Runosaari" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.runosaari.net/" />
          <meta property="og:image:url" content="https://www.runosaari.net/runosaari-logo_small.jpg" />
          <meta property="og:description" content="Runosaari 7. ja 14.6. Naantalin saaristo. Vuonna 2024 saarifestivaali tuo runoutta ja musiikkia kahteen kesäkuun perjantaihin" />
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
