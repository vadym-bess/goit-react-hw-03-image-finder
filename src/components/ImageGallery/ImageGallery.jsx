import PropTypes from 'prop-types';
import React from 'react';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem onClickImg={onClick} pictures={pictures} />
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}