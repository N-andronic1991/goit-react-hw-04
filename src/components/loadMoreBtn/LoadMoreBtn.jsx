import css from './LoadMoreBtn.module.css';
import PropTypes from 'prop-types';
const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;

LoadMoreBtn.proptypes = {
  onLoadMore: PropTypes.func,
};
