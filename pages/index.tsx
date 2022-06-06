import type { NextPage } from 'next';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <section className={styles.logoContainer}>
        <div className={styles.logo} id='logo-start'>
          <img
            className={styles.logoImage}
            src='runosaari-logo.jpg'
            alt='Runosaari logo'
          />
          <div className={styles.logoCredits}>
            <div>@Sanna Hukkanen</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
