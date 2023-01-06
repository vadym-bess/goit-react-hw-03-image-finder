import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ pictures, onClickImg }) => {
  return pictures.map(picture => {
    return (
      <li className={css.ImageGalleryItem} key={picture.id}>
        <img className={css.ImageGalleryItemImage}
          onClick={() => {
            onClickImg(picture.largeImageURL);
          }}
          src={picture.webformatURL}
          alt={picture.tags}
        />
      </li>
    );
  });
};