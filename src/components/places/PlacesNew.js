import React from 'react';
import Axios from 'axios';

import PlacesForm from './PlacesForm';

import Auth from '../../lib/Auth';

class PlacesNew extends React.Component {
  state = {
    place: {
      name: '',
      image: '',
      location: {
        lat: null,
        lng: null
      },
      notes: '',
      publicPlace: false
    },
    errors: {}
  };

  handleInputChange = ({ target: { name, value } }) => {
    const place = Object.assign({}, this.state.place, { [name]: value });
    const errors = Object.assign({}, this.state.errors, { [name]: '' });
    this.setState({ place, errors });
  }

  handleLocationChange = (data) => {
    const location = {
      lat: data.geometry.location.lat(),
      lng: data.geometry.location.lng()
    };

    const place = Object.assign({}, this.state.place, { location });
    this.setState({ place });
  }

  handleImageChange = (result) => {
    const place = Object.assign({}, this.state.place, { image: result.filesUploaded[0].url});
    this.setState({ place }, () => {
      console.log(place.image);
    });
  }

  handleCheckboxChange = () => {
    this.setState((state) => {
      state.place.publicPlace = !state.place.publicPlace;
      console.log(state);
      return state;
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/places', this.state.place, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` } })
      .then((res) => {
        console.log(res);
        this.props.history.push(`/users/${Auth.getPayload().userId}`);
      })
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    return (
      <PlacesForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleImageChange={this.handleImageChange}
        handleInputChange={this.handleInputChange}
        handleCheckboxChange={this.handleCheckboxChange}
        handleLocationChange={this.handleLocationChange}
        place={this.state.place}
        errors={this.state.errors}
      />
    );
  }
}

export default PlacesNew;
