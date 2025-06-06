import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Performers.module.scss';
import shared from '../styles/Shared.module.scss';
import Performer from '../types/Performer';
import { BiChevronDown, BiChevronLeft } from 'react-icons/bi';
import PerformersData from '../data/performers/2025';
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

interface PerformerCard extends Performer {
  showDesc: boolean;
}

const Performers = () => {
  const [performers, setPerformers] = useState<PerformerCard[]>([]);

  useEffect(() => {
    let cards: PerformerCard[] = [];

    PerformersData.map((p) => {
      let newCard = { ...p, showDesc: false };
      cards.push(newCard);
    });

    setPerformers(cards);
  }, []);

  const togglePerformerDesc = (id: string) => {
    let updated: PerformerCard[];
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
      {performers.length !== 0 ? (
        performers.map((p) => (
          <div className={styles.performerContainer} key={p.id}>
            <Image
              className={styles.performerImage}
              src={'/performers/2025/' + p.id + '.jpg'}
              width={100}
              height={100}
              layout='fixed'
              alt={p.name + ' image'}
            />
            <div className={styles.performerTextContainer}>
              <div
                className={styles.performerTitle}
                onClick={() => togglePerformerDesc(p.id)}
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
        ))
      ) : (
        <i className={shared.moreInfoLaterText}>Lisätietoja tulossa myöhemmin...</i>
      )}
      <Link href="/archive">
        <a>
          <span className={styles.archiveLinkText}>Aiempien vuosien esiintyjiä</span>
          <FiExternalLink fontSize={20} />
        </a>
      </Link>
    </section>
  );
};

export default Performers;
