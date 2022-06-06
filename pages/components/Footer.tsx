import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Footer.module.scss';

export const Footer = () => {
  return (
    <footer>
      <div className={styles.mobileMiddle}>
        <Link href='/#nav-bar'>
          <img src='small-logo.png' alt='small logo' />
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          Livonsaari & Palva & Velkuanmaa
          <br />
          Naantalin saaristo
          <br />
        </div>
        <div className={styles.middle}>
          <Link href='/#nav-bar'>
            <img src='small-logo.png' alt='small logo' />
          </Link>
        </div>
        <div className={styles.right}>
          Katariina Vuorinen <br />
          <a className='generic-link' href='mailto:runosaari@gmail.com'>
            runosaari@gmail.com
          </a>
        </div>
      </div>
      <div>
        <a
          className='generic-link'
          href='https://github.com/codevictory/runosaari.net'
        >
          lähdekoodi
        </a>
        by codevictory
      </div>
    </footer>
  );
};
