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
    pictures: null,
    error: null,
    status: 'idle',
    page: '1',
    showModal: false,
    modalUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    const { page } = this.state;
    if (prevProps.query !== query) {
      this.setState({ pictures: null, status: 'pending', page: 1 });

      // if (prevName !== nextName) {
      //   console.log('изменилось фото');
      //   console.log('prevProps.query', prevName);
      //   console.log('this.props.query', nextName);
      //   this.setState({ pictures: null, status: 'pending', page: 1 });

      API.getPhoto(query, page)
        .then(pictures => this.setState({ pictures, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  //----------------------------------------------------------------------------------
  getNextPagePictures = () => {
    const { page } = this.state;
    const { query } = this.props;

    this.setState({ status: 'pending' });

    API.getPhoto(query, page)
      .then(pictures => {
        if (pictures.hits.length === 0) {
          toast.warning(`No more pictures for "${query}" query`);
          return;
        }
        this.setState(prevState => {
          return {
            pictures: [...prevState.pictures, ...pictures.hits],
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
  };

  // getDataPage(prevProps, prevState) {
  //   const prevName = prevProps.query;
  //   const nextName = this.props.query;

  //   this.setState({ status: 'pending' });

  //   API.getpictures(nextName, prevName)
  //     .then(pictures => {
  //       if (pictures.hits.length === 0) {
  //         toast.warning(`No image`);
  //         return;
  //       }
  //       this.setState(prevState => {
  //         return {
  //           pictures: [...prevState.pictures, ...pictures.hits],
  //           page: prevState.page + 1,
  //         };
  //       });
  //       window.scrollTo({
  //         top: document.documentElement.scrollHeight,
  //         behavior: 'smooth',
  //       });
  //     })
  //     .catch(error => this.setState({ error, status: 'rejected' }));
  // }
  //----------------------------------------------------------------------------------
  toggleModal = url => {
    this.setState(prevState => {
      return {
        showModal: !prevState.showModal,
        modalUrl: url,
      };
    });
  };

  render() {
    const { pictures, error, status, showModal, modalUrl } = this.state;

    // const { query } = this.props;

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
          {pictures.hits &&
            pictures.hits.map(image => (
              <ImageGalleryItem
                url={image.webformatURL}
                key={image.id}
                tags={image.tags}
                modalUrl={image.largeImageURL}
                onClick={this.toggleModal}
              />
            ))}
          {pictures && <Button onClick={this.getNextPagePictures} />}
          {showModal && <Modal onClose={this.toggleModal} url={modalUrl}></Modal>}
        </ul>
      );
    }

    // showModal && <Modal modalImg={image.webformatURL} onClick={this.toggleModal} />;

    // return (
    //   <ul className="ImageGallery">
    //     {error && <h1>{error.message}</h1>}
    //     {loading && <h1> Downloading... </h1>}
    //     {!query && <div>Ведите название!!!</div>}
    //     {/* {pictures && <img src={pictures.hits[0].webformatURL} alt={pictures.tags} width="300"></img>} */}

    //     {pictures && (
    //       <ImageGalleryItem
    //         url={pictures.hits[1].webformatURL}
    //         key={pictures.id}
    //         tags={pictures.hits[1].tags}
    //       />
    //     )}
    //   </ul>
    // );
  }
}
// { this.state.photo && }
