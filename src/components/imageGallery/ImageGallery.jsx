import ImageCard from '../imageCard/ImageCard';
import css from './ImageGallery.module.css';
const ImageGallery = ({ photos }) => {
  return (
    <ul className={css.list}>
      {Array.isArray(photos) &&
        photos.map(photo => {
          return (
            <li className={css.listItem} key={photo.id}>
              <ImageCard {...photo} />
            </li>
          );
        })}
    </ul>
  );
};
export default ImageGallery;
