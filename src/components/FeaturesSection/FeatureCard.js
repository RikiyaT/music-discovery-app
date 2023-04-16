import React from 'react';
import { Card, Icon, Title, Description } from './styles';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card>
      <Icon src={icon} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default FeatureCard;
