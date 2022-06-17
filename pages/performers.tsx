import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../styles/Performers.module.scss';
import shared from '../styles/Shared.module.scss';
import Performer from '../types/Performer';
import performers2021 from '../data/performers/2021';
import { BiChevronDown, BiChevronLeft } from 'react-icons/bi';

const Performers = () => {
  const [performers, setPerformers] = useState<Performer[]>(performers2021);

  const togglePerformerDesc = (id: number) => {
    let updated: Performer[];
    updated = performers.map((p) => {
      if (p.id === id) {
        p.showDesc = !p.showDesc;
      }
      return p;
    });

    setPerformers(updated);
  };

  return (
    <section className={shared.page}>
      <h1>Esiintyjät</h1>

      <div className={styles.performersContainer}>
        {performers2021.map((p) => (
          <div className={styles.performerCard}>
            <div
              className={styles.performerTitle}
              onClick={() => togglePerformerDesc(p.id)}
            >
              <Image
                className={styles.performerImage}
                src={p.imagePath}
                width={100}
                height={100}
                layout='fixed'
              />
              <h2>{p.name}</h2>
              <button className={shared.openingChevron}>
                {p.showDesc ? (
                  <BiChevronDown size='3rem' />
                ) : (
                  <BiChevronLeft size='3rem' />
                )}
              </button>
            </div>
            {p.showDesc && (
              <>
                {p.paragraphs.map((parag) => (
                  <p className={styles.performerDescription}>
                    {parag.toString()}
                  </p>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Performers;
