import React from 'react';
import { Switch, Route } from 'react-router-dom';

import EntriesIndex from './EntriesIndex';

const EntriesRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={EntriesIndex} />
    </Switch>
  );
};

export default EntriesRoutes;
