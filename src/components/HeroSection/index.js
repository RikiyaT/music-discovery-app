import React from 'react';
import {
  Container,
  Heading,
  Subheading,
  SearchContainer,
  SearchInput,
  SearchButton,
  SignUpButton,
} from './styles';

const HeroSection = () => {
  return (
    <Container>
      <Heading>Discover Music You'll Love</Heading>
      <Subheading>Find new songs based on your listening history.</Subheading>
      <SearchContainer>
        <SearchInput type="text" placeholder="Search for songs, artists, or albums..." />
        <SearchButton>Search</SearchButton>
      </SearchContainer>
      <SignUpButton>Sign Up</SignUpButton>
    </Container>
  );
};

export default HeroSection;
