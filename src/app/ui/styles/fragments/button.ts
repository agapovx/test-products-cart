import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  color: ${props => props.color || '#000'};
  max-width: 200px;

  font-size: .70rem;
  padding: 5px 10px;

  border: 1px solid black;

  cursor: pointer;

  &:disabled {
    opacity: .3;
    cursor: default;
  }
`;