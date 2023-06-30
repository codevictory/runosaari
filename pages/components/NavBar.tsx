import Link from 'next/link';
import styles from '../../styles/NavBar.module.scss';

const NavBar = () => {
  return (
    <>
      <div className={styles.navBarContainer}>
        <nav className={styles.navBar}>
          <Link href='/'>
            <a className={styles.navBarLink}>Etusivu</a>
          </Link>
          <Link href='/program'>
            <a className={styles.navBarLink}>Ohjelma</a>
          </Link>
          <Link href='/performers'>
            <a className={styles.navBarLink}>Esiintyjät</a>
          </Link>
          {/* // No workshops on 2023
          <Link href='/workshops'>
            <a className={styles.navBarLink}>Työpajat</a>
          </Link> */}
          <Link href='/info'>
            <a className={styles.navBarLink}>Info</a>
          </Link>
          <Link href='/safety'>
            <a className={styles.navBarLink}>Turvallisuus</a>
          </Link>
          <Link href='/archive'>
            <a className={styles.navBarLink}>Arkisto</a>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
