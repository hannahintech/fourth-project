import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import GoogleMap from '../maps/GoogleMap';

// import Auth from '../../lib/Auth';

class PlacesShow extends React.Component {
  state = {
    place: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/places/${this.props.match.params.id}`)
      .then(res => this.setState({ place: res.data }))
      .catch(err => console.log(err));
  }

  deletePlace = () => {
    Axios
      .delete(`/api/places/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    console.log('loaded');

    return (
      <div className="row">
        <div className="col-md-6">
          <img src={this.state.place.image} className="img-responsive" />
        </div>
        <div className="col-md-6">
          {this.state.place.location && <GoogleMap className="google-map" center={this.state.place.location} />}
        </div>
        <div className="col-md-6">
          <h3>{this.state.place.name}</h3>
          <Link to={`/places/${this.state.place.id}/edit`} className="standard-button">
            <i className="fa fa-pencil" aria-hidden="true"></i>Edit
          </Link>
          {' '}
          <button className="main-button" onClick={this.deletePlace}>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete
          </button>
        </div>
      </div>
    );
  }
}

export default PlacesShow;
