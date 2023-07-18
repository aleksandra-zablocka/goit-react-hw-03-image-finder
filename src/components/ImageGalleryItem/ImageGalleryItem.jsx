import css from './ImageGalleryItem.module.css';
import { Component } from 'react';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
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
    const { src, alt, largeImageURL } = this.props;

    return (
      <li className={css.imageGalleryItem}>
        <img
          className={css.imageGalleryItemImage}
          src={src}
          alt={alt}
          onClick={this.toggleModal}
        />
        {this.state.isModalOpen && (
          <Modal src={largeImageURL} alt={alt} toggleModal={this.toggleModal} />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  largeImageURL: PropTypes.string,
};

export default ImageGalleryItem;
