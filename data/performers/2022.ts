import type Performer from '../../types/Performer';

const Performers: Array<Performer> = [
    { name: 'Kari Aronpuro', paragraphs: ['Kari Aronpuro on suomalaisen runouden Grand Old Man, jonka 1782 sivua käsittävä Kootut runot I-IV ilmestyi keväällä 2022 (Palladium Kirjat). Elokuun alussa julkistetaan hänen tuorein suomennoksensa, W. G. Sebaldin runoelma Luonnon mukaan (Palladium Kirjat). '], imagePath: '/performers/2022/kari_aronpuro.jpg' },
    { name: 'Äyräs', paragraphs: ['Äyräs on Olga Välimaan ja Kauko Röyhkän psykedeelinen bändi, jonka sanoitukset ovat vanhaa suomalaista runoutta. Yhtyeen muut jäsenet ovat Ilkka Turta (kitara), Roberto Lanz (rummut), Kimmo Laine (basso) ja Kaj Mäki-Ullakko (koskettimet). '], imagePath: '/performers/2022/ayras.jpg' },
    { name: 'Saila Susiluoto', paragraphs: ['Saila Susiluoto (s.1971) on helsinkiläinen kirjailija. Hän on julkaissut kahdeksan runokokoelmaa, Antikythera-iPad-runosovelluksen, auditiivisen runoteoksen Oratorio ja esseeromaanin Kehrä. Susiluoto on palkittu Kalevi Jäntin palkinnolla, Suomi-palkinnolla ja Einari Vuorela-runopalkinnolla. Susiluodon runoja on käännetty viidelletoista kielelle.'], imagePath: '/performers/2022/saila_susiluoto.jpg' },
    { name: 'Markku Pääskynen', paragraphs: ['Markku Pääskynen (s. 1973) on Helsingissä asuva kirjailija. Hän on koulutukseltaan filosofian maisteri ja julkaissut romaaneja, novelleja ja esseitä. Lisäksi hän on suomentanut lyriikkaa mm. nykykreikasta. Pääskynen on ollut kahdesti Finlandia-ehdokkaana, saanut Kalevi Jäntin palkinnon sekä Savonia-palkinnon.'], imagePath: '/performers/2022/markku_paaskynen.jpg' },
    { name: 'Signe', paragraphs: ['Signe on vuonna 2014 perustettu nelihenkinen vokaaliyhtye. Yhtyeen muodostavat helsinkiläiset laulajat Josefiina Vannesluoma, Riikka Keränen ja Selma Savolainen sekä kontrabasisti Kaisa Mäensivu.'], imagePath: '/performers/2022/signe.jpg' },
    { name: 'Sanna Karlström', paragraphs: ['Sanna Karlström on helsinkiläinen kirjailija. Hänen runokokoelmansa ovat saaneet Helsingin Sanomain kirjallisuuspalkinnon, Kalevi Jäntin palkinnon ja Yleisradion Tanssiva karhu -palkinnon.', 'Karlströmin kuudes runokokoelma, Pehmeät kudokset, ilmestyy syksyllä 2022.', 'Valokuva: Otava, Arto Wiikari'], imagePath: '/performers/2022/sanna_karlstrom.jpg' },
    { name: 'Aki Salmela', paragraphs: ['Aki Salmela on runoilija ja runouden suomentaja. Viimeisin teos Eläimen Varjo (2019).'], imagePath: '/performers/2022/aki_salmela.jpg' },
    { name: 'Tytti Metsä', paragraphs: ['Tytti Metsä, laulava jouhikonsoittaja tässä teille esittäytyy:', 'Runosaaren setissäni kuullaan sekä kalevalamittaa että uudempaa runomittaa. On sekä tradia että itse sepittämääni, ja näiden lisäksi myös yksi Marja Kurkelan runo sekä yksi Saukin suomennos.', 'Vanhakantainen, minimalistinen estetiikka kiinnostaa minua mutta yhdistelen siihen uudempiakin kliseitä, tahattomasti ja tahallani.', 'Jouhikossa on hyvin intensiivinen, transsiin kutsuva soundi, ja ihmisäänen sekoittuminen jouhikon sointiin vie jonnekin kauas. Huokoinen, rouhea ja heleä lomittuvat.'], imagePath: '/performers/2022/tytti_metsa.jpg' },
    { name: 'Outi-Illuusia Parviainen', paragraphs: ['Parviainen on runoilija sekä lavalla että sen ulkopuolella. Hänen taustansa on monitaiteinen ulottuen runoudesta esitystaiteeseen ja performanssiin, musiikkiin ja kuvataiteeseen.', 'Hän on toiminut lavarunouskollektiivi Helsinki Poetry Connectionin puheenjohtajana ja hänen runojaan on julkaistu sekä kokoelmina että antologioissa. Saaristo on käynyt hänelle rakkaaksi purjehduksen myötä.'], imagePath: '/performers/2022/outi_illuusia.jpg' },
    { name: 'Juha Kulmala & Diodi', paragraphs: ['Juha Kulmala on turkulainen runoilija, jolta ilmestyi tammikuussa kuudes runokokoelma RESET (Poesia 2022). Aiemmille kokoelmille ovat osuneet mm. Jarkko Laine -palkinto ja YLE:n Tanssiva karhu -palkinto sekä Runeberg- ja Einari Vuorela -palkintoehdokkuudet.', 'Juha Kulmala + Diodi on v.2016 syntynyt kokoonpano, joka musiikillisesti sijoittuu  vaihtelevaan välimaastoon, jossa hapokas jazzrock törmää yllättäviin blues-adagioihin. Kaikkea kokeillaan ainakin kerran. Vastuu jakautuu yleensä näin: Juha Kulmala - runot, Otso Helasvuo - basso, kitara, Pekka Tolonen - koskettimet, kitara, puhaltimet, rytmit ja elektroniikka.'], imagePath: '/performers/2022/juha_kulmala_diodi.jpg' },
    { name: 'Susinukke Kosola (Daniil Kozlov)', paragraphs: ['Daniil Kozlov (s. 1991), taiteilijanimeltään Susinukke Kosola on pietarilaissyntyinen, Turussa asuva kirjoittaja ja kirjallisuusalan sekatyöläinen.', 'Häneltä on julkaistu kolme runokirjaa ja yksi genrehybridi, jotka ovat saaneet kriitikoiden suitsutusta, palkintoja ja ehdokkuuksia. Hänen kolmas teoksensa Varisto on kokeellinen myös julkaisumuodoltaan – kokonaan käsin kirjoitettua kokoelmaa ei voi ostaa, sen voi ainoastaan saada tunnustusta vastaan. Hänen neljäs teoksensa Turkoosi vyöhyke on genrehybridi, joka yhdistää runoutta, esseistiikkaa ja säeromaanimuotoa.', 'Kosola tunnetaan myös runouteen ja yhteiskunnalliseen kirjallisuuteen keskittyvän Kolera-kollektiivi -nimisen kustantamon perustajana ja lavarunoilijana, sekä kansallisen Runografi-hankkeen ideoijana ja vetäjänä. Taiteellisen työskentelyn lisäksi hän toimii lyriikan kirjoittamisen opettajana muun muassa Turun yliopistossa ja työskentelee aktiivisesti alueensa kirjallisella kentällä.'], imagePath: '/performers/2022/susinukke_kosola.jpg' },
    { name: 'Francis North ja Ghosts on TV', paragraphs: ['Runoilija Francis North ja post-rock -yhtye Ghosts on TV muodostivat viime syksynä omalaatuisen liiton, kun North ja kuvataitelija Anna Blom julkaisivat esikoiskirjansa ENTROPY:n syyskuussa 2021. Kirjan julkistusjuhlat järjestettiin loppuunmyydyssä Helsingin Kapsäkin teatterisalissa, jossa North lausui koko teoksen livenä alusta loppuun. Esitystä vahvisti Ghosts on TV, joka säesti Francista kirjan pohjalta sävellettyllä konsertilla. Tämä yhteistyö taltioitiin ja siitä syntyi livelevyn ja äänikirjan poikkeuksellinen yhdistelmä: "ENTROPY" (Live At The Music Theatre Kapsäkki)" ENTROPY on tarina profeetan noususta ja tuhosta, pyhyyden sekä kauneuden kokemuksista. Soliti Records julkaisi albumin 22.4.2022.', 'Elokuvallista ambientia, tummia kitaravalleja sekä performatiivista spoken wordia yhdistelevää Franciksen ja GoTV:n vuoropuhelua verrattiin konsertin jälkeen mm. Nick Cave & The Bad Seedsin viimeisimpiin levyihin. Northin tekstiä taas on rinnastettu Allen Ginsbergin tyyliin. Rumba totesi kollaboraation olevan komeaa kuultavaa ja Desibelin Mika Roth ylisti albumia "omilla säännöillään toimivaksi upeaksi teokseksi."'], imagePath: '/performers/2022/francis_north.jpg' },
    { name: 'Anja Erämaja', paragraphs: ['Anja Erämaja asuu Helsingissä ja on kotoisin Merimaskusta, Naantalin saaristosta. Hänen viides runoteoksensa Olen nyt täällä metsässä ilmestyi elokuussa 2021. Se on erään marjareissun kuvaus, kirja irtiotosta, haltioitumisesta, eksymisestä, muistista ja joukkoon kuulumisesta.', 'Palkittu runoilija viihtyy lajien välimaastoissa, hän on opiskellut valokuvataidetta, tehnyt musiikkia eri kokoonpanoissa ja kirjoittanut myös proosaa, näytelmän, lastenkirjoja ja laulusanoituksia.'], imagePath: '/performers/2022/anja_eramaja.jpg' },
    { name: 'Ainot ja Lauri', paragraphs: ['Ainot ja Lauri esittävät Lähellä-nimisen poikkitaiteellisen kokoonpanon, joka on saanut kolmannen kiinnityksen kiertopalkintoon Willi Kansa -katselmuksessa marraskuussa 2021. Toisessa osassa iltapäivää kuullaan Irja Aro-Heinilän ja Arto Juurakon tekstejä Ainojen ja Laurin esittäminä.'], imagePath: '/performers/2022/ainot_ja_lauri.jpg' },
    { name: 'Heidi Iivari ja Karl Kruuse', paragraphs: ['Tarttolaiset Heidi Iivari ja Karl Kruuse ovat esiintyneet yhdessä vuodesta 2018 lähtien. Heidän ohjelmistonsa koostuu Iivarin Tartto-aiheisista runoista ja Karlin säveltämästä kitaramusiikista.', 'Kirjallisuuskriitikko Piret Põldver kirjoittaa Iivarin ja Kruusen esityksestä Crazy Tartu -runofestivaalilla 2019 seuraavasti: ”Heidi Iivari ja Karl Kruuse yhdistivät musiikin ja runouden niin ammattitaitoisesti, että tuloksena oli jotakin enemmän kuin kaksi eri lajia; täysin itsenäisesti toimiva show.” (Postimees, 19.11.2019)', 'Heidi Iivari on tartonsuomalainen runoilija, jonka runot syntyvät sekä suomeksi että viroksi. Hän on esittänyt runojaan vasta vuodesta 2018 alkaen, mutta esiintynyt jo useissa kirjallisuustapahtumissa Suomessa, Virossa ja Espanjassa. Vuonna 2020 hän sijoittui kolmanneksi Viron lavarunouskilpailussa ja edusti Tarttoa Unescon kirjallisuuskaupunkien Slam-O-Vision -lavarunouskilpailussa.', 'Iivarin kaksikielinen esikoisrunokokoelma Tarton sarjarakastaja / Tartu sariarmastaja (Enostone, 2021) on rohkea, hauska ja intohimoinen rakkaudentunnustus runoilijan kotikaupungille Tartolle ja sen asukkaille. Iivari runoja on käännetty myös englanniksi, espanjaksi, ranskaksi ja võruksi. Heidi Iivarin runoihin voi tutustua myös kaksikielisissä antologioissa Viron runokartta (https://viro-instituutti.fi/vironrunokartta/runoilijat/heidi-iivari-2/) ja Sinisild / Sinisilta (IlmaPress, 2021).', 'Karl Kruuse on soittanut kitaraa vuodesta 2003 lähtien. Hän on esittänyt erilaisilla kokoonpanoilla sekä omaa että toisten musiikkia ABBA:sta AC/DC:hin niin kaduilla kuin lavoillakin Englannista Espanjaan. Tutustu Karlin musiikkiin: https://soundcloud.com/karlkruusemusic sekä Facebookissa ja Instagramissa.'], imagePath: '/performers/2022/heidi_ja_karl.jpg' },
    { name: 'Mikko Innanen', paragraphs: ['Mikko Innasen Maakuntauudistus palaa kansalliselle näyttämölle. Saksofonisti Innasen toistaiseksi viimeisimmän esiintymisensä juuri ennen korona-aikaa tehnyt poikkitaiteellinen, pateettis-satiirinen projekti porautuu syvälle suomalaiseen sieluun ja tuo sieltä matkamuistoksi aivan uudenlaisia versioita perinteisistä maakuntalauluistamme.', '2022 Hietsu is Happening! - kollektiivilla valtionpalkittu saksofonisti ja säveltälä M.I. on luonut pitkän uran esiintymällä 38 maassa ja julkaisemalla kymmeniä levyllä omilla kokoonpanoillaan koti- ja ulkomaisten muusikoiden kanssa. Innanen on juuri voittanut ensimmäisenä suomalaisena yhdysvaltalaisen DownBeat-lehden Rising star -sarjan julkaisun vuotuisessa kriitikkoäänestyksessä.'], imagePath: '/performers/2022/mikko_innanen.jpg' },
    { name: 'Laura Laakso', paragraphs: ['Laura Laakso on helsinkiläinen kirjailija. Hänen esikoisteoksensa Mrs. Milkyway (2019) oli ehdolla sekä Runeberg-palkinnon että Helsingin Sanomien kirjallisuuspalkinnon saajaksi.', 'Askaroituaan kirjallisuuden, teatterin, tanssin, musiikin ja arkkitehtuurin parissa sekä julkaistuaan kolme uuden ajan proleromaania Laakso on tajunnut kirjoittavansa progekirjallisuutta.'], imagePath: '/performers/2022/laura_laakso.jpg' },
    { name: 'Katariina Vuorinen', paragraphs: ['Katariina Vuorinen on runoilija, löytöretkeilijä ja Runosaari-festivaalin luoja. Vuonna 2018 hän löysi nomadivuosiensa keskeltä maagisen Velkuanmaan saaren, ja tiesi heti paikan kutsuvan runon henkiä saaristoon. Vuonna 2021 tämä unelma toteutui Runosaaressa, joka jatkuu nyt vuosittaisena tapahtumana Naantalin saaristossa.', 'Voimallisten näkyjen, rytmin ja mielen liikkeiden tarkentamisen taiturina tunnettu Vuorinen julkaisee viidennen runokokoelmansa Myöhempien kesien jumalat, Los dioses de los veranos ulteriores vuoden 2022 Runosaaressa. Teoksessa Vuorinen kutoo yhteen ihmisen, luonnonvoimat ja kaiken yllä valvovan taivaan Andien ikiaikaisissa maisemissa. Latinalainen Amerikka ja espanjan kieli ovat Vuoriselle erityisen merkityksellisiä, mitä ilmentää kokoelman julkaiseminen samoissa kansissa kaksikielisenä: suomeksi ja espanjaksi.'], imagePath: '/performers/2022/katariina_vuorinen.jpg' },
    { name: 'Ella Pyhältö', paragraphs: ['Ella Pyhältö on näyttelijä, joka on saanut kuuluisuutta myös lausuntataiteilijana ja äänikirjojen kaunisäänisenä lukijana. Hän työskentelee tällä hetkellä Teatteri Avoimissa Ovissa Helsingissä. Hän on ollut Suomen Lausujain Liiton puheenjohtaja.'], imagePath: '/performers/2022/ella_pyhalto.jpg' },
    { name: 'Laura Rantanen', paragraphs: ['Journalisti, viestintäkonsultti ja saariston lapsi.'], imagePath: '/performers/2022/laura_rantanen.jpg' },
    { name: 'Kati Urho', paragraphs: ['Kati Urho on turkulainen teatterialan monitaituri, joka valmistui vuonna 2002 ammattinäyttelijäksi (FIA) Lontoossa (East 15 Acting School). Kati toimii tällä hetkellä freelancer näyttelijänä, käsikirjoittajana, laulajana, ohjaajana sekä tuottajana Turusta käsin. Vuonna 2022 Turun kaupunki myönsi Katille vuoden Aboa-apurahan.'], imagePath: '/performers/2022/kati_urho.jpg' },
];

export default Performers;