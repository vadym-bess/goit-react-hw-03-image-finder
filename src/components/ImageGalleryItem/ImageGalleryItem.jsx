import React from 'react';


export const ImageGalleryItem = ({ pictures, onClickImg }) => {
  return pictures.map(picture => {
    return (
      <li key={picture.id}>
        <img
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