import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';


export const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ul className="gallery">
      <ImageGalleryItem onClickImg={onClick} pictures={pictures} />
    </ul>
  );
};