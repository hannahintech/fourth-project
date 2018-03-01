import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import PlacesRoutes from './components/places/PlacesRoutes';
import UsersRoutes from './components/users/UsersRoutes';
import Login       from './components/auth/Login';
import Register    from './components/auth/Register';
import MyNavbar      from './components/utility/MyNavbar';
import LandingPage from './components/utility/LandingPage';

import './scss/style.scss';

class App extends React.Component {

  render() {
    return(
      <Router>
        <div>
          <header>
            <MyNavbar />
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
