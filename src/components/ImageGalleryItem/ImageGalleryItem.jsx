import css from './ImageGalleryItem.module.css';
import { Component } from 'react';
import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {

  // handleClick = () => {
  //   this.props.toggleModal();
  // };

  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  

  render() {
    const { src, alt } = this.props;

    return (
      <li className={css.imageGalleryItem}>
        <img className={css.imageGalleryItemImage} src={src} alt={alt} onClick={this.toggleModal}/>

        {this.state.isModalOpen && (
          <Modal
            src={src}
            alt={alt}
            toggleModal={this.toggleModal}
          />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;