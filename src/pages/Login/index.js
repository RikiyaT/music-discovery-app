import React from 'react';
import { Container, LoginForm, Logo, Input, Button } from './styles';

// Replace with your own logo
import logo from '../../assets/images/logo.svg';

const Login = () => {
  return (
    <Container>
      <LoginForm>
        <Logo src={logo} alt="Logo" />
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Button type="submit">Log in</Button>
      </LoginForm>
    </Container>
  );
};

export default Login;
