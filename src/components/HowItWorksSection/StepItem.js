import React from 'react';
import { Item, StepNumber, StepTitle, StepDescription } from './styles';

const StepItem = ({ number, title, description }) => {
  return (
    <Item>
      <StepNumber>{number}</StepNumber>
      <StepTitle>{title}</StepTitle>
      <StepDescription>{description}</StepDescription>
    </Item>
  );
};

export default StepItem;
