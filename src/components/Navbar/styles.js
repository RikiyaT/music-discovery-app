import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: #ffffff;
  height: 80px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: #222222;
  cursor: pointer;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.a`
  margin-left: 1.5rem;
  text-decoration: none;
  color: #222222;
  cursor: pointer;

  &:hover {
    color: #555555;
  }
`;
