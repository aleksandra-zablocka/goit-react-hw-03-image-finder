import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { Component } from 'react';

const API_KEY = '36802043-6369625f376675122720202cd';

export class App extends Component {
  state = {
    images: [],
    inputSearch: '',
    isLoading: false,
    isModalOpen: false,
  };

  async componentDidMount() {
    this.fetchImages();
  }

  // async componentDidUpdate(prevState, prevProps) {
  //   const {inputSearch, images} = this.state;
  //   if (prevState.inputSearch !== inputSearch && inputSearch.length > 0) {
  //    await this.fetchImages();
  //   }

  //   if (inputSearch.length === 0 && images.length > 0) {this.setState({images: []})}
  // }

  fetchImages = async () => {
    const { inputSearch } = this.state;
    this.setState({ isLoading: true });
    try {
      const response = await fetch(
        `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&lang=eng&q=${inputSearch}&image_type=photo&orientation=horizontal&per_page=12`
      );

      if (!response.ok) {
        throw new Error('Network response failed');
      }

      const data = await response.json();

      this.setState(prevState => ({ ...prevState, images: data.hits }));
    } catch (error) {
      console.log('error', error);
      return error;
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchImages();
  };

  handleChange = e => {
    const { value, name } = e.target;
    // this.setState(prevState => ({ ...prevState, [name]: value }));
    this.setState({ [name]: value });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const { inputSearch, images, isLoading, isModalOpen } = this.state;
    return (
      <div>
        <Searchbar
          inputSearch={inputSearch}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        
        {isLoading ? (
          <Loader />
        ) : (
          <ImageGallery images={images} toggleModal={this.toggleModal} />
        )}
        <Button />
        <Modal images={images} isModalOpen={isModalOpen} toggleModal={this.toggleModal} />
      </div>
    );
  }
}

export default App;
