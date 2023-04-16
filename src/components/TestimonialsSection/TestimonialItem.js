import React from 'react';
import { Item, Quote, Author, AuthorInfo } from './styles';

const TestimonialItem = ({ quote, author, authorInfo }) => {
  return (
    <Item>
      <Quote>&ldquo;{quote}&rdquo;</Quote>
      <Author>{author}</Author>
      <AuthorInfo>{authorInfo}</AuthorInfo>
    </Item>
  );
};

export default TestimonialItem;
