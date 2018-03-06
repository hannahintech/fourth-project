import React from 'react';
import { Grid, FormGroup, FormControl, Checkbox, Button, Thumbnail } from 'react-bootstrap';
import ReactFilestack from 'filestack-react';

import keys from '../../lib/publicKeys';

import Autocomplete from 'react-google-autocomplete';

function PlacesForm({ handleSubmit, handleInputChange, handleCheckboxChange, place, errors, handleLocationChange, handleImageChange }) {

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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          /> */}
          <Autocomplete
            style={{width: '100%'}}
            onPlaceSelected={handleLocationChange}
            types={[]}
          />
          {errors.name && <small>{errors.name}</small>}
        </FormGroup>
        <FormGroup>
          {/* <label htmlFor="image">Image</label>
          <FormControl
            type="text"
            id="image"
            name="image"
            value={place.image}
            onChange={handleInputChange}
          />
          {errors.image && <small>{errors.image}</small>} */}
          <ReactFilestack
            apikey={keys.FILESTACK_API_KEY}
            buttonText="Add image"
            onSuccess={handleImageChange}
          />
          <Thumbnail className="form-image-preview" src={place.image} />
        </FormGroup>
        <FormGroup>
          <label htmlFor="notes">Notes</label>
          <FormControl
            componentClass="textarea"
            type="text"
            id="notes"
            name="notes"
            value={place.notes}
            onChange={handleInputChange}
          />
          {errors.notes && <small>{errors.notes}</small>}
        </FormGroup>
        <Checkbox
          checked={place.publicPlace}
          id="publicPlace"
          name="publicPlace"
          value={place.publicPlace}
          onChange={handleCheckboxChange}
        >
          make public
        </Checkbox>
        <Button bsStyle="info" type="submit" disabled={formInvalid}>Save</Button>
      </form>
    </Grid>
  );
}

export default PlacesForm;
