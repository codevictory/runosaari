import type { NextPage } from 'next';
import Performers from './performers';
import Program from './program';
import Info from './info';
import styles from '../styles/Index.module.scss';
import Lead from './components/Lead';
import Collaboration from './components/Collaboration';
import Workshops from './workshops';

const Home: NextPage = () => {
  return (
    <div className={styles.indexContainer}>
      <h1>Runosaari 2022</h1>
      <Lead />
      <Performers />
      <Program />
      <Workshops />
      <Info />
      <Collaboration />
    </div>
  );
};

export default Home;
