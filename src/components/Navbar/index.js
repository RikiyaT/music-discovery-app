import React from 'react';
import { Container, Logo, Menu, MenuItem, LoginButton } from './styles';

const Navbar = () => {
  return (
    <Container>
      <Logo>AppName</Logo>
      <Menu>
        <MenuItem href="#home">Home</MenuItem>
        <MenuItem href="#features">Features</MenuItem>
        <MenuItem href="#how-it-works">How it works</MenuItem>
        <MenuItem href="#testimonials">Testimonials</MenuItem>
      </Menu>
      <LoginButton>Login</LoginButton>
    </Container>
  );
};

export default Navbar;
