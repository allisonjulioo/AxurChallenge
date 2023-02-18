import { DetailCrawler } from 'modules/Crawler/views/Detail';
import { ListCrawler } from 'modules/Crawler/views/List';
import NotFound from 'views/404';

const routes = [
  /**
   * @Crawler
   */
  {
    key: 'CRAWLER_LIST',
    state: {
      title: 'routes.crawler.list',
      label: 'routes.crawler.label',
    },
    pathname: '/',
    element: ListCrawler,
    exact: true,
  },
  {
    key: 'CRAWLER_REGISTER',
    state: {
      title: 'routes.crawler.register',
      label: 'routes.crawler.label',
    },
    pathname: '/:id',
    element: DetailCrawler,
    exact: true,
  },
  /**
   * @NotFound
   */
  {
    key: 'NOT_FOUND',
    state: {
      title: 'routes.404',
      label: 'routes.404',
    },
    pathname: '*',
    element: NotFound,
    exact: true,
  },
];

export { routes };
