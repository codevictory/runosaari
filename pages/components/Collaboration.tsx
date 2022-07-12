import React from 'react';
import styles from '../../styles/Collaboration.module.scss';

const Collaboration = () => {
  return (
    <>
      <h1>Yhteistyössä</h1>
      <div className={styles.collabContainer}>
        <span>Varsinais-Suomen rahasto</span>
        <span>Runoviikko ry</span>
        <span>Kirjan talo – Bokens hus ry</span>
        <span>Pro Sinervo ry</span>
        <span>Velkuan saaristolaisyhdistys ry</span>
        <span>Aviador Kustannus</span>
        <span>Enostone Kustannus</span>
        <span>Cafe Laituri</span>
        <span>Saaristohotelli Vaihela</span>
        <span>Artbox Irja</span>
      </div>
    </>
  );
};

export default Collaboration;
