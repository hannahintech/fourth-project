import React from 'react';
import { Grid, Col, FormGroup, Button } from 'react-bootstrap';

const LoginForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <Grid>
      <Col md={5} onSubmit={handleSubmit}>
        <FormGroup>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
            className="form-control"
          />
        </FormGroup>
        <Button bsStyle="success">Login</Button>
      </Col>
    </Grid>
  );
};

export default LoginForm;
