import { FC } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

type Status = {
  [x: string]: {
    label: string;
    variant: string;
  };
};

const BadgeContent = styled.small<{ variant: string }>`
  display: table;
  background: ${({ theme, variant }) =>
    lighten(0.4, theme.palette[variant as keyof typeof theme.palette].main)};
  color: ${({ theme, variant }) =>
    theme.palette[variant as keyof typeof theme.palette].main};
  padding: 4px 6px;
  border-radius: ${({ theme }) => theme.radius};
  font-size: 12px;
`;

const status: Status = {
  error: {
    label: 'Não executado',
    variant: 'error',
  },
  done: {
    label: 'Concluído',
    variant: 'success',
  },
  active: {
    label: 'Em andamento',
    variant: 'primary',
  },
};

const Badge: FC<{ text?: string }> = ({ text }) => {
  const badge = status[text ?? 'error'];
  return (
    <div>
      <BadgeContent variant={badge.variant}>{badge.label}</BadgeContent>
    </div>
  );
};

export { Badge };
