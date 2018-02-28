import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

class LandingPage extends React.Component {
  render() {
    return(
      <section>
        {/* { !Auth.isAuthenticated() && <Link to="/login">Login</Link>}
        { !Auth.isAuthenticated() && <Link to="/register">Register</Link> } */}
      </section>
    );
  }
}

export default LandingPage;
