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
          { Auth.isAuthenticated() && <NavItem eventKey={1}>
            <Link to={`/users/${Auth.getPayload().userId}`}>Profile</Link>
          </NavItem>}
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
        </Nav>
        <Nav pullRight>
          { !Auth.isAuthenticated() && <NavItem eventKey={1}>
            <Link to="/login">Login</Link>
          </NavItem>}
          { !Auth.isAuthenticated() && <NavItem eventKey={2}>
            <Link to="/register">Register</Link>
          </NavItem>}
          { Auth.isAuthenticated() && <NavItem eventKey={3}>
            <a href="#" onClick={logout}>Logout</a>
          </NavItem>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(MyNavbar);
