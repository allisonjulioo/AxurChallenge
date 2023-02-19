import { Badge } from 'components/Badge';
import { Card } from 'components/Card';
import { differenceInMinutes, format } from 'date-fns';
import { motion } from 'framer-motion';
import { CrawlerState } from 'modules/Crawler/store/action-types';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemCrawled = styled(Card)`
  cursor: pointer;
  margin-bottom: 0.5em;
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpointMD}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  strong {
    font-size: 1.4em;
    line-height: 1;
    text-align: right;

    @media (max-width: ${({ theme }) => theme.breakpointMD}) {
      display: none;
    }
  }
  span {
    padding-left: 0.2em;
  }
`;

const ItemCrawler: FC<{ crawl: CrawlerState; delay: number }> = ({
  crawl,
  delay,
}) => {
  return (
    <motion.div
      key={crawl.id}
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 60, opacity: 0 }}
      transition={{ duration: 0.4, delay: delay / 10 }}
    >
      <Link to={`/${crawl.id}`}>
        <ItemCrawled>
          <span>{crawl.keyword}</span>
          <span>{crawl.id}</span>
          <Badge text={crawl.status} />
          <span>{crawl.urls?.length} urls</span>
          <span>{format(new Date(crawl.created_at), 'dd/MM HH:mm ')}</span>
          <span>
            {differenceInMinutes(
              new Date(crawl.updated_at),
              new Date(crawl.created_at),
            )}
            min
          </span>
          <strong>›</strong>
        </ItemCrawled>
      </Link>
    </motion.div>
  );
};
export { ItemCrawler };
