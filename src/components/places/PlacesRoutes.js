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
      <ProtectedRoute path="/places/:id/edit" component={PlacesEdit} />
      <ProtectedRoute path="/places/new" component={PlacesNew} />
      <Route path="/places/:id" component={PlacesShow} />
      <Route path="/places" component={PlacesIndex} />
    </Switch>
  );
};

export default PlacesRoutes;
