import React from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
          { Auth.isAuthenticated() &&
            <LinkContainer to={`/users/${Auth.getPayload().userId}`}>
              <NavItem eventKey={1}>Profile</NavItem>
            </LinkContainer>
          }
        </Nav>
        <Nav pullRight>
          { !Auth.isAuthenticated() &&
            <LinkContainer to="/login">
              <NavItem eventKey={1}>Login</NavItem>
            </LinkContainer>
          }
          { !Auth.isAuthenticated() &&
            <LinkContainer to="/register">
              <NavItem eventKey={2}>Register</NavItem>
            </LinkContainer>
          }
          { Auth.isAuthenticated() &&
          <NavItem eventKey={3} href="#" onClick={logout}>
            Logout
          </NavItem>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(MyNavbar);
