import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, NavItem, Navbar, Image, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
      <section>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a className="user-profile-name">{`${this.state.user.username}'s place notes`}</a>
            </Navbar.Brand>
            { Auth.isAuthenticated() &&
            <Navbar.Toggle />
            }
          </Navbar.Header>
          { Auth.isAuthenticated() &&
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/places/new">
                <NavItem eventKey={1}>Add Place</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          }
        </Navbar>
        <Grid>
          <Row>
            {this.state.places.length === 0 &&
            <Col md={3}>
              <p>You dont have any places yet</p>
            </Col>}
          </Row>
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

export default UsersShow;
