import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, tags }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img src={url} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
