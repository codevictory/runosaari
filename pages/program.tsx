import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import shared from '../styles/Shared.module.scss';
import styles from '../styles/Program.module.scss';
import { CSSTransition } from 'react-transition-group';
import { BiChevronDown, BiChevronLeft } from 'react-icons/bi';

interface DayToggles {
  wed: boolean;
  thu: boolean;
  fri: boolean;
  sat: boolean;
}

const Program = () => {
  return (
    <section className={shared.page}>
      <h1 id='program-start'>Ohjelma</h1>
      <p className={styles.programTimeAndPlace}>
        Torstai 12.6. klo 18-21 <span className={styles.locationName}>Palva</span>
      </p>
      <h2 className={styles.placeTitle}>
        <a href='https://www.cafelaituri.fi'>
          Cafe Laituri
        </a>
      </h2>
      <ul className={styles.performerList}>
        <li>Pegasos</li>
        <li>Henriikka Tavi ja Jaakko Martikainen</li>
        <li>Peter Mickwitz</li>
        <li>Milagros Corcuera</li>
      </ul>
      <hr className={styles.programHr} />

      <p className={styles.programTimeAndPlace}>
        Perjantai 13.6. klo 18-21 <span className={styles.locationName}>Velkuanmaa</span>
      </p>
      <h2 className={styles.placeTitle}>
        <a href='https://www.vaihela.fi/'>
          <span className={styles.placeName}>Saaristohotelli Vaihela</span>
        </a>
      </h2>
      <ul className={styles.performerList}>
        <li>Kauko Röyhkä & Severi Pyysalo</li>
        <li>Juha Kulmala + Positroninen Runo-orkesteri!</li>
        <li>Katariina Vuorinen & Pekka Tolonen</li>
      </ul>
      <hr className={styles.programHr} />

      <p className={styles.programTimeAndPlace}>
        Lauantai 14.6. klo 15-20 <span className={styles.locationName}>Teersalo</span>
      </p>
      <h2 className={styles.placeTitle}>
        <a href='https://prosinervo.com/'>
          <span className={styles.placeName}>Sinervon talo</span>
        </a>
      </h2>
      <ul className={styles.performerList}>
        <li>Santtu Puukka</li>
        <li>Maaria Päivinen</li>
        <li>Silja Järventausta</li>
        <li>Tiina Lehikoinen</li>
        <li>Katariina Vuorinen</li>
        <li>Panu Hämeenaho</li>
        <li>Uhrijuhla</li>
        <li>Djangomania</li>
        <li>Milagros Corcuera</li>
      </ul>

      <hr className={styles.programHr} />

    </section>
  );
};

export default Program;
