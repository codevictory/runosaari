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
          <script defer src="https://diamond-rabbit.pikapod.net/script.js" data-website-id="2778daae-4fd3-45c5-babe-9b9b988a75d4"></script>
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
