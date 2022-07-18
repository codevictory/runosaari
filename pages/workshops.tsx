import React from 'react';
import shared from '../styles/Shared.module.scss';
import styles from '../styles/Workshops.module.scss';

const Workshops = () => {
  return (
    <section className={shared.page + ' ' + styles.workshopPage}>
      <h1>Työpajat</h1>
      <p>
        Pyydämme ilmoittautumisia ennakkoon:{' '}
        <a href='mailto:runosaari@gmail.com'>runosaari@gmail.com</a>. Jos tilaa
        jää, mukaan voi tulla suoraan paikan päällä.
      </p>
      <h2>Monologityöpaja, Kati Urho</h2>
      <h3>
        Perjantai 22.7.
        <br />
        11:00 - 14:15
      </h3>
      <h3>
        Sinervon talolla
        <br />
        Sauniementie 5, Teersalo
      </h3>
      <p>Löydä oma sisäinen monologisi!</p>
      <p>
        Mikä on sinun tarinasi? Tervetuloa inspiroitumaan draamallisen
        tarinankerronnan pariin. Työpajassa etsitään inspiraatiota luonnosta,
        omasta sisäisestä äänestä sekä kirjoittamisen puhdistavasta voimasta.
        Tämä työpaja avaa uusia näkökulmia kirjoittamiseen monologin keinoja
        käyttäen.
      </p>
      <p>
        Kati Urho on turkulainen teatterialan monitaituri, joka valmistui vuonna
        2002 ammattinäyttelijäksi (FIA) Lontoossa (East 15 Acting School). Kati
        toimii tällä hetkellä freelancer näyttelijänä, käsikirjoittajana,
        laulajana, ohjaajana sekä tuottajana Turusta käsin. Vuonna 2022 Turun
        kaupunki myönsi Katille vuoden Aboa-apurahan.
      </p>
      <p>
        Työpajamaksu 10 euroa. Ilmoittautumiset:{' '}
        <a href='mailto:runosaari@gmail.com'>runosaari@gmail.com</a>
      </p>
      <h2>Ympäristöjargonia luovasti -työpaja, Laura Rantanen</h2>
      <h3>
        Perjantai 22.7.
        <br />
        13:30 - 15:30
      </h3>
      <h3>
        Sinervon talolla
        <br />
        Sauniementie 5, Teersalo
      </h3>
      <p>
        Kuinka ottaa byrokraattinen kapulakieli haltuun ja tehdä siitä ystävä
        runouden keinoin?
      </p>
      <p>
        Työpaja ei vaadi minkäänlaista aikaisempaa kirjoittajakokemusta eikä
        etenkään ympäristö- tai minkään muunkaan jargonin ymmärtämistä. Vetäjä
        on itsekin saariston lapsi, journalisti ja viestintäkonsultti Laura
        Rantanen.
      </p>
      <p>
        Työpajamaksu 10 euroa. Ilmoittautumiset:{' '}
        <a href='mailto:runosaari@gmail.com'>runosaari@gmail.com</a>
      </p>
    </section>
  );
};

export default Workshops;
