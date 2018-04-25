import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
					autoFocus
          onChange={event => this.onInputChange(event.target.value)}
          onKeyPress={event => this.onKeyPress(event.key)}
          type="text"
          value={this.state.term}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
  }

  onKeyPress(key) {
    if (key == 'Enter') {
      this.props.onSearchTermChange(this.state.term);
      this.setState({ term: '' });
    }
  }
}

export default SearchBar;
