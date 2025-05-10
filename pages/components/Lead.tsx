import React from 'react';
import styles from '../../styles/Lead.module.scss';

const Lead = () => {
  return (
    <div className={styles.leadContainer}>
      <h2 className={styles.leadTitle}>
        Runofestivaali saariston sylissä!
        <span className={styles.dateAndPlace}>
          12. - 14.6.2025
        </span>
      </h2>
    </div>
  );
};

export default Lead;
