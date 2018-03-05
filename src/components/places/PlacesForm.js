import React from 'react';
import { Grid, FormGroup, FormControl, Checkbox, Button } from 'react-bootstrap';
import ReactFilestack from 'filestack-react';

// import SearchBox from '../maps/SearchBox';
import Autocomplete from 'react-google-autocomplete';

function PlacesForm({ handleSubmit, handleChange, handleCheck, place, errors, handleLocationChange }) {

  const formInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <Grid>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <FormControl
            type="text"
            id="name"
            name="name"
            value={place.name}
            onChange={handleChange}
          />
          {errors.name && <small>{errors.name}</small>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="location">Location</label>
          {/* <FormControl
            type="text"
            id="name"
            name="name"
            value={place.name}
            onChange={handleChange}
          /> */}
          <Autocomplete
            style={{width: '100%'}}
            onPlaceSelected={handleLocationChange}
            types={[]}
          />
          {errors.name && <small>{errors.name}</small>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="image">Image</label>
          <FormControl
            type="text"
            id="image"
            name="image"
            value={place.image}
            onChange={handleChange}
          />
          {errors.image && <small>{errors.image}</small>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="notes">Notes</label>
          <FormControl
            componentClass="textarea"
            type="text"
            id="notes"
            name="notes"
            value={place.notes}
            onChange={handleChange}
          />
          {errors.notes && <small>{errors.notes}</small>}
        </FormGroup>
        <Checkbox
          id="publicPlace"
          name="publicPlace"
          value={place.publicPlace}
          onChange={handleCheck}
        >
          Public post
        </Checkbox>
        <Button bsStyle="success" type="submit" disabled={formInvalid}>Save</Button>
      </form>
    </Grid>
  );
}

export default PlacesForm;
