import React from 'react';
// import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

// import Auth from '../../lib/Auth';

class LandingPage extends React.Component {
  render() {
    return(
      <Grid className="landing-page-grid">
        <Row>
          <Col md={4}>
            <div className="landing-page-image"></div>
          </Col>
          <Col md={6}>
            <h3>{'This is place notes. You can save your notes about places you\'ve visited, and plan your journey to new places!'}</h3>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <Link to="/login">
              { !Auth.isAuthenticated() && <Button className="landing-page-button" bsStyle="info" bsSize="large">Login</Button>}
            </Link>
            <Link to="/register">
              { !Auth.isAuthenticated() && <Button className="landing-page-button" bsStyle="info" bsSize="large">Register</Button>}
            </Link>
          </Col>
        </Row> */}
      </Grid>
    );
  }
}

export default LandingPage;
