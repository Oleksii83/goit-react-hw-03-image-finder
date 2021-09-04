import { Component } from 'react';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
  state = {
    value: '',
  };

  handleNameChange = event => {
    this.setState({ value: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.value.trim() === '') {
      toast('Enter name photo');
      return;
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={this.state.value}
            onChange={this.handleNameChange}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
