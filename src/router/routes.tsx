import { ListCrawler } from "modules/Crawler/views/List";
import { RegisterCrawler } from "modules/Crawler/views/Register";
import NotFound from "views/404";

const routes = [
  /**
   * @Crawler
   */
  {
    key: "CRAWLER_LIST",
    state: {
      title: "routes.crawler.list",
      label: "routes.crawler.label",
    },
    path: "/",
    element: ListCrawler,
    exact: true,
  },
  {
    key: "CRAWLER_REGISTER",
    state: {
      title: "routes.crawler.register",
      label: "routes.crawler.label",
    },
    path: "/f",
    element: RegisterCrawler,
    exact: true,
  },
  /**
   * @NotFound
   */
  {
    key: "NOT_FOUND",
    state: {
      title: "routes.404",
      label: "routes.404",
    },
    path: "*",
    element: NotFound,
    exact: true,
  },
];

export { routes };
