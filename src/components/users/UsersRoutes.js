import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UsersShow from './UsersShow';

const UsersRoutes = () => {
  return (
    <Switch>
      <Route path="/users/:id" component={UsersShow} />
    </Switch>
  );
};

export default UsersRoutes;
