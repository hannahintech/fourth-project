import React from 'react';
import { Grid, FormGroup, FormControl, Checkbox, Button } from 'react-bootstrap';

const RegisterForm = ({ handleChange, handleSubmit, user, errors }) => {
  const formInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <Grid>
      <form onSubmit={handleSubmit}>
        <FormGroup className="form-group">
          <FormControl
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            value={user.firstname}
          />
          {errors.name && <p><small>{errors.name}</small></p>}
        </FormGroup>
        <FormGroup className="form-group">
          <FormControl
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            value={user.lastname}
          />
          {errors.name && <p><small>{errors.name}</small></p>}
        </FormGroup>
        <FormGroup className="form-group">
          <FormControl
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={user.username}
          />
          {errors.name && <p><small>{errors.name}</small></p>}
        </FormGroup>
        <FormGroup className="form-group">
          <FormControl
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
          />
          {errors.name && <p><small>{errors.name}</small></p>}
        </FormGroup>
        <FormGroup className="form-group">
          <FormControl
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
          />
          {errors.name && <p><small>{errors.name}</small></p>}
        </FormGroup>
        <FormGroup className="form-group">
          <FormControl
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={user.passwordConfirmation}
          />
          {errors.name && <p><small>{errors.name}</small></p>}
        </FormGroup>

        <Button type="submit" bsStyle="info" disabled={formInvalid}>Register</Button>
      </form>
    </Grid>

  );
};

export default RegisterForm;
