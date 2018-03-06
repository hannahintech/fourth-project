import React from 'react';
import Axios from 'axios';
import { Grid, Row, Col, Button, Thumbnail, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Auth from '../../lib/Auth';

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
      .then(() => this.props.history.push(`/users/${Auth.getPayload().userId}`))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <section>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <h4>{this.state.place.name}</h4>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Text pullRight>
              <Button bsStyle="danger" onClick={this.deletePlace}>
                Delete
              </Button>
            </Navbar.Text>
            <Navbar.Text pullRight>
              <LinkContainer to={`/places/${this.state.place.id}/edit`}>
                <Button bsStyle="info">Edit</Button>
              </LinkContainer>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={this.state.place.image || 'https://static.pexels.com/photos/67211/field-away-summer-sky-67211.jpeg'} alt="242x200">
              </Thumbnail>
            </Col>
            <Col>
              <h4>Notes</h4>
              {this.state.place.notes &&
              <p>{this.state.place.notes}</p>
              }
              {!this.state.place.notes &&
              <p>{'There aren\'t any notes here yet!'}</p>
              }
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              {this.state.place.location && <GoogleMap center={this.state.place.location} />}
            </Col>
          </Row>
        </Grid>
      </section>

    );
  }
}

export default PlacesShow;
