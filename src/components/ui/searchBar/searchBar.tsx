import styles from './searchBar.module.scss';
import searchIcon from '../../../assets/magnifyingGlass.svg';

export default function SearchBar() {
  return (
    <form
      className={styles.search}
      role="search"
      onSubmit={(event) => event.preventDefault()}
    >
      <label htmlFor="search" className="srOnly">
        Buscar produtos
      </label>

      <input
        id="search"
        name="search"
        type="search"
        placeholder="O que você está buscando?"
        className={styles.input}
        autoComplete="off"
      />

      <button type="submit" className={styles.button} aria-label="Buscar">
        <img src={searchIcon} alt="" width={28} height={28} />
      </button>
    </form>
  );
}