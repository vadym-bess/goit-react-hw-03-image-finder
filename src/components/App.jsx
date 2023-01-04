import React, { Component } from 'react';
//import { fetchPictures } from 'services/gallery-api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';


export class App extends Component {
  state = {
    pictures: [],
    status: 'idle',
    showModal: false,
    largeImageUrl: '',
  };

  getLargeImgUrl = imgUrl => {
    this.setState({ largeImageUrl: imgUrl });
    this.toggleModal();
  };

   toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  searchResult = value => {
    this.setState({ status: 'loading' });

    fetchPictures(value).then(event =>
      this.setState({
        pictures: event.hits,
        status: 'idle',
      })
    );
  };

  render() {
      const { pictures, status, showModal, largeImageUrl } = this.state;

    return(
    
    <>
        <Searchbar onSubmit={this.searchResult} />
        {status === 'loading' && <Loader />}
      <ImageGallery pictures={pictures} onClick={this.getLargeImgUrl} />
    </>
  );
  }
};
