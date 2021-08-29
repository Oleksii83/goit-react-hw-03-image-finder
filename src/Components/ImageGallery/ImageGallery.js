import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.photoName !== this.props.photoName) {
      console.log('изменилось фото');
      console.log('prevProps.photoName', prevProps.photoName);
      console.log('this.props.photoName', this.props.photoName);
    }
  }
  render() {
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem />
        <p>{this.props.photoName}</p>
      </ul>
    );
  }
}
// { this.state.photo && }
