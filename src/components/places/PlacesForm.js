import React from 'react';
import { Grid, Col, FormGroup, Button } from 'react-bootstrap';

function PlacesForm({ handleSubmit, handleChange, place, errors }) {

  const formInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <Grid>
      <Col onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="name"
            name="name"
            value={place.name}
            onChange={handleChange}
          />
          {errors.name && <small>{errors.name}</small>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            value={place.image}
            onChange={handleChange}
          />
          {errors.image && <small>{errors.image}</small>}
        </FormGroup>
        <Button disabled={formInvalid}>Save</Button>
      </Col>
    </Grid>
  );
}

export default PlacesForm;
