import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import { Component } from 'react';

const API_KEY = '36802043-6369625f376675122720202cd';

export class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    inputSearch: '',
    isLoading: false,
  };

  async componentDidMount() {
    if (this.state.inputSearch !== '') {
      this.fetchImages();
    }
    // this.fetchImages();
  }

  // async componentDidUpdate(prevProps, prevState) {
  //   if (prevState.per_page !== this.state.per_page) {
  //     this.fetchImages();
  //   }
  // }

  // async componentWillUnmount() {
  //   this.setState({ images: [] });
  // }

  fetchImages = async () => {
    const { inputSearch, currentPage } = this.state;
    this.setState({ isLoading: true });
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&lang=eng&q=${inputSearch}&image_type=photo&orientation=horizontal&per_page=12&page=${currentPage}`
      );

      if (!response.ok) {
        throw new Error('Network response failed');
      }

      const data = await response.json();

      this.setState(prevState => ({
        // ...prevState,
        images: [...prevState.images, ...data.hits],
        currentPage: prevState.currentPage + 1,
      }));
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
    this.fetchImages();
  };

  render() {
    const { inputSearch, images, isLoading, currentPage } = this.state;
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
        <Button currentPage={currentPage} loadMore={this.loadMore} />
      </div>
    );
  }
}

export default App;
