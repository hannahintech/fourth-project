/* global google */
import React from 'react';

class SearchBox extends React.Component {

  componentDidMount() {
    this.searchBox = new google.maps.places.SearchBox(this.element);

    this.searchBox.addListener('place_changed', () => {
      const place = this.searchBox.getPlace();

      console.log(place);
    });
  }

  render() {
    return (
      <form>
        <input
          type="search"
          placeholder="search..."
          ref={(element) => this.element = element}
        />
        <input type="submit" value="search"/>
      </form>
    );
  }

}

export default SearchBox;
