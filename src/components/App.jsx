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
    page: 1,
    query: '',
    loadMore: null,
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

  componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ status: 'loading' });

      fetchPictures(query, page)
        .then(e =>
          this.setState(prevState => ({
            pictures: [...prevState.pictures, ...e.hits],
            status: 'idle',
            loadMore: 12 - e.hits.length,
          }))
        )
        .catch(error => console.log(error));
    }
  }

  render() {
      const { pictures, status, showModal, largeImageUrl, loadMore } = this.state;

    return(
    
    <>
        <Searchbar onSubmit={this.searchResult} />
        {status === 'loading' && <Loader />}
        <ImageGallery pictures={pictures} onClick={this.getLargeImgUrl} />
        {loadMore === 0 && <Button onClick={this.handleLoadMore} />}
    </>
  );
  }
};
