import React from 'react';
import { Container, Heading, TestimonialsContainer } from './styles';
import TestimonialItem from './TestimonialItem';

const testimonialsData = [
  {
    quote: 'This app helped me discover so many new songs I absolutely love!',
    author: 'Jane Doe',
    authorInfo: 'Music Enthusiast',
  },
  {
    quote: 'I love how easy it is to navigate and find new music on this app.',
    author: 'John Smith',
    authorInfo: 'Audiophile',
  },
  {
    quote: 'The personalized recommendations are spot on!',
    author: 'Emma Johnson',
    authorInfo: 'Casual Listener',
  },
];

const TestimonialsSection = () => {
  return (
    <Container id="testimonials">
      <Heading>Testimonials</Heading>
      <TestimonialsContainer>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialItem key={index} {...testimonial} />
        ))}
      </TestimonialsContainer>
    </Container>
  );
};

export default TestimonialsSection;
