import toast from 'react-hot-toast';
import { IoSearch } from 'react-icons/io5';
import css from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const notify = () => toast('Search field cannot be empty');

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const searchTerm = form.elements.query.value;
    if (searchTerm.trim() === '') {
      notify();
      return;
    }
    onSearch(searchTerm);
  };

  return (
    <header className={css.header}>
      <form className={css.searchContainer} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <button className={css.searchBtn} type="submit">
          <IoSearch size={20} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
