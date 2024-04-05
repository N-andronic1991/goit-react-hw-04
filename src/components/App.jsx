import { useEffect, useState } from 'react';
import Loader from './lodder/Loader';
import SearchBar from './searchBar/SearchBar';
import { Toaster } from 'react-hot-toast';
import ImageGallery from './imageGallery/ImageGallery';
import ErrorMessage from './errorMessage/ErrorMessage';
import LoadMoreBtn from './loadMoreBtn/LoadMoreBtn';
import { requestImagesByQuery } from '../services/api';
import ImageModal from './imageModal/ImageModal';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImgUrl, setSelectedImgUrl] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;

    async function fetchImages() {
      try {
        setIsError(false);
        setLoading(true);
        const data = await requestImagesByQuery(searchQuery, page);
        setPhotos(prevPhotos => {
          return [...prevPhotos, ...data.results];
        });
        setShowBtn(data.total_pages > page);
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
    setPhotos([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = imageUrl => {
    setShowModal(true);
    setSelectedImgUrl(imageUrl);
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedImgUrl(null);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Toaster
        position="top-right"
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
      {photos && <ImageGallery photos={photos} onShowModal={openModal} />}
      {photos.length !== 0 && showBtn && <LoadMoreBtn onLoadMore={loadMore} />}
      {selectedImgUrl && (
        <ImageModal
          showModal={showModal}
          setShowModal={setShowModal}
          onClose={closeModal}
          imageUrl={selectedImgUrl}
        />
      )}
    </>
  );
};

export default App;
