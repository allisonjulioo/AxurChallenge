import { Card } from 'components/Card';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GridCrawled = styled(Card)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ItemCrawled = styled(GridCrawled)`
  cursor: pointer;
  margin-bottom: 0.5em;
  strong {
    font-size: 1.4em;
    line-height: 1;
    text-align: right;
  }
  span {
    padding-left: 0.4em;
    overflow-wrap: anywhere;
  }
`;

const LinkCard: FC<{ url: string }> = ({ url }) => {
  return (
    <Link to={url} target='_blank'>
      <ItemCrawled>
        <span>{url}</span>
        <strong>›</strong>
      </ItemCrawled>
    </Link>
  );
};

export { LinkCard };
