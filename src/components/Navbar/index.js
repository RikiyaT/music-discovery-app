import React from 'react';
import { Container, Logo, Menu, MenuItem } from './styles';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Container>
      <Logo>NewSound</Logo>
      <Menu>
        <MenuItem href="#home">Home</MenuItem>
        <MenuItem href="#features">Features</MenuItem>
        <MenuItem href="#how-it-works">How it works</MenuItem>
        <MenuItem href="#testimonials">Testimonials</MenuItem>
        <MenuItem>
          <Link to="/login">Login</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/discover">Discover</Link>
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Navbar;
