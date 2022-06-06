import type { NextPage } from 'next';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className={styles.logo} id='logo-start'>
          <img src='runosaari-logo.jpg' alt='Runosaari logo' />
          <div id='logo-credits'>
            <div>@Sanna Hukkanen</div>
          </div>
        </section>

        <section className={styles.main}>
          <h1 id='main-title'>Runosaari 2022</h1>
          <h2>
            <span className={styles.timeAndPlace}>
              ~ 20.-23.7. Livonsaari & Velkuanmaa ~
            </span>
            <br />
            Eksymisretki omaan luontoosi, metsänpeiton suojaan!
          </h2>
          <p>
            Lumi ja jää vähenee, vedenpinta nousee ja pandemian aallot viistävät
            meidänkin rantojamme. Peurojen kurittaman monimuotoisuuden keskelle
            nousee RUNOSAARI täynnä ihmetystä ja kysymyksiä: onko
            tulevaisuudella tulevaisuutta? Kuinka luontoon lomittuminen voi olla
            mahdollista? Jos eksymme metsänpeittoon, voimmeko löytää jonnekin?
          </p>
          <p>
            Uusi poikkitaiteellinen runofestivaali järjestetään toista kertaa
            Livonsaaressa, Palvassa ja Velkuanmaassa 20.-23.7.2022! Ohjelmassa
            runous yhdistyy elävään musiikkiin ja erilaisiin taiteellisiin
            työpajoihin. Livonsaaren perinteinen Seurantalo pikniknurmikkoineen
            ja lähimetsineen tarjoaa puitteet lavaesiintyjille, työpajoille ja
            elävälle musiikille. Cafe Laiturissa runous kohtaa yleisön meren
            äärellä. Velkuanmaan pastoraali-idylli kahden lossin takana
            viettelee saaristoluonnon syvyyksiin, ja runoiltapäivässä saamme
            nauttia soitosta ja runoudesta Saaristohotelli Vaihelan leppoisalla
            terassilla.
          </p>
          <p>
            Runosaari-festivaaliin osallistuu toistakymmentä maamme eturivin
            runoilijaa, muusikoita, työpajan vetäjiä ja muita esiintyjiä ke
            20.7.– la 23.7.2022.
          </p>
          <p>
            Tapahtuman järjestää Runosaari-työryhmä. Yhteistyössä: Runoviikko
            ry, Kirjan talo – Bokens hus ry, Livonsaaren kyläyhdistys ry,
            Velkuan saaristolaisyhdistys ry, Aviador Kustannus, Enostone
            Kustannus, Cafe Laituri ja Saaristohotelli Vaihela.
          </p>
          <p>
            <i>[Ohjelmaa päivitetään]</i>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
