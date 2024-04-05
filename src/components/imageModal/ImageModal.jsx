import Modal from 'react-modal';
import css from './ImageModal.module.css';

const ImageModal = ({ showModal, setShowModal, onClose, imageUrl }) => {
  Modal.setAppElement('#root');

  const customStyles = {
    overlay: {
      backgroundColor: ' rgb(0, 0, 0, .8)',
    },
    content: {
      width: '60%',
      height: '80vh',
      display: 'flex',
      justifyContent: 'stretch',
      alignItems: 'center',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      overflow: 'hidden',
    },
  };
  return (
    <div>
      <Modal
        isOpen={showModal}
        style={customStyles}
        onRequestClose={() => setShowModal(false)}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <button className={css.modalBtn} onClick={onClose}>
          x
        </button>
        <div>
          <img className={css.imageModal} src={imageUrl} alt="Large image" />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
