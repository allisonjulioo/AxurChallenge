import { DetailCrawler } from 'modules/Crawler/views/Detail';
import { ListCrawler } from 'modules/Crawler/views/List';
import NotFound from 'views/404';

const routes = [
  /**
   * @Crawler
   */
  {
    id: 'CRAWLER_LIST',
    state: {
      title: 'routes.crawler.list',
      label: 'routes.crawler.label',
      visible: true,
      back: false,
    },
    pathname: '/',
    element: ListCrawler,
    exact: true,
  },
  {
    id: 'CRAWLER_REGISTER',
    state: {
      title: 'routes.crawler.detail',
      label: 'routes.crawler.label',
      visible: false,
      back: true,
    },
    pathname: '/:id',
    element: DetailCrawler,
    exact: true,
  },
  /**
   * @NotFound
   */
  {
    id: 'NOT_FOUND',
    state: {
      title: 'routes.404',
      label: 'routes.404',
      visible: false,
      back: false,
    },
    pathname: '*',
    element: NotFound,
    exact: true,
  },
];

export { routes };
