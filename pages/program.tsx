import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import shared from '../styles/Shared.module.scss';

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

      <h2>
        20.7. Cafe Laituri{' '}
        <a href='https://www.cafelaituri.fi'>
          <FiExternalLink fontSize={20} />
        </a>
      </h2>
      <p>Voiponlahdentie 37, Palva</p>
      <h2>
        21.7. Vaihela{' '}
        <a href='https://vaihela.fi/'>
          <FiExternalLink fontSize={20} />
        </a>
      </h2>
      <p> Velkuanmaantie 168, Palva</p>
      <h2>
        22.7. Sinervon talo{' '}
        <a href='https://www.prosinervo.com/'>
          <FiExternalLink fontSize={20} />
        </a>
      </h2>
      <p style={{ marginBottom: 50 }}>Sauniementie 5, Teersalo</p>
      <i className={shared.followNote}>Ohjelmaa päivitetään...</i>
    </section>
  );
};

export default Program;
