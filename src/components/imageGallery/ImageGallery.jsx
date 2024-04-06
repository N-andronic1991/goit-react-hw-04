import { useEffect, useRef } from 'react';
import ImageCard from '../imageCard/ImageCard';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ photos, onShowModal }) => {
  const endOfPhotosRef = useRef(null);

  useEffect(() => {
    if (endOfPhotosRef.current) {
      endOfPhotosRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [photos]);
  return (
    <ul className={css.imageList}>
      {Array.isArray(photos) &&
        photos.map(photo => {
          return (
            <li className={css.imageListItem} key={photo.id}>
              <ImageCard {...photo} onShowModal={onShowModal} />
            </li>
          );
        })}
      <div ref={endOfPhotosRef}></div>
    </ul>
  );
};
export default ImageGallery;

ImageGallery.proptypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onShowModal: PropTypes.func.isRequired,
};
