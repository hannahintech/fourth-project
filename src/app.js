import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import PlacesRoutes from './components/places/PlacesRoutes';

import 'bootstrap-css-only';
// import 'font-awesome/css/font-awesome.css';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return(
      <Router>
        <div className="container">
          <header>
            <h1><Link to="/">Place Notes</Link></h1>
          </header>
          <main>
            <PlacesRoutes />
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
