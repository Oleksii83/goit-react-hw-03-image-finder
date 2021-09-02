import React from 'react';

import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, tags, modalUrl, onClick }) => {
  return (
    <li className={s.ImageGalleryItem} onClick={() => onClick(modalUrl)}>
      <img src={url} alt={tags} className={s.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
