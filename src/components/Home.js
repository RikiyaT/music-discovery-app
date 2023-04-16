import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #191414;
  color: #ffffff;
`;

const AppHeader = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const AppDescription = styled.p`
  font-size: 18px;
  max-width: 500px;
  text-align: center;
  margin-bottom: 40px;
`;

const LoginButton = styled.button`
  background-color: #1db954;
  border: none;
  border-radius: 25px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 30px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1ed760;
  }
`;

const Home = () => {
  const handleLogin = () => {
    // Implement the login logic with Spotify OAuth here.
  };

  return (
    <HomeContainer>
      <AppHeader>Song Discovery App</AppHeader>
      <AppDescription>
        Discover new songs you'll love, based on your listening history on Spotify. Connect your account to get started!
      </AppDescription>
      <LoginButton onClick={handleLogin}>Connect with Spotify</LoginButton>
    </HomeContainer>
  );
};

export default Home;
