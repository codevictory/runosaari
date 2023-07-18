import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import shared from '../styles/Shared.module.scss';
import styles from '../styles/Program.module.scss';

interface DayToggles {
  wed: boolean;
  thu: boolean;
  fri: boolean;
  sat: boolean;
}

const Program = () => {
  const [dayToggles, setDayToggles] = useState<DayToggles>({
    wed: false,
    thu: false,
    fri: false,
    sat: false,
  });

  const toggleDayDesc = (day: keyof DayToggles) => {
    let updated = { ...dayToggles };

    updated[day] = !updated[day];

    setDayToggles(updated);
  };

  return (
    <section className={shared.page}>
      <h1 id='program-start'>Ohjelma</h1>

      {/* Torstai */}
      <h2 className={styles.programTitle}>
        <span>20.7.</span>
        <a href='https://www.cafelaituri.fi'>
          <span className={styles.placeName}>Laituri</span>
          <FiExternalLink fontSize={20} />
        </a>
        <span>to</span>
      </h2>
      <span className={styles.locationAddress}>
        Café Laituri, Voiponlahdentie 37, Palva
      </span>
      <h3 className={styles.timeSpan}>17:00 - 19:00</h3>
      <ul className={styles.performerList}>
        <li>Rauhatäti</li>
        <li>Otso Helasvuo</li>
        <li>Katariina Vuorinen</li>
        <li>Rosanna Fellman</li>
      </ul>

      {/* Perjantai */}
      <h2 className={styles.programTitle}>
        <span>21.7.</span>
        <a href='https://vaihela.fi/'>
          <span className={styles.placeName}>Vaihela</span>
          <FiExternalLink fontSize={20} />
        </a>
        <span>pe</span>
      </h2>
      <span className={styles.locationAddress}>
        Saaristohotelli Vaihela, Velkuanmaantie 168, Velkuanmaa
      </span>
      <h3 className={styles.timeSpan}>18:00 - 21:00</h3>
      <ul className={styles.performerList}>
        <li>Ilmi Lupiini</li>
        <li>Kasper Salonen</li>
        <li>Juha Kulmala + Positroninen runo-orkesteri</li>
      </ul>

      {/* Lauantai */}
      <h2 className={styles.programTitle}>
        <span>22.7.</span>
        <a href='https://www.prosinervo.com/'>
          <span className={styles.placeName}>Sinervo</span>
          <FiExternalLink fontSize={20} />
        </a>
        <span>la</span>
      </h2>
      <span className={styles.locationAddress} style={{ marginBottom: 50 }}>
        Sinervon talo, Sauniementie 5, Teersalo
      </span>
      <h3 className={styles.timeSpan}>14:00 - 20:00</h3>
      <ul className={styles.performerList}>
        <li className={styles.performerWithTime}>
          <span className={styles.programTime}>14:00</span>
          <span className={styles.programPerformer}>Kinnunen&Kinnunen</span>
        </li>
        <li className={styles.performerWithTime}>
          <span className={styles.programTime}>14:30</span>
          <span className={styles.programPerformer}>Katja Meriluoto</span>
        </li>
        <li className={styles.performerWithTime}>
          <span className={styles.programTime}>14:50</span>
          <span className={styles.programPerformer}>Marianna Kurtto</span>
        </li>
        <li className={styles.performerWithTime}>
          <span className={styles.programTime}>15:10</span>
          <span className={styles.programPerformer}>
            Esa Hirvonen & Masi Hukari
          </span>
        </li>
        <li className={styles.programBreak}>Tauko</li>
        <li className={styles.performerWithTime}>
          <span className={styles.programTime}>16:00</span>
          <span className={styles.programPerformer}>Veera Sylvius</span>
        </li>
        <li className={styles.performerWithTime}>
          <span className={styles.programTime}>16:20</span>
          <span className={styles.programPerformer}>Suvi Valli</span>
        </li>
        <li className={styles.performerWithTime}>
          <span className={styles.programTime}>16:40</span>
          <span className={styles.programPerformer}>
            Sergio Augusto Sánchez
          </span>
        </li>
        <li className={styles.performerWithTime}>
          <span className={styles.programTime}>17:00</span>
          <span className={styles.programPerformer}>Blues Ones</span>
        </li>
        <li className={styles.programBreak}>Tauko</li>
        <li className={styles.performerWithTime}>
          <span className={styles.programTime}>18:00</span>
          <span className={styles.programPerformer}>Sirpa Kyyrönen</span>
        </li>
        <li className={styles.performerWithTime}>
          <span className={styles.programTime}>18:20</span>
          <span className={styles.programPerformer}>Tomi Kontio</span>
        </li>
        <li className={styles.performerWithTime}>
          <span className={styles.programTime}>18:40</span>
          <span className={styles.programPerformer}>
            Katariina Vuorinen & Kaisa Mäensivu
          </span>
        </li>
        <li className={styles.programBreak}>Tauko</li>
        <li className={styles.performerWithTime}>
          <span className={styles.programTime}>19:30</span>
          <span className={styles.programPerformer}>Signe</span>
        </li>
      </ul>
    </section>
  );
};

export default Program;
