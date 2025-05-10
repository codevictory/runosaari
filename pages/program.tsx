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
      {/* <h1 id='program-start'>Ohjelma</h1> */}
      <p className={styles.programTimeAndPlace}>
        Torstai 12.6. klo 18-21 <span className={styles.locationName}>Palva</span>
      </p>
      <h2 className={styles.placeTitle}>
        <a href='https://www.cafelaituri.fi'>
          Cafe Laituri
        </a>
      </h2>
      <p className={styles.programTimeAndPlace}>
        Perjantai 13.6. klo 18-21 <span className={styles.locationName}>Velkuanmaa</span>
      </p>
      <h2 className={styles.placeTitle}>
        <a href='https://www.cafelaituri.fi'>
          <span className={styles.placeName}>Saaristohotelli Vaihela</span>
        </a>
      </h2>
      <p className={styles.programTimeAndPlace}>
        Lauantai 14.6. klo 15-20 <span className={styles.locationName}>Teersalo</span>
      </p>
      <h2 className={styles.placeTitle}>
        <a href='https://www.cafelaituri.fi'>
          <span className={styles.placeName}>Sinervon talo</span>
        </a>
      </h2>

      {/* <ul className={styles.performerList}>
        <li>Äyräs</li>
        <li>Hanna Storm</li>
        <li>Juha Rautio</li>
        <li>Katariina Vuorinen<br />& Ilkka Turta</li>
      </ul>
      <i>Ohjelma täydentyy...</i>
      <h2 className={styles.programTitle}>
        <span>14.6.</span>
        <a href='https://www.cafelaituri.fi'>
          <span className={styles.placeName}>Laituri</span>
          <FiExternalLink fontSize={20} />
        </a>
        <span>pe</span>
      </h2>
      <span className={styles.locationAddress}>
        Saaristohotelli Vaihela, Velkuanmaantie 168, Velkuanmaa
      </span>
      <span className={styles.timeSpan}>18:00 - 21:00</span>

      <ul className={styles.performerList}>
        <li>Juha Kulmala + Positroninen runo-orkesteri </li>
        <li>Terhi Forssén</li>
        <li>Katariina Vuorinen & Björn</li>
        <li>Risto Oikarinen</li>
        <li>Emmi Ketonen</li>
      </ul>
      <i>Ohjelma täydentyy...</i>
      <hr className={styles.programHr} />

      <i className={shared.moreInfoLaterText}>Lisätietoja tulossa myöhemmin...</i> */}
    </section>
  );
};

export default Program;
