import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';
import shared from '../styles/Shared.module.scss';
import styles from '../styles/Archive.module.scss';
import PerformersData2021 from '../data/performers/2021';
import PerformersData2022 from '../data/performers/2022';
import PerformersData2023 from '../data/performers/2023';
import PerformersData2024 from '../data/performers/2024';
import Performer from '../types/Performer';
import { BiChevronDown, BiChevronLeft } from 'react-icons/bi';

interface PerformerCard extends Performer {
  showDesc: boolean;
}

const Archive = () => {
  const [performers2021, setPerformers2021] = useState<PerformerCard[]>([]);
  const [performers2022, setPerformers2022] = useState<PerformerCard[]>([]);
  const [performers2023, setPerformers2023] = useState<PerformerCard[]>([]);
  const [performers2024, setPerformers2024] = useState<PerformerCard[]>([]);

  useEffect(() => {
    let cards: PerformerCard[] = [];

    PerformersData2021.map((p) => {
      let newCard = { ...p, showDesc: false };
      cards.push(newCard);
    });

    setPerformers2021(cards);
  }, []);

  useEffect(() => {
    let cards: PerformerCard[] = [];

    PerformersData2022.map((p) => {
      let newCard = { ...p, showDesc: false };
      cards.push(newCard);
    });

    setPerformers2022(cards);
  }, []);

  useEffect(() => {
    let cards: PerformerCard[] = [];

    PerformersData2023.map((p) => {
      let newCard = { ...p, showDesc: false };
      cards.push(newCard);
    });

    setPerformers2023(cards);
  }, []);

  useEffect(() => {
    let cards: PerformerCard[] = [];

    PerformersData2024.map((p) => {
      let newCard = { ...p, showDesc: false };
      cards.push(newCard);
    });

    setPerformers2024(cards);
  }, []);

  const togglePerformerDesc2021 = (id: string) => {
    let updated: PerformerCard[];
    updated = performers2021.map((p) => {
      if (p.id === id) {
        p.showDesc = !p.showDesc;
      }
      return p;
    });

    setPerformers2021(updated);
  };

  const togglePerformerDesc2022 = (id: string) => {
    let updated: PerformerCard[];
    updated = performers2022.map((p) => {
      if (p.id === id) {
        p.showDesc = !p.showDesc;
      }
      return p;
    });

    setPerformers2022(updated);
  };

  const togglePerformerDesc2023 = (id: string) => {
    let updated: PerformerCard[];
    updated = performers2023.map((p) => {
      if (p.id === id) {
        p.showDesc = !p.showDesc;
      }
      return p;
    });

    setPerformers2023(updated);
  };

  const togglePerformerDesc2024 = (id: string) => {
    let updated: PerformerCard[];
    updated = performers2024.map((p) => {
      if (p.id === id) {
        p.showDesc = !p.showDesc;
      }
      return p;
    });

    setPerformers2024(updated);
  };

  return (
    <section className={shared.page + ' ' + styles.archivePage}>
      <h1>Arkisto</h1>
      <h2 className={styles.year}>2024</h2>
      {performers2024.map((p) => (
        <div className={styles.performerContainer} key={p.id}>
          <Image
            className={styles.performerImage}
            src={'/performers/2024/' + p.id + '.jpg'}
            width={100}
            height={100}
            layout='fixed'
            alt={p.name}
          />
          <div className={styles.performerTextContainer}>
            <div
              className={styles.performerTitle}
              onClick={() => togglePerformerDesc2024(p.id)}
            >
              <h2>{p.name}</h2>
              <button className={shared.openingChevron}>
                {p.showDesc ? (
                  <BiChevronDown size='3rem' />
                ) : (
                  <BiChevronLeft size='3rem' />
                )}
              </button>
            </div>
            <CSSTransition
              in={p.showDesc}
              timeout={1000}
              classNames='fadeTransition'
            >
              {p.showDesc ? (
                <div>
                  {p.paragraphs.map((parag, index) => (
                    <p key={index}>{parag.toString()}</p>
                  ))}
                </div>
              ) : (
                <span></span>
              )}
            </CSSTransition>
            <hr />
          </div>
        </div>
      ))}
      <h2 className={styles.year}>2023</h2>
      {performers2023.map((p) => (
        <div className={styles.performerContainer} key={p.id}>
          <Image
            className={styles.performerImage}
            src={'/performers/2023/' + p.id + '.jpg'}
            width={100}
            height={100}
            layout='fixed'
            alt={p.name}
          />
          <div className={styles.performerTextContainer}>
            <div
              className={styles.performerTitle}
              onClick={() => togglePerformerDesc2023(p.id)}
            >
              <h2>{p.name}</h2>
              <button className={shared.openingChevron}>
                {p.showDesc ? (
                  <BiChevronDown size='3rem' />
                ) : (
                  <BiChevronLeft size='3rem' />
                )}
              </button>
            </div>
            <CSSTransition
              in={p.showDesc}
              timeout={1000}
              classNames='fadeTransition'
            >
              {p.showDesc ? (
                <div>
                  {p.paragraphs.map((parag, index) => (
                    <p key={index}>{parag.toString()}</p>
                  ))}
                </div>
              ) : (
                <span></span>
              )}
            </CSSTransition>
            <hr />
          </div>
        </div>
      ))}
      <h2 className={styles.year}>2022</h2>
      {performers2022.map((p) => (
        <div className={styles.performerContainer} key={p.id}>
          <Image
            className={styles.performerImage}
            src={'/performers/2022/' + p.id + '.jpg'}
            width={100}
            height={100}
            layout='fixed'
            alt={p.name}
          />
          <div className={styles.performerTextContainer}>
            <div
              className={styles.performerTitle}
              onClick={() => togglePerformerDesc2022(p.id)}
            >
              <h2>{p.name}</h2>
              <button className={shared.openingChevron}>
                {p.showDesc ? (
                  <BiChevronDown size='3rem' />
                ) : (
                  <BiChevronLeft size='3rem' />
                )}
              </button>
            </div>
            <CSSTransition
              in={p.showDesc}
              timeout={1000}
              classNames='fadeTransition'
            >
              {p.showDesc ? (
                <div>
                  {p.paragraphs.map((parag, index) => (
                    <p key={index}>{parag.toString()}</p>
                  ))}
                </div>
              ) : (
                <span></span>
              )}
            </CSSTransition>
            <hr />
          </div>
        </div>
      ))}
      <h2 className={styles.year}>2021</h2>
      {performers2021.map((p) => (
        <div className={styles.performerContainer} key={p.id}>
          <Image
            className={styles.performerImage}
            src={'/performers/2021/' + p.id + '.jpg'}
            width={100}
            height={100}
            layout='fixed'
            alt={p.name}
          />
          <div className={styles.performerTextContainer}>
            <div
              className={styles.performerTitle}
              onClick={() => togglePerformerDesc2021(p.id)}
            >
              <h2>{p.name}</h2>
              <button className={shared.openingChevron}>
                {p.showDesc ? (
                  <BiChevronDown size='3rem' />
                ) : (
                  <BiChevronLeft size='3rem' />
                )}
              </button>
            </div>
            <CSSTransition
              in={p.showDesc}
              timeout={1000}
              classNames='fadeTransition'
            >
              {p.showDesc ? (
                <div>
                  {p.paragraphs.map((parag, index) => (
                    <p key={index}>{parag.toString()}</p>
                  ))}
                </div>
              ) : (
                <span></span>
              )}
            </CSSTransition>
            <hr />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Archive;
