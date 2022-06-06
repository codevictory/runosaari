import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Header.module.scss';

export const Header = () => {
  return (
    <header>
      <nav className={styles.mainNavBar}>
        <Link href='/'>Etusivu</Link>
        <Link href='/program'>Ohjelma</Link>
        <Link href='/performers'>Esiintyjät</Link>
        <Link href='/info'>Info</Link>
        <Link href='/safety'>Turvallisuus</Link>
        <Link href='/archive'>Arkisto</Link>
      </nav>
      <h1 className={styles.mobileMainTitle}>
        <Link href='/'>Runosaari 2022</Link>
      </h1>
      <nav className={styles.mobileMainNavBar} id='nav-bar'>
        <Link href='/#logo-start'>Etusivu</Link>
        <Link href='/program#program-start'>Ohjelma</Link>
        <Link href='/performers#performers-start'>Esiintyjät</Link>
        <Link href='/info#contact-start'>Info</Link>
        <Link href='/safety#safety-start'>Turvallisuus</Link>
        <Link href='/archive#archive-start'>Arkisto</Link>
      </nav>
    </header>
  );
};
