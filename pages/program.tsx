import React, { useState } from 'react';
import { BiChevronDown, BiChevronLeft } from 'react-icons/bi';
import styles from '../styles/Program.module.scss';
import shared from '../styles/Shared.module.scss';
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link';

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
      <i className={shared.followNote}>Lisätietoja tulossa myöhemmin...</i>
    </section>
  );
};

export default Program;
