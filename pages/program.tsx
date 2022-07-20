import React, { useState } from 'react';
import { BiChevronDown, BiChevronLeft } from 'react-icons/bi';
import styles from '../styles/Program.module.scss';
import shared from '../styles/Shared.module.scss';
import { CSSTransition } from 'react-transition-group';

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
      <i className={shared.followNote}>Lisätietoja tulossa myöhemmin!</i>
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
        <CSSTransition
          in={dayToggles.wed}
          timeout={1000}
          classNames='fadeTransition'
        >
          {dayToggles.wed ? (
            <div>
              <p>
                <b>18-20</b> <i>Olen polkuni päässä</i> -illassa näyttelijä Ella
                Pyhältö Helsingistä lausuu rakastettuja runoja Irja ja Veikko
                Aro-Heinilän pihassa ke 20.7.22 klo 18. (sateella sisällä)
                Osoite Huhtakarintie 24, Livonsaari.
              </p>
              <p>
                Iltaa jatketaan osallistujien lempirunojen parissa. Ota siis
                runoja mukaan. Muun muassa Antti Kinnanen lausuu tätinsä
                kirjoittaman pakolaisrunon.
              </p>
              <p>Sydämellisesti tervetuloa!</p>
              <p>Paikka: Huhtakarintie 24, Livonsaari</p>
            </div>
          ) : (
            <></>
          )}
        </CSSTransition>
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
        <CSSTransition
          in={dayToggles.thu}
          timeout={1000}
          classNames='fadeTransition'
        >
          {dayToggles.thu ? (
            <div>
              <p>
                <b>14-16</b> Ainot ja Lauri, ohj. Leena Koivula, tulevat
                Karviasta ja esittävät poikkitaiteellisen runosarjan LÄHELLÄ
                sekä Irja Aro-Heinilän ja Arto Juurakon tekstejä to 21.7.22 klo
                14. Irja ja Veikko Aro-Heinilän pihassa (sateella sisällä)
                Osoite Huhtakarintie 24, Livonsaari.
              </p>
              <p>
                Ainot ja Lauri -ryhmä on voittanut Willi Kansa -katselmuksessa
                ensimmäisen sijan. Mukana on myös Tiina-Kaisa Aro-Heinilä, joka
                laulaa lauluja syvistä vesistä, kasvusta ja menetyksestä sekä
                soittaa herkkiä huilusävelmiä.
              </p>
              <p>
                <b>17-19</b> Runollinen, musiikillinen ja merellinen matinea
                Cafe Laiturissa. Esiintymässä runoilija Anja Erämaja ja
                lauluyhtye Signe.
              </p>
              <p>
                Paikka: Huhtakarintie 24, Livonsaari sekä Cafe Laituri,
                Voiponlahdentie 37, Palva
              </p>
            </div>
          ) : (
            <></>
          )}
        </CSSTransition>
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
        <CSSTransition
          in={dayToggles.fri}
          timeout={1000}
          classNames='fadeTransition'
        >
          {dayToggles.fri ? (
            <div>
              <p>
                <b>11:00-15:30</b> Kirjoittamisen työpajoja.
              </p>
              <p>
                Monologityöpaja, vetäjä teatteritaiteen monitaituri Kati Urho.
              </p>
              <p>
                Ympäristöjargonia luovasti -työpaja, vetäjä journalisti ja
                viestintäkonsultti Laura Rantanen.
              </p>
              <p>
                Lisätietoja <a href='/workshops'>Työpajat-osiosta</a>
              </p>
              <p>
                <b>16-24</b> Runoutta, musiikkia ja poikkitaiteellisia
                yllätyksiä merilavalla tai myrskyn sattuessa Sinervon salissa.
              </p>
              <p>
                Esiintymässä mm. Kari Aronpuro, Sanna Karlström, Outi-Illuusia
                Parviainen, Katariina Vuorinen, Aki Salmela, Susinukke Kosola,
                Laura Laakso, Juha Kulmala, Heidi Iivari ja Karl Kruuse.
              </p>
              <p>
                Musiikillis-lyyrisestä puolesta vastaavat saksofonisti Mikko
                Innanen, jouhikonsoittaja Tytti Metsä, Francis North and The
                Ghosts On Tv sekä Äyräs-kokoonpano: Olga Välimaa (laulu), Kauko
                Röyhkä (laulu, kitara, basso), Ilkka Turta (kitara), Kimmo Laine
                (basso, koskettimet), Roberto Lanz (rummut).
              </p>
              <p>
                Tapahtuman ajan Sinervon talolla pitää majaa kiehtovien kirjojen
                tori.
              </p>
              <p>Saariston Savotan buffet 16:00 - 21:00</p>
              <p>Paikka: Sinervon talo, Sauniementie 5, Teersalo</p>
            </div>
          ) : (
            <></>
          )}
        </CSSTransition>
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
        <CSSTransition
          in={dayToggles.sat}
          timeout={1000}
          classNames='fadeTransition'
        >
          {dayToggles.sat ? (
            <div>
              <p>
                <b>13-17</b> Runollinen iltapäivä. Romanttinen Velkuanmaa kutsuu
                mystisen äärelle.
              </p>
              <p>
                Saaristohotelli Vaihelan terassilla runoilijat vievät kuulijat
                luomiinsa maailmoihin yhdessä muusikoiden kanssa. Samalla ehtii
                myös nauttimaan lounasta, juttelemaan muiden festarikävijöiden
                kanssa ja ihailemaan ympäröivää luontoa.
              </p>
              <p>
                Juha Kulmala ja Diodi-yhtye, Saila Susiluoto ja Markku Pääskynen
                (luuttu), Katariina Vuorinen ja Diodi.
              </p>
              <p>
                Paikka: Vaihelan saaristohotelli, Velkuanmaantie 168, Velkuanmaa
              </p>
            </div>
          ) : (
            <></>
          )}
        </CSSTransition>
        <hr />
      </div>
    </section>
  );
};

export default Program;
