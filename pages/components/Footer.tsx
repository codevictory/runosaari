import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          Livonsaari & Palva & Velkuanmaa
          <br />
          Naantalin saaristo
          <br />
        </div>
        <div className={styles.middle}>
          <Link href='/#nav-bar'>
            <img
              className={styles.logo}
              src='/small-logo.png'
              alt='small logo'
            />
          </Link>
          <div>
            <a
              className={styles.sourceLink}
              href='https://github.com/codevictory/runosaari.net'
            >
              lähdekoodi
            </a>
            by codevictory
          </div>
        </div>
        <div className={styles.right}>
          Katariina Vuorinen <br />
          <a href='mailto:runosaari@gmail.com'>runosaari@gmail.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
