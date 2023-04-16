import styled from 'styled-components';

export const Container = styled.section`
  padding: 4rem 2rem;
  background-color: #f2f2f2;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  color: #222222;
  text-align: center;
  margin-bottom: 2rem;
`;

export const StepsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled.div`
  flex: 1;
  max-width: 300px;
  padding: 1.5rem;
  margin: 1rem;
  text-align: center;
`;

export const StepNumber = styled.div`
  font-size: 3rem;
  color: #3db46d;
  margin-bottom: 0.5rem;
`;

export const StepTitle = styled.h3`
  font-size: 1.25rem;
  color: #222222;
  margin-bottom: 0.5rem;
`;

export const StepDescription = styled.p`
  font-size: 1rem;
  color: #555555;
`;