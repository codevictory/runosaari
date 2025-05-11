import React, { useEffect, useState } from 'react';
import styles from '../../styles/Logo.module.scss';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <section className={styles.logoContainer}>
          <div className={styles.logo} id='logo-start'>
            <picture>
              <source
                srcSet='/runosaari-logo_small.jpg'
                media='(max-width: 600px)'
              />
              <source srcSet='/runosaari-logo.jpg' />
              <img
                src='/runosaari-logo.jpg'
                alt='Runosaari logo'
                className={styles.logoImage}
              />
            </picture>
            <div className={styles.logoCredits}>
              <div>@Sanna Hukkanen</div>
            </div>
          </div>
        </section>
      </a>
    </Link>
  );
};

export default Logo;
