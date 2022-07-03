import type { NextPage } from 'next';
import Performers from './performers';
import Program from './program';
import Info from './info';
import styles from '../styles/Index.module.scss';
import Lead from './components/Lead';

const Home: NextPage = () => {
  return (
    <div className={styles.indexContainer}>
      <h1>Runosaari 2022</h1>
      <Lead />
      <Performers />
      <Program />
      <Info />
    </div>
  );
};

export default Home;
