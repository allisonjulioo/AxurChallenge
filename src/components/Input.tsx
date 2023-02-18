import styled from 'styled-components';

export const Input = styled.input`
  background: ${({ theme }) => theme.background.default};
  color: ${({ theme }) => theme.typography.color};
  border: 1px solid ${({ theme }) => theme.palette.grey.main};

  outline: 0;
  padding: 22px 18px;
  border-radius: ${({ theme }) => theme.radius};
`;
