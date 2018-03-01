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
        </Row>
        <Row>
          <Col xs={12} md={12}>
            {this.state.place.location && <GoogleMap center={this.state.place.location} />}
          </Col>
        </Row>
        <Row className="delete-place-show-page">
          <Col md={2}>
            <Button bsStyle="danger" onClick={this.deletePlace}>
              Delete This Place
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default PlacesShow;
