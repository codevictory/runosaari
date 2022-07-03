import React, { useEffect, useState } from 'react';
import styles from '../../styles/Logo.module.scss';

export const Logo = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);

  return (
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
  );
};
