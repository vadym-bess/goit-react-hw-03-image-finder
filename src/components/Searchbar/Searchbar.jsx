import React, {Component} from 'react';
import './searchbar.modale.css';


export class Searchbar extends Component {
    state = {
        search: '',
    };

    handleSubmit = (event) => {
    event.preventDefault();
    const { search } = this.state;
    this.props.onSubmit(search);
    this.setState({
      search: '',
    });
  };
    
    searchResult = (event) => {
    this.setState({
      search: event.currentTarget.value,
    });
  };

    render() {
    const { search } = this.state;

       return ( <header className="Searchbar">
           <form onSubmit={this.handleSubmit}
                 className="Search">
                      <button
                          className="SearchForm-button"
                          type="submit">
                   
                          <span className="SearchForm-button-label">Search</span>
                     </button>

               <input
                        name="query"
                        className="SearchForm-input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        value={search}
                        onChange={this.searchResult}
                     />
                 </form>
              </header>
)
   }
    
}