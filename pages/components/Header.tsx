import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Header.module.scss';

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);

  return (
    <>
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
      <section className={styles.logoContainer}>
        <div className={styles.logo} id='logo-start'>
          {isDesktop ? (
            <img
              className={styles.logoImage}
              src='/runosaari-logo.jpg'
              alt='Runosaari logo'
            />
          ) : (
            <img
              className={styles.logoImage}
              src='/runosaari-logo_small.jpg'
              alt='Runosaari logo'
            />
          )}
          <div className={styles.logoCredits}>
            <div>@Sanna Hukkanen</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
