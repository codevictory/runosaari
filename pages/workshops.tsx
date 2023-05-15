import React from 'react';
import shared from '../styles/Shared.module.scss';
import styles from '../styles/Workshops.module.scss';

const Workshops = () => {
  return (
    <section className={shared.page + ' ' + styles.workshopPage}>
      <h1>Työpajat</h1>
      <i>Lisätietoja tulossa myöhemmin...</i>
    </section>
  );
};

export default Workshops;
