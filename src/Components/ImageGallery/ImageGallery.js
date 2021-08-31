import { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import API from '../services/gallery-api';

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
      this.setState({ photo: null, status: 'pending' });

      API.getPhoto(nextName)
        .then(photo => this.setState({ photo, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { photo, error, status } = this.state;
    const { photoName } = this.props;
    // const { photoName } = this.props;

    if (status === 'idle') {
      return <div>Ведите название!!!</div>;
    }

    if (status === 'pending') {
      return <Loader />;
      // <h1> Downloading... </h1>;
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <ul className={s.ImageGallery}>
          {photo.hits &&
            photo.hits.map(image => (
              <ImageGalleryItem url={image.webformatURL} key={image.id} tags={image.tags} />
            ))}
        </ul>
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
