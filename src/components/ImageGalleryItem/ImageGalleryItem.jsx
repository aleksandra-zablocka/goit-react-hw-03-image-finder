import css from './ImageGalleryItem.module.css';
import { Component } from 'react';

class ImageGalleryItem extends Component {

  handleClick = () => {
    this.props.toggleModal();
  };

  render() {
    const { src, alt } = this.props;

    return (
      <li className={css.ImageGalleryItem}>
        <img className={css.ImageGalleryItemImage} src={src} alt={alt} onClick={this.handleClick}/>
      </li>
    );
  }
}

export default ImageGalleryItem;
