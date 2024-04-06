import PropTypes from 'prop-types';

const ImageCard = ({ urls, alt_description, onShowModal }) => {
  return (
    <div>
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
  urls: PropTypes.exact({
    small: PropTypes.string.isRequired,
    regular: PropTypes.string.isRequired,
  }),
  alt_description: PropTypes.string.isRequired,
  onShowModal: PropTypes.func.isRequired,
};
