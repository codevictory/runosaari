import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Performers.module.scss';
import shared from '../styles/Shared.module.scss';
import Performer from '../types/Performer';
import performers2021 from '../data/performers/2022';
import { BiChevronDown, BiChevronLeft } from 'react-icons/bi';

interface PerformerCard extends Performer {
  id: number;
  showDesc: boolean;
}

const Performers = () => {
  const [performers, setPerformers] = useState<PerformerCard[]>([]);

  useEffect(() => {
    let cards: PerformerCard[] = [];

    performers2021.map((p, index) => {
      let newCard = { ...p, id: index, showDesc: false };
      cards.push(newCard);
    });

    return () => {
      setPerformers(cards);
    };
  }, []);

  const togglePerformerDesc = (id: number) => {
    let updated: PerformerCard[];
    updated = performers.map((p) => {
      if (p.id === id) {
        p.showDesc = !p.showDesc;
      }
      return p;
    });

    setPerformers(updated);

    console.log(performers);
  };

  return (
    <section className={shared.page}>
      <h1>Esiintyjät</h1>
      {performers.map((p) => (
        <>
          <div
            className={styles.performerContainer}
            onClick={() => togglePerformerDesc(p.id)}
          >
            <Image
              className={styles.performerImage}
              src={p.imagePath}
              width={100}
              height={100}
              layout='fixed'
            />
            <div className={styles.performerTextContainer}>
              <div className={styles.performerTitle}>
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
              <hr />
            </div>
          </div>
        </>
      ))}
    </section>
  );
};

export default Performers;
