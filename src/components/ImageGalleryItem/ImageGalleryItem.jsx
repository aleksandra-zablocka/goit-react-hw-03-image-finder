import css from './ImageGalleryItem.module.css';
import { Component } from 'react';

class ImageGalleryItem extends Component {

  handleClick = () => {
    this.props.toggleModal();
  };

  render() {
    const { src, alt } = this.props;

    return (
      <li className={css.imageGalleryItem}>
        <img className={css.imageGalleryItemImage} src={src} alt={alt} onClick={this.handleClick}/>
      </li>
    );
  }
}

export default ImageGalleryItem;
