import React from 'react';
import styles from '../../styles/Collaboration.module.scss';

const Collaboration = () => {
  return (
    <>
      <h1>Yhteistyössä</h1>
      <div className={styles.collabContainer}>
        <span>Naantalin kaupunki</span>
        <div className={styles.collabLogoRow}>
          <img
            className={styles.collabLogo}
            src='/collaborators/kirjan_talo.png'
            alt='kirjan talo logo'
          />
        </div>
        <span>Pro Sinervo ry</span>
        <span>Velkuan saaristolaisyhdistys ry</span>
        <span>Aviador Kustannus</span>
        <span>Enostone Kustannus</span>
        <span>Cafe Laituri</span>
        <span>Saaristohotelli Vaihela</span>
      </div>
    </>
  );
};

export default Collaboration;
