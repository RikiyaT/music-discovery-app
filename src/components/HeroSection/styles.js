import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
  padding: 0 2rem;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  color: #222222;
  margin-bottom: 1rem;
`;

export const Subheading = styled.p`
  font-size: 1.25rem;
  color: #555555;
  margin-bottom: 2rem;
  text-align: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #222222;
  border: 1px solid #cccccc;
  border-radius: 4px 0 0 4px;
  outline: none;
`;

export const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: #3db46d;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    background-color: #2ea256;
  }
`;

export const SignUpButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: #3db46d;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2ea256;
  }
`;
