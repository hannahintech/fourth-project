import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import Auth from '../../lib/Auth';

class UsersShow extends React.Component {

  state = {
    user: {},
    places: []
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.setState({ user: res.data.user, places: res.data.places }, () => {
        console.log(this.state);
      }))
      .catch(err => console.log(err));
  }


  render(){
    return(
      <Grid>
        <Row className="show-grid">
          <Col md={3}>
            <h3 className="user-profile-name">{`${this.state.user.username}'s place notes`}</h3>
          </Col>
        </Row>
        <Row className="show-grid">
          {this.state.places.map(place => {
            return(
              <Col md={4} key={place.id}>
                <Link to={`/places/${place.id}`}>
                  <Image src={place.image} responsive />
                </Link>
                <p>{place.name}</p>
              </Col>
            );
          })}
        </Row>
      </Grid>
    );
  }
}

export default UsersShow;
