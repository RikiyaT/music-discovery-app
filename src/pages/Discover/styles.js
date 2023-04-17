import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
`;

export const SearchBar = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  input {
    width: 100%;
    max-width: 600px;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #cccccc;
    border-radius: 4px;
  }

  button {
    padding: 0.5rem;
    margin-left: 1rem;
    font-size: 1rem;
    color: #ffffff;
    background-color: #3db46d;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #36a163;
    }
  }
`;

export const Results = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const SongCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }

  h3 {
    margin: 1rem 0;
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 0;
    font-size: 1rem;
    color: #777;
  }
`;
