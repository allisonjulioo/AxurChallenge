import { routes } from './routes';

const useRoute = (id: string) => {
  const route = routes.find(route => route.id === id)!;

  const state = route?.state;

  return { state };
};

export { useRoute };
