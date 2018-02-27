import React from 'react';
import Axios from 'axios';

import PlacesForm from './PlacesForm';

import Auth from '../../lib/Auth';

class PlacesNew extends React.Component {
  state = {
    place: {
      name: '',
      image: ''
    },
    errors: {}
  };

  handleChange = ({ target: { name, value } }) => {
    const place = Object.assign({}, this.state.place, { [name]: value });
    const errors = Object.assign({}, this.state.errors, { [name]: '' });
    this.setState({ place, errors });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/places', this.state.place, this.state.place, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` } })
      .then(() => this.props.history.push('/'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    return (
      <PlacesForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        place={this.state.place}
        errors={this.state.errors}
      />
    );
  }
}

export default PlacesNew;
