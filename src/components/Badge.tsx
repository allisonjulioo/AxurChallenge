import { darken, lighten } from 'polished';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

type Status = {
  [x: string]: {
    label: string;
    variant: string;
  };
};

const BadgeContent = styled.small<{ variant: string }>`
  display: table;
  background: ${({ theme, variant }) =>
    lighten(0.3, theme.palette[variant as keyof typeof theme.palette].main)};
  color: ${({ theme, variant }) =>
    darken(0.2, theme.palette[variant as keyof typeof theme.palette].main)};
  padding: 4px 6px;
  border-radius: ${({ theme }) => theme.radius};
  font-size: 12px;
`;

const status: Status = {
  error: {
    label: 'components.badge.error',
    variant: 'error',
  },
  done: {
    label: 'components.badge.done',
    variant: 'success',
  },
  active: {
    label: 'components.badge.active',
    variant: 'primary',
  },
};

const Badge: FC<{ text?: string }> = ({ text }) => {
  const { t } = useTranslation();

  const badge = status[text ?? 'error'];
  return (
    <div>
      <BadgeContent variant={badge.variant}>{t(badge.label)}</BadgeContent>
    </div>
  );
};

export { Badge };
