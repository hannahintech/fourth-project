import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from '../utility/ProtectedRoute';

import PlacesIndex from './PlacesIndex';
import PlacesShow from './PlacesShow';
import PlacesEdit from './PlacesEdit';
import PlacesNew from './PlacesNew';

const PlacesRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={PlacesIndex} />
      <ProtectedRoute path="/places/new" name="Rane" component={PlacesNew} />
      <ProtectedRoute path="/places/:id/edit" component={PlacesEdit} />
      <Route path="/places/:id" component={PlacesShow} />
    </Switch>
  );
};

export default PlacesRoutes;
