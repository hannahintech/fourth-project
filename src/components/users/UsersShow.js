import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';

class UsersShow extends React.Component {

  state = {
    user: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }


  render(){
    return(
      <section>
        <h1>{this.state.user.username}</h1>
      </section>
    );
  }
}

export default UsersShow;
