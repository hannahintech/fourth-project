import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';

import GoogleMap from '../maps/GoogleMap';

class PlacesShow extends React.Component {
  state = {
    place: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/places/${this.props.match.params.id}`)
      .then(res => this.setState({ place: res.data }, () => {
        console.log(this.state);
      }))
      .catch(err => console.log(err));
  }

  deletePlace = () => {
    Axios
      .delete(`/api/places/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail src={this.state.place.image} alt="242x200">
              <h3>{this.state.place.name}</h3>
              <Link to={`/places/${this.state.place.id}/edit`}>
                <Button bsStyle="success">Edit</Button>
              </Link>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            {this.state.place.location && <GoogleMap className="google-map" center={this.state.place.location} />}
          </Col>
        </Row>
        <Row>
          <Col mdOffset={10}>
            <Button bsStyle="danger" onClick={this.deletePlace}>
              Delete
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default PlacesShow;
