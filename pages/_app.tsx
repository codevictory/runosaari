import '../styles/globals.scss';
import '../styles/transitions.scss';
import type { AppProps } from 'next/app';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Logo from './components/Logo';
import Head from 'next/head';

function Runosaari({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Runosaari</title>
      </Head>
      <NavBar />
      <Logo />
      <main>
        <Component {...pageProps} />
      </main>
      <NavBar />
      <Footer />
    </>
  );
}

export default Runosaari;
