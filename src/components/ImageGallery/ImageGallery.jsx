import css from './ImageGallery.module.css';
import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { images, toggleModal } = this.props;

    return (
      <div>
        {images.length > 0 ? (
          <ul className={css.imageGallery}>
            {images.map(el => (
              <ImageGalleryItem
                key={el.id}
                src={el.webformatURL}
                alt={el.tags}
                toggleModal={toggleModal}
              />
            ))}
          </ul>
        ) : (
          <div className={css.noImages}>No images found</div>
        )}
      </div>
    );
  }
}

export default ImageGallery;
