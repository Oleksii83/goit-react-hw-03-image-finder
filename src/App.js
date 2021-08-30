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

  onSubmit = photoName => {
    this.setState({ photoName });
    console.log(photoName);
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {/* {this.state.loading && <h1> Downloading... </h1>} */}
        <ImageGallery photoName={this.state.photoName} />

        <ToastContainer autoClose={3000} position="top-left" />
      </>
    );
  }
}

export default App;
// { this.state.photo &&}
