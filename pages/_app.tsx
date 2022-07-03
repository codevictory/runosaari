import '../styles/globals.scss';
import '../styles/transitions.scss';
import type { AppProps } from 'next/app';
import Footer from './components/Footer';
import Header from './components/Header';
import { Logo } from './components/Logo';

function Runosaari({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Logo />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default Runosaari;
