import React from 'react';

const ImageGalleryItem = ({ url, tags }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={url} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
