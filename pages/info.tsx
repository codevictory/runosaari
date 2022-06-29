import React, { useState } from 'react';
import shared from '../styles/Shared.module.scss';
import styles from '../styles/Info.module.scss';
import { BiChevronDown, BiChevronLeft } from 'react-icons/bi';
import { CSSTransition } from 'react-transition-group';

interface InfoToggles {
  shop: boolean;
  bus: boolean;
  accom: boolean;
  ferry: boolean;
  fb: boolean;
}

const Info = () => {
  const [infoToggles, setInfoToggles] = useState<InfoToggles>({
    shop: false,
    bus: false,
    accom: false,
    ferry: false,
    fb: false,
  });

  const toggleInfo = (info: keyof InfoToggles) => {
    let updated = { ...infoToggles };
    updated[info] = !updated[info];
    setInfoToggles(updated);
  };

  return (
    <section className={shared.page}>
      <h1>Info</h1>

      <i>Lisätietoja tulossa myöhemmin!</i>
      <div className={styles.infoContainer}>
        <div className={styles.infoTitle} onClick={() => toggleInfo('shop')}>
          <h2>Livonsaaren Osuuskauppa</h2>
          <button className={shared.openingChevron}>
            {infoToggles.shop ? (
              <BiChevronDown size='3rem' />
            ) : (
              <BiChevronLeft size='3rem' />
            )}
          </button>
        </div>
        <CSSTransition
          in={infoToggles.shop}
          timeout={1000}
          classNames='fadeTransition'
        >
          {infoToggles.shop ? (
            <div>
              <p>
                Livonsaaren osuuskauppa palvelee klo 9-19 joka päivä. Keittiö ja
                baari 12-19 to-pe. Ostosten yhteydessä mahdollista nostaa
                käteistä, mutta suosittelemme tuomaan käteistä rahaa kaupungista
                esim. mahdollisia kirjaostoksia varten.
              </p>
              <a href='https://https//livonsaarenosuuskauppa.fi/'>
                Kaupan kotisivut
              </a>
            </div>
          ) : (
            <></>
          )}
        </CSSTransition>
        <hr />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoTitle} onClick={() => toggleInfo('bus')}>
          <h2>Bussiaikataulut</h2>
          <button className={shared.openingChevron}>
            {infoToggles.bus ? (
              <BiChevronDown size='3rem' />
            ) : (
              <BiChevronLeft size='3rem' />
            )}
          </button>
        </div>
        <CSSTransition
          in={infoToggles.bus}
          timeout={1000}
          classNames='fadeTransition'
        >
          {infoToggles.bus ? (
            <div>
              <p>
                Bussi 403 lähteen Turusta ma-pe 16:30 ja saapuu Livonsaarelle
                17:37 ja Velkualle 17:48. Tämä on ainoa suorayhteys festivaali
                alueelle.
              </p>
              <a href='https://https//www.foli.fi/fi'>
                Paikallisliikenteen bussiaikataulut
              </a>
            </div>
          ) : (
            <></>
          )}
        </CSSTransition>
        <hr />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoTitle} onClick={() => toggleInfo('accom')}>
          <h2>Majoitus</h2>
          <button className={shared.openingChevron}>
            {infoToggles.accom ? (
              <BiChevronDown size='3rem' />
            ) : (
              <BiChevronLeft size='3rem' />
            )}
          </button>
        </div>
        <CSSTransition
          in={infoToggles.accom}
          timeout={1000}
          classNames='fadeTransition'
        >
          {infoToggles.accom ? (
            <div>
              <p>
                Majoituspalveluita Livonsaari-Velkua: Wanha Salakuljettaja
                (Teersalo), Livonsaari Caravan, Saaristohotelli Vaihela.
              </p>
              <a href='https://oldsmuggler.fi/'>Vanha Salakuljettaja</a>
              <a href='https://www.livonsaarencaravan.fi/'>
                Livonsaari Caravan
              </a>
              <a href='https://vaihela.fi/'>Saaristohotelli Vaihela</a>
            </div>
          ) : (
            <></>
          )}
        </CSSTransition>
        <hr />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoTitle} onClick={() => toggleInfo('ferry')}>
          <h2>Lossiyhteydet</h2>
          <button className={shared.openingChevron}>
            {infoToggles.ferry ? (
              <BiChevronDown size='3rem' />
            ) : (
              <BiChevronLeft size='3rem' />
            )}
          </button>
        </div>
        <CSSTransition
          in={infoToggles.ferry}
          timeout={1000}
          classNames='fadeTransition'
        >
          {infoToggles.ferry ? (
            <div>
              <p>
                Lossiyhteydet Palvaan ja Velkuanmaahan Finferries-sivustolla
                (huom. yövuoro edellyttää tilauksen etukäteen. Lossi on osa
                julkista tieverkostoa eli maksuton.)
              </p>
              <a href='https://www.finferries.fi/lauttaliikenne/lauttapaikat-ja-aikataulut/velkuanmaa.html'>
                Aikataulut Palvaan ja Velkuanmaahan
              </a>
            </div>
          ) : (
            <></>
          )}
        </CSSTransition>
        <hr />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoTitle} onClick={() => toggleInfo('fb')}>
          <h2>Facebook</h2>
          <button className={shared.openingChevron}>
            {infoToggles.fb ? (
              <BiChevronDown size='3rem' />
            ) : (
              <BiChevronLeft size='3rem' />
            )}
          </button>
        </div>
        <CSSTransition
          in={infoToggles.fb}
          timeout={1000}
          classNames='fadeTransition'
        >
          {infoToggles.fb ? (
            <div>
              <a href='https://https//www.facebook.com/Runosaari-festivaali-110533364561933'>
                Tapahtuman facebook-sivut
              </a>
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

export default Info;
