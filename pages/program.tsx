import React, { useState } from 'react';
import { BiChevronDown, BiChevronLeft } from 'react-icons/bi';
import styles from '../styles/Program.module.scss';
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
      <i>OHJELMA PÄIVITTYY KEVÄÄN MITTAAN, PYSYKÄÄ KUULOLLA!</i>
      <div className={styles.dayContainer}>
        <div
          className={styles.programTitle}
          onClick={() => toggleDayDesc('wed')}
        >
          <h2>Keskiviikko 20.7.</h2>
          <button className={shared.openingChevron}>
            {dayToggles.wed ? (
              <BiChevronDown size='3rem' />
            ) : (
              <BiChevronLeft size='3rem' />
            )}
          </button>
        </div>
        {dayToggles.wed && (
          <>
            <p className={styles.programParag}>
              18-20 Olen polkuni päässä -illassa Ella Pyhältö lausuu
              rakastettuja runoja Irja ja Veikko Aro-Heinilän kotipihalla
              (sateella sisällä).
            </p>
            <p className={styles.programParag}>Sydämellisesti tervetuloa!</p>
            <p className={styles.programParag}>
              Paikka: Huhtakarintie 24, Livonsaari
            </p>
          </>
        )}
        <hr />
      </div>
      <div className={styles.dayContainer}>
        <div
          className={styles.programTitle}
          onClick={() => toggleDayDesc('thu')}
        >
          <h2>Torstai 21.7.</h2>
          <button className={shared.openingChevron}>
            {dayToggles.thu ? (
              <BiChevronDown size='3rem' />
            ) : (
              <BiChevronLeft size='3rem' />
            )}
          </button>
        </div>
        {dayToggles.thu && (
          <>
            <p className={styles.programParag}>
              14-16 Ainot ja Lauri esittävät Lähellä-nimisen poikkitaiteellisen
              kokoonpanon, joka on saanut kolmannen kiinnityksen
              kiertopalkintoon Willi Kansa -katselmuksessa marraskuussa 2021
              Irja ja Veikko Aro-Heinilän pihamaalla. Toisessa osassa iltapäivää
              kuullaan Irja Aro-Heinilän ja Arto Juurakon tekstejä Ainojen ja
              Laurin esittäminä.
            </p>
            <p className={styles.programParag}>
              17-19 Runollinen, musiikillinen ja merellinen matinea Cafe
              Laiturissa. Esiintymässä mm. Anja Erämaja.
            </p>
            <p className={styles.programParag}>
              Paikka: Huhtakarintie 24, Livonsaari sekä Cafe Laituri,
              Voiponlahdentie 37, Palva
            </p>
          </>
        )}
        <hr />
      </div>
      <div className={styles.dayContainer}>
        <div
          className={styles.programTitle}
          onClick={() => toggleDayDesc('fri')}
        >
          <h2>Perjantai 22.7.</h2>
          <button className={shared.openingChevron}>
            {dayToggles.fri ? (
              <BiChevronDown size='3rem' />
            ) : (
              <BiChevronLeft size='3rem' />
            )}
          </button>
        </div>
        {dayToggles.fri && (
          <>
            <p className={styles.programParag}>
              11-14 Monologityöpaja, vetäjä teatteritaiteen maisteri Kati Urho.
            </p>
            <p className={styles.programParag}>
              Ympäristöjargonia luovasti -työpaja, vetäjä journalisti ja
              viestintäkonsultti Laura Rantanen.
            </p>
            <p className={styles.programParag}>
              14-20 Runoutta, musiikkia ja poikkitaiteellisia yllätyksiä
              puutarhalavalla tai myrskyn sattuessa Seurantalon salissa.
            </p>
            <p className={styles.programParag}>
              Esiintymässä mm. Kari Aronpuro, Sanna Karlström, Katariina
              Vuorinen, Aki Salmela, Heidi Iivari ja Laura Laakso.
            </p>
            <p className={styles.programParag}>
              Musiikillisesta puolesta vastaa saksofonisti Mikko Innanen sekä
              Äyräs-kokoonpano: Olga Välimaa (laulu), Kauko Röyhkä (laulu,
              kitara, basso), Ilkka Turta (kitara), Kimmo Laine (basso,
              koskettimet), Roberto Lanz (rummut).
            </p>
            <p className={styles.programParag}>
              Tapahtuman ajan Sinervon talolla pitää majaa kiehtovien kirjojen
              tori.
            </p>
            <p className={styles.programParag}>
              Paikka: Sinervon talo, Sauniementie 5, Teersalo
            </p>
          </>
        )}
        <hr />
      </div>
      <div className={styles.dayContainer}>
        <div
          className={styles.programTitle}
          onClick={() => toggleDayDesc('sat')}
        >
          <h2>Lauantai 23.7.</h2>
          <button className={shared.openingChevron}>
            {dayToggles.sat ? (
              <BiChevronDown size='3rem' />
            ) : (
              <BiChevronLeft size='3rem' />
            )}
          </button>
        </div>
        {dayToggles.sat && (
          <>
            <p className={styles.programParag}>
              13-17 Runollinen iltapäivä. Romanttinen Velkuanmaa kutsuu mystisen
              äärelle.
            </p>
            <p className={styles.programParag}>
              Saaristohotelli Vaihelan terassilla runoilijat vievät kuulijat
              luomiinsa maailmoihin yhdessä muusikoiden kanssa. Samalla ehtii
              myös nauttimaan lounasta, juttelemaan muiden festarikävijöiden
              kanssa ja ihailemaan ympäröivää luontoa.
            </p>
            <p className={styles.programParag}>
              Juha Kulmala ja Diodi-yhtye, Saila Susiluoto ja Markku Pääskynen
              (luuttu).
            </p>
            <p className={styles.programParag}>
              Paikka: Vaihelan saaristohotelli, Velkuanmaantie 168, Velkuanmaa
            </p>
          </>
        )}
        <hr />
      </div>
    </section>
  );
};

export default Program;
