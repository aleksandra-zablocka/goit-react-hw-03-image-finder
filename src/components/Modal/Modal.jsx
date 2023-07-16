import css from './Modal.module.css';
import { Component } from 'react';

class Modal extends Component {
  // //   handleOpenModal = () => {
  // //     this.setState({ isModalOpen: true });
  // //   };

  // //   handleCloseModal = () => {
  // //     this.setState({ isModalOpen: false });
  // //   };

  // toggleModal = () => {
  //   this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  // };

  render() {
    const { images, isModalOpen, toggleModal } = this.props;
    return (
      <div>
        {isModalOpen && (
          <div className={css.overlay}>
            <div className={css.modal}>
              <img src={images.webformatURL} alt={images.tags} />
              <button className={css.closeButton} type="button" onClick={toggleModal}>
                Close X
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Modal;
