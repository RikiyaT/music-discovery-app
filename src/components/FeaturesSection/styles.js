import styled from 'styled-components';

export const Container = styled.section`
  padding: 4rem 2rem;
  background-color: #ffffff;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  color: #222222;
  text-align: center;
  margin-bottom: 2rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  flex: 1;
  max-width: 300px;
  padding: 1.5rem;
  margin: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Icon = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  color: #222222;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #555555;
  margin-bottom: 0.5rem;
`;
