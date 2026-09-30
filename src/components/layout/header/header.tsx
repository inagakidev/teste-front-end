import TopBar from '../topBar/topBar';
import styles from './header.module.scss';
import logoEconverse from '../../../assets/logo.svg';
import SearchBar from '../../ui/searchBar/searchBar';
import HeaderActions from './headerActions';
import CategoryMenu from './categoryMenu';

export default function Header() {
  return (
    <header className={styles.header}>
      <TopBar />

      <div className={styles.main}>
        <a href="/" aria-label="Página inicial Econverse">
          <img src={logoEconverse} alt="Econverse" width={139} height={41} />
        </a>
        <SearchBar />
        <HeaderActions />
      </div>
      <CategoryMenu />
    </header>
  );
}
