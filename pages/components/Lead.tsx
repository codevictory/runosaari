import React from 'react';
import styles from '../../styles/Lead.module.scss';

const Lead = () => {
  return (
    <div className={styles.leadContainer}>
      <h2 className={styles.leadTitle}>
        Nähdään taas ensi kesänä 2025!
        <span className={styles.dateAndPlace}>
          12. - 14.6.
        </span>
      </h2>
      {/* <p className={styles.leadText}>
        Runosaari on poikkitaiteellinen runofestivaali Livonsaaren, Palvan ja
        Velkuanmaan saarissa. Festivaali järjestetään kolmatta kertaa
        13.—15.6.2024.
      </p>
      <p className={styles.leadText}>
        Tapahtuma kutsuu Naantalin saaristoon joukon valovoimaisia ja
        monialaisia taiteen tekijöitä. Ohjelmassa runous yhdistyy elävään
        musiikkiin ja erilaisiin taiteellisiin työpajoihin.
      </p>
      <p className={styles.leadText}>
        Lumi ja jää vähenee, vedenpinta nousee ja pandemian aallot viistävät
        meidänkin rantojamme. Peurojen kurittaman monimuotoisuuden keskelle
        nousee Runosaari ihmettelemään ihmisen ja muun luonnon olemista taiteen
        ja ilmaisun keinoin.
      </p> */}
    </div>
  );
};

export default Lead;
