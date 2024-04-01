import toast from 'react-hot-toast';

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
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
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
