import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1em;
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme }) => theme.common.white};

  &:hover {
    box-shadow: 0 3px 3px 0 rgb(51 51 51 / 3%);
  }
`;
