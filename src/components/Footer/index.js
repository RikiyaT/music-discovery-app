import React from 'react';
import {
  Container,
  FooterContent,
  Logo,
  NavLinks,
  NavLink,
  SocialLinks,
  SocialLink,
} from './styles';

// Replace with your own logo
import logo from '../../assets/images/logo.svg';

const Footer = () => {
  return (
    <Container>
      <FooterContent>
        <Logo src={logo} alt="Logo" />
        <NavLinks>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
        </NavLinks>
        <SocialLinks>
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">
            Facebook
          </SocialLink>
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">
            Twitter
          </SocialLink>
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">
            Instagram
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </Container>
  );
};

export default Footer;
