import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
