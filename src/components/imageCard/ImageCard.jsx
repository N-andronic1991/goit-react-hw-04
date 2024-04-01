import css from './ImageCard.module.css';
const ImageCard = ({ urls, alt_description }) => {
  return (
    <div className={css.imgThumb}>
      <img src={urls.small} alt={alt_description} />
    </div>
  );
};
export default ImageCard;
