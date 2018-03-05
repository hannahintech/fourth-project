import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import Auth from '../../lib/Auth';

class LandingPage extends React.Component {
  render() {
    return(
      <Grid>
        <Row>
          <Col>
            <h4>{'This is place notes. You can save your notes about places you\'ve visited, and plan your journey to new places!'}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/login">
              { !Auth.isAuthenticated() && <Button className="landing-page-button" bsStyle="info" bsSize="large">Login</Button>}
            </Link>
            <Link to="/register">
              { !Auth.isAuthenticated() && <Button className="landing-page-button" bsStyle="info" bsSize="large">Register</Button>}
            </Link>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default LandingPage;
