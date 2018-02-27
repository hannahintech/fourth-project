import React from 'react';

function PlacesForm({ handleSubmit, handleChange, place, errors }) {

  const formInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <div className="row">
      <div className="page-banner col-md-12">
      </div>
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={place.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error"><small>{errors.name}</small></p>}
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={place.image}
            onChange={handleChange}
          />
          {errors.image && <p className="error"><small>{errors.image}</small></p>}
        </div>
        <div>
          <button className="save-button" disabled={formInvalid}>Save</button>
        </div>
      </form>
    </div>
  );
}

export default PlacesForm;
