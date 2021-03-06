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
      { Auth.isAuthenticated() &&
      <Navbar.Brand>
        <div className="brand-logo"></div>
      </Navbar.Brand> 
      }
      <Navbar.Header>
        { Auth.isAuthenticated() &&
        <Navbar.Brand>
          <LinkContainer to="/places">
            <a href="#">Place Notes</a>
          </LinkContainer>
        </Navbar.Brand>
        }
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
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
        <Nav pullRight>
          { Auth.isAuthenticated() &&
            <LinkContainer to={`/users/${Auth.getPayload().userId}`}>
              <NavItem eventKey={1}>Profile</NavItem>
            </LinkContainer>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(MyNavbar);
