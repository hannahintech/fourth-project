import React from 'react';
import Axios from 'axios';

import PlacesForm from './PlacesForm';

import Auth from '../../lib/Auth';

class PlacesEdit extends React.Component {
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

  componentDidMount() {
    Axios
      .get(`/api/places/${this.props.match.params.id}`)
      .then(res => this.setState({ place: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const place = Object.assign({}, this.state.place, { [name]: value });
    this.setState({ place });
  }

  handleCheck = () => {
    this.setState((state) => {
      state.place.publicPlace = !state.place.publicPlace;
      console.log(state);
      return state;
    });
  }

  handleLocationChange = (data) => {
    const location = {
      lat: data.geometry.location.lat(),
      lng: data.geometry.location.lng()
    };

    const place = Object.assign({}, this.state.place, { location });
    this.setState({ place }, () => console.log(this.state));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/places/${this.props.match.params.id}`, this.state.place, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` } })
      .then(res => this.props.history.push(`/places/${res.data.id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    return (
      <PlacesForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleCheck={this.handleCheck}
        handleLocationChange={this.handleLocationChange}
        place={this.state.place}
        errors={this.state.errors}
      />
    );
  }
}

export default PlacesEdit;
