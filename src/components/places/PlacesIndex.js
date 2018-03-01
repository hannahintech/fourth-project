import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap';

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
        <Row>
          <Col mdOffset={11}>
            <Link to="/places/new" className="main-button">
              <Button bsStyle="info">Add Place</Button>
            </Link>
          </Col>
        </Row>
        <Row>
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
