import React from 'react';
import { Container, Heading, CardsContainer } from './styles';
import FeatureCard from './FeatureCard';

// Replace with your own icons
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';

const featuresData = [
  {
    icon: Icon1,
    title: 'Personalized Recommendations',
    description: 'Get song suggestions tailored to your music taste.',
  },
  {
    icon: Icon2,
    title: 'Diverse Genres',
    description: 'Explore a wide range of genres and styles.',
  },
  {
    icon: Icon3,
    title: 'User-friendly Interface',
    description: 'Navigate and discover new music with ease.',
  },
];

const FeaturesSection = () => {
  return (
    <Container id="features">
      <Heading>Features</Heading>
      <CardsContainer>
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default FeaturesSection;
