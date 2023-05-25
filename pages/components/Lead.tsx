import React from 'react';
import styles from '../../styles/Lead.module.scss';

const Lead = () => {
  return (
    <div className={styles.leadContainer}>
      <h2 className={styles.leadTitle}>
        <span className={styles.dateAndPlace}>
          20.-22.7. Naantalin Saaristo
        </span>
        Eksymisretki omaan luontoosi, metsänpeiton suojaan!
      </h2>
      <p className={styles.leadText}>
        Runosaari on poikkitaiteellinen runofestivaali Livonsaaren, Palvan ja
        Velkuanmaan saarissa. Festivaali järjestetään kolmatta kertaa
        20.-22.7.2023.
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
      </p>
    </div>
  );
};

export default Lead;
