function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div>
        <label htmlFor="search">Search Cards</label>
        <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={onSearchChange}
        />
    </div>
  );
}

export default SearchBar;