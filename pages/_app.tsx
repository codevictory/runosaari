import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Footer from './components/Footer';
import Header from './components/Header';

function Runosaari({ Component, pageProps }: AppProps) {
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

export default Runosaari;
