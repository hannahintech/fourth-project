import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import PlacesRoutes from './components/places/PlacesRoutes';
import UsersRoutes from './components/users/UsersRoutes';
import Login       from './components/auth/Login';
import Register    from './components/auth/Register';
import Navbar      from './components/utility/Navbar';
import LandingPage from './components/utility/LandingPage';

import 'bootstrap-css-only';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return(
      <Router>
        <div className="container">
          <header>
            <h1><Link to="/places">Place Notes</Link></h1>
            <Navbar />
          </header>
          <main>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PlacesRoutes />
            <UsersRoutes />
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
