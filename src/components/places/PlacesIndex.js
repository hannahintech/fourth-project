import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Navbar, Button } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

import Auth from '../../lib/Auth';

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
      <section>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <h3>{'Public Place Notes'}</h3>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Text pullRight>
              <LinkContainer to={`/users/${Auth.getPayload().userId}`}>
                { Auth.isAuthenticated() && <Button className="landing-page-button" bsStyle="info">My Place Notes Profile</Button>}
              </LinkContainer>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <Row>
            {this.state.places.map(place => {
              return(
                <Col md={4} key={place.id}>
                  <Link to={`/places/${place.id}`}>
                    <Image src={place.image || 'https://static.pexels.com/photos/67211/field-away-summer-sky-67211.jpeg'} responsive />
                  </Link>
                  <p>{place.name}</p>
                </Col>
              );
            })}
          </Row>
        </Grid>
      </section>
    );
  }
}

export default PlacesIndex;
