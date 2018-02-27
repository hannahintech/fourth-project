import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PlacesIndex from './PlacesIndex';

const PlacesRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={PlacesIndex} />
    </Switch>
  );
};

export default PlacesRoutes;
