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

      <h2 className={styles.programTitle}>
        <span>20.7.</span>
        <a href='https://www.cafelaituri.fi'>
          <span className={styles.placeName}>Laituri</span>
          <FiExternalLink fontSize={20} />
        </a>
        <span>to</span>
      </h2>
      <h3 className={styles.timeSpan}>17:00 - 19:00</h3>
      <ul className={styles.performerList}>
        <li>Rauhatäti</li>
        <li>Otso Helasvuo</li>
        <li>Katariina Vuorinen</li>
        <li>Rosanna Fellman</li>
      </ul>
      <p>Café Laituri, Voiponlahdentie 37, Palva</p>
      <h2 className={styles.programTitle}>
        <span>21.7.</span>
        <a href='https://vaihela.fi/'>
          <span className={styles.placeName}>Vaihela</span>
          <FiExternalLink fontSize={20} />
        </a>
        <span>pe</span>
      </h2>
      <h3 className={styles.timeSpan}>18:00 - 21:00</h3>
      <ul className={styles.performerList}>
        <li>Ilmi Lupiini</li>
        <li>Kasper Salonen</li>
        <li>Juha Kulmala + Positroninen runo-orkesteri</li>
      </ul>
      <p>Saaristohotelli Vaihela, Velkuanmaantie 168, Velkuanmaa</p>
      <h2 className={styles.programTitle}>
        <span>22.7.</span>
        <a href='https://www.prosinervo.com/'>
          <span className={styles.placeName}>Sinervo</span>
          <FiExternalLink fontSize={20} />
        </a>
        <span>la</span>
      </h2>
      <h3 className={styles.timeSpan}>14:00 - 20:00</h3>
      <ul className={styles.performerList}>
        <li>Sirpa Kyyrönen</li>
        <li>Juhani Aaltonen</li>
        <li>Tomi Kontio</li>
        <li>Signe</li>
        <li>Kinnunen&Kinnunen</li>
        <li>Marianna Kurtto</li>
        <li>Esa Hirvonen</li>
        <li>Suvi Valli</li>
        <li>Veera Sylvius</li>
        <li>Katariina Vuorinen</li>
        <li>Katja Meriluoto</li>
        <li>Masi Hukari</li>
        <li>Sergio Augusto Sánchez</li>
        <li>Blues Ones</li>
      </ul>
      <p style={{ marginBottom: 50 }}>
        Sinervon talo, Sauniementie 5, Teersalo
      </p>
    </section>
  );
};

export default Program;
