import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// import Auth from '../../lib/Auth';

class PlacesIndex extends React.Component {
  state = {
    places: []
  }

  componentWillMount() {
    Axios
      .get('/api/places')
      .then(res => this.setState({ places: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Link to="/places/new" className="main-button">
              <i className="fa fa-plus" aria-hidden="true"></i>Add Place
            </Link>
          </div>
          {this.state.places.map(place => {
            return(
              <div key={place.id} className="col-md-4 col-sm-6 col-xs-12">
                <Link to={`/places/${place.id}`}>
                  <img src={place.image} className="img-responsive" />
                </Link>
                <p>{place.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PlacesIndex;
