import React, {Component} from 'react';
import css from  './searchbar.module.css';


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

      return (<header className={css.Searchbar}>
        <form onSubmit={this.handleSubmit}
          className={css.Search}>
                      <button
            className={css.SearchFormButton}
                          type="submit">
                   
            <span className={css.SearchFormButtonLabel}>Search</span>
                     </button>

               <input
                        name="query"
            className={css.SearchFormInput}
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