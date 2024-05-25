import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import shared from '../styles/Shared.module.scss';
import styles from '../styles/Program.module.scss';
import { CSSTransition } from 'react-transition-group';
import { BiChevronDown, BiChevronLeft } from 'react-icons/bi';
import Performer from '../types/Performer';
import Image from 'next/image';
import Link from 'next/link';

interface DayToggles {
  wed: boolean;
  thu: boolean;
  fri: boolean;
  sat: boolean;
}

const firstPerformers: Performer[] = [];
const secondPerformers: Performer[] = [];

const Program = () => {
  const [firstPerformers] = useState([
    { id: "ayras", name: "Äyräs", paragraphs: [] },
    { id: "hanna_storm", name: "Hanna Storm", paragraphs: [] },
    { id: "juha_rautio", name: "Juha Rautio", paragraphs: [] },
    { id: "katariina_vuorinen", name: "Katariina Vuorinen & Ilkka Turta", paragraphs: [] }]);

  const [secondPerformers] = useState([
    { id: "juha_kulmala", name: "Juha Kulmala + Positroninen runo-orkesteri", paragraphs: [] },
    { id: "terhi_forssen", name: "Terhi Forssén", paragraphs: [] },
    { id: "katariina_vuorinen", name: "Katariina Vuorinen & Björn", paragraphs: [] }]);

  return (
    <section className={shared.page}>
      <h1 id='program-start'>Ohjelma</h1>

      <div className={styles.eventContainer}>
        {/* Vaihela */}
        <div className={styles.event}>
          <div className={styles.programTitle}>
            <span className={styles.timeSpan}>pe</span>
            <span className={styles.timeSpan}>7.6.</span>
            <span className={styles.timeSpan}>18 - 21</span>
          </div>
          <h2>
            <a href='https://www.cafelaituri.fi'>
              <span className={styles.placeName}>Vaihela</span>
              <FiExternalLink fontSize={20} />
            </a>
          </h2>

          <div className={styles.performerList}>
            {firstPerformers.map((p) => (
              <a href={'/esiintyjat/' + p.id} className={styles.performerCard}>
                <Image
                  className={styles.performerImage}
                  src={'/performers/2024/' + p.id + '.jpg'}
                  width={80}
                  height={80}
                  layout='fixed'
                  alt={p.name}
                />
                <span className={styles.performerName}>{p.name}</span>
              </a>
            ))}
          </div>
          <br />
          <br />
          <i>Ohjelma täydentyy...</i>
        </div>

        {/* Laituri */}
        <div className={styles.event}>
          <div className={styles.programTitle}>
            <span className={styles.timeSpan}>pe</span>
            <span className={styles.timeSpan}>14.6.</span>
            <span className={styles.timeSpan}>18 - 21</span>
          </div>
          <h2>
            <a href='https://www.cafelaituri.fi'>
              <span className={styles.placeName}>Laituri</span>
              <FiExternalLink fontSize={20} />
            </a>
          </h2>
          <div className={styles.performerList}>
            {secondPerformers.map((p) => (
              <a href={'/esiintyjat/' + p.id} className={styles.performerCard}>
                <Image
                  className={styles.performerImage}
                  src={'/performers/2024/' + p.id + '.jpg'}
                  width={80}
                  height={80}
                  layout='fixed'
                  alt={p.name}
                />
                <span className={styles.performerName}>{p.name}</span>
              </a>
            ))}
          </div>
          <br />
          <br />
          <i>Ohjelma täydentyy...</i>
        </div>
      </div>
      <Link href="/arkisto">
        <a>
          <span className={styles.archiveLinkText}>Aiempien vuosien esiintyjiä</span>
          <FiExternalLink fontSize={20} />
        </a>
      </Link>
    </section >
  );
};

export default Program;
