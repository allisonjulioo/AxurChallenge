import styled from 'styled-components';

export const Input = styled.input`
  background: ${({ theme }) => theme.common.white};
  color: ${({ theme }) => theme.typography.color};
  border: 1px solid ${({ theme }) => theme.palette.grey.main};
  outline: 0;
  padding: 1em 0.5em;
  border-radius: ${({ theme }) => theme.radius};
`;
