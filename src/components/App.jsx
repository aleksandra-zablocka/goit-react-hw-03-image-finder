import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export const App = () => {
  return (
    <div>
      <Searchbar />
      <ImageGallery />
      <ImageGalleryItem />
      <Loader />
      <Button />
      <Modal />
    </div>
  );
};
