import React from 'react';
import { Container, Heading, StepsContainer } from './styles';
import StepItem from './StepItem';

const stepsData = [
  {
    number: '1',
    title: 'Connect with Spotify',
    description: 'Sign in with your Spotify account to sync your listening history.',
  },
  {
    number: '2',
    title: 'Get Recommendations',
    description: 'Receive a curated list of songs based on your music preferences.',
  },
  {
    number: '3',
    title: 'Discover New Music',
    description: 'Explore the recommendations and discover new songs you\'ll love.',
  },
];

const HowItWorksSection = () => {
  return (
    <Container id="how-it-works">
      <Heading>How It Works</Heading>
      <StepsContainer>
        {stepsData.map((step, index) => (
          <StepItem key={index} {...step} />
        ))}
      </StepsContainer>
    </Container>
  );
};

export default HowItWorksSection;
