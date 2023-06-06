import ModalStyled from "./ModalStyled";

const Modal = ({ needModal, title, modalContent, onClose }) => {
  const closeHandler = () => {
    onClose();
  };

  const contentClickHandler = (e) => {
    e.stopPropagation();
  }

  return needModal ? (
    <ModalStyled onClick={closeHandler}>
      <div className="modal-content" onClick={contentClickHandler}>
        <h3>{title}</h3>
        {modalContent}
      </div>
    </ModalStyled>
  ) : null;
};

export default Modal;
