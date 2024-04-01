import { useEffect, useState } from 'react';
import Loader from './lodder/Loader';
import SearchBar from './searchBar/SearchBar';
import { Toaster } from 'react-hot-toast';
import ImageGallery from './imageGallery/ImageGallery';
import ErrorMessage from './errorMessage/ErrorMessage';
import LoadMoreBtn from './loadMoreBtn/LoadMoreBtn';
import { requestImagesByQuery } from '../services/api';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  useEffect(() => {
    if (searchQuery.trim().length === 0) return;

    async function fetchImages() {
      try {
        setIsError(false);
        setLoading(true);
        const data = await requestImagesByQuery(searchQuery, page);
        // setPhotos(data.results);
        if (page !== data.total_pages) {
          loadMore;
        }

        setPhotos(prevPhotos => {
          return [...prevPhotos, ...data.results];
        });
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [searchQuery, page]);

  const handleSearch = searchTerm => {
    setSearchQuery(searchTerm);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Toaster
        position="	top-center"
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      {loading && <Loader />}
      {isError && <ErrorMessage />}
      {photos && <ImageGallery photos={photos} />}
      {photos.length !== 0 && <LoadMoreBtn onLoadMore={loadMore} />}
    </>
  );
};

export default App;
