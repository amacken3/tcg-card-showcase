import styles from "./SearchBar.module.css";

function SearchBar({ searchTerm, onSearchChange }) {
   return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="search">
        Search Cards
      </label>
      <input
        className={styles.input}
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBar;