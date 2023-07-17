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
    per_page: 12,
    inputSearch: '',
    isLoading: false,
  };

  async componentDidMount() {
    // if (this.state.inputSearch !== '') {
    //   this.fetchImages();
    // }
    this.fetchImages();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.per_page !== this.state.per_page) {
      this.fetchImages();
    }
  }

  async componentWillUnmount() {
    this.setState({ images: [] });
  }

  fetchImages = async () => {
    const { inputSearch, per_page } = this.state;
    this.setState({ isLoading: true });
    try {
      const response = await fetch(
        `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&lang=eng&q=${inputSearch}&image_type=photo&orientation=horizontal&per_page=${per_page}`
        // `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&lang=eng&q=${inputSearch}&image_type=photo&orientation=horizontal`
      );

      if (!response.ok) {
        throw new Error('Network response failed');
      }

      const data = await response.json();

      this.setState(prevState => ({ ...prevState, images: data.hits }));

      console.log(this.state.images);
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
    this.setState({ [name]: value });
  };

  loadMore = () => {
    this.setState(prevState => ({
      ...prevState,
      per_page: prevState.per_page + 12,
    }));
  };

  render() {
    const { inputSearch, images, isLoading, isModalOpen, per_page } =
      this.state;
    return (
      <div>
        <h1>{per_page}</h1>
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
        <Button per_page={per_page} loadMore={this.loadMore} />
      </div>
    );
  }
}

export default App;
