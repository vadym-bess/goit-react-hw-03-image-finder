import React, { Component } from 'react';
import { fetchPictures } from '../Servises/api';
import './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

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
    this.setState({ query: value, page: 1, pictures: [], loadMore: null });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  

  componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ status: 'loading' });

      fetchPictures(query, page)
        .then(event =>
          this.setState(prevState => ({
            pictures: [...prevState.pictures, ...event.hits],
            status: 'idle',
            loadMore: 12 - event.hits.length,
          }))
        )
        .catch(error => console.log(error));
    }
  }

  render() {
      const { pictures, status, showModal, largeImageUrl, loadMore } = this.state;

    return(
    
    <div className="App">
        <Searchbar onSubmit={this.searchResult}/>
        {showModal && (<Modal imgUrl={largeImageUrl} onClose={this.toggleModal}/>)}
        <ImageGallery pictures={pictures} onClick={this.getLargeImgUrl}/>
        {status === 'loading' && <Loader/>}
        {loadMore === 0 && <Button onClick={this.handleLoadMore}/>}
        
    </div>
  );
  }
};
