import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    photoName: '',
    loading: false,
  };

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   fetch(
  //     'https://pixabay.com/api/?key=22354412-39f12e0c13d349d19862b3301&q=yellow+flowers&image_type=photo',
  //   )
  //     .then(res => res.json())
  //     .then(photo => this.setState({ photo }))
  //     .finally(() => this.setState({ loading: false }));
  // }
  onSubmit = photoName => {
    this.setState({ photoName });
    console.log(photoName);
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.loading && <h1> Downloading... </h1>}
        <ImageGallery photoName={this.state.photoName} />

        <ToastContainer autoClose={3000} position="top-left" />
      </>
    );
  }
}

export default App;
// { this.state.photo &&}
