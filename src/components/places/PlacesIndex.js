import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';

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
      <Grid>
        <Row className="show-grid">
          <Col md={2}>
            <Link to="/places/new" className="main-button">
              <i className="fa fa-plus" aria-hidden="true"></i>Add Place
            </Link>
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

export default PlacesIndex;
