import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

// 'idle' - простой
// 'pending' - ожидается
// 'resolved' - віполнился ок
// 'rejected' - отклонено

export default class ImageGallery extends Component {
  state = {
    photo: null,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.photoName;
    const nextName = this.props.photoName;

    if (prevName !== nextName) {
      // console.log('изменилось фото');
      // console.log('prevProps.photoName', prevName);
      // console.log('this.props.photoName', nextName);
      this.setState({ status: 'pending' });

      fetch(
        `https://pixabay.com/api/?key=22354412-39f12e0c13d349d19862b3301&q=${nextName}&image_type=photo&per_page=12&page=1`,
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error(`Нет такого имени ${nextName}`));
        })
        .then(photo => this.setState({ photo, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { photo, error, status } = this.state;
    // const { photoName } = this.props;

    if (status === 'idle') {
      return <div>Ведите название!!!</div>;
    }

    if (status === 'pending') {
      return <h1> Downloading... </h1>;
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <ImageGalleryItem
          url={photo.hits[1].webformatURL}
          key={photo.id}
          tags={photo.hits[1].tags}
        />
      );
    }

    // return (
    //   <ul className="ImageGallery">
    //     {error && <h1>{error.message}</h1>}
    //     {loading && <h1> Downloading... </h1>}
    //     {!photoName && <div>Ведите название!!!</div>}
    //     {/* {photo && <img src={photo.hits[0].webformatURL} alt={photo.tags} width="300"></img>} */}

    //     {photo && (
    //       <ImageGalleryItem
    //         url={photo.hits[1].webformatURL}
    //         key={photo.id}
    //         tags={photo.hits[1].tags}
    //       />
    //     )}
    //   </ul>
    // );
  }
}
// { this.state.photo && }
