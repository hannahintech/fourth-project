import React from 'react';
import { Grid, FormGroup, FormControl, Button } from 'react-bootstrap';

const LoginForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <Grid>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
          />
        </FormGroup>
        <Button type="submit" bsStyle="info">Login</Button>
      </form>
    </Grid>
  );
};

export default LoginForm;
