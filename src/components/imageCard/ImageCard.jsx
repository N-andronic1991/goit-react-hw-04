import PropTypes from 'prop-types';
import css from './ImageCard.module.css';
const ImageCard = ({ urls, alt_description, onShowModal }) => {
  return (
    <div className={css.imgThumb}>
      <img
        onClick={() => onShowModal(urls.regular)}
        src={urls.small}
        alt={alt_description}
      />
    </div>
  );
};
export default ImageCard;

ImageCard.proptypes = {
  urls: PropTypes.string,
  alt_description: PropTypes.string.isRequired,
  onShowModal: PropTypes.func.isRequired,
};
