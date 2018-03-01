import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Auth from '../../lib/Auth';

const MyNavbar = ({ history }) => {
  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return(
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/places">Place Notes</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1}>
            { Auth.isAuthenticated() &&
              <Link to={`/users/${Auth.getPayload().userId}`}>Profile</Link>
            }
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1}>
            { !Auth.isAuthenticated() &&
              <Link to="/login">Login</Link>
            }
          </NavItem>
          <NavItem eventKey={2}>
            { !Auth.isAuthenticated() &&
              <Link to="/register">Register</Link>
            }
          </NavItem>
          <NavItem eventKey={3}>
            { Auth.isAuthenticated() &&
              <a href="#" onClick={logout}>Logout</a>
            }
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(MyNavbar);
