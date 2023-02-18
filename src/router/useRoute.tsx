import { routes } from './routes';

const useRoute = (id: string) => {
  const { state } = routes.find(route => route.id === id)!;

  return { state };
};

export { useRoute };
