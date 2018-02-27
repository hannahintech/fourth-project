import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PlacesIndex from './PlacesIndex';
import PlacesShow from './PlacesShow';
import PlacesEdit from './PlacesEdit';
import PlacesNew from './PlacesNew';

const PlacesRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={PlacesIndex} />
      <Route path="/places/new" name="Rane" component={PlacesNew} />
      <Route path="/places/:id/edit" component={PlacesEdit} />
      <Route path="/places/:id" component={PlacesShow} />
    </Switch>
  );
};

export default PlacesRoutes;
