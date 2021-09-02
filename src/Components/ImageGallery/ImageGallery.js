import { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import API from '../services/gallery-api';
import { toast } from 'react-toastify';

// 'idle' - простой
// 'pending' - ожидается
// 'resolved' - віполнился ок
// 'rejected' - отклонено

export default class ImageGallery extends Component {
  state = {
    photo: null,
    error: null,
    status: 'idle',
    page: 1,
    showModal: false,
    modalUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.photoName;
    const nextName = this.props.photoName;

    if (prevName !== nextName) {
      // console.log('изменилось фото');
      // console.log('prevProps.photoName', prevName);
      // console.log('this.props.photoName', nextName);
      this.setState({ photo: null, status: 'pending', page: 1 });

      API.getPhoto(nextName, prevName)
        .then(photo => this.setState({ photo, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  //----------------------------------------------------------------------------------

  componentDidPage(prevProps, prevState) {
    const prevName = prevProps.photoName;
    const nextName = this.props.photoName;

    this.setState({ status: 'pending' });

    API.getPhoto(nextName, prevName)
      .then(photo => {
        if (photo.hits.length === 0) {
          toast.warning(`No image`);
          return;
        }
        this.setState(prevState => {
          return {
            photo: [...prevState.photo, ...photo.hits],
            page: prevState.page + 1,
          };
        });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error, status: 'rejected' }))
      .finally(() => this.setState({ status: 'idle' }));
  }

  toggleModal = url => {
    this.setState(prevState => {
      return {
        showModal: !prevState.showModal,
        modalUrl: url,
      };
    });
  };

  render() {
    const { photo, error, status, showModal, modalUrl } = this.state;

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
              <ImageGalleryItem
                url={image.webformatURL}
                key={image.id}
                tags={image.tags}
                modalUrl={image.largeImageURL}
                onClick={this.toggleModal}
              />
            ))}
          {photo && <Button onClick={this.componentDidPage} />}
          {showModal && <Modal onClose={this.toggleModal} url={modalUrl}></Modal>}
        </ul>
      );
    }

    // showModal && <Modal modalImg={image.webformatURL} onClick={this.toggleModal} />;

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
