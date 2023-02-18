import { useCrawler } from 'modules/Crawler/hooks/useCrawler';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailCrawler = () => {
  const { id } = useParams<{ id: string }>();

  const { getCrawlById } = useCrawler();

  useEffect(() => {
    if (id) getCrawlById(id);
  }, [getCrawlById, id]);

  return (
    <div>
      <h4>teste</h4>
    </div>
  );
};

export { DetailCrawler };
