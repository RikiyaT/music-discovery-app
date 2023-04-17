import styled from 'styled-components';

export const Container = styled.footer`
  padding: 2rem;
  background-color: #222222;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 1rem;
`;

export const NavLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const NavLink = styled.a`
  font-size: 1rem;
  color: #ffffff;
  margin: 0 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SocialLink = styled.a`
  font-size: 1rem;
  color: #ffffff;
  margin: 0 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
