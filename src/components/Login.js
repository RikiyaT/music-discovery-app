import React from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #4a4a4a;
  margin-bottom: 2rem;
`;

const LoginButton = styled.button`
  font-size: 1rem;
  padding: 12px 24px;
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #1ed760;
  }
`;

const Login = () => {
  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <LoginWrapper>
      <Title>Welcome to Song Discovery App</Title>
      <LoginButton onClick={handleLogin}>Log in with Spotify</LoginButton>
    </LoginWrapper>
  );
};

export default Login;
