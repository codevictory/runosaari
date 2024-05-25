import React from 'react';
import shared from '../styles/Shared.module.scss';
import styles from '../styles/Safety.module.scss';

const Safety = () => {
  return (
    <section className={shared.page + ' ' + styles.safetyPage}>
      <h1>Turvallisemman tilan periaatteet</h1>

      <p>
        Runosaaren tapahtumissa noudatetaan turvallisemman tilan periaatteita.
        Pyrimme tapahtumissamme turvaamaan näiden periaatteiden toteutumisen
        omalla toiminnallamme, tilojen suunnittelulla sekä henkilökunnan,
        esiintyjien ja yleisön informoinnilla.
      </p>

      <ul className={styles.safetyList}>
        <li>
          <b>Kunnioitus. </b>Jokaisella ihmisellä on oikeus tulla kunnioitetuksi
          omana itsenään. Kunnioitathan muiden ihmisten fyysistä ja psyykkistä
          koskemattomuutta, mielipiteitä sekä ihmisarvoa. Jokaisella on oikeus
          poistua epämukavaksi kokemastaan tilanteesta tai keskustelusta. Ethän
          myöskään ota ihmisistä kuvia kysymättä ensin.{' '}
        </li>
        <li>
          <b>Olettaminen. </b>Ethän oleta kenenkään sukupuolta, kansallisuutta,
          seksuaalista suuntautumista, kulttuuria, kieltä, uskontoa, arvoja,
          terveydentilaa tai toimintakykyä. Ethän tee johtopäätelmiä kenenkään
          ulkonäön, käytöksen tai oletetun sosioekonomisen aseman perusteella.
        </li>
        <li>
          <b>Kommunikointi. </b>
          Pyrithän luomaan ympärillesi ystävällistä ja turvallista ilmapiiriä.
          Ole avoin muita ihmisiä kohtaan, kuuntele ja käytä kunnioittavaa
          kieltä. Ethän oleta puheessasi kenenkään sukupuolta tai muita
          ominaisuuksia. Ethän käytä stereotypisoivaa, toiseuttavaa tai
          halventaa kieltä. Jos kuitenkin vahingossa loukkaat sanoillasi
          jotakuta, pyydäthän anteeksi.
        </li>
        <li>
          <b>Toimiminen. </b>
          Mikäli havaitset epäasiallista käytöstä tai koet olosi uhatuksi, älä
          epäröi pyytää apua Runosaaren ja tapahtumapaikkojen työntekijöiltä.
          Jos koet, että olet kohdannut häirintää tapahtumissamme ja siihen ei
          ole onnistuttu puuttumaan, ole yhteydessä Runosaari-työryhmään
          sähköpostilla{' '}
          <a href='mailto:runosaari@gmail.com'>runosaari@gmail.com</a> .
        </li>
      </ul>
    </section>
  );
};

export default Safety;
