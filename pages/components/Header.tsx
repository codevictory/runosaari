import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <Link href='/'>
          <a className={styles.navBarLink}>Etusivu</a>
        </Link>
        <Link href='/program'>
          <a className={styles.navBarLink}>Ohjelma</a>
        </Link>
        <Link href='/performers'>
          <a className={styles.navBarLink}>Esiintyjät</a>
        </Link>
        <Link href='/info'>
          <a className={styles.navBarLink}>Info</a>
        </Link>
        <Link href='/safety'>
          <a className={styles.navBarLink}>Turvallisuus</a>
        </Link>
        <Link href='/archive'>
          <a className={styles.navBarLink}>Arkisto</a>
        </Link>
      </nav>
    </header>
  );
};
