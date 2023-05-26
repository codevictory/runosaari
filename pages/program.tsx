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
        <div>20.7.</div>
        <div>
          <span className={styles.placeName}>Laituri</span>
          <a href='https://www.cafelaituri.fi'>
            <FiExternalLink fontSize={20} />
          </a>
        </div>
        <div />
      </h2>
      <p>Café Laituri, Voiponlahdentie 37, Palva</p>
      <h2 className={styles.programTitle}>
        <div>21.7.</div>
        <div>
          <span className={styles.placeName}>Vaihela</span>
          <a href='https://vaihela.fi/'>
            <FiExternalLink fontSize={20} />
          </a>
        </div>
        <div />
      </h2>
      <p>Saaristohotelli Vaihela, Velkuanmaantie 168, Palva</p>
      <h2 className={styles.programTitle}>
        <div>22.7.</div>
        <div>
          <span className={styles.placeName}>Sinervo</span>
          <a href='https://www.prosinervo.com/'>
            <FiExternalLink fontSize={20} />
          </a>
        </div>
        <div />
      </h2>
      <p style={{ marginBottom: 50 }}>
        Sinervon talo, Sauniementie 5, Teersalo
      </p>
      <i className={shared.followNote}>Ohjelmaa päivitetään...</i>
    </section>
  );
};

export default Program;
