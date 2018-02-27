import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// import Auth from '../../lib/Auth';

class EntriesIndex extends React.Component {
  state = {
    entries: []
  }

  componentWillMount() {
    Axios
      .get('/api/entries')
      .then(res => this.setState({ entries: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Link to="/entries/new" className="main-button">
              <i className="fa fa-plus" aria-hidden="true"></i>Add Place
            </Link>
          </div>
          {this.state.entries.map(entry => {
            return(
              <div key={entry.id} className="col-md-4 col-sm-6 col-xs-12">
                <Link to={`/entries/${entry.id}`}>
                  <img src={entry.image} className="img-responsive" />
                </Link>
                <p>{entry.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default EntriesIndex;
